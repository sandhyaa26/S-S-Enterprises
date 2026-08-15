/* Location / India-SEO pages (brief §30). Each carries genuine local industrial
   context — not a thin doorway page. Delivery claims kept general and honest. */
export const locations = [
  ["bangalore", "Bengaluru (Bangalore)", "Karnataka",
    "Bengaluru's engineering, foundry and precision-manufacturing base makes it a core market for high-temperature heating and ceramic products.",
    ["Foundries and metal casting", "Precision engineering and machine shops", "Ceramics and heat-treatment", "R&D and laboratory furnaces"]],
  ["chennai", "Chennai", "Tamil Nadu",
    "Chennai's automotive, foundry and manufacturing cluster relies on dependable melting, holding and heat-treatment equipment.",
    ["Automotive and component foundries", "Aluminium and non-ferrous processing", "Heat-treatment shops", "Industrial furnaces"]],
  ["hyderabad", "Hyderabad", "Telangana",
    "Hyderabad's engineering, pharma-adjacent and advanced-materials activity creates demand for precise high-temperature heating.",
    ["Engineering and fabrication", "Advanced materials and R&D", "Heat-treatment", "Laboratory furnaces"]],
  ["mumbai", "Mumbai", "Maharashtra",
    "Mumbai and its industrial belt host foundries, processing and trading hubs that need reliable heating and refractory supply.",
    ["Foundries and metal processing", "Ceramics and refractory", "Industrial furnaces", "Import/supply requirements"]],
  ["pune", "Pune", "Maharashtra",
    "Pune's automotive and manufacturing corridor is a strong market for melting, holding and heat-treatment furnaces and elements.",
    ["Automotive foundries", "Aluminium processing", "Heat-treatment", "Precision engineering"]],
  ["ahmedabad", "Ahmedabad", "Gujarat",
    "Ahmedabad's manufacturing and ceramics activity drives demand for kiln heating, refractory and technical ceramics.",
    ["Ceramics and kilns", "Foundries", "Refractory and insulation", "Industrial furnaces"]],
  ["vadodara", "Vadodara", "Gujarat",
    "Vadodara's engineering and process-industry base needs high-temperature heating and durable refractory materials.",
    ["Engineering and process industry", "Foundries", "Heat-treatment", "Refractory supply"]],
  ["delhi-ncr", "Delhi NCR", "Delhi / NCR",
    "The Delhi NCR industrial belt spans foundries, fabrication and manufacturing that depend on reliable heating and furnace equipment.",
    ["Foundries and casting", "Fabrication and engineering", "Heat-treatment", "Industrial furnaces"]],
  ["rajkot", "Rajkot", "Gujarat",
    "Rajkot's dense foundry and casting cluster is a natural market for melting/holding furnaces and SiC heating elements.",
    ["Foundries and casting", "Aluminium and non-ferrous melting", "Furnace elements", "Refractory"]],
  ["coimbatore", "Coimbatore", "Tamil Nadu",
    "Coimbatore's foundry, pump and engineering industries rely on dependable high-temperature heating and replacement elements.",
    ["Foundries and castings", "Engineering and machine shops", "Heat-treatment", "Element replacement"]],
];

export const locationData = locations.map(([slug, city, state, blurb, sectors]) => ({
  slug, city, state, blurb, sectors, path: `/locations/${slug}/`,
}));
