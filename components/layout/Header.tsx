'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { navLinks } from '@/data/site'
import AnimatedLogo from '@/components/ui/AnimatedLogo'
import MobileMenu from '@/components/layout/MobileMenu'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-paper transition-[border-color] duration-300 ${
          scrolled ? 'border-b border-ink/10' : 'border-b border-transparent'
        }`}
      >
        <div className="container-gi">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" aria-label="Goodidea — go to home" className="flex-shrink-0 w-36 md:w-44">
              <AnimatedLogo className="w-full h-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-label uppercase tracking-wide text-ink hover:text-ink/50 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile burger */}
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                <rect y="0"  width="24" height="2" fill="#111f2a" />
                <rect y="8"  width="24" height="2" fill="#111f2a" />
                <rect y="16" width="24" height="2" fill="#111f2a" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
