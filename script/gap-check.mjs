import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function parseBrands(text) {
  const brands = [];
  let cur = null;
  for (const line of text.split("\n")) {
    const id = line.match(/^- id: (\S+)/);
    if (id) {
      cur = { id: id[1], units: [], locate: false };
      brands.push(cur);
      continue;
    }
    if (!cur) continue;
    const name = line.match(/^  name: (.+)$/);
    if (name) cur.name = name[1];
    const units = line.match(/^  units: \[(.*)\]/);
    if (units) cur.units = units[1].split(",").map((part) => part.trim()).filter(Boolean);
    const locate = line.match(/^  locate: (\S+)/);
    if (locate) cur.locate = locate[1] === "true";
  }
  return brands;
}

function parseUnits(text) {
  const units = {};
  let cur = null;
  let inUnits = false;
  for (const line of text.split("\n")) {
    if (line === "units:") {
      inUnits = true;
      continue;
    }
    if (inUnits && /^\S/.test(line)) break;
    if (!inUnits) continue;
    const unit = line.match(/^  ([a-z-]+):$/);
    if (unit) {
      cur = unit[1];
      units[cur] = {};
      continue;
    }
    const list = line.match(/^    (setup|troubleshooting): \[(.*)\]/);
    if (list && cur) {
      units[cur][list[1]] = list[2].split(",").map((part) => part.trim()).filter(Boolean);
    }
  }
  return units;
}

function parseInstruction(text) {
  const block = text.match(/^---\n([\s\S]*?)\n---/);
  const data = { lists: null };
  if (!block) return data;
  for (const line of block[1].split("\n")) {
    const lists = line.match(/^lists: \[(.*)\]/);
    if (lists) {
      data.lists = lists[1].split(",").map((part) => part.trim()).filter(Boolean);
      continue;
    }
    const field = line.match(/^(brand|unit|topic): (\S+)/);
    if (field) data[field[1]] = field[2];
  }
  return data;
}

function loadInstructions() {
  const dir = path.join(root, "_instructions");
  return fs.readdirSync(dir).filter((name) => name.endsWith(".md")).map((name) => {
    const data = parseInstruction(read(path.join("_instructions", name)));
    data.file = name;
    return data;
  });
}

const brands = parseBrands(read("_data/brands.yml"));
const units = parseUnits(read("_data/topic_map.yml"));
const docs = loadInstructions();
const listIds = ["setup", "troubleshooting"];

function covers(doc, brandId, unitId, list, topic) {
  if (doc.brand !== brandId || doc.unit !== unitId || doc.topic !== topic) return false;
  const allowed = listIds.filter((name) => (units[unitId][name] || []).includes(topic));
  const requested = doc.lists == null ? allowed : allowed.filter((name) => doc.lists.includes(name));
  return requested.includes(list);
}

const pages = [];
for (const brand of brands) {
  for (const unitId of brand.units) {
    const unit = units[unitId];
    if (!unit) continue;
    for (const list of listIds) {
      for (const topic of unit[list] || []) {
        if (topic === "locate" && !brand.locate) continue;
        const written = docs.some((doc) => covers(doc, brand.id, unitId, list, topic));
        pages.push({ brand, unitId, list, topic, written });
      }
    }
  }
}

const written = pages.filter((page) => page.written);
const empty = pages.filter((page) => !page.written);

function bucket(page) {
  if (page.topic === "pairing" && (page.unitId === "wired" || page.unitId === "wireless")) {
    return "pairing notes exist, phone page empty";
  }
  if (page.topic === "placement" || page.topic === "power" || page.topic === "quiet" || page.topic === "false-alarms" || page.topic === "remote-dead") {
    return "brief already has the words";
  }
  return "manual pass still required";
}

const groups = new Map();
for (const page of empty) {
  const name = bucket(page);
  if (!groups.has(name)) groups.set(name, []);
  groups.get(name).push(page);
}

const unitLabel = { wired: "Wired alarm", wireless: "Wireless alarm", remote: "Remote", rf: "RF module" };
const listLabel = { setup: "Setup", troubleshooting: "Troubleshooting" };

function line(page) {
  return `${page.brand.name}, ${unitLabel[page.unitId]}, ${listLabel[page.list]}, ${page.topic}`;
}

console.log(`pages ${pages.length}`);
console.log(`written ${written.length}`);
console.log(`empty ${empty.length}`);
for (const [name, rows] of groups) console.log(`${name}: ${rows.length}`);

const outArg = process.argv.indexOf("--out");
if (outArg === -1) process.exit(0);

const order = ["brief already has the words", "pairing notes exist, phone page empty", "manual pass still required"];
const parts = [
  "# Content gaps",
  "",
  "What the phone is still missing. This file is not a page on the phone. The count comes from `script/gap-check.mjs`.",
  "",
  `The site can show ${pages.length} instruction pages. ${written.length} have words. ${empty.length} say the words are not written yet.`,
  "",
  "Pairing was the first job on the phone. The later notes are now on the phone where a manual gave the steps. This list does not send anyone to research pairing again.",
  "",
  "`_instructions/anka-wired-mounting.md` is a guard. Wired alarms have no Mounting button, so that file is not one of the written pages.",
  ""
];

parts.push("## Already on the phone", "");
for (const page of written) parts.push(`- ${line(page)}`);
parts.push("");

for (const name of order) {
  const rows = groups.get(name) || [];
  parts.push(`## ${name[0].toUpperCase()}${name.slice(1)}`, "", `${rows.length} pages.`, "");
  for (const page of rows) parts.push(`- ${line(page)}`);
  parts.push("");
}

parts.push(
  "## What the new notes cover",
  "",
  "The manual pass is in five notes files. A page is written where that note found the steps. A note that did not find the steps stays empty.",
  "",
  "- Testing. Wired and wireless, all 12 brands. `docs/testing-research.md`.",
  "- Lights and sounds. Wired, wireless, and remote. `docs/signals-research.md`.",
  "- Mounting, activation, and opening. `docs/install-research.md`.",
  "- Remote pairing and remote use. The 7 brands with a remote. `docs/remote-research.md`.",
  "- RF fitting. Brooks and Emerald. `docs/rf-fitting-research.md`.",
  "",
  "Setup placement, troubleshooting placement, power, quiet alarms, false alarms, and a dead remote stay on the words in `docs/product-brief.md`. They do not need another manual search.",
  ""
);

fs.writeFileSync(path.resolve(process.argv[outArg + 1]), parts.join("\n"));
console.log(`wrote ${process.argv[outArg + 1]}`);
