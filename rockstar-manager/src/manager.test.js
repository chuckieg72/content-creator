import test from "node:test";
import assert from "node:assert/strict";
import {job} from "./jobs.js";
import {RockstarManager} from "./manager.js";
import {authorize, needsApproval} from "./policy.js";

test("manager completes a content job through the model adapter and returns a draft", async () => {
  let request;
  const manager = new RockstarManager();
  const result = await manager.run(job("content_marketing", "Draft a 3-post creator launch package"), {
    env: {OPENAI_API_KEY: "test-only", OPENAI_MODEL: "gpt-5-mini"},
    fetchImpl: async (url, options) => {
      request = {url, options, body: JSON.parse(options.body)};
      return new Response(JSON.stringify({
        output_text: "Three draft posts.",
        usage: {input_tokens: 20, output_tokens: 10}
      }), {status: 200, headers: {"content-type": "application/json"}});
    }
  });
  assert.equal(request.url, "https://api.openai.com/v1/responses");
  assert.equal(request.options.headers.Authorization, "Bearer test-only");
  assert.equal(request.body.store, false);
  assert.match(request.body.input[1].content[0].text, /Draft a 3-post/);
  assert.equal(result.status, "COMPLETED_DRAFT");
  assert.equal(result.deliverable, "Three draft posts.");
  assert.deepEqual(result.truth, {published: false, spent: false, externalActionsPerformed: false});
});

test("manager fails clearly when model credentials are absent", async () => {
  const manager = new RockstarManager();
  await assert.rejects(
    manager.run(job("content_marketing", "Draft a post"), {env: {}, fetchImpl: async () => { throw new Error("network should not run"); }}),
    /MISSING_SECRET:OPENAI_API_KEY/
  );
});

test("publishing and spending stay behind approval", () => {
  assert.equal(needsApproval("publish"), true);
  assert.equal(needsApproval("spend"), true);
  assert.throws(() => authorize("publish"), /APPROVAL_REQUIRED:publish/);
  assert.throws(() => authorize("spend"), /APPROVAL_REQUIRED:spend/);
  assert.equal(authorize("draft"), true);
});
