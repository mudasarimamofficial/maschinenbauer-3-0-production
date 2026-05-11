import { Header } from '@/maschinenbauer/components/header'
import { Footer } from '@/maschinenbauer/components/landing/footer'
import { MaschinenbauerConfigProvider } from '@/maschinenbauer/lib/booking'
import { getMaschinenbauerConfig } from '@/maschinenbauer/serverConfig'

export const metadata = { title: 'Datenschutz | noll.media' }

export default async function DatenschutzPage() {
  const config = await getMaschinenbauerConfig()

  return (
    <MaschinenbauerConfigProvider config={config}>
    <main className="bg-background min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.22em] font-mono text-primary mb-3">
            Rechtliches
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-10 tracking-tight">
            Datenschutz
          </h1>

          <div className="space-y-10 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Überblick</h2>
              <p className="leading-relaxed">
                Wir nehmen den Schutz deiner personenbezogenen Daten ernst und behandeln sie
                vertraulich entsprechend den gesetzlichen Datenschutzvorschriften und dieser
                Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Verantwortliche Stelle</h2>
              <p className="leading-relaxed">
                <strong className="text-foreground">{config.company.name}</strong>
                <br />
                {config.company.street}, {config.company.city}
                <br />
                E-Mail:{' '}
                <a href={config.company.emailHref} className="text-primary hover:underline">
                  {config.company.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Erhobene Daten</h2>
              <p className="leading-relaxed mb-3">
                Wir erheben personenbezogene Daten nur, wenn du sie uns aktiv mitteilst oder es für die
                Funktion der Website notwendig ist.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Kontaktinformationen (Name, E-Mail, Telefon) aus Formularen oder per Mail</li>
                <li>Cookie-Einstellungen (lokal gespeicherte Einwilligung)</li>
                <li>Server-Logs (IP-Adresse, Browser, Zeitstempel)</li>
                <li>Optional: Analytics, falls aktiviert</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Zweck der Verarbeitung</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Bearbeitung deiner Anfragen</li>
                <li>Betrieb und Optimierung unserer Website</li>
                <li>Gesetzliche Aufbewahrungspflichten</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Weitergabe an Dritte</h2>
              <p className="leading-relaxed">
                Eine Weitergabe an Dritte erfolgt nur, wenn dies für die Vertragserfüllung erforderlich
                ist oder du eingewilligt hast.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Cookies</h2>
              <p className="leading-relaxed">
                Wir verwenden Cookies, um die Website zu betreiben und Inhalte zu verbessern. Du kannst
                im Cookie-Banner selbst entscheiden, welche Cookies du zulässt. Notwendige Cookies sind
                für den Betrieb der Seite erforderlich.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Deine Rechte</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Auskunft über gespeicherte Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung („Recht auf Vergessenwerden&quot;)</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerspruch</li>
                <li>Beschwerde bei der zuständigen Aufsichtsbehörde</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Kontakt</h2>
              <p className="leading-relaxed">
                Fragen zum Datenschutz richtest du bitte an{' '}
                <a href={config.company.emailHref} className="text-primary hover:underline">
                  {config.company.email}
                </a>
                .
              </p>
            </section>

            <p className="text-xs text-muted-foreground pt-6 border-t border-border">
              Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
    </MaschinenbauerConfigProvider>
  )
}
