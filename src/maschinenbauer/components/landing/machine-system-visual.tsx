'use client'

/*
 * Faithful port of the "03 — System Architektur" section from
 * Maschinenbauer 3.0 BY CLAUDE (static index.html lines 1273–1391).
 *
 * Markup, class names, and the inline SVG are recreated 1:1 from the
 * Claude static source. Reveal animation (.reveal / .in toggled via
 * IntersectionObserver in Claude) is replicated with framer-motion's
 * `whileInView` for the same fade-up effect, scoped per element.
 *
 * All styles live in machine-system-visual.module.css so nothing leaks
 * to the rest of the site. Only this file and its CSS module were touched
 * for the swap.
 */

import { motion } from 'framer-motion'
import styles from './machine-system-visual.module.css'
import { M3CorePanel } from './m3-core-panel'

const inputs = [
  'unklare Anfragen',
  'falsche Projekte',
  'hoher Angebotsaufwand',
  'unpassende Bewerbungen',
  'verstreute Maßnahmen',
]

const outputs = [
  'bessere Leads',
  'qualifiziertere Bewerber',
  'klare Prozesse',
  'weniger Streuverlust',
  'mehr Planbarkeit',
]

const overview = [
  ['01', 'Klare Positionierung'],
  ['02', 'Gezielte Reichweite'],
  ['03', 'Strukturierte Formulare'],
  ['04', 'Interne Weiterverarbeitung'],
  ['05', 'Optimierung auf Datenbasis'],
] as const

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] as const } },
}

export function MachineSystemVisual() {
  return (
    <section id="system" className={styles.wrapper}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionMeta}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <b>03</b>
          <span>System Architektur</span>
        </motion.div>

        <motion.div
          className={styles.sectionHead}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className={styles.eyebrow}>Maschinenbauer 3.0 · Wie das System aussieht</span>
          <h2 className={styles.h2}>
            Statt isolierter Maßnahmen entsteht ein{' '}
            <span className={styles.accentLine}>strukturierter Prozess</span>.
          </h2>
          <p className={styles.lead}>
            Aus unstrukturierten Aktivitäten wird ein durchgängiger Ablauf — von der ersten
            Sichtbarkeit bis zum übergebenen Lead oder Bewerber.
          </p>
        </motion.div>

        <motion.div
          className={styles.machineStage}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className={styles.machineRow}>
            {/* INPUT */}
            <div className={`${styles.ioCol} ${styles.input}`}>
              <h4>
                Input · <b>vorher</b>
              </h4>
              {inputs.map((t) => (
                <div key={t} className={styles.ioItem}>
                  {t}
                </div>
              ))}
            </div>

            {/* CORE MACHINE — now rendered by the shared M3CorePanel.
                Visual output is identical to the previous inline SVG. */}
            <M3CorePanel idSuffix="section03" />

            {/* OUTPUT */}
            <div className={`${styles.ioCol} ${styles.output}`}>
              <h4>
                Output · <b>nachher</b>
              </h4>
              {outputs.map((t) => (
                <div key={t} className={styles.ioItem}>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* 5-step overview */}
          <motion.div
            className={styles.overview}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {overview.map(([num, label]) => (
              <motion.div
                key={num}
                className={styles.overviewItem}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const } },
                }}
              >
                <div className={styles.overviewNum}>{num}</div>
                <div className={styles.overviewLabel}>{label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Closing statement — per brief */}
          <motion.div
            className={styles.statement}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {[
              { text: 'Keine Spielereien.', accent: false },
              { text: 'Keine unnötige Komplexität.', accent: false },
              { text: 'Sondern nachvollziehbare Struktur.', accent: true },
            ].map((s) => (
              <motion.div
                key={s.text}
                className={`${styles.statementLine} ${s.accent ? styles.accent : ''}`}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <span />
                <span>{s.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
