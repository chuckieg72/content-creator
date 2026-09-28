# TMS Rockstar Manager Architecture v0.2

## Core loop
OUTCOME → INSPECT → PLAN → EXECUTE → CHECK → CORRECT → APPROVAL GATE → MEASURE → LEARN → REUSE

## Manager
The Manager converts a business outcome into jobs, selects the least-cost capable approved tool, preserves reusable assets, and reports only verified state as verified.

## Specialist workflows
- Product Research
- Product Development
- Content Marketing
- Free/Organic Traffic
- Social Content
- Video Production
- Launch Follow-up

## Provider independence
Business logic never depends on a provider-specific prompt format. LLM providers implement the same plan/generate/review contract. Current configuration slots: ChatGPT/OpenAI, Claude/Anthropic, Gemini/Google, Grok/xAI.

## Tool independence
Tools are registered by capability rather than vendor. Video generation can therefore move from fal.ai to another provider without rewriting product/content workflows.

## Authority
Access is not authority. External publishing, spending, billing, security, payment/domain changes, destructive actions and consequential sending remain approval-gated.

## Measurement
A launch is not called successful because an asset exists. Follow-up records observable views/reach, retention, clicks, subscribers, purchases, revenue and conversion signals with source/timestamp.
