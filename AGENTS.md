# Agent notes

- The owner is a smoke alarm technician, not a developer. Talk to them in plain language. If you start sounding technical, say it again in everyday words.
- Which skill to use, and when, is in `SKILLS.md`.
- The skills live in `.agents/skills/`. Cursor and Codex read that folder directly. Claude Code and Grok read links to it in `.claude/skills/` and `.grok/skills/`. Do not install the same skills a second way as a plugin in any tool, because the tool then lists them twice. Do not copy a skill into another tool's folder. After you add, remove or rename a skill, run `sh script/skills-check.sh`.
- To see or click the phone page, follow `.agents/skills/verify-apm-alarms/SKILL.md`. It names the browser tool for each agent. browser-use stays for other people’s websites.
- `docs/product-brief.md` is the master. The topic map (`_data/topic_map.yml`) and `_data/brands.yml` decide what appears. `DESIGN.md` is the look. `PRODUCT.md` is a short summary, so do not add facts there first.
- Step cards are built in `_plugins/screens.rb`, and signal tables are drawn by `_includes/signal-table.html` from `signals:` in a page's front matter. Do not write card or table markup by hand.
- The words, the screens and the writing rules are in the brief. Keep the writing plain, and the brief wins if anything disagrees. The look is in `DESIGN.md`.
- For any change to how a page looks or feels on the phone, start with Impeccable and follow the "Impeccable" section of `SKILLS.md`. It has one copy in `.agents/skills/impeccable` that every tool folder links to. Do not install its plugin or run its installer here, because that makes second copies. Its memory is `PRODUCT.md`, `DESIGN.md` and `.impeccable/`.
- For the Impeccable layout scan, run `script/design-scan.sh`. Do not point the scanner at `_site` or the templates, because it cannot find the stylesheet there.
