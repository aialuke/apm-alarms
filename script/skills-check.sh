#!/bin/sh
# Checks the shared skills: one real copy in .agents/skills, and a link to each from the
# tool folders. Impeccable is one of those skills. It also gets a link in .cursor/skills,
# because Impeccable's hook installer finds Cursor by that link.
set -eu
root=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
cd "$root"
fail=0

front_matter() {
  awk 'NR == 1 && $0 != "---" { exit } NR > 1 && $0 == "---" { exit } NR > 1 { print }' "$1"
}

check_link() {
  link=$1; want=$2
  if [ ! -L "$link" ]; then echo "missing link: $link"; fail=1; return; fi
  [ "$(readlink "$link")" = "$want" ] || { echo "wrong target: $link -> $(readlink "$link")"; fail=1; return; }
  [ -e "$link" ] || { echo "broken link: $link"; fail=1; }
}

count=0
for dir in .agents/skills/*/; do
  [ -d "$dir" ] || { echo "no skills found in .agents/skills"; fail=1; break; }
  name=$(basename "$dir")
  count=$((count + 1))
  if [ ! -f "$dir/SKILL.md" ]; then echo "no SKILL.md in $dir"; fail=1; continue; fi
  head=$(front_matter "$dir/SKILL.md")
  head_name=$(printf '%s\n' "$head" | sed -n 's/^name:[[:space:]]*//p' | head -1 | tr -d '"')
  [ "$head_name" = "$name" ] || { echo "$dir/SKILL.md says name '$head_name', folder is '$name'"; fail=1; }
  printf '%s\n' "$head" | grep -q '^description:[[:space:]]*[^[:space:]]' || { echo "$dir/SKILL.md has no description"; fail=1; }
  for tool in .claude .grok; do check_link "$tool/skills/$name" "../../.agents/skills/$name"; done
done
check_link .cursor/skills/impeccable ../../.agents/skills/impeccable

for tool in .claude .cursor .grok; do
  for entry in "$tool"/skills/* "$tool"/skills/.[!.]*; do
    [ -e "$entry" ] || [ -L "$entry" ] || continue
    name=$(basename "$entry")
    if [ ! -L "$entry" ]; then echo "real folder where a link belongs: $entry"; fail=1; continue; fi
    [ -d ".agents/skills/$name" ] || { echo "link to a skill that is gone: $entry"; fail=1; }
    if [ "$tool" = .cursor ] && [ "$name" != impeccable ]; then echo "unexpected link in .cursor/skills: $entry"; fail=1; fi
  done
done

for agent in .cursor/agents/*.md; do
  [ -f "$agent" ] || continue
  name=$(basename "$agent")
  case "$name" in
    impeccable-*)
      for tool in .claude .grok; do
        [ -f "$tool/agents/$name" ] && [ ! -L "$tool/agents/$name" ] || { echo "missing agent file: $tool/agents/$name"; fail=1; }
      done ;;
    *) check_link ".claude/agents/$name" "../../.cursor/agents/$name" ;;
  esac
done
for entry in .claude/agents/*; do
  [ -e "$entry" ] || [ -L "$entry" ] || continue
  [ -e "$entry" ] || { echo "broken link: $entry"; fail=1; }
done

# Every hook file and agent file must point at an Impeccable script that exists, and none may
# use a variable that only exists inside a plugin (the project has no Impeccable plugin).
if grep -rIl 'CLAUDE_PLUGIN_ROOT' .claude .cursor .grok .codex 2>/dev/null | grep -q .; then
  echo "plugin-only path (CLAUDE_PLUGIN_ROOT) found in: $(grep -rIl 'CLAUDE_PLUGIN_ROOT' .claude .cursor .grok .codex | tr '\n' ' ')"; fail=1
fi
script_paths() {
  grep -o '[^" `(]*skills/impeccable/scripts/impeccable' "$1" | sed 's|^\${CLAUDE_PROJECT_DIR}/||' | sort -u || true
}

# Each tool's hook file must exist, point at that tool's own link, and hold the events that tool uses.
check_hook() {
  file=$1; want_path=$2; shift 2
  if [ ! -f "$file" ]; then echo "missing hook file: $file (run 'hooks on' from the project folder)"; fail=1; return; fi
  grep -q "$want_path" "$file" || { echo "$file does not point at $want_path"; fail=1; }
  for event in "$@"; do grep -q "\"$event\"" "$file" || { echo "$file has no $event hook"; fail=1; }; done
  for p in $(script_paths "$file"); do [ -x "$p" ] || { echo "$file points at a missing script: $p"; fail=1; }; done
}
check_hook .claude/settings.json .claude/skills/impeccable/scripts/impeccable PostToolUse Stop
check_hook .codex/hooks.json .agents/skills/impeccable/scripts/impeccable PostToolUse Stop
check_hook .cursor/hooks.json .cursor/skills/impeccable/scripts/impeccable preToolUse
check_hook .grok/hooks/impeccable.json .grok/skills/impeccable/scripts/impeccable PostToolUse Stop
# The Claude hook lives in the shared file only. A second copy in the local file would run it twice.
if [ -f .claude/settings.local.json ] && grep -q 'skills/impeccable/scripts/impeccable' .claude/settings.local.json; then
  echo ".claude/settings.local.json also holds the Impeccable hook; keep it in .claude/settings.json only"; fail=1
fi
for agent in .claude/agents/impeccable-*.md .cursor/agents/impeccable-*.md .grok/agents/impeccable-*.md; do
  [ -f "$agent" ] || continue
  for p in $(script_paths "$agent"); do [ -x "$p" ] || { echo "$agent points at a missing script: $p"; fail=1; }; done
done

# The vendor files must be exactly as copied: no edits, no extra files, none missing.
sums=.agents/IMPECCABLE-SHA256SUMS
if [ ! -s "$sums" ]; then echo "missing: $sums"; fail=1
else
  if command -v shasum >/dev/null 2>&1; then verify="shasum -a 256 -c"; else verify="sha256sum -c"; fi
  bad=$($verify "$sums" 2>&1 | grep -v ': OK$' || true)
  [ -z "$bad" ] || { echo "Impeccable files differ from the vendor copy:"; printf '%s\n' "$bad" | head -5 | sed 's/^/  /'; fail=1; }
  have=$({ find .agents/skills/impeccable -type f; ls .claude/agents/impeccable-*.md .cursor/agents/impeccable-*.md .grok/agents/impeccable-*.md 2>/dev/null; } | LC_ALL=C sort)
  listed=$(awk '{print $2}' "$sums" | LC_ALL=C sort)
  [ "$have" = "$listed" ] || { echo "Impeccable file list differs from $sums"; fail=1; }
fi

for f in .agents/IMPECCABLE-LICENSE .agents/IMPECCABLE-NOTICE.md .agents/IMPECCABLE-SHA256SUMS; do
  [ -s "$f" ] || { echo "missing: $f (Impeccable's licence must stay with it)"; fail=1; }
done

# Commands built into the tools themselves (not skills), which SKILLS.md may mention.
tool_commands="hooks hooks-trust"
names=$(grep -o '`/[a-z][a-z0-9-]*`' SKILLS.md | tr -d '`/' | sort -u || true)
if [ -z "$names" ]; then echo "SKILLS.md names no skills"; fail=1; fi
for name in $names; do
  case " $tool_commands " in *" $name "*) continue ;; esac
  [ -d ".agents/skills/$name" ] || { echo "SKILLS.md names a skill that does not exist: $name"; fail=1; }
done

# Every skill must say when to reach for it.
for dir in .agents/skills/*/; do
  [ -d "$dir" ] || continue
  name=$(basename "$dir")
  grep -q "\`/$name\`" SKILLS.md || { echo "SKILLS.md does not say when to use: $name"; fail=1; }
done

[ "$count" -gt 0 ] || fail=1
[ "$fail" -eq 0 ] && echo "skills checks passed"
exit "$fail"
