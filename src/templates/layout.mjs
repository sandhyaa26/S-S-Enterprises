import { site, nav, footerNav } from "../data/site.mjs";
import { icon } from "../data/icons.mjs";

/* ---------- helpers ---------- */
export const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const url = (p) => site.domain.replace(/\/$/, "") + p;

/* ---------- structured data ---------- */
function orgSchema() {
  return {
    "@context": "https://schema.org", "@type": "Organization",
    name: site.name, url: site.domain, description: site.supporting,
    address: { "@type": "PostalAddress", addressLocality: site.contact.city, addressRegion: site.contact.state, addressCountry: "IN" },
    email: site.contact.email, telephone: site.contact.phoneDisplay,
    areaServed: "IN",
    knowsAbout: ["Silicon carbide heating elements", "Aluminium melting furnaces", "Technical ceramics", "Refractory products"],
  };
}
function breadcrumbSchema(crumbs) {
  if (!crumbs || crumbs.length < 2) return null;
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: c.href ? url(c.href) : undefined })),
  };
}
function faqSchema(faqs) {
  if (!faqs || !faqs.length) return null;
  return {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") } })),
  };
}

/* ---------- header ---------- */
function headerNav() {
  const items = nav.map((n) => {
    if (n.mega && n.columns) {
      const cols = n.columns.map((col) =>
        `<div><div class="dropdown-head">${esc(col.head)}</div>${col.links.map(([l, h]) => `<a href="${h}">${esc(l)}</a>`).join("")}</div>`).join("");
      return `<li class="has-mega"><a class="nav-link" href="${n.href}">${esc(n.label)} ${icon.chevron}</a>
        <div class="dropdown ${n.columns.length > 1 ? "wide" : ""}">${cols}</div></li>`;
    }
    return `<li><a class="nav-link" href="${n.href}">${esc(n.label)}</a></li>`;
  }).join("");
  return `<nav class="main-nav" aria-label="Primary">
    <ul>${items}</ul>
  </nav>
  <div class="header-cta">
    <a class="btn btn--ghost" href="tel:${site.contact.phoneHref}">${icon.phone} Call</a>
    <a class="btn btn--primary" href="/contact/#quote">Request a Quote</a>
  </div>`;
}

function drawer() {
  const items = nav.map((n) => {
    if (n.mega && n.columns) {
      const links = n.columns.flatMap((c) => c.links).map(([l, h]) => `<a href="${h}">${esc(l)}</a>`).join("");
      return `<details><summary>${esc(n.label)}</summary><div class="sub"><a href="${n.href}"><strong>All ${esc(n.label)}</strong></a>${links}</div></details>`;
    }
    return `<a href="${n.href}">${esc(n.label)}</a>`;
  }).join("");
  return `<div class="drawer" id="drawer" aria-hidden="true">
    <div class="drawer__scrim" data-close></div>
    <div class="drawer__panel" role="dialog" aria-label="Menu">
      <div class="drawer__head">
        <img src="/assets/logo.svg" alt="${site.name}" height="34">
        <button class="drawer__close" data-close aria-label="Close menu">&times;</button>
      </div>
      <nav>${items}</nav>
      <div class="drawer__cta">
        <a class="btn btn--primary btn--block" href="/contact/#quote">Request a Quote</a>
        <a class="btn btn--ghost btn--block" href="/solutions/sic-heater-replacement/">Replacement Heater</a>
        <a class="btn btn--ghost btn--block" href="tel:${site.contact.phoneHref}">${icon.phone} ${esc(site.contact.phoneDisplay)}</a>
      </div>
    </div>
  </div>`;
}

function header() {
  return `<header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="/" aria-label="${site.name} — home">
        <img src="/assets/logo.svg" alt="${site.name} logo" width="196" height="42">
      </a>
      ${headerNav()}
      <button class="nav-toggle" aria-label="Open menu" aria-controls="drawer"><span></span></button>
    </div>
  </header>${drawer()}`;
}

/* ---------- footer ---------- */
function footer() {
  const c = site.contact;
  const cols = Object.entries(footerNav).map(([head, links]) =>
    `<div class="footer-col"><h4>${esc(head)}</h4><ul>${links.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join("")}</ul></div>`).join("");
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="/assets/logo.svg" alt="${site.name}">
          <p>${esc(site.positioning)}.</p>
          <p style="font-size:.82rem;color:#6C757F;margin-top:6px">${esc(site.tagline)}</p>
          <ul class="footer-contact" style="margin-top:14px">
            <li>${icon.pin}<span>${esc(c.addressLine)}, ${esc(c.city)}, ${esc(c.state)}, ${esc(c.country)}</span></li>
            <li>${icon.phone}<a href="tel:${c.phoneHref}">${esc(c.phoneDisplay)}</a></li>
            <li>${icon.mail}<a href="mailto:${c.email}">${esc(c.email)}</a></li>
            <li>${icon.clock}<span>${esc(c.hours)}</span></li>
          </ul>
        </div>
        ${cols}
      </div>
      <div class="footer-bottom">
        <span>&copy; <span data-year>2026</span> ${esc(site.legalName)}. All rights reserved. ${esc(site.positioning)}.</span>
        <div class="footer-social">
          <a href="https://wa.me/${c.whatsappHref}" aria-label="WhatsApp" rel="noopener">${icon.whatsapp}</a>
          ${c.linkedin ? `<a href="${c.linkedin}" aria-label="LinkedIn" rel="noopener">${icon.linkedin}</a>` : ""}
          <a href="mailto:${c.email}" aria-label="Email">${icon.mail}</a>
        </div>
      </div>
    </div>
  </footer>`;
}

/* ---------- mobile sticky bar ---------- */
function mobileBar() {
  const c = site.contact;
  return `<div class="mobile-bar" role="navigation" aria-label="Quick actions">
    <a href="tel:${c.phoneHref}">${icon.phone}<span>Call</span></a>
    <a class="is-wa" href="https://wa.me/${c.whatsappHref}" rel="noopener">${icon.whatsapp}<span>WhatsApp</span></a>
    <a class="is-primary" href="/contact/#quote">${icon.doc}<span>Request Quote</span></a>
  </div>`;
}

/* ---------- breadcrumb ---------- */
export function breadcrumb(crumbs) {
  if (!crumbs || !crumbs.length) return "";
  const items = crumbs.map((c, i) => {
    const last = i === crumbs.length - 1;
    return `<li>${last || !c.href ? `<span>${esc(c.label)}</span>` : `<a href="${c.href}">${esc(c.label)}</a>`}</li>`;
  }).join("");
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><ol>${items}</ol></nav>`;
}

/* =========================================================================
   Page shell
   ========================================================================= */
export function page(opts) {
  const {
    title, description, path = "/", body = "", crumbs = null, faqs = null,
    schema = [], ogType = "website", bodyClass = "",
  } = opts;

  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  const canonical = url(path);
  const schemas = [orgSchema(), breadcrumbSchema(crumbs), faqSchema(faqs), ...schema].filter(Boolean);
  const ld = schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="theme-color" content="#C1121F">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="${site.locale}">
<meta property="og:image" content="${url("/assets/og-default.svg")}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(fullTitle)}">
<meta name="twitter:description" content="${esc(description)}">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/logo.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"></noscript>
<link rel="stylesheet" href="/assets/main.css">
${ld}
</head>
<body class="${bodyClass}">
<a href="#main" class="btn btn--primary" style="position:absolute;left:-999px;top:0;z-index:999" onfocus="this.style.left='8px'">Skip to content</a>
${header()}
<main id="main">
${body}
</main>
${footer()}
${mobileBar()}
<script src="/assets/main.js" defer></script>
</body>
</html>`;
}
