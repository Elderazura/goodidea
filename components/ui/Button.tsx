import Link from 'next/link'
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
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {label}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {label}
    </button>
  )
}
