'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, AlertTriangle, Check } from 'lucide-react'
import { useMaschinenbauerConfig } from '@/maschinenbauer/lib/booking'

const stayPath = [
  'gleiche Art von Anfragen',
  'gleicher Bewerber-Mix',
  'gleiche Engpässe',
  'weiterhin unklare Prozesse',
  'Marketing bleibt Zufall',
]

const newPath = [
  'klarere Prozesse',
  'bessere Leads',
  'bessere Mitarbeiter',
  'mehr Planbarkeit',
  'weniger interne Reibung',
]

export function FutureVisionSection() {
  const { bookingUrl, bookingLabel, bookingMicrocopy } = useMaschinenbauerConfig()

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] font-mono text-primary mb-4">
            08 — Ausblick
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Wo stehst du in einem Jahr?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 mb-12">
          {/* Stay-the-same path — dim/noisy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-border/60 bg-card/40 p-7 sm:p-10 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #fff 0 1px, transparent 1px 6px)',
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-md bg-secondary border border-border flex items-center justify-center text-muted-foreground">
                  <AlertTriangle size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] font-mono text-muted-foreground">
                    Pfad A
                  </p>
                  <h3 className="text-xl font-semibold text-muted-foreground">
                    Wenn alles so weiterläuft wie bisher:
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {stayPath.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-muted-foreground/60 mt-1 font-mono text-xs">—</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* System path — bright/structured */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="relative rounded-2xl border border-primary/45 bg-primary/[0.05] p-7 sm:p-10 shadow-[0_0_64px_-24px] shadow-primary/40"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-md bg-primary/15 border border-primary/40 flex items-center justify-center text-primary">
                <Check size={18} strokeWidth={2.6} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] font-mono text-primary">
                  Pfad B
                </p>
                <h3 className="text-xl font-semibold text-foreground">Oder mit einem klaren System:</h3>
              </div>
            </div>

            <ul className="space-y-3">
              {newPath.map((s) => (
                <li key={s} className="flex items-start gap-3 text-foreground">
                  <Check size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card/60 p-7 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <p className="text-xl sm:text-2xl text-foreground/90 leading-snug max-w-xl">
            Die Entscheidung beginnt mit einer <span className="text-primary">Analyse</span>.
          </p>
          <div className="flex flex-col gap-1">
            <a
              href={bookingUrl}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_32px_-4px] hover:shadow-primary/60 transition-shadow"
            >
              {bookingLabel}
              <ArrowUpRight size={18} />
            </a>
            <p className="text-xs text-muted-foreground font-mono text-center">{bookingMicrocopy}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
