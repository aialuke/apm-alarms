#!/bin/sh
# Runs the Impeccable layout scan on a copy of the site built without the /apm-alarms/ folder,
# so the scanner can find assets/site.css. The real _site is not touched.
set -eu
root=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
cd "$root"
bundle exec jekyll build --baseurl "" -d "$tmp/site" >/dev/null
"$root/.claude/skills/impeccable/scripts/impeccable" detect --json --scope "${1:-layout}" "$tmp/site"
