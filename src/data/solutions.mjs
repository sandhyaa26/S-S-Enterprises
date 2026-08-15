/* Solutions pages (brief §20) — problem-led, not just product listings. */
export const solutions = [
  {
    slug: "custom-heating-solutions", visualKey: "custom",
    name: "Custom Heating Solutions",
    metaTitle: "Custom SiC Heating Element & Furnace Solutions | India",
    metaDesc: "Custom silicon carbide heating elements and furnace heating solutions engineered to your dimensions, voltage and power. Send a drawing or sample for a quote.",
    intro: "When standard parts don't fit, we engineer heating elements and furnace heating to your exact requirement.",
    problem: "You have a furnace, a temperature target and an electrical supply — but no off-the-shelf element or heating system fits. Getting the geometry, resistance and power right is the difference between even heating and premature failure.",
    approach: [
      "Share your geometry, electrical requirement and application — or an existing part to match.",
      "We review temperature, atmosphere, duty cycle and controls.",
      "We propose a configuration with the right shape, resistance and terminals.",
      "You receive a quote matched to your requirement — with sourcing clearly stated.",
    ],
    inputs: ["Diameter", "Overall length", "Hot zone", "Cold zone", "Voltage", "Resistance", "Power", "Furnace temperature", "Existing drawing / photo / part number"],
    products: [["Custom SiC Elements", "/products/silicon-carbide-heating-elements/custom/"], ["Furnace Heating Solutions", "/solutions/furnace-heating-solutions/"], ["Custom Industrial Furnaces", "/products/industrial-furnaces/custom-industrial-furnaces/"]],
  },
  {
    slug: "furnace-heating-solutions", visualKey: "heatTreat",
    name: "Furnace Heating Solutions",
    metaTitle: "Furnace Heating Solutions — SiC Elements & Design | India",
    metaDesc: "Furnace heating solutions using silicon carbide elements — layout, element count, spacing and controls designed for even, efficient heating. Talk to an engineer.",
    intro: "Element layout, count, spacing and control designed for even, efficient furnace heating.",
    problem: "Uneven heating, hot spots and short element life usually trace back to element selection, spacing or control — not just the elements themselves. A furnace heats well when the whole heating system is designed together.",
    approach: [
      "Understand the furnace, chamber and process temperature.",
      "Select element type, diameter and hot-zone length for the duty.",
      "Design element count and spacing for uniform heating.",
      "Advise on control and tap-changing to compensate for ageing.",
    ],
    inputs: ["Furnace type & chamber size", "Operating temperature", "Available power supply", "Existing element layout", "Process / atmosphere"],
    products: [["SiC Heating Elements", "/products/silicon-carbide-heating-elements/"], ["Element Calculator", "/technical-centre/sic-heating-element-calculator/"], ["Heat-Treatment Furnaces", "/products/industrial-furnaces/heat-treatment-furnaces/"]],
  },
  {
    slug: "high-temperature-solutions", visualKey: "scene",
    name: "High-Temperature Solutions",
    metaTitle: "High-Temperature Industrial Solutions | India",
    metaDesc: "High-temperature heating elements, furnaces and ceramic/refractory materials for demanding thermal processing. Engineered solutions from S S Enterprises.",
    intro: "Heating elements, furnaces and ceramic materials for demanding high-temperature processing.",
    problem: "High-temperature processes stress every component — elements, refractory, insulation and structure. Solving one part in isolation rarely fixes reliability; the thermal system has to work together.",
    approach: [
      "Define the process temperature, cycle and atmosphere.",
      "Select heating elements and grade for the temperature.",
      "Specify refractory and insulation to hold heat efficiently.",
      "Support with replacement and spares to keep you running.",
    ],
    inputs: ["Process temperature", "Cycle & throughput", "Atmosphere", "Current pain points"],
    products: [["SiC Heating Elements", "/products/silicon-carbide-heating-elements/"], ["Ceramic & Refractory", "/products/ceramic-refractory-products/"], ["Industrial Furnaces", "/products/industrial-furnaces/"]],
  },
];

solutions.forEach((s) => { s.path = `/solutions/${s.slug}/`; });
