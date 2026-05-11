'use client'

/*
 * Faithful port of the "04 — Schwerpunkte" section from
 * Maschinenbauer 3.0 BY CLAUDE (static index.html lines 1393–1559).
 *
 * Markup, class names, and inline SVG dashboards (lead bar chart +
 * recruiting funnel) are recreated 1:1 from the Claude source.
 * Reveal animation replicated via framer-motion `whileInView`.
 *
 * Only this file + its CSS module were touched.
 */

import { motion } from 'framer-motion'
import styles from './schwerpunkte-section.module.css'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] as const } },
}

export function SchwerpunkteSection() {
  return (
    <section id="schwerpunkte" className={styles.wrapper}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionMeta}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <b>04</b>
          <span>Schwerpunkte</span>
        </motion.div>

        <motion.div
          className={styles.sectionHead}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className={styles.eyebrow}>Zwei Systeme · Ein Fokus</span>
          <h2 className={styles.h2}>
            Unsere zwei <span className={styles.accentLine}>Schwerpunkte</span>
          </h2>
          <p className={styles.lead}>
            Zwei klar voneinander getrennte Systeme — gebaut für die zwei wichtigsten Engpässe
            industrieller B2B-Unternehmen.
          </p>
        </motion.div>

        <div className={styles.focusGrid}>
          {/* Kunden-System */}
          <motion.div
            className={`${styles.focusCard} ${styles.kunden}`}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <span className={styles.eyebrow}>System · 01</span>
            <h3>Kunden-System</h3>
            <span className={styles.goal}>Mehr passende Anfragen. Weniger Streuverlust.</span>

            {/* visual: lead/sales dashboard */}
            <div className={styles.visual}>
              <svg
                viewBox="0 0 600 340"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
              >
                <defs>
                  <linearGradient id="mb30-bar1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#c7ff00" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#c7ff00" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <rect width="600" height="340" fill="#080808" />
                <g stroke="rgba(255,255,255,.04)">
                  <line x1="0" y1="80" x2="600" y2="80" />
                  <line x1="0" y1="160" x2="600" y2="160" />
                  <line x1="0" y1="240" x2="600" y2="240" />
                  <line x1="120" y1="0" x2="120" y2="340" />
                  <line x1="240" y1="0" x2="240" y2="340" />
                  <line x1="360" y1="0" x2="360" y2="340" />
                  <line x1="480" y1="0" x2="480" y2="340" />
                </g>
                {/* header */}
                <text x="24" y="34" fontFamily="JetBrains Mono" fontSize="10" fill="#a0a0a0" letterSpacing="2">
                  LEADS / WEEK
                </text>
                <text x="24" y="58" fontFamily="Inter Tight" fontWeight="700" fontSize="22" fill="#fff">
                  +38%
                </text>
                <text x="100" y="58" fontFamily="JetBrains Mono" fontSize="10" fill="#c7ff00">
                  qualifiziert
                </text>
                {/* bars */}
                <rect x="40" y="200" width="22" height="80" fill="#1a1a1a" />
                <rect x="80" y="180" width="22" height="100" fill="#1a1a1a" />
                <rect x="120" y="160" width="22" height="120" fill="#1a1a1a" />
                <rect x="160" y="140" width="22" height="140" fill="#272727" />
                <rect x="200" y="120" width="22" height="160" fill="#272727" />
                <rect x="240" y="100" width="22" height="180" fill="url(#mb30-bar1)" />
                <rect x="280" y="80" width="22" height="200" fill="url(#mb30-bar1)" />
                <rect x="320" y="70" width="22" height="210" fill="url(#mb30-bar1)" />
                <rect x="360" y="60" width="22" height="220" fill="url(#mb30-bar1)" />
                <rect x="400" y="50" width="22" height="230" fill="url(#mb30-bar1)" />
                <rect x="440" y="40" width="22" height="240" fill="url(#mb30-bar1)" />
                <rect x="480" y="35" width="22" height="245" fill="url(#mb30-bar1)" />
                {/* trend line */}
                <path
                  d="M51 240 L91 220 L131 200 L171 180 L211 160 L251 140 L291 120 L331 110 L371 100 L411 90 L451 80 L491 75"
                  stroke="#c7ff00"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="3 3"
                />
                {/* right side labels */}
                <g fontFamily="JetBrains Mono" fontSize="9" fill="#a0a0a0">
                  <text x="540" y="80">240</text>
                  <text x="540" y="160">160</text>
                  <text x="540" y="240">80</text>
                </g>
                {/* glow circle */}
                <circle cx="491" cy="75" r="6" fill="#c7ff00" />
                <circle cx="491" cy="75" r="14" fill="#c7ff00" opacity="0.2" />
              </svg>
            </div>

            <h4>Was wir tun</h4>
            <ul>
              <li>Website strategisch neu aufbauen</li>
              <li>Anzeigen auf relevante Suchanfragen ausrichten</li>
              <li>Anfragen strukturiert erfassen</li>
              <li>Vertrieb mit klaren Entscheidungsgrundlagen versorgen</li>
            </ul>

            <div className={styles.results}>
              <h4>Ergebnis</h4>
              <ul>
                <li>bessere Leads</li>
                <li>weniger unpassende Anfragen</li>
                <li>mehr Planbarkeit im Vertrieb</li>
              </ul>
            </div>
          </motion.div>

          {/* Mitarbeiter-System */}
          <motion.div
            className={`${styles.focusCard} ${styles.mitarbeiter}`}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1 }}
          >
            <span className={styles.eyebrow}>System · 02</span>
            <h3>Mitarbeiter-System</h3>
            <span className={styles.goal}>Mehr passende Bewerbungen.</span>

            {/* visual: recruiting pipeline */}
            <div className={styles.visual}>
              <svg
                viewBox="0 0 600 340"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
              >
                <rect width="600" height="340" fill="#080808" />
                <g stroke="rgba(255,255,255,.04)">
                  <line x1="0" y1="80" x2="600" y2="80" />
                  <line x1="0" y1="200" x2="600" y2="200" />
                  <line x1="150" y1="0" x2="150" y2="340" />
                  <line x1="300" y1="0" x2="300" y2="340" />
                  <line x1="450" y1="0" x2="450" y2="340" />
                </g>
                {/* header */}
                <text x="24" y="34" fontFamily="JetBrains Mono" fontSize="10" fill="#a0a0a0" letterSpacing="2">
                  RECRUITING PIPELINE
                </text>
                <text x="24" y="58" fontFamily="Inter Tight" fontWeight="700" fontSize="22" fill="#fff">
                  2× passende
                </text>
                <text x="160" y="58" fontFamily="JetBrains Mono" fontSize="10" fill="#c7ff00">
                  bewerber
                </text>

                {/* funnel stages */}
                <g fontFamily="JetBrains Mono" fontSize="9" fill="#a0a0a0" letterSpacing="1">
                  <text x="80" y="110">REICHWEITE</text>
                  <text x="225" y="110">SICHTUNG</text>
                  <text x="370" y="110">INTERVIEW</text>
                  <text x="510" y="110">EINSTELLUNG</text>
                </g>

                {/* funnel boxes */}
                <rect x="30" y="130" width="120" height="170" rx="6" fill="#0d0d0d" stroke="#272727" />
                <rect x="180" y="150" width="120" height="130" rx="6" fill="#0d0d0d" stroke="#272727" />
                <rect x="330" y="170" width="120" height="90" rx="6" fill="#0d0d0d" stroke="#c7ff00" strokeOpacity="0.3" />
                <rect x="480" y="190" width="100" height="50" rx="6" fill="rgba(199,255,0,0.1)" stroke="#c7ff00" />

                {/* counts */}
                <text x="90" y="220" fontFamily="Inter Tight" fontWeight="700" fontSize="28" fill="#fff" textAnchor="middle">412</text>
                <text x="240" y="220" fontFamily="Inter Tight" fontWeight="700" fontSize="28" fill="#fff" textAnchor="middle">86</text>
                <text x="390" y="220" fontFamily="Inter Tight" fontWeight="700" fontSize="28" fill="#c7ff00" textAnchor="middle">24</text>
                <text x="530" y="220" fontFamily="Inter Tight" fontWeight="700" fontSize="22" fill="#c7ff00" textAnchor="middle">7</text>

                {/* mini bars in boxes */}
                <g fill="#1a1a1a">
                  <rect x="40" y="245" width="100" height="3" />
                  <rect x="40" y="252" width="80" height="3" />
                  <rect x="40" y="259" width="60" height="3" />
                </g>
                <g fill="#272727">
                  <rect x="190" y="240" width="100" height="3" />
                  <rect x="190" y="247" width="70" height="3" />
                </g>
                <rect x="340" y="235" width="100" height="3" fill="#c7ff00" opacity="0.5" />
                <rect x="340" y="242" width="70" height="3" fill="#c7ff00" opacity="0.5" />

                {/* arrows */}
                <g stroke="#c7ff00" strokeWidth="1.5" fill="none" opacity="0.5">
                  <path d="M152 215 L178 215 M174 211 L178 215 L174 219" />
                  <path d="M302 215 L328 215 M324 211 L328 215 L324 219" />
                  <path d="M452 215 L478 215 M474 211 L478 215 L474 219" />
                </g>
              </svg>
            </div>

            <h4>Was wir tun</h4>
            <ul>
              <li>Arbeitgeberpositionierung schärfen</li>
              <li>Anzeigen gezielt ausspielen</li>
              <li>Bewerbungsprozess klar strukturieren</li>
              <li>Auswahlkriterien definieren</li>
            </ul>

            <div className={styles.results}>
              <h4>Ergebnis</h4>
              <ul>
                <li>qualifiziertere Bewerber</li>
                <li>klarere Selektion</li>
                <li>weniger Unruhe im Recruiting-Prozess</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
