'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    code: '01',
    title: 'Analysegespräch',
    desc: 'Wir klären Ziele, Herausforderungen und Prioritäten.',
  },
  {
    code: '02',
    title: 'Onboarding',
    desc: 'Wir sammeln Leistungen, Zielkunden, interne Abläufe, Referenzen und Besonderheiten.',
  },
  {
    code: '03',
    title: 'Konzeption & Neuaufbau',
    desc: 'Wir entwickeln Positionierung, Website-Struktur, Anzeigenstrategie und klare Lead- oder Bewerberführung.',
  },
  {
    code: '04',
    title: 'Umsetzung & Optimierung',
    desc: 'Das System geht live. Auf Basis echter Daten optimieren wir gezielt weiter.',
  },
]

export function ProcessSection() {
  return (
    <section id="ablauf" className="relative py-24 sm:py-32 overflow-hidden">
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
            05 — Ablauf
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            So läuft die Zusammenarbeit ab
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"
          />

          <div className="space-y-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-14 sm:pl-20"
              >
                <div className="absolute left-0 top-2 flex items-center gap-3">
                  <div className="relative h-9 w-9 rounded-full border border-primary/40 bg-background flex items-center justify-center">
                    <span className="font-mono text-xs text-primary">{s.code}</span>
                    <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-40" />
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card/70 p-6 hover:border-primary/40 transition-colors">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-xl border border-primary/25 bg-primary/[0.04] p-6 sm:p-8"
        >
          <p className="text-foreground/90 leading-relaxed">
            <span className="text-primary font-semibold">Du lieferst fachliche Einblicke und Feedback.</span>{' '}
            Wir übernehmen Strategie, Aufbau und Umsetzung.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
