#!/bin/sh
set -eu
root=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
site="$root/_site"

if grep -R -q "MOUNTING SHOULD NOT APPEAR" "$site"; then
  echo "dashed mounting page was published" >&2
  exit 1
fi

if grep -R -q ">Locate<" "$site"; then
  echo "Locate is shown before a brand is named" >&2
  exit 1
fi

labels() {
  sed -n 's/.*class="row-label">\([^<]*\)<.*/\1/p' "$1"
}

tiles() {
  sed -n 's/.*class="tile"[^>]*>\(.*\)<\/a>.*/\1/p' "$1" | sed 's/<[^>]*>//g'
}

expect_lines() {
  file=$1
  shift
  got=$(labels "$file")
  want=$(printf '%s\n' "$@")
  if [ "$got" != "$want" ]; then
    echo "labels in $file" >&2
    printf 'got:\n%s\nwant:\n%s\n' "$got" "$want" >&2
    exit 1
  fi
}

got=$(tiles "$site/index.html")
want=$(printf '%s\n' \
  Anka Brooks Cavius Clipsal "Detector Inspector" Emerald GT \
  Legrand Lifesaver Matelec Red Siterwell)
if [ "$got" != "$want" ]; then
  echo "brand screen order" >&2
  printf 'got:\n%s\nwant:\n%s\n' "$got" "$want" >&2
  exit 1
fi

expect_lines "$site/emerald/index.html" "Wired alarm" "Wireless alarm" "RF module" "Remote"
expect_lines "$site/brooks/index.html" "Wired alarm" "Wireless alarm" "RF module" "Remote"
expect_lines "$site/anka/index.html" "Wired alarm" "Wireless alarm" "Remote"
expect_lines "$site/clipsal/index.html" "Wired alarm" "Wireless alarm"
expect_lines "$site/emerald/rf/index.html" "Setup"
expect_lines "$site/emerald/wired/setup/index.html" \
  Placement Opening Pairing Testing "Troubleshoot this alarm" "View Wireless alarm"
expect_lines "$site/anka/remote/troubleshooting/index.html" \
  "What's that light or sound?" "Remote won't work." Pairing "Set up this alarm"

note="$site/clipsal/wired/setup/placement/index.html"
if ! grep -q "These words are not written yet." "$note"; then
  echo "empty topic is missing the note" >&2
  exit 1
fi
if grep -q 'id="back"' "$site/index.html"; then
  echo "brand screen shows Back" >&2
  exit 1
fi
if grep -q 'id="home"' "$site/index.html"; then
  echo "brand screen shows Home" >&2
  exit 1
fi
if ! grep -q 'id="back"' "$note"; then
  echo "instruction page is missing Back" >&2
  exit 1
fi
if ! grep -q 'id="home"' "$note"; then
  echo "instruction page is missing Home" >&2
  exit 1
fi
unit="$site/emerald/index.html"
if ! grep -q 'id="back" href="/apm-alarms/"' "$unit"; then
  echo "unit screen Back does not open Brands without the script" >&2
  exit 1
fi
if ! grep -q 'id="home" href="/apm-alarms/"' "$unit"; then
  echo "unit screen Home does not open Brands without the script" >&2
  exit 1
fi
echo "site checks passed"
