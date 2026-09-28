# TMS Rockstar Manager v0.1

Internal prototype for Today’s Marketing Solutions.

## Goal

Turn a plain-English business request into a managed AI workflow that can plan the work, select approved tools, execute supported actions, quality-check the result, and stop for human approval when money, publishing, account changes, or other consequential actions are involved.

## Current implementation

The repository now includes a minimal Node.js backend in `src/`:

- `GET /health` verifies the service is running.
- `GET /kit/status` verifies the service can authenticate to Kit and reads the creator profile.
- Kit credentials are read only from the private `KIT_API_KEY` environment variable.
- No secret belongs in GitHub, source files, screenshots, or chat.

Run locally:

```bash
npm run check
KIT_API_KEY=your_key npm start
```

Then check:

```bash
curl http://localhost:8787/health
curl http://localhost:8787/kit/status
```

For deployment, configure `KIT_API_KEY` as a private environment variable on the Node host. Do not publish or send campaigns until the required human approval gate is granted.

## Core loop

REQUEST → PLAN → TOOL SELECT → EXECUTE → SCORE → CORRECT → APPROVE/DELIVER → LEARN

## Safety / authority

The Manager may draft, research, organize, score, and create non-consequential assets without asking repeatedly. It must stop for approval before purchases, subscriptions, billing changes, publishing, sending external communications unless previously authorized, deleting data, changing account/security settings, or other irreversible/high-impact actions.

## Product principle

Build and prove this system inside TMS before selling it. Do not claim a customer outcome that TMS has not actually validated.
