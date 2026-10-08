---
name: verify-apm-alarms
description: "Verify apm-alarms checkout identity, run the site checks, and look at the local phone page with the browser tool for your agent. Use when proving changes in apm-alarms, running doctor on this repo, confirming the checkout is the right one, or seeing and clicking the phone page."
---

# Verify apm-alarms

Project-local verification skill for **apm-alarms**. Written for agents reading this cold mid-task.

**Current surface:** the phone site is the Jekyll pages styled by `assets/site.css` (dark only). The live doc is `docs/product-brief.md`. The repo also holds `README.md` (`# apm-alarms`), `AGENTS.md`, `SKILLS.md`, the shared skills in `.agents/skills/`, and the pstack agents and model rule under `.cursor/`. The mapped feature is still checkout identity only. Seeing the phone page is a separate look, written below. When user paths are added to the feature map, re-run `/create-verification-skill` (or extend this skill + feature map) and replace the bootstrap feature with those paths.

## Launch

An identity check starts no process.

- **Ready signal:** `git -C <checkout> rev-parse --is-inside-work-tree` prints `true`, and `origin` resolves to `github.com/aialuke/apm-alarms`.
- **Checkout path:** wherever the repo is cloned. On the owner's Mac it is `/Users/lukemckenzie/apm-alarms` (other machines differ). On a Cloud Agent it is `/workspace` (not `/agent`).
- **Teardown:** none for identity checks. An identity check does not start Jekyll.

To look at the page, start the site as written under Seeing the phone page. Keep that server on `127.0.0.1:4000` for this checkout. Check the port first with `lsof -i :4000`. Start the server in the background, record its PID from `$!`, and kill only that PID at the end. If something else already owns the port, stop and say so.

## Doctor

Read-only health check. Run first whenever anything looks off:

```bash
.agents/skills/verify-apm-alarms/scripts/doctor.sh
```

Optional: `EVIDENCE_DIR=/tmp/apm-alarms-verify-evidence/<run-id> .agents/skills/verify-apm-alarms/scripts/doctor.sh`

Expect exit `0` and lines confirming:

- work tree is a git repo
- `origin` host/path is `github.com/aialuke/apm-alarms` (tokenized remotes OK)
- `README.md` exists and contains `apm-alarms`
- working tree status is readable

If doctor fails, stop. Do not claim verification against a wrong or broken checkout.

## Site checks

The same checks the publishing step runs. Run them after any change to pages, the topic map, brands or templates:

```bash
bundle exec jekyll build
sh script/check.sh
node script/trail-check.mjs
```

All three must exit `0`. `script/check.sh` prints `site checks passed`. Keep their output as evidence. These checks read `_site`, so build first.

## Seeing the phone page

Use the browser tool that belongs to the agent you are:

| Agent | How to look at the page |
| --- | --- |
| Claude Code | Claude in Chrome (`mcp__claude-in-chrome__*`). Load it with one ToolSearch call. cmux-cua does not start here. |
| Codex | Computer-use (`cua_repl`) on Chrome. Not tried here. |
| Grok | The Chrome DevTools MCP. Not tried here. |
| Cursor | Cursor's built-in browser. Untested here. Note on first use whether it worked. |

Leave browser-use for websites this repo does not serve.

1. Run doctor.
2. From the checkout root, start the site if port 4000 is free (`lsof -i :4000` prints nothing). Record the PID.

```bash
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Ready when `http://127.0.0.1:4000/apm-alarms/` returns 200. The bare root on port 4000 is not the app. `_config.yml` sets `baseurl` to `/apm-alarms`. Reuse a server only when it is already serving this checkout.

3. Open `http://127.0.0.1:4000/apm-alarms/` in Chrome with the tool from the table. Use a phone-sized window or the device toolbar before judging the phone layout. When the task changed layout, inspect a wide window too.
4. Read the current page state before choosing a control. Click by its current element, then read the updated state. Take a screenshot when judging appearance; a screenshot without a click does not verify a control.
5. After navigation, check the browser console when available.
6. A look is not a mapped product verification. The feature map still has no phone-page recipe. Report what you opened and what happened.

## Drive

Identity harness: **shell + git**. Site harness: **Jekyll build, then `script/check.sh` and `script/trail-check.mjs`**. Phone-page harness: **Jekyll on port 4000, then the browser tool for your agent**, as written under Seeing the phone page.

1. Run doctor (above).
2. Drive the mapped feature [`repo-identity`](features/repo-identity.md) exactly as written.
3. When the change touches pages, the topic map, brands or templates, run Site checks.
4. See or click the phone page only through Seeing the phone page.
5. Refuse a mapped product-behavior claim (`API returns…`, `UI shows…`) until that path exists in the feature map. A look can still report what the open page did.

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
| Doctor | `.agents/skills/verify-apm-alarms/scripts/doctor.sh` |

`doctor.sh` is executable. It writes optional evidence files when `EVIDENCE_DIR` is set.
