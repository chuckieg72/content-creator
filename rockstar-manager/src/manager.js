import {needsApproval} from "./policy.js";
export class RockstarManager{plan(j){return {...j,status:"PLANNED",steps:["INSPECT","PLAN","EXECUTE","CHECK","CORRECT","PREPARE","MEASURE","LEARN"]}}gate(action){return {action,approvalRequired:needsApproval(action)}}ready(j,result){return {...j,status:"READY",result,truth:{published:false,spent:false}}}}
