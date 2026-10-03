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
wireless_setup="$site/north/wireless/setup/index.html"
south_setup="$site/south/wired/setup/index.html"
if ! grep -q "Troubleshoot this alarm" "$setup"; then
  echo "North wired setup is missing the troubleshooting shortcut" >&2
  exit 1
fi
if ! grep -q "View Wireless alarm" "$setup"; then
  echo "North wired setup is missing the wireless shortcut" >&2
  exit 1
fi
if ! grep -q "Set up this alarm" "$trouble"; then
  echo "North wired troubleshooting is missing the setup shortcut" >&2
  exit 1
fi
if grep -q "View Wireless alarm" "$trouble"; then
  echo "North wired troubleshooting links to a wireless list that has no steps" >&2
  exit 1
fi
if ! grep -q "View Wired alarm" "$wireless_setup"; then
  echo "North wireless setup is missing the wired shortcut" >&2
  exit 1
fi
if grep -q "Troubleshoot this alarm" "$wireless_setup"; then
  echo "North wireless setup offers troubleshooting it does not have" >&2
  exit 1
fi
if grep -q "View Wireless alarm" "$south_setup"; then
  echo "South offers a wireless shortcut the brand does not have" >&2
  exit 1
fi
if grep -q "Troubleshoot this alarm" "$south_setup"; then
  echo "South wired setup offers troubleshooting it does not have" >&2
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
