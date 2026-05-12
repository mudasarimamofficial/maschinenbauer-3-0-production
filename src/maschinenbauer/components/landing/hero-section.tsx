'use client'

/*
 * Hero — faithful port of the Loveable Hero
 * (Maschinenbauer 3.0 BY Loveable/src/components/site/sections.tsx lines 17–71).
 *
 * Differences from the Loveable original (per client brief):
 *   • Headline copy uses the verbatim client wording
 *     ("Deine Website ist kein Kunstprojekt. / Sie ist entweder ein Werkzeug
 *     – oder Zeitverschwendung.") instead of Loveable's shorter version.
 *   • The bullet/supporting "Visitenkarte" panel is REMOVED and replaced
 *     by the reusable <M3CorePanel /> (extracted from Section 03's machine
 *     core, byte-identical visual output).
 *   • CTA wired to the central BOOKING_URL config (untouched).
 *
 * Layout, parallax, grid background, pill, animations are 1:1 from Loveable.
 * Utility classes are localised in hero-section.module.css so nothing leaks.
 */

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useMaschinenbauerConfig } from '@/maschinenbauer/lib/booking'
import { M3CorePanel } from './m3-core-panel'
import styles from './hero-section.module.css'

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { bookingUrl, bookingLabel, bookingMicrocopy } = useMaschinenbauerConfig()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // Identical parallax/scale/fade values from Loveable Hero.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.2])

  return (
    <section id="top" ref={ref} className={styles.section}>
      {/* Parallax background */}
      <motion.div style={{ y, scale, opacity: fade }} className={styles.bgWrap}>
        <Image
          src="/hero-machine.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.bgGradient} />
        <div className={styles.bgGrid} />
      </motion.div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LEFT — copy + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className={styles.pill}>
              <span className={styles.pillDot} />
              <span className={styles.labelMono}>
                Maschinenbauer 3.0 · System für B2B-Wachstum
              </span>
            </div>

            <h1 className={styles.headline}>
              Deine Website ist <br className="hidden sm:block" />
              kein Kunstprojekt.
              <br />
              <span className={styles.acid}>Sie ist entweder ein Werkzeug</span>
              <br />
              <span>— oder Zeitverschwendung.</span>
            </h1>

            <p className={styles.sub}>
              Wir entwickeln Systeme aus Website, Anzeigen und klaren Prozessen, die planbar
              Kunden und Mitarbeiter gewinnen.
            </p>

            <div className={styles.ctaRow}>
              <a
                href={bookingUrl}
                className={`${styles.cta} mb-cta`}
              >
                {bookingLabel}
                <ArrowUpRight size={18} aria-hidden />
              </a>
              <p className={`${styles.micro} microcopy`}>{bookingMicrocopy}</p>
            </div>
          </motion.div>

          {/* RIGHT — M3.0 core panel (replaces the Loveable Visitenkarte bullets) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1], delay: 0.2 }}
            className={styles.coreShell}
          >
            <M3CorePanel className={styles.coreSize} idSuffix="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
