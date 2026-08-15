# S S Enterprises — Website

**High-Temperature Industrial Heating & Ceramic Solutions**

A premium, SEO-focused, mobile-first B2B website for S S Enterprises — an Indian
industrial company specialising in **silicon carbide (SiC) heating elements**,
**aluminium melting & holding furnaces**, and **ceramic / refractory products**.

Built as a **real, scalable site architecture** (not a mockup): a zero-dependency
Node static-site generator with reusable components and data-driven pages, so it
can be populated with real specs, photos, datasheets, case studies and articles
without a redesign.

---

## Quick start

```bash
npm run build     # generates the static site into dist/
npm run serve     # builds, then serves dist/ at http://localhost:5000
```

There are **no build dependencies** — only Node.js ≥ 18 (uses built-in modules
only). `npm run serve` uses Python's `http.server`; any static server works.

Deploy the contents of `dist/` to any static host (GitHub Pages, Netlify,
Cloudflare Pages, S3, Nginx…). A `.nojekyll` file is emitted for GitHub Pages.

---

## What's included (91 pages)

- **Homepage** with the full required section flow (hero → core products → why →
  SiC → custom → replacement → furnaces → ceramics → industries → manufacturing →
  technical centre → resources → final CTA → footer).
- **Products**
  - SiC flagship category + 8 product pages (rods, Alpha, straight, U, W, spiral,
    dumbbell, custom) — each with the full 16-section product architecture.
  - Industrial furnaces category + 5 furnace pages.
  - Ceramic & refractory category + 6 product pages.
- **Industries** (7) · **Solutions** (4, incl. the replacement lead form) ·
  **Applications** (6).
- **Technical Centre** — 2 interactive calculators (element + resistance), 5
  core guides, and 20 technical articles.
- **Resources** (searchable), **About Us** (6 pages), **Contact** (multi-path
  enquiry), **Locations** (10 India cities).
- **SEO foundation** — semantic HTML, clean URLs, meta titles/descriptions,
  canonicals, Open Graph, `sitemap.xml`, `robots.txt`, breadcrumbs, internal
  linking, and JSON-LD schema (Organization, Product, BreadcrumbList, FAQPage,
  TechArticle, LocalBusiness, CollectionPage, WebSite).
- **Performance & mobile** — one small CSS file, ~6 KB of vanilla JS, lazy assets,
  self-contained SVG imagery, sticky mobile action bar (Call · WhatsApp · Quote).

---

## Project structure

```
build.mjs                 # generator: data + templates → dist/
src/
  data/                   # site config + content (edit these to update the site)
    site.mjs              #   brand, navigation, footer, CONTACT DETAILS
    products.mjs          #   SiC / furnace / ceramic catalogue
    industries.mjs solutions.mjs technical.mjs locations.mjs
    icons.mjs diagrams.mjs   # inline SVG icons + technical diagrams
  templates/              # layout shell, header/footer, product & content templates
  pages/                  # homepage, category/hub builders, forms, about
  styles/main.css         # the complete design system
  scripts/main.js         # menu, calculators, form handling, reveal-on-scroll
dist/                     # generated output (deployable)
```

---

## Customising (the important bits)

### 1. Contact details — **replace the placeholders**
All contact info lives in **`src/data/site.mjs` → `contact`** (phone, WhatsApp,
email, address, map, hours, LinkedIn) and the production `domain`. These are
**placeholders** — set verified values, then `npm run build`. Everything on the
site (header, footer, contact page, schema, mobile bar) updates from this one file.

### 2. Logo
The brand mark is `src/assets/logo.svg` — a faithful SVG reproduction of the
S S Enterprises wordmark (red serif "SS Enterprises", dove accent, arrow, tagline
colour). **To use the official logo file**, drop it in as `src/assets/logo.svg`
(or update the `<img src>` references in `src/templates/layout.mjs`) and rebuild.

### 3. Product photography
The site currently uses **accurate technical SVG diagrams** (element shapes,
furnace cross-sections, refractory) rather than stock photos — so nothing is ever
misrepresented as a real product photo. When real photographs are available, add
an `<img>` branch in `src/templates/components.mjs → visual()` keyed by the same
names; templates fall back to the diagrams automatically. Use descriptive `alt`
text and keep consistent aspect ratios.

### 4. Content integrity
- Technical specs are shown as **"Contact us for configuration"** where a value is
  application-dependent — no engineering values are invented.
- Calculators clearly label their output as **indicative estimates**, not
  guaranteed specifications.
- Manufacturing pages state that S S Enterprises **both manufactures and imports**,
  and distinguish *manufactured* vs *sourced/imported* — transparency by design.
- Case studies, certifications and infrastructure pages carry **verification
  notes** and placeholders to fill with substantiated information only.

### 5. Wiring up the forms
Enquiry, replacement and quote forms validate and confirm client-side. Connect a
real endpoint (Formspree, an email API, or your CRM) in
`src/scripts/main.js` (`form[data-enquiry]` handler) to receive submissions and
file uploads.

---

## Design system

White + Charcoal + Industrial Red (`#C1121F`, derived from the logo) + Steel Grey.
Typography: **Inter**. Red is reserved for CTAs, links, active states, icons and
accents — the dominant surfaces stay white/charcoal/steel. Subtle industrial
detailing (fine grids, red accent lines, dark engineering sections, spec tables,
technical diagrams) — engineered, not ornamental.
