'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '@/data/site'
import AnimatedLogo from '@/components/ui/AnimatedLogo'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  pathname: string
}

export default function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: '#F8F5F0',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          }}
        >
          {/* ── Top bar ── */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1.5rem',
            height: '64px',
            flexShrink: 0,
            borderBottom: '1px solid rgba(17,31,42,0.08)',
          }}>
            <Link href="/" onClick={onClose} aria-label="Goodidea home">
              <AnimatedLogo style={{ height: '22px', width: 'auto' }} />
            </Link>

            <button
              onClick={onClose}
              aria-label="Close menu"
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
              {/* X icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M2 2l16 16M18 2L2 18" stroke="#111F2A" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* ── Nav links ── */}
          <nav
            aria-label="Mobile navigation"
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '3rem 1.5rem',
              gap: '0.25rem',
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    style={{
                      display: 'block',
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontStyle: 'italic',
                      fontWeight: 700,
                      fontSize: 'clamp(2.75rem, 10vw, 4rem)',
                      lineHeight: 1.1,
                      color: isActive ? '#E85D26' : '#111F2A',
                      textDecoration: 'none',
                      padding: '0.4rem 0',
                      transition: 'color 0.2s ease',
                      borderBottom: '1px solid rgba(17,31,42,0.08)',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* ── Footer strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: navLinks.length * 0.06 + 0.1, duration: 0.35 }}
            style={{
              flexShrink: 0,
              padding: '1.5rem',
              borderTop: '1px solid rgba(17,31,42,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="mailto:dubaiis@goodidea.ae"
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.8rem',
                color: 'rgba(17,31,42,0.5)',
                textDecoration: 'none',
              }}
            >
              dubaiis@goodidea.ae
            </a>

            <Link
              href="/contact"
              onClick={onClose}
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#111F2A',
                border: '1px solid rgba(17,31,42,0.5)',
                padding: '0.65rem 1.25rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Start Project →
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
