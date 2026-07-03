/* AURUM51 — interactions: sticky header, mobile nav, scroll reveal, year */
(function () {
  "use strict";

  // Sticky header state
  var hdr = document.querySelector(".hdr");
  var onScroll = function () {
    if (!hdr) return;
    hdr.classList.toggle("scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile navigation toggle
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  // Scroll reveal via IntersectionObserver
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Current year in footer
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Carousels: prev/next paging + disabled-state sync
  document.querySelectorAll("[data-carousel]").forEach(function (c) {
    var track = c.querySelector(".carousel-track");
    if (!track) return;
    var prev = c.querySelector("[data-prev]");
    var next = c.querySelector("[data-next]");
    var page = function () { return Math.max(track.clientWidth * 0.82, 260); };
    var update = function () {
      if (!prev || !next) return;
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    };
    if (next) next.addEventListener("click", function () {
      track.scrollBy({ left: page(), behavior: "smooth" });
    });
    if (prev) prev.addEventListener("click", function () {
      track.scrollBy({ left: -page(), behavior: "smooth" });
    });
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
})();
