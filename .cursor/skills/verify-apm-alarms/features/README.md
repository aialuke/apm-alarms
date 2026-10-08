# apm-alarms verification map

This directory is the maintained source for verifying user-facing behavior of apm-alarms. Read the index before driving, then use the matching feature file as the recipe.

## Baseline preconditions

- Work from the apm-alarms checkout (`/workspace` on a Cloud Agent, the local clone otherwise).
- `origin` must be `github.com/aialuke/apm-alarms`.
- Run `.cursor/skills/verify-apm-alarms/scripts/doctor.sh` and require exit `0`.
- There is **no** application server yet — do not invent one.
- Never claim product UI/API/CLI behavior until those features are added here.

## Driving conventions

- Start every recipe from the baseline state unless its preconditions say otherwise.
- Treat every command as literal.
- Prefer the doctor helper over ad-hoc git one-liners so evidence stays consistent.
- Restore nothing for identity checks; leave proof artifacts under `/tmp/apm-alarms-verify-evidence/`.

## Proof and skip reporting

- Capture the action and resulting state (doctor output + evidence files).
- Report unreachable product paths as **blocked: no surface yet**, with the unmet precondition.
- Do not report a skipped product path as verified through identity checks alone.

## Feature entry contract

Each feature file starts with an H1 title and one paragraph describing the user-visible behavior. It then uses exactly four H2 sections in this order: `Sub-features`, `How to get to it (user POV)`, `Driving it with <harness>`, `Gotchas`.

## Features

- [Repo identity](./repo-identity.md) covers proving the agent is on the correct apm-alarms checkout (greenfield bootstrap until a product surface exists).
