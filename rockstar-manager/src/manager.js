import {generateText} from "./providers.js";
import {workflow} from "./workflows.js";
import {needsApproval} from "./policy.js";

const system = `You are the TMS Rockstar Manager. Complete the assigned work rather than returning only a plan.
Work autonomously on drafting, analysis, and local deliverables. Use the TMS B.O.S.S. standard: Better Outcome, Operating Context, Specific Standards, Self-check and improve.
Use only facts supplied in the job or clearly label assumptions. Never invent customer results, sales, views, testimonials, product capabilities, or research sources.
Do not publish, send external messages, purchase, change billing/accounts/security/domains/payments, or delete data. Prepare those actions and mark them as requiring Chuck's approval.
Return the completed deliverable first, followed by a concise acceptance check, assumptions, and any blocked external action.`;

export class RockstarManager {
  plan(j) {
    return {...j, status: "PLANNED", steps: workflow(j.type)};
  }

  gate(action) {
    return {action, approvalRequired: needsApproval(action)};
  }

  async run(j, options = {}) {
    const planned = this.plan(j);
    const result = await generateText({
      system,
      user: JSON.stringify({
        assignment: planned.outcome,
        jobType: planned.type,
        TMSContext: planned.context,
        requiredWorkflow: planned.steps,
        instruction: "Do the work now. Return the finished draft or analysis, not a plan to do it later."
      }),
      env: options.env || process.env,
      fetchImpl: options.fetchImpl || fetch
    });
    return {
      ...planned,
      status: "COMPLETED_DRAFT",
      deliverable: result.text,
      model: result.model,
      usage: result.usage,
      externalActionsPerformed: [],
      approvalsRequired: ["publish", "spend", "external_send"],
      truth: {published: false, spent: false, externalActionsPerformed: false}
    };
  }

  ready(j, result) {
    return {...j, status: "READY_FOR_REVIEW", result, truth: {published: false, spent: false}};
  }
}
