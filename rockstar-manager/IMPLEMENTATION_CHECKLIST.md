# Implementation Checklist

## Completed on foundation branch
- [x] Preserve existing TMS operating instructions and free-traffic engine
- [x] Provider-neutral core
- [x] ChatGPT / Claude / Gemini / Grok configuration contract
- [x] Product research/development workflows
- [x] Content/small-business marketing workflow
- [x] Free/organic traffic workflow
- [x] Social content workflow
- [x] Video-production workflow
- [x] Launch follow-up + measurable metrics
- [x] Shift/learning report
- [x] Approval gates
- [x] fal.ai adapter using environment-only FAL_KEY
- [x] .gitignore prevents local secret commits

## Pending agent runtime work
- [ ] Select/identify the backend runtime/host; none is verified yet
- [ ] Add the existing TMS Video Agent secret in that host's private secret manager as FAL_KEY (never in chat, Git, or a public deployment)
- [ ] Install dependencies and run the health check in the selected runtime
- [ ] Verify fal.ai with a no-spend capability/auth check if supported; otherwise stop before paid generation and request approval
- [ ] Configure direct LLM API credentials only if needed; connected ChatGPT can remain the manager host
- [ ] Connect and verify publishing channels individually before any public action

## Separate web-launch issue (not an agent-readiness blocker)
- [ ] Rework the local homepage draft before any launch: it follows older AI Boss funnel notes, its offer path is mismatched, and its email contact is explicitly a placeholder. The draft has not been pushed to GitHub.
- [ ] Align the page with the current creator funnel: free 7-Day Content Creator Growth Kickstart → $19 Complete Content Creator Growth Toolkit; the recent product build also names a $149 AI Rockstar Workflow Setup service.
- [ ] Review the current live site separately: main still has the ATHENA homepage and Squarespace checkout redirect; CNAME maps to todaysmarketingsolutionsllc.com.
- [ ] Keep homepage changes off the agent-readiness branch unless a separate web-launch task explicitly calls for them. Do not treat the draft as launch-ready.

## Acceptance rule
Never mark a pending item complete from assumption. Runtime and external connectivity must be demonstrated by an actual successful check. A draft or successful static-site deployment does not prove the manager runtime or fal.ai connection.
