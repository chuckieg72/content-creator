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

## Pending external/runtime work
- [ ] Select/identify backend runtime/host
- [ ] Add existing TMS Video Agent secret there as FAL_KEY (never in chat/Git)
- [ ] Install dependencies and run health check in that runtime
- [ ] Verify fal.ai with a no-spend capability/auth check if provider/runtime permits; otherwise request approval before a paid generation
- [ ] Configure direct LLM API credentials only if needed; connected ChatGPT can remain manager host
- [ ] Connect/verify publishing channels individually before any public action

## Acceptance rule
Never mark a pending item complete from assumption. External connectivity must be demonstrated by an actual successful check.
