import type { ProjectVisualKind } from "@/data/content";

// Small line schematics shown in the hover preview. They draw with
// currentColor, so the preview panel's text colour sets the ink.
const svgProps = {
  viewBox: "0 0 320 240",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-full w-full",
  "aria-hidden": true,
} as const;

export function ProjectVisual({ kind }: { kind: ProjectVisualKind }) {
  switch (kind) {
    // Phone with an order list, and a delivery route leading to it.
    case "delivery":
      return (
        <svg {...svgProps}>
          <rect x="112" y="20" width="96" height="200" rx="14" />
          <line x1="144" y1="34" x2="176" y2="34" />
          {[68, 110, 152].map((y) => (
            <g key={y}>
              <circle cx="134" cy={y} r="9" />
              <line x1="152" y1={y - 5} x2="192" y2={y - 5} />
              <line x1="152" y1={y + 6} x2="176" y2={y + 6} />
            </g>
          ))}
          <rect x="126" y="188" width="68" height="20" rx="10" fill="currentColor" />
          <circle cx="28" cy="196" r="6" fill="currentColor" />
          <path d="M28 196 C 64 196, 60 128, 100 128" strokeDasharray="4 7" />
          <path d="M96 122 L104 128 L96 134" />
        </svg>
      );

    // Portal-frame steel building with a truss and dimension lines.
    case "engine":
      return (
        <svg {...svgProps}>
          <line x1="24" y1="200" x2="296" y2="200" />
          <line x1="80" y1="200" x2="80" y2="112" />
          <line x1="240" y1="200" x2="240" y2="112" />
          <polyline points="80,112 160,62 240,112" />
          <line x1="80" y1="112" x2="240" y2="112" />
          <line x1="160" y1="62" x2="160" y2="112" />
          <line x1="120" y1="87" x2="160" y2="112" />
          <line x1="200" y1="87" x2="160" y2="112" />
          <line x1="120" y1="87" x2="120" y2="112" />
          <line x1="200" y1="87" x2="200" y2="112" />
          <line x1="80" y1="222" x2="240" y2="222" />
          <line x1="80" y1="216" x2="80" y2="228" />
          <line x1="240" y1="216" x2="240" y2="228" />
          <line x1="44" y1="112" x2="44" y2="200" />
          <line x1="38" y1="112" x2="50" y2="112" />
          <line x1="38" y1="200" x2="50" y2="200" />
        </svg>
      );

    // One phone, one central API, four independent backends.
    case "hub":
      return (
        <svg {...svgProps}>
          <rect x="22" y="90" width="44" height="76" rx="8" />
          <line x1="36" y1="102" x2="52" y2="102" />
          <line x1="66" y1="128" x2="126" y2="128" />
          <circle cx="150" cy="128" r="24" fill="currentColor" />
          <circle cx="150" cy="128" r="11" stroke="white" />
          {[35, 95, 155, 215].map((cy) => (
            <g key={cy}>
              <line x1="172" y1="124" x2="250" y2={cy} />
              <rect x="250" y={cy - 15} width="46" height="30" rx="6" />
              <line x1="260" y1={cy} x2="286" y2={cy} />
            </g>
          ))}
        </svg>
      );

    // Sequence diagram: app, server, and provider exchanging messages.
    case "handshake":
      return (
        <svg {...svgProps}>
          {[60, 160, 260].map((x) => (
            <g key={x}>
              <rect x={x - 32} y="20" width="64" height="28" rx="6" />
              <line x1={x} y1="48" x2={x} y2="222" strokeDasharray="4 7" />
            </g>
          ))}
          <path d="M60 92 H156 M148 86 L156 92 L148 98" />
          <path d="M160 134 H256 M248 128 L256 134 L248 140" />
          <path d="M256 176 H64 M72 170 L64 176 L72 182" strokeDasharray="4 7" />
        </svg>
      );
  }
}
