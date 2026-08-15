import { page, breadcrumb } from "./layout.mjs";
import { icon } from "../data/icons.mjs";
import { faqBlock, ctaBand } from "./components.mjs";

/* Generic content / article page.
   opts: { title, metaTitle, metaDesc, path, crumbs, badge, intro,
           toc[[label,id]], sections[{id,h,html}], body(html), faqs,
           cta{title,text}, schemaType('Article'|null), sidebar(html) } */
export function contentPage(opts) {
  const {
    title, metaTitle, metaDesc, path, crumbs, badge, intro,
    toc, sections, body, faqs, cta, schemaType, sidebar, articleMeta,
  } = opts;

  const heroHtml = `<section class="page-hero"><div class="container page-hero__inner">
    ${breadcrumb(crumbs)}
    ${badge ? `<span class="badge" style="margin-bottom:12px">${badge}</span>` : ""}
    <h1>${title}</h1>
    ${intro ? `<p>${intro}</p>` : ""}
  </div></section>`;

  const sectionsHtml = sections
    ? sections.map((s) => `<section${s.id ? ` id="${s.id}"` : ""}>${s.h ? `<h2>${s.h}</h2>` : ""}${s.html}</section>`).join("\n")
    : (body || "");

  const tocHtml = toc && toc.length
    ? `<aside class="doc-side"><div class="toc"><h4>On this page</h4><ul>${toc.map(([l, id]) => `<li><a href="#${id}">${l}</a></li>`).join("")}</ul></div></aside>`
    : "";

  const faqHtml = faqs && faqs.length
    ? `<section class="section section--soft"><div class="container narrow">
        <div class="section-head center"><span class="eyebrow">FAQs</span><h2>Frequently asked questions</h2></div>
        ${faqBlock(faqs)}</div></section>`
    : "";

  const main = tocHtml
    ? `<section class="section"><div class="container"><div class="doc-layout">${tocHtml}
        <div class="prose">${articleMeta || ""}${sectionsHtml}${sidebar || ""}</div></div></div></section>`
    : `<section class="section"><div class="container narrow"><div class="prose">${sectionsHtml}</div>${sidebar || ""}</div></section>`;

  const ctaHtml = cta ? ctaBand(cta) : ctaBand({
    title: "Have a high-temperature requirement?",
    text: "Request a quote or talk to an engineer — we respond quickly with practical, transparent recommendations.",
  });

  const schema = [];
  if (schemaType === "Article") {
    schema.push({
      "@context": "https://schema.org", "@type": "TechArticle",
      headline: title, description: metaDesc,
      author: { "@type": "Organization", name: "S S Enterprises" },
      publisher: { "@type": "Organization", name: "S S Enterprises" },
    });
  }

  return page({
    title: metaTitle || title, description: metaDesc, path, crumbs,
    faqs: faqs || null, schema,
    body: heroHtml + main + faqHtml + ctaHtml,
  });
}
