# Impeccable: source and notices

This project uses Impeccable, a design skill by Paul Bakaus and Renaissance Geek Inc, under the Apache License 2.0 (see `IMPECCABLE-LICENSE`). Everything below is copied unchanged from the Impeccable repository.

- Source: https://github.com/pbakaus/impeccable
- Commit: bbcb29d9dee6c94915d760bcfc36818ad5be66ad
- Skill version: 4.5.0 (engine 0.1.11)

## What was copied, and from where

| In this project | Copied from the Impeccable repository |
| --- | --- |
| `.agents/skills/impeccable/` (the skill) | `.agents/skills/impeccable/` |
| `.claude/agents/impeccable-*.md` | `.claude/agents/` |
| `.cursor/agents/impeccable-*.md` | `.cursor/agents/` |
| `.grok/agents/impeccable-*.md` | `.grok/agents/` |

`IMPECCABLE-SHA256SUMS` lists a checksum for every one of those files, and `sh script/skills-check.sh` fails if any file is edited, added or removed. Do not edit them by hand. To rebuild the list after an update, run this from the project folder:

    { find .agents/skills/impeccable -type f; ls .claude/agents/impeccable-*.md .cursor/agents/impeccable-*.md .grok/agents/impeccable-*.md; } | LC_ALL=C sort | while IFS= read -r f; do shasum -a 256 "$f"; done > .agents/IMPECCABLE-SHA256SUMS

To update, follow "Updating Impeccable" in `SKILLS.md`, then regenerate the checksums and update the commit and version above.

The hook files (`.codex/hooks.json`, `.cursor/hooks.json`, `.claude/settings.json`, `.grok/hooks/impeccable.json`) are written by Impeccable's own `hooks on` command for this project, and are not part of the copy.

## The vendor's own notice


This project includes content derived from third-party work, used under the terms of its original license.

### Platform Design Skills

The `skill/reference/ios.md` and `skill/reference/android.md` platform reference files are distilled from ehmo's `platform-design-skills` (Apple Human Interface Guidelines and Material Design 3 rules), rewritten in Impeccable's voice.

**Original work:** https://github.com/ehmo/platform-design-skills
**Original license:** MIT
**Author:** ehmo

### MIT licence text for the work above

Copied from https://github.com/ehmo/platform-design-skills/blob/main/LICENSE. The upstream file names no copyright holder after the year.

    MIT License
    
    Copyright (c) 2026
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
