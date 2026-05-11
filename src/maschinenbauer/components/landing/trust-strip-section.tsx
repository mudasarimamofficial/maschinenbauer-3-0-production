/*
 * Trust strip — faithful port of the Claude static `.marquee` section
 * (Maschinenbauer 3.0 BY CLAUDE/index.html lines 1175–1192).
 *
 * The track items are duplicated in the JSX (just like the Claude source)
 * so the CSS animation `translateX(-50%)` produces a seamless infinite loop.
 * Styles live in trust-strip-section.module.css — nothing leaks out.
 */

import styles from './trust-strip-section.module.css'

type Item =
  | { kind: 'text'; text: string }
  | { kind: 'pill'; text: string }
  | { kind: 'sep'; text: string }

const items: Item[] = [
  { kind: 'text', text: 'Systematisch gedacht für Industrie, B2B und Fachkräftegewinnung' },
  { kind: 'pill', text: 'Website-Struktur' },
  { kind: 'pill', text: 'Anzeigen-System' },
  { kind: 'pill', text: 'klare Prozesse' },
  { kind: 'pill', text: 'Sichtbarkeit in Google & KI-Systemen' },
  { kind: 'sep', text: '— noll.media · Maschinenbauer 3.0 —' },
]

function Row({ keyPrefix }: { keyPrefix: string }) {
  return (
    <>
      {items.map((it, i) => (
        <span key={`${keyPrefix}-${i}`} className={styles.item}>
          {it.kind === 'pill' ? <span className={styles.pill}>{it.text}</span> : it.text}
        </span>
      ))}
    </>
  )
}

export function TrustStripSection() {
  return (
    <div className={styles.marquee} aria-label="Schwerpunkte">
      <div className={styles.track}>
        <Row keyPrefix="a" />
        {/* duplicate for seamless loop (per Claude static markup) */}
        <Row keyPrefix="b" />
      </div>
    </div>
  )
}
