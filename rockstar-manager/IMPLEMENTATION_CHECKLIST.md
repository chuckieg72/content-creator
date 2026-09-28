# Implementation Checklist

## Built on foundation branch
- [x] TMS workflows and approval criteria defined
- [x] fal.ai adapter reads FAL_KEY from the runtime environment only
- [x] First executable manager path: accepts a job, calls the OpenAI Responses API, returns a completed text draft, and saves the result under ignored output/
- [x] Offline tests cover the mocked model call, missing-key behavior, and approval gates
- [x] GitHub Actions test and health-check workflow passed on the foundation branch
- [x] Local .env files and output artifacts are ignored by Git

## Required to run real jobs
- [ ] Choose a Node.js 20+ backend runtime with private environment secrets and persistent output/spend storage. GitHub Pages and IONOS Deploy Now are static hosting and cannot run this Node manager.
- [ ] Configure OPENAI_API_KEY privately for text execution; this is a separate API credential and billing account from a ChatGPT subscription.
- [ ] Run a real text job and confirm its output is saved. CI used a mock API response and did not make a paid model call.
- [ ] Implement and verify monthly and per-job spend allowance enforcement before enabling paid autonomous work. The previously recorded initial fal.ai ceiling is $10; it is not enforced by the current code yet.
- [ ] Configure FAL_KEY privately and verify a no-spend authentication/capability check; do not run paid video generation until allowance enforcement and actual model costs are verified.
- [ ] Add and verify the specific integrations TMS jobs need (for example Drive for assets, email for outreach, and each social or checkout destination). GitHub is the only business connector currently verified.
- [ ] Add durable job history, spend ledger, retry/recovery, and runtime monitoring before unattended operation.
- [ ] Implement other model providers only if needed; OpenAI is the only execution adapter implemented so far.
- [ ] Keep publishing and external sending blocked until each destination is connected and its scope is explicitly authorized.

## Separate web-launch issue (not an agent-readiness blocker)
- [ ] Rework the local homepage draft before any launch: it follows older AI Boss funnel notes, its offer path is mismatched, and its email contact is explicitly a placeholder. The draft has not been pushed to GitHub.
- [ ] Align the page with the current creator funnel: free 7-Day Content Creator Growth Kickstart → $19 Complete Content Creator Growth Toolkit; the recent product build also names a $149 AI Rockstar Workflow Setup service.
- [ ] Review the current live site separately: main still has the ATHENA homepage and Squarespace checkout redirect; CNAME maps to todaysmarketingsolutionsllc.com.
- [ ] Keep homepage changes off the agent-readiness branch unless a separate web-launch task explicitly calls for them. Do not treat the draft as launch-ready.

## Acceptance rule
Never mark a connection, allowance, external action, or deliverable as live without an actual successful check. A passing mocked test or static-site deployment does not prove model access, fal.ai connection, or unattended operation.
