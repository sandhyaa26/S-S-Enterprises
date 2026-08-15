import { page, breadcrumb, esc } from "./layout.mjs";
import { icon } from "../data/icons.mjs";
import { site } from "../data/site.mjs";
import {
  visual, specTable, faqBlock, checkList, pills, relatedGrid, ctaBand, sourcingNote,
} from "./components.mjs";

/* Product schema (Product + optional FAQ handled by layout) */
function productSchema(p) {
  return {
    "@context": "https://schema.org", "@type": "Product",
    name: p.name, category: p.category || "Industrial heating element",
    description: p.metaDesc,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@type": "Organization", name: site.name },
    offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "INR", price: "0", url: site.domain + p.path, priceSpecification: { "@type": "PriceSpecification", priceCurrency: "INR", price: "0", valueAddedTaxIncluded: false }, description: "Request a quote — priced per configuration." },
  };
}

/* p = {
  name, path, crumbs, tag, intro, metaTitle, metaDesc, visualKey, sourcing,
  features[], specs[[k,v]], configs[], applications[], industries[[label,href]],
  customisation(html), install(html), datasheetNote, faqs[], related[]
} */
export function productPage(p) {
  const crumbsHtml = breadcrumb(p.crumbs);
  const quote = `/contact/#quote`;

  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${crumbsHtml}
  ${p.tag ? `<span class="badge" style="margin-bottom:12px">${esc(p.tag)}</span>` : ""}
  <h1>${esc(p.name)}</h1>
  <p>${p.intro}</p>
</div></section>

<section class="section"><div class="container">
  <div class="split">
    <div class="split__media">${visual(p.visualKey)}</div>
    <div>
      <span class="eyebrow">Overview</span>
      <h2 style="font-size:1.6rem">${esc(p.name)}</h2>
      <p>${p.description || p.intro}</p>
      ${p.features ? checkList(p.features.slice(0, 5).map((f) => typeof f === "string" ? f : (f.d ? `<strong>${f.t}</strong> — ${f.d}` : f.t))) : ""}
      <div class="btn-row" style="margin-top:22px">
        <a class="btn btn--primary btn--lg" href="${quote}">${icon.doc} Request a Quote</a>
        <a class="btn btn--ghost btn--lg" href="/contact/#engineer">${icon.headset} Talk to an Engineer</a>
      </div>
    </div>
  </div>
</div></section>

${p.features && p.features.length ? `
<section class="section section--soft"><div class="container">
  <div class="section-head"><span class="eyebrow">Key features</span><h2>Why choose this configuration</h2></div>
  <div class="grid grid-2">${p.features.map((f) =>
    `<div class="mini reveal"><div class="mini__icon">${icon.check}</div><h3 style="font-size:1rem">${esc(typeof f === "string" ? f : f.t)}</h3>${typeof f === "object" && f.d ? `<p>${esc(f.d)}</p>` : ""}</div>`).join("")}
  </div>
</div></section>` : ""}

<section class="section"><div class="container">
  <div class="grid grid-2" style="align-items:start;gap:44px">
    <div>
      <div class="section-head" style="margin-bottom:20px"><span class="eyebrow">Technical specifications</span><h2 style="font-size:1.5rem">Specification table</h2></div>
      ${specTable(p.specs || [], "")}
      <p class="form-note" style="margin-top:14px">Values shown as “Contact us for configuration” are set per application. We do not publish assumed engineering values — every element is confirmed against your furnace and duty.</p>
    </div>
    <div>
      <div class="section-head" style="margin-bottom:20px"><span class="eyebrow">Available configurations</span><h2 style="font-size:1.5rem">Configurations</h2></div>
      ${pills(p.configs || ["Straight", "U-type", "W-type", "Spiral", "Custom"])}
      ${p.applications && p.applications.length ? `<h3 style="margin-top:28px;font-size:1.15rem">Typical applications</h3>${checkList(p.applications)}` : ""}
    </div>
  </div>
</div></section>

${p.industries && p.industries.length ? `
<section class="section section--soft"><div class="container">
  <div class="section-head"><span class="eyebrow">Industries</span><h2>Industries we supply this to</h2></div>
  <div class="link-list">${p.industries.map(([l, h]) => `<a href="${h}"><span>${esc(l)}</span>${icon.arrow}</a>`).join("")}</div>
</div></section>` : ""}

<section class="section"><div class="container">
  <div class="split split--reverse">
    <div class="split__media">${visual("custom")}</div>
    <div>
      <span class="eyebrow">Customisation</span>
      <h2 style="font-size:1.5rem">Built around your application</h2>
      ${p.customisation || `<p>Share your diameter, overall length, hot-zone and cold-zone lengths, voltage, resistance, power and furnace temperature — or an existing drawing, photograph or part number — and our team will recommend a suitable configuration.</p>`}
      <div class="btn-row" style="margin-top:18px">
        <a class="btn btn--primary" href="/solutions/custom-heating-solutions/">${icon.ruler} Submit Your Specification</a>
      </div>
    </div>
  </div>
</div></section>

${p.install ? `
<section class="section section--soft"><div class="container narrow">
  <div class="section-head"><span class="eyebrow">Installation & maintenance</span><h2>Installation & maintenance notes</h2></div>
  <div class="prose">${p.install}</div>
</div></section>` : ""}

<section class="section"><div class="container">
  <div class="cta-band"><div class="cta-inline">
    <div><span class="badge" style="background:rgba(255,107,107,.15);color:#FF8A8A">Datasheet</span>
      <h2 style="margin-top:10px">Need the datasheet for this product?</h2>
      <p>${p.datasheetNote || "Detailed datasheets are prepared per configuration. Request the current datasheet and we will send specifications matched to your requirement."}</p></div>
    <div class="btn-row">
      <a class="btn btn--primary btn--lg" href="/contact/#quote">${icon.doc} Request Datasheet</a>
      <a class="btn btn--outline-light btn--lg" href="/resources/">Browse Resources</a>
    </div>
  </div></div>
</div></section>

${p.faqs && p.faqs.length ? `
<section class="section section--soft"><div class="container narrow">
  <div class="section-head center"><span class="eyebrow">FAQs</span><h2>Frequently asked questions</h2></div>
  ${faqBlock(p.faqs)}
</div></section>` : ""}

<section class="section"><div class="container">
  ${sourcingNote(p.sourcing || "generic")}
</div></section>

${p.related && p.related.length ? `
<section class="section section--soft"><div class="container">
  <div class="section-head"><span class="eyebrow">Related products</span><h2>Related products</h2></div>
  ${relatedGrid(p.related)}
</div></section>` : ""}

${ctaBand({
    title: "Ready to specify your " + p.shortName + "?",
    text: "Request a quote, send us your existing part for identification, or talk to an engineer about your furnace and duty cycle.",
  })}
`;

  return page({
    title: p.metaTitle || p.name,
    description: p.metaDesc,
    path: p.path,
    crumbs: p.crumbs,
    faqs: p.faqs ? p.faqs.map((f) => ({ q: f.q, a: f.a })) : null,
    schema: [productSchema(p)],
    body,
  });
}
