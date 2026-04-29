'use client'

import { useContactModal } from '@/context/ContactModalContext'
import { CSSProperties, ReactNode } from 'react'

interface Props {
  children?: ReactNode
  style?: CSSProperties
  className?: string
  variant?: 'dark' | 'outline' | 'accent'
}

/**
 * Drop-in replacement for <Link href="/contact"> CTA buttons.
 * Opens the global contact modal on click.
 */
export default function StartProjectButton({ children = 'Start a Project →', style, className, variant = 'dark' }: Props) {
  const { openModal } = useContactModal()

  const base: CSSProperties = {
    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
    fontSize: '0.7rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    display: 'inline-block',
    textDecoration: 'none',
    transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
    whiteSpace: 'nowrap',
  }

  const variants: Record<string, CSSProperties> = {
    dark: {
      backgroundColor: '#111F2A',
      color: '#F8F5F0',
      padding: '0.85rem 1.25rem',
    },
    outline: {
      color: '#111F2A',
      border: '1px solid rgba(17,31,42,0.5)',
      padding: '0.65rem 1.25rem',
      backgroundColor: 'transparent',
    },
    accent: {
      backgroundColor: '#E85D26',
      color: '#F8F5F0',
      padding: '1.1rem 2.75rem',
      fontSize: '0.8rem',
    },
  }

  return (
    <button
      onClick={openModal}
      className={className}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
    </button>
  )
}
