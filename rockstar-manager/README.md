# TMS Rockstar Manager

Node.js manager prototype for Today’s Marketing Solutions.

## Run a real text job

Requires Node.js 20+ and an OpenAI API key configured privately as `OPENAI_API_KEY`. A ChatGPT subscription by itself is not an API credential.

```sh
npm install
npm test
npm run check
npm run job -- "Prepare tomorrow's sales content package for [offer and audience]"
```

The manager calls the OpenAI Responses API, creates a completed text draft, and saves the full job result under the ignored `output/` directory. Choose a workflow with `--type`, for example:

```sh
npm run job -- --type social_content "Create three platform-ready posts from the approved promotion path"
```

Set real credentials in a hosting provider's secret manager or a local ignored `.env`. Never put credentials in Git or chat. The default model is `gpt-5-mini`; change it with `OPENAI_MODEL`. The output-token ceiling is controlled by `AGENT_MAX_OUTPUT_TOKENS`.

## What this version can do

- Execute a text job and save its deliverable, rather than only print a plan.
- Apply the TMS B.O.S.S. criteria and existing job workflow.
- Report model usage when the API returns it.
- Keep publish, spend, and external-send actions behind approval gates.

## What still needs to be connected

This is not yet an all-purpose autonomous operator. Runtime hosting, private API credentials, a persistent job/spend ledger, allowance enforcement, web research, and business-channel integrations still need implementation and verification. The fal.ai adapter is separate; paid video generation must not run until a measured allowance is enforced. Publishing and sending must remain blocked until each destination is connected and explicitly authorized.

## Authority

Within configured scope, the agent should finish work and return a result instead of stopping at a plan. It must stop before spending beyond a verified allowance, publishing/sending without authority, changing accounts/security/billing/domains/payments, or deleting data. Never present a draft as published or an unverified claim as evidence.

## TMS acceptance standard

Check outcome, accuracy, completeness, customer fit, standards, clarity, efficiency, risk, improvement, and reusability. Never invent customer results, sales, views, testimonials, product capabilities, or research sources.
