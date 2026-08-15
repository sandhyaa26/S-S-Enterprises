import { page, breadcrumb } from "../templates/layout.mjs";
import { site } from "../data/site.mjs";
import { icon } from "../data/icons.mjs";
import { visual, quoteFieldset, faqBlock, ctaBand, checkList } from "../templates/components.mjs";

const c = site.contact;
const mapEmbed = `https://maps.google.com/maps?q=${c.mapQuery}&z=12&output=embed`;

/* ---------------- CONTACT (§28) ---------------- */
export function contactPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Contact", href: "/contact/" }];
  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${breadcrumb(crumbs)}
  <h1>Talk to an Engineer</h1>
  <p>Request a quote, submit a product specification, send us an existing heater for identification, or ask a general question. We respond quickly with practical, transparent advice.</p>
</div></section>

<section class="section"><div class="container">
  <div class="grid grid-4" style="margin-bottom:8px">
    <a class="mini reveal" href="#quote" style="text-decoration:none"><div class="mini__icon">${icon.doc}</div><h3 style="font-size:1rem">Request a Quote</h3><p>Pricing per configuration.</p></a>
    <a class="mini reveal" href="/solutions/custom-heating-solutions/" style="text-decoration:none"><div class="mini__icon">${icon.ruler}</div><h3 style="font-size:1rem">Submit Specification</h3><p>Send drawings & dimensions.</p></a>
    <a class="mini reveal" href="/solutions/sic-heater-replacement/" style="text-decoration:none"><div class="mini__icon">${icon.swap}</div><h3 style="font-size:1rem">Send Existing Heater</h3><p>Identify a replacement.</p></a>
    <a class="mini reveal" href="#engineer" style="text-decoration:none"><div class="mini__icon">${icon.chat}</div><h3 style="font-size:1rem">General Enquiry</h3><p>Ask us anything.</p></a>
  </div>
</div></section>

<section class="section" style="padding-top:0"><div class="container">
  <div class="grid" style="grid-template-columns:1.15fr .85fr;gap:40px;align-items:start">
    <div id="quote" class="form-card">
      <span class="eyebrow" id="engineer">Enquiry</span>
      <h2 style="font-size:1.5rem">Request a quote or talk to an engineer</h2>
      <p class="muted">Fields marked <span style="color:var(--red)">*</span> are required. We'll reply by email or phone.</p>
      <div class="form-success">Thanks — your enquiry has been captured. Connect this form to your email/CRM endpoint to receive submissions. We'll be in touch shortly.</div>
      <form data-enquiry novalidate>
        ${quoteFieldset()}
        <div class="btn-row" style="margin-top:20px">
          <button type="submit" class="btn btn--primary btn--lg">${icon.arrow} Send Enquiry</button>
          <a class="btn btn--ghost btn--lg" href="https://wa.me/${c.whatsappHref}">${icon.whatsapp} WhatsApp</a>
        </div>
        <p class="form-note">By submitting you agree to be contacted about your enquiry. We don't share your details.</p>
      </form>
    </div>
    <div>
      <div class="mini" style="margin-bottom:16px">
        <h3 style="font-size:1.1rem">Contact details</h3>
        <ul style="list-style:none;padding:0;margin:10px 0 0;display:grid;gap:12px">
          <li style="display:flex;gap:10px"><span style="color:var(--red)">${icon.phone}</span><a href="tel:${c.phoneHref}">${c.phoneDisplay}</a></li>
          <li style="display:flex;gap:10px"><span style="color:var(--red)">${icon.whatsapp}</span><a href="https://wa.me/${c.whatsappHref}">WhatsApp us</a></li>
          <li style="display:flex;gap:10px"><span style="color:var(--red)">${icon.mail}</span><a href="mailto:${c.email}">${c.email}</a></li>
          <li style="display:flex;gap:10px"><span style="color:var(--red)">${icon.pin}</span><span>${c.addressLine}, ${c.city}, ${c.state}, ${c.country} ${c.postal}</span></li>
          <li style="display:flex;gap:10px"><span style="color:var(--red)">${icon.clock}</span><span>${c.hours}</span></li>
        </ul>
        <p class="form-note" style="margin-top:12px">Contact details are placeholders — replace with verified company information in <code>src/data/site.mjs</code>.</p>
      </div>
      <div class="card"><div style="aspect-ratio:4/3;background:var(--bg-soft)">
        <iframe title="Map to ${site.name}" src="${mapEmbed}" width="100%" height="100%" style="border:0;display:block" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div></div>
    </div>
  </div>
</div></section>`;
  return page({
    title: "Contact — Talk to an Engineer",
    description: "Contact S S Enterprises for silicon carbide heating elements, aluminium furnaces and ceramic products. Request a quote, submit a specification or send an existing heater for replacement.",
    path: "/contact/", crumbs, body,
    schema: [{ "@context": "https://schema.org", "@type": "LocalBusiness", name: site.name, image: site.domain + "/assets/logo.svg", "@id": site.domain, url: site.domain, telephone: c.phoneDisplay, email: c.email, address: { "@type": "PostalAddress", streetAddress: c.addressLine, addressLocality: c.city, addressRegion: c.state, postalCode: c.postal, addressCountry: "IN" }, areaServed: "IN" }],
  });
}

/* ---------------- SiC HEATER REPLACEMENT (§15) ---------------- */
export function replacementPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions/" }, { label: "SiC Heater Replacement", href: "/solutions/sic-heater-replacement/" }];
  const F = (name, label, type = "text", extra = "") => `<div class="field"><label>${label}</label><input type="${type}" name="${name}" ${extra}></div>`;
  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${breadcrumb(crumbs)}
  <span class="badge" style="margin-bottom:12px">Major lead generator</span>
  <h1>Need a Replacement SiC Heating Element?</h1>
  <p>Send us a photograph, drawing or dimensions of your existing heating element. Our technical team can help identify the appropriate replacement configuration — even without the original part number.</p>
</div></section>

<section class="section"><div class="container">
  <div class="grid" style="grid-template-columns:.9fr 1.1fr;gap:40px;align-items:start">
    <div>
      <span class="eyebrow">How it works</span>
      <h2 style="font-size:1.5rem">Three ways to match your element</h2>
      ${checkList([
        "<strong>By dimensions</strong> — diameter, hot-zone, cold-end and overall length.",
        "<strong>By photo or drawing</strong> — include a scale or ruler if you can.",
        "<strong>By part number</strong> — if you still have the original marking.",
      ])}
      <div style="margin:22px 0">${visual("dumbbell")}</div>
      <div class="mini"><h3 style="font-size:1rem">Tip</h3><p>Matching resistance across the bank keeps heating even. Tell us how many elements you run and your supply voltage, and we'll advise on a matched set.</p></div>
    </div>
    <div class="form-card">
      <h2 style="font-size:1.4rem">Replacement enquiry</h2>
      <p class="muted">Share whatever you have — you don't need every field.</p>
      <div class="form-success">Thanks — your replacement enquiry has been captured. Connect this form to your email/CRM endpoint to receive submissions and uploads.</div>
      <form data-enquiry novalidate>
        <div class="form-grid">
          ${F("name", "Name <span class='req'>*</span>", "text", "required")}
          ${F("company", "Company")}
          ${F("email", "Email <span class='req'>*</span>", "email", "required")}
          ${F("phone", "Phone <span class='req'>*</span>", "tel", "required")}
          <div class="field full"><label>Application</label><input name="application" placeholder="e.g. ceramic kiln, heat-treatment furnace"></div>
          ${F("diameter", "Element diameter (mm)", "text")}
          ${F("overall", "Overall length (mm)", "text")}
          ${F("hotzone", "Hot-zone length (mm)", "text")}
          ${F("coldzone", "Cold-zone length (mm)", "text")}
          ${F("voltage", "Voltage (V)", "text")}
          ${F("resistance", "Resistance (Ω)", "text")}
          ${F("power", "Power (kW)", "text")}
          ${F("quantity", "Quantity", "number")}
          ${F("temperature", "Furnace temperature (°C)", "text")}
          <div class="field full"><label>Message</label><textarea name="message" placeholder="Existing part number, current problem, timeline…"></textarea></div>
          <div class="field full"><label>Upload photograph / drawing / datasheet</label>
            <input type="file" name="attachment" accept="image/*,.pdf,.dwg,.dxf" multiple>
            <span class="hint">Images or PDF. A clear photo with a scale is ideal.</span></div>
        </div>
        <div class="btn-row" style="margin-top:20px">
          <button type="submit" class="btn btn--primary btn--lg">${icon.swap} Get Replacement Recommendation</button>
          <a class="btn btn--ghost btn--lg" href="https://wa.me/${c.whatsappHref}">${icon.whatsapp} Send on WhatsApp</a>
        </div>
        <p class="form-note">Uploads are handled client-side in this build — connect a backend/Formspree endpoint to receive files.</p>
      </form>
    </div>
  </div>
</div></section>`;
  return page({
    title: "SiC Heater Replacement — Send Your Existing Element | India",
    description: "Replacement silicon carbide heating elements. Send a photo, drawing or dimensions of your existing SiC heater and our team identifies a suitable replacement. Serving furnaces across India.",
    path: "/solutions/sic-heater-replacement/", crumbs, body,
  });
}

/* ---------------- SiC ELEMENT CALCULATOR (§16) ---------------- */
export function calculatorPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Technical Centre", href: "/technical-centre/" }, { label: "SiC Element Calculator", href: "/technical-centre/sic-heating-element-calculator/" }];
  const num = (id, label, ph = "") => `<div class="field"><label>${label}</label><input type="number" id="${id}" inputmode="decimal" placeholder="${ph}"></div>`;
  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${breadcrumb(crumbs)}
  <span class="badge" style="margin-bottom:12px">Interactive tool</span>
  <h1>SiC Heating Element Calculator</h1>
  <p>Enter your furnace details for indicative estimates of resistance, current and element count. These are engineering estimates — not guaranteed specifications.</p>
</div></section>

<section class="section"><div class="container">
  <div class="calc">
    <form class="calc__panel" id="sic-calc">
      <h3 style="margin-top:0">Your furnace</h3>
      <div class="form-grid">
        ${num("c-temp", "Furnace temperature (°C)", "e.g. 1300")}
        ${num("c-power", "Required furnace power (kW)", "e.g. 30")}
        ${num("c-volts", "Supply voltage (V)", "e.g. 415")}
        ${num("c-num", "Number of elements", "e.g. 8")}
        ${num("c-dia", "Element diameter (mm)", "optional")}
        ${num("c-hot", "Hot-zone length (mm)", "optional")}
      </div>
      <p class="form-note">Assumes elements share the supply voltage (parallel). Real banks vary — we confirm the exact wiring, loading and grade.</p>
    </form>
    <div class="calc__out">
      <h3 style="margin-top:0">Estimated configuration</h3>
      <div class="result-row"><span>Total bank resistance</span><b id="o-res">—</b></div>
      <div class="result-row"><span>Resistance / element</span><b id="o-resper">—</b></div>
      <div class="result-row"><span>Current draw</span><b id="o-current">—</b></div>
      <div class="result-row"><span>Elements</span><b id="o-num">—</b></div>
      <div class="calc__note" id="o-rec">Enter values to see an estimate.</div>
      <a class="btn btn--primary btn--block" href="/contact/#quote" style="margin-top:18px">${icon.doc} Request a Quote for This Configuration</a>
    </div>
  </div>
  <div class="prose" style="margin-top:40px">
    <div class="callout"><p><strong>Important:</strong> Results are indicative estimates based on Ohm's law (P = V²/R, I = V/R) and simple assumptions. Actual surface loading, element grade, wiring and quantity must be confirmed by our engineers against your furnace and duty. Do not treat these figures as final specifications.</p></div>
  </div>
</div></section>`;
  return page({
    title: "SiC Heating Element Calculator (Resistance, Power, Count)",
    description: "Free interactive silicon carbide heating element calculator. Estimate element resistance, current draw and element count from your furnace power and voltage. Indicative estimates only.",
    path: "/technical-centre/sic-heating-element-calculator/", crumbs, body,
  });
}

/* ---------------- RESISTANCE CALCULATOR ---------------- */
export function resistanceCalcPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Technical Centre", href: "/technical-centre/" }, { label: "Resistance Calculator", href: "/technical-centre/resistance-calculator/" }];
  const num = (id, label, ph = "") => `<div class="field"><label>${label}</label><input type="number" id="${id}" inputmode="decimal" placeholder="${ph}"></div>`;
  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${breadcrumb(crumbs)}
  <span class="badge" style="margin-bottom:12px">Interactive tool</span>
  <h1>SiC Heater Resistance Calculator</h1>
  <p>Estimate element and bank resistance and current from your voltage and power. Indicative estimates only — not guaranteed specifications.</p>
</div></section>

<section class="section"><div class="container">
  <div class="calc">
    <form class="calc__panel" id="res-calc">
      <h3 style="margin-top:0">Inputs</h3>
      <div class="form-grid">
        ${num("r-volts", "Supply voltage (V)", "e.g. 415")}
        ${num("r-power", "Total power (kW)", "e.g. 24")}
        ${num("r-num", "Number of elements", "e.g. 6")}
      </div>
      <p class="form-note">Uses R = V²/P for the bank; per-element assumes elements in parallel.</p>
    </form>
    <div class="calc__out">
      <h3 style="margin-top:0">Estimate</h3>
      <div class="result-row"><span>Bank resistance</span><b id="r-out-bank">—</b></div>
      <div class="result-row"><span>Per-element (parallel)</span><b id="r-out-el">—</b></div>
      <div class="result-row"><span>Current draw</span><b id="r-out-i">—</b></div>
      <a class="btn btn--primary btn--block" href="/contact/#quote" style="margin-top:18px">${icon.doc} Request a Quote</a>
    </div>
  </div>
  <div class="prose" style="margin-top:40px">
    <div class="callout"><p><strong>Note:</strong> SiC resistance varies with temperature and rises as elements age, so a measured cold resistance differs from the operating value. Use this as a starting estimate and let us confirm the specification. Learn more in <a href="/technical-centre/articles/how-to-calculate-sic-heater-resistance/">how to calculate SiC heater resistance</a>.</p></div>
  </div>
</div></section>`;
  return page({
    title: "SiC Heater Resistance Calculator | S S Enterprises",
    description: "Estimate silicon carbide heater resistance and current from voltage and power with this free calculator. Indicative engineering estimates for furnace element banks.",
    path: "/technical-centre/resistance-calculator/", crumbs, body,
  });
}
