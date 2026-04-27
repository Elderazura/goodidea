import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  href: string
  children: React.ReactNode
  mode?: 'dark' | 'light'
  className?: string
  external?: boolean
}

export default function Button({ href, children, mode = 'dark', className, external }: ButtonProps) {
  const isDark = mode === 'dark'

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 px-8 py-4 font-gotham-bold text-sm uppercase tracking-widest transition-opacity hover:opacity-80',
        isDark ? 'bg-dark text-light' : 'bg-light text-dark',
        className
      )}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  )
}
