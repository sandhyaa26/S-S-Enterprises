/* S S Enterprises — minimal progressive-enhancement JS */
(function () {
  "use strict";

  /* ---------- Mobile drawer ---------- */
  var drawer = document.getElementById("drawer");
  var toggle = document.querySelector(".nav-toggle");
  function openDrawer() { if (drawer) { drawer.classList.add("open"); document.body.style.overflow = "hidden"; } }
  function closeDrawer() { if (drawer) { drawer.classList.remove("open"); document.body.style.overflow = ""; } }
  if (toggle) toggle.addEventListener("click", openDrawer);
  if (drawer) {
    drawer.addEventListener("click", function (e) {
      if (e.target.matches("[data-close], .drawer__scrim")) closeDrawer();
    });
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDrawer(); });

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Enquiry forms (client-side; wire to backend/Formspree later) ---------- */
  document.querySelectorAll("form[data-enquiry]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var ok = form.querySelector(".form-success");
      if (ok) { ok.classList.add("show"); ok.scrollIntoView({ behavior: "smooth", block: "center" }); }
      form.querySelectorAll("input,select,textarea,button").forEach(function (el) {
        if (el.type !== "submit") el.value = "";
      });
      // NOTE: replace with real endpoint (Formspree / API) when available.
    });
  });

  var fmt = function (n, d) { return isFinite(n) ? Number(n).toLocaleString("en-IN", { maximumFractionDigits: d == null ? 1 : d }) : "—"; };

  /* ---------- SiC Heating Element Calculator ---------- */
  var elCalc = document.getElementById("sic-calc");
  if (elCalc) {
    var getN = function (id) { var v = parseFloat((document.getElementById(id) || {}).value); return isNaN(v) ? null : v; };
    var setOut = function (id, val) { var e = document.getElementById(id); if (e) e.innerHTML = val; };

    var run = function () {
      var temp = getN("c-temp");        // deg C
      var power = getN("c-power");       // total furnace power (kW)
      var volts = getN("c-volts");       // supply voltage (V)
      var num = getN("c-num");           // number of elements
      var dia = getN("c-dia");           // element diameter (mm)
      var hot = getN("c-hot");           // hot zone length (mm)

      // Estimated total resistance from P = V^2 / R  (whole bank)
      var rTotal = (power && volts) ? (volts * volts) / (power * 1000) : null;
      // Per-element resistance if elements assumed parallel across supply
      var rPer = (rTotal && num) ? rTotal * num : null;
      // Current draw
      var current = (power && volts) ? (power * 1000) / volts : null;
      // Suggested element count from a nominal ~ per-element loading guide (indicative only)
      var suggestN = (power) ? Math.max(2, Math.ceil(power / 3)) : null;

      setOut("o-res", rTotal != null ? fmt(rTotal, 2) + '<span class="unit">Ω total</span>' : "—");
      setOut("o-resper", rPer != null ? fmt(rPer, 2) + '<span class="unit">Ω / element</span>' : "—");
      setOut("o-current", current != null ? fmt(current, 0) + '<span class="unit">A</span>' : "—");
      setOut("o-num", (num || suggestN) ? fmt(num || suggestN, 0) + '<span class="unit">elements</span>' : "—");

      var rec = [];
      if (temp != null) {
        if (temp <= 1200) rec.push("For up to ~1200&deg;C, standard SiC (spiral / straight) configurations are commonly suitable.");
        else if (temp <= 1400) rec.push("Around 1350–1400&deg;C, higher-density Alpha SiC elements are typically preferred.");
        else rec.push("Above ~1500&deg;C, high-grade Alpha SiC with conservative surface loading is recommended.");
      }
      if (dia != null && hot != null) rec.push("Requested geometry: &Oslash;" + fmt(dia,0) + " mm, hot zone " + fmt(hot,0) + " mm.");
      rec.push("These are indicative estimates. Final configuration, surface loading and element grade must be confirmed by our engineers.");
      setOut("o-rec", rec.join(" "));
    };
    elCalc.addEventListener("input", run);
    elCalc.addEventListener("submit", function (e) { e.preventDefault(); run(); });
    run();
  }

  /* ---------- Resistance calculator (temperature ageing) ---------- */
  var rCalc = document.getElementById("res-calc");
  if (rCalc) {
    var g = function (id) { var v = parseFloat((document.getElementById(id) || {}).value); return isNaN(v) ? null : v; };
    var s = function (id, v) { var e = document.getElementById(id); if (e) e.innerHTML = v; };
    var run2 = function () {
      var v = g("r-volts"), p = g("r-power"), n = g("r-num");
      var rBank = (v && p) ? (v * v) / (p * 1000) : null;
      var i = (v && p) ? (p * 1000) / v : null;
      var rEl = (rBank && n) ? rBank * n : null;      // parallel assumption
      s("r-out-bank", rBank != null ? fmt(rBank, 3) + '<span class="unit">Ω</span>' : "—");
      s("r-out-el", rEl != null ? fmt(rEl, 3) + '<span class="unit">Ω</span>' : "—");
      s("r-out-i", i != null ? fmt(i, 1) + '<span class="unit">A</span>' : "—");
    };
    rCalc.addEventListener("input", run2);
    rCalc.addEventListener("submit", function (e) { e.preventDefault(); run2(); });
    run2();
  }

  /* ---------- Resource / article search ---------- */
  var search = document.getElementById("res-search");
  if (search) {
    search.addEventListener("input", function () {
      var q = search.value.trim().toLowerCase();
      document.querySelectorAll("[data-searchable]").forEach(function (item) {
        var txt = (item.getAttribute("data-searchable") || item.textContent).toLowerCase();
        item.style.display = (!q || txt.indexOf(q) !== -1) ? "" : "none";
      });
    });
  }

  /* ---------- Current year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (e) { e.textContent = new Date().getFullYear(); });
})();
