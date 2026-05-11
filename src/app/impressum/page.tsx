import { Header } from '@/maschinenbauer/components/header'
import { Footer } from '@/maschinenbauer/components/landing/footer'
import { MaschinenbauerConfigProvider } from '@/maschinenbauer/lib/booking'
import { getMaschinenbauerConfig } from '@/maschinenbauer/serverConfig'

export const metadata = { title: 'Impressum | noll.media' }

export default async function ImpressumPage() {
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
            Impressum
          </h1>

          <div className="space-y-10 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Angaben gemäß § 5 TMG</h2>
              <p className="leading-relaxed">
                <strong className="text-foreground">{config.company.name}</strong>
                <br />
                {config.company.street}
                <br />
                {config.company.city}
                <br />
                {config.company.country}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Kontakt</h2>
              <p className="leading-relaxed">
                Telefon:{' '}
                <a href={config.company.phoneHref} className="text-primary hover:underline">
                  {config.company.phone}
                </a>
                <br />
                E-Mail:{' '}
                <a href={config.company.emailHref} className="text-primary hover:underline">
                  {config.company.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Vertreten durch</h2>
              <p className="leading-relaxed">Geschäftsführung: [Name ergänzen]</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <p className="leading-relaxed">DE [USt-ID ergänzen]</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="leading-relaxed">
                [Name ergänzen]
                <br />
                {config.company.street}, {config.company.city}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Haftungsausschluss</h2>
              <p className="leading-relaxed">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Haftung für Links</h2>
              <p className="leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Urheberrecht</h2>
              <p className="leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
                und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors oder Erstellers.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
    </MaschinenbauerConfigProvider>
  )
}
