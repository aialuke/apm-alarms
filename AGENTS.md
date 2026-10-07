# Agent notes

- The owner is a smoke alarm technician, not a developer. Talk to them in plain language, and use `/bro` if you start sounding technical.
- The pstack skills and agents live in `.cursor/skills/` and `.cursor/agents/`. Most are only run when called by name, such as `/poteto-mode` or `/interrogate`. `/poteto-mode` links to the rest, so read `.cursor/skills/poteto-mode/SKILL.md` in full before working in that style.
- To see or click the phone page, follow `.cursor/skills/verify-apm-alarms/SKILL.md`. That look uses the Chrome DevTools plugin on the local site. browser-use stays for other people’s websites.
- Claude and GPT are usage-blocked. Do not write them into the model rule even if the tool lists the slugs.
- `docs/product-brief.md` is the master. The topic map (`_data/topic_map.yml`) and `_data/brands.yml` decide what appears. `DESIGN.md` is the look. `PRODUCT.md` is a short summary, so do not add facts there first.
- Step cards are built in `_plugins/screens.rb`, and signal tables are drawn by `_includes/signal-table.html` from `signals:` in a page's front matter. Do not write card or table markup by hand.
- The words, the screens and the writing rules are in the brief. The look is in `DESIGN.md`.
