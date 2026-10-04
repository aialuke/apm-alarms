(function (root) {
  var LIMIT = 15 * 60 * 1000;
  var STORE = "apm-trail";
  var NAV = "apm-nav";

  function fresh(home) {
    return { hiddenAt: null, entries: [{ path: home, scroll: 0 }] };
  }

  function onOpen(state, now, path, home, nav) {
    var entries = (state.entries || []).map(function (entry) {
      return { path: entry.path, scroll: entry.scroll || 0 };
    });
    var expired = state.hiddenAt && now - state.hiddenAt >= LIMIT;
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
    return {
      redirect: null,
      scroll: 0,
      state: { hiddenAt: null, entries: entries }
    };
  }

  function popBack(state, home) {
    var entries = (state.entries || []).map(function (entry) {
      return { path: entry.path, scroll: entry.scroll || 0 };
    });
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
    var entries = (state.entries || []).map(function (entry) {
      return { path: entry.path, scroll: entry.scroll || 0 };
    });
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

  var home = norm(document.body.getAttribute("data-home") || "/");

  function norm(path) {
    var link = document.createElement("a");
    link.href = path;
    var value = link.pathname || "/";
    if (value.length > 1 && value.charAt(value.length - 1) !== "/") value += "/";
    return value;
  }

  function read() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORE) || "");
      if (!saved || !saved.entries) return fresh(home);
      return saved;
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

  function openPage() {
    var nav = sessionGet(NAV);
    sessionRemove(NAV);
    var result = onOpen(read(), Date.now(), here(), home, nav);
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
    var bar = document.querySelector(".nav");
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
