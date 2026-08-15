/* =========================================================================
   Product catalogue data. Technical descriptions are generic-but-accurate.
   Numeric performance values are intentionally left as "Contact us for
   configuration" / "Application dependent" — no engineering values are invented.
   ========================================================================= */

const SIC_BASE = "/products/silicon-carbide-heating-elements";
const FUR_BASE = "/products/industrial-furnaces";
const CER_BASE = "/products/ceramic-refractory-products";

const sicCrumbs = (label, slug) => [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "SiC Heating Elements", href: SIC_BASE + "/" },
  { label, href: slug },
];

/* Standard SiC spec table (brief §13) */
const sicSpecs = (elementType = "Alpha / configuration dependent") => [
  ["Material", "Silicon Carbide (SiC)"],
  ["Element Type", elementType],
  ["Diameter", null],
  ["Hot Zone", null],
  ["Cold Zone", null],
  ["Overall Length", null],
  ["Resistance", null],
  ["Voltage", null],
  ["Power", null],
  ["Operating Temperature", null],
  ["Terminal Type", "Configuration dependent"],
  ["Customisation", "Available"],
];

const sicApplications = [
  "Ceramic and pottery kilns",
  "Heat-treatment and annealing furnaces",
  "Laboratory and R&D furnaces",
  "Glass processing and toughening",
  "Aluminium and non-ferrous melting/holding",
  "Powder metallurgy and sintering",
];
const sicIndustries = [
  ["Foundries", "/industries/foundries/"],
  ["Aluminium Processing", "/industries/aluminium-processing/"],
  ["Ceramics", "/industries/ceramics/"],
  ["Heat Treatment", "/industries/heat-treatment/"],
  ["Glass", "/industries/glass/"],
  ["Laboratory & R&D", "/industries/laboratory-rd/"],
];

const commonInstall = `
<p><strong>Handling.</strong> SiC elements are hard but brittle — support the cold ends and avoid bending or shock loads during installation.</p>
<p><strong>Mounting.</strong> Element hangers, terminal straps and spacing should follow the furnace design. Correct spacing helps even heat distribution and avoids local hot spots.</p>
<p><strong>Ageing.</strong> SiC element resistance increases gradually with use. Systems with tap-changing or variable output allow you to compensate for ageing and keep the furnace at temperature.</p>
<p><strong>Replacement.</strong> When replacing, elements of similar resistance should generally be grouped together. We can advise on matched replacement sets — see <a href="/solutions/sic-heater-replacement/">SiC heater replacement</a>.</p>`;

const relatedSic = (exclude = "") => [
  { title: "SiC Heating Rods", href: SIC_BASE + "/sic-heating-rods/", visualKey: "rod" },
  { title: "Alpha SiC Elements", href: SIC_BASE + "/alpha-sic-heating-elements/", visualKey: "alpha" },
  { title: "Straight Elements", href: SIC_BASE + "/straight/", visualKey: "straight" },
  { title: "U-Type Elements", href: SIC_BASE + "/u-type/", visualKey: "u" },
  { title: "Spiral Elements", href: SIC_BASE + "/spiral/", visualKey: "spiral" },
  { title: "Custom Elements", href: SIC_BASE + "/custom/", visualKey: "custom" },
].filter((r) => !r.href.endsWith(exclude + "/")).slice(0, 3);

/* ---------------- SiC PRODUCTS ---------------- */
export const sicProducts = [
  {
    slug: "sic-heating-rods", shortName: "SiC heating rod", visualKey: "rod",
    name: "Silicon Carbide (SiC) Heating Rods",
    tag: "SiC Heating Elements",
    metaTitle: "Silicon Carbide Heating Rod Manufacturer & Supplier in India",
    metaDesc: "Silicon carbide (SiC) heating rods for high-temperature electric furnaces — custom diameter, hot zone and terminal configurations. Request a quote from S S Enterprises.",
    intro: "Silicon carbide heating rods for electric furnaces operating at high temperatures, supplied in custom diameters, lengths and terminal configurations.",
    description: "SiC heating rods are electrically resistive silicon carbide bars used to heat furnaces, kilns and thermal processing equipment. They convert electrical energy into radiant heat and are widely used where stable high-temperature operation in air is required. We supply rods matched to your furnace geometry, voltage and power.",
    features: [
      { t: "High-temperature operation", d: "Suitable for demanding electric furnace duties in oxidising atmospheres." },
      { t: "Custom geometry", d: "Diameter, overall length and hot-/cold-zone lengths made to your furnace." },
      { t: "Radiant heating", d: "Even radiant output across the hot zone for uniform furnace temperature." },
      { t: "Matched replacement sets", d: "Elements can be grouped by resistance for balanced banks." },
    ],
    configs: ["Straight rod", "Custom diameter", "Custom hot zone", "Single-end / double-end terminals"],
    applications: sicApplications, industries: sicIndustries, install: commonInstall,
    faqs: [
      { q: "What temperatures do SiC heating rods reach?", a: "SiC elements are commonly used across high-temperature furnace ranges in air. The usable maximum depends on the element grade, surface loading and furnace design — tell us your operating temperature and we will confirm a suitable specification." },
      { q: "Can you match my existing rod?", a: "Yes. Send dimensions, a drawing, a photograph or an existing part number and we can identify a suitable replacement configuration." },
      { q: "How is a SiC rod priced?", a: "Pricing is per configuration — it depends on diameter, length, hot zone and quantity. Request a quote with your details for an accurate price." },
    ],
    specs: sicSpecs(), related: relatedSic("sic-heating-rods"),
  },
  {
    slug: "alpha-sic-heating-elements", shortName: "Alpha SiC element", visualKey: "alpha",
    name: "Alpha SiC Heating Elements",
    tag: "SiC Heating Elements",
    metaTitle: "Alpha SiC Heating Elements — Manufacturer & Supplier India",
    metaDesc: "Alpha (recrystallised) silicon carbide heating elements for high-temperature furnaces. Dense grain structure, custom configurations. Request a quote from S S Enterprises.",
    intro: "Alpha silicon carbide heating elements with a dense, recrystallised grain structure for demanding high-temperature furnace applications.",
    description: "Alpha SiC heating elements are made from high-purity recrystallised silicon carbide. The dense grain structure supports stable high-temperature operation and is often selected for higher-temperature furnace duties. We supply Alpha SiC elements in the configuration suited to your furnace.",
    features: [
      { t: "Dense recrystallised SiC", d: "High-purity grain structure for stable high-temperature service." },
      { t: "Higher-temperature duties", d: "Commonly selected where higher furnace temperatures are required." },
      { t: "Multiple shapes", d: "Available in straight, U, W, spiral and dumbbell configurations." },
      { t: "Custom to drawing", d: "Manufactured to your dimensions and terminal type." },
    ],
    configs: ["Straight", "U-type", "W-type", "Spiral", "Dumbbell", "Custom"],
    applications: sicApplications, industries: sicIndustries, install: commonInstall,
    faqs: [
      { q: "What is the difference between Alpha and Beta SiC?", a: "The terms refer to the crystalline form and manufacturing route of the silicon carbide. Alpha (recrystallised) elements have a dense grain structure often chosen for higher-temperature service. See our guide on <a href='/technical-centre/sic-heating-element-guide/'>SiC heating elements</a> for more detail." },
      { q: "Which temperatures suit Alpha SiC?", a: "Alpha SiC is frequently specified toward the higher end of the SiC operating range. Share your operating temperature and we will confirm suitability and surface loading." },
    ],
    specs: sicSpecs("Alpha SiC (recrystallised)"), related: relatedSic("alpha-sic-heating-elements"),
  },
  {
    slug: "straight", shortName: "straight element", visualKey: "straight",
    name: "Straight SiC Heating Elements",
    tag: "SiC Heating Elements",
    metaTitle: "Straight SiC Heating Elements — Manufacturer & Supplier India",
    metaDesc: "Straight-type silicon carbide heating elements with a central hot zone and cold ends. Custom diameter and length. Request a quote from S S Enterprises.",
    intro: "Straight SiC heating elements with a central hot zone and low-resistance cold ends — the most common configuration for horizontally or vertically mounted furnaces.",
    description: "The straight element is a single bar with a resistive hot zone in the centre and cold ends that pass through the furnace wall to the terminals. It is the most widely used SiC element form and suits a broad range of furnace layouts.",
    features: [
      { t: "Central hot zone", d: "Radiant heat concentrated in the working zone of the furnace." },
      { t: "Cold ends", d: "Low-resistance ends keep the furnace wall and terminals cooler." },
      { t: "Simple mounting", d: "Straightforward to install and replace in most furnace designs." },
      { t: "Custom lengths", d: "Overall length and hot-/cold-zone lengths made to order." },
    ],
    configs: ["Single hot zone", "Custom diameter", "Custom hot/cold zone lengths"],
    applications: sicApplications, industries: sicIndustries, install: commonInstall,
    faqs: [
      { q: "How do I measure a straight element for replacement?", a: "Record the overall length, hot-zone length, cold-end lengths and diameter, plus the furnace voltage if known. Send these to us — or a photo with a scale — for a matched replacement." },
    ],
    specs: sicSpecs("Straight, single hot zone"), related: relatedSic("straight"),
  },
  {
    slug: "u-type", shortName: "U-type element", visualKey: "u",
    name: "U-Type SiC Heating Elements",
    tag: "SiC Heating Elements",
    metaTitle: "U-Type SiC Heating Elements — Manufacturer & Supplier India",
    metaDesc: "U-shaped silicon carbide heating elements with both terminals on the same end, ideal for furnaces where connections are needed on one side. Request a quote.",
    intro: "U-type SiC elements bring both terminals to the same end of the furnace, simplifying wiring where connections are only accessible from one side.",
    description: "The U-type (hairpin) element folds the hot zone into a U shape so both cold ends and terminals sit together on one side of the furnace. This is useful for compact furnaces and where electrical connections must be grouped on a single face.",
    features: [
      { t: "Single-side terminals", d: "Both connections on one end for simpler wiring and access." },
      { t: "Compact layout", d: "Suits furnaces with limited terminal access." },
      { t: "Even hot zone", d: "Continuous hot zone around the U for uniform heating." },
    ],
    configs: ["U / hairpin", "Custom leg length", "Custom spacing"],
    applications: sicApplications, industries: sicIndustries, install: commonInstall,
    specs: sicSpecs("U-type (hairpin)"), related: relatedSic("u-type"),
  },
  {
    slug: "w-type", shortName: "W-type element", visualKey: "w",
    name: "W-Type SiC Heating Elements",
    tag: "SiC Heating Elements",
    metaTitle: "W-Type SiC Heating Elements — Manufacturer & Supplier India",
    metaDesc: "W-shaped silicon carbide heating elements offering an extended hot zone with terminals on one side. Custom configurations. Request a quote from S S Enterprises.",
    intro: "W-type SiC elements extend the hot zone by folding it into a W, delivering more heated length while keeping terminals grouped on one side.",
    description: "The W-type element packs a longer hot zone into a given furnace width by folding the element twice. It is chosen where more heated length or higher power is required from a single element position.",
    features: [
      { t: "Extended hot zone", d: "More heated length within the same furnace width." },
      { t: "Grouped terminals", d: "Connections kept on one side for easier installation." },
      { t: "Higher power per position", d: "Useful where more power is needed from fewer positions." },
    ],
    configs: ["W / double-fold", "Custom leg lengths", "Custom spacing"],
    applications: sicApplications, industries: sicIndustries, install: commonInstall,
    specs: sicSpecs("W-type (double-fold)"), related: relatedSic("w-type"),
  },
  {
    slug: "spiral", shortName: "spiral element", visualKey: "spiral",
    name: "Spiral SiC Heating Elements",
    tag: "SiC Heating Elements",
    metaTitle: "Spiral SiC Heating Elements — Manufacturer & Supplier India",
    metaDesc: "Spiral (slotted) silicon carbide heating elements with a machined hot zone for higher resistance. Custom configurations. Request a quote from S S Enterprises.",
    intro: "Spiral SiC elements have a machined spiral hot zone that raises resistance, often used where higher voltage or higher watt density is required.",
    description: "A spiral element has a helical slot machined into the hot zone. This lengthens the current path and raises resistance, which can help match higher supply voltages or achieve higher surface loading. Spiral hot zones are frequently combined with straight or multi-zone bodies.",
    features: [
      { t: "Higher resistance", d: "Machined spiral increases resistance for higher-voltage supplies." },
      { t: "Higher watt density", d: "Useful where more power per element is required." },
      { t: "Custom spiral pitch", d: "Hot-zone resistance tuned to your electrical requirement." },
    ],
    configs: ["Spiral hot zone", "Straight body + spiral zone", "Custom pitch"],
    applications: sicApplications, industries: sicIndustries, install: commonInstall,
    specs: sicSpecs("Spiral hot zone"), related: relatedSic("spiral"),
  },
  {
    slug: "dumbbell", shortName: "dumbbell element", visualKey: "dumbbell",
    name: "Dumbbell SiC Heating Elements",
    tag: "SiC Heating Elements",
    metaTitle: "Dumbbell SiC Heating Elements — Manufacturer & Supplier India",
    metaDesc: "Dumbbell-type silicon carbide heating elements with thick low-resistance cold ends and a thinner hot zone. Custom configurations. Request a quote.",
    intro: "Dumbbell SiC elements use thick, low-resistance cold ends and a thinner hot zone, concentrating heat in the working zone while keeping the ends cool.",
    description: "In the dumbbell configuration the cold ends are larger in diameter than the hot zone. The thicker ends carry current with minimal heating, so power is focused in the central hot zone. This helps protect the furnace wall and terminals.",
    features: [
      { t: "Thick cold ends", d: "Larger-diameter ends run cooler and reduce wall heating." },
      { t: "Focused hot zone", d: "Heat concentrated where the process needs it." },
      { t: "Custom end/zone ratio", d: "End and hot-zone diameters set to your duty." },
    ],
    configs: ["Dumbbell", "Custom end diameter", "Custom hot-zone diameter"],
    applications: sicApplications, industries: sicIndustries, install: commonInstall,
    specs: sicSpecs("Dumbbell (stepped diameter)"), related: relatedSic("dumbbell"),
  },
  {
    slug: "custom", shortName: "custom element", visualKey: "custom",
    name: "Custom SiC Heating Elements",
    tag: "SiC Heating Elements",
    metaTitle: "Custom SiC Heating Elements — Made to Your Drawing | India",
    metaDesc: "Custom silicon carbide heating elements manufactured to your diameter, length, hot zone, voltage and power. Send a drawing, photo or part number for a quote.",
    intro: "Custom SiC heating elements manufactured to your drawing, dimensions or existing sample — the right shape, resistance and terminals for your furnace.",
    description: "When a standard element does not fit, we manufacture to your specification. Provide the geometry and electrical requirement, or an existing element to match, and we will engineer a suitable configuration.",
    features: [
      { t: "Made to drawing", d: "Any diameter, length, hot/cold zone and terminal type." },
      { t: "Match an existing part", d: "Send a sample, photo or part number to replicate." },
      { t: "Electrical matching", d: "Resistance and power matched to your supply and controls." },
      { t: "Application review", d: "We review temperature, atmosphere and duty before quoting." },
    ],
    configs: ["Any shape", "Any diameter", "Any hot/cold zone", "Any terminal"],
    applications: sicApplications, industries: sicIndustries,
    customisation: `<p>Provide any of the following and we will engineer a suitable element:</p>
      <ul><li>Diameter, overall length</li><li>Hot-zone and cold-zone lengths</li><li>Voltage, resistance, power</li><li>Furnace operating temperature</li><li>An existing drawing, photograph or part number</li></ul>`,
    install: commonInstall,
    faqs: [
      { q: "What information do you need for a custom element?", a: "Ideally diameter, overall length, hot-zone and cold-zone lengths, voltage, resistance or power, and furnace temperature. If you don't have all of these, a photograph with a scale or an existing part number is a good start." },
    ],
    specs: sicSpecs("Custom (to specification)"), related: relatedSic("custom"),
  },
];

/* ---------------- FURNACES ---------------- */
const furCrumbs = (label, slug) => [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "Industrial Furnaces", href: FUR_BASE + "/" },
  { label, href: slug },
];
const furSpecs = (type) => [
  ["Furnace Type", type],
  ["Capacity", null],
  ["Operating Temperature", null],
  ["Heating System", "Electric resistance / configuration dependent"],
  ["Energy Source", "Electric / application dependent"],
  ["Crucible Options", "Application dependent"],
  ["Temperature Control", "Digital controller / configuration dependent"],
  ["Safety Features", "Configuration dependent"],
  ["Customisation", "Available"],
];
const furIndustries = [
  ["Foundries", "/industries/foundries/"],
  ["Aluminium Processing", "/industries/aluminium-processing/"],
  ["Heat Treatment", "/industries/heat-treatment/"],
  ["Advanced Materials", "/industries/advanced-materials/"],
];
const relatedFur = (exclude) => [
  { title: "Aluminium Melting Furnaces", href: FUR_BASE + "/aluminium-melting-furnaces/", visualKey: "meltFurnace" },
  { title: "Aluminium Holding Furnaces", href: FUR_BASE + "/aluminium-holding-furnaces/", visualKey: "holdFurnace" },
  { title: "Heat-Treatment Furnaces", href: FUR_BASE + "/heat-treatment-furnaces/", visualKey: "heatTreat" },
  { title: "Custom Industrial Furnaces", href: FUR_BASE + "/custom-industrial-furnaces/", visualKey: "meltFurnace" },
].filter((r) => !r.href.endsWith(exclude + "/")).slice(0, 3);

export const furnaceProducts = [
  {
    slug: "aluminium-melting-furnaces", shortName: "aluminium melting furnace", visualKey: "meltFurnace",
    name: "Aluminium Melting Furnaces",
    tag: "Industrial Furnaces", sourcing: "mixed",
    metaTitle: "Aluminium Melting Furnace Manufacturer in India",
    metaDesc: "Aluminium melting furnaces for foundries and metal processing — crucible options, temperature control and customisation. Request a quote from S S Enterprises.",
    intro: "Aluminium melting furnaces for foundries and non-ferrous metal processing, configured around your throughput, crucible and control requirements.",
    description: "Our aluminium melting furnaces are built to melt aluminium and non-ferrous alloys for casting and downstream processing. Capacity, heating system, crucible type and controls are configured to your operation. Tell us your melt rate and metal and we will propose a suitable specification.",
    features: [
      { t: "Configured to throughput", d: "Sized around your required melt rate and batch size." },
      { t: "Crucible options", d: "Crucible type and size selected for your metal and duty." },
      { t: "Temperature control", d: "Digital control for stable, repeatable melting." },
      { t: "Customisation", d: "Chamber, heating and controls tailored to your operation." },
    ],
    configs: ["Crucible type", "Electric heating", "Custom capacity", "Digital control"],
    applications: ["Aluminium and alloy melting", "Foundry casting", "Ingot and scrap remelting", "Non-ferrous metal processing"],
    industries: furIndustries,
    customisation: `<p>Share your metal, target melt rate, batch size, available power supply and floor space. We configure capacity, heating system, crucible, controls and safety features to suit.</p>`,
    install: `<p><strong>Commissioning.</strong> Furnaces are commissioned to your supply and controls. We advise on refractory dry-out and first heat.</p><p><strong>Maintenance.</strong> Crucible, refractory and element condition should be checked on a schedule suited to duty. We support spares and replacement elements.</p>`,
    faqs: [
      { q: "What capacity of aluminium melting furnace can you supply?", a: "Capacity is configured to your throughput. Tell us your required melt rate, batch size and metal, and we will propose a suitable capacity — we don't publish assumed figures." },
      { q: "Do you manufacture or import furnaces?", a: "Depending on the configuration, furnaces and components may be manufactured by us or sourced/imported. We confirm this clearly when we quote." },
    ],
    specs: furSpecs("Aluminium melting furnace"), related: relatedFur("aluminium-melting-furnaces"),
  },
  {
    slug: "aluminium-holding-furnaces", shortName: "aluminium holding furnace", visualKey: "holdFurnace",
    name: "Aluminium Holding Furnaces",
    tag: "Industrial Furnaces", sourcing: "mixed",
    metaTitle: "Aluminium Holding Furnace Manufacturer in India",
    metaDesc: "Aluminium holding furnaces that keep molten metal at a stable temperature for casting lines. Custom capacity and controls. Request a quote from S S Enterprises.",
    intro: "Aluminium holding furnaces keep molten metal at a controlled temperature, feeding casting and die-casting lines with a stable supply.",
    description: "Holding furnaces maintain already-molten aluminium at a set temperature so it is ready to pour. They are configured for stable temperature holding, low metal loss and reliable feeding of downstream casting operations.",
    features: [
      { t: "Stable holding temperature", d: "Tight control keeps metal ready to cast." },
      { t: "Feeds casting lines", d: "Configured to supply die-casting and casting operations." },
      { t: "Energy-conscious design", d: "Insulation and control to hold temperature efficiently." },
      { t: "Custom capacity", d: "Sized to your line's demand." },
    ],
    configs: ["Custom capacity", "Digital temperature hold", "Electric heating", "Custom launder / tapping"],
    applications: ["Holding molten aluminium", "Feeding die-casting", "Casting line supply", "Non-ferrous holding"],
    industries: furIndustries,
    install: `<p>Holding furnaces are matched to your casting line's demand and layout. We advise on refractory care and element/spares support.</p>`,
    faqs: [
      { q: "What is the difference between a melting and a holding furnace?", a: "A melting furnace turns solid metal into a melt; a holding furnace keeps already-molten metal at a stable temperature for casting. Many operations use both — see our <a href='/products/industrial-furnaces/aluminium-melting-holding-furnaces/'>combined melting & holding furnaces</a>." },
    ],
    specs: furSpecs("Aluminium holding furnace"), related: relatedFur("aluminium-holding-furnaces"),
  },
  {
    slug: "aluminium-melting-holding-furnaces", shortName: "melting & holding furnace", visualKey: "meltFurnace",
    name: "Aluminium Melting & Holding Furnaces",
    tag: "Industrial Furnaces", sourcing: "mixed",
    metaTitle: "Aluminium Melting & Holding Furnace — Manufacturer India",
    metaDesc: "Combined aluminium melting and holding furnace solutions that melt and then hold metal at temperature for casting. Custom configurations. Request a quote.",
    intro: "Combined melting and holding furnace solutions that both melt aluminium and hold it at temperature, streamlining supply to casting operations.",
    description: "For operations that want melting and holding integrated, we configure combined solutions that melt metal and then maintain it at casting temperature. This reduces handling and helps keep a steady metal supply.",
    features: [
      { t: "Melt and hold", d: "One integrated solution from cold charge to ready-to-pour." },
      { t: "Steady supply", d: "Keeps a consistent temperature for casting." },
      { t: "Configured to line", d: "Capacity and layout matched to your operation." },
    ],
    configs: ["Integrated melt + hold", "Custom capacity", "Digital control"],
    applications: ["Integrated melting and holding", "Casting supply", "Foundry operations"],
    industries: furIndustries,
    specs: furSpecs("Aluminium melting & holding furnace"), related: relatedFur("aluminium-melting-holding-furnaces"),
  },
  {
    slug: "heat-treatment-furnaces", shortName: "heat-treatment furnace", visualKey: "heatTreat",
    name: "Heat-Treatment Furnaces",
    tag: "Industrial Furnaces", sourcing: "mixed",
    metaTitle: "Heat-Treatment Furnace Manufacturer & Supplier in India",
    metaDesc: "Heat-treatment furnaces for annealing, hardening, tempering and stress-relief processes. Custom chamber and controls. Request a quote from S S Enterprises.",
    intro: "Heat-treatment furnaces for annealing, hardening, tempering, stress relief and similar processes, configured to your parts and cycle.",
    description: "Heat-treatment furnaces are built around your process — chamber size, temperature range, uniformity and control are configured to the parts and cycle you run. SiC or other heating systems are selected to suit the temperature.",
    features: [
      { t: "Process-configured", d: "Chamber and controls set to your heat-treatment cycle." },
      { t: "Temperature uniformity", d: "Element layout designed for even chamber temperature." },
      { t: "Custom chamber", d: "Sized to your batch and part geometry." },
    ],
    configs: ["Box / chamber", "Custom size", "SiC or other heating", "Digital control"],
    applications: ["Annealing", "Hardening & tempering", "Stress relief", "Preheating"],
    industries: furIndustries,
    specs: furSpecs("Heat-treatment furnace"), related: relatedFur("heat-treatment-furnaces"),
  },
  {
    slug: "custom-industrial-furnaces", shortName: "custom furnace", visualKey: "heatTreat",
    name: "Custom Industrial Furnaces",
    tag: "Industrial Furnaces", sourcing: "mixed",
    metaTitle: "Custom Industrial Furnace Manufacturer in India",
    metaDesc: "Custom industrial furnaces engineered around your process, temperature, atmosphere and throughput. Request a consultation and quote from S S Enterprises.",
    intro: "Custom industrial furnaces engineered around your process — temperature, atmosphere, throughput and control designed to your requirement.",
    description: "When a standard furnace doesn't fit, we engineer to your process. Share the material, temperature, atmosphere, cycle and space available, and we will propose a configuration.",
    features: [
      { t: "Engineered to process", d: "Designed around your temperature, atmosphere and cycle." },
      { t: "Any layout", d: "Box, pit, bogie or bespoke configurations." },
      { t: "Full support", d: "From specification through commissioning and spares." },
    ],
    configs: ["Bespoke design", "Custom temperature", "Custom atmosphere", "Custom controls"],
    applications: ["Specialised thermal processing", "R&D and pilot lines", "Advanced materials"],
    industries: furIndustries,
    specs: furSpecs("Custom industrial furnace"), related: relatedFur("custom-industrial-furnaces"),
  },
];

/* ---------------- CERAMIC & REFRACTORY ---------------- */
const cerCrumbs = (label, slug) => [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "Ceramic & Refractory", href: CER_BASE + "/" },
  { label, href: slug },
];
const cerSpecs = (type, material) => [
  ["Product", type],
  ["Material", material],
  ["Form / Size", null],
  ["Operating Temperature", null],
  ["Density / Grade", "Application dependent"],
  ["Customisation", "Available"],
];
const cerIndustries = [
  ["Ceramics", "/industries/ceramics/"],
  ["Heat Treatment", "/industries/heat-treatment/"],
  ["Glass", "/industries/glass/"],
  ["Advanced Materials", "/industries/advanced-materials/"],
];
const relatedCer = (exclude) => [
  { title: "Ceramic Fibre Products", href: CER_BASE + "/ceramic-fibre-products/", visualKey: "fibre" },
  { title: "Ceramic Fibre Board", href: CER_BASE + "/ceramic-fibre-board/", visualKey: "fibre" },
  { title: "Technical Ceramics", href: CER_BASE + "/technical-ceramics/", visualKey: "technical" },
  { title: "SiC Ceramics", href: CER_BASE + "/silicon-carbide-ceramics/", visualKey: "technical" },
  { title: "Refractory Products", href: CER_BASE + "/high-temperature-refractory-products/", visualKey: "refractory" },
].filter((r) => !r.href.endsWith(exclude + "/")).slice(0, 3);

export const ceramicProducts = [
  {
    slug: "ceramic-fibre-products", shortName: "ceramic fibre product", visualKey: "fibre", sourcing: "mixed",
    name: "Ceramic Fibre Products",
    tag: "Ceramic & Refractory",
    metaTitle: "Ceramic Fibre Products Supplier in India",
    metaDesc: "Ceramic fibre insulation products — blanket, module and shaped forms for high-temperature furnace lining. Request a quote from S S Enterprises.",
    intro: "Ceramic fibre insulation products for high-temperature furnace lining — low thermal mass materials that insulate and reduce energy use.",
    description: "Ceramic fibre is a lightweight, low-thermal-mass insulation used to line furnaces and kilns. Its low heat storage supports faster heat-up and lower energy use. We supply ceramic fibre in the forms suited to your lining.",
    features: [
      { t: "Low thermal mass", d: "Faster heat-up and reduced heat storage losses." },
      { t: "High-temperature insulation", d: "Used to line furnaces and kilns." },
      { t: "Multiple forms", d: "Blanket, module and shaped products as required." },
    ],
    configs: ["Blanket", "Module", "Shaped / custom"],
    applications: ["Furnace and kiln lining", "Back-up insulation", "High-temperature gaskets and seals"],
    industries: cerIndustries,
    specs: cerSpecs("Ceramic fibre", "Alumino-silicate ceramic fibre"), related: relatedCer("ceramic-fibre-products"),
  },
  {
    slug: "ceramic-fibre-board", shortName: "ceramic fibre board", visualKey: "fibre", sourcing: "mixed",
    name: "Ceramic Fibre Board",
    tag: "Ceramic & Refractory",
    metaTitle: "Ceramic Fibre Board Supplier in India",
    metaDesc: "Rigid ceramic fibre board for furnace lining, hot-face insulation and high-temperature partitions. Custom sizes. Request a quote from S S Enterprises.",
    intro: "Rigid ceramic fibre board for hot-face insulation, furnace partitions and lining where a self-supporting insulation panel is needed.",
    description: "Ceramic fibre board is a rigid form of ceramic fibre insulation. It holds its shape, making it useful for hot-face linings, partitions, covers and back-up insulation where a self-supporting panel is required.",
    features: [
      { t: "Rigid and self-supporting", d: "Holds shape for panels, covers and partitions." },
      { t: "Hot-face insulation", d: "Used as a lining or back-up layer." },
      { t: "Machinable", d: "Can be cut and shaped to your dimensions." },
    ],
    configs: ["Standard board", "Custom thickness", "Cut to size"],
    applications: ["Hot-face lining", "Furnace covers and partitions", "Back-up insulation"],
    industries: cerIndustries,
    specs: cerSpecs("Ceramic fibre board", "Alumino-silicate ceramic fibre (rigid)"), related: relatedCer("ceramic-fibre-board"),
  },
  {
    slug: "technical-ceramics", shortName: "technical ceramic", visualKey: "technical", sourcing: "mixed",
    name: "Technical Ceramics",
    tag: "Ceramic & Refractory",
    metaTitle: "Technical Ceramic Products Supplier in India",
    metaDesc: "Technical ceramic components for high-temperature and wear applications. Custom shapes and grades. Request a quote from S S Enterprises.",
    intro: "Technical ceramic components for high-temperature, electrical-insulation and wear-resistant applications in industrial equipment.",
    description: "Technical ceramics are engineered ceramic components used where high temperature, electrical insulation or wear resistance is required. We supply components suited to your application and grade.",
    features: [
      { t: "High-temperature capable", d: "Stable in demanding thermal environments." },
      { t: "Electrical insulation", d: "Used where insulation at temperature is required." },
      { t: "Wear resistance", d: "Hard-wearing components for abrasive duties." },
    ],
    configs: ["Standard shapes", "Custom components", "Multiple grades"],
    applications: ["Furnace components", "Electrical insulation", "Wear parts"],
    industries: cerIndustries,
    specs: cerSpecs("Technical ceramic component", "Alumina / application-dependent grade"), related: relatedCer("technical-ceramics"),
  },
  {
    slug: "silicon-carbide-ceramics", shortName: "SiC ceramic", visualKey: "technical", sourcing: "mixed",
    name: "Silicon Carbide Ceramics",
    tag: "Ceramic & Refractory",
    metaTitle: "Silicon Carbide Ceramic Products Supplier in India",
    metaDesc: "Silicon carbide ceramic products — kiln furniture, plates, beams and components for high-temperature and wear applications. Request a quote.",
    intro: "Silicon carbide ceramic products such as kiln furniture, plates and beams for high-temperature and wear-resistant applications.",
    description: "Silicon carbide ceramics offer high-temperature strength and wear resistance. Typical products include kiln furniture, plates, beams and components used in furnaces and thermal processing. We supply items suited to your duty.",
    features: [
      { t: "High-temperature strength", d: "Maintains strength in hot environments." },
      { t: "Wear and thermal-shock resistance", d: "Durable in demanding cyclic duties." },
      { t: "Kiln furniture", d: "Plates, beams, supports and components." },
    ],
    configs: ["Kiln furniture", "Plates & beams", "Custom components"],
    applications: ["Kiln furniture", "Furnace components", "Wear-resistant parts"],
    industries: cerIndustries,
    specs: cerSpecs("Silicon carbide ceramic", "Silicon carbide (SiC)"), related: relatedCer("silicon-carbide-ceramics"),
  },
  {
    slug: "furnace-ceramic-components", shortName: "furnace ceramic component", visualKey: "technical", sourcing: "mixed",
    name: "Furnace Ceramic Components",
    tag: "Ceramic & Refractory",
    metaTitle: "Furnace Ceramic Components Supplier in India",
    metaDesc: "Ceramic components for furnaces — supports, spacers, terminals and structural parts. Custom shapes. Request a quote from S S Enterprises.",
    intro: "Ceramic components for furnaces — supports, spacers, terminal parts and structural pieces that operate reliably at temperature.",
    description: "We supply the ceramic components that furnaces rely on: supports, spacers, terminal insulators and structural parts made to work at high temperature. Components are matched to your furnace and duty.",
    features: [
      { t: "Furnace-ready", d: "Designed to operate at furnace temperatures." },
      { t: "Structural and insulating", d: "Supports, spacers and insulators." },
      { t: "Custom shapes", d: "Made to your furnace's requirement." },
    ],
    configs: ["Supports & spacers", "Terminal insulators", "Custom parts"],
    applications: ["Element supports", "Terminal insulation", "Furnace structure"],
    industries: cerIndustries,
    specs: cerSpecs("Furnace ceramic component", "Application-dependent ceramic"), related: relatedCer("furnace-ceramic-components"),
  },
  {
    slug: "high-temperature-refractory-products", shortName: "refractory product", visualKey: "refractory", sourcing: "mixed",
    name: "High-Temperature Refractory Products",
    tag: "Ceramic & Refractory",
    metaTitle: "High-Temperature Refractory Products Supplier in India",
    metaDesc: "Refractory bricks, castables and shapes for furnace and kiln lining. Custom grades and forms. Request a quote from S S Enterprises.",
    intro: "High-temperature refractory products — bricks, castables and shapes for lining furnaces, kilns and thermal equipment.",
    description: "Refractory products line the hot face of furnaces and kilns, resisting heat and, where required, chemical attack and abrasion. We supply refractory materials and shapes suited to your lining and operating temperature.",
    features: [
      { t: "Hot-face lining", d: "Withstands furnace and kiln operating temperatures." },
      { t: "Multiple forms", d: "Bricks, castables and shaped products." },
      { t: "Grade selection", d: "Matched to temperature and duty." },
    ],
    configs: ["Refractory brick", "Castable", "Shaped / custom"],
    applications: ["Furnace and kiln lining", "Hot-face and back-up layers", "Repairs and relines"],
    industries: cerIndustries,
    specs: cerSpecs("Refractory product", "Application-dependent refractory"), related: relatedCer("high-temperature-refractory-products"),
  },
];

/* Attach crumbs + full paths */
sicProducts.forEach((p) => { p.path = `${SIC_BASE}/${p.slug}/`; p.crumbs = sicCrumbs(p.name.replace(/ \(.*/, ""), p.path); p.category = "Silicon carbide heating element"; });
furnaceProducts.forEach((p) => { p.path = `${FUR_BASE}/${p.slug}/`; p.crumbs = furCrumbs(p.name, p.path); p.category = "Industrial furnace"; });
ceramicProducts.forEach((p) => { p.path = `${CER_BASE}/${p.slug}/`; p.crumbs = cerCrumbs(p.name, p.path); p.category = "Ceramic / refractory product"; });

export const allProducts = [...sicProducts, ...furnaceProducts, ...ceramicProducts];
export { SIC_BASE, FUR_BASE, CER_BASE };
