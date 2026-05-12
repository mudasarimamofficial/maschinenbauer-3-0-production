'use client'

import { motion } from 'framer-motion'
import { Check, X, ArrowUpRight } from 'lucide-react'
import { useMaschinenbauerConfig } from '@/maschinenbauer/lib/booking'

const suitable = [
  'mit erklärungsbedürftigen Leistungen',
  'mit Angebots- oder Projektlogik',
  'mit Fachkräftemangel',
  'die wachsen wollen, ohne Chaos zu erzeugen',
]

const notSuitable = [
  'E-Commerce',
  'lokale Kleinbetriebe',
  'reine B2C-Modelle',
  'kurzfristige Kampagnen ohne strategischen Aufbau',
]

export function FitSection() {
  const { bookingUrl, bookingLabel, bookingMicrocopy } = useMaschinenbauerConfig()

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] font-mono text-primary mb-4">
            06 — Eignung
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Für wen das geeignet ist
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Geeignet — highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-primary/50 bg-primary/[0.06] p-7 sm:p-10 shadow-[0_0_64px_-24px] shadow-primary/40"
          >
            <div
              aria-hidden
              className="absolute -inset-px rounded-2xl pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(199,255,0,0.18) 0%, transparent 30%, transparent 70%, rgba(199,255,0,0.18) 100%)',
                mask: 'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)',
                WebkitMask:
                  'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
                padding: 1,
              }}
            />

            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-primary/15 border border-primary/40 flex items-center justify-center text-primary">
                  <Check size={18} strokeWidth={2.6} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] font-mono text-primary">
                    Match
                  </p>
                  <h3 className="text-2xl font-bold text-foreground">Geeignet für Unternehmen</h3>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {suitable.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 text-foreground"
                >
                  <Check size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{s}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href={bookingUrl}
              className="mb-cta group inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-md bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_32px_-4px] hover:shadow-primary/60 transition-shadow"
            >
              {bookingLabel}
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="microcopy mt-3 text-xs text-muted-foreground text-center font-mono">
              {bookingMicrocopy}
            </p>
          </motion.div>

          {/* Nicht geeignet — muted, NO button */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border/70 bg-card/40 p-7 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="h-10 w-10 rounded-md bg-secondary border border-border flex items-center justify-center text-muted-foreground">
                <X size={18} strokeWidth={2.4} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] font-mono text-muted-foreground">
                  Mismatch
                </p>
                <h3 className="text-2xl font-bold text-muted-foreground">Nicht geeignet</h3>
              </div>
            </div>

            <ul className="space-y-3">
              {notSuitable.map((s) => (
                <li key={s} className="flex items-start gap-3 text-muted-foreground/90">
                  <X size={18} className="text-muted-foreground/70 flex-shrink-0 mt-1" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
