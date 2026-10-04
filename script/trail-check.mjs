import fs from "node:fs";
import vm from "node:vm";

const code = fs.readFileSync(new URL("../assets/trail.js", import.meta.url), "utf8");
const sandbox = { globalThis: {} };
sandbox.window = undefined;
vm.runInNewContext(code, sandbox);
const trail = sandbox.globalThis.APMTrail;
const home = "/apm-alarms/";
const pairing = "/apm-alarms/north/wired/setup/pairing/";
const topics = "/apm-alarms/north/wired/setup/";
let failed = 0;

function assert(ok, message) {
  if (ok) return;
  failed += 1;
  console.error(message);
}

const opened = trail.onOpen({ hiddenAt: null, entries: [] }, 0, home, home, null);
assert(opened.state.entries.length === 1 && opened.state.entries[0].path === home, "first open stores the brand screen");
assert(opened.redirect === null, "first open stays on the brand screen");

const forward = trail.onOpen(opened.state, 1000, topics, home, "forward");
const deep = trail.onOpen(forward.state, 2000, pairing, home, "forward");
deep.state.entries[deep.state.entries.length - 1].scroll = 640;
const hidden = trail.markHidden(deep.state, 3000, pairing, 640);

const backSoon = trail.onOpen(hidden, 3000 + 14 * 60 * 1000, home, home, null);
assert(backSoon.redirect === pairing, "a return within 15 minutes opens the same page");
assert(backSoon.scroll === 640, "a return within 15 minutes keeps the scroll position");

const arrived = trail.onOpen(backSoon.state, 3000 + 14 * 60 * 1000, pairing, home, null);
assert(arrived.redirect === null, "the restored page stays put");
assert(arrived.scroll === 640, "the restored page uses the saved scroll position");
assert(arrived.state.entries.length === 3, "the page Back opens is still on the trail");

const back = trail.popBack(arrived.state, home);
assert(back.path === topics, "Back returns to the previous page");

const leftMidPage = trail.onOpen(back.state, 6000, pairing, home, "forward");
leftMidPage.state.entries[leftMidPage.state.entries.length - 1].scroll = 640;
const jumped = trail.onOpen(leftMidPage.state, 7000, topics, home, "forward");
assert(jumped.state.entries[jumped.state.entries.length - 2].scroll === 640, "leaving a page keeps the line you were on");
const returned = trail.popBack(jumped.state, home);
assert(returned.path === pairing, "Back returns to the page the route left");
const reopened = trail.onOpen(returned.state, 8000, pairing, home, "back");
assert(reopened.scroll === 640, "Back returns to the line you left");
assert(reopened.state.entries.length === returned.state.entries.length, "Back does not start a new visit");

const late = trail.onOpen(hidden, 3000 + 16 * 60 * 1000, pairing, home, null);
assert(late.redirect === home, "a return after 15 minutes opens the brand screen");

const shown = trail.onOpen(hidden, 4000, pairing, home, null);
assert(shown.state.hiddenAt === null, "showing the same page stops the timer");
const next = trail.onOpen(shown.state, 5000, topics, home, "forward");
assert(next.redirect === null && next.state.entries[next.state.entries.length - 1].path === topics, "the next tap opens the page that was tapped");

if (failed) process.exit(1);
console.log("trail checks passed");
