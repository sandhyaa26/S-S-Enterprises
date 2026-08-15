/* =========================================================================
   Global site configuration.
   NOTE: Contact details below are PLACEHOLDERS. Replace the values in
   `contact` with S S Enterprises' verified information before going live.
   Everything downstream reads from here, so a single edit updates the whole site.
   ========================================================================= */

export const site = {
  name: "S S Enterprises",
  legalName: "S S Enterprises",
  domain: "https://www.ssenterprises.example",   // TODO: set real production domain
  positioning: "High-Temperature Industrial Heating & Ceramic Solutions",
  tagline: "Manufacturers and importers of silicon carbide heating elements, aluminium melting furnaces and ceramic products.",
  supporting: "Silicon carbide heating elements, aluminium melting furnaces and technical ceramic solutions engineered for demanding industrial applications.",
  locale: "en_IN",

  // ---- PLACEHOLDER contact block — replace with verified details ----
  contact: {
    phoneDisplay: "+91 00000 00000",
    phoneHref: "+910000000000",
    whatsappHref: "910000000000",            // digits only, country code first
    email: "info@ssenterprises.example",     // TODO: replace with verified email
    salesEmail: "sales@ssenterprises.example",
    addressLine: "Industrial Area",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    postal: "560000",
    mapQuery: "S+S+Enterprises+Bengaluru",
    hours: "Mon–Sat, 9:30 AM – 6:30 PM IST",
    linkedin: "",                            // TODO: add profile URL if available
  },
};

/* Primary navigation (mega-menu structure). Individual products live in dropdowns,
   not the top bar, per the brief. */
export const nav = [
  {
    label: "Products", href: "/products/", mega: true,
    columns: [
      {
        head: "Silicon Carbide Heating Elements",
        links: [
          ["SiC Heating Elements", "/products/silicon-carbide-heating-elements/"],
          ["SiC Heating Rods", "/products/silicon-carbide-heating-elements/sic-heating-rods/"],
          ["Alpha SiC Elements", "/products/silicon-carbide-heating-elements/alpha-sic-heating-elements/"],
          ["Straight / U / W / Spiral", "/products/silicon-carbide-heating-elements/straight/"],
          ["Custom Elements", "/products/silicon-carbide-heating-elements/custom/"],
        ],
      },
      {
        head: "Furnaces & Ceramics",
        links: [
          ["Industrial Furnaces", "/products/industrial-furnaces/"],
          ["Aluminium Melting Furnaces", "/products/industrial-furnaces/aluminium-melting-furnaces/"],
          ["Aluminium Holding Furnaces", "/products/industrial-furnaces/aluminium-holding-furnaces/"],
          ["Ceramic & Refractory", "/products/ceramic-refractory-products/"],
          ["Ceramic Fibre Products", "/products/ceramic-refractory-products/ceramic-fibre-products/"],
        ],
      },
    ],
  },
  { label: "Industries", href: "/industries/", mega: true, columns: [
    { head: "Industries Served", links: [
      ["Foundries", "/industries/foundries/"],
      ["Aluminium Processing", "/industries/aluminium-processing/"],
      ["Ceramics", "/industries/ceramics/"],
      ["Heat Treatment", "/industries/heat-treatment/"],
    ]},
    { head: " ", links: [
      ["Glass", "/industries/glass/"],
      ["Laboratory & R&D", "/industries/laboratory-rd/"],
      ["Advanced Materials", "/industries/advanced-materials/"],
    ]},
  ]},
  { label: "Solutions", href: "/solutions/", mega: true, columns: [
    { head: "Engineering Solutions", links: [
      ["SiC Heater Replacement", "/solutions/sic-heater-replacement/"],
      ["Custom Heating Solutions", "/solutions/custom-heating-solutions/"],
      ["Furnace Heating Solutions", "/solutions/furnace-heating-solutions/"],
      ["High-Temperature Solutions", "/solutions/high-temperature-solutions/"],
    ]},
  ]},
  { label: "Technical Centre", href: "/technical-centre/", mega: true, columns: [
    { head: "Tools", links: [
      ["SiC Element Calculator", "/technical-centre/sic-heating-element-calculator/"],
      ["Resistance Calculator", "/technical-centre/resistance-calculator/"],
      ["Selection Guide", "/technical-centre/how-to-select-sic-heating-element/"],
    ]},
    { head: "Guides", links: [
      ["SiC Heating Element Guide", "/technical-centre/sic-heating-element-guide/"],
      ["Installation Guide", "/technical-centre/installation-guide/"],
      ["Troubleshooting", "/technical-centre/troubleshooting/"],
      ["FAQs", "/technical-centre/faqs/"],
    ]},
  ]},
  { label: "Resources", href: "/resources/" },
  { label: "About Us", href: "/about-us/", mega: true, columns: [
    { head: "Company", links: [
      ["Overview", "/about-us/"],
      ["Company", "/about-us/company/"],
      ["Manufacturing", "/about-us/manufacturing/"],
      ["Quality", "/about-us/quality/"],
      ["Infrastructure", "/about-us/infrastructure/"],
      ["Certifications", "/about-us/certifications/"],
    ]},
  ]},
  { label: "Contact", href: "/contact/" },
];

/* Footer link groups */
export const footerNav = {
  Company: [
    ["About Us", "/about-us/"],
    ["Manufacturing", "/about-us/manufacturing/"],
    ["Quality", "/about-us/quality/"],
    ["Technical Centre", "/technical-centre/"],
    ["Resources", "/resources/"],
    ["Contact", "/contact/"],
  ],
  Products: [
    ["SiC Heating Elements", "/products/silicon-carbide-heating-elements/"],
    ["SiC Heating Rods", "/products/silicon-carbide-heating-elements/sic-heating-rods/"],
    ["Aluminium Melting Furnaces", "/products/industrial-furnaces/aluminium-melting-furnaces/"],
    ["Aluminium Holding Furnaces", "/products/industrial-furnaces/aluminium-holding-furnaces/"],
    ["Ceramic Products", "/products/ceramic-refractory-products/"],
  ],
  Solutions: [
    ["SiC Heater Replacement", "/solutions/sic-heater-replacement/"],
    ["Custom Heating Solutions", "/solutions/custom-heating-solutions/"],
    ["Furnace Heating Solutions", "/solutions/furnace-heating-solutions/"],
    ["Industries Served", "/industries/"],
    ["Locations", "/locations/"],
  ],
};
