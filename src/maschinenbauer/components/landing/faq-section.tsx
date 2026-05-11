'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Baut ihr nur eine neue Website oder schaltet nur Anzeigen?',
    a: 'Nein. Wir entwickeln kein Einzelprojekt, sondern ein System. Eine neue Website allein bringt keine planbaren Ergebnisse. Anzeigen allein bringen keine Struktur. Erst das Zusammenspiel aus klarer Positionierung, neu aufgebauter Website, gezielten Anzeigen und strukturierten Anfragen oder Bewerbungen macht Kunden- und Mitarbeitergewinnung planbar.',
  },
  {
    q: 'Arbeitet ihr projektbasiert oder langfristig?',
    a: 'Wir setzen auf langfristige Zusammenarbeit. Ein funktionierendes System entsteht nicht in wenigen Wochen und bleibt dann unverändert bestehen. Märkte, Anzeigenpreise und Anforderungen verändern sich. Deshalb arbeiten wir in der Regel mindestens 12 Monate zusammen.',
  },
  {
    q: 'Warum reicht eine neue Website nicht aus?',
    a: 'Weil eine Website nur ein Baustein ist. Ohne gezielte Reichweite, klare Zielgruppenansprache, strukturierte Anfrageführung und definierte interne Abläufe bleibt sie eine digitale Broschüre.',
  },
  {
    q: 'Berücksichtigt ihr auch neue KI-Suchsysteme?',
    a: 'Ja. Moderne Sichtbarkeit endet nicht bei Google. Wir achten darauf, dass Inhalte strukturiert, klar und maschinenlesbar aufgebaut sind, damit sie auch in KI-basierten Suchumgebungen berücksichtigt werden.',
  },
  {
    q: 'Wie stark bin ich intern eingebunden?',
    a: 'Zu Beginn benötigen wir fachlichen Input im Onboarding. Wir müssen Leistungen, Zielkunden, Prozesse und interne Anforderungen verstehen. Danach übernehmen wir Strategie, Aufbau und Optimierung mit klaren Abstimmungen.',
  },
  {
    q: 'Für wen ist euer Ansatz nicht geeignet?',
    a: 'Nicht geeignet ist unser Ansatz für Unternehmen, die nur mehr Reichweite wollen, ausschließlich ein Design-Update suchen oder kurzfristige Kampagnen ohne strategischen Aufbau erwarten.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] font-mono text-primary mb-4">
            09 — FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Häufig gestellte Fragen
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`rounded-xl border bg-card/60 overflow-hidden transition-colors ${
                  isOpen ? 'border-primary/40' : 'border-border'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 px-5 sm:px-7 py-5 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-primary tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-foreground">{f.q}</span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 h-8 w-8 rounded-md border flex items-center justify-center ${
                      isOpen
                        ? 'border-primary/40 text-primary bg-primary/10'
                        : 'border-border text-muted-foreground'
                    }`}
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-6 pt-1 text-muted-foreground leading-relaxed border-t border-border/40">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
