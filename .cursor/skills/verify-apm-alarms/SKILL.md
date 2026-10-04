---
name: verify-apm-alarms
description: "Verify apm-alarms checkout identity, and look at the local phone page with the Chrome DevTools plugin. Use when proving changes in apm-alarms, running doctor on this repo, confirming the Cloud Agent landed on the right checkout, or seeing and clicking the phone page."
---

# Verify apm-alarms

Project-local verification skill for **apm-alarms**. Written for agents reading this cold mid-task.

**Current surface (2026-10-04):** the phone site is the Jekyll pages styled by `assets/site.css` (dark only). The live doc is `docs/product-brief.md`. The repo also holds `README.md` (`# apm-alarms`), `AGENTS.md`, and the pstack skills, agents and model rule under `.cursor/`. The mapped feature is still checkout identity only. Seeing the phone page is a separate look, written below. When user paths are added to the feature map, re-run `/create-verification-skill` (or extend this skill + feature map) and replace the bootstrap feature with those paths.

## Launch

An identity check starts no process.

- **Ready signal:** `git -C <checkout> rev-parse --is-inside-work-tree` prints `true`, and `origin` resolves to `github.com/aialuke/apm-alarms`.
- **Checkout path on this Cloud Agent image:** `/workspace` (not `/agent` — that path does not exist here).
- **Teardown:** none for identity checks. An identity check does not start Jekyll.

The phone-page look below is the start command. Keep that server on `127.0.0.1:4000` for this checkout. Record its PID at launch and kill only that PID at the end. If something else already owns the port, stop and say so.

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

## Seeing the phone page

Use this when the task is to see or click the phone page. The tool is the **Chrome DevTools** Grok plugin (`chrome-devtools-mcp`). It drives Chrome on this machine. It is installed for the user, not stored in this repo. If its tools are not connected, say so and stop. The install, for a person at a terminal, is `grok plugin install chrome-devtools --trust`, then a new Grok session.

Leave browser-use for websites this repo does not serve.

1. Run doctor.
2. From the checkout root, start the site if port 4000 is free. Record the PID.

```bash
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Ready when `http://127.0.0.1:4000/apm-alarms/` returns 200. The bare root on port 4000 is not the app. `_config.yml` sets `baseurl` to `/apm-alarms`. Reuse a server only when it is already serving this checkout.

3. Open the page with the plugin: `new_page` on `http://127.0.0.1:4000/apm-alarms/`. Use `list_pages` for the page id. Call `emulate` with viewport `390x844x3,mobile,touch` before judging the phone layout. When the task changed layout, also look at a wide window with `resize_page`.
4. Read the page with `take_snapshot`. Click a control by the `uid` from that latest snapshot. Take `take_screenshot` when the look itself is the question. A screenshot with no click is not a check of a control.
5. After a navigation, call `list_console_messages`.
6. A look is not a mapped product verification. The feature map still has no phone-page recipe. Report what you opened and what happened. Save a snapshot or screenshot under `/tmp/apm-alarms-verify-evidence/<run-id>/` when that run has an evidence dir.

Full tool names and arguments: [Chrome DevTools MCP tool reference](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/tool-reference.md).

## Drive

Identity harness: **shell + git**. Phone-page harness: **Jekyll on port 4000, then Chrome DevTools**, as written under Seeing the phone page.

1. Run doctor (above).
2. Drive the mapped feature [`repo-identity`](features/repo-identity.md) exactly as written.
3. See or click the phone page only through Seeing the phone page.
4. Refuse a mapped product-behavior claim (`API returns…`, `UI shows…`) until that path exists in the feature map. A look can still report what the open page did.

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

A phone-page look kills only the Jekyll PID this run started. Leave a server that was already running.

## Helpers

| Script | Invocation |
| --- | --- |
| Doctor | `.cursor/skills/verify-apm-alarms/scripts/doctor.sh` |

`doctor.sh` is executable. It writes optional evidence files when `EVIDENCE_DIR` is set.
