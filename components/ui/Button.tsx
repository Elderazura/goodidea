'use client'

import Link from 'next/link'
import { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  arrow?: boolean
  href?: string
  external?: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

const BASE =
  'inline-flex items-center justify-center font-gotham-bold uppercase tracking-[0.1em] ' +
  'transition-all duration-[250ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ' +
  'cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent,#E85D26)] ' +
  'disabled:opacity-40 disabled:pointer-events-none rounded-none'

const VARIANTS = {
  primary:
    'bg-[var(--ink,#111F2A)] text-white border border-[var(--ink,#111F2A)] ' +
    'hover:bg-[var(--accent,#E85D26)] hover:border-[var(--accent,#E85D26)]',
  secondary:
    'bg-transparent text-[var(--ink,#111F2A)] border border-[var(--ink,#111F2A)] ' +
    'hover:bg-[var(--ink,#111F2A)] hover:text-white',
  ghost:
    'bg-transparent text-[var(--ink,#111F2A)] opacity-60 border-0 ' +
    'hover:opacity-100 hover:underline',
}

const SIZES = {
  sm: 'px-5 py-2 text-[0.75rem]',
  md: 'px-10 py-4 text-[0.8125rem]',
  lg: 'px-12 py-5 text-[0.9375rem]',
}

/** Attaches a GSAP magnetic hover effect to a DOM element */
function useMagneticEffect(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    let xTo: ((val: number) => void) | null = null
    let yTo: ((val: number) => void) | null = null
    const cleanupFns: (() => void)[] = []

    async function init() {
      const gsapModule = await import('gsap')
      const gsap = gsapModule.default || (gsapModule as unknown as { gsap: typeof gsapModule.default }).gsap || gsapModule

      if (!el) return

      xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
      yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })

      function onMouseMove(e: MouseEvent) {
        if (!el || !xTo || !yTo) return
        const rect = el.getBoundingClientRect()
        const cx = e.clientX - rect.left - rect.width / 2
        const cy = e.clientY - rect.top - rect.height / 2
        xTo(cx * 0.3)
        yTo(cy * 0.3)
      }

      function onMouseLeave() {
        if (!xTo || !yTo) return
        xTo(0)
        yTo(0)
      }

      el.addEventListener('mousemove', onMouseMove)
      el.addEventListener('mouseleave', onMouseLeave)

      cleanupFns.push(() => {
        el.removeEventListener('mousemove', onMouseMove)
        el.removeEventListener('mouseleave', onMouseLeave)
        // Reset position
        if (xTo) xTo(0)
        if (yTo) yTo(0)
      })
    }

    init()

    return () => {
      cleanupFns.forEach(fn => fn())
    }
  }, [ref])
}

/** Internal wrapper that applies the magnetic effect */
function MagneticAnchor({
  href,
  external,
  className,
  children,
}: {
  href: string
  external?: boolean
  className: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  useMagneticEffect(ref as React.RefObject<HTMLElement | null>)

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <Link ref={ref} href={href} className={className}>
      {children}
    </Link>
  )
}

function MagneticButton({
  onClick,
  disabled,
  className,
  children,
}: {
  onClick?: () => void
  disabled?: boolean
  className: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLButtonElement>(null)
  useMagneticEffect(ref as React.RefObject<HTMLElement | null>)

  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  )
}

export default function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  href,
  external = false,
  className,
  children,
  onClick,
  disabled = false,
}: ButtonProps) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className)
  const label = (
    <>
      {children}
      {arrow && <> →</>}
    </>
  )

  if (href) {
    return (
      <MagneticAnchor href={href} external={external} className={classes}>
        {label}
      </MagneticAnchor>
    )
  }

  return (
    <MagneticButton onClick={onClick} disabled={disabled} className={classes}>
      {label}
    </MagneticButton>
  )
}
