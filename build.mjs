/* =========================================================================
   S S Enterprises — static site generator (zero dependencies, Node ≥ 18)
   Reads data + templates from /src and writes a static site to /dist.
   Run: `npm run build`  (or `node build.mjs`)
   ========================================================================= */
import { mkdir, writeFile, rm, copyFile, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { site } from "./src/data/site.mjs";
import { allProducts } from "./src/data/products.mjs";
import { industries } from "./src/data/industries.mjs";
import { solutions } from "./src/data/solutions.mjs";
import { guides, articles, applications } from "./src/data/technical.mjs";
import { locationData } from "./src/data/locations.mjs";

import { productPage } from "./src/templates/productPage.mjs";
import { homePage } from "./src/pages/home.mjs";
import { contactPage, replacementPage, calculatorPage, resistanceCalcPage } from "./src/pages/forms.mjs";
import {
  productsIndex, sicCategory, furnacesCategory, ceramicCategory,
  industriesIndex, industryPage, solutionsIndex, solutionPage,
  technicalIndex, guidePage, articlePage, applicationPage, applicationsIndex,
  resourcesPage, locationsIndex, locationPage,
} from "./src/pages/sections.mjs";
import { aboutIndex, aboutCompany, aboutManufacturing, aboutSimple } from "./src/pages/about.mjs";
import { page } from "./src/templates/layout.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "dist");

/* ---- collect every page as { path, html } ---- */
const pages = [];
const add = (path, html) => pages.push({ path, html });

/* Home + core */
add("/", homePage());
add("/products/", productsIndex());
add("/products/silicon-carbide-heating-elements/", sicCategory());
add("/products/industrial-furnaces/", furnacesCategory());
add("/products/ceramic-refractory-products/", ceramicCategory());

/* All product detail pages */
for (const p of allProducts) add(p.path, productPage(p));

/* Industries */
add("/industries/", industriesIndex(industries));
for (const i of industries) add(i.path, industryPage(i));

/* Solutions (replacement is a dedicated form page) */
add("/solutions/", solutionsIndex(solutions));
add("/solutions/sic-heater-replacement/", replacementPage());
for (const s of solutions) add(s.path, solutionPage(s));

/* Technical Centre */
add("/technical-centre/", technicalIndex(guides, articles));
add("/technical-centre/sic-heating-element-calculator/", calculatorPage());
add("/technical-centre/resistance-calculator/", resistanceCalcPage());
for (const g of guides) add(g.path, guidePage(g));
for (const a of articles) add(a.path, articlePage(a));

/* Applications */
add("/applications/", applicationsIndex(applications));
for (const app of applications) add(`/applications/${app[0]}/`, applicationPage(app));

/* Resources */
add("/resources/", resourcesPage(guides, articles));

/* Locations */
add("/locations/", locationsIndex(locationData));
for (const l of locationData) add(l.path, locationPage(l));

/* About */
add("/about-us/", aboutIndex());
add("/about-us/company/", aboutCompany());
add("/about-us/manufacturing/", aboutManufacturing());
add("/about-us/quality/", aboutSimple("quality", "Quality", "S S Enterprises quality approach: product inspection, testing and quality control for silicon carbide heating elements, furnaces and ceramic products.", "Our quality approach covers product inspection, testing and control appropriate to high-temperature products, plus support for matched replacement sets and customisation.", "Add specific inspection/testing procedures and any measured quality metrics once verified."));
add("/about-us/infrastructure/", aboutSimple("infrastructure", "Infrastructure", "S S Enterprises infrastructure: facilities, inventory and engineering support behind our supply of high-temperature products.", "Our facilities, inventory and engineering support underpin reliable supply, customisation and fast response to enquiries.", "Add details of premises, equipment and inventory capacity once verified, ideally with photographs."));
add("/about-us/certifications/", aboutSimple("certifications", "Certifications", "S S Enterprises certifications and compliance for high-temperature industrial products. Published as verified.", "Certifications and compliance information will be published here as verified. We only list certifications we can substantiate.", "Add real certification names, numbers and validity here — do not list any certification that cannot be verified."));

/* Contact */
add("/contact/", contactPage());

/* 404 */
const notFound = page({
  title: "Page Not Found (404)", description: "The page you requested could not be found.", path: "/404.html",
  body: `<section class="page-hero"><div class="container page-hero__inner"><h1>Page not found</h1><p>The page you're looking for doesn't exist or has moved.</p></div></section>
  <section class="section"><div class="container narrow"><div class="prose"><p>Try one of these:</p><ul>
  <li><a href="/products/silicon-carbide-heating-elements/">SiC Heating Elements</a></li>
  <li><a href="/products/industrial-furnaces/">Industrial Furnaces</a></li>
  <li><a href="/technical-centre/">Technical Centre</a></li>
  <li><a href="/contact/">Contact us</a></li></ul>
  <a class="btn btn--primary btn--lg" href="/">Back to home</a></div></div></section>`,
});

/* ---- write output ---- */
async function copyDir(src, destDir) {
  await mkdir(destDir, { recursive: true });
  for (const entry of await readdir(src, { withFileTypes: true })) {
    const s = join(src, entry.name);
    if (entry.isDirectory()) await copyDir(s, join(destDir, entry.name));
    else await copyFile(s, join(destDir, entry.name));
  }
}

async function main() {
  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });

  // assets
  const assetsOut = join(DIST, "assets");
  await copyDir(join(__dirname, "src", "assets"), assetsOut);
  await copyFile(join(__dirname, "src", "styles", "main.css"), join(assetsOut, "main.css"));
  await copyFile(join(__dirname, "src", "scripts", "main.js"), join(assetsOut, "main.js"));

  // pages -> path/index.html
  for (const { path, html } of pages) {
    const rel = path === "/" ? "index.html" : path.replace(/^\//, "").replace(/\/$/, "") + "/index.html";
    const out = join(DIST, rel);
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, html, "utf8");
  }
  await writeFile(join(DIST, "404.html"), notFound, "utf8");

  // sitemap.xml
  const now = new Date().toISOString().slice(0, 10);
  const urls = pages.map(({ path }) => {
    const pri = path === "/" ? "1.0" : path.startsWith("/products/silicon-carbide") ? "0.9" : path.split("/").length <= 3 ? "0.8" : "0.6";
    return `  <url><loc>${site.domain}${path}</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>${pri}</priority></url>`;
  }).join("\n");
  await writeFile(join(DIST, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, "utf8");

  // robots.txt
  await writeFile(join(DIST, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`, "utf8");

  // helpful redirect/meta files
  await writeFile(join(DIST, ".nojekyll"), "", "utf8");
  await writeFile(join(DIST, "CNAME.example"), "www.ssenterprises.example\n", "utf8");

  console.log(`✓ Built ${pages.length} pages + sitemap.xml + robots.txt → dist/`);
}

main().catch((e) => { console.error(e); process.exit(1); });
