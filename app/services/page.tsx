'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/ui/Button'
import AnimatedTextCycle from '@/components/ui/animated-text-cycle'

gsap.registerPlugin(ScrollTrigger)

// SVG icons for each service
const SERVICE_ICONS: Record<string, JSX.Element> = {
  'Brand Identity': (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="11" cy="11" r="9.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
      <line x1="11" y1="2" x2="11" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="11" y1="17" x2="11" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'Brand Strategy': (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M3 19L11 4l8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="6" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'Social Media Branding': (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <circle cx="5" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="7.5" y1="9.5" x2="14.5" y2="6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="7.5" y1="12.5" x2="14.5" y2="15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'Naming & Verbal Identity': (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M4 16L11 4l7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="6.5" y1="12" x2="15.5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="11" y1="18" x2="11" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'Website Design': (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <rect x="2" y="4" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="2" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="5" cy="6" r="0.75" fill="currentColor"/>
      <circle cx="8" cy="6" r="0.75" fill="currentColor"/>
      <circle cx="11" cy="6" r="0.75" fill="currentColor"/>
    </svg>
  ),
  'Packaging & Print': (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M11 2L20 7v8L11 20 2 15V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M11 2v18M2 7l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

interface Service {
  number: string
  title: string
  description: string
  link: string
  image?: string
}

const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Brand Identity',
    description:
      'We craft visual identities that are distinctive, ownable, and built to last — from logo and typography to the full visual language of your brand.',
    link: '/contact',
    image: '/images/works/woodo-3.webp',
  },
  {
    number: '02',
    title: 'Brand Strategy',
    description:
      'We build the strategic foundations that give your brand clarity, direction, and a reason to exist — positioning, messaging, and go-to-market frameworks that work.',
    link: '/contact',
    image: '/images/works/files-3.webp',
  },
  {
    number: '03',
    title: 'Social Media Branding',
    description:
      'We define how your brand shows up online — template systems, content guidelines, and visual frameworks that keep your social presence sharp and consistent.',
    link: '/contact',
    image: '/images/works/orego-cover.webp',
  },
  {
    number: '04',
    title: 'Naming & Verbal Identity',
    description:
      'We find the words that work — brand names, taglines, and tone-of-voice guidelines that make your brand sound as distinctive as it looks.',
    link: '/contact',
    image: '/images/works/qawafil-1.webp',
  },
  {
    number: '05',
    title: 'Website Design',
    description:
      'Digital brand experiences built for performance and presence — UX-considered layouts, motion design, and development-ready handoffs that honour your identity.',
    link: '/contact',
  },
  {
    number: '06',
    title: 'Packaging & Print',
    description:
      'Physical touchpoints that command attention — packaging systems, stationery, and print collateral designed with the same rigour we bring to every brand.',
    link: '/contact',
  },
]

const WORK_TEASERS = [
  { title: 'Woodo', category: 'Brand Identity', image: '/images/works/woodo-3.webp', href: '/works/woodo' },
  { title: 'Orego', category: 'Brand Identity', image: '/images/works/orego-cover.webp', href: '/works/orego' },
  { title: 'Files', category: 'Brand Identity', image: '/images/works/files-3.webp', href: '/works/files' },
]

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const [open, setOpen] = useState(false)
  const toggle = useCallback(() => setOpen(o => !o), [])
  const icon = SERVICE_ICONS[service.title]

  return (
    <div
      className="service-item"
      style={{
        borderBottom: '1px solid rgba(17,31,42,0.15)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={toggle}
    >
      <div
        className="service-row-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '6rem 1fr auto',
          gap: '2rem',
          alignItems: 'center',
          paddingTop: '2.5rem',
          paddingBottom: '2.5rem',
        }}
      >
        {/* Number + icon */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0 }}>
          <span
            style={{
              fontFamily: "'Hepta Slab', Georgia, serif",
              
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#E85D26',
              opacity: 0.7,
            }}
          >
            {service.number}
          </span>
          <span style={{
            color: open ? '#E85D26' : 'rgba(17,31,42,0.3)',
            transition: 'color 0.35s ease',
          }}>
            {icon}
          </span>
        </div>

        {/* Title + description */}
        <div style={{ minWidth: 0 }}>
          <h2
            style={{
              fontFamily: "'Hepta Slab', Georgia, serif",
              fontWeight: 900,
              
              fontSize: 'clamp(1.75rem, 5vw, 5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: open ? '#E85D26' : '#111F2A',
              margin: 0,
              transition: 'color 0.35s ease',
            }}
          >
            {service.title}
          </h2>

          {/* Expandable description */}
          <div
            style={{
              overflow: 'hidden',
              maxHeight: open ? '8rem' : '0',
              opacity: open ? 1 : 0,
              transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease',
              marginTop: open ? '1rem' : '0',
            }}
          >
            <p
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.9375rem',
                lineHeight: 1.75,
                color: 'rgba(17,31,42,0.55)',
                margin: '0 0 0.5rem 0',
                maxWidth: '55ch',
              }}
            >
              {service.description}
            </p>
            <Link
              href={service.link}
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#E85D26',
                textDecoration: 'none',
              }}
            >
              Start this project →
            </Link>
          </div>
        </div>

        {/* Right: thumbnail + arrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexShrink: 0 }}>
          {service.image && (
            <div
              className="service-thumb"
              style={{
                width: 'clamp(80px, 10vw, 160px)',
                aspectRatio: '3/2',
                overflow: 'hidden',
                opacity: open ? 1 : 0,
                transform: open ? 'scale(1)' : 'scale(0.92)',
                transition: 'opacity 0.45s ease, transform 0.45s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
          {/* Animated plus/minus toggle */}
          <span
            style={{
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'transform 0.35s ease',
              transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
              color: open ? '#E85D26' : 'rgba(17,31,42,0.4)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <line x1="9" y1="2" x2="9" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
        </div>
      </div>

      {/* Invisible index used only for GSAP targeting */}
      <span data-index={index} style={{ display: 'none' }} />
    </div>
  )
}

export default function ServicesPage() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapRef.current) return

    const ctx = gsap.context(() => {
      // Background colour transitions between sections
      const sections = [
        { id: '#services-hero', bg: '#F8F5F0' },
        { id: '#services-list', bg: '#F8F5F0' },
        { id: '#services-works-teaser', bg: '#F8F5F0' },
        { id: '#services-insights-teaser', bg: '#F8F5F0' },
        { id: '#services-cta', bg: '#111F2A' },
      ]

      sections.forEach(({ id, bg }) => {
        const el = wrapRef.current!.querySelector(id)
        if (!el) return
        ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          onEnter: () => gsap.to(wrapRef.current, { backgroundColor: bg, duration: 0.85, ease: 'power2.out' }),
          onLeaveBack: () => {
            const idx = sections.findIndex(s => s.id === id)
            const prevBg = idx > 0 ? sections[idx - 1].bg : '#F8F5F0'
            gsap.to(wrapRef.current, { backgroundColor: prevBg, duration: 0.85, ease: 'power2.out' })
          },
        })
      })

      // Hero headline lines animate up on mount
      gsap.fromTo(
        '.hero-line',
        { y: '110%' },
        { y: '0%', duration: 1.1, ease: 'power4.out', stagger: 0.06, delay: 0.2 }
      )

      // Hero sub text
      gsap.fromTo(
        '.hero-sub',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.75 }
      )

      // Scroll reveals
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach(el => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 84%' },
          }
        )
      })

      // Service items staggered slide-in
      gsap.utils.toArray<HTMLElement>('.service-item').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
            delay: i * 0.06,
          }
        )
      })
    }, wrapRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapRef} style={{ backgroundColor: '#F8F5F0' }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="services-hero"
        className="page-hero-section"
        style={{
          background: 'transparent',
          minHeight: '100dvh',
          paddingTop: 'calc(72px + 5rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingBottom: 'clamp(4rem, 8vh, 8rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Eyebrow */}
        <p
          className="hero-sub"
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(17,31,42,0.5)',
            opacity: 0,
            margin: 0,
          }}
        >
          What We Do — Goodidea Dubai
        </p>

        {/* Giant headline */}
        <div
          style={{
            fontFamily: "'Hepta Slab', Georgia, serif",
            fontWeight: 900,
            
            fontSize: 'clamp(5rem, 13vw, 16rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.04em',
            color: '#111F2A',
            margin: 'auto 0',
          }}
        >
          <div style={{ overflow: 'hidden' }}>
            <div className="hero-line" style={{ transform: 'translateY(110%)' }}>We craft</div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div className="hero-line" style={{ transform: 'translateY(110%)' }}>
              <AnimatedTextCycle
                words={['identities', 'strategies', 'names', 'stories', 'brands']}
                interval={2800}
                style={{
                  fontFamily: "'Hepta Slab', Georgia, serif",
                  fontWeight: 900,
                  
                  fontSize: 'clamp(5rem, 13vw, 16rem)',
                  lineHeight: 0.88,
                  letterSpacing: '-0.04em',
                  color: '#E85D26',
                }}
              />
              <span style={{ color: '#E85D26' }}>.</span>
            </div>
          </div>
        </div>

        {/* Bottom row: subtext + stats */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <p
            className="hero-sub"
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '1.1rem',
              lineHeight: 1.75,
              color: 'rgba(17,31,42,0.6)',
              maxWidth: '48ch',
              margin: 0,
              opacity: 0,
            }}
          >
            Strategy first, aesthetics always. Every service we offer begins and ends with a single
            question: does this make the brand stronger?
          </p>

          <div className="hero-sub" style={{ opacity: 0, display: 'flex', gap: '3rem' }}>
            {([['6', 'Services'], ['200+', 'Brands'], ['7', 'Years']] as [string, string][]).map(([val, label]) => (
              <div key={label} style={{ textAlign: 'right' }}>
                <div
                  style={{
                    fontFamily: "'Hepta Slab', Georgia, serif",
                    fontWeight: 900,
                    
                    fontSize: '2.5rem',
                    color: '#E85D26',
                    lineHeight: 1,
                  }}
                >
                  {val}
                </div>
                <div
                  style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontSize: '0.6rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(17,31,42,0.4)',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services editorial list ──────────────────────────── */}
      <section
        id="services-list"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(5rem, 10vh, 10rem)',
          paddingBottom: 'clamp(5rem, 10vh, 10rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
        }}
      >
        {/* Section heading */}
        <div className="reveal-up" style={{ marginBottom: '4rem' }}>
          <p
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E85D26',
              marginBottom: '1rem',
            }}
          >
            Our Services
          </p>
          <h2
            style={{
              fontFamily: "'Hepta Slab', Georgia, serif",
              fontWeight: 900,
              
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: '#111F2A',
              margin: 0,
            }}
          >
            What we do best.
          </h2>
        </div>

        {/* Top border */}
        <div style={{ borderTop: '1px solid rgba(17,31,42,0.15)' }} />

        {/* Service rows */}
        {SERVICES.map((service, i) => (
          <ServiceRow key={service.number} service={service} index={i} />
        ))}
      </section>

      {/* ── Selected Work teaser ─────────────────────────────── */}
      <section
        id="services-works-teaser"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(5rem, 10vh, 10rem)',
          paddingBottom: 'clamp(5rem, 10vh, 10rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
        }}
      >
        {/* Heading row */}
        <div
          className="reveal-up"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.7rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#E85D26',
                marginBottom: '1rem',
              }}
            >
              Selected Work
            </p>
            <h2
              style={{
                fontFamily: "'Hepta Slab', Georgia, serif",
                fontWeight: 900,
                
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                color: '#111F2A',
                margin: 0,
              }}
            >
              See what strategy-led<br />design looks like.
            </h2>
          </div>
          <Link
            href="/works"
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#111F2A',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(17,31,42,0.35)',
              paddingBottom: '2px',
              whiteSpace: 'nowrap',
            }}
          >
            View All Work →
          </Link>
        </div>

        {/* Work cards */}
        <div className="works-grid">
          {WORK_TEASERS.map(work => (
            <Link
              key={work.title}
              href={work.href}
              className="work-card reveal-up"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                style={{
                  aspectRatio: '3/2',
                  overflow: 'hidden',
                  marginBottom: '1.25rem',
                  backgroundColor: '#111F2A',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="work-card-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.65s cubic-bezier(0.16,1,0.3,1)',
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Hepta Slab', Georgia, serif",
                  fontWeight: 700,
                  
                  fontSize: '1.5rem',
                  color: '#111F2A',
                  margin: '0 0 0.25rem 0',
                }}
              >
                {work.title}
              </p>
              <p
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,31,42,0.4)',
                  margin: 0,
                }}
              >
                {work.category}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Insights teaser ──────────────────────────────────── */}
      <section
        id="services-insights-teaser"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(5rem, 10vh, 10rem)',
          paddingBottom: 'clamp(5rem, 10vh, 10rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
        }}
      >
        {/* Heading */}
        <div className="reveal-up" style={{ marginBottom: '3.5rem' }}>
          <p
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E85D26',
              marginBottom: '1rem',
            }}
          >
            From Our Blog
          </p>
          <h2
            style={{
              fontFamily: "'Hepta Slab', Georgia, serif",
              fontWeight: 900,
              
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: '#111F2A',
              margin: 0,
            }}
          >
            Ideas that inform<br />how we work.
          </h2>
        </div>

        {/* Featured insight strip */}
        <Link
          href="/insights/brand-positioning-playbook"
          className="insight-strip reveal-up"
          style={{ textDecoration: 'none', display: 'block' }}
        >
          <div
            style={{
              borderTop: '1px solid rgba(17,31,42,0.15)',
              borderBottom: '1px solid rgba(17,31,42,0.15)',
              padding: 'clamp(2rem, 4vh, 4rem) 0',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              transition: 'background-color 0.35s ease',
            }}
          >
            {/* Left: title */}
            <div>
              <p
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.65rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,31,42,0.4)',
                  marginBottom: '1.25rem',
                }}
              >
                Brand Strategy
              </p>
              <h3
                style={{
                  fontFamily: "'Hepta Slab', Georgia, serif",
                  fontWeight: 900,
                  
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.02em',
                  color: '#111F2A',
                  margin: 0,
                  transition: 'color 0.35s ease',
                }}
                className="insight-title"
              >
                The Brand Positioning Playbook
              </h3>
            </div>

            {/* Right: excerpt + arrow */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
              }}
            >
              <p
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'rgba(17,31,42,0.55)',
                  margin: 0,
                }}
              >
                Positioning is the single most important strategic decision a brand can make.
                Here&apos;s the framework we use with every client to find their defensible place in the market.
              </p>
              <span
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#E85D26',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                Read the article →
              </span>
            </div>
          </div>
        </Link>

        {/* Link to all insights */}
        <div style={{ marginTop: '2.5rem', textAlign: 'right' }}>
          <Link
            href="/insights"
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#111F2A',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(17,31,42,0.35)',
              paddingBottom: '2px',
            }}
          >
            All Articles →
          </Link>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section
        id="services-cta"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(8rem, 16vh, 16rem)',
          paddingBottom: 'clamp(8rem, 16vh, 16rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2
          className="reveal-up"
          style={{
            fontFamily: "'Hepta Slab', Georgia, serif",
            fontWeight: 900,
            
            fontSize: 'clamp(3.5rem, 9vw, 10rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            margin: '0 0 3.5rem 0',
          }}
        >
          Ready to grow your brand?
        </h2>

        <div
          className="reveal-up"
          style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Button variant="primary" href="/contact" arrow>
            Start a Project
          </Button>
          <Button variant="secondary" href="/pricing">
            View Pricing
          </Button>
        </div>
      </section>

      {/* ── Styles ───────────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .works-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .work-card:hover .work-card-img {
          transform: scale(1.04);
        }
        .insight-strip:hover .insight-title {
          color: #E85D26;
        }

        @media (max-width: 900px) {
          .works-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .works-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .insight-strip > div {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      ` }} />
    </div>
  )
}
