import fs from "node:fs";
import path from "node:path";

const fileArg = process.argv[2];
const profileName = process.argv[3];
if (!fileArg || !profileName) {
  console.error("usage: node script/research-check.mjs <notes.md> <profile>");
  process.exit(1);
}

const brands = [
  "Anka", "Brooks", "Cavius", "Clipsal", "Detector Inspector", "Emerald",
  "GT", "Legrand", "Lifesaver", "Matelec", "Red", "Siterwell"
];
const remoteBrands = ["Anka", "Brooks", "Cavius", "Emerald", "GT", "Matelec", "Red"];
const rfBrands = ["Brooks", "Emerald"];

const testingFields = [
  "Result", "Model", "Source", "Sheet line", "How to start the test", "How long to hold",
  "What this alarm does", "What the other alarms do", "Wait after the test", "Manual is silent on"
];
const signalFields = ["Result", "Model", "Source", "Sheet line", "Signals", "Manual is silent on"];
const installFields = ["Result", "Model", "Source", "Sheet line", "Steps", "Manual is silent on"];
const remoteFields = [
  "Result", "Model", "Source", "Sheet line", "Enter pairing mode", "Join the alarm",
  "Confirmation", "Time limit", "What the controls do", "Manual is silent on"
];
const fittingFields = ["Result", "Model", "Source", "Sheet line", "Which way it fits", "Manual is silent on"];

function headingsFor(profile) {
  if (profile === "testing" || profile === "signals") {
    const units = profile === "testing" ? ["wired alarm", "wireless alarm"] : ["wired alarm", "wireless alarm"];
    const rows = [];
    for (const brand of brands) for (const unit of units) rows.push(`${brand}, ${unit}`);
    if (profile === "signals") for (const brand of remoteBrands) rows.push(`${brand}, remote`);
    return rows;
  }
  if (profile === "install") {
    const rows = [];
    for (const brand of brands) {
      rows.push(`${brand}, wireless alarm, mounting`);
      rows.push(`${brand}, wireless alarm, activation`);
      rows.push(`${brand}, wired alarm, opening`);
    }
    for (const brand of remoteBrands) rows.push(`${brand}, remote, activation`);
    return rows;
  }
  if (profile === "remote") return remoteBrands.map((brand) => `${brand}, remote`);
  if (profile === "fitting") return rfBrands.map((brand) => `${brand}, RF module`);
  throw new Error(`unknown profile ${profile}`);
}

const fields = {
  testing: testingFields,
  signals: signalFields,
  install: installFields,
  remote: remoteFields,
  fitting: fittingFields
}[profileName];

const text = fs.readFileSync(path.resolve(fileArg), "utf8");
const sections = new Map();
for (const part of text.split(/^## /m).slice(1)) {
  const end = part.indexOf("\n");
  const title = part.slice(0, end).trim();
  sections.set(title, part.slice(end + 1));
}

let failed = 0;
function fail(message) {
  failed += 1;
  console.error(message);
}

for (const title of headingsFor(profileName)) {
  const body = sections.get(title);
  if (!body) {
    fail(`missing section ${title}`);
    continue;
  }
  for (const field of fields) {
    if (!body.includes(`**${field}.**`)) fail(`${title} missing ${field}`);
  }
  const result = body.match(/\*\*Result\.\*\*\s*([^\n]+)/);
  if (!result) {
    fail(`${title} has no Result line`);
  } else if (!/Found in a manual|Not found/.test(result[1])) {
    fail(`${title} Result is neither Found in a manual nor Not found`);
  }
  const source = body.match(/\*\*Source\.\*\*\s*([\s\S]*?)\n\n/);
  if (!source || !/https?:\/\//.test(source[1])) fail(`${title} Source has no opened link`);
}

if (failed) {
  console.error(`FAIL ${failed}`);
  process.exit(1);
}
console.log(`PASS ${headingsFor(profileName).length} sections`);
