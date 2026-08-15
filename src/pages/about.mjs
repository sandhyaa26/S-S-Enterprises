import { page, breadcrumb } from "../templates/layout.mjs";
import { icon } from "../data/icons.mjs";
import { contentPage } from "../templates/contentPage.mjs";
import { sectionHead, coreCard, mini, ctaBand, checkList, linkList, sourcingNote, visual } from "../templates/components.mjs";

const crumbHome = { label: "Home", href: "/" };
const V = (t) => `<div class="callout"><p><strong>Verification note:</strong> ${t} Replace the placeholder text below with verified company information before publishing — only include claims that can be substantiated.</p></div>`;

export function aboutIndex() {
  const crumbs = [crumbHome, { label: "About Us", href: "/about-us/" }];
  const body = `
<section class="page-hero"><div class="container page-hero__inner">
  ${breadcrumb(crumbs)}<h1>About S S Enterprises</h1>
  <p>An engineering-led Indian supplier of silicon carbide heating elements, aluminium melting &amp; holding furnaces and technical ceramic products — serving demanding high-temperature industrial applications.</p>
</div></section>
<section class="section"><div class="container">
  <div class="split">
    <div class="split__media">${visual("technical")}</div>
    <div>
      <span class="eyebrow">Who we are</span>
      <h2>Manufacturers and importers of high-temperature products</h2>
      <p>S S Enterprises supplies silicon carbide heating elements, aluminium furnaces and ceramic &amp; refractory products to industrial customers across India. We combine manufacturing and importing to offer the right product for each application — and we're transparent about which is which.</p>
      ${checkList(["Engineering-led product selection and customisation", "Manufactured and sourced/imported products, clearly distinguished", "Technical support, replacement and fast quotes"])}
    </div>
  </div>
</div></section>
<section class="section section--soft"><div class="container">
  ${sectionHead({ eyebrow: "Explore", title: "More about us" })}
  <div class="grid grid-3">
    ${coreCard({ title: "Company", desc: "Who we are, what we do, and how we work with industrial buyers.", href: "/about-us/company/", cta: "About the company", visualKey: "technical" })}
    ${coreCard({ title: "Manufacturing", desc: "Manufacturing capability, inspection, testing and dispatch — with transparent sourcing.", href: "/about-us/manufacturing/", cta: "Manufacturing & quality", visualKey: "refractory" })}
    ${coreCard({ title: "Quality", desc: "Our approach to product inspection, testing and quality control.", href: "/about-us/quality/", cta: "Quality", visualKey: "straight" })}
    ${coreCard({ title: "Infrastructure", desc: "Facilities, inventory and engineering support behind our supply.", href: "/about-us/infrastructure/", cta: "Infrastructure", visualKey: "meltFurnace" })}
    ${coreCard({ title: "Certifications", desc: "Certifications and compliance (published as verified).", href: "/about-us/certifications/", cta: "Certifications", visualKey: "fibre" })}
    ${coreCard({ title: "Contact", desc: "Talk to an engineer, request a quote or send an existing heater.", href: "/contact/", cta: "Contact us", visualKey: "custom" })}
  </div>
</div></section>
<section class="section"><div class="container">${sourcingNote("generic")}</div></section>
${ctaBand({ title: "Work with an engineering-led supplier", text: "Request a quote or talk to an engineer about your high-temperature requirement." })}`;
  return page({ title: "About S S Enterprises — High-Temperature Solutions", description: "About S S Enterprises: an engineering-led Indian supplier of silicon carbide heating elements, aluminium furnaces and ceramic products. Manufacturers and importers, transparent sourcing.", path: "/about-us/", crumbs, body });
}

export function aboutCompany() {
  return contentPage({
    title: "Company", metaTitle: "About the Company | S S Enterprises",
    metaDesc: "S S Enterprises — manufacturers and importers of silicon carbide heating elements, aluminium melting furnaces and ceramic products, serving industrial customers across India.",
    path: "/about-us/company/",
    crumbs: [crumbHome, { label: "About Us", href: "/about-us/" }, { label: "Company", href: "/about-us/company/" }],
    intro: "Manufacturers and importers of silicon carbide heating elements, aluminium melting furnaces and ceramic products.",
    sections: [
      { h: "What we do", html: `<p>S S Enterprises supplies high-temperature industrial products across three families: silicon carbide heating elements, aluminium melting &amp; holding furnaces, and ceramic &amp; refractory products. We help industrial buyers select, customise and replace these products for demanding thermal applications.</p>` },
      { h: "How we work", html: `<p>We're an engineering-led business focused on getting the specification right — the correct element geometry, the right furnace configuration, and materials matched to the operating temperature. We respond quickly to enquiries and support customisation and replacement.</p>` },
      { h: "Manufactured and imported — transparently", html: `<p>Our business includes both manufacturing and importing. We clearly distinguish products manufactured in-house from those sourced or imported, and we confirm sourcing on every enquiry. Transparency is a core trust principle for us.</p>${V("The detailed company history, founding year and scale should be added here.")}` },
    ],
  });
}

export function aboutManufacturing() {
  return contentPage({
    title: "Manufacturing & Quality", metaTitle: "Manufacturing & Quality | S S Enterprises",
    metaDesc: "S S Enterprises manufacturing and quality: product inspection, testing, customisation, inventory, packaging and dispatch — with transparent manufactured vs sourced distinction.",
    path: "/about-us/manufacturing/",
    crumbs: [crumbHome, { label: "About Us", href: "/about-us/" }, { label: "Manufacturing", href: "/about-us/manufacturing/" }],
    intro: "Manufacturing capability, inspection, testing and dispatch — with transparent sourcing.",
    sections: [
      { h: "Manufactured vs sourced — transparency first", html: `<p>S S Enterprises both manufactures and imports products. We do <strong>not</strong> imply that every product is manufactured in-house. On every quote we clearly state whether an item is:</p><ul><li><strong>Manufactured by S S Enterprises</strong>, or</li><li><strong>Sourced / imported</strong> and supplied by S S Enterprises.</li></ul><p>This transparency is central to how we build trust with industrial buyers.</p>` },
      { h: "Capability & process", html: `<p>Our process supports product inspection, testing, customisation, inventory, packaging, dispatch and engineering support. We work from your drawing, sample or specification to deliver a suitable product.</p>` + checkList(["Product inspection and testing", "Customisation and engineering support", "Inventory and matched replacement sets", "Careful packaging for fragile SiC elements", "Dispatch across India"]) },
      { h: "Engineering support", html: `<p>Beyond supply, we help you specify — selecting element geometry, furnace configuration and materials for your temperature and duty, and advising on installation and maintenance.</p>${V("Add real manufacturing photographs and describe in-house vs imported product lines specifically.")}` },
    ],
  });
}

export function aboutSimple(slug, title, metaDesc, intro, note) {
  return contentPage({
    title, metaTitle: `${title} | S S Enterprises`, metaDesc, path: `/about-us/${slug}/`,
    crumbs: [crumbHome, { label: "About Us", href: "/about-us/" }, { label: title, href: `/about-us/${slug}/` }],
    intro,
    sections: [
      { h: title, html: `<p>${intro}</p>${V(note)}` },
      { h: "Related", html: linkList([["Manufacturing", "/about-us/manufacturing/"], ["Quality", "/about-us/quality/"], ["Company", "/about-us/company/"], ["Contact", "/contact/"]]) },
    ],
  });
}
