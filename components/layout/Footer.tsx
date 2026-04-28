'use client'

import Link from 'next/link'
import { InstagramIcon, LinkedInIcon, FacebookIcon } from '@/components/ui/SocialIcons'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', color: 'var(--ink)' }}>

      {/* ── 1. CTA Band ── */}
      <div
        className="w-full"
        style={{ background: 'var(--ink)', color: '#fff' }}
      >
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12"
          style={{ padding: '4rem 5%' }}
        >
          <p
            className="font-serif leading-none"
            style={{
              fontStyle: 'italic',
              fontSize: 'clamp(3rem, 6vw, 7rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Got a good idea?
          </p>

          <a
            href="mailto:dubaiis@goodidea.ae"
            className="self-start md:self-auto inline-block font-sans-bold uppercase tracking-widest transition-colors duration-200"
            style={{
              fontSize: '0.875rem',
              letterSpacing: '0.12em',
              border: '1px solid rgba(255,255,255,0.4)',
              padding: '1rem 2rem',
              color: '#fff',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = '#fff'
              el.style.background = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(255,255,255,0.4)'
              el.style.background = 'transparent'
            }}
          >
            START A PROJECT →
          </a>
        </div>
      </div>

      {/* ── 2. Middle info row ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ padding: '4rem 5%', borderTop: '1px solid var(--ink-20)' }}
      >
        {/* Col 1 — Contact */}
        <div
          className="pb-10 md:pb-0 md:pr-10"
          style={{ borderBottom: '1px solid var(--ink-20)' }}
        >
          <p
            className="font-sans-bold uppercase tracking-widest mb-5"
            style={{ fontSize: '0.75rem', color: 'var(--ink-60)' }}
          >
            Contact
          </p>
          <address className="not-italic" style={{ fontStyle: 'normal' }}>
            <a
              href="mailto:dubaiis@goodidea.ae"
              className="block font-sans hover:opacity-60 transition-opacity duration-200 mb-1"
              style={{ color: 'var(--ink)', fontSize: '0.9375rem' }}
            >
              dubaiis@goodidea.ae
            </a>
            <a
              href="tel:+971501350609"
              className="block font-sans hover:opacity-60 transition-opacity duration-200 mb-4"
              style={{ color: 'var(--ink)', fontSize: '0.9375rem' }}
            >
              +971 50 135 0609
            </a>
            <p
              className="font-sans leading-relaxed"
              style={{ color: 'var(--ink)', fontSize: '0.9375rem', opacity: 0.7 }}
            >
              1705, Al Manara Tower,<br />
              Business Bay, Dubai
            </p>
          </address>
        </div>

        {/* Col 2 — Services */}
        <div
          className="py-10 md:py-0 md:px-10 md:border-l md:border-r"
          style={{
            borderTop: '1px solid var(--ink-20)',
            borderBottom: '1px solid var(--ink-20)',
          }}
        >
          <p
            className="font-sans-bold uppercase tracking-widest mb-5"
            style={{ fontSize: '0.75rem', color: 'var(--ink-60)' }}
          >
            Services
          </p>
          <ul className="flex flex-col gap-2">
            {[
              'Brand Identity',
              'Brand Strategy',
              'Social Media',
              'Naming',
              'Tone of Voice',
              'Website Design',
            ].map((service) => (
              <li
                key={service}
                className="font-sans"
                style={{ color: 'var(--ink)', fontSize: '0.9375rem', opacity: 0.85 }}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Follow */}
        <div
          className="pt-10 md:pt-0 md:pl-10"
          style={{ borderTop: '1px solid var(--ink-20)' }}
        >
          <p
            className="font-sans-bold uppercase tracking-widest mb-5"
            style={{ fontSize: '0.75rem', color: 'var(--ink-60)' }}
          >
            Follow
          </p>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="https://www.instagram.com/goodideadubai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-60 transition-opacity duration-200"
                style={{ gap: '0.75rem', color: 'var(--ink)' }}
              >
                <InstagramIcon width={20} height={20} />
                <span className="font-sans" style={{ fontSize: '0.9375rem' }}>
                  @goodideadubai
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/goodideadubai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-60 transition-opacity duration-200"
                style={{ gap: '0.75rem', color: 'var(--ink)' }}
              >
                <LinkedInIcon width={20} height={20} />
                <span className="font-sans" style={{ fontSize: '0.9375rem' }}>
                  Goodidea Dubai
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/goodideadubai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-60 transition-opacity duration-200"
                style={{ gap: '0.75rem', color: 'var(--ink)' }}
              >
                <FacebookIcon width={20} height={20} />
                <span className="font-sans" style={{ fontSize: '0.9375rem' }}>
                  goodideadubai
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── 3. Giant wordmark row ── */}
      <div
        className="overflow-hidden select-none"
        style={{ borderTop: '1px solid var(--ink-20)' }}
        aria-hidden
      >
        <p
          className="font-serif leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(8rem, 18vw, 22rem)',
            fontWeight: 900,
            fontStyle: 'italic',
            letterSpacing: '-0.04em',
            color: 'var(--ink)',
            opacity: 0.08,
            lineHeight: 0.9,
            paddingLeft: '2%',
          }}
        >
          goodidea
        </p>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid var(--ink-20)' }}>
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ padding: '1.5rem 5%' }}
        >
          <p
            className="font-sans"
            style={{ fontSize: '0.75rem', color: 'var(--ink-60)' }}
          >
            © 2025 Goodidea FZ LLC. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            {[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Sitemap', href: '/sitemap.xml' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans hover:opacity-100 transition-opacity duration-200"
                style={{ fontSize: '0.75rem', color: 'var(--ink-60)', opacity: 0.7 }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

    </footer>
  )
}
