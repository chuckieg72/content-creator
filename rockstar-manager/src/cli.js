import {mkdir, writeFile} from "node:fs/promises";
import {join} from "node:path";
import {job} from "./jobs.js";
import {RockstarManager} from "./manager.js";

function args(argv) {
  const values = [...argv];
  let type = "content_marketing";
  if (values[0] === "--type") {
    type = values[1];
    values.splice(0, 2);
  }
  const outcome = values.join(" ").trim();
  if (!outcome) throw new Error('USAGE: npm run job -- "describe the work to complete" [--type job_type]');
  return {type, outcome};
}

try {
  const {type, outcome} = args(process.argv.slice(2));
  const manager = new RockstarManager();
  const completed = await manager.run(job(type, outcome));
  await mkdir("output", {recursive: true});
  const file = join("output", `${completed.id}.json`);
  await writeFile(file, JSON.stringify(completed, null, 2), {flag: "wx"});
  console.log(JSON.stringify({status: completed.status, file, model: completed.model, usage: completed.usage}, null, 2));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
