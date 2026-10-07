import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const siteDir = path.join(root, "_site");

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function field(text, key) {
  const match = text.match(new RegExp("^" + key + ":\\s*(.+)$", "m"));
  if (!match) throw new Error(`missing ${key}`);
  return match[1].trim();
}

const siteTitle = field(read("_config.yml"), "title");
const base = field(read("_config.yml"), "baseurl");

function parseBrands(text) {
  const brands = [];
  let cur = null;
  for (const line of text.split("\n")) {
    const id = line.match(/^- id: (\S+)/);
    if (id) {
      cur = { id: id[1], units: [] };
      brands.push(cur);
      continue;
    }
    if (!cur) continue;
    const name = line.match(/^  name: (.+)$/);
    if (name) cur.name = name[1];
    const units = line.match(/^  units: \[(.*)\]/);
    if (units) cur.units = units[1].split(",").map((part) => part.trim()).filter(Boolean);
  }
  return brands;
}

function parseMap(text) {
  const lists = {};
  const switches = [];
  const units = {};
  const topics = {};
  let section = null;
  let cur = null;
  let switchRow = null;
  for (const line of text.split("\n")) {
    if (/^[a-z]+:$/.test(line)) {
      section = line.slice(0, -1);
      cur = null;
      continue;
    }
    if (section === "lists") {
      const id = line.match(/^  ([a-z]+):$/);
      if (id) {
        cur = id[1];
        lists[cur] = {};
        continue;
      }
      const prop = line.match(/^    (label|other|switch_label): (.+)$/);
      if (prop && cur) lists[cur][prop[1]] = prop[2];
    } else if (section === "switches") {
      if (line.startsWith("  - ")) {
        switchRow = {};
        switches.push(switchRow);
        const first = line.match(/^  - (\w+): (.+)$/);
        if (first) switchRow[first[1]] = first[2];
        continue;
      }
      const prop = line.match(/^    (\w+): (.+)$/);
      if (prop && switchRow) switchRow[prop[1]] = prop[2];
    } else if (section === "units") {
      const id = line.match(/^  ([a-z-]+):$/);
      if (id) {
        cur = id[1];
        units[cur] = {};
        continue;
      }
      const label = line.match(/^    label: (.+)$/);
      if (label && cur) units[cur].label = label[1];
      const list = line.match(/^    (setup|troubleshooting): \[(.*)\]/);
      if (list && cur) {
        units[cur][list[1]] = list[2].split(",").map((part) => part.trim()).filter(Boolean);
      }
    } else if (section === "topics") {
      const id = line.match(/^  ([a-z-]+):$/);
      if (id) {
        cur = id[1];
        topics[cur] = {};
        continue;
      }
      const title = line.match(/^    title: (.+)$/);
      if (title && cur) topics[cur].title = title[1];
    }
  }
  return { lists, switches, units, topics };
}

const brands = parseBrands(read("_data/brands.yml"));
const map = parseMap(read("_data/topic_map.yml"));
let failed = 0;

function fail(message) {
  failed += 1;
  console.error(message);
}

function html(rel) {
  const file = path.join(siteDir, rel);
  if (!fs.existsSync(file)) {
    fail(`missing ${rel}`);
    return "";
  }
  return fs.readFileSync(file, "utf8");
}

// The pages escape & as &amp;. The checks compare the words a person reads.
function unescape(text) {
  return text.replace(/&amp;/g, "&");
}

function titleOf(text) {
  const match = text.match(/<title>([^<]*)<\/title>/);
  return match ? unescape(match[1]) : "";
}

function rowLabels(text) {
  return [...text.matchAll(/class="row-label">([^<]*)</g)].map((match) => unescape(match[1]));
}

function tiles(text) {
  return [...text.matchAll(/class="tile"[^>]*>([\s\S]*?)<\/a>/g)].map((match) =>
    match[1].replace(/<[^>]*>/g, "").trim()
  );
}

function hrefsFor(text, label) {
  const found = [];
  const re = /<a\b([^>]*)>([\s\S]*?)<\/a>/g;
  let match;
  while ((match = re.exec(text))) {
    const visible = match[2].replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
    if (visible !== label) continue;
    const href = match[1].match(/href="([^"]*)"/);
    found.push(href ? href[1] : "");
  }
  return found;
}

function screenTitle(brandName, unitName, pageTitle) {
  if (brandName && unitName) {
    let text = `${brandName} · ${unitName}`;
    if (pageTitle !== unitName) text += ` · ${pageTitle}`;
    return `${text} · ${siteTitle}`;
  }
  if (pageTitle) return `${pageTitle} · ${siteTitle}`;
  return siteTitle;
}

function topicsFor(unitId, list) {
  return (map.units[unitId] && map.units[unitId][list]) || [];
}

function listShown(unitId, list) {
  return topicsFor(unitId, list).length > 0;
}

function shortcutLabels(brand, unitId, list) {
  const found = [];
  const spec = map.lists[list];
  if (spec.other && listShown(unitId, spec.other)) found.push(spec.switch_label);
  for (const row of map.switches) {
    if (row.from !== unitId) continue;
    if (!brand.units.includes(row.to)) continue;
    if (!listShown(row.to, list)) continue;
    found.push(row.label);
  }
  return found;
}

function headerOf(text) {
  const match = text.match(/<header[\s\S]*?<\/header>/);
  return match ? match[0] : "";
}

function pageName(header) {
  const match = header.match(/<h1[^>]*>([^<]*)<\/h1>/);
  return match ? unescape(match[1]) : "";
}

function textNodes(header) {
  return [...header.matchAll(/>([^<]*)</g)]
    .map((match) => unescape(match[1]).replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function oneName(rel, text, name) {
  const header = headerOf(text);
  const shown = pageName(header);
  if (shown !== name) {
    fail(`${rel} page name\ngot: ${shown}\nwant: ${name}`);
    return;
  }
  const copies = textNodes(header).filter((node) => node === name).length;
  if (copies !== 1) fail(`${rel} shows ${name} ${copies} times in the top bar`);
  if (name !== "Brands" && !/<h1[^>]*aria-current="page"/.test(header)) {
    fail(`${rel} page name is not the current step`);
  }
}

function same(rel, got, want, message) {
  const left = Array.isArray(got) ? got.join("\n") : got;
  const right = Array.isArray(want) ? want.join("\n") : want;
  if (left === right) return;
  fail(`${message} in ${rel}\ngot:\n${left}\nwant:\n${right}`);
}

const expected = new Set(["index.html"]);
const home = `${base}/`;

const brandPage = html("index.html");
oneName("index.html", brandPage, "Brands");
if (/<nav class="route"/.test(brandPage)) fail("index.html has a route");
same("index.html", tiles(brandPage), brands.map((brand) => brand.name), "brand order");
same("index.html", titleOf(brandPage), screenTitle(null, null, "Brands"), "title");
same("index.html", hrefsFor(brandPage, "Back"), [], "Back");
same("index.html", hrefsFor(brandPage, "Home"), [], "Home");

for (const brand of brands) {
  const brandRel = `${brand.id}/index.html`;
  expected.add(brandRel);
  const brandHtml = html(brandRel);
  oneName(brandRel, brandHtml, "Unit");
  const unitHeader = headerOf(brandHtml);
  if ((unitHeader.match(new RegExp(`>${brand.name}<`, "g")) || []).length !== 1) {
    fail(`${brandRel} does not show ${brand.name} once`);
  }
  if (new RegExp(`<a[^>]*>${brand.name}</a>`).test(unitHeader)) {
    fail(`${brandRel} links ${brand.name} from its own units`);
  }
  same(brandRel, rowLabels(brandHtml), brand.units.map((id) => map.units[id].label), "unit rows");
  same(brandRel, titleOf(brandHtml), screenTitle(null, null, brand.name), "title");
  same(brandRel, hrefsFor(brandHtml, "Back"), [home], "Back");
  same(brandRel, hrefsFor(brandHtml, "Home"), [home], "Home");

  for (const unitId of brand.units) {
    const unit = map.units[unitId];
    const unitRel = `${brand.id}/${unitId}/index.html`;
    expected.add(unitRel);
    const unitHtml = html(unitRel);
    const shown = Object.keys(map.lists).filter((list) => listShown(unitId, list));
    oneName(unitRel, unitHtml, unit.label);
    same(unitRel, rowLabels(unitHtml), shown.map((list) => map.lists[list].label), "list rows");
    same(unitRel, titleOf(unitHtml), screenTitle(brand.name, unit.label, unit.label), "title");
    same(unitRel, hrefsFor(unitHtml, "Back"), [`${base}/${brand.id}/`], "Back");
    same(unitRel, hrefsFor(unitHtml, "Home"), [home], "Home");

    for (const list of Object.keys(map.lists)) {
      const topics = topicsFor(unitId, list);
      const listRel = `${brand.id}/${unitId}/${list}/index.html`;
      if (!topics.length) continue;
      expected.add(listRel);
      const listHtml = html(listRel);
      const labels = topics.map((id) => map.topics[id].title).concat(shortcutLabels(brand, unitId, list));
      oneName(listRel, listHtml, map.lists[list].label);
      same(listRel, rowLabels(listHtml), labels, "topic rows");
      same(listRel, titleOf(listHtml), screenTitle(brand.name, unit.label, map.lists[list].label), "title");
      same(listRel, hrefsFor(listHtml, "Back"), [`${base}/${brand.id}/${unitId}/`], "Back");
      same(listRel, hrefsFor(listHtml, "Home"), [home], "Home");

      for (const topic of topics) {
        const rel = `${brand.id}/${unitId}/${list}/${topic}/index.html`;
        expected.add(rel);
        const page = html(rel);
        oneName(rel, page, map.topics[topic].title);
        same(rel, titleOf(page), screenTitle(brand.name, unit.label, map.topics[topic].title), "title");
        same(rel, hrefsFor(page, "Back"), [`${base}/${brand.id}/${unitId}/${list}/`], "Back");
        same(rel, hrefsFor(page, "Home"), [home], "Home");
      }
    }
  }
}

function walk(dir, prefix) {
  const found = [];
  for (const name of fs.readdirSync(dir)) {
    const abs = path.join(dir, name);
    const rel = prefix ? `${prefix}/${name}` : name;
    if (fs.statSync(abs).isDirectory()) found.push(...walk(abs, rel));
    else if (name === "index.html") found.push(rel);
  }
  return found;
}

for (const rel of walk(siteDir, "")) {
  if (!expected.has(rel)) fail(`unexpected page ${rel}`);
}

const pairing = "/apm-alarms/emerald/wired/troubleshooting/pairing/";
const signal = html("emerald/wired/troubleshooting/signal/index.html");
same(
  "emerald/wired/troubleshooting/signal/index.html",
  hrefsFor(signal, "Open Pairing"),
  [pairing],
  "Open Pairing"
);

const brooks = html("brooks/wireless/troubleshooting/signal/index.html");
same(
  "brooks/wireless/troubleshooting/signal/index.html",
  hrefsFor(brooks, "Open Testing"),
  ["/apm-alarms/brooks/wireless/setup/testing/"],
  "Open Testing"
);
same("brooks/wireless/troubleshooting/signal/index.html", hrefsFor(brooks, "Open Pairing"), [], "Open Pairing");

function stepBodies(rel) {
  return [...html(rel).matchAll(/class="step-body">([\s\S]*?)<\/span>/g)].map((match) =>
    match[1].replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim()
  );
}

const setupPairing = "emerald/wireless/setup/pairing/index.html";
const troublePairing = "emerald/wireless/troubleshooting/pairing/index.html";
same(troublePairing, stepBodies(troublePairing), stepBodies(setupPairing), "pairing steps");
const testing = "/apm-alarms/emerald/wireless/setup/testing/";
same(setupPairing, hrefsFor(html(setupPairing), "Open Testing"), [testing], "Open Testing");
same(troublePairing, hrefsFor(html(troublePairing), "Open Testing"), [testing], "Open Testing");

const opening = html("red/wired/setup/opening/index.html");
const openingMain = opening.split("<main")[1].split("</main>")[0];
const openingSteps = [...openingMain.matchAll(/<p\b([^>]*)>([\s\S]*?)<\/p>/g)].map((match) => {
  const num = (match[2].match(/class="step-num">(\d+)/) || [])[1] || "";
  const text = match[2]
    .replace(/<span class="step-num">\d+<\/span>/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return `${num}|${text}`;
});
same(
  "red/wired/setup/opening/index.html",
  openingSteps,
  [
    "1|Press the slide lock at the arrow points, then slide the alarm out of the base.",
    "2|Line up the TO OPEN mark on the alarm with the slide lock on the base.",
    "3|Slide the alarm and push it until it clicks.",
    "|The alarm will not slide onto the base until a battery is fitted. Forcing it on without a battery can damage the alarm.",
    "4|The alarm is on when the base is properly engaged."
  ],
  "steps"
);

const remoteRel = "emerald/remote/index.html";
const remotePage = html(remoteRel);
for (const heading of ["Activation", "Pairing", "Use"]) {
  if (!remotePage.includes(`<span>${heading}</span></h2>`)) fail(`${remoteRel} has no ${heading} card`);
}
if (remotePage.includes('<table class="signals">')) fail(`${remoteRel} still has a light and sound table`);
for (const id of ["anka", "brooks", "cavius", "clipsal", "detector-inspector", "gt", "legrand", "lifesaver", "matelec", "red", "siterwell"]) {
  if (fs.existsSync(path.join(siteDir, id, "remote"))) fail(`${id} still has a remote page`);
}
if (/Troubleshoot|Setup/.test(remotePage.split("<main")[1] || "")) fail(`${remoteRel} still offers Setup or Troubleshooting`);
for (const gone of ["setup", "troubleshooting"]) {
  if (fs.existsSync(path.join(siteDir, "emerald/remote", gone))) fail(`emerald remote still has a ${gone} list`);
}

const fixRel = "emerald/wired/troubleshooting/signal/index.html";
const fixPage = html(fixRel).split("</table>")[1] || "";
const fixCards = fixPage.split('<section class="fix"').length - 1;
if (fixCards !== 3) fail(`${fixRel} has ${fixCards} step cards, not 3`);
if (!fixPage.includes('id="low-battery" data-tone="amber"')) fail(`${fixRel} low battery card is not the amber card`);
if (!fixPage.includes('<h2 class="fix-head">')) fail(`${fixRel} step card has no heading`);
if ([...fixPage.matchAll(/<p class="then[^"]*">.*?<\/p>/gs)].some((row) => row[0].includes("step-num"))) fail(`${fixRel} outcome row has a step number`);
const fixSteps = (fixPage.match(/class="step-num">1</g) || []).length;
if (fixSteps !== 3) fail(`${fixRel} numbers do not restart in each card`);
if (!fixPage.includes('<p class="then go">')) fail(`${fixRel} has no linked outcome row`);

const openingCard = openingMain.includes('<section class="fix"');
if (!openingCard) fail("red wired setup opening steps are not in a card");

const placement = html("clipsal/wired/setup/placement/index.html");
if (!placement.includes('class="fix fix-plain"')) fail("clipsal wired setup placement is not in a plain card");
if (placement.includes('class="step-num"')) fail("clipsal wired setup placement has a step number");
if (!placement.includes("300 mm") || !placement.includes("400 mm")) {
  fail("clipsal wired setup placement is missing a clearance");
}
if (placement.includes("These words are not written yet.")) {
  fail("clipsal wired setup placement shows the unwritten note");
}

const sharedPlacement = fs.readFileSync(path.join(root, "_includes/setup-placement.html"), "utf8").trim();
const placementPages = [];
const findPlacement = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const next = path.join(dir, entry.name);
    if (entry.name === "placement" && fs.existsSync(path.join(next, "index.html"))) placementPages.push(next);
    else findPlacement(next);
  }
};
findPlacement(siteDir);
if (placementPages.length === 0) fail("no placement pages were built");
for (const dir of placementPages) {
  const rel = path.relative(siteDir, path.join(dir, "index.html"));
  const page = html(rel);
  const squash = (s) => s.replace(/\s+/g, " ");
  if (!squash(page).includes(squash(sharedPlacement))) fail(`${rel} does not use the shared placement diagram and instructions`);
  if (!page.includes('class="fix fix-plain"')) fail(`${rel} is not in a plain card`);
  if (page.includes('class="step-num"')) fail(`${rel} has a step number`);
}

for (const gone of ["power", "quiet", "false-alarms"]) {
  if (fs.existsSync(path.join(siteDir, "clipsal/wired/troubleshooting", gone, "index.html"))) {
    fail(`clipsal wired troubleshooting ${gone} is still published`);
  }
}

if (failed) {
  console.error(`FAIL ${failed}`);
  process.exit(1);
}
console.log("site checks passed");
