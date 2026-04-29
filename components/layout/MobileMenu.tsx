'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '@/data/site'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  pathname: string
}

export default function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 190,
              backgroundColor: 'rgba(17,31,42,0.45)',
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
            }}
            aria-hidden="true"
          />

          {/* Drawer panel — slides in from right, 82% width max 340px */}
          <motion.div
            key="drawer"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: 'min(82vw, 340px)',
              zIndex: 200,
              backgroundColor: '#F8F5F0',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              boxShadow: '-8px 0 32px rgba(17,31,42,0.18)',
            }}
          >
            {/* ── Close button row ── */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '1.1rem 1.25rem',
              borderBottom: '1px solid rgba(17,31,42,0.08)',
              flexShrink: 0,
            }}>
              <button
                onClick={onClose}
                aria-label="Close menu"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#111F2A',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                  <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
                padding: '2rem 1.5rem 1.5rem',
                gap: 0,
              }}
            >
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: 0.06 + i * 0.055,
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontStyle: 'italic',
                        fontWeight: 700,
                        fontSize: '1.75rem',
                        lineHeight: 1.15,
                        color: isActive ? '#E85D26' : '#111F2A',
                        textDecoration: 'none',
                        padding: '0.8rem 0',
                        borderBottom: '1px solid rgba(17,31,42,0.07)',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {link.label}
                      {isActive && (
                        <span style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: '#E85D26',
                          flexShrink: 0,
                          marginLeft: '0.75rem',
                        }} />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* ── Footer strip ── */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: navLinks.length * 0.055 + 0.12, duration: 0.3 }}
              style={{
                flexShrink: 0,
                padding: '1.25rem 1.5rem',
                borderTop: '1px solid rgba(17,31,42,0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <Link
                href="/contact"
                onClick={onClose}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#F8F5F0',
                  backgroundColor: '#111F2A',
                  padding: '0.85rem 1.25rem',
                  textDecoration: 'none',
                }}
              >
                Start a Project →
              </Link>

              <a
                href="mailto:dubaiis@goodidea.ae"
                style={{
                  textAlign: 'center',
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.72rem',
                  color: 'rgba(17,31,42,0.4)',
                  textDecoration: 'none',
                }}
              >
                dubaiis@goodidea.ae
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
