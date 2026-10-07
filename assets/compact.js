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

/* "View fix": glide to the card, wash it once, and stay on this page. */
(function () {
  var main = document.querySelector("main");
  if (!main) return;
  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  main.addEventListener("click", function (event) {
    var link = event.target.closest ? event.target.closest('a[href^="#"]') : null;
    var card = link && document.getElementById(link.getAttribute("href").slice(1));
    if (!card || !card.classList.contains("fix")) return;
    event.preventDefault();
    event.stopPropagation();
    card.scrollIntoView({ behavior: calm ? "auto" : "smooth", block: "start" });
    card.classList.remove("is-arrived");
    void card.offsetWidth;
    card.classList.add("is-arrived");
    card.addEventListener(
      "animationend",
      function () {
        card.classList.remove("is-arrived");
      },
      { once: true }
    );
  });
})();
