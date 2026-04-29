'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/data/site'
import AnimatedLogo from '@/components/ui/AnimatedLogo'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 80)
      if (progressRef.current) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
        progressRef.current.style.transform = `scaleX(${progress / 100})`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        zIndex: 100,
        transition: 'background-color 0.4s ease, border-color 0.4s ease',
        backgroundColor: scrolled ? '#F8F5F0' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(17,31,42,0.12)' : '1px solid transparent',
      }}>
        {/* Scroll progress bar */}
        <div
          ref={progressRef}
          aria-hidden
          style={{
            position: 'absolute',
            bottom: 0, left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: '#E85D26',
            transformOrigin: 'left center',
            transform: 'scaleX(0)',
            opacity: scrolled ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 1,
          }}
        />

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
          padding: '0 clamp(1.25rem, 5%, 5rem)',
        }}>
          {/* Logo */}
          <Link
            href="/"
            aria-label="Goodidea — home"
            style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}
          >
            <AnimatedLogo
              style={{ height: '22px', width: 'auto' }}
            />
          </Link>

          {/* Desktop nav — hidden on mobile via CSS class */}
          <nav
            className="hdr-desktop-nav"
            aria-label="Main navigation"
            style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: isActive ? '#E85D26' : '#111F2A',
                    opacity: isActive ? 1 : 0.65,
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = isActive ? '1' : '0.65' }}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#111F2A',
                border: '1px solid rgba(17,31,42,0.5)',
                padding: '0.55rem 1.1rem',
                textDecoration: 'none',
                transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = '#E85D26'
                el.style.borderColor = '#E85D26'
                el.style.color = '#fff'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = 'transparent'
                el.style.borderColor = 'rgba(17,31,42,0.5)'
                el.style.color = '#111F2A'
              }}
            >
              Start Project
            </Link>
          </nav>

          {/* Hamburger — hidden on desktop via CSS class */}
          <button
            className="hdr-hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              marginRight: '-0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden>
              <rect x="0" y="0"    width="24" height="1.5" rx="1" fill="#111F2A" />
              <rect x="4" y="6.25" width="20" height="1.5" rx="1" fill="#111F2A" />
              <rect x="0" y="12.5" width="24" height="1.5" rx="1" fill="#111F2A" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />

      {/* Responsive visibility — only these two rules needed */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hdr-desktop-nav { display: none; }
        .hdr-hamburger    { display: flex;  }

        @media (min-width: 768px) {
          .hdr-desktop-nav { display: flex; }
          .hdr-hamburger    { display: none; }
        }
      ` }} />
    </>
  )
}
