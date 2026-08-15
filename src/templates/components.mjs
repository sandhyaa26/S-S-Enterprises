import { icon } from "../data/icons.mjs";
import { diagrams, scene, industryGlyph } from "../data/diagrams.mjs";
import { site } from "../data/site.mjs";
import { esc } from "./layout.mjs";

/* Visual resolver: returns a diagram / scene by key.
   To use real photography later, add an <img> branch keyed on the same names. */
export function visual(key, opts = {}) {
  if (key === "scene") return scene(opts);
  if (diagrams[key]) return diagrams[key];
  return diagrams.straight;
}

export function eyebrow(t) { return `<span class="eyebrow">${esc(t)}</span>`; }

export function sectionHead({ eyebrow: e, title, lead, center }) {
  return `<div class="section-head ${center ? "center" : ""}">
    ${e ? eyebrow(e) : ""}
    <h2>${title}</h2>
    ${lead ? `<p class="lead">${lead}</p>` : ""}
  </div>`;
}

/* CTA cluster used in heroes and bands */
export function ctaRow(variant = "light") {
  const primary = variant === "onDark" ? "btn--primary" : "btn--primary";
  return `<div class="btn-row">
    <a class="btn ${primary} btn--lg" href="/contact/#quote">${icon.doc} Request a Quote</a>
    <a class="btn ${variant === "onDark" ? "btn--outline-light" : "btn--ghost"} btn--lg" href="/contact/#engineer">${icon.headset} Talk to an Engineer</a>
    <a class="btn ${variant === "onDark" ? "btn--outline-light" : "btn--ghost"} btn--lg" href="/products/">${icon.search} Find Your Product</a>
  </div>`;
}

/* Product card (image = diagram fallback) */
export function productCard({ title, desc, href, visualKey, tag, quoteHref = "/contact/#quote" }) {
  return `<article class="card reveal">
    <div class="card__media">${tag ? `<span class="card__tag">${esc(tag)}</span>` : ""}${visual(visualKey)}</div>
    <div class="card__body">
      <h3>${esc(title)}</h3>
      <p>${esc(desc)}</p>
      <div class="pcard__foot">
        <a class="btn btn--ghost" href="${href}">View Product</a>
        <a class="btn btn--primary" href="${quoteHref}">Request Quote</a>
      </div>
    </div>
  </article>`;
}

/* Big core-product card */
export function coreCard({ title, desc, href, cta, visualKey }) {
  return `<article class="card reveal">
    <div class="card__media">${visual(visualKey)}</div>
    <div class="card__body">
      <h3>${esc(title)}</h3>
      <p>${esc(desc)}</p>
      <div class="card__foot"><a class="link-arrow" href="${href}">${esc(cta)} ${icon.arrow}</a></div>
    </div>
  </article>`;
}

/* Feature card (dark section) */
export function feature({ ic, title, desc }) {
  return `<div class="feature reveal">
    <div class="feature__icon">${icon[ic] || icon.cog}</div>
    <h3>${esc(title)}</h3>
    <p>${esc(desc)}</p>
  </div>`;
}

export function mini({ ic, title, desc }) {
  return `<div class="mini reveal">
    <div class="mini__icon">${icon[ic] || icon.check}</div>
    <h3>${esc(title)}</h3>
    <p>${esc(desc)}</p>
  </div>`;
}

/* Spec table from array of [label, value] */
export function specTable(rows, caption) {
  const body = rows.map(([k, v]) => {
    const val = (v == null || v === "" ) ? `<span class="na">Contact us for configuration</span>` : esc(v);
    return `<tr><th scope="row">${esc(k)}</th><td>${val}</td></tr>`;
  }).join("");
  return `<div class="table-wrap"><table class="spec-table">${caption ? `<caption>${esc(caption)}</caption>` : ""}
    <thead><tr><th scope="col">Specification</th><th scope="col">Details</th></tr></thead>
    <tbody>${body}</tbody></table></div>`;
}

/* FAQ accordion */
export function faqBlock(faqs) {
  return `<div class="faq">${faqs.map((f) =>
    `<details><summary>${esc(f.q)}</summary><div class="faq__body"><p>${f.a}</p></div></details>`).join("")}</div>`;
}

/* Pills */
export function pills(items) {
  return `<div class="pill-row">${items.map((t) => `<span class="pill">${icon.check}${esc(t)}</span>`).join("")}</div>`;
}

/* Bullet feature list with check icons */
export function checkList(items) {
  return `<ul style="list-style:none;padding:0;display:grid;gap:10px">${items.map((t) =>
    `<li style="display:flex;gap:10px;align-items:flex-start"><span style="color:var(--red);flex-shrink:0;margin-top:2px">${icon.check}</span><span>${t}</span></li>`).join("")}</ul>`;
}

/* CTA band (dark) */
export function ctaBand({ title, text, primary = ["Request a Quote", "/contact/#quote"], secondary = ["Talk to an Engineer", "/contact/#engineer"] }) {
  return `<section class="section"><div class="container">
    <div class="cta-band"><div class="cta-inline">
      <div><h2>${esc(title)}</h2><p>${esc(text)}</p></div>
      <div class="btn-row">
        <a class="btn btn--primary btn--lg" href="${primary[1]}">${icon.arrow} ${esc(primary[0])}</a>
        <a class="btn btn--outline-light btn--lg" href="${secondary[1]}">${esc(secondary[0])}</a>
      </div>
    </div></div>
  </div></section>`;
}

/* Split media/text */
export function split({ eyebrow: e, title, body, visualKey, reverse, cta }) {
  return `<div class="split ${reverse ? "split--reverse" : ""}">
    <div class="split__media">${visual(visualKey)}</div>
    <div>${e ? eyebrow(e) : ""}<h2>${title}</h2><div>${body}</div>${cta ? `<div class="btn-row" style="margin-top:20px">${cta}</div>` : ""}</div>
  </div>`;
}

/* Related products grid */
export function relatedGrid(items) {
  return `<div class="rel-grid">${items.map((it) =>
    `<a class="rel-card" href="${it.href}"><div style="width:64px;height:64px;flex-shrink:0;border-radius:8px;overflow:hidden">${visual(it.visualKey || "straight")}</div>
      <div><b>${esc(it.title)}</b><span>${esc(it.sub || "View details")}</span></div></a>`).join("")}</div>`;
}

/* Link list (index pages) */
export function linkList(items) {
  return `<div class="link-list">${items.map(([l, h, sub]) =>
    `<a href="${h}"><span>${esc(l)}${sub ? `<br><small style="color:var(--steel);font-weight:400">${esc(sub)}</small>` : ""}</span>${icon.arrow}</a>`).join("")}</div>`;
}

/* Transparency notice re: manufactured vs sourced */
export function sourcingNote(kind = "generic") {
  const map = {
    manufactured: "Manufactured by S S Enterprises.",
    sourced: "Sourced / imported and supplied by S S Enterprises.",
    mixed: "Available as manufactured or sourced/imported items depending on configuration — we confirm sourcing on every enquiry.",
    generic: "S S Enterprises both manufactures and imports products. We clearly confirm whether an item is manufactured in-house or sourced/imported when we quote.",
  };
  return `<div class="prose"><div class="callout"><p><strong>Transparency:</strong> ${esc(map[kind] || map.generic)}</p></div></div>`;
}

/* Standard interior page hero */
export function pageHero({ crumbsHtml = "", title, intro, badge }) {
  return `<section class="page-hero"><div class="container page-hero__inner">
    ${crumbsHtml}
    ${badge ? `<span class="badge" style="margin-bottom:12px">${esc(badge)}</span>` : ""}
    <h1>${title}</h1>
    ${intro ? `<p>${intro}</p>` : ""}
  </div></section>`;
}

/* Enquiry form fields shared bits */
export function quoteFieldset() {
  return `
  <div class="form-grid">
    <div class="field"><label>Name <span class="req">*</span></label><input name="name" required autocomplete="name"></div>
    <div class="field"><label>Company</label><input name="company" autocomplete="organization"></div>
    <div class="field"><label>Email <span class="req">*</span></label><input type="email" name="email" required autocomplete="email"></div>
    <div class="field"><label>Phone <span class="req">*</span></label><input name="phone" required autocomplete="tel"></div>
    <div class="field full"><label>City / Location</label><input name="location"></div>
    <div class="field full"><label>What do you need? <span class="req">*</span></label>
      <select name="interest" required>
        <option value="">Select a product / service…</option>
        <option>Silicon Carbide Heating Elements</option>
        <option>SiC Heater Replacement</option>
        <option>Aluminium Melting Furnace</option>
        <option>Aluminium Holding Furnace</option>
        <option>Ceramic / Refractory Products</option>
        <option>Custom Heating Solution</option>
        <option>Other</option>
      </select></div>
    <div class="field full"><label>Message / requirement</label><textarea name="message" placeholder="Application, temperature, quantity, existing part number, timeline…"></textarea></div>
  </div>`;
}
