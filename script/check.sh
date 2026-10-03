#!/bin/sh
set -eu
root=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
site="$root/_site"
pair=$(find "$root/_instructions" -name '*pairing*' | wc -l | tr -d ' ')
if [ "$pair" != "1" ]; then
  echo "expected one pairing source file, found $pair" >&2
  exit 1
fi
if grep -R -q "MOUNTING SHOULD NOT APPEAR" "$site"; then
  echo "dashed mounting page was published" >&2
  exit 1
fi
setup="$site/north/wired/setup/index.html"
trouble="$site/north/wired/troubleshooting/index.html"
setup_page="$site/north/wired/setup/pairing/index.html"
trouble_page="$site/north/wired/troubleshooting/pairing/index.html"
north="$site/north/index.html"
south="$site/south/index.html"
for file in "$setup" "$trouble" "$setup_page" "$trouble_page" "$north" "$south"; do
  if [ ! -f "$file" ]; then
    echo "missing $file" >&2
    exit 1
  fi
done
for file in "$setup" "$trouble"; do
  if ! grep -q "/pairing/" "$file"; then
    echo "pairing is not linked from $file" >&2
    exit 1
  fi
  if grep -q "mounting" "$file"; then
    echo "mounting is linked from $file" >&2
    exit 1
  fi
done
if ! grep -q "Sample pairing step" "$setup_page"; then
  echo "setup pairing page is missing the shared words" >&2
  exit 1
fi
if ! grep -q "Sample pairing step" "$trouble_page"; then
  echo "troubleshooting pairing page is missing the shared words" >&2
  exit 1
fi
if ! grep -q ">Setup<" "$setup_page"; then
  echo "setup route line is missing" >&2
  exit 1
fi
if ! grep -q ">Troubleshooting<" "$trouble_page"; then
  echo "troubleshooting route line is missing" >&2
  exit 1
fi
if ! grep -q "Wireless alarm" "$north"; then
  echo "North is missing the wireless unit" >&2
  exit 1
fi
if grep -q "Wireless alarm" "$south"; then
  echo "South shows a wireless unit the map does not allow" >&2
  exit 1
fi
if grep -q 'id="back"' "$site/index.html"; then
  echo "brand screen shows Back" >&2
  exit 1
fi
if ! grep -q 'id="back"' "$setup_page"; then
  echo "instruction page is missing Back" >&2
  exit 1
fi
echo "site checks passed"
