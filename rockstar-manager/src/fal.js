import {fal} from "@fal-ai/client";import {secret} from "./config.js";import {authorize} from "./policy.js";
export function falClient(env=process.env){fal.config({credentials:secret("FAL_KEY",env)});return fal}
export async function generate(model,input,{approvedSpend=false,env=process.env}={}){authorize("spend",approvedSpend);return falClient(env).subscribe(model,{input,logs:true})}
