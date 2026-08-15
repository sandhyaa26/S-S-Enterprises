import { page, breadcrumb } from "../templates/layout.mjs";
import { site } from "../data/site.mjs";
import { icon } from "../data/icons.mjs";
import {
  sectionHead, productCard, coreCard, feature, mini, ctaBand, visual, checkList,
  linkList, faqBlock, sourcingNote, pills,
} from "../templates/components.mjs";
import { contentPage } from "../templates/contentPage.mjs";
import { sicProducts, furnaceProducts, ceramicProducts, SIC_BASE, FUR_BASE, CER_BASE } from "../data/products.mjs";

const crumbHome = { label: "Home", href: "/" };

/* ============ PRODUCTS INDEX ============ */
export function productsIndex() {
  const crumbs = [crumbHome, { label: "Products", href: "/products/" }];
  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${breadcrumb(crumbs)}<h1>Products</h1>
  <p>Silicon carbide heating elements, aluminium melting &amp; holding furnaces, and technical ceramic &amp; refractory products — engineered and supplied for demanding industrial applications.</p>
</div></section>
<section class="section"><div class="container">
  <div class="grid grid-3">
    ${coreCard({ title: "Silicon Carbide Heating Elements", desc: "SiC heating elements and rods in straight, U, W, spiral, dumbbell and Alpha configurations — and custom.", href: SIC_BASE + "/", cta: "Explore SiC Elements", visualKey: "straight" })}
    ${coreCard({ title: "Industrial Furnaces", desc: "Aluminium melting, holding and combined furnaces, plus heat-treatment and custom industrial furnaces.", href: FUR_BASE + "/", cta: "Explore Furnaces", visualKey: "meltFurnace" })}
    ${coreCard({ title: "Ceramic & Refractory", desc: "Ceramic fibre, boards, technical ceramics, SiC ceramics, furnace components and refractory products.", href: CER_BASE + "/", cta: "Explore Ceramics", visualKey: "fibre" })}
  </div>
</div></section>
<section class="section section--soft"><div class="container">
  ${sectionHead({ eyebrow: "Full catalogue", title: "Browse all products" })}
  <h3 style="font-size:1.1rem;margin-bottom:14px">Silicon Carbide Heating Elements</h3>
  ${linkList(sicProducts.map((p) => [p.name.replace(/ \(.*/, ""), p.path]))}
  <h3 style="font-size:1.1rem;margin:28px 0 14px">Industrial Furnaces</h3>
  ${linkList(furnaceProducts.map((p) => [p.name, p.path]))}
  <h3 style="font-size:1.1rem;margin:28px 0 14px">Ceramic &amp; Refractory Products</h3>
  ${linkList(ceramicProducts.map((p) => [p.name, p.path]))}
</div></section>
${ctaBand({ title: "Not sure which product you need?", text: "Tell us your application and we'll point you to the right product — or engineer a custom solution." })}`;
  return page({ title: "Products — SiC Elements, Furnaces & Ceramics", description: "Browse S S Enterprises products: silicon carbide heating elements, aluminium melting & holding furnaces, and ceramic & refractory products. Custom configurations available.", path: "/products/", crumbs, body });
}

/* ============ SiC FLAGSHIP CATEGORY (§11) ============ */
export function sicCategory() {
  const crumbs = [crumbHome, { label: "Products", href: "/products/" }, { label: "SiC Heating Elements", href: SIC_BASE + "/" }];
  const types = [
    ["Straight", SIC_BASE + "/straight/", "straight"], ["U-Type", SIC_BASE + "/u-type/", "u"],
    ["W-Type", SIC_BASE + "/w-type/", "w"], ["Spiral", SIC_BASE + "/spiral/", "spiral"],
    ["Dumbbell", SIC_BASE + "/dumbbell/", "dumbbell"], ["Alpha SiC", SIC_BASE + "/alpha-sic-heating-elements/", "alpha"],
    ["Heating Rods", SIC_BASE + "/sic-heating-rods/", "rod"], ["Custom", SIC_BASE + "/custom/", "custom"],
  ];
  const faqs = [
    { q: "What temperature can SiC heating elements reach?", a: "SiC elements operate across a broad high-temperature range in air; the usable maximum depends on the grade, surface loading and furnace design. We confirm a suitable specification for your operating temperature." },
    { q: "Can you supply a replacement without a part number?", a: "Yes. Send dimensions, a drawing or a photograph of your existing element and we'll identify a suitable replacement — see <a href='/solutions/sic-heater-replacement/'>SiC heater replacement</a>." },
    { q: "Do you make custom elements?", a: "Yes — any diameter, length, hot/cold zone and terminal type, made to your drawing or an existing sample." },
    { q: "How are SiC elements priced?", a: "Per configuration — price depends on geometry, grade and quantity. Request a quote with your details for accurate pricing." },
  ];
  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${breadcrumb(crumbs)}
  <span class="badge" style="margin-bottom:12px">Flagship product category</span>
  <h1>Silicon Carbide Heating Elements — Manufacturer &amp; Supplier in India</h1>
  <p>High-temperature silicon carbide (SiC) heating elements in straight, U, W, spiral, dumbbell and Alpha SiC configurations — plus fully custom elements engineered to your furnace.</p>
</div></section>

<section class="section"><div class="container">
  <div class="split">
    <div class="split__media">${visual("straight")}</div>
    <div>
      <span class="eyebrow">Overview</span>
      <h2>What are SiC heating elements?</h2>
      <p>Silicon carbide heating elements are electrical resistance heaters used in high-temperature electric furnaces. Current through the resistive hot zone produces radiant heat, while low-resistance cold ends carry current through the furnace wall. They're widely used in kilns, heat-treatment, laboratory, glass and metal-processing furnaces.</p>
      <p><strong>How they work:</strong> heat output follows P = V²/R. Resistance rises gradually with age, so furnaces use tap-changing or variable control to compensate.</p>
      <div class="btn-row" style="margin-top:18px">
        <a class="btn btn--primary btn--lg" href="/contact/#quote">${icon.doc} Request a Quote</a>
        <a class="btn btn--ghost btn--lg" href="/technical-centre/sic-heating-element-guide/">${icon.book} Read the Guide</a>
      </div>
    </div>
  </div>
</div></section>

<section class="section section--soft"><div class="container">
  ${sectionHead({ eyebrow: "Product types", title: "Choose your configuration", lead: "Each configuration has its own product page with specifications, applications and enquiry." })}
  <div class="grid grid-4">
    ${types.map(([t, h, v]) => productCard({ title: t, desc: sicTypeDesc(t), href: h, visualKey: v, tag: "SiC" })).join("")}
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="grid grid-2" style="gap:44px;align-items:start">
    <div>
      <span class="eyebrow">Advantages</span><h2 style="font-size:1.5rem">Why SiC elements</h2>
      ${checkList(["High-temperature capability for demanding furnaces", "Even radiant heat across the hot zone", "Available in many shapes for different furnace layouts", "Custom geometry and matched replacement support", "Long service life at high temperature with proper control"])}
    </div>
    <div>
      <span class="eyebrow">Applications &amp; industries</span><h2 style="font-size:1.5rem">Where they're used</h2>
      ${pills(["Ceramic kilns", "Heat treatment", "Laboratory furnaces", "Glass processing", "Aluminium melting", "Sintering"])}
      <div style="margin-top:18px">${linkList([["Foundries", "/industries/foundries/"], ["Ceramics", "/industries/ceramics/"], ["Heat Treatment", "/industries/heat-treatment/"], ["Glass", "/industries/glass/"]])}</div>
    </div>
  </div>
</div></section>

<section class="section section--dark"><div class="container">
  <div class="cta-inline">
    <div><span class="eyebrow" style="color:#FF6B6B">Customisation &amp; replacement</span>
      <h2>Custom elements &amp; replacement support</h2>
      <p>Send your dimensions, drawing, photo or part number. We engineer custom elements and identify replacements for existing furnaces.</p></div>
    <div class="btn-row">
      <a class="btn btn--primary btn--lg" href="${SIC_BASE}/custom/">${icon.ruler} Custom Elements</a>
      <a class="btn btn--outline-light btn--lg" href="/solutions/sic-heater-replacement/">${icon.swap} Replacement</a>
    </div>
  </div>
</div></section>

<section class="section section--soft"><div class="container narrow">
  <div class="section-head center"><span class="eyebrow">FAQs</span><h2>SiC heating element FAQs</h2></div>
  ${faqBlock(faqs)}
</div></section>

<section class="section"><div class="container">${sourcingNote("mixed")}</div></section>

${ctaBand({ title: "Specify your SiC heating element", text: "Request a quote, use the element calculator, or send your existing heater for identification." })}`;
  return page({
    title: "Silicon Carbide Heating Elements Manufacturer & Supplier in India",
    description: "Silicon carbide (SiC) heating elements manufacturer & supplier in India. Straight, U-type, W-type, spiral, dumbbell, Alpha SiC and custom elements. Replacement support and fast quotes from S S Enterprises.",
    path: SIC_BASE + "/", crumbs, faqs, body,
    schema: [{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Silicon Carbide Heating Elements", url: site.domain + SIC_BASE + "/" }],
  });
}
function sicTypeDesc(t) {
  const m = { "Straight": "Single central hot zone — the most common form.", "U-Type": "Both terminals on one end for simple wiring.", "W-Type": "Extended hot zone with grouped terminals.", "Spiral": "Machined hot zone for higher resistance.", "Dumbbell": "Thick cold ends, focused hot zone.", "Alpha SiC": "Dense recrystallised grade for higher temperatures.", "Heating Rods": "SiC rods for high-temperature electric furnaces.", "Custom": "Made to your drawing or existing sample." };
  return m[t] || "High-temperature SiC heating element.";
}

/* ============ FURNACES & CERAMIC CATEGORY (generic) ============ */
function categoryPage({ title, metaTitle, metaDesc, path, base, label, intro, products, faqs, coreVisual }) {
  const crumbs = [crumbHome, { label: "Products", href: "/products/" }, { label, href: path }];
  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${breadcrumb(crumbs)}<h1>${title}</h1><p>${intro}</p>
</div></section>
<section class="section"><div class="container">
  ${sectionHead({ eyebrow: label, title: "Explore the range" })}
  <div class="grid grid-3">
    ${products.map((p) => productCard({ title: p.name, desc: p.intro, href: p.path, visualKey: p.visualKey, tag: p.tag })).join("")}
  </div>
</div></section>
${faqs ? `<section class="section section--soft"><div class="container narrow"><div class="section-head center"><span class="eyebrow">FAQs</span><h2>Frequently asked questions</h2></div>${faqBlock(faqs)}</div></section>` : ""}
<section class="section"><div class="container">${sourcingNote("mixed")}</div></section>
${ctaBand({ title: "Request a quote or configuration", text: "Tell us your requirement and we'll respond with a suitable specification and transparent sourcing." })}`;
  return page({ title: metaTitle, description: metaDesc, path, crumbs, faqs, body,
    schema: [{ "@context": "https://schema.org", "@type": "CollectionPage", name: title, url: site.domain + path }] });
}

export function furnacesCategory() {
  return categoryPage({
    title: "Industrial Furnaces", metaTitle: "Industrial Furnace Manufacturer & Supplier in India",
    metaDesc: "Aluminium melting & holding furnaces, heat-treatment furnaces and custom industrial furnaces from S S Enterprises. Configured to your throughput, temperature and controls.",
    path: FUR_BASE + "/", label: "Industrial Furnaces",
    intro: "Aluminium melting, holding and combined furnaces, plus heat-treatment and fully custom industrial furnaces — configured around your throughput, temperature and controls.",
    products: furnaceProducts,
    faqs: [
      { q: "Do you manufacture or import furnaces?", a: "Depending on configuration, furnaces and components may be manufactured by us or sourced/imported. We confirm this clearly on every quote." },
      { q: "What capacity can you supply?", a: "Capacity is configured to your throughput — tell us your melt rate, batch size and metal and we'll propose a suitable specification." },
    ],
  });
}
export function ceramicCategory() {
  return categoryPage({
    title: "Ceramic & Refractory Products", metaTitle: "Ceramic & Refractory Products Supplier in India",
    metaDesc: "Ceramic fibre, ceramic fibre board, technical ceramics, silicon carbide ceramics, furnace ceramic components and high-temperature refractory products from S S Enterprises.",
    path: CER_BASE + "/", label: "Ceramic & Refractory",
    intro: "Ceramic fibre, boards, technical ceramics, silicon carbide ceramics, furnace components and high-temperature refractory products for demanding thermal applications.",
    products: ceramicProducts,
    faqs: [
      { q: "Do you supply ceramic fibre and refractory for furnace lining?", a: "Yes — ceramic fibre (blanket, board, module) and refractory products (brick, castable, shapes) for hot-face and back-up lining, matched to your operating temperature." },
    ],
  });
}

/* ============ INDUSTRIES ============ */
export function industriesIndex(industries) {
  const crumbs = [crumbHome, { label: "Industries", href: "/industries/" }];
  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${breadcrumb(crumbs)}<h1>Industries We Serve</h1>
  <p>High-temperature heating, furnaces and ceramic solutions for foundries, aluminium processing, ceramics, heat-treatment, glass, laboratory and advanced materials.</p>
</div></section>
<section class="section"><div class="container">
  <div class="grid grid-3">
    ${industries.map((i) => coreCard({ title: i.name.replace(/^SiC Heating & Furnace Solutions for |^Heating Elements & Ceramics for the |^High-Temperature Solutions for /, ""), desc: i.intro, href: i.path, cta: "View industry", visualKey: i.visualKey })).join("")}
  </div>
</div></section>
${ctaBand({ title: "Serving your industry", text: "Tell us your process and we'll recommend the right heating, furnace or ceramic solution." })}`;
  return page({ title: "Industries We Serve — High-Temperature Solutions", description: "S S Enterprises serves foundries, aluminium processing, ceramics, heat-treatment, glass, laboratory/R&D and advanced materials with SiC heating elements, furnaces and ceramics.", path: "/industries/", crumbs, body });
}

export function industryPage(i) {
  return contentPage({
    title: i.name, metaTitle: i.metaTitle, metaDesc: i.metaDesc, path: i.path,
    crumbs: [crumbHome, { label: "Industries", href: "/industries/" }, { label: i.name, href: i.path }],
    intro: i.intro,
    sections: [
      { h: "The challenge", html: `<p>${i.challenge}</p>` },
      { h: "How we help", html: `<p>S S Enterprises supplies the heating elements, furnaces and materials this industry depends on, with customisation and replacement support to keep operations running.</p>${checkList(i.considerations)}` },
      { h: "Applicable products", html: linkList(i.products) },
      { h: "Typical applications", html: checkList(i.applications) },
      { h: "Case studies", html: `<div class="callout"><p><strong>Case studies coming soon.</strong> We publish problem-to-solution case studies as customer data is confirmed — we don't fabricate results. If you'd like to discuss a comparable requirement, <a href="/contact/#engineer">talk to an engineer</a>.</p></div>` },
    ],
    cta: { title: `High-temperature solutions for ${i.slug.replace(/-/g, " ")}`, text: "Request a quote or talk to an engineer about your process." },
  });
}

/* ============ SOLUTIONS ============ */
export function solutionsIndex(solutions) {
  const crumbs = [crumbHome, { label: "Solutions", href: "/solutions/" }];
  const cards = [
    { title: "SiC Heater Replacement", desc: "Send a photo, drawing or dimensions of your existing heater for a matched replacement.", href: "/solutions/sic-heater-replacement/", visualKey: "dumbbell" },
    ...solutions.map((s) => ({ title: s.name, desc: s.intro, href: s.path, visualKey: s.visualKey === "scene" ? "straight" : s.visualKey })),
  ];
  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${breadcrumb(crumbs)}<h1>Solutions</h1>
  <p>Problem-led engineering solutions — replacement, customisation, furnace heating and high-temperature processing.</p>
</div></section>
<section class="section"><div class="container">
  <div class="grid grid-2">${cards.map((c) => coreCard({ ...c, cta: "Explore" })).join("")}</div>
</div></section>
${ctaBand({ title: "Have a problem to solve?", text: "Tell us what's happening and we'll propose a practical solution." })}`;
  return page({ title: "Solutions — Replacement, Custom & Furnace Heating", description: "Engineering solutions from S S Enterprises: SiC heater replacement, custom heating solutions, furnace heating solutions and high-temperature solutions.", path: "/solutions/", crumbs, body });
}

export function solutionPage(s) {
  return contentPage({
    title: s.name, metaTitle: s.metaTitle, metaDesc: s.metaDesc, path: s.path,
    crumbs: [crumbHome, { label: "Solutions", href: "/solutions/" }, { label: s.name, href: s.path }],
    intro: s.intro,
    sections: [
      { h: "The problem", html: `<p>${s.problem}</p>` },
      { h: "Our approach", html: `<ol>${s.approach.map((a) => `<li>${a}</li>`).join("")}</ol>` },
      { h: "What to send us", html: pills(s.inputs) },
      { h: "Related products & tools", html: linkList(s.products) },
    ],
    cta: { title: "Start your " + s.name.toLowerCase(), text: "Request a quote or talk to an engineer — we respond quickly." },
  });
}

/* ============ TECHNICAL CENTRE ============ */
export function technicalIndex(guides, articles) {
  const crumbs = [crumbHome, { label: "Technical Centre", href: "/technical-centre/" }];
  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${breadcrumb(crumbs)}<h1>Technical Centre</h1>
  <p>Calculators, selection guides, installation and troubleshooting — practical engineering resources for silicon carbide heating elements and high-temperature furnaces.</p>
</div></section>
<section class="section"><div class="container">
  ${sectionHead({ eyebrow: "Tools", title: "Interactive calculators" })}
  <div class="grid grid-2">
    ${coreCard({ title: "SiC Heating Element Calculator", desc: "Estimate resistance, current and element count from your furnace power and voltage.", href: "/technical-centre/sic-heating-element-calculator/", cta: "Open calculator", visualKey: "straight" })}
    ${coreCard({ title: "Resistance Calculator", desc: "Estimate bank and per-element resistance and current draw.", href: "/technical-centre/resistance-calculator/", cta: "Open calculator", visualKey: "spiral" })}
  </div>
</div></section>
<section class="section section--soft"><div class="container">
  ${sectionHead({ eyebrow: "Guides", title: "Core guides" })}
  ${linkList(guides.map((g) => [g.name, g.path]))}
</div></section>
<section class="section"><div class="container">
  ${sectionHead({ eyebrow: "Articles", title: "Technical articles", lead: "Accurate, engineering-first answers to real questions." })}
  ${linkList(articles.map((a) => [a.name, a.path]))}
</div></section>
${ctaBand({ title: "Need help specifying?", text: "Use the calculators, then request a quote or talk to an engineer to confirm your configuration." })}`;
  return page({ title: "Technical Centre — SiC Calculators & Guides", description: "S S Enterprises Technical Centre: silicon carbide heating element calculators, selection and installation guides, troubleshooting and technical articles.", path: "/technical-centre/", crumbs, body });
}

export function guidePage(g) {
  return contentPage({
    title: g.name, metaTitle: g.metaTitle, metaDesc: g.metaDesc, path: g.path,
    crumbs: [crumbHome, { label: "Technical Centre", href: "/technical-centre/" }, { label: g.name, href: g.path }],
    intro: g.intro, toc: g.toc, sections: g.sections, faqs: g.faqs, schemaType: "Article",
    cta: { title: "Put this into practice", text: "Request a quote or talk to an engineer about your furnace and duty." },
  });
}
export function articlePage(a) {
  return contentPage({
    title: a.name, metaTitle: a.metaTitle, metaDesc: a.metaDesc, path: a.path,
    crumbs: [crumbHome, { label: "Technical Centre", href: "/technical-centre/" }, { label: "Articles", href: "/technical-centre/" }, { label: a.name, href: a.path }],
    intro: a.intro, sections: a.sections, faqs: a.faqs, schemaType: "Article",
    articleMeta: `<p class="badge" style="margin-bottom:14px">Technical article</p>`,
    sidebar: `<div style="margin-top:30px" class="mini"><h3 style="font-size:1rem">Related</h3><p style="margin-bottom:10px">Explore <a href="/products/silicon-carbide-heating-elements/">SiC heating elements</a>, use the <a href="/technical-centre/sic-heating-element-calculator/">calculator</a>, or start a <a href="/solutions/sic-heater-replacement/">replacement enquiry</a>.</p></div>`,
  });
}

/* ============ APPLICATION PAGES (§23) ============ */
export function applicationPage([slug, name, desc, ind, indHref]) {
  const path = `/applications/${slug}/`;
  return contentPage({
    title: name, metaTitle: name + " | S S Enterprises", metaDesc: desc, path,
    crumbs: [crumbHome, { label: "Applications", href: "/applications/" }, { label: name, href: path }],
    intro: desc,
    sections: [
      { h: "Overview", html: `<p>${desc} We configure the element grade, geometry and surface loading to suit this application, and support custom and replacement requirements.</p>` },
      { h: "Why SiC elements suit this application", html: checkList(["High-temperature radiant heating", "Configurations to fit the furnace layout", "Custom geometry to your equipment", "Replacement support to reduce downtime"]) },
      { h: "Related", html: linkList([["Silicon Carbide Heating Elements", "/products/silicon-carbide-heating-elements/"], ["Related industry", indHref], ["SiC Heater Replacement", "/solutions/sic-heater-replacement/"], ["Element Calculator", "/technical-centre/sic-heating-element-calculator/"]]) },
    ],
    cta: { title: "Specify elements for this application", text: "Request a quote or talk to an engineer with your furnace details." },
  });
}
export function applicationsIndex(applications) {
  const crumbs = [crumbHome, { label: "Applications", href: "/applications/" }];
  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${breadcrumb(crumbs)}<h1>Applications</h1><p>Silicon carbide heating elements matched to specific industrial applications.</p>
</div></section>
<section class="section"><div class="container">${linkList(applications.map(([slug, name]) => [name, `/applications/${slug}/`]))}</div></section>
${ctaBand({ title: "Your application not listed?", text: "Tell us your process and we'll advise on a suitable configuration." })}`;
  return page({ title: "Applications — SiC Heating Elements", description: "Silicon carbide heating element applications: ceramic kilns, industrial furnaces, laboratory furnaces, heat treatment, glass processing and high-temperature applications.", path: "/applications/", crumbs, body });
}

/* ============ RESOURCES (§24) ============ */
export function resourcesPage(guides, articles) {
  const crumbs = [crumbHome, { label: "Resources", href: "/resources/" }];
  const items = [
    ...articles.map((a) => ({ name: a.name, href: a.path, cat: "Technical Article" })),
    ...guides.map((g) => ({ name: g.name, href: g.path, cat: "Guide" })),
    { name: "SiC Heating Element Calculator", href: "/technical-centre/sic-heating-element-calculator/", cat: "Tool" },
    { name: "Resistance Calculator", href: "/technical-centre/resistance-calculator/", cat: "Tool" },
  ];
  const rows = items.map((it) => `<a class="link-list" style="display:block" href="${it.href}" data-searchable="${it.name} ${it.cat}"><div class="rel-card" style="justify-content:space-between"><div><b>${it.name}</b><span>${it.cat}</span></div>${icon.arrow}</div></a>`).join("");
  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${breadcrumb(crumbs)}<h1>Resources</h1><p>A searchable library of technical articles, guides, datasheets, tools and case studies.</p>
</div></section>
<section class="section"><div class="container">
  <div class="grid grid-4" style="margin-bottom:26px">
    ${mini({ ic: "book", title: "Technical Articles", desc: "20+ engineering articles." })}
    ${mini({ ic: "doc", title: "Datasheets", desc: "Per-configuration, on request." })}
    ${mini({ ic: "factory", title: "Case Studies", desc: "Published as data is confirmed." })}
    ${mini({ ic: "calc", title: "Tools", desc: "Calculators & selectors." })}
  </div>
  <div class="field" style="max-width:480px;margin-bottom:24px">
    <label>Search resources</label>
    <input id="res-search" type="search" placeholder="Search articles, guides, tools…" aria-label="Search resources">
  </div>
  <div style="display:grid;gap:10px">${rows}</div>
</div></section>
${ctaBand({ title: "Looking for a datasheet?", text: "Datasheets are prepared per configuration — request the one you need and we'll send it." })}`;
  return page({ title: "Resources — Articles, Datasheets & Tools", description: "S S Enterprises resource library: technical articles, guides, datasheets, calculators and case studies for silicon carbide heating elements and high-temperature furnaces.", path: "/resources/", crumbs, body });
}

/* ============ LOCATIONS (§30) ============ */
export function locationsIndex(locs) {
  const crumbs = [crumbHome, { label: "Locations", href: "/locations/" }];
  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${breadcrumb(crumbs)}<h1>Locations We Serve</h1>
  <p>S S Enterprises supplies silicon carbide heating elements, furnaces and ceramic products to industrial customers across India, including these major industrial markets.</p>
</div></section>
<section class="section"><div class="container">
  ${linkList(locs.map((l) => [`${l.city}`, l.path, l.state]))}
</div></section>
${ctaBand({ title: "Outside these cities?", text: "We supply across India and support export enquiries. Tell us your location and requirement." })}`;
  return page({ title: "Locations We Serve Across India", description: "S S Enterprises supplies SiC heating elements, aluminium furnaces and ceramic products across India — Bengaluru, Chennai, Hyderabad, Mumbai, Pune, Ahmedabad and more.", path: "/locations/", crumbs, body });
}
export function locationPage(l) {
  return contentPage({
    title: `High-Temperature Heating & Furnace Supply in ${l.city}`,
    metaTitle: `SiC Heating Elements & Furnaces Supplier in ${l.city}`,
    metaDesc: `S S Enterprises supplies silicon carbide heating elements, aluminium melting & holding furnaces and ceramic/refractory products to industrial customers in ${l.city}, ${l.state}.`,
    path: l.path,
    crumbs: [crumbHome, { label: "Locations", href: "/locations/" }, { label: l.city, href: l.path }],
    intro: `Silicon carbide heating elements, aluminium furnaces and ceramic products for industrial customers in ${l.city}, ${l.state}.`,
    sections: [
      { h: `Serving industry in ${l.city}`, html: `<p>${l.blurb}</p>` },
      { h: "Products supplied", html: linkList([["SiC Heating Elements", "/products/silicon-carbide-heating-elements/"], ["Aluminium Melting Furnaces", "/products/industrial-furnaces/aluminium-melting-furnaces/"], ["Aluminium Holding Furnaces", "/products/industrial-furnaces/aluminium-holding-furnaces/"], ["Ceramic & Refractory", "/products/ceramic-refractory-products/"]]) },
      { h: "Industries served locally", html: checkList(l.sectors) },
      { h: "Delivery & service capability", html: `<p>We supply and dispatch to customers across India, including ${l.city}. For replacement elements, send dimensions or a photo and we'll identify a match. Tell us your location and timeline for a delivery estimate.</p>` },
    ],
    cta: { title: `Supply to ${l.city}`, text: "Request a quote or send your existing heater for identification — we respond quickly." },
  });
}
