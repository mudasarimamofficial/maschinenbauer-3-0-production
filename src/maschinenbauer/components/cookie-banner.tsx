'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'mb30-cookie-consent'

export function CookieBanner() {
  const [show, setShow] = useState(true)
  const [settings, setSettings] = useState(false)
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false })

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setShow(false)
    } catch {
      setShow(true)
    }
  }, [])

  const persist = (consent: { necessary: true; analytics: boolean; marketing: boolean }) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...consent, ts: new Date().toISOString() })
      )
    } catch {}
    setShow(false)
  }

  const acceptAll = () => persist({ necessary: true, analytics: true, marketing: true })
  const necessaryOnly = () => persist({ necessary: true, analytics: false, marketing: false })
  const saveSettings = () =>
    persist({ necessary: true, analytics: prefs.analytics, marketing: prefs.marketing })

  if (!show) return null

  return (
        <div
          className="fixed bottom-0 inset-x-0 z-[60] p-3 sm:p-5"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie-Einstellungen"
        >
          <div className="max-w-3xl mx-auto bg-card/95 border border-border rounded-xl shadow-2xl backdrop-blur-xl p-5 sm:p-7">
            <div className="flex items-start gap-3 mb-4">
              <div className="hidden sm:flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary font-mono text-xs flex-shrink-0">
                Cs
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5">
                  Cookies & Datenschutz
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Wir verwenden Cookies, um unsere Website zu optimieren und Inhalte besser
                  auszuspielen. Du kannst selbst entscheiden, welche Cookies du zulassen möchtest.
                </p>
              </div>
            </div>

            {!settings ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4">
                <button
                  onClick={acceptAll}
                  className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:shadow-[0_0_18px_-4px] hover:shadow-primary/60 transition-shadow"
                >
                  Alle akzeptieren
                </button>
                <button
                  onClick={necessaryOnly}
                  className="px-5 py-2.5 rounded-md border border-border text-foreground text-sm font-semibold hover:bg-secondary transition-colors"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={() => setSettings(true)}
                  className="px-5 py-2.5 rounded-md border border-border/60 text-muted-foreground text-sm font-semibold hover:text-foreground hover:bg-secondary/60 transition-colors"
                >
                  Einstellungen
                </button>
              </div>
            ) : (
              <div className="mt-4 pt-4 border-t border-border space-y-3">
                <Row label="Notwendige Cookies" sub="Für Grundfunktionen erforderlich." checked disabled />
                <Row
                  label="Analytics"
                  sub="Hilft uns, die Seite zu verbessern."
                  checked={prefs.analytics}
                  onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
                />
                <Row
                  label="Marketing"
                  sub="Für relevantere Inhalte und Anzeigen."
                  checked={prefs.marketing}
                  onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3">
                  <button
                    onClick={saveSettings}
                    className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold"
                  >
                    Auswahl speichern
                  </button>
                  <button
                    onClick={() => setSettings(false)}
                    className="px-5 py-2.5 rounded-md border border-border text-foreground text-sm font-semibold hover:bg-secondary transition-colors"
                  >
                    Zurück
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
  )
}

function Row({
  label,
  sub,
  checked,
  disabled,
  onChange,
}: {
  label: string
  sub: string
  checked: boolean
  disabled?: boolean
  onChange?: (v: boolean) => void
}) {
  return (
    <label className="flex items-start justify-between gap-4 rounded-md px-3 py-2.5 bg-secondary/30 border border-border/40">
      <div>
        <div className="text-sm font-medium text-foreground">{label}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 accent-primary cursor-pointer disabled:cursor-not-allowed"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
    </label>
  )
}
