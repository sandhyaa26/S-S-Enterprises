/* =========================================================================
   Technical SVG diagram + scene library (self-contained, no external assets).
   These render as accurate engineering line drawings for SiC element shapes,
   furnaces and ceramics — NOT photographs, so nothing is misrepresented as an
   actual S S Enterprises product photo. When real photography is supplied,
   swap the `img()` sources in src/data/images.mjs; templates fall back to
   these diagrams automatically.
   ========================================================================= */

const R = "#C1121F", C = "#20262D", S = "#8A939E", GLOW = "#FF7A3C";

/* Reusable industrial scene used for heroes / media panels.
   A stylised furnace glow + hot SiC elements behind a technical grid. */
let _sceneSeq = 0;
export function scene(opts = {}) {
  const id = "sc" + (++_sceneSeq);
  const label = opts.label || "High-temperature industrial furnace scene";
  return `<svg class="scene" viewBox="0 0 800 520" role="img" aria-label="${label}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <radialGradient id="${id}g" cx="50%" cy="76%" r="70%">
      <stop offset="0%" stop-color="#FFD8A8"/><stop offset="28%" stop-color="${GLOW}"/>
      <stop offset="62%" stop-color="#8C1E12"/><stop offset="100%" stop-color="#14181C"/>
    </radialGradient>
    <linearGradient id="${id}v" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#14181C"/><stop offset="100%" stop-color="#0C0F12"/>
    </linearGradient>
    <pattern id="${id}grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.06" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="520" fill="url(#${id}v)"/>
  <rect width="800" height="520" fill="url(#${id}grid)"/>
  <ellipse cx="400" cy="470" rx="360" ry="150" fill="url(#${id}g)" opacity="0.95"/>
  <g opacity="0.9">
    ${[210, 300, 390, 480, 570].map((x, i) =>
      `<rect x="${x}" y="${120 + (i % 2) * 10}" width="14" height="300" rx="7" fill="url(#${id}g)" stroke="#5A2016" stroke-width="1"/>
       <rect x="${x - 6}" y="${120 + (i % 2) * 10}" width="26" height="16" rx="3" fill="#2A323B"/>`).join("")}
  </g>
  <g stroke="#ffffff" stroke-opacity="0.14" stroke-width="1" fill="none">
    <path d="M60 120 H150"/><circle cx="150" cy="120" r="3" fill="#ffffff" fill-opacity="0.3"/>
    <path d="M60 150 H120"/>
  </g>
  <rect x="0" y="0" width="800" height="520" fill="none" stroke="#000" stroke-opacity="0.2"/>
</svg>`;
}

/* ---- SiC element shape diagrams (clean technical line drawings) ---- */
function frame(inner, label) {
  return `<svg class="diagram" viewBox="0 0 400 260" role="img" aria-label="${label}" preserveAspectRatio="xMidYMid meet">
    <rect width="400" height="260" fill="#F6F8FA"/>
    <path d="M0 0H400V260" fill="none" stroke="#E3E7EB" stroke-width="1"/>
    <g stroke="#E3E7EB" stroke-width="1">
      ${Array.from({ length: 7 }, (_, i) => `<path d="M${i * 60} 0V260"/>`).join("")}
      ${Array.from({ length: 5 }, (_, i) => `<path d="M0 ${i * 60}H400"/>`).join("")}
    </g>
    ${inner}
  </svg>`;
}
// hot/cold zone gradient helper
const zoneDefs = (id) => `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="0">
  <stop offset="0%" stop-color="${S}"/><stop offset="18%" stop-color="${S}"/>
  <stop offset="30%" stop-color="#C1121F"/><stop offset="70%" stop-color="#C1121F"/>
  <stop offset="82%" stop-color="${S}"/><stop offset="100%" stop-color="${S}"/>
</linearGradient></defs>`;

export const diagrams = {
  straight: frame(`${zoneDefs("st")}
    <rect x="40" y="118" width="320" height="24" rx="12" fill="url(#st)" stroke="${C}" stroke-width="1.5"/>
    <text x="200" y="105" text-anchor="middle" font-size="13" fill="${C}" font-family="Inter,sans-serif" font-weight="600">Hot zone</text>
    <text x="80" y="170" text-anchor="middle" font-size="12" fill="${S}" font-family="Inter,sans-serif">Cold end</text>
    <text x="320" y="170" text-anchor="middle" font-size="12" fill="${S}" font-family="Inter,sans-serif">Cold end</text>
    <line x1="40" y1="200" x2="360" y2="200" stroke="${C}" stroke-width="1"/><path d="M40 195v10M360 195v10" stroke="${C}"/>
    <text x="200" y="218" text-anchor="middle" font-size="12" fill="${C}" font-family="Inter,sans-serif">Overall length</text>`,
    "Straight SiC heating element diagram"),

  rod: frame(`${zoneDefs("rd")}
    <rect x="40" y="120" width="320" height="20" rx="10" fill="url(#rd)" stroke="${C}" stroke-width="1.5"/>
    <circle cx="40" cy="130" r="10" fill="${S}" stroke="${C}"/><circle cx="360" cy="130" r="10" fill="${S}" stroke="${C}"/>
    <text x="200" y="95" text-anchor="middle" font-size="13" fill="${C}" font-family="Inter,sans-serif" font-weight="600">Silicon carbide heating rod</text>`,
    "SiC heating rod diagram"),

  u: frame(`${zoneDefs("ut")}
    <path d="M140 60 V150 a60 60 0 0 0 120 0 V60" fill="none" stroke="url(#ut)" stroke-width="22" stroke-linecap="round"/>
    <path d="M140 60 V150 a60 60 0 0 0 120 0 V60" fill="none" stroke="${C}" stroke-width="1.5"/>
    <rect x="128" y="30" width="24" height="34" rx="4" fill="#2A323B"/><rect x="248" y="30" width="24" height="34" rx="4" fill="#2A323B"/>
    <text x="200" y="245" text-anchor="middle" font-size="13" fill="${C}" font-family="Inter,sans-serif" font-weight="600">U-type — both terminals one end</text>`,
    "U-type SiC heating element diagram"),

  w: frame(`${zoneDefs("wt")}
    <path d="M90 60 V150 a44 44 0 0 0 88 0 V80 a44 44 0 0 1 88 0 V150 a44 44 0 0 0 44 0" fill="none" stroke="url(#wt)" stroke-width="18" stroke-linecap="round"/>
    <rect x="78" y="34" width="22" height="30" rx="4" fill="#2A323B"/><rect x="300" y="120" width="22" height="30" rx="4" fill="#2A323B"/>
    <text x="200" y="245" text-anchor="middle" font-size="13" fill="${C}" font-family="Inter,sans-serif" font-weight="600">W-type — extended hot zone</text>`,
    "W-type SiC heating element diagram"),

  spiral: frame(`
    <rect x="40" y="118" width="320" height="24" rx="12" fill="#8A939E"/>
    <path d="M100 130 q10 -26 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="${R}" stroke-width="9" stroke-linecap="round"/>
    <path d="M100 130 q10 26 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="${R}" stroke-width="9" stroke-linecap="round" opacity="0.55"/>
    <rect x="40" y="118" width="60" height="24" rx="12" fill="${S}" stroke="${C}"/><rect x="300" y="118" width="60" height="24" rx="12" fill="${S}" stroke="${C}"/>
    <text x="200" y="95" text-anchor="middle" font-size="13" fill="${C}" font-family="Inter,sans-serif" font-weight="600">Spiral hot zone — higher resistance</text>`,
    "Spiral SiC heating element diagram"),

  dumbbell: frame(`${zoneDefs("db")}
    <rect x="120" y="120" width="160" height="20" rx="10" fill="${R}" stroke="${C}" stroke-width="1.5"/>
    <rect x="40" y="112" width="80" height="36" rx="12" fill="${S}" stroke="${C}" stroke-width="1.5"/>
    <rect x="280" y="112" width="80" height="36" rx="12" fill="${S}" stroke="${C}" stroke-width="1.5"/>
    <text x="200" y="95" text-anchor="middle" font-size="13" fill="${C}" font-family="Inter,sans-serif" font-weight="600">Dumbbell — thick cold ends, thin hot zone</text>`,
    "Dumbbell SiC heating element diagram"),

  alpha: frame(`${zoneDefs("al")}
    <rect x="40" y="118" width="320" height="24" rx="12" fill="url(#al)" stroke="${C}" stroke-width="1.5"/>
    <g fill="${C}" font-family="Inter,sans-serif">
      <text x="200" y="95" text-anchor="middle" font-size="13" font-weight="600">Alpha SiC — dense recrystallised grain</text>
    </g>
    <g stroke="${C}" stroke-width="0.8" opacity="0.5">
      ${Array.from({ length: 14 }, (_, i) => `<circle cx="${70 + i * 20}" cy="130" r="4" fill="none"/>`).join("")}
    </g>`,
    "Alpha SiC heating element diagram"),

  custom: frame(`
    <rect x="60" y="120" width="140" height="20" rx="10" fill="${R}"/>
    <path d="M200 130 h40 a30 30 0 0 1 30 30 v0" fill="none" stroke="${R}" stroke-width="20" stroke-linecap="round"/>
    <rect x="40" y="118" width="24" height="24" rx="4" fill="#2A323B"/>
    <g stroke="${S}" stroke-dasharray="4 4" fill="none"><rect x="30" y="60" width="340" height="150" rx="8"/></g>
    <text x="200" y="235" text-anchor="middle" font-size="13" fill="${C}" font-family="Inter,sans-serif" font-weight="600">Custom geometry to your drawing</text>`,
    "Custom SiC heating element diagram"),

  /* ---- Furnace cross-sections ---- */
  meltFurnace: frame(`
    <rect x="70" y="60" width="260" height="150" rx="10" fill="#EDEFF2" stroke="${C}" stroke-width="2"/>
    <rect x="90" y="80" width="220" height="120" rx="8" fill="#2A323B"/>
    <path d="M130 190 q70 -40 140 0 Z" fill="url(#mf)"/>
    <defs><radialGradient id="mf" cx="50%" cy="100%" r="80%"><stop offset="0%" stop-color="#FFD8A8"/><stop offset="55%" stop-color="${GLOW}"/><stop offset="100%" stop-color="#8C1E12"/></radialGradient></defs>
    <rect x="180" y="86" width="40" height="70" rx="6" fill="#4A5560" stroke="#1A1F24"/>
    <text x="200" y="150" text-anchor="middle" font-size="11" fill="#DDE1E6" font-family="Inter,sans-serif">crucible</text>
    <g stroke="${R}" stroke-width="5" stroke-linecap="round">
      <line x1="110" y1="95" x2="110" y2="175"/><line x1="290" y1="95" x2="290" y2="175"/>
    </g>
    <text x="200" y="45" text-anchor="middle" font-size="13" fill="${C}" font-family="Inter,sans-serif" font-weight="600">Aluminium melting furnace (section)</text>`,
    "Aluminium melting furnace cross-section diagram"),

  holdFurnace: frame(`
    <rect x="70" y="70" width="260" height="130" rx="10" fill="#EDEFF2" stroke="${C}" stroke-width="2"/>
    <rect x="90" y="90" width="220" height="90" rx="6" fill="#2A323B"/>
    <rect x="100" y="150" width="200" height="26" rx="4" fill="url(#hf)"/>
    <defs><linearGradient id="hf" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${GLOW}"/><stop offset="100%" stop-color="#8C1E12"/></linearGradient></defs>
    <g stroke="${R}" stroke-width="4" stroke-linecap="round">${[130,180,230,270].map(x=>`<line x1="${x}" y1="100" x2="${x}" y2="145"/>`).join("")}</g>
    <text x="200" y="55" text-anchor="middle" font-size="13" fill="${C}" font-family="Inter,sans-serif" font-weight="600">Holding furnace — molten metal held at temperature</text>`,
    "Aluminium holding furnace cross-section diagram"),

  heatTreat: frame(`
    <rect x="70" y="70" width="260" height="130" rx="10" fill="#EDEFF2" stroke="${C}" stroke-width="2"/>
    <rect x="90" y="90" width="220" height="90" rx="6" fill="#2A323B"/>
    <g stroke="${R}" stroke-width="4">${[100,300].map(x=>`<line x1="${x}" y1="98" x2="${x}" y2="172"/>`).join("")}</g>
    <g stroke="#DDE1E6" stroke-width="3" opacity="0.6">${[120,300].map((_,i)=>`<line x1="110" y1="${110+i*45}" x2="290" y2="${110+i*45}"/>`).join("")}</g>
    <rect x="150" y="120" width="100" height="40" rx="4" fill="#4A5560"/>
    <text x="200" y="145" text-anchor="middle" font-size="10" fill="#DDE1E6" font-family="Inter,sans-serif">charge</text>
    <text x="200" y="55" text-anchor="middle" font-size="13" fill="${C}" font-family="Inter,sans-serif" font-weight="600">Heat-treatment furnace chamber</text>`,
    "Heat treatment furnace diagram"),

  /* ---- Ceramic / refractory ---- */
  fibre: frame(`
    <rect x="90" y="90" width="220" height="90" rx="6" fill="#EDEAE2" stroke="${C}" stroke-width="1.5"/>
    <g stroke="#C9BFA8" stroke-width="2" fill="none" opacity="0.9">
      ${Array.from({length:9},(_,i)=>`<path d="M100 ${100+i*9} q100 -6 200 0"/>`).join("")}
    </g>
    <text x="200" y="215" text-anchor="middle" font-size="13" fill="${C}" font-family="Inter,sans-serif" font-weight="600">Ceramic fibre — low thermal mass insulation</text>`,
    "Ceramic fibre product diagram"),

  refractory: frame(`
    <g stroke="${C}" stroke-width="1.5">
      ${[0,1,2].map(r=>[0,1,2,3].map(c=>`<rect x="${90+c*56 + (r%2?28:0)}" y="${90+r*32}" width="52" height="28" rx="2" fill="#E4B48C"/>`).join("")).join("")}
    </g>
    <text x="200" y="215" text-anchor="middle" font-size="13" fill="${C}" font-family="Inter,sans-serif" font-weight="600">High-temperature refractory lining</text>`,
    "Refractory brick product diagram"),

  technical: frame(`
    <rect x="120" y="90" width="160" height="90" rx="8" fill="#D7DCE1" stroke="${C}" stroke-width="1.5"/>
    <circle cx="200" cy="135" r="26" fill="#8A939E" stroke="${C}"/>
    <circle cx="200" cy="135" r="10" fill="#EDEFF2"/>
    <text x="200" y="215" text-anchor="middle" font-size="13" fill="${C}" font-family="Inter,sans-serif" font-weight="600">Technical ceramic component</text>`,
    "Technical ceramic component diagram"),
};

/* Small line-illustration for industry cards */
export function industryGlyph(kind) {
  const map = {
    foundries: `<path d="M20 44 h24 l-6 -20 h-12 z M32 24 v-8" stroke="${R}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    aluminium: `<rect x="16" y="26" width="32" height="20" rx="3" stroke="${R}" stroke-width="2.5" fill="none"/><path d="M24 26 v-8 M40 26 v-8" stroke="${R}" stroke-width="2.5"/>`,
    ceramics: `<path d="M22 44 q10 -22 20 0 z" stroke="${R}" stroke-width="2.5" fill="none"/>`,
    glass: `<path d="M24 16 h16 l-4 16 v12 h-8 v-12 z" stroke="${R}" stroke-width="2.5" fill="none" stroke-linejoin="round"/>`,
  };
  return `<svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">${map[kind] || map.foundries}</svg>`;
}
