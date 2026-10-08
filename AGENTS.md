# Agent notes

- The owner is a smoke alarm technician, not a developer. Talk to them in plain language, and use `/bro` if you start sounding technical.
- Which skill to use, and when, is in `SKILLS.md`.
- The skills live in `.agents/skills/`. Cursor and Codex read that folder directly. Claude Code and Grok read links to it in `.claude/skills/` and `.grok/skills/`. Do not copy a skill into another tool's folder. After you add, remove or rename a skill, run `sh script/skills-check.sh`.
- Most skills run only when called by name. `/poteto-mode` links to the rest, so read `.agents/skills/poteto-mode/SKILL.md` in full before working in that style. The pstack agents live in `.cursor/agents/`, and only Cursor and Claude Code can use them. Several skills work only in Cursor because they use its helper agents or read its own folders. `SKILLS.md` says which.
- To see or click the phone page, follow `.agents/skills/verify-apm-alarms/SKILL.md`. It names the browser tool for each agent. browser-use stays for other people’s websites.
- Claude and GPT are usage-blocked in Cursor. Do not write them into the model rule even if Cursor lists the slugs. Cursor's skills read the copy in the home folder, `~/.cursor/rules/pstack-models.mdc`, and the project keeps a copy at `.cursor/rules/pstack-models.mdc`. Keep the two identical. The block does not stop other tools using their own model, so a Codex review is fine.
- `docs/product-brief.md` is the master. The topic map (`_data/topic_map.yml`) and `_data/brands.yml` decide what appears. `DESIGN.md` is the look. `PRODUCT.md` is a short summary, so do not add facts there first.
- Step cards are built in `_plugins/screens.rb`, and signal tables are drawn by `_includes/signal-table.html` from `signals:` in a page's front matter. Do not write card or table markup by hand.
- The words, the screens and the writing rules are in the brief. `/unslop` tidies the writing afterwards, and the brief wins if they disagree. The look is in `DESIGN.md`.
- For any change to how a page looks or feels on the phone, start with Impeccable and follow the "Impeccable" section of `SKILLS.md`. It has one copy in `.agents/skills/impeccable` that every tool folder links to. Do not install its plugin or run its installer here, because that makes second copies. Its memory is `PRODUCT.md`, `DESIGN.md` and `.impeccable/`.
- For the Impeccable layout scan, run `script/design-scan.sh`. Do not point the scanner at `_site` or the templates, because it cannot find the stylesheet there.
