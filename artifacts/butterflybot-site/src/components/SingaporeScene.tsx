import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/utils/cn";

/**
 * Singapore-themed animated skyline section.
 * Features Marina Bay Sands, Merlion, Esplanade, Gardens by the Bay supertrees,
 * twinkling city lights, animated water reflections, and fireworks.
 */
export default function SingaporeScene() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section
      id="singapore"
      className="relative py-24 overflow-hidden bg-[#0a0f2e]"
      data-testid="section-singapore"
    >
      {/* Stars background */}
      <div className="absolute inset-0 pointer-events-none">
        {STARS.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: star.size,
              height: star.size,
              left: star.x,
              top: star.y,
              opacity: star.opacity,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Gradient sky glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#1a0a3e]/60 via-[#0d1a4a]/30 to-transparent" />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#7c3aed]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-24 bg-[#ef4444]/15 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-24 bg-[#00b4d8]/15 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-10">
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium mb-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {/* Singapore flag colours */}
            <span className="text-red-400">&#9679;</span>
            <span className="text-white">&#9679;</span>
            <span>Built for Singapore</span>
          </div>
          <h2 className={cn(
            "font-serif text-4xl md:text-5xl font-bold text-white mb-3 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Powering the{" "}
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Lion City
            </span>
          </h2>
          <p className={cn(
            "text-white/60 max-w-xl mx-auto text-base transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Designed for Singapore's vibrant, multilingual, and fast-moving business landscape — 
            English, Mandarin, Malay, and Tamil, all in one intelligent platform.
          </p>
        </div>

        {/* Skyline SVG */}
        <div className={cn(
          "transition-all duration-1000 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <SkylineSVG />
        </div>

        {/* Singapore stats */}
        <div className={cn(
          "grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          {SG_STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              data-testid={`sg-stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <p className="text-2xl font-bold font-serif text-white mb-1">{stat.value}</p>
              <p className="text-xs text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CSS animations */}
      <style>{ANIMATION_CSS}</style>
    </section>
  );
}

/* ─── Skyline SVG ────────────────────────────────────────────────────────── */

function SkylineSVG() {
  return (
    <svg
      viewBox="0 0 1000 380"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto select-none"
      aria-label="Singapore skyline animation"
    >
      <defs>
        {/* Water gradient */}
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2a6c" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0a0f2e" stopOpacity="0.5" />
        </linearGradient>
        {/* Sky gradient */}
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0f2e" />
          <stop offset="60%" stopColor="#1a1060" />
          <stop offset="100%" stopColor="#2d0a4e" />
        </linearGradient>
        {/* MBS gradient */}
        <linearGradient id="mbs" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        {/* Supertree gradient */}
        <linearGradient id="stGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
        {/* Building generic */}
        <linearGradient id="bldA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="bldB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="bldC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#065f46" stopOpacity="0.7" />
        </linearGradient>
        {/* Reflection blur */}
        <filter id="reflect">
          <feTurbulence type="turbulence" baseFrequency="0.01 0.06" numOctaves="2" seed="2" result="noise">
            <animate attributeName="baseFrequency" values="0.01 0.06;0.012 0.07;0.01 0.06" dur="4s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        {/* Glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Sky background */}
      <rect width="1000" height="380" fill="url(#sky)" />

      {/* Moon */}
      <circle cx="870" cy="55" r="28" fill="#fef3c7" opacity="0.9" filter="url(#softGlow)" />
      <circle cx="882" cy="48" r="22" fill="#1a1060" />

      {/* ── Background buildings (silhouette) ── */}
      {BG_BUILDINGS.map((b, i) => (
        <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill={b.fill} opacity={b.opacity} rx={b.rx ?? 1} />
      ))}

      {/* ── Left cluster – Tanjong Pagar / CBD ── */}
      {/* IOI Central (stepped) */}
      <rect x="35" y="155" width="38" height="100" fill="url(#bldA)" opacity="0.8" rx="1" />
      <rect x="40" y="140" width="28" height="20" fill="url(#bldA)" opacity="0.85" />
      <rect x="46" y="128" width="16" height="16" fill="url(#bldA)" opacity="0.9" />
      {/* Guoco Tower */}
      <rect x="90" y="120" width="30" height="140" fill="url(#bldB)" opacity="0.88" rx="2" />
      <rect x="93" y="108" width="24" height="14" fill="url(#bldB)" opacity="0.9" />
      <rect x="97" y="95" width="16" height="14" fill="url(#bldB)" />
      <line x1="105" y1="95" x2="105" y2="82" stroke="#a78bfa" strokeWidth="2" />
      {/* Antenna light */}
      <circle cx="105" cy="80" r="2.5" fill="#f472b6" filter="url(#glow)">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* ── Esplanade (Durian) ── */}
      <ellipse cx="245" cy="256" rx="38" ry="28" fill="#1e3a8a" opacity="0.9" />
      <ellipse cx="245" cy="256" rx="38" ry="28" fill="none" stroke="#60a5fa" strokeWidth="0.5" opacity="0.6" />
      {/* Durian spikes */}
      {DURIAN_SPIKES.map((s, i) => (
        <polygon key={i} points={s} fill="#3b82f6" opacity="0.5" />
      ))}
      <ellipse cx="290" cy="260" rx="32" ry="24" fill="#1e3a8a" opacity="0.9" />
      {DURIAN_SPIKES2.map((s, i) => (
        <polygon key={i} points={s} fill="#3b82f6" opacity="0.5" />
      ))}

      {/* ── Merlion ── */}
      {/* Body */}
      <path d="M 330 240 Q 325 215 335 200 Q 340 188 350 192 Q 360 188 365 200 Q 375 215 370 240 Z"
        fill="#e2e8f0" opacity="0.95" />
      {/* Fish tail */}
      <path d="M 335 235 Q 330 250 320 260 Q 330 258 340 265 Q 345 255 350 260 Q 355 255 360 265 Q 370 258 380 260 Q 370 250 365 235 Z"
        fill="#94a3b8" opacity="0.85" />
      {/* Head */}
      <ellipse cx="350" cy="186" rx="18" ry="16" fill="#f1f5f9" opacity="0.95" />
      {/* Mane */}
      <path d="M 335 185 Q 330 175 335 168 Q 340 162 345 170 Q 348 162 352 170 Q 355 162 360 170 Q 365 162 368 172 Q 371 180 365 185"
        fill="none" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
      {/* Eyes */}
      <circle cx="344" cy="183" r="2.5" fill="#1e293b" />
      <circle cx="356" cy="183" r="2.5" fill="#1e293b" />
      {/* Water spout */}
      <path d="M 350 172 Q 346 155 340 140 Q 345 148 350 140 Q 355 148 360 140 Q 354 155 350 172"
        fill="#7dd3fc" opacity="0.8">
        <animate attributeName="d"
          values="M 350 172 Q 346 155 340 140 Q 345 148 350 140 Q 355 148 360 140 Q 354 155 350 172;
                  M 350 172 Q 344 153 338 137 Q 343 146 350 138 Q 357 146 362 137 Q 356 153 350 172;
                  M 350 172 Q 346 155 340 140 Q 345 148 350 140 Q 355 148 360 140 Q 354 155 350 172"
          dur="2.5s" repeatCount="indefinite" />
      </path>

      {/* ── Marina Bay Sands ── */}
      {/* Tower 1 */}
      <rect x="420" y="148" width="36" height="112" fill="url(#mbs)" opacity="0.95" rx="2" />
      {/* Tower 2 */}
      <rect x="468" y="140" width="36" height="120" fill="url(#mbs)" opacity="0.95" rx="2" />
      {/* Tower 3 */}
      <rect x="516" y="152" width="36" height="108" fill="url(#mbs)" opacity="0.95" rx="2" />
      {/* SkyPark boat deck */}
      <path d="M 414 148 Q 540 118 572 148" fill="#8b5cf6" opacity="0.95" />
      <rect x="414" y="134" width="158" height="15" fill="#a78bfa" rx="4" opacity="0.9" />
      {/* Infinity pool edge glow */}
      <line x1="560" y1="140" x2="572" y2="148" stroke="#7dd3fc" strokeWidth="2" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
      </line>
      {/* MBS windows */}
      {MBS_WINDOWS.map((w, i) => (
        <rect key={i} x={w.x} y={w.y} width="5" height="4" fill="#fef9c3" opacity={w.op} rx="0.5">
          <animate attributeName="opacity" values={`${w.op};${w.op * 0.4};${w.op}`} dur={`${w.dur}s`} begin={`${w.begin}s`} repeatCount="indefinite" />
        </rect>
      ))}

      {/* ── ArtScience Museum (lotus) ── */}
      <ellipse cx="400" cy="255" rx="28" ry="14" fill="#e2e8f0" opacity="0.85" />
      {LOTUS_PETALS.map((p, i) => (
        <path key={i} d={p} fill="#f1f5f9" opacity="0.7" />
      ))}

      {/* ── Gardens by the Bay Supertrees ── */}
      {SUPERTREES.map((t, i) => (
        <g key={i}>
          {/* Trunk */}
          <rect x={t.x - t.tw / 2} y={t.y} width={t.tw} height={t.th} fill="#065f46" opacity="0.95" />
          {/* Canopy */}
          <ellipse cx={t.x} cy={t.y} rx={t.cr} ry={t.cr * 0.55} fill="url(#stGreen)" opacity="0.92">
            <animate attributeName="opacity" values="0.92;0.75;0.92" dur={`${4 + i * 0.7}s`} repeatCount="indefinite" />
          </ellipse>
          {/* Canopy lights */}
          {Array.from({ length: 5 }).map((_, j) => {
            const angle = (j / 5) * Math.PI * 2;
            const lx = t.x + Math.cos(angle) * (t.cr * 0.7);
            const ly = t.y + Math.sin(angle) * (t.cr * 0.35);
            return (
              <circle key={j} cx={lx} cy={ly} r="1.5" fill={t.lightColor} opacity="0.9" filter="url(#glow)">
                <animate attributeName="opacity" values="0.9;0.2;0.9" dur={`${1.5 + j * 0.4}s`} begin={`${j * 0.3}s`} repeatCount="indefinite" />
              </circle>
            );
          })}
        </g>
      ))}

      {/* ── Right cluster – Raffles Place / One Raffles Quay ── */}
      {/* One Raffles Quay */}
      <rect x="720" y="130" width="40" height="130" fill="url(#bldA)" opacity="0.85" rx="2" />
      <rect x="724" y="120" width="32" height="12" fill="url(#bldA)" opacity="0.9" />
      <rect x="729" y="108" width="22" height="13" fill="url(#bldA)" opacity="0.95" />
      <line x1="740" y1="108" x2="740" y2="95" stroke="#60a5fa" strokeWidth="1.5" />
      <circle cx="740" cy="93" r="2.5" fill="#ef4444" filter="url(#glow)">
        <animate attributeName="opacity" values="1;0.2;1" dur="2.2s" repeatCount="indefinite" />
      </circle>
      {/* UOB Plaza */}
      <rect x="775" y="145" width="44" height="115" fill="url(#bldC)" opacity="0.82" rx="2" />
      <rect x="779" y="130" width="36" height="17" fill="url(#bldC)" opacity="0.88" />
      {/* Chevron top */}
      <polygon points="789,130 797,110 805,130" fill="#34d399" opacity="0.9" />
      {/* CapitaGreen */}
      <rect x="840" y="160" width="38" height="100" fill="url(#bldB)" opacity="0.8" rx="2" />
      <ellipse cx="859" cy="160" rx="22" ry="12" fill="#6d28d9" opacity="0.9" />
      {/* Telok Ayer */}
      <rect x="895" y="170" width="32" height="90" fill="url(#bldA)" opacity="0.75" rx="1" />
      <rect x="898" y="158" width="26" height="14" fill="url(#bldA)" opacity="0.8" />
      <line x1="911" y1="158" x2="911" y2="144" stroke="#60a5fa" strokeWidth="1.5" />
      <circle cx="911" cy="142" r="2" fill="#22d3ee" filter="url(#glow)">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* ── Water / Marina Bay ── */}
      <rect x="0" y="260" width="1000" height="120" fill="url(#water)" />

      {/* Water shimmer lines */}
      {WATER_LINES.map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y} x2={l.x2} y2={l.y} stroke="white" strokeWidth="0.5" opacity="0.15"
          strokeDasharray="8 12">
          <animate attributeName="stroke-dashoffset" values="0;-40" dur={`${l.dur}s`} repeatCount="indefinite" />
        </line>
      ))}

      {/* Reflections (blurred, flipped) */}
      <g transform="translate(0,520) scale(1,-1)" opacity="0.25" filter="url(#reflect)">
        {/* MBS reflection */}
        <rect x="420" y="148" width="36" height="80" fill="#8b5cf6" />
        <rect x="468" y="140" width="36" height="88" fill="#8b5cf6" />
        <rect x="516" y="152" width="36" height="76" fill="#8b5cf6" />
        <path d="M 414 148 Q 540 118 572 148" fill="#a78bfa" />
        {/* Merlion reflection */}
        <rect x="332" y="192" width="36" height="70" fill="#94a3b8" />
        {/* Left cluster */}
        <rect x="90" y="120" width="30" height="120" fill="#7c3aed" />
      </g>

      {/* ── Fireworks ── */}
      {FIREWORKS.map((fw, i) => (
        <g key={i}>
          {fw.rays.map((ray, j) => (
            <line
              key={j}
              x1={fw.cx} y1={fw.cy}
              x2={fw.cx + ray.dx} y2={fw.cy + ray.dy}
              stroke={fw.color}
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;0.9;0"
                dur={`${fw.dur}s`}
                begin={`${fw.begin}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="x2"
                values={`${fw.cx};${fw.cx + ray.dx}`}
                dur={`${fw.dur}s`}
                begin={`${fw.begin}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="y2"
                values={`${fw.cy};${fw.cy + ray.dy}`}
                dur={`${fw.dur}s`}
                begin={`${fw.begin}s`}
                repeatCount="indefinite"
              />
            </line>
          ))}
        </g>
      ))}

      {/* Singapore flag — floating top right */}
      <g>
        {/* Pole */}
        <line x1="950" y1="30" x2="950" y2="100" stroke="#94a3b8" strokeWidth="1.5" />
        {/* Flag body */}
        <rect x="950" y="30" width="42" height="14" fill="#ef4444" rx="1" />
        <rect x="950" y="44" width="42" height="14" fill="white" rx="1" />
        {/* Crescent */}
        <circle cx="959" cy="37" r="5" fill="white" />
        <circle cx="962" cy="35" r="4.5" fill="#ef4444" />
        {/* Stars */}
        {SG_FLAG_STARS.map((s, i) => (
          <text key={i} x={s.x} y={s.y} fontSize="4" fill="white" textAnchor="middle">★</text>
        ))}
        {/* Gentle wave animation on flag */}
        <animateTransform
          attributeName="transform"
          type="skewX"
          values="0;1.5;0;-1;0"
          dur="3s"
          repeatCount="indefinite"
        />
      </g>

      {/* ButterflySG branding watermark on skyline */}
      <text x="500" y="345" fontFamily="serif" fontSize="11" fill="white" opacity="0.25" textAnchor="middle" letterSpacing="4">
        BUTTERLYSG · SINGAPORE
      </text>
    </svg>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────────── */

const SG_STATS = [
  { label: "Languages supported", value: "4" },
  { label: "SG businesses", value: "600+" },
  { label: "MAS compliant", value: "Yes" },
  { label: "Local data residency", value: "AWS SG" },
];

/** Randomly generated stars */
const STARS = Array.from({ length: 80 }, (_, i) => ({
  x: `${(i * 37 + 11) % 100}%`,
  y: `${(i * 53 + 7) % 55}%`,
  size: `${((i * 17) % 3) + 1}px`,
  opacity: ((i * 13) % 6) / 10 + 0.2,
  duration: ((i * 7) % 4) + 2,
  delay: ((i * 11) % 5),
}));

const BG_BUILDINGS = [
  { x: 0, y: 195, w: 32, h: 65, fill: "#1e3a8a", opacity: 0.5, rx: 1 },
  { x: 145, y: 175, w: 48, h: 85, fill: "#312e81", opacity: 0.55 },
  { x: 600, y: 185, w: 42, h: 75, fill: "#1e3a8a", opacity: 0.5 },
  { x: 650, y: 170, w: 36, h: 90, fill: "#312e81", opacity: 0.48 },
  { x: 955, y: 192, w: 45, h: 68, fill: "#1e3a8a", opacity: 0.45 },
];

const DURIAN_SPIKES = [
  "230,228 245,208 260,228", "220,240 198,228 218,252",
  "270,240 292,228 272,252", "235,258 245,278 255,258",
];
const DURIAN_SPIKES2 = [
  "275,232 290,212 305,232", "265,244 243,232 263,256",
  "315,244 337,232 317,256", "280,262 290,282 300,262",
];

const LOTUS_PETALS = [
  "M400,241 Q388,230 385,241 Q388,248 400,255 Z",
  "M400,241 Q412,230 415,241 Q412,248 400,255 Z",
  "M400,241 Q392,222 400,218 Q408,222 400,241 Z",
  "M400,241 Q382,235 380,248 Q388,254 400,255 Z",
  "M400,241 Q418,235 420,248 Q412,254 400,255 Z",
];

const MBS_WINDOWS = [
  // Tower 1
  ...Array.from({ length: 12 }, (_, i) => ({ x: 425 + (i % 3) * 8, y: 158 + Math.floor(i / 3) * 18, op: 0.6 + (i % 3) * 0.15, dur: 2 + i * 0.4, begin: i * 0.3 })),
  // Tower 2
  ...Array.from({ length: 12 }, (_, i) => ({ x: 473 + (i % 3) * 8, y: 150 + Math.floor(i / 3) * 18, op: 0.5 + (i % 4) * 0.12, dur: 2.5 + i * 0.3, begin: i * 0.25 })),
  // Tower 3
  ...Array.from({ length: 12 }, (_, i) => ({ x: 521 + (i % 3) * 8, y: 162 + Math.floor(i / 3) * 18, op: 0.55 + (i % 3) * 0.14, dur: 1.8 + i * 0.35, begin: i * 0.2 })),
];

const SUPERTREES = [
  { x: 630, y: 200, tw: 10, th: 60, cr: 30, lightColor: "#34d399" },
  { x: 665, y: 190, tw: 12, th: 70, cr: 36, lightColor: "#a78bfa" },
  { x: 703, y: 198, tw: 10, th: 60, cr: 28, lightColor: "#fbbf24" },
];

const WATER_LINES = Array.from({ length: 12 }, (_, i) => ({
  x1: 0, x2: 1000,
  y: 268 + i * 8,
  dur: 3 + (i % 3),
}));

/** Firework definitions */
function makeRays(count: number, radius: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    return { dx: Math.cos(angle) * radius, dy: Math.sin(angle) * radius };
  });
}

const FIREWORKS = [
  { cx: 160, cy: 80, color: "#f472b6", dur: 5, begin: 0.5, rays: makeRays(12, 28) },
  { cx: 800, cy: 65, color: "#fbbf24", dur: 6, begin: 2, rays: makeRays(10, 24) },
  { cx: 480, cy: 55, color: "#7dd3fc", dur: 7, begin: 3.5, rays: makeRays(14, 32) },
  { cx: 640, cy: 75, color: "#34d399", dur: 5.5, begin: 1, rays: makeRays(10, 20) },
];

const SG_FLAG_STARS = [
  { x: 968, y: 39 }, { x: 975, y: 35 }, { x: 982, y: 39 },
  { x: 979, y: 43 }, { x: 971, y: 43 },
];

const ANIMATION_CSS = `
  @keyframes twinkle {
    from { opacity: 0.2; transform: scale(0.8); }
    to   { opacity: 1;   transform: scale(1.2); }
  }
`;
