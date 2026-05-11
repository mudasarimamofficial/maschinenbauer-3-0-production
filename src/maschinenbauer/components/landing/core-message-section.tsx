'use client'

import { motion } from 'framer-motion'
import { Compass, Radio, Workflow, Database } from 'lucide-react'

const modules = [
  {
    icon: Compass,
    code: '01',
    title: 'Positionierung',
    desc: 'Deine Leistungen und Stellen werden klar verständlich.',
  },
  {
    icon: Radio,
    code: '02',
    title: 'Reichweite',
    desc: 'Anzeigen bringen gezielt die richtigen Menschen auf die Seite.',
  },
  {
    icon: Workflow,
    code: '03',
    title: 'Struktur',
    desc: 'Anfragen und Bewerbungen werden sauber geführt.',
  },
  {
    icon: Database,
    code: '04',
    title: 'Weiterverarbeitung',
    desc: 'Dein Team erhält klare Entscheidungsgrundlagen.',
  },
]

export function CoreMessageSection() {
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
            02 — Kernbotschaft
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-foreground tracking-tight leading-[1.05]">
            Mehr Marketing-Maßnahmen lösen nicht dein Problem.
            <br />
            <span className="text-primary">Ein System schon.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Ein funktionierendes System sorgt dafür, dass Positionierung, Reichweite, Anfragen,
            Bewerbungen und interne Abläufe sauber zusammenspielen.
          </p>
        </motion.div>

        {/* Module grid with central spine */}
        <div className="relative">
          <div
            aria-hidden
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {modules.map((m, i) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={m.code}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative rounded-xl border border-border bg-card/80 p-6 hover:border-primary/40 transition-colors"
                >
                  <div className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    M.{m.code}
                  </div>
                  <div className="h-11 w-11 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center text-lg sm:text-xl text-foreground/90 max-w-2xl mx-auto"
        >
          Ohne diese Struktur bleibt Marketing bloß <span className="text-primary">Zufall</span>.
        </motion.p>
      </div>
    </section>
  )
}
