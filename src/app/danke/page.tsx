'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Header } from '@/maschinenbauer/components/header'
import { Footer } from '@/maschinenbauer/components/landing/footer'

const steps = [
  'Du erhältst eine Bestätigung per E-Mail.',
  'Wir prüfen kurz deine Ausgangssituation.',
  'Im Erstgespräch klären wir Ziele und Engpässe.',
  'Du bekommst eine ehrliche Einschätzung — ohne Verpflichtung.',
]

export default function DankePage() {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="inline-flex h-20 w-20 rounded-full bg-primary/15 border border-primary/40 items-center justify-center mb-8"
          >
            <CheckCircle2 size={48} className="text-primary" />
          </motion.div>

          <p className="text-[11px] uppercase tracking-[0.22em] font-mono text-primary mb-3">
            Bestätigung
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-5 tracking-tight">
            Danke — deine Anfrage ist eingegangen.
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Wir melden uns innerhalb von 24 Stunden (an Werktagen) mit den nächsten Schritten.
          </p>

          <div className="text-left bg-card/70 border border-border rounded-xl p-6 sm:p-8 mb-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono text-muted-foreground mb-4">
              Was als Nächstes passiert
            </p>
            <ul className="space-y-3">
              {steps.map((s, i) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-primary mt-1 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-foreground/90">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            Zurück zur Startseite
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
