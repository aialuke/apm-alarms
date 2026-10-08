# Which skill to use

A skill is a written guide an agent follows. In Claude Code and Cursor, type its name with a slash, such as `/bro`. In Codex or Grok, say it in words, such as "use the bro skill".

Every skill in this project is listed here with when to reach for it, plus two from your account. `/poteto-mode` calls many of them for you when its steps need them, so you rarely have to name them. `sh script/skills-check.sh` fails if a skill is added and not listed here.

The skills live in `.agents/skills/`. `AGENTS.md` says where each tool finds them.

## By job

| Job | Use | Why |
| --- | --- | --- |
| Add or change a brand, unit or topic | Add a brand or unit in `_data/brands.yml`, or a topic in `_data/topic_map.yml`. Put the words in `_instructions/<brand>-<unit>-<topic>.md`. Show the owner and wait for approval. Then run `/verify-apm-alarms`. | A change appears only after the owner approves it. A topic with no words yet shows "These words are not written yet", which is not a bug. The brief explains how in "Units and the topic map" and "How content is added". |
| Change the wording | The brief, then `/unslop` | `docs/product-brief.md` has the words, the screens and the writing rules. `/unslop` tidies the writing afterwards. If they disagree, the brief wins. |
| Change the look | `/impeccable` (see "Impeccable" below), then `sh script/design-scan.sh` | Spacing, type, colour, tables, layout, tap targets, how a page feels on the phone. `DESIGN.md` is the look it must match. |
| See the phone page, or prove a change works | `/verify-apm-alarms` | Checks it is the right project folder, runs the site checks, and opens the page. It names the browser tool for each agent. |
| Get a second opinion before publishing | Claude Code: ask for a Codex or Grok review (`codex-delegation`, `grok-delegation`, which live on your account and are not in this project). Cursor: `/interrogate`. Codex and Grok: ask the owner to get a review from another tool. | One reviewer per tool. On a machine without those two account skills, ask the owner for a second tool instead. |
| Plain words, no jargon | `/bro` | Restates the last message in everyday language. |
| Save or publish a change | Ask the agent to commit it | A change goes live when it reaches `main` on GitHub. The publishing step runs the same checks first, and stops if one fails. |

## Impeccable

Impeccable is the design skill for how the site looks and feels on the phone. It has one copy, in `.agents/skills/impeccable`, and every tool links to it. Type `/impeccable` in Claude Code, Cursor and Grok, and `$impeccable` in Codex. Do not install its plugin or run its installer in this project, because that makes second copies.

**Reach for it when** a page feels off, or you want to change spacing, type, colour, a table or a layout. **Do not use it for** the alarm words (the brief and `/poteto-mode` own those), or for a one-word fix. `/impeccable doctor` checks its setup is healthy.

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

## Bigger or riskier work

These were built for Cursor, and run in other tools only in part.

| Situation | Use | Why |
| --- | --- | --- |
| Start a careful task | `/poteto-mode` | Picks the right steps for the task and runs the other skills as needed. |
| Not sure which skill fits | `/poteto-help` | Answers "which skill for this?" in more detail than this page. |
| A big change with many steps | `/figure-it-out`, with `/show-me-your-work` | Plans it, then keeps a log of each decision for you to review. |
| Ask what else a change could break | `/blast-radius` | Looks for damage outside the lines that changed, and proves why it is safe. |
| Try one job several ways | `/arena` | Cursor only. Tries it several ways at once and keeps the best parts. |
| The same mistake keeps coming back | `/correct` | Changes the project so the mistake cannot happen again. |

## Understand something

These work best in Cursor.

| Question | Use |
| --- | --- |
| How does this part work? | `/how` |
| Why was it done this way? | `/why` |
| Explain it to me properly | `/teach` |

## Skills used inside bigger tasks

You rarely type these. `/poteto-mode` or the agent reaches for them. Name one yourself when you want exactly that.

| Skill | Reach for it when |
| --- | --- |
| `/technical-writing` | Writing or checking documents, READMEs, commit messages or pull request text. Not for the words on the phone pages: the brief wins there. |
| `/tdd` | Fixing a bug test-first, only when you ask or when there is a quick check to run. This project has no test suite, so it is rare. |
| `/architect` | Planning what goes where in a bigger change, before any of it is written. |
| `/swarm` | Splitting a big job across several helper agents at once and getting one report back. Costs more, and was built for Cursor. |
| `/no-comments` | Before a review: strips code comments using a reviewer who did not write them. This project's code has almost none, so it is rarely needed. |
| `/benchmark-checklist` | Before you trust or report a speed measurement. Only needed if you start measuring speed. |
| `/create-verification-skill` | Setting up a way to prove a feature works. `/verify-apm-alarms` already exists, so this is for extending it as the project grows. |

## Principles

Short rules that `/poteto-mode` cites in its answers. Name one to apply it, for example "apply prove it works". You have already called these by name: `/principle-model-the-domain`, `/principle-experience-first`, `/principle-attack-the-premise`, `/principle-subtract-before-you-add` and `/principle-test-behavior-not-implementation`.

| Principle | Reach for it when |
| --- | --- |
| `/principle-prove-it-works` | A task is finished and you are about to say it is done. Check the real result, not a stand-in. |
| `/principle-fix-root-causes` | Debugging. Reproduce first, then keep asking why until you reach the real cause. |
| `/principle-attack-the-premise` | Two fixes in a row have failed for the same reason. Question the assumption before a third try. |
| `/principle-experience-first` | Choosing between what is easier to build and what is better for the person using it. Pick the person. |
| `/principle-subtract-before-you-add` | Before adding or reworking something. Remove dead weight first. |
| `/principle-laziness-protocol` | Tempted to add layers or extras. Make the smallest change that solves it. |
| `/principle-minimize-reader-load` | Code or pages that are hard to follow. Cut layers and hidden state. |
| `/principle-model-the-domain` | Logic that branches a lot or repeats the same assumption in many files. Put the rules in one clear structure, such as a table. The topic map and brands data are examples. |
| `/principle-foundational-thinking` | Before writing logic. Decide the core data first, and what is shared. |
| `/principle-redesign-from-first-principles` | Fitting a new requirement into an existing design. Redesign as if it had been there from the start. |
| `/principle-outcome-oriented-execution` | A planned rewrite in phases. Aim at the end result and do not keep throwaway in-between states. |
| `/principle-exhaust-the-design-space` | A new kind of interaction with nothing to copy. Build two or three rival versions and compare. |
| `/principle-build-the-lever` | Any non-trivial work. Build a script or tool that does or proves it, instead of doing it by hand, like `script/check.sh`. |
| `/principle-encode-lessons-in-structure` | You are about to write the same instruction a second time. Turn it into a check or script instead. |
| `/principle-sequence-verifiable-units` | Multi-step work. Take small steps that each end in a check, and verify each before the next. |
| `/principle-guard-the-context-window` | The conversation is filling up. Send bulk reading to helper agents and keep only summaries. |
| `/principle-never-block-on-the-human` | Tempted to ask "should I?" on work that can be undone. Do it, show the result, and let them correct it. |
| `/principle-test-behavior-not-implementation` | Writing or keeping a test. Use it the way a person would and check the real result against a fixed expected answer. |
| `/principle-explain-the-number` | Before trusting a measured number. Find what limits it and check it measured the right thing. |
| `/principle-boundary-discipline` | Adding checks and error handling. Guard the edges of the system, trust what is inside, keep the main logic plain. |
| `/principle-make-operations-idempotent` | Commands or loops that may be run twice or crash halfway. Make them end in the same state however often they run. |
| `/principle-migrate-callers-then-delete-legacy-apis` | A new internal interface while old users of the old one remain. Move them all and delete the old one in one go. |
| `/principle-separate-before-serializing-shared-state` | Several agents might write the same file or branch. Stop the sharing first, and use locks only if you must. |

## Keep this list true

| Job | Use |
| --- | --- |
| After a session, turn what went wrong into skill fixes (Cursor only) | `/reflect` |
| Check the verify skill still matches the project | `/maintain-verification-skill` |
| Change which models Cursor uses for these skills (keep Claude and GPT out) | `/setup-pstack` |
| Check this list and the skill links | `sh script/skills-check.sh` |

Other skills on your account (`cmux`, `second-chair`) live in `~/.claude/skills/`, not in this project.
