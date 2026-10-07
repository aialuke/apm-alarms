(function (root) {
  var LIMIT = 15 * 60 * 1000;
  var STORE = "apm-trail";
  var NAV = "apm-nav";
  var MAX_ENTRIES = 50;

  function fresh(home) {
    return { hiddenAt: null, entries: [{ path: home, scroll: 0 }] };
  }

  function validPath(path, home) {
    if (path === home) return true;
    if (typeof path !== "string" || path.indexOf(home) !== 0 || path.slice(-1) !== "/") return false;
    var parts = path.slice(home.length, -1).split("/");
    return parts.length > 0 && parts.every(function (part) {
      return /^[a-z0-9_-]+$/i.test(part);
    });
  }

  function clean(state, home) {
    if (!state || !Array.isArray(state.entries)) return fresh(home);
    var entries = state.entries.filter(function (entry) {
      return entry && validPath(entry.path, home);
    }).map(function (entry) {
      var scroll = Number(entry.scroll);
      return { path: entry.path, scroll: Number.isFinite(scroll) && scroll > 0 ? scroll : 0 };
    });
    if (!entries.length || entries[0].path !== home) entries.unshift({ path: home, scroll: 0 });
    if (entries.length > MAX_ENTRIES) entries = [entries[0]].concat(entries.slice(-(MAX_ENTRIES - 1)));
    var hiddenAt = Number(state.hiddenAt);
    return { hiddenAt: Number.isFinite(hiddenAt) && hiddenAt > 0 ? hiddenAt : null, entries: entries };
  }

  // `link` is true when someone opened this page on purpose from outside the app: a bookmark, a shared link, a typed address.
  function onOpen(state, now, path, home, nav, link) {
    state = clean(state, home);
    var entries = state.entries.slice();
    var expired = state.hiddenAt && now - state.hiddenAt >= LIMIT;
    if (link && path !== home) {
      var kept = expired ? fresh(home).entries : entries;
      var last = kept[kept.length - 1];
      if (!last || last.path !== path) kept.push({ path: path, scroll: 0 });
      if (kept.length > MAX_ENTRIES) kept.splice(1, kept.length - MAX_ENTRIES);
      return {
        redirect: null,
        scroll: 0,
        state: { hiddenAt: null, entries: kept }
      };
    }
    if (expired) {
      return {
        redirect: path === home ? null : home,
        scroll: 0,
        state: fresh(home)
      };
    }
    if (state.hiddenAt) {
      var saved = entries[entries.length - 1];
      if (saved && saved.path !== path) {
        return { redirect: saved.path, scroll: saved.scroll, state: state };
      }
      return {
        redirect: null,
        scroll: saved ? saved.scroll : 0,
        state: { hiddenAt: null, entries: entries }
      };
    }
    if (nav === "back") {
      var backTop = entries[entries.length - 1];
      var same = backTop && backTop.path === path;
      return {
        redirect: null,
        scroll: same ? backTop.scroll : 0,
        state: { hiddenAt: null, entries: entries }
      };
    }
    var top = entries[entries.length - 1];
    if (!top || top.path !== path) entries.push({ path: path, scroll: 0 });
    if (entries.length > MAX_ENTRIES) entries.splice(1, entries.length - MAX_ENTRIES);
    return {
      redirect: null,
      scroll: 0,
      state: { hiddenAt: null, entries: entries }
    };
  }

  function popBack(state, home) {
    state = clean(state, home);
    var entries = state.entries.slice();
    if (entries.length < 2) return { path: home, state: fresh(home) };
    entries.pop();
    return {
      path: entries[entries.length - 1].path,
      state: { hiddenAt: null, entries: entries }
    };
  }

  function goHome(home) {
    return { path: home, state: fresh(home) };
  }

  function markHidden(state, now, path, scroll) {
    var homePath = state && Array.isArray(state.entries) && state.entries[0]
      ? state.entries[0].path
      : "/";
    state = clean(state, homePath);
    var entries = state.entries.slice();
    var top = entries[entries.length - 1];
    if (top && top.path === path) top.scroll = scroll;
    return { hiddenAt: now, entries: entries };
  }

  root.APMTrail = {
    LIMIT: LIMIT,
    onOpen: onOpen,
    popBack: popBack,
    goHome: goHome,
    markHidden: markHidden
  };

  if (!root.document) return;

  function normalizeHome(path) {
    var link = document.createElement("a");
    link.href = path;
    var value = link.pathname || "/";
    if (value.indexOf("//") === 0) return "/";
    if (value.length > 1 && value.charAt(value.length - 1) !== "/") value += "/";
    return value;
  }

  var home = normalizeHome(document.body.getAttribute("data-home") || "/");

  function norm(path) {
    var link = document.createElement("a");
    link.href = path;
    var value = link.pathname || "/";
    if (link.origin !== location.origin || !validPath(value, home)) return home;
    if (value.length > 1 && value.charAt(value.length - 1) !== "/") value += "/";
    return value;
  }

  function read() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORE) || "");
      return clean(saved, home);
    } catch (error) {
      return fresh(home);
    }
  }

  function write(state) {
    try {
      localStorage.setItem(STORE, JSON.stringify(state));
    } catch (error) {}
  }

  function sessionGet(key) {
    try {
      return sessionStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function sessionSet(key, value) {
    try {
      sessionStorage.setItem(key, value);
    } catch (error) {}
  }

  function sessionRemove(key) {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {}
  }

  function here() {
    return norm(location.pathname);
  }

  function openedByLink(nav) {
    if (nav) return false;
    try {
      var entry = performance.getEntriesByType("navigation")[0];
      if (!entry || entry.type !== "navigate") return false;
      return !document.referrer || new URL(document.referrer).origin !== location.origin;
    } catch (error) {
      return false;
    }
  }

  function openPage() {
    var nav = sessionGet(NAV);
    sessionRemove(NAV);
    var result = onOpen(read(), Date.now(), here(), home, nav, openedByLink(nav));
    write(result.state);
    if (result.redirect && norm(result.redirect) !== here()) {
      location.replace(result.redirect);
      return;
    }
    if (result.scroll) {
      requestAnimationFrame(function () {
        scrollTo(0, result.scroll);
      });
    }
  }

  function rememberScroll() {
    var state = read();
    var entries = state.entries || [];
    var top = entries[entries.length - 1];
    if (top && top.path === here()) top.scroll = scrollY || 0;
    write(state);
  }

  function matchNavClearance() {
    var bar = document.querySelector(".mini") || document.querySelector(".nav");
    if (!bar) return;
    var apply = function () {
      document.documentElement.style.setProperty("--nav-height", bar.offsetHeight + "px");
    };
    apply();
    if (typeof ResizeObserver === "function") {
      new ResizeObserver(apply).observe(bar);
    } else {
      window.addEventListener("resize", apply);
    }
  }

  matchNavClearance();
  document.addEventListener("DOMContentLoaded", openPage);

  document.addEventListener("click", function (event) {
    var link = event.target.closest ? event.target.closest("a") : null;
    if (!link || link.id === "back" || link.id === "home" || link.target || link.origin !== location.origin) return;
    sessionSet(NAV, "forward");
    rememberScroll();
  });

  document.addEventListener("visibilitychange", function () {
    if (sessionGet(NAV)) return;
    if (document.visibilityState === "hidden") {
      write(markHidden(read(), Date.now(), here(), scrollY || 0));
      return;
    }
    var result = onOpen(read(), Date.now(), here(), home, null);
    write(result.state);
    if (result.redirect && norm(result.redirect) !== here()) {
      location.replace(result.redirect);
      return;
    }
    if (result.scroll) scrollTo(0, result.scroll);
  });

  window.addEventListener("pagehide", function () {
    if (sessionGet(NAV)) return;
    write(markHidden(read(), Date.now(), here(), scrollY || 0));
  });

  document.addEventListener("DOMContentLoaded", function () {
    var back = document.getElementById("back");
    var homeButton = document.getElementById("home");
    if (back) {
      back.addEventListener("click", function (event) {
        var result = popBack(read(), home);
        write(result.state);
        sessionSet(NAV, "back");
        if (event && event.preventDefault) event.preventDefault();
        location.assign(result.path);
      });
    }
    if (homeButton) {
      homeButton.addEventListener("click", function (event) {
        var result = goHome(home);
        write(result.state);
        sessionSet(NAV, "forward");
        if (event && event.preventDefault) event.preventDefault();
        location.assign(result.path);
      });
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
