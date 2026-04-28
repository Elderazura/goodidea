'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '@/data/site'
import AnimatedLogo from '@/components/ui/AnimatedLogo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 80)

      // Update progress bar
      if (progressRef.current) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
        progressRef.current.style.transform = `scaleX(${progress / 100})`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          transition: 'background-color 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.4s cubic-bezier(0.16,1,0.3,1)',
          backgroundColor: scrolled ? 'var(--bg)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--ink-20)' : '1px solid transparent',
        }}
      >
        {/* Scroll progress bar */}
        <div
          ref={progressRef}
          aria-hidden
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: '#E85D26',
            transformOrigin: 'left center',
            transform: 'scaleX(0)',
            opacity: scrolled ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 clamp(1.5rem, 5%, 5%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 'var(--header-height, 72px)',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Goodidea — go to home"
            style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}
          >
            <span className="header-logo-wrap">
              <AnimatedLogo className="header-logo-svg" />
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="desktop-nav"
            role="navigation"
            aria-label="Main navigation"
            style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={isActive}
                />
              )
            })}

            {/* START PROJECT button */}
            <Link
              href="/contact"
              className="start-project-btn"
              aria-label="Start a project with Goodidea"
            >
              START PROJECT
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={false}
            aria-controls="mobile-menu"
          >
            <HamburgerIcon />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />

      <style jsx>{`
        .header-logo-wrap {
          display: flex;
          align-items: center;
        }

        :global(.header-logo-svg) {
          height: 28px;
          width: auto;
        }

        .desktop-nav {
          display: none;
        }

        .hamburger-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          margin-right: -0.5rem;
        }

        .start-project-btn {
          font-family: inherit;
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink);
          border: 1px solid var(--ink);
          padding: 0.6rem 1.25rem;
          text-decoration: none;
          transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
          white-space: nowrap;
        }

        .start-project-btn:hover {
          background-color: var(--accent);
          border-color: var(--accent);
          color: #fff;
        }

        @media (min-width: 768px) {
          header {
            --header-height: 72px;
          }

          .desktop-nav {
            display: flex;
          }

          .hamburger-btn {
            display: none;
          }

          :global(.header-logo-svg) {
            height: 28px;
          }
        }

        @media (max-width: 767px) {
          header {
            --header-height: 64px;
          }

          :global(.header-logo-svg) {
            height: 24px;
          }
        }
      `}</style>
    </>
  )
}

/* ─── Desktop nav link with animated underline ─── */

interface NavLinkProps {
  href: string
  label: string
  isActive: boolean
}

function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <Link href={href} className={`nav-link${isActive ? ' nav-link--active' : ''}`}>
      {label.toUpperCase()}
      <style jsx>{`
        .nav-link {
          position: relative;
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink);
          opacity: ${isActive ? '1' : '0.7'};
          text-decoration: none;
          transition: opacity 0.2s ease;
          padding-bottom: 2px;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--accent);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link:hover {
          opacity: 1;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-link--active::after {
          display: none;
        }
      `}</style>
    </Link>
  )
}

/* ─── Hamburger icon (3 lines → X via Framer Motion) ─── */

interface HamburgerIconProps {
  isOpen?: boolean
}

function HamburgerIcon({ isOpen = false }: HamburgerIconProps) {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      aria-hidden="true"
    >
      <motion.rect
        x="0"
        width="24"
        height="1.5"
        fill="var(--ink)"
        animate={
          isOpen
            ? { y: 7.25, rotate: 45 }
            : { y: 0, rotate: 0 }
        }
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: '50%', originY: '50%' }}
      />
      <motion.rect
        x="0"
        y="7.25"
        width="24"
        height="1.5"
        fill="var(--ink)"
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      />
      <motion.rect
        x="0"
        y="14.5"
        width="24"
        height="1.5"
        fill="var(--ink)"
        animate={
          isOpen
            ? { y: 7.25 - 14.5, rotate: -45 }
            : { y: 0, rotate: 0 }
        }
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: '50%', originY: '50%' }}
      />
    </svg>
  )
}

/* ─── Mobile full-screen menu ─── */

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  pathname: string
}

function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--bg)',
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem clamp(1.5rem, 5%, 5%)',
          }}
        >
          {/* Header row inside overlay */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '64px',
              flexShrink: 0,
            }}
          >
            <Link
              href="/"
              aria-label="Goodidea — go to home"
              onClick={onClose}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <AnimatedLogo className="header-logo-svg" />
            </Link>

            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                marginRight: '-0.5rem',
              }}
            >
              <HamburgerIcon isOpen />
            </button>
          </div>

          {/* Nav items */}
          <nav
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    style={{
                      display: 'block',
                      fontSize: '2.5rem',
                      fontWeight: 400,
                      color: isActive ? 'var(--accent)' : 'var(--ink)',
                      textDecoration: 'none',
                      lineHeight: 1.2,
                      padding: '0.25rem 0',
                      fontFamily: 'inherit',
                    }}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.3 }}
            style={{ paddingBottom: '2rem', flexShrink: 0 }}
          >
            <Link
              href="/contact"
              onClick={onClose}
              style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                border: '1px solid var(--ink)',
                padding: '0.6rem 1.25rem',
                textDecoration: 'none',
              }}
            >
              START PROJECT
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
