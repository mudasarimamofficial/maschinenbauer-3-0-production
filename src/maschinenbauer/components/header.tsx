'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NollLogo } from '@/maschinenbauer/components/brand/noll-logo'
import { useMaschinenbauerConfig } from '@/maschinenbauer/lib/booking'

const navItems = [
  { label: 'Problem', href: '/#problem' },
  { label: 'System', href: '/#system' },
  { label: 'Schwerpunkte', href: '/#schwerpunkte' },
  { label: 'Ablauf', href: '/#ablauf' },
  { label: 'FAQ', href: '/#faq' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { bookingUrl, bookingLabel } = useMaschinenbauerConfig()

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-xl border-b border-border/60" />

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        <Link href="/" aria-label="noll.media — Startseite" className="flex-shrink-0">
          <NollLogo className="h-9 sm:h-10 w-auto" priority />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={bookingUrl}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:shadow-[0_0_24px_-4px] hover:shadow-primary/60 transition-shadow"
          >
            {bookingLabel}
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
          className="md:hidden p-2 -mr-2 text-foreground rounded-md hover:bg-secondary transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full inset-x-0 bg-background/95 backdrop-blur-xl border-b border-border/60"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-foreground hover:bg-secondary rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={bookingUrl}
                onClick={() => setOpen(false)}
                className="block mt-3 px-4 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-center"
              >
                {bookingLabel}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
