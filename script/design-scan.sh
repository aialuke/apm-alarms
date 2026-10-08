#!/bin/sh
# Runs the Impeccable layout scan on a copy of the site built without the /apm-alarms/ folder,
# so the scanner can find assets/site.css. The real _site is not touched.
# Impeccable has one copy, in .agents/skills/impeccable, that every tool folder links to.
set -eu
root=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
scanner="$root/.agents/skills/impeccable/scripts/impeccable"
if [ ! -x "$scanner" ]; then
  echo "Impeccable is missing from .agents/skills/impeccable. Restore it from git." >&2
  exit 1
fi
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
cd "$root"
bundle exec jekyll build --baseurl "" -d "$tmp/site" >/dev/null
# The first run on a machine downloads Impeccable's engine once to ~/.impeccable (needs the internet).
# Without it, this stops with a message saying so.
"$scanner" detect --json --scope "${1:-layout}" "$tmp/site"
