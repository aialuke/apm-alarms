(function () {
  var head = document.querySelector(".nav-scrolls");
  var mini = document.querySelector(".mini");
  if (!head || !mini) return;

  function show(on) {
    mini.classList.toggle("on", on);
  }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      function (entries) {
        show(!entries[0].isIntersecting);
      },
      { rootMargin: "-60px 0px 0px 0px" }
    ).observe(head);
  } else {
    window.addEventListener(
      "scroll",
      function () {
        show(head.getBoundingClientRect().bottom < 60);
      },
      { passive: true }
    );
  }
})();
