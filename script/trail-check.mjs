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
const next = trail.onOpen(shown.state, 5000, topics, home, "forward");
assert(next.redirect === null && next.state.entries[next.state.entries.length - 1].path === topics, "the next tap opens the page that was tapped");

const linked = trail.onOpen(hidden, 3000 + 4 * 60 * 1000, topics, home, null, true);
assert(linked.redirect === null, "a link opened on purpose is not sent to the saved page");
assert(linked.state.entries[linked.state.entries.length - 1].path === topics && linked.state.hiddenAt === null, "a link opened on purpose becomes the page, and stops the timer");
const linkedLate = trail.onOpen(hidden, 3000 + 40 * 60 * 1000, topics, home, null, true);
assert(linkedLate.redirect === null && linkedLate.state.entries[0].path === home && linkedLate.state.entries[1].path === topics, "a link opened after 15 minutes still opens, with Home behind it");
const startedAtHome = trail.onOpen(hidden, 3000 + 4 * 60 * 1000, home, home, null, true);
assert(startedAtHome.redirect === pairing, "starting the app from the home screen still returns to the saved page");

const boundary = trail.onOpen(hidden, 3000 + trail.LIMIT, pairing, home, null);
assert(boundary.redirect === home, "a return at 15 minutes opens the brand screen");

const stayed = trail.onOpen(opened.state, 1000, home, home, "forward");
assert(stayed.state.entries.length === 1, "opening the current page does not start a new visit");

const first = trail.popBack({ hiddenAt: null, entries: [{ path: pairing, scroll: 0 }] }, home);
assert(first.path === home, "Back from the first page opens the brand screen");

if (failed) process.exit(1);

const dom = {
  listeners: {},
  body: { getAttribute: function () { return "/apm-alarms/"; } },
  createElement: function () {
    var el = {};
    Object.defineProperty(el, "href", {
      set: function (value) {
        var path = String(value);
        var slash = path.indexOf("/", path.indexOf("://") + 3);
        if (path.indexOf("://") >= 0 && slash >= 0) path = path.slice(slash);
        var cut = path.search(/[?#]/);
        if (cut >= 0) path = path.slice(0, cut);
        if (path.charAt(0) !== "/") path = "/" + path;
        el.pathname = path;
      }
    });
    el.pathname = "/";
    return el;
  },
  querySelector: function () { return null; },
  getElementById: function (id) { return dom.nodes[id]; },
  addEventListener: function (type, fn) {
    (dom.listeners[type] || (dom.listeners[type] = [])).push(fn);
  },
  nodes: {
    back: { id: "back", addEventListener: function (type, fn) { this["on" + type] = fn; } },
    home: { id: "home", addEventListener: function (type, fn) { this["on" + type] = fn; } }
  }
};
const moves = [];
const blocked = {
  getItem: function () { return null; },
  setItem: function () { throw new Error("storage blocked"); },
  removeItem: function () { throw new Error("storage blocked"); }
};
const browser = {
  document: dom,
  localStorage: blocked,
  sessionStorage: blocked,
  location: {
    pathname: "/apm-alarms/emerald/",
    origin: "http://phone.local",
    assign: function (path) { moves.push(path); },
    replace: function (path) { moves.push(path); }
  },
  addEventListener: function () {},
  requestAnimationFrame: function (fn) { fn(); }
};
browser.window = browser;
vm.runInNewContext(code, browser);
(dom.listeners.DOMContentLoaded || []).forEach(function (fn) {
  try { fn(); } catch (error) { assert(false, "opening the page throws when storage is blocked"); }
});
dom.nodes.back.onclick({ preventDefault: function () {} });
assert(moves[moves.length - 1] === "/apm-alarms/", "Back still opens Brands when saving the trail fails");
dom.nodes.home.onclick({ preventDefault: function () {} });
assert(moves[moves.length - 1] === "/apm-alarms/", "Home still opens Brands when saving the trail fails");

function memoryStorage(seed) {
  var data = Object.assign({}, seed || {});
  return {
    getItem: function (key) {
      return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null;
    },
    setItem: function (key, value) { data[key] = String(value); },
    removeItem: function (key) { delete data[key]; }
  };
}

function boot(spec) {
  var local = memoryStorage(spec.local);
  var session = memoryStorage(spec.session);
  var moves = [];
  var style = {};
  var dom = {
    listeners: {},
    visibilityState: "visible",
    body: { getAttribute: function () { return "/apm-alarms/"; } },
    documentElement: {
      style: { setProperty: function (name, value) { style[name] = value; } }
    },
    createElement: function () {
      var el = { origin: "http://phone.local" };
      Object.defineProperty(el, "href", {
        set: function (value) {
          var path = String(value);
          var slash = path.indexOf("/", path.indexOf("://") + 3);
          if (path.indexOf("://") >= 0 && slash >= 0) path = path.slice(slash);
          var cut = path.search(/[?#]/);
          if (cut >= 0) path = path.slice(0, cut);
          if (path.charAt(0) !== "/") path = "/" + path;
          el.pathname = path;
        }
      });
      el.pathname = "/";
      return el;
    },
    querySelector: function (sel) {
      if (sel === ".nav" && spec.navHeight) return { offsetHeight: spec.navHeight };
      return null;
    },
    getElementById: function (id) { return dom.nodes[id]; },
    addEventListener: function (type, fn) {
      (dom.listeners[type] || (dom.listeners[type] = [])).push(fn);
    },
    nodes: {
      back: {
        id: "back",
        href: spec.backHref || "/apm-alarms/",
        addEventListener: function (type, fn) { this["on" + type] = fn; }
      },
      home: {
        id: "home",
        href: "/apm-alarms/",
        addEventListener: function (type, fn) { this["on" + type] = fn; }
      }
    }
  };
  var browser = {
    document: dom,
    localStorage: local,
    sessionStorage: session,
    scrollY: spec.scrollY || 0,
    location: {
      pathname: spec.pathname,
      origin: "http://phone.local",
      assign: function (path) { moves.push(path); },
      replace: function (path) { moves.push(path); }
    },
    listeners: {},
    addEventListener: function (type, fn) {
      (browser.listeners[type] || (browser.listeners[type] = [])).push(fn);
    },
    requestAnimationFrame: function (fn) { fn(); }
  };
  browser.window = browser;
  vm.runInNewContext(code, browser);
  return { dom: dom, browser: browser, local: local, session: session, moves: moves, style: style };
}

function click(page, target) {
  var event = {
    target: {
      id: target.id,
      origin: target.origin,
      target: target.target || "",
      closest: function (sel) { return sel === "a" ? this : null; }
    }
  };
  (page.dom.listeners.click || []).forEach(function (fn) { fn(event); });
}

var savedTrail = {
  hiddenAt: null,
  entries: [
    { path: "/apm-alarms/", scroll: 0 },
    { path: "/apm-alarms/emerald/wired/", scroll: 0 },
    { path: "/apm-alarms/emerald/wired/troubleshooting/signal/", scroll: 0 }
  ]
};
var signal = "/apm-alarms/emerald/wired/troubleshooting/signal/";
var backPage = boot({
  pathname: signal,
  backHref: "/apm-alarms/wrong/",
  local: { "apm-trail": JSON.stringify(savedTrail) }
});
(backPage.dom.listeners.DOMContentLoaded || []).forEach(function (fn) { fn(); });
backPage.dom.nodes.back.onclick({ preventDefault: function () {} });
assert(backPage.moves[backPage.moves.length - 1] === "/apm-alarms/emerald/wired/", "Back opens the saved page when the link address differs");

var homePage = boot({
  pathname: signal,
  local: { "apm-trail": JSON.stringify(savedTrail) }
});
(homePage.dom.listeners.DOMContentLoaded || []).forEach(function (fn) { fn(); });
homePage.dom.nodes.home.onclick({ preventDefault: function () {} });
assert(homePage.moves[homePage.moves.length - 1] === "/apm-alarms/", "Home opens Brands");
var cleared = JSON.parse(homePage.local.getItem("apm-trail"));
assert(cleared.hiddenAt === null && cleared.entries.length === 1 && cleared.entries[0].path === "/apm-alarms/", "Home clears the trail");

var skip = boot({
  pathname: "/apm-alarms/emerald/",
  local: { "apm-trail": JSON.stringify({ hiddenAt: null, entries: [{ path: "/apm-alarms/emerald/", scroll: 0 }] }) }
});
click(skip, { id: "back" });
assert(skip.session.getItem("apm-nav") !== "forward", "a tap on Back does not mark the move as forward");
click(skip, { id: "home" });
assert(skip.session.getItem("apm-nav") !== "forward", "a tap on Home does not mark the move as forward");

var pairingPage = "/apm-alarms/emerald/wireless/setup/pairing/";
var forwardPage = boot({
  pathname: pairingPage,
  scrollY: 480,
  local: { "apm-trail": JSON.stringify({ hiddenAt: null, entries: [{ path: pairingPage, scroll: 0 }] }) }
});
(forwardPage.dom.listeners.DOMContentLoaded || []).forEach(function (fn) { fn(); });
click(forwardPage, { id: "", origin: "http://phone.local" });
assert(forwardPage.session.getItem("apm-nav") === "forward", "a tap on a page link marks the move as forward");
var scrolled = JSON.parse(forwardPage.local.getItem("apm-trail"));
assert(scrolled.entries[scrolled.entries.length - 1].scroll === 480, "a tap keeps the line you were on");

var outside = boot({
  pathname: "/apm-alarms/emerald/",
  local: { "apm-trail": JSON.stringify({ hiddenAt: null, entries: [{ path: "/apm-alarms/emerald/", scroll: 0 }] }) }
});
click(outside, { id: "", origin: "https://other.example" });
assert(outside.session.getItem("apm-nav") === null, "a tap that leaves the phone does not mark the move");

function hiddenBoot(nav) {
  return boot({
    pathname: pairingPage,
    scrollY: 120,
    session: nav ? { "apm-nav": nav } : {},
    local: { "apm-trail": JSON.stringify({ hiddenAt: null, entries: [{ path: pairingPage, scroll: 0 }] }) }
  });
}

var hide = hiddenBoot(null);
hide.dom.visibilityState = "hidden";
(hide.dom.listeners.visibilitychange || []).forEach(function (fn) { fn(); });
var hiddenState = JSON.parse(hide.local.getItem("apm-trail"));
assert(typeof hiddenState.hiddenAt === "number", "leaving the phone starts the timer");
(hide.browser.listeners.pagehide || []).forEach(function (fn) { fn(); });
hiddenState = JSON.parse(hide.local.getItem("apm-trail"));
assert(typeof hiddenState.hiddenAt === "number", "closing the page starts the timer");

var marked = hiddenBoot("forward");
marked.dom.visibilityState = "hidden";
(marked.dom.listeners.visibilitychange || []).forEach(function (fn) { fn(); });
(marked.browser.listeners.pagehide || []).forEach(function (fn) { fn(); });
var markedState = JSON.parse(marked.local.getItem("apm-trail"));
assert(markedState.hiddenAt === null, "a move already marked does not start the timer");

var bar = boot({
  pathname: "/apm-alarms/",
  navHeight: 64,
  local: { "apm-trail": JSON.stringify({ hiddenAt: null, entries: [{ path: "/apm-alarms/", scroll: 0 }] }) }
});
assert(bar.style["--nav-height"] === "64px", "the page leaves room for the bottom bar");

if (failed) process.exit(1);
console.log("trail checks passed");
