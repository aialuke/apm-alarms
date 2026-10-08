# Which skill to use

A skill is a written guide an agent follows. In Claude Code, Cursor and Grok, type its name with a slash, such as `/impeccable`. In Codex, say it in words, such as "use the impeccable skill".

This project keeps two skills of its own: `impeccable` (the look) and `verify-apm-alarms` (checking and seeing the page). Everything else is on your account, not in this project. `sh script/skills-check.sh` fails if a skill is added and not listed here.

The skills live in `.agents/skills/`. `AGENTS.md` says where each tool finds them.

## By job

| Job | Use | Why |
| --- | --- | --- |
| Add or change a brand, unit or topic | Add a brand or unit in `_data/brands.yml`, or a topic in `_data/topic_map.yml`. Put the words in `_instructions/<brand>-<unit>-<topic>.md`. Show the owner and wait for approval. Then run `/verify-apm-alarms`. | A change appears only after the owner approves it. A topic with no words yet shows "These words are not written yet", which is not a bug. The brief explains how in "Units and the topic map" and "How content is added". |
| Change the wording | The brief: `docs/product-brief.md` | It has the words, the screens and the writing rules. |
| Change the look | `/impeccable` (see "Impeccable" below), then `sh script/design-scan.sh` | Spacing, type, colour, tables, layout, tap targets, how a page feels on the phone. `DESIGN.md` is the look it must match. |
| See the phone page, or prove a change works | `/verify-apm-alarms` | Checks it is the right project folder, runs the site checks, and opens the page. It names the browser tool for each agent. |
| Get a second opinion before publishing | Claude Code: ask for a Codex or Grok review (`codex-delegation`, `grok-delegation`, which live on your account and are not in this project). Codex and Grok: ask the owner to get a review from another tool. | One reviewer per tool. |
| Save or publish a change | Ask the agent to commit it | A change goes live when it reaches `main` on GitHub. The publishing step runs the same checks first, and stops if one fails. |

## Impeccable

Impeccable is the design skill for how the site looks and feels on the phone. It has one copy, in `.agents/skills/impeccable`, and every tool links to it. Type `/impeccable` in Claude Code, Cursor and Grok, and `$impeccable` in Codex. Do not install its plugin or run its installer in this project, because that makes second copies.

**Reach for it when** a page feels off, or you want to change spacing, type, colour, a table or a layout. **Do not use it for** the alarm words (the brief owns those), or for a one-word fix. `/impeccable doctor` checks its setup is healthy.

**The routine we use for a change to one page.** Impeccable itself does not set an order. This one works well:
1. `/impeccable critique <page>` tells you what is wrong without changing anything. Run a fresh one if the page has changed a lot since the last, because polish only uses a critique while the page is unchanged since.
2. Fix the top items with the command that matches (table below).
3. `/impeccable polish <page>` once, and say what to keep.
4. Before publishing, `/impeccable audit`, then `sh script/design-scan.sh`.
5. Only if the look itself changed (a colour, a type size, a spacing rule), `/impeccable document`. It updates `DESIGN.md` and `.impeccable/design.json`, and asks before it overwrites anything.

**Which command for which problem**

| The problem | Say |
| --- | --- |
| I am not sure what to do next | `/impeccable` on its own. It looks at the project and recommends two or three next steps. |
| It feels wrong and I cannot say why | `critique <page>` |
| Spacing, alignment, small details | `polish <page>`, and say what to keep |
| Weak order or grouping on the page | `layout <page>` |
| Hard to read, sizes uneven, large text | `typeset <page>` |
| Too much on the screen | `distill <page>` |
| A button, title or label is unclear | `clarify <page>` |
| Another phone size, landscape, thumb reach | `adapt <page>` |
| Long names or empty states break the layout | `harden <page>`. The translation and right-to-left parts do not apply to this site. |
| Colour is flat or unclear | `colorize <page>`. Keep text or shape cues with every colour, as the lamp cells do. |
| I want to compare options by eye | `generate 3 quieter variants of the signal table header`, or `live`. Both need the site running (`bundle exec jekyll serve`). Live mode is in beta and has not been tried with this Jekyll site, so it may not work. |
| Before publishing | `audit` (accessibility, speed, themes, phone behaviour, consistency) |

`overdrive`, `delight` and `onboard` do not suit this site: it is a task tool used one-handed on a job, with no welcome screen. Use `bolder` and `quieter` sparingly.

**Be specific.** Name the page and say what must stay: "polish the Emerald Lights & Sounds table, keep the lamps and the dash".

**Where its memory lives.** `PRODUCT.md` and `DESIGN.md` at the top, and `.impeccable/`. The settings, `design.json` and page briefs are in git (once committed), so every copy of the project shares them. Critique reports, the hook cache, `config.local.json` and live-mode scratch files stay on your machine (the list is in `.gitignore`). Critique reports record this Mac's folder paths, which is why they stay local.

**The automatic check.** After each edit to a page or stylesheet, a hook runs Impeccable's checker. It is set up for all four tools, and each behaves a little differently:

| Tool | What the hook does | One-time step |
| --- | --- | --- |
| Cursor | Blocks a bad edit before it is written | Hooks switched on under Settings, Hooks |
| Claude Code | Reminds after each edit, and again when the turn ends | Accept workspace trust. The hook is in `.claude/settings.json`, which is in git. |
| Codex | Reminds after each edit, and again when the turn ends | Approve once with `/hooks` |
| Grok | Reports at the end of the turn, not after each edit | Approve once with `/hooks-trust` |

Grok also reads the Claude and Cursor hook files, so the check can be asked to run more than once. Impeccable stays silent after the first run for the same file (tested).

**On a new machine** there is nothing to install. The first run downloads Impeccable's engine once to `~/.impeccable/`, and every tool shares it. That needs the internet one time. Without it, the hooks stay silent and `design-scan.sh` stops with a message saying the engine is missing.

**To change a deliberate choice the checker keeps flagging** (for the agent): record it with `hooks ignore-value <rule> <value> --reason "owner confirmed"`, then do not polish it again. That is shared by default; add `--local` to keep it private. Ignoring a whole file or rule needs the owner's say-so.

**Updating Impeccable** (for the agent). Never run `npx impeccable install` or `link` here. `install` deletes each tool's link and puts a real copy in its place. `update` skips linked tool folders but overwrites `.agents/skills/impeccable` from a download that has not been checked against the version we use. Update by hand:
1. Take the `.agents` build of the newer version from the Impeccable repository: its `.agents/skills/impeccable` folder, plus the `.claude/agents`, `.cursor/agents` and `.grok/agents` files.
2. Replace ours with them.
3. Rebuild `.agents/IMPECCABLE-SHA256SUMS` (the command is in `.agents/IMPECCABLE-NOTICE.md`) and update the commit and version in that file.
4. From the project folder, run `.agents/skills/impeccable/scripts/impeccable hooks on`.
5. Run `sh script/skills-check.sh` and `.agents/skills/impeccable/scripts/impeccable doctor`.

## Keep this list true

Check this list and the skill links with `sh script/skills-check.sh`. Other skills on your account (`cmux`, `second-chair`, `codex-delegation`, `grok-delegation`) live in `~/.claude/skills/`, not in this project.
