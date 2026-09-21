export const types=["product_research","product_development","content_marketing","free_traffic","social_content","video_production","launch_followup"];
export function job(type,outcome,context={}){if(!types.includes(type))throw new Error("UNKNOWN_JOB");return {id:"tms-"+Date.now(),type,outcome,context,status:"ASSIGNED",verified:[],unverified:[],approvals:[],metrics:{},lessons:[]}}
