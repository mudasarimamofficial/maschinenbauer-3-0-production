'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useMaschinenbauerConfig } from '@/maschinenbauer/lib/booking'

export function FinalCTASection() {
  const { bookingUrl, bookingLabel, bookingMicrocopy } = useMaschinenbauerConfig()

  return (
    <section id="cta" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(199,255,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(199,255,0,0.4) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.07, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vmin] w-[60vmin] rounded-full bg-primary/15 blur-[80px]"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] uppercase tracking-[0.22em] font-mono text-primary mb-5">
            10 — Klarheit in 20 Minuten
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-foreground tracking-tight leading-[1.05]">
            Wie viel Potenzial lässt deine{' '}
            <span className="text-primary">Website aktuell liegen?</span>
          </h2>
          <p className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Finde in 20 Minuten heraus, ob ein strukturiertes System für Kunden- oder
            Mitarbeitergewinnung bei dir sinnvoll ist.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href={bookingUrl}
              className="mb-cta group inline-flex items-center gap-2 px-9 py-5 rounded-md bg-primary text-primary-foreground font-semibold text-lg hover:shadow-[0_0_48px_-4px] hover:shadow-primary/70 transition-shadow"
            >
              {bookingLabel}
              <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <p className="microcopy mt-5 text-sm text-muted-foreground font-mono tracking-wide">
            {bookingMicrocopy}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
