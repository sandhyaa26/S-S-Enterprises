import { page } from "../templates/layout.mjs";
import { site } from "../data/site.mjs";
import { icon } from "../data/icons.mjs";
import { scene } from "../data/diagrams.mjs";
import {
  sectionHead, ctaRow, coreCard, feature, mini, ctaBand, visual, checkList,
} from "../templates/components.mjs";
import { SIC_BASE, FUR_BASE, CER_BASE } from "../data/products.mjs";

export function homePage() {
  const body = `
<!-- 2. HERO -->
<section class="hero">
  <div class="hero__media">${scene({ label: "Glowing high-temperature furnace with silicon carbide heating elements" })}</div>
  <div class="hero__overlay"></div>
  <div class="hero__grid"></div>
  <div class="container">
    <div class="hero__inner">
      <span class="eyebrow" style="color:#FF6B6B">${icon.flame} High-Temperature Industrial Solutions</span>
      <h1>High-Temperature Industrial Heating &amp; Ceramic Solutions</h1>
      <p class="hero__lead">${site.supporting}</p>
      ${ctaRow("onDark")}
      <div class="hero__stats">
        <div class="hero__stat"><b>SiC</b><span>Heating elements &amp; rods</span></div>
        <div class="hero__stat"><b>Al</b><span>Melting &amp; holding furnaces</span></div>
        <div class="hero__stat"><b>Ceramic</b><span>Refractory &amp; technical ceramics</span></div>
        <div class="hero__stat"><b>Custom</b><span>Engineered to your application</span></div>
      </div>
    </div>
  </div>
</section>

<!-- trust line -->
<section class="section tight"><div class="container">
  <div class="trust-line">
    <span class="pill">${icon.cog} Custom configurations</span>
    <span class="pill">${icon.swap} SiC heater replacement</span>
    <span class="pill">${icon.headset} Technical support</span>
    <span class="pill">${icon.globe} Supply across India &amp; export</span>
    <span class="pill">${icon.shield} Transparent sourcing</span>
  </div>
</div></section>

<!-- 3. CORE PRODUCTS -->
<section class="section"><div class="container">
  ${sectionHead({ eyebrow: "Our Core Products", title: "Engineering-led high-temperature products", lead: "Three product families, one point of contact — configured to your furnace, duty and application." })}
  <div class="grid grid-3">
    ${coreCard({ title: "Silicon Carbide Heating Elements", desc: "High-temperature silicon carbide heating elements available in multiple configurations and custom specifications.", href: SIC_BASE + "/", cta: "Explore SiC Heating Elements", visualKey: "straight" })}
    ${coreCard({ title: "Aluminium Melting & Holding Furnaces", desc: "Aluminium melting, holding and industrial furnace solutions for high-temperature metal processing applications.", href: FUR_BASE + "/", cta: "Explore Furnaces", visualKey: "meltFurnace" })}
    ${coreCard({ title: "Ceramic & Refractory Products", desc: "Technical ceramic, ceramic fibre and high-temperature refractory products for demanding thermal applications.", href: CER_BASE + "/", cta: "Explore Ceramic Products", visualKey: "fibre" })}
  </div>
</div></section>

<!-- 4. WHY S S ENTERPRISES (dark) -->
<section class="section section--dark"><div class="container">
  ${sectionHead({ eyebrow: "Why S S Enterprises", title: "Engineering solutions built around your application", lead: "We help industrial buyers specify, replace and customise high-temperature heating and ceramic products — quickly and transparently." })}
  <div class="grid grid-3">
    ${feature({ ic: "cog", title: "Custom Configurations", desc: "Heating elements and furnace solutions tailored to application requirements." })}
    ${feature({ ic: "headset", title: "Technical Support", desc: "Assistance with product selection, sizing and replacement requirements." })}
    ${feature({ ic: "flame", title: "High-Temperature Expertise", desc: "Solutions for demanding thermal processing environments." })}
    ${feature({ ic: "swap", title: "Replacement Support", desc: "Help identifying suitable replacement SiC heating elements." })}
    ${feature({ ic: "truck", title: "Industrial Supply", desc: "Serving industrial customers across India." })}
    ${feature({ ic: "globe", title: "Export Capability", desc: "Supporting customers beyond the domestic market." })}
  </div>
</div></section>

<!-- 5. SiC HEATING ELEMENTS (flagship) -->
<section class="section"><div class="container">
  <div class="split">
    <div class="split__media">${visual("straight")}</div>
    <div>
      <span class="eyebrow">Flagship — SiC Heating Elements</span>
      <h2>Silicon carbide heating elements, engineered to your furnace</h2>
      <p>Straight, U-type, W-type, spiral, dumbbell and Alpha SiC configurations — supplied to your diameter, hot zone, voltage and power. If you can describe your furnace, we can specify the element.</p>
      <div class="pill-row" style="margin:16px 0 22px">
        <span class="pill">${icon.check} Straight</span><span class="pill">${icon.check} U-Type</span>
        <span class="pill">${icon.check} W-Type</span><span class="pill">${icon.check} Spiral</span>
        <span class="pill">${icon.check} Dumbbell</span><span class="pill">${icon.check} Alpha SiC</span>
      </div>
      <div class="btn-row">
        <a class="btn btn--primary btn--lg" href="${SIC_BASE}/">${icon.arrow} Explore SiC Heating Elements</a>
        <a class="btn btn--ghost btn--lg" href="/technical-centre/sic-heating-element-calculator/">${icon.calc} Element Calculator</a>
      </div>
    </div>
  </div>
</div></section>

<!-- 6. CUSTOM SiC SOLUTIONS -->
<section class="section section--soft"><div class="container">
  <div class="cta-band"><div class="cta-inline">
    <div>
      <span class="badge" style="background:rgba(255,107,107,.15);color:#FF8A8A">Customisation</span>
      <h2 style="margin-top:10px">Need a custom heating element?</h2>
      <p>Send us your diameter, overall length, hot zone, cold zone, voltage, resistance, power, furnace temperature — or an existing drawing, photograph or part number — and we'll recommend a configuration.</p>
    </div>
    <div class="btn-row">
      <a class="btn btn--primary btn--lg" href="/solutions/custom-heating-solutions/">${icon.ruler} Submit Your Specification</a>
      <a class="btn btn--outline-light btn--lg" href="${SIC_BASE}/custom/">Custom Elements</a>
    </div>
  </div></div>
</div></section>

<!-- 7. REPLACEMENT HEATING ELEMENTS -->
<section class="section"><div class="container">
  <div class="split split--reverse">
    <div class="split__media">${visual("dumbbell")}</div>
    <div>
      <span class="eyebrow">Replacement — major lead generator</span>
      <h2>Need a replacement SiC heating element?</h2>
      <p>Send a photograph, drawing or dimensions of your existing heating element. Our technical team can help identify a suitable replacement configuration — even if you don't have the original part number.</p>
      ${checkList(["Match by dimensions, drawing or photo", "Advice on matched-resistance replacement sets", "Support for mixed and legacy furnaces"])}
      <div class="btn-row" style="margin-top:20px">
        <a class="btn btn--primary btn--lg" href="/solutions/sic-heater-replacement/">${icon.swap} Get Replacement Recommendation</a>
      </div>
    </div>
  </div>
</div></section>

<!-- 8. ALUMINIUM MELTING & HOLDING FURNACES -->
<section class="section section--soft"><div class="container">
  <div class="split">
    <div class="split__media">${visual("meltFurnace")}</div>
    <div>
      <span class="eyebrow">Furnaces</span>
      <h2>Aluminium melting &amp; holding furnaces</h2>
      <p>Melting, holding and combined furnace solutions for aluminium and non-ferrous metal processing — configured around your throughput, crucible and controls.</p>
      <div class="btn-row" style="margin-top:16px">
        <a class="btn btn--primary btn--lg" href="${FUR_BASE}/aluminium-melting-furnaces/">${icon.flame} Melting Furnaces</a>
        <a class="btn btn--ghost btn--lg" href="${FUR_BASE}/aluminium-holding-furnaces/">Holding Furnaces</a>
      </div>
    </div>
  </div>
</div></section>

<!-- 9. CERAMIC & REFRACTORY -->
<section class="section"><div class="container">
  ${sectionHead({ eyebrow: "Ceramic & Refractory", title: "Technical ceramics and high-temperature materials", lead: "Ceramic fibre, boards, technical ceramics, SiC ceramics, furnace components and refractory products for demanding thermal applications." })}
  <div class="grid grid-4">
    ${mini({ ic: "layers", title: "Ceramic Fibre", desc: "Low thermal-mass insulation." })}
    ${mini({ ic: "grid", title: "Fibre Board", desc: "Rigid hot-face panels." })}
    ${mini({ ic: "target", title: "Technical Ceramics", desc: "High-temp & wear parts." })}
    ${mini({ ic: "shield", title: "Refractory", desc: "Bricks, castables, shapes." })}
  </div>
  <div class="btn-row" style="margin-top:24px"><a class="btn btn--ghost" href="${CER_BASE}/">${icon.arrow} Explore Ceramic &amp; Refractory Products</a></div>
</div></section>

<!-- 10. INDUSTRIES SERVED -->
<section class="section section--soft"><div class="container">
  ${sectionHead({ eyebrow: "Industries Served", title: "Trusted across high-temperature industries", center: true })}
  <div class="link-list">
    <a href="/industries/foundries/"><span>Foundries</span>${icon.arrow}</a>
    <a href="/industries/aluminium-processing/"><span>Aluminium Processing</span>${icon.arrow}</a>
    <a href="/industries/ceramics/"><span>Ceramics</span>${icon.arrow}</a>
    <a href="/industries/heat-treatment/"><span>Heat Treatment</span>${icon.arrow}</a>
    <a href="/industries/glass/"><span>Glass</span>${icon.arrow}</a>
    <a href="/industries/laboratory-rd/"><span>Laboratory &amp; R&amp;D</span>${icon.arrow}</a>
    <a href="/industries/advanced-materials/"><span>Advanced Materials</span>${icon.arrow}</a>
    <a href="/industries/"><span>All industries</span>${icon.arrow}</a>
  </div>
</div></section>

<!-- 11. MANUFACTURING & QUALITY -->
<section class="section"><div class="container">
  <div class="split split--reverse">
    <div class="split__media">${visual("technical")}</div>
    <div>
      <span class="eyebrow">Manufacturing &amp; Quality</span>
      <h2>Manufactured and sourced — always transparent</h2>
      <p>S S Enterprises both manufactures and imports products. We clearly distinguish items manufactured in-house from those sourced or imported, and we confirm sourcing on every enquiry. Product inspection, testing and customisation support run through our process.</p>
      ${checkList(["Product inspection & testing", "Customisation and engineering support", "Inventory, packaging & dispatch"])}
      <div class="btn-row" style="margin-top:20px"><a class="btn btn--ghost btn--lg" href="/about-us/manufacturing/">${icon.factory} Manufacturing &amp; Quality</a></div>
    </div>
  </div>
</div></section>

<!-- 12. TECHNICAL CENTRE -->
<section class="section section--dark"><div class="container">
  ${sectionHead({ eyebrow: "Technical Centre", title: "Tools and guides that help you specify with confidence", lead: "Calculators, selection guides and troubleshooting — practical engineering resources, not filler." })}
  <div class="grid grid-3">
    <a class="feature reveal" href="/technical-centre/sic-heating-element-calculator/" style="text-decoration:none">
      <div class="feature__icon">${icon.calc}</div><h3>SiC Element Calculator</h3><p>Estimate resistance, current and element count for your furnace.</p></a>
    <a class="feature reveal" href="/technical-centre/how-to-select-sic-heating-element/" style="text-decoration:none">
      <div class="feature__icon">${icon.ruler}</div><h3>Selection Guide</h3><p>How to choose diameter, hot zone and configuration.</p></a>
    <a class="feature reveal" href="/technical-centre/troubleshooting/" style="text-decoration:none">
      <div class="feature__icon">${icon.wrench}</div><h3>Troubleshooting</h3><p>Diagnose ageing, resistance rise and element failures.</p></a>
  </div>
  <div class="btn-row" style="margin-top:26px"><a class="btn btn--outline-light btn--lg" href="/technical-centre/">${icon.arrow} Visit the Technical Centre</a></div>
</div></section>

<!-- 13. RESOURCES / CASE STUDIES -->
<section class="section"><div class="container">
  ${sectionHead({ eyebrow: "Resources", title: "Technical articles, datasheets and case studies", lead: "A growing library of engineering content to help you select, install and maintain high-temperature products." })}
  <div class="grid grid-3">
    ${coreCard({ title: "Technical Articles", desc: "In-depth guides on SiC elements, resistance, power and selection.", href: "/technical-centre/", cta: "Read articles", visualKey: "technical" })}
    ${coreCard({ title: "Product Datasheets", desc: "Configuration-specific datasheets available on request.", href: "/resources/", cta: "Browse resources", visualKey: "refractory" })}
    ${coreCard({ title: "Case Studies", desc: "Problem-to-solution examples (published as customer data is confirmed).", href: "/resources/", cta: "See case studies", visualKey: "meltFurnace" })}
  </div>
</div></section>

<!-- 14. FINAL CTA -->
${ctaBand({
    title: "Tell us about your application",
    text: "Request a quote, talk to an engineer, or send us your existing heater for identification and replacement. We respond quickly with practical, transparent recommendations.",
  })}
`;

  return page({
    title: `${site.name} — ${site.positioning} in India`,
    description: "S S Enterprises manufactures and supplies silicon carbide (SiC) heating elements, aluminium melting & holding furnaces and technical ceramic/refractory products across India. Custom configurations, replacement support and fast quotes.",
    path: "/",
    body,
    schema: [{
      "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.domain,
      potentialAction: { "@type": "SearchAction", target: site.domain + "/resources/?q={q}", "query-input": "required name=q" },
    }],
  });
}
