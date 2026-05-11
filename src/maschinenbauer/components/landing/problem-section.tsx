'use client'

import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

const actions = [
  { label: 'neue Website', x: 'left-[6%]', y: 'top-[10%]', rot: '-6deg' },
  { label: 'Google Ads', x: 'left-[34%]', y: 'top-[4%]', rot: '4deg' },
  { label: 'Social Media', x: 'left-[62%]', y: 'top-[12%]', rot: '-3deg' },
  { label: 'Stellenanzeigen', x: 'left-[78%]', y: 'top-[2%]', rot: '7deg' },
]

const consequences = [
  'Anfragen sind unvollständig',
  'Projekte passen nicht',
  'Angebote kosten unnötig Zeit',
  'Bewerbungen treffen nicht die Anforderungen',
  'Wachstum fühlt sich unkoordiniert an',
]

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] font-mono text-primary mb-4">
            01 — Diagnose
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Das eigentliche Problem
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Viele Unternehmen investieren in Einzelmaßnahmen.
          </p>
        </motion.div>

        {/* Scattered action cards */}
        <div className="relative h-44 sm:h-40 mb-12 hidden md:block" aria-hidden>
          {actions.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`absolute ${a.x} ${a.y} px-4 py-2.5 rounded-md border border-border/70 bg-card/80 text-sm text-foreground backdrop-blur-sm shadow-lg`}
              style={{ transform: `rotate(${a.rot})` }}
            >
              <span className="font-mono text-[10px] text-muted-foreground mr-2">↗</span>
              {a.label}
            </motion.div>
          ))}
        </div>

        {/* Mobile: simple grid of actions */}
        <div className="md:hidden grid grid-cols-2 gap-2.5 mb-10">
          {actions.map((a) => (
            <div
              key={a.label}
              className="px-3 py-2.5 rounded-md border border-border/70 bg-card/80 text-sm text-foreground"
            >
              {a.label}
            </div>
          ))}
        </div>

        {/* Consequence cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {consequences.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="group relative p-4 rounded-sm border border-destructive/25 bg-destructive/[0.04] hover:border-destructive/45 transition-colors"
            >
              <AlertTriangle size={16} className="text-destructive/80 mb-3" />
              <p className="text-sm text-foreground leading-snug">{c}</p>
            </motion.div>
          ))}
        </div>

        {/* Key statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 relative rounded-2xl border border-primary/30 bg-primary/[0.04] p-8 sm:p-10"
        >
          <div className="absolute inset-y-0 left-0 w-1 bg-primary rounded-l-2xl" />
          <p className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
            Mehr Maßnahmen bringen selten mehr Klarheit.
            <br />
            <span className="text-primary">Was fehlt, ist ein durchgängiges System.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
