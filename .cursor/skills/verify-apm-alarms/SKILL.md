---
name: verify-apm-alarms
description: "Verify apm-alarms checkout identity and (once an app exists) drive user-facing behavior. Use when proving changes in apm-alarms, running doctor on this repo, or confirming the Cloud Agent landed on the right checkout."
---

# Verify apm-alarms

Project-local verification skill for **apm-alarms**. Written for agents reading this cold mid-task.

**Current surface (2026-10-02):** greenfield, pre-build. The repo holds planning documents and agent tooling only: `README.md` (`# apm-alarms`), `AGENTS.md`, `docs/product-brief.md`, `docs/next-sessions.md`, a throwaway static mockup at `mockups/steps-layout.html`, and the pstack skills, agents and model rule under `.cursor/`. There is no web UI, CLI, API, package manifest, or runnable process. The mockup is not the product and is not a verification surface. Until a product surface exists, verification proves **checkout identity** only. When an app appears, re-run `/create-verification-skill` (or extend this skill + feature map) and replace the bootstrap feature with real user paths.

## Launch

There is no application process to start.

- **Ready signal:** `git -C <checkout> rev-parse --is-inside-work-tree` prints `true`, and `origin` resolves to `github.com/aialuke/apm-alarms`.
- **Checkout path on this Cloud Agent image:** `/workspace` (not `/agent` — that path does not exist here).
- **Teardown:** none for identity checks. Do not invent a server.

When a future Launch section adds a real start command, keep instances isolated (ports, data dirs) and never drive a shared user session.

## Doctor

Read-only health check. Run first whenever anything looks off:

```bash
.cursor/skills/verify-apm-alarms/scripts/doctor.sh
```

Optional: `EVIDENCE_DIR=/tmp/apm-alarms-verify-evidence/<run-id> .cursor/skills/verify-apm-alarms/scripts/doctor.sh`

Expect exit `0` and lines confirming:

- work tree is a git repo
- `origin` host/path is `github.com/aialuke/apm-alarms` (tokenized remotes OK)
- `README.md` exists and contains `apm-alarms`
- working tree status is readable

If doctor fails, stop. Do not claim verification against a wrong or broken checkout.

## Drive

Harness today: **shell + git** (no browser/PTY app harness yet).

1. Run doctor (above).
2. Drive the mapped feature [`repo-identity`](features/repo-identity.md) exactly as written.
3. Refuse product-behavior claims (`API returns…`, `UI shows…`) until those surfaces exist in the feature map.

## Evidence

Proof artifacts go under:

```text
/tmp/apm-alarms-verify-evidence/<run-id>/
```

Minimum for the bootstrap feature:

- `doctor.txt` — full doctor stdout/stderr
- `remote.txt` — sanitized `origin` URL
- `readme.txt` — `README.md` contents
- `head.txt` — `git rev-parse HEAD` and current branch

Standards:

- Exercise the real user/agent path (here: inspect the checkout), not mocked remotes.
- Capture both the action and resulting state.
- Cleanup must **not** delete this evidence directory.

## Cleanup

Identity verification creates no processes and no scratch data dirs. Do not `kill` by process name. Leave `/tmp/apm-alarms-verify-evidence/**` intact.

When a future Launch starts processes, kill only PIDs this run started (record them at launch).

## Helpers

| Script | Invocation |
| --- | --- |
| Doctor | `.cursor/skills/verify-apm-alarms/scripts/doctor.sh` |

`doctor.sh` is executable. It writes optional evidence files when `EVIDENCE_DIR` is set.
