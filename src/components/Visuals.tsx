/* Sleek inline SVG visuals for case studies and technology pages */

const grid = (
  <defs>
    <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0L0 0L0 40" fill="none" stroke="rgba(243,237,228,0.06)" strokeWidth="0.5"/>
    </pattern>
  </defs>
);

const frameStyle: React.CSSProperties = {
  width: '100%',
  aspectRatio: '4/3',
  background: 'hsl(0 0% 7%)',
  border: '1px solid rgba(255,255,255,0.08)',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export function BusVisual() {
  return (
    <div style={frameStyle}>
      <svg viewBox="0 0 600 450" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} aria-hidden="true">
        {grid}
        <rect width="600" height="450" fill="url(#g)" />
        {/* Diagonal accent */}
        <line x1="0" y1="450" x2="600" y2="0" stroke="rgba(27,79,216,0.06)" strokeWidth="80" />
        {/* Bus silhouette */}
        <g transform="translate(60, 120)" opacity="0.9">
          {/* Main body */}
          <rect x="0" y="40" width="460" height="200" rx="8" fill="none" stroke="rgba(243,237,228,0.2)" strokeWidth="1.5" />
          {/* Roof */}
          <rect x="10" y="10" width="440" height="36" rx="4" fill="none" stroke="rgba(243,237,228,0.15)" strokeWidth="1" />
          {/* Windows */}
          {[20, 90, 160, 230, 300, 370].map((x, i) => (
            <rect key={i} x={x + 10} y="52" width="58" height="80" rx="3" fill="rgba(27,79,216,0.08)" stroke="rgba(27,79,216,0.4)" strokeWidth="1" />
          ))}
          {/* Door */}
          <rect x="10" y="140" width="48" height="96" rx="2" fill="none" stroke="rgba(27,79,216,0.5)" strokeWidth="1.5" />
          <line x1="34" y1="140" x2="34" y2="236" stroke="rgba(27,79,216,0.3)" strokeWidth="0.5" />
          {/* Wheels */}
          <circle cx="80" cy="248" r="30" fill="none" stroke="rgba(243,237,228,0.25)" strokeWidth="1.5" />
          <circle cx="80" cy="248" r="18" fill="none" stroke="rgba(243,237,228,0.12)" strokeWidth="1" />
          <circle cx="80" cy="248" r="4" fill="rgba(27,79,216,0.6)" />
          <circle cx="370" cy="248" r="30" fill="none" stroke="rgba(243,237,228,0.25)" strokeWidth="1.5" />
          <circle cx="370" cy="248" r="18" fill="none" stroke="rgba(243,237,228,0.12)" strokeWidth="1" />
          <circle cx="370" cy="248" r="4" fill="rgba(27,79,216,0.6)" />
          {/* Exhaust indicator */}
          <circle cx="450" cy="200" r="6" fill="rgba(27,79,216,0.6)" />
          <line x1="456" y1="200" x2="490" y2="200" stroke="rgba(27,79,216,0.4)" strokeWidth="1" strokeDasharray="4 3" />
          <text x="498" y="204" fill="rgba(27,79,216,0.7)" fontSize="9" fontFamily="monospace" letterSpacing="1">SCRT®</text>
        </g>
        {/* Label */}
        <text x="30" y="420" fill="rgba(243,237,228,0.2)" fontSize="10" fontFamily="monospace" letterSpacing="3">TRANSPORT FOR LONDON · RETROFIT PROGRAMME</text>
      </svg>
    </div>
  );
}

export function ScotlandVisual() {
  return (
    <div style={frameStyle}>
      <svg viewBox="0 0 600 450" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} aria-hidden="true">
        {grid}
        <rect width="600" height="450" fill="url(#g)" />
        <line x1="600" y1="450" x2="0" y2="0" stroke="rgba(27,79,216,0.06)" strokeWidth="80" />
        {/* 4 city markers */}
        {[
          { x: 140, y: 160, city: 'Edinburgh' },
          { x: 260, y: 120, city: 'Dundee' },
          { x: 340, y: 200, city: 'Aberdeen' },
          { x: 100, y: 280, city: 'Glasgow' },
        ].map(({ x, y, city }) => (
          <g key={city}>
            <circle cx={x} cy={y} r="20" fill="none" stroke="rgba(27,79,216,0.3)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx={x} cy={y} r="5" fill="rgba(27,79,216,0.7)" />
            <text x={x + 14} y={y + 4} fill="rgba(243,237,228,0.5)" fontSize="10" fontFamily="monospace" letterSpacing="1">{city.toUpperCase()}</text>
          </g>
        ))}
        {/* Connection lines */}
        <line x1="140" y1="160" x2="100" y2="280" stroke="rgba(27,79,216,0.2)" strokeWidth="1" />
        <line x1="140" y1="160" x2="260" y2="120" stroke="rgba(27,79,216,0.2)" strokeWidth="1" />
        <line x1="260" y1="120" x2="340" y2="200" stroke="rgba(27,79,216,0.2)" strokeWidth="1" />
        {/* Bus fleet count */}
        <text x="380" y="200" fill="rgba(243,237,228,0.08)" fontSize="100" fontFamily="serif" fontStyle="italic">205</text>
        <text x="382" y="340" fill="rgba(243,237,228,0.25)" fontSize="11" fontFamily="monospace" letterSpacing="2">BUSES · LEZ COMPLIANT</text>
        <text x="30" y="420" fill="rgba(243,237,228,0.2)" fontSize="10" fontFamily="monospace" letterSpacing="3">FIRST GROUP SCOTLAND · LEZ PROGRAMME 2022—2023</text>
      </svg>
    </div>
  );
}

export function RailVisual() {
  return (
    <div style={frameStyle}>
      <svg viewBox="0 0 600 450" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} aria-hidden="true">
        {grid}
        <rect width="600" height="450" fill="url(#g)" />
        <line x1="0" y1="225" x2="600" y2="225" stroke="rgba(27,79,216,0.05)" strokeWidth="120" />
        {/* Rail tracks */}
        <line x1="20" y1="310" x2="580" y2="310" stroke="rgba(243,237,228,0.2)" strokeWidth="2" />
        <line x1="20" y1="330" x2="580" y2="330" stroke="rgba(243,237,228,0.2)" strokeWidth="2" />
        {[40, 90, 140, 190, 240, 290, 340, 390, 440, 490, 540].map((x) => (
          <line key={x} x1={x} y1="306" x2={x} y2="334" stroke="rgba(243,237,228,0.12)" strokeWidth="8" strokeLinecap="round" />
        ))}
        {/* Train body */}
        <g transform="translate(50, 160)">
          <rect x="0" y="0" width="500" height="140" rx="6" fill="none" stroke="rgba(243,237,228,0.2)" strokeWidth="1.5" />
          <rect x="0" y="0" width="60" height="140" rx="6" fill="none" stroke="rgba(243,237,228,0.12)" strokeWidth="1" />
          {[70, 130, 190, 250, 310, 370].map((x, i) => (
            <rect key={i} x={x} y="20" width="50" height="60" rx="3" fill="rgba(27,79,216,0.06)" stroke="rgba(27,79,216,0.35)" strokeWidth="1" />
          ))}
          {/* DMU label */}
          <text x="20" y="80" fill="rgba(243,237,228,0.3)" fontSize="11" fontFamily="monospace" letterSpacing="2">DMU</text>
          {/* SCRT badge */}
          <rect x="430" y="90" width="60" height="20" rx="2" fill="rgba(27,79,216,0.2)" stroke="rgba(27,79,216,0.5)" strokeWidth="1" />
          <text x="436" y="104" fill="rgba(27,79,216,0.9)" fontSize="9" fontFamily="monospace" letterSpacing="1">SCRT®</text>
        </g>
        <text x="30" y="30" fill="rgba(243,237,228,0.15)" fontSize="10" fontFamily="monospace" letterSpacing="3">1ST · UK RAIL AFTERTREATMENT RETROFIT</text>
        <text x="30" y="420" fill="rgba(243,237,228,0.2)" fontSize="10" fontFamily="monospace" letterSpacing="3">PORTERBROOK · ORR CERTIFIED · ONGOING</text>
      </svg>
    </div>
  );
}

export function GlobalVisual() {
  return (
    <div style={frameStyle}>
      <svg viewBox="0 0 600 450" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} aria-hidden="true">
        {grid}
        <rect width="600" height="450" fill="url(#g)" />
        {/* Globe outline */}
        <ellipse cx="300" cy="225" rx="180" ry="180" fill="none" stroke="rgba(243,237,228,0.1)" strokeWidth="1" />
        <ellipse cx="300" cy="225" rx="120" ry="180" fill="none" stroke="rgba(243,237,228,0.07)" strokeWidth="0.75" />
        <ellipse cx="300" cy="225" rx="60" ry="180" fill="none" stroke="rgba(243,237,228,0.05)" strokeWidth="0.5" />
        <line x1="120" y1="225" x2="480" y2="225" stroke="rgba(243,237,228,0.08)" strokeWidth="0.75" />
        {[-90, -45, 0, 45, 90].map((lat) => {
          const y = 225 + (lat / 90) * 160;
          const r = Math.cos((lat * Math.PI) / 180) * 180;
          return <ellipse key={lat} cx="300" cy={y} rx={r} ry={r * 0.15} fill="none" stroke="rgba(243,237,228,0.05)" strokeWidth="0.5" />;
        })}
        {/* Market dots */}
        {[
          { x: 300, y: 170 }, { x: 360, y: 200 }, { x: 240, y: 195 },
          { x: 380, y: 240 }, { x: 230, y: 260 }, { x: 310, y: 290 },
        ].map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="14" fill="none" stroke="rgba(27,79,216,0.3)" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx={p.x} cy={p.y} r="4" fill="rgba(27,79,216,0.8)" />
          </g>
        ))}
        <text x="300" y="60" textAnchor="middle" fill="rgba(243,237,228,0.08)" fontSize="90" fontFamily="serif" fontStyle="italic">3,000</text>
        <text x="300" y="420" textAnchor="middle" fill="rgba(243,237,228,0.2)" fontSize="10" fontFamily="monospace" letterSpacing="3">SCRT® · 6 MARKETS · 2008—2017</text>
      </svg>
    </div>
  );
}

export function PowerVisual() {
  return (
    <div style={frameStyle}>
      <svg viewBox="0 0 600 450" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} aria-hidden="true">
        {grid}
        <rect width="600" height="450" fill="url(#g)" />
        <line x1="0" y1="450" x2="600" y2="0" stroke="rgba(27,79,216,0.04)" strokeWidth="120" />
        {/* Generator schematic */}
        <g transform="translate(80, 100)">
          {/* Engine block */}
          <rect x="0" y="60" width="180" height="200" rx="4" fill="none" stroke="rgba(243,237,228,0.2)" strokeWidth="1.5" />
          <text x="90" y="155" textAnchor="middle" fill="rgba(243,237,228,0.2)" fontSize="10" fontFamily="monospace" letterSpacing="2">ENGINE</text>
          <text x="90" y="172" textAnchor="middle" fill="rgba(27,79,216,0.5)" fontSize="9" fontFamily="monospace">40—560kW</text>
          {/* Flow arrow */}
          <line x1="180" y1="160" x2="240" y2="160" stroke="rgba(27,79,216,0.5)" strokeWidth="1.5" strokeDasharray="5 3" />
          <polygon points="240,155 252,160 240,165" fill="rgba(27,79,216,0.5)" />
          {/* Aftertreatment box */}
          <rect x="252" y="80" width="180" height="160" rx="4" fill="rgba(27,79,216,0.04)" stroke="rgba(27,79,216,0.4)" strokeWidth="1.5" />
          <text x="342" y="145" textAnchor="middle" fill="rgba(27,79,216,0.6)" fontSize="10" fontFamily="monospace" letterSpacing="2">EMINOX</text>
          <text x="342" y="162" textAnchor="middle" fill="rgba(27,79,216,0.4)" fontSize="9" fontFamily="monospace">AFTERTREATMENT</text>
          {/* Clean output */}
          <line x1="432" y1="160" x2="492" y2="160" stroke="rgba(80,200,120,0.5)" strokeWidth="1.5" strokeDasharray="5 3" />
          <polygon points="492,155 504,160 492,165" fill="rgba(80,200,120,0.5)" />
          <text x="510" y="155" fill="rgba(80,200,120,0.6)" fontSize="9" fontFamily="monospace">MCPD</text>
          <text x="510" y="168" fill="rgba(80,200,120,0.4)" fontSize="8" fontFamily="monospace">COMPLIANT</text>
        </g>
        <text x="30" y="420" fill="rgba(243,237,228,0.2)" fontSize="10" fontFamily="monospace" letterSpacing="3">POWER GENERATION · MCPD · STATIONARY RETROFIT</text>
      </svg>
    </div>
  );
}

/* Technology visuals */
export function SCRTVisual() {
  return (
    <div style={{ ...frameStyle, aspectRatio: '16/9' }}>
      <svg viewBox="0 0 700 394" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} aria-hidden="true">
        {grid}
        <rect width="700" height="394" fill="url(#g)" />
        {/* Flow diagram: Exhaust → DOC → DPF → SCR → Clean */}
        {[
          { x: 30,  label: 'EXHAUST', sub: 'IN',      color: 'rgba(200,100,80,0.7)' },
          { x: 160, label: 'DOC',     sub: 'Oxidation', color: 'rgba(243,237,228,0.5)' },
          { x: 300, label: 'DPF',     sub: 'Filtration', color: 'rgba(243,237,228,0.5)' },
          { x: 440, label: 'SCR',     sub: 'Reduction', color: 'rgba(27,79,216,0.7)' },
          { x: 580, label: 'CLEAN',   sub: 'AIR',      color: 'rgba(80,200,120,0.7)' },
        ].map(({ x, label, sub, color }, i) => (
          <g key={i}>
            <rect x={x} y="120" width="100" height="155" rx="4" fill="rgba(255,255,255,0.02)" stroke={color} strokeWidth={i === 3 ? 2 : 1} />
            <text x={x + 50} y="195" textAnchor="middle" fill={color} fontSize="13" fontFamily="monospace" letterSpacing="1">{label}</text>
            <text x={x + 50} y="213" textAnchor="middle" fill="rgba(243,237,228,0.3)" fontSize="9" fontFamily="monospace">{sub}</text>
            {i < 4 && <line x1={x + 100} y1="197" x2={x + 128} y2="197" stroke="rgba(243,237,228,0.2)" strokeWidth="1" strokeDasharray="4 3" />}
            {i < 4 && <polygon points={`${x + 128},192 ${x + 136},197 ${x + 128},202`} fill="rgba(243,237,228,0.2)" />}
          </g>
        ))}
        {/* AdBlue dosing */}
        <line x1="490" y1="60" x2="490" y2="120" stroke="rgba(27,79,216,0.4)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="490" cy="52" r="14" fill="none" stroke="rgba(27,79,216,0.4)" strokeWidth="1" />
        <text x="490" y="56" textAnchor="middle" fill="rgba(27,79,216,0.6)" fontSize="8" fontFamily="monospace">AdBlue</text>
        <text x="310" y="60" fill="rgba(243,237,228,0.12)" fontSize="60" fontFamily="serif" fontStyle="italic">SCRT®</text>
        <text x="30" y="370" fill="rgba(243,237,228,0.2)" fontSize="10" fontFamily="monospace" letterSpacing="3">SELECTIVE CATALYTIC REDUCTION TRAP · JOHNSON MATTHEY</text>
      </svg>
    </div>
  );
}

export function TechGenericVisual({ label, color = 'rgba(27,79,216,0.7)' }: { label: string; color?: string }) {
  return (
    <div style={{ ...frameStyle, aspectRatio: '16/9' }}>
      <svg viewBox="0 0 700 394" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} aria-hidden="true">
        {grid}
        <rect width="700" height="394" fill="url(#g)" />
        <line x1="0" y1="394" x2="700" y2="0" stroke="rgba(27,79,216,0.05)" strokeWidth="100" />
        {/* Hexagonal pattern */}
        {[{ cx: 200, cy: 197 }, { cx: 350, cy: 120 }, { cx: 350, cy: 274 }, { cx: 500, cy: 197 }].map((p, i) => (
          <polygon key={i}
            points={`${p.cx},${p.cy - 60} ${p.cx + 52},${p.cy - 30} ${p.cx + 52},${p.cy + 30} ${p.cx},${p.cy + 60} ${p.cx - 52},${p.cy + 30} ${p.cx - 52},${p.cy - 30}`}
            fill="none" stroke={i === 0 || i === 3 ? color : 'rgba(243,237,228,0.08)'} strokeWidth={i === 0 || i === 3 ? 1.5 : 0.75}
          />
        ))}
        <text x="350" y="210" textAnchor="middle" fill={color} fontSize="32" fontFamily="serif" fontStyle="italic">{label}</text>
        <text x="30" y="370" fill="rgba(243,237,228,0.2)" fontSize="10" fontFamily="monospace" letterSpacing="3">EMINOX · GAINSBOROUGH · SINCE 1978</text>
      </svg>
    </div>
  );
}

export function ManufacturingVisual() {
  return (
    <div style={frameStyle}>
      <svg viewBox="0 0 600 450" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} aria-hidden="true">
        {grid}
        <rect width="600" height="450" fill="url(#g)" />
        {/* Facility floor plan schematic */}
        <rect x="40" y="60" width="520" height="330" rx="2" fill="none" stroke="rgba(243,237,228,0.12)" strokeWidth="1" />
        {/* Zones */}
        {[
          { x: 50, y: 70, w: 160, h: 140, label: 'FABRICATION', color: 'rgba(27,79,216,0.08)' },
          { x: 220, y: 70, w: 160, h: 140, label: 'ASSEMBLY', color: 'rgba(27,79,216,0.05)' },
          { x: 390, y: 70, w: 160, h: 140, label: 'TESTING', color: 'rgba(80,200,120,0.05)' },
          { x: 50, y: 220, w: 250, h: 160, label: 'DESPATCH', color: 'rgba(243,237,228,0.03)' },
          { x: 310, y: 220, w: 240, h: 160, label: 'QA / IATF 16949', color: 'rgba(27,79,216,0.04)' },
        ].map(({ x, y, w, h, label, color }) => (
          <g key={label}>
            <rect x={x} y={y} width={w} height={h} rx="2" fill={color} stroke="rgba(243,237,228,0.1)" strokeWidth="0.75" />
            <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fill="rgba(243,237,228,0.25)" fontSize="9" fontFamily="monospace" letterSpacing="2">{label}</text>
          </g>
        ))}
        <text x="300" y="420" textAnchor="middle" fill="rgba(243,237,228,0.2)" fontSize="10" fontFamily="monospace" letterSpacing="3">7,000 SQM · GAINSBOROUGH · SINCE 1987</text>
      </svg>
    </div>
  );
}
