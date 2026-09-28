const gated=new Set(["publish","spend","purchase","subscribe","billing","delete","domain","payment","security","external_send","contract"]);
export const needsApproval=a=>gated.has(a);
export function authorize(a,approved=false){if(needsApproval(a)&&!approved)throw new Error("APPROVAL_REQUIRED:"+a);return true}
