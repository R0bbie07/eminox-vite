import { useState } from 'react';

const RINGS = [
  { rx: 310, ry: 105, label: 'Clean air', ang: 190 },
  { rx: 245, ry: 83,  label: 'SCR',       ang: 70  },
  { rx: 178, ry: 60,  label: 'DPF',       ang: 25  },
  { rx: 112, ry: 38,  label: 'DOC',       ang: 155 },
];

export default function OrbitalSVG() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <svg
      viewBox="-340 -340 680 680"
      style={{ width: '100%', height: '100%', overflow: 'visible' }}
      aria-hidden="true"
    >
      <g transform="rotate(-22)">
        {RINGS.map((ring, i) => {
          const rad   = (ring.ang * Math.PI) / 180;
          const nx    = Math.cos(rad) * ring.rx;
          const ny    = Math.sin(rad) * ring.ry;
          const lx    = nx + (nx > 0 ? 14 : -14);
          const anchor = nx > 0 ? 'start' : 'end';
          const isHov = hover === i;

          return (
            <g key={i}>
              <ellipse
                cx={0} cy={0} rx={ring.rx} ry={ring.ry}
                fill="none"
                stroke="rgba(243,237,228,0.28)"
                strokeWidth={0.75}
                strokeDasharray={1400}
                style={{
                  strokeDashoffset: 0,
                  animation: `draw-ring 2s ${i * 0.2}s ease-out both`,
                }}
              />
              <g
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              >
                <circle
                  cx={nx} cy={ny}
                  r={isHov ? 5.5 : 3.5}
                  fill={isHov ? '#3D7A3A' : 'hsl(40 18% 91%)'}
                  style={{
                    transition: 'all 0.2s',
                    animation: 'pulse-node 3s ease-in-out infinite',
                  }}
                />
                <text
                  x={lx} y={ny + 4}
                  textAnchor={anchor}
                  fill={isHov ? '#4A9447' : 'rgba(243,237,228,0.75)'}
                  fontSize={12}
                  fontFamily="'Inter', sans-serif"
                  style={{ transition: 'fill 0.2s', userSelect: 'none' }}
                >
                  {ring.label}
                </text>
              </g>
            </g>
          );
        })}
      </g>

      {/* Centre diamond */}
      <g style={{ animation: 'pulse-node 4s ease-in-out infinite' }}>
        <path d="M0 -20L13 0L0 20L-13 0Z" fill="hsl(40 18% 91%)" />
        <path d="M0 -12L7 0L0 12L-7 0Z"   fill="hsl(0 0% 4%)" />
        <circle cx={0} cy={0} r={3} fill="#3D7A3A" />
      </g>
    </svg>
  );
}
