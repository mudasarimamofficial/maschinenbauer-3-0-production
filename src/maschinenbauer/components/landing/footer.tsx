'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { NollLogo } from '@/maschinenbauer/components/brand/noll-logo'
import { useMaschinenbauerConfig } from '@/maschinenbauer/lib/booking'

export function Footer() {
  const { company } = useMaschinenbauerConfig()

  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo + tagline */}
          <div className="md:col-span-5">
            <Link href="/" aria-label="noll.media — Startseite" className="inline-block">
              <NollLogo className="h-14 w-auto" />
            </Link>
            <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
              Maschinenbauer 3.0 — Systeme aus Website, Anzeigen und klaren Prozessen für planbare
              Kunden- und Mitarbeitergewinnung.
            </p>
          </div>

          {/* Kontakt */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-mono text-muted-foreground mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-foreground">
                <Phone size={15} className="text-primary mt-1 flex-shrink-0" />
                <a href={company.phoneHref} className="hover:text-primary transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Mail size={15} className="text-primary mt-1 flex-shrink-0" />
                <a href={company.emailHref} className="hover:text-primary transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={15} className="text-primary mt-1 flex-shrink-0" />
                <span>
                  {company.street} <span className="text-muted-foreground/60">|</span> {company.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-mono text-muted-foreground mb-4">
              Rechtliches
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/impressum" className="text-foreground hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-foreground hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.</p>
          <p className="font-mono tracking-wide">Maschinenbauer 3.0 · System v3.0</p>
        </div>
      </div>
    </footer>
  )
}
