'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const kpis = [
  { value: '+38 %', label: 'qualifizierte Anfragen' },
  { value: '2x', label: 'mehr passende Bewerbungen' },
  { value: '-30 %', label: 'weniger Angebotsaufwand' },
]

const blocks = [
  {
    code: '01',
    title: 'Problem damals',
    text: 'Unklare Anfragen, unpassende Bewerbungen, hoher Angebotsaufwand und verstreute Marketing-Maßnahmen.',
  },
  {
    code: '02',
    title: 'Ziel',
    text: 'Planbare Kundengewinnung und gezielte Bewerbungen über ein strukturiertes System.',
  },
  {
    code: '03',
    title: 'Umsetzung',
    text: 'Neuaufbau Website, klare Positionierung, gezielte Anzeigen, strukturierte Anfrage- und Bewerbungsführung.',
  },
  {
    code: '04',
    title: 'Ergebnis',
    text: 'Mehr Klarheit in Vertrieb und Recruiting. Weniger Reibung. Bessere Daten als Entscheidungsbasis.',
  },
]

export function CaseStudySection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] font-mono text-primary mb-4">
            07 — Praxis & Ergebnisse
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Praxis & Ergebnisse
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Unsere Systeme sind bei Industrieunternehmen im Einsatz, unter anderem bei{' '}
            <span className="text-foreground">Ursa Chemie</span>.
          </p>
        </motion.div>

        {/* Hero card with Ursa imagery */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-border bg-card/70 overflow-hidden mb-10"
        >
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Visual — real Ursa factory photo with industrial overlay treatment */}
            <div className="lg:col-span-3 relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] bg-secondary overflow-hidden">
              <Image
                src="/ursa-factory.jpg"
                alt="Ursa Chemie — Produktionsstandort"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              {/* Lighter industrial overlay — the actual UCM facility must read clearly */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(199,255,0,0.12),transparent_55%)]" />
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.08] mix-blend-screen"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, rgba(199,255,0,0.6) 0, rgba(199,255,0,0.6) 1px, transparent 1px, transparent 6px)',
                }}
              />
              {/* Corner crosshairs (industrial telemetry look) */}
              <Crosshair className="top-3 left-3" />
              <Crosshair className="top-3 right-3" flip />
              <Crosshair className="bottom-3 left-3" flipV />
              <Crosshair className="bottom-3 right-3" flip flipV />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <UrsaLogo />
                <span className="text-[10px] uppercase tracking-[0.22em] font-mono text-foreground px-2 py-1 rounded-sm border border-primary/30 bg-background/75 backdrop-blur-sm">
                  Industrie · Chemie
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] font-mono text-muted-foreground">
                  Werk Standort
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-mono text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Live System
                </span>
              </div>
            </div>

            {/* KPIs */}
            <div className="lg:col-span-2 p-7 sm:p-9 grid grid-cols-1 gap-4 content-center bg-gradient-to-br from-secondary/40 to-background">
              {kpis.map((k, i) => (
                <motion.div
                  key={k.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="rounded-xl border border-primary/30 bg-primary/[0.05] p-5 flex items-baseline justify-between gap-4"
                >
                  <span className="text-4xl sm:text-5xl font-bold text-primary tabular-nums">
                    {k.value}
                  </span>
                  <span className="text-sm text-foreground/80 text-right">{k.label}</span>
                </motion.div>
              ))}
              <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                Beispielhafte Größenordnung aus der Zusammenarbeit. Tatsächliche Ergebnisse hängen
                vom Markt, dem Angebot und der Umsetzung ab.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Story blocks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {blocks.map((b, i) => (
            <motion.div
              key={b.code}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-xl border border-border bg-card/60 p-5"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-2">
                {b.code}
              </div>
              <h4 className="text-base font-semibold text-foreground mb-1.5">{b.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UrsaLogo() {
  // Real client asset (white-on-transparent variant). Locked aspect ratio
  // via next/image intrinsic dims + w-auto + object-contain — cannot stretch.
  return (
    <div className="inline-flex items-center px-3 py-2 rounded-sm border border-primary/30 bg-background/75 backdrop-blur-sm">
      <Image
        src="/ursa-chemie-logo-white.png"
        alt="Ursa Chemie GmbH"
        width={1280}
        height={420}
        className="h-7 w-auto object-contain"
      />
    </div>
  )
}

function Crosshair({
  className = '',
  flip,
  flipV,
}: {
  className?: string
  flip?: boolean
  flipV?: boolean
}) {
  return (
    <div
      className={`absolute ${className} h-3 w-3 pointer-events-none`}
      style={{ transform: `scale(${flip ? -1 : 1}, ${flipV ? -1 : 1})` }}
      aria-hidden
    >
      <span className="absolute left-0 top-0 h-px w-3 bg-primary/70" />
      <span className="absolute left-0 top-0 h-3 w-px bg-primary/70" />
    </div>
  )
}

/* Procedural fallback retained in case /public/ursa-factory.jpg is removed. Not exported. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _FactoryArtworkFallback() {
  return (
    <svg
      viewBox="0 0 800 500"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-label="Industrieller Produktionsstandort"
    >
      <defs>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0d1722" />
          <stop offset="100%" stopColor="#070a10" />
        </linearGradient>
        <linearGradient id="bld" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1c2734" />
          <stop offset="100%" stopColor="#0c121a" />
        </linearGradient>
        <linearGradient id="bld2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#243140" />
          <stop offset="100%" stopColor="#11171f" />
        </linearGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#C7FF00" strokeOpacity="0.06" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="800" height="500" fill="url(#sky)" />
      <rect width="800" height="500" fill="url(#grid)" />

      {/* Moon */}
      <circle cx="640" cy="100" r="42" fill="#0f1a26" stroke="#C7FF00" strokeOpacity="0.25" />

      {/* Distant haze */}
      <rect x="0" y="320" width="800" height="180" fill="#0a1018" opacity="0.5" />

      {/* Buildings */}
      <rect x="60" y="260" width="160" height="180" fill="url(#bld)" />
      <rect x="180" y="220" width="140" height="220" fill="url(#bld2)" />
      <rect x="300" y="200" width="80" height="240" fill="url(#bld)" />
      <rect x="370" y="240" width="160" height="200" fill="url(#bld2)" />
      <rect x="520" y="210" width="130" height="230" fill="url(#bld)" />
      <rect x="640" y="270" width="120" height="170" fill="url(#bld2)" />

      {/* Chimneys */}
      <rect x="240" y="140" width="14" height="90" fill="#212e3d" />
      <rect x="395" y="120" width="14" height="120" fill="#212e3d" />
      <rect x="555" y="130" width="14" height="100" fill="#212e3d" />

      {/* Steam */}
      <g opacity="0.5">
        <ellipse cx="247" cy="130" rx="22" ry="10" fill="#26384a" />
        <ellipse cx="247" cy="118" rx="16" ry="7" fill="#26384a" />
        <ellipse cx="402" cy="108" rx="26" ry="11" fill="#26384a" />
        <ellipse cx="402" cy="94" rx="18" ry="8" fill="#26384a" />
        <ellipse cx="562" cy="120" rx="20" ry="9" fill="#26384a" />
      </g>

      {/* Window grid (lit) */}
      <g fill="#C7FF00" opacity="0.55">
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 5 }).map((__, c) => (
            <rect
              key={`a-${r}-${c}`}
              x={75 + c * 28}
              y={290 + r * 22}
              width={10}
              height={8}
              opacity={(r * c) % 3 === 0 ? 0.55 : 0.18}
            />
          ))
        )}
        {Array.from({ length: 8 }).map((_, r) =>
          Array.from({ length: 4 }).map((__, c) => (
            <rect
              key={`b-${r}-${c}`}
              x={195 + c * 30}
              y={245 + r * 22}
              width={11}
              height={8}
              opacity={(r + c) % 4 === 0 ? 0.6 : 0.16}
            />
          ))
        )}
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 4 }).map((__, c) => (
            <rect
              key={`d-${r}-${c}`}
              x={385 + c * 32}
              y={262 + r * 22}
              width={12}
              height={8}
              opacity={(r * 2 + c) % 5 === 0 ? 0.5 : 0.15}
            />
          ))
        )}
        {Array.from({ length: 8 }).map((_, r) =>
          Array.from({ length: 3 }).map((__, c) => (
            <rect
              key={`e-${r}-${c}`}
              x={538 + c * 34}
              y={232 + r * 22}
              width={12}
              height={8}
              opacity={(r + c * 2) % 4 === 0 ? 0.5 : 0.16}
            />
          ))
        )}
      </g>

      {/* Pipes */}
      <path
        d="M0 410 H800"
        stroke="#C7FF00"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeDasharray="6 8"
      />
      <path
        d="M0 440 H800"
        stroke="#C7FF00"
        strokeOpacity="0.18"
        strokeWidth="1.5"
        strokeDasharray="3 9"
      />
    </svg>
  )
}
