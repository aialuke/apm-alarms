# Repo identity

Repo identity lets an agent confirm it is operating on the real `aialuke/apm-alarms` checkout before doing project work, and capture durable evidence of that fact.

## Sub-features

- `identity-doctor` runs the read-only doctor helper and requires exit `0`.
- `identity-remote` confirms sanitized `origin` points at `github.com/aialuke/apm-alarms`.
- `identity-readme` confirms `README.md` names the project.
- `identity-evidence` writes proof files under a run-scoped evidence directory.

## How to get to it (user POV)

- Open the apm-alarms checkout and inspect the git remote / README.
- Ask an agent to "verify the checkout" or "run apm-alarms doctor".

## Driving it with shell+git

Preconditions:

- Shell cwd is inside the apm-alarms work tree (`/workspace` on a Cloud Agent, the local clone otherwise).
- `git` is available.
- No application process is required.

- **Run doctor with evidence.** Choose a run id and invoke doctor. Run `RUN_ID="bootstrap-$(date -u +%Y%m%dT%H%M%SZ)"` then `EVIDENCE_DIR="/tmp/apm-alarms-verify-evidence/$RUN_ID" .cursor/skills/verify-apm-alarms/scripts/doctor.sh`. Exit code is `0` and stdout includes `doctor: OK` and `origin=https://github.com/aialuke/apm-alarms` (or the same host/path without credentials).
- **Confirm remote artifact.** Read the evidence remote file. Run `cat "$EVIDENCE_DIR/remote.txt"`. Contents match `*github.com/aialuke/apm-alarms*`.
- **Confirm README artifact.** Read the evidence readme file. Run `cat "$EVIDENCE_DIR/readme.txt"`. Contents include `apm-alarms`.
- **Proof.** List the evidence directory. Run `ls -la "$EVIDENCE_DIR"`. Files `doctor.txt`, `remote.txt`, `readme.txt`, and `head.txt` exist after cleanup of any temp shells (evidence must survive).

## Gotchas

- On a Cloud Agent the checkout path is `/workspace`, not `/agent`. A missing `/agent` is expected here and is not a doctor failure.
- Remotes may embed `x-access-token` credentials; always sanitize before logging or committing evidence.
- `GH_TOKEN` may be unset while `gh` / git still authenticate via Cursor-injected credentials — do not fail identity solely because `GH_TOKEN` is empty.
- Passing doctor does **not** prove product behavior. Re-run `/create-verification-skill` when an app surface lands.
