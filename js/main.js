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
      if (event.target.closest("a")) {
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

  /* ---------- Hero-Diashow: alle 6 Sekunden wechseln ---------- */
  var slides = document.querySelectorAll(".hero-slide");
  if (slides.length > 1) {
    var slideIdx = 0;
    setInterval(function () {
      slides[slideIdx].classList.remove("is-active");
      slideIdx = (slideIdx + 1) % slides.length;
      slides[slideIdx].classList.add("is-active");
    }, 6000);
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

  /* ---------- Footer-Widget: Uhrzeit, Datum + Wochentag (persisch) ---------- */
  var fwTime = document.getElementById("fw-time");
  var fwDate = document.getElementById("fw-date");

  function updateFooterClock() {
    var now = new Date();
    try {
      if (fwTime) {
        fwTime.textContent = now.toLocaleTimeString("fa-IR", {
          hour: "2-digit",
          minute: "2-digit"
        });
      }
      if (fwDate) {
        fwDate.textContent = now.toLocaleDateString("fa-IR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric"
        });
      }
    } catch (e) {
      if (fwTime) fwTime.textContent = now.toLocaleTimeString();
      if (fwDate) fwDate.textContent = now.toLocaleDateString();
    }
  }

  if (fwTime || fwDate) {
    updateFooterClock();
    setInterval(updateFooterClock, 15000);
  }

  /* ---------- Footer-Widget: Wetter (Tehran, persisch) ---------- */
  var fwWeather = document.getElementById("fw-weather");
  var fwWeatherRow = document.getElementById("fw-weather-row");

  function weatherTextFa(code) {
    if (code === 0) return "آفتابی";
    if (code === 1 || code === 2) return "کمی ابری";
    if (code === 3) return "ابری";
    if (code === 45 || code === 48) return "مه";
    if (code >= 51 && code <= 57) return "نم‌نم باران";
    if (code >= 61 && code <= 67) return "بارانی";
    if (code >= 71 && code <= 77) return "برفی";
    if (code >= 80 && code <= 82) return "رگبار";
    if (code >= 85 && code <= 86) return "بارش برف";
    if (code >= 95) return "رعد و برق";
    return "";
  }

  function toFaDigits(n) {
    try {
      return Number(n).toLocaleString("fa-IR", { useGrouping: false });
    } catch (e) {
      return String(n);
    }
  }

  if (fwWeather && window.fetch) {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=35.6892&longitude=51.389&current=temperature_2m,weather_code&timezone=Asia/Tehran"
    )
      .then(function (r) {
        return r.ok ? r.json() : Promise.reject();
      })
      .then(function (data) {
        var c = data && data.current;
        if (!c || typeof c.temperature_2m !== "number") return Promise.reject();
        var desc = weatherTextFa(c.weather_code);
        fwWeather.textContent =
          "تهران: " + toFaDigits(Math.round(c.temperature_2m)) + "°" +
          (desc ? " " + desc : "");
      })
      .catch(function () {
        if (fwWeatherRow) fwWeatherRow.hidden = true;
      });
  } else if (fwWeatherRow) {
    fwWeatherRow.hidden = true;
  }
})();
