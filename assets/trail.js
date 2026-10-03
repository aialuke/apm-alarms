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
      return {
        redirect: null,
        scroll: backTop ? backTop.scroll : 0,
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
    localStorage.setItem(STORE, JSON.stringify(state));
  }

  function here() {
    return norm(location.pathname);
  }

  function openPage() {
    var nav = sessionStorage.getItem(NAV);
    sessionStorage.removeItem(NAV);
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

  document.addEventListener("DOMContentLoaded", openPage);

  document.addEventListener("click", function (event) {
    var link = event.target.closest ? event.target.closest("a") : null;
    if (!link || link.target || link.origin !== location.origin) return;
    sessionStorage.setItem(NAV, "forward");
    rememberScroll();
  });

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      if (sessionStorage.getItem(NAV)) return;
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
    if (sessionStorage.getItem(NAV)) {
      rememberScroll();
      return;
    }
    write(markHidden(read(), Date.now(), here(), scrollY || 0));
  });

  function fitRoute() {
    var routes = document.querySelectorAll(".route");
    for (var i = 0; i < routes.length; i++) {
      var nav = routes[i];
      var overflow = nav.scrollWidth > nav.clientWidth + 1;
      nav.classList.toggle("is-overflow", overflow);
      if (overflow) nav.scrollLeft = nav.scrollWidth;
    }
  }

  document.addEventListener("DOMContentLoaded", fitRoute);
  window.addEventListener("resize", fitRoute);

  document.addEventListener("DOMContentLoaded", function () {
    var back = document.getElementById("back");
    var homeButton = document.getElementById("home");
    if (back) {
      back.addEventListener("click", function () {
        var result = popBack(read(), home);
        write(result.state);
        sessionStorage.setItem(NAV, "back");
        location.assign(result.path);
      });
    }
    if (homeButton) {
      homeButton.addEventListener("click", function () {
        var result = goHome(home);
        write(result.state);
        sessionStorage.setItem(NAV, "forward");
        location.assign(result.path);
      });
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
