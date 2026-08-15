/* Technical Centre content (brief §21–22). Engineering content written to be
   accurate and non-promotional. Numbers are given as general ranges with clear
   caveats; exact values are always deferred to per-application confirmation. */

const SIC = "/products/silicon-carbide-heating-elements/";
const CALC = "/technical-centre/sic-heating-element-calculator/";
const RCALC = "/technical-centre/resistance-calculator/";
const REPL = "/solutions/sic-heater-replacement/";

const P = (t) => `<p>${t}</p>`;
const UL = (arr) => `<ul>${arr.map((x) => `<li>${x}</li>`).join("")}</ul>`;
const CALLOUT = (t) => `<div class="callout"><p>${t}</p></div>`;

/* Core guides (§21) that are pure content (calculators are separate builders). */
export const guides = [
  {
    slug: "sic-heating-element-guide",
    name: "Silicon Carbide (SiC) Heating Element Guide",
    metaTitle: "Silicon Carbide Heating Element Guide | S S Enterprises",
    metaDesc: "A practical guide to silicon carbide (SiC) heating elements — how they work, configurations, temperature range, ageing and how to select and replace them.",
    intro: "A practical, engineering-first guide to silicon carbide heating elements — what they are, how they work, and how to specify them.",
    toc: [["What they are", "what"], ["How they work", "how"], ["Configurations", "configs"], ["Temperature range", "temp"], ["Ageing", "ageing"], ["Selecting", "select"], ["Replacing", "replace"]],
    sections: [
      { id: "what", h: "What is a silicon carbide heating element?", html: P("A silicon carbide (SiC) heating element is an electrical resistance heater made from silicon carbide. When current passes through it, its resistance converts electrical energy into heat, which radiates into the furnace. SiC elements are widely used for high-temperature electric furnaces operating in air.") + P(`They are made with a resistive <strong>hot zone</strong> in the middle and low-resistance <strong>cold ends</strong> that pass through the furnace wall to the electrical terminals. Common forms include straight rods, U-type, W-type, spiral and dumbbell shapes — see the full range of <a href="${SIC}">SiC heating elements</a>.`) },
      { id: "how", h: "How does a SiC heating element work?", html: P("Heat generation follows Ohm's law: for a given supply voltage <em>V</em> and element resistance <em>R</em>, the power dissipated is P = V²/R. The cold ends are made with a much lower resistance than the hot zone (through larger cross-section or a lower-resistivity end), so almost all the heat is produced in the hot zone while the ends and furnace wall stay cooler.") + CALLOUT("SiC resistance is not constant with temperature. It falls from room temperature to a minimum in the mid-temperature range, then rises again at high temperature. This is why the cold resistance of an element differs from its operating resistance.") },
      { id: "configs", h: "Configurations", html: P("The hot-zone shape is chosen for the furnace layout and electrical requirement:") + UL(["<strong>Straight</strong> — single hot zone, the most common form.", "<strong>U-type / W-type</strong> — both terminals on one side; W extends the hot zone.", "<strong>Spiral</strong> — machined hot zone for higher resistance / higher voltage.", "<strong>Dumbbell</strong> — thick cold ends, thinner hot zone, heat focused in the centre.", "<strong>Alpha SiC</strong> — dense recrystallised grade, often for higher temperatures."]) },
      { id: "temp", h: "Temperature range", html: P("SiC elements are used across a broad high-temperature range in air. The usable maximum depends on the element grade, the surface loading (watts per unit area) and the furnace design, so it should be confirmed per application rather than assumed. As a rule of thumb, higher operating temperatures call for higher-grade material and more conservative loading.") + CALLOUT(`We don't publish a single guaranteed maximum — tell us your furnace temperature and we confirm a suitable specification. Try the <a href="${CALC}">element calculator</a> for indicative figures.`) },
      { id: "ageing", h: "Ageing — why resistance increases", html: P("SiC elements age in service: their resistance gradually increases over time, mainly due to slow oxidation of the silicon carbide. As resistance rises, the same voltage delivers less power, so the furnace can struggle to reach temperature. Systems with tap-changing transformers or variable output let you raise the voltage to compensate as elements age.") },
      { id: "select", h: "Selecting an element", html: P(`Selection balances geometry (diameter, hot-zone and overall length), the electrical supply (voltage), and the required power and temperature. See <a href="/technical-centre/how-to-select-sic-heating-element/">how to select a SiC heating element</a> for a step-by-step approach.`) },
      { id: "replace", h: "Replacing an element", html: P(`When replacing, elements of similar resistance are usually grouped so the bank heats evenly. If you don't have the original part number, dimensions or a photograph are enough to identify a match — see <a href="${REPL}">SiC heater replacement</a>.`) },
    ],
    faqs: [
      { q: "How long do SiC heating elements last?", a: "Life depends on operating temperature, surface loading, atmosphere, cycling and how the furnace is controlled. Because resistance rises with age, elements are usually replaced when the control system can no longer maintain temperature. We can advise on extending life through loading and control." },
      { q: "Can SiC elements run in any atmosphere?", a: "SiC elements are most commonly used in air. Other atmospheres can affect life and usable temperature — tell us your atmosphere and we'll advise." },
    ],
  },
  {
    slug: "how-to-select-sic-heating-element",
    name: "How to Select a SiC Heating Element",
    metaTitle: "How to Select a SiC Heating Element (Step by Step) | India",
    metaDesc: "Step-by-step guide to selecting a silicon carbide heating element — diameter, hot-zone length, voltage, resistance, power and configuration for your furnace.",
    intro: "A step-by-step approach to choosing the right SiC heating element for your furnace.",
    toc: [["1. Temperature", "t1"], ["2. Geometry", "t2"], ["3. Electrical", "t3"], ["4. Configuration", "t4"], ["5. Quantity", "t5"]],
    sections: [
      { id: "t1", h: "1. Start with the operating temperature", html: P("The furnace operating temperature drives the element grade and how conservatively it must be loaded. Higher temperatures generally require higher-grade material (for example dense Alpha SiC) and lower surface loading.") },
      { id: "t2", h: "2. Fix the geometry", html: P("Measure the space the element must fit: overall length, the hot-zone length that sits in the chamber, the cold-end lengths passing through the wall, and the diameter. For a replacement, copy the existing element's geometry.") },
      { id: "t3", h: "3. Match the electrical supply", html: P("Note the supply voltage and whether the system has tap-changing to compensate for ageing. Power follows P = V²/R, so the element resistance must suit the voltage and the power you need. Use the <a href='" + CALC + "'>element calculator</a> for indicative resistance and current.") },
      { id: "t4", h: "4. Choose the configuration", html: P("Pick the hot-zone shape for your furnace: straight for simple layouts, U/W where terminals must be on one side, spiral for higher resistance, dumbbell to focus heat. ") },
      { id: "t5", h: "5. Decide quantity and spacing", html: P("The number of elements and their spacing set the total power and heat uniformity. Elements should be spaced to avoid hot spots and grouped by resistance. See <a href='/technical-centre/articles/correct-spacing-between-sic-heating-elements/'>spacing guidance</a>.") + CALLOUT("Not sure of every value? Send what you have — dimensions, a photo or a part number — and we'll complete the specification.") },
    ],
    faqs: [
      { q: "What if I only have the old, worn element?", a: "That's enough. Send its dimensions or a photograph with a scale and we can identify a suitable replacement configuration." },
    ],
  },
  {
    slug: "installation-guide",
    name: "SiC Heating Element Installation Guide",
    metaTitle: "SiC Heating Element Installation Guide | S S Enterprises",
    metaDesc: "How to install silicon carbide heating elements safely — handling, mounting, spacing, electrical connection and first heat-up. Practical guidance from S S Enterprises.",
    intro: "Practical guidance for installing SiC heating elements safely and getting even, reliable heating.",
    toc: [["Handling", "h"], ["Mounting", "m"], ["Electrical", "e"], ["First heat-up", "f"]],
    sections: [
      { id: "h", h: "Handling", html: P("SiC elements are hard but brittle. Support the cold ends, avoid bending or dropping them, and don't apply shock loads. Keep hot zones clean and free of contaminants before installation.") },
      { id: "m", h: "Mounting and spacing", html: P("Follow the furnace design for hangers, supports and spacing. Correct spacing between elements and from the load promotes even heating and avoids local overheating. Elements should be free to expand as they heat.") },
      { id: "e", h: "Electrical connection", html: P("Use the correct terminal straps and ensure good, clean contact at the cold ends. Group elements of similar resistance so the bank shares power evenly. Confirm the control system can compensate for ageing (for example tap-changing).") + CALLOUT("Always isolate and follow your site's electrical safety procedures before working on element terminals.") },
      { id: "f", h: "First heat-up", html: P("If the furnace refractory is new or has absorbed moisture, follow a controlled dry-out and heat-up schedule. A gradual first heat protects both the lining and the elements.") },
    ],
    faqs: [
      { q: "Can I mix old and new elements in one furnace?", a: "It's best to group elements of similar resistance. Mixing badly-aged and new elements can unbalance the bank. We can advise on matched replacement sets." },
    ],
  },
  {
    slug: "troubleshooting",
    name: "SiC Heating Element Troubleshooting Guide",
    metaTitle: "SiC Heating Element Troubleshooting Guide | India",
    metaDesc: "Diagnose common SiC heating element problems — furnace not reaching temperature, resistance rise, uneven heating and element failure. Guidance from S S Enterprises.",
    intro: "Common SiC element symptoms, likely causes and what to check.",
    toc: [["Won't reach temperature", "t"], ["Uneven heating", "u"], ["Element failure", "f"], ["Short life", "s"]],
    sections: [
      { id: "t", h: "Furnace won't reach temperature", html: P("The most common cause is element ageing: resistance has risen and the fixed voltage no longer delivers enough power. Check whether the control/tap-changer can raise the voltage. If elements are near end of life, plan a matched replacement.") },
      { id: "u", h: "Uneven heating / hot spots", html: P("Look at element spacing, mismatched resistances across the bank, and load placement. Grouping elements by resistance and correcting spacing usually improves uniformity.") },
      { id: "f", h: "Element failure / breakage", html: P("Sudden failure can come from mechanical shock, thermal shock, contamination on the hot zone, or a poor terminal connection causing local overheating. Inspect terminals and hot-zone condition.") },
      { id: "s", h: "Short element life", html: P("Excess surface loading, running above the grade's suitable temperature, aggressive atmospheres or frequent thermal cycling all shorten life. Review loading and control — see <a href='/technical-centre/articles/how-to-extend-sic-heater-life/'>how to extend SiC heater life</a>.") + CALLOUT(`Not sure what's wrong? Send photos of the elements and terminals plus your temperatures — our team can help diagnose. Start a <a href="${REPL}">replacement enquiry</a>.`) },
    ],
    faqs: [
      { q: "My elements look white/glassy — is that normal?", a: "A surface oxide layer forms in normal service and is part of ageing. Heavy build-up, cracking or localised damage is worth reviewing — send a photo and we'll advise." },
    ],
  },
  {
    slug: "faqs",
    name: "SiC Heating Element FAQs",
    metaTitle: "Silicon Carbide Heating Element FAQs | S S Enterprises",
    metaDesc: "Answers to common questions about silicon carbide heating elements — temperature, resistance, ageing, replacement, configurations and customisation.",
    intro: "Answers to the questions we're most often asked about SiC heating elements.",
    sections: [{ html: P("Browse the questions below, or explore the <a href='/technical-centre/'>Technical Centre</a> for detailed guides and calculators.") }],
    faqs: [
      { q: "What is a silicon carbide heating element?", a: "An electrical resistance heater made from silicon carbide, used for high-temperature electric furnaces. Current through the resistive hot zone produces radiant heat." },
      { q: "What temperature can SiC elements reach?", a: "They operate across a broad high-temperature range in air; the usable maximum depends on grade, surface loading and furnace design. We confirm a suitable specification for your temperature rather than quoting a single guaranteed figure." },
      { q: "Why does SiC element resistance increase over time?", a: "Mainly slow oxidation of the silicon carbide in service. Rising resistance means less power at a fixed voltage — tap-changing or variable output compensates." },
      { q: "How do I choose a replacement?", a: "Match the geometry and, ideally, the resistance. Send dimensions, a drawing, a photo or a part number and we'll identify a suitable replacement." },
      { q: "Do you supply custom elements?", a: "Yes — any diameter, length, hot/cold zone and terminal type, made to your drawing or sample." },
      { q: "What's the difference between SiC and MoSi₂ elements?", a: "MoSi₂ elements reach higher temperatures but are more costly and brittle at low temperature; SiC is tougher and widely used to around the mid-1500s °C depending on grade and loading. We can advise which suits your furnace." },
    ],
  },
];

/* The 20 technical-content-strategy articles (§22). Concise, accurate. */
const A = (slug, name, metaDesc, intro, sections, faqs) => ({ slug, name, metaTitle: name + " | S S Enterprises", metaDesc, intro, sections, faqs });

export const articles = [
  A("what-is-a-silicon-carbide-heating-element", "What Is a Silicon Carbide Heating Element?",
    "A silicon carbide heating element is an electrical resistance heater used for high-temperature electric furnaces. Learn how it's built and where it's used.",
    "A short, clear explanation of what a SiC heating element is and where it's used.",
    [{ html: P("A silicon carbide (SiC) heating element is an electrical resistance heater made from silicon carbide. Current passing through its resistive hot zone converts electrical energy into radiant heat, which heats the furnace chamber. SiC elements are a mainstay of high-temperature electric furnaces operating in air.") + P(`Each element has a central resistive <strong>hot zone</strong> and low-resistance <strong>cold ends</strong> that carry current through the furnace wall with minimal heating. They are available in several shapes — see the range of <a href="${SIC}">SiC heating elements</a>.`) }],
    [{ q: "Where are SiC elements used?", a: "In kilns, heat-treatment furnaces, laboratory furnaces, glass and ceramic processing, and metal melting/holding — anywhere reliable high-temperature electric heating in air is needed." }]),

  A("how-does-a-sic-heating-element-work", "How Does a SiC Heating Element Work?",
    "SiC heating elements work by electrical resistance heating: P = V²/R. The resistive hot zone produces heat while low-resistance cold ends stay cool.",
    "The physics, in plain terms: how a SiC element turns electricity into high-temperature heat.",
    [{ html: P("A SiC element heats by electrical resistance. For a supply voltage V and resistance R, the power produced is P = V²/R, and the current is I = V/R. The hot zone has a high resistance and produces the heat; the cold ends are made low-resistance so they carry current without heating the furnace wall.") + CALLOUT("SiC resistance changes with temperature — high at room temperature, falling to a minimum in the mid range, then rising again at high temperature. So an element's cold (measured) resistance differs from its operating resistance.") + P(`Try the <a href="${CALC}">element calculator</a> to see how voltage, power and element count relate.`) }],
    null),

  A("how-to-select-a-sic-heating-rod", "How to Select a SiC Heating Rod",
    "Select a SiC heating rod by matching temperature, geometry (diameter, hot zone, length), supply voltage and required power. Step-by-step guidance.",
    "The key parameters to get right when choosing a SiC heating rod.",
    [{ html: P("Selecting a rod means matching four things: the operating temperature (which sets the grade and loading), the geometry (diameter, hot-zone and overall length), the supply voltage, and the required power. For a replacement, copy the existing rod's geometry and, where possible, its resistance.") + P(`See the full <a href="/technical-centre/how-to-select-sic-heating-element/">selection guide</a> or send us your details for help.`) }],
    null),

  A("how-to-calculate-sic-heater-resistance", "How to Calculate SiC Heater Resistance",
    "Estimate SiC heater resistance from voltage and power using R = V²/P. Learn the method and its caveats, and use our resistance calculator.",
    "How resistance relates to voltage and power — and why the operating value differs from the cold value.",
    [{ html: P("As a first estimate, the resistance needed for a target power at a given voltage is R = V²/P. For a bank of elements, you also account for how they're wired (series/parallel) and how many there are.") + CALLOUT("This gives the operating resistance. A SiC element's measured cold resistance is different because resistance varies with temperature and rises as the element ages. Use estimates as a starting point, not a guaranteed value.") + P(`Use the <a href="${RCALC}">resistance calculator</a> for indicative figures, then let us confirm the specification.`) }],
    null),

  A("how-to-calculate-sic-heater-power", "How to Calculate SiC Heater Power",
    "Calculate SiC heater power with P = V²/R (or P = V×I). Understand total furnace power vs per-element power and surface loading limits.",
    "Working out element and furnace power — and why surface loading matters.",
    [{ html: P("Element power follows P = V²/R, or equivalently P = V×I. Total furnace power is the sum across all elements. Just as important is <strong>surface loading</strong> — the watts per unit of hot-zone surface area — which must be kept within limits that depend on the operating temperature. Too high a loading shortens life.") + P(`The <a href="${CALC}">element calculator</a> gives indicative power and current; final loading is confirmed per application.`) }],
    null),

  A("how-to-select-sic-heater-diameter", "How to Select SiC Heater Diameter",
    "SiC heater diameter affects resistance, surface area and mechanical strength. Learn how diameter influences loading and how to choose it.",
    "How element diameter influences resistance, loading and strength.",
    [{ html: P("Diameter affects three things: the hot-zone surface area (and therefore surface loading for a given power), the element resistance, and mechanical robustness. A larger diameter offers more surface area and strength but changes the resistance and cost. Diameter is chosen together with hot-zone length and the electrical requirement.") + P("For replacements, match the existing diameter unless there's a specific reason to change it.") }],
    null),

  A("hot-zone-vs-cold-zone", "Hot Zone vs Cold Zone in SiC Elements",
    "The hot zone produces heat; the low-resistance cold ends carry current through the furnace wall without heating it. Learn how the two work together.",
    "Why every SiC element has two very different sections.",
    [{ html: P("The <strong>hot zone</strong> is the resistive working section that sits in the furnace and produces heat. The <strong>cold ends</strong> (cold zone) are made with much lower resistance — through larger cross-section or lower-resistivity material — so they carry the current through the furnace wall to the terminals without heating up. Getting the hot-zone and cold-end lengths right for your furnace is essential for even heating and terminal life.") }],
    null),

  A("why-does-sic-heater-resistance-increase", "Why Does SiC Heater Resistance Increase?",
    "SiC heater resistance increases over time mainly due to oxidation (ageing). Rising resistance reduces power at fixed voltage; tap-changing compensates.",
    "The reason SiC elements age — and what to do about it.",
    [{ html: P("Over time, SiC elements slowly oxidise in service, which increases their electrical resistance — this is called ageing. Because power at a fixed voltage is P = V²/R, rising resistance means falling power, and the furnace can struggle to hold temperature.") + CALLOUT("The usual answer is a control system that can raise the voltage — for example a tap-changing transformer or variable output — to keep power constant as elements age. When elements can no longer be compensated, they're replaced, ideally in matched sets.") + P(`See <a href="/technical-centre/troubleshooting/">troubleshooting</a> and <a href="${REPL}">replacement</a>.`) }],
    null),

  A("how-to-extend-sic-heater-life", "How to Extend SiC Heater Life",
    "Extend SiC heater life by controlling surface loading, operating temperature, atmosphere and thermal cycling, and by using tap-changing control.",
    "Practical steps that help SiC elements last longer.",
    [{ html: UL([
      "Keep <strong>surface loading</strong> within limits for your temperature — over-loading is a common life-shortener.",
      "Run at the appropriate <strong>grade</strong> for the temperature; higher temperatures need higher-grade material.",
      "Use control (e.g. <strong>tap-changing</strong>) to compensate for ageing rather than over-driving elements.",
      "Minimise unnecessary <strong>thermal cycling</strong> and thermal shock.",
      "Keep hot zones clean and terminals in good contact.",
      "Group elements by resistance so the bank shares power evenly.",
    ]) }],
    null),

  A("how-to-replace-a-sic-heating-element", "How to Replace a SiC Heating Element",
    "Replace a SiC heating element by matching geometry and resistance. No part number? Send dimensions or a photo and we'll identify a replacement.",
    "A simple process for replacing SiC elements with minimal downtime.",
    [{ html: P("To replace an element, match its geometry (diameter, hot-zone, cold-end and overall lengths) and, where possible, its resistance so the new element balances with the bank. Replacing elements in matched-resistance sets helps keep heating even.") + P(`If you don't have the original part number, that's fine — dimensions, a drawing or a clear photograph with a scale are enough. Start a <a href="${REPL}">replacement enquiry</a> and our team will recommend a configuration.`) }],
    [{ q: "Should I replace all elements at once?", a: "Not necessarily, but new and heavily-aged elements don't share power evenly. Where practical, replace in matched sets or group by resistance. We can advise for your furnace." }]),

  A("sic-heater-troubleshooting-guide", "SiC Heater Troubleshooting Guide",
    "Troubleshoot SiC heaters: furnace not reaching temperature, uneven heating, breakage and short life — likely causes and checks.",
    "A quick-reference version of our troubleshooting guidance.",
    [{ html: P(`This is a summary — see the full <a href="/technical-centre/troubleshooting/">troubleshooting guide</a> for detail.`) + UL([
      "<strong>Won't reach temperature</strong> → usually ageing; check tap-changer / plan replacement.",
      "<strong>Uneven heating</strong> → check spacing and resistance matching.",
      "<strong>Breakage</strong> → mechanical or thermal shock, contamination, poor terminal contact.",
      "<strong>Short life</strong> → over-loading, temperature above grade, harsh atmosphere, cycling.",
    ]) }],
    null),

  A("alpha-vs-beta-sic-heating-elements", "Alpha vs Beta SiC Heating Elements",
    "Alpha (recrystallised) vs beta SiC heating elements: the difference in crystal form and manufacturing, and where dense Alpha SiC is preferred.",
    "What the Alpha/Beta distinction means for element choice.",
    [{ html: P("Alpha and beta refer to the crystalline form of silicon carbide and, in practice, the manufacturing route of the element. <strong>Alpha (recrystallised) SiC</strong> elements have a dense grain structure and are frequently chosen for higher-temperature, demanding duties. The right choice depends on your operating temperature and application.") + P(`See <a href="${SIC}alpha-sic-heating-elements/">Alpha SiC heating elements</a>.`) }],
    null),

  A("sic-vs-mosi2-heating-elements", "SiC vs MoSi₂ Heating Elements",
    "Compare silicon carbide (SiC) and molybdenum disilicide (MoSi₂) heating elements: temperature range, cost, toughness and where each is used.",
    "How SiC and MoSi₂ elements differ, and how to choose.",
    [{ html: P("<strong>MoSi₂ (molybdenum disilicide)</strong> elements reach higher temperatures than SiC but are more expensive and brittle at lower temperatures. <strong>SiC</strong> elements are tougher, more economical and widely used to around the mid-1500s °C depending on grade and loading. Many furnaces are well served by SiC; the highest-temperature duties may call for MoSi₂.") + CALLOUT("Tell us your operating temperature and duty and we'll advise which element type suits — we won't push a higher-cost element you don't need.") }],
    null),

  A("sic-vs-kanthal-heating-elements", "SiC vs Kanthal Heating Elements",
    "Compare SiC and Kanthal (FeCrAl metallic) heating elements: metallic elements suit lower temperatures; SiC suits higher-temperature furnaces.",
    "When to move from metallic (Kanthal-type) elements to SiC.",
    [{ html: P("“Kanthal” commonly refers to iron-chromium-aluminium (FeCrAl) metallic resistance wire/strip elements. These are economical and suit lower to moderate temperatures. As temperatures rise beyond the comfortable range of metallic elements, <strong>SiC</strong> elements become the practical choice, offering higher-temperature capability and long life at high temperature.") + P("If your furnace is pushing the limits of metallic elements, SiC is usually the next step — we can help you specify the change.") }],
    null),

  A("sic-vs-metallic-heating-elements", "SiC vs Metallic Heating Elements",
    "SiC vs metallic (nichrome/FeCrAl) heating elements: metallic elements are cheaper for lower temperatures; SiC handles higher temperatures and long high-temp life.",
    "A general comparison of ceramic (SiC) and metallic resistance elements.",
    [{ html: P("Metallic elements (such as nichrome or FeCrAl) are simple and economical for lower-temperature heating. <strong>SiC</strong> elements are a ceramic resistance heater built for higher temperatures and long service at high temperature, at the cost of being brittle and requiring control for ageing. The right choice comes down to your operating temperature, duty and budget.") }],
    null),

  A("how-many-sic-heating-elements-does-a-furnace-need", "How Many SiC Heating Elements Does a Furnace Need?",
    "The number of SiC elements a furnace needs depends on total power, per-element power and surface loading limits. Learn the method and get an estimate.",
    "How element count is determined — and why it isn't a fixed number.",
    [{ html: P("Element count follows from the total furnace power divided by the practical power per element, which is limited by surface loading at your temperature. Chamber size and required uniformity also influence layout. There is no universal number — it's calculated for the furnace.") + P(`Use the <a href="${CALC}">element calculator</a> for an indicative count, then we confirm it for your furnace.`) }],
    null),

  A("correct-spacing-between-sic-heating-elements", "Correct Spacing Between SiC Heating Elements",
    "Correct SiC element spacing promotes even heating and avoids hot spots. Spacing depends on element size, power and furnace geometry.",
    "Why spacing matters and what it depends on.",
    [{ html: P("Spacing between elements — and between elements and the load — affects heat uniformity and element life. Too close, and elements can overheat one another or create hot spots; too far, and heating becomes uneven. Correct spacing depends on element diameter, power, and the furnace geometry, and is set as part of the furnace heating design.") + P(`See <a href="/solutions/furnace-heating-solutions/">furnace heating solutions</a>.`) }],
    null),

  A("sic-heating-elements-for-1200c-furnaces", "SiC Heating Elements for 1200°C Furnaces",
    "SiC heating elements for 1200°C furnaces: at this temperature standard SiC configurations are commonly suitable with sensible surface loading.",
    "Specifying SiC elements for furnaces operating around 1200°C.",
    [{ html: P("Around 1200°C, standard SiC element configurations (straight, spiral) are commonly suitable, provided surface loading is set sensibly. This is a comfortable range for SiC, and element life is generally good with proper control. We confirm diameter, hot-zone length and loading for your specific furnace and duty.") + P(`Explore <a href="${SIC}">SiC heating elements</a> or request a specification.`) }],
    null),

  A("sic-heating-elements-for-1400c-furnaces", "SiC Heating Elements for 1400°C Furnaces",
    "SiC heating elements for 1400°C furnaces: higher-density Alpha SiC is often preferred, with conservative surface loading for good element life.",
    "Specifying SiC elements for furnaces operating around 1400°C.",
    [{ html: P("Around 1400°C, higher-density <strong>Alpha SiC</strong> elements are often preferred and surface loading is kept more conservative to protect element life. Good control (tap-changing) becomes increasingly valuable to manage ageing. We confirm grade, geometry and loading for your furnace.") + P(`See <a href="${SIC}alpha-sic-heating-elements/">Alpha SiC elements</a>.`) }],
    null),

  A("sic-heating-elements-for-1600c-furnaces", "SiC Heating Elements for 1600°C Furnaces",
    "SiC heating elements for 1600°C furnaces: high-grade Alpha SiC with conservative loading; the top of the SiC range where grade and control are critical.",
    "Specifying SiC elements near the top of their temperature range.",
    [{ html: P("Approaching 1600°C element temperature, high-grade <strong>Alpha SiC</strong> with conservative surface loading is recommended, and element grade, loading and control all become critical. This is near the top of the practical SiC range; above it, MoSi₂ elements may be considered. Tell us your exact furnace temperature and we'll confirm whether SiC suits or advise alternatives.") + CALLOUT("At these temperatures we're especially careful not to over-state capability — we confirm a specification against your real duty rather than quoting a headline maximum.") }],
    null),
];

/* Application pages (§23) */
export const applications = [
  ["sic-heating-elements-for-ceramic-kilns", "SiC Heating Elements for Ceramic Kilns", "Silicon carbide heating elements for ceramic and pottery kilns — even radiant heat and dependable element life for consistent firing.", "ceramics", "/industries/ceramics/"],
  ["sic-heating-elements-for-industrial-furnaces", "SiC Heating Elements for Industrial Furnaces", "Silicon carbide heating elements for a wide range of industrial furnaces — configured to temperature, geometry and power.", "heat-treatment", "/industries/heat-treatment/"],
  ["sic-heating-elements-for-laboratory-furnaces", "SiC Heating Elements for Laboratory Furnaces", "Silicon carbide heating elements for laboratory and R&D furnaces — precise, repeatable high-temperature heating, custom configurations.", "laboratory-rd", "/industries/laboratory-rd/"],
  ["sic-heating-elements-for-heat-treatment", "SiC Heating Elements for Heat Treatment", "Silicon carbide heating elements for heat-treatment furnaces — annealing, hardening, tempering and stress relief.", "heat-treatment", "/industries/heat-treatment/"],
  ["sic-heating-elements-for-glass-processing", "SiC Heating Elements for Glass Processing", "Silicon carbide heating elements for glass processing and toughening — stable high-temperature radiant heat.", "glass", "/industries/glass/"],
  ["sic-heating-elements-for-high-temperature-applications", "SiC Heating Elements for High-Temperature Applications", "Silicon carbide heating elements for demanding high-temperature applications — grade and loading matched to your process.", "advanced-materials", "/industries/advanced-materials/"],
];

guides.forEach((g) => { g.path = `/technical-centre/${g.slug}/`; });
articles.forEach((a) => { a.path = `/technical-centre/articles/${a.slug}/`; });
