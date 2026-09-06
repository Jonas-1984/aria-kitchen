/* ============================================================
   ARIA Küchen | آریا کابینت – Basis-Interaktionen
   - Mobiles Menü öffnen/schließen
   - Aktiven Navigationspunkt beim Scrollen markieren
   - Jahr im Footer setzen (persische Ziffern)
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Mobiles Menü ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.getElementById("nav-list");

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var open = navList.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "بستن منو" : "باز کردن منو");
    });

    navList.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        navList.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "باز کردن منو");
      }
    });
  }

  /* ---------- Aktiven Navigationspunkt markieren ---------- */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav-list a[href^='#']")
  );
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            var isActive =
              link.getAttribute("href") === "#" + entry.target.id;
            link.classList.toggle("is-active", isActive);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---------- Jahr im Footer (persische Ziffern) ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    var year = new Date().getFullYear();
    try {
      yearEl.textContent = year.toLocaleString("fa-IR", { useGrouping: false });
    } catch (e) {
      yearEl.textContent = String(year);
    }
  }
})();
