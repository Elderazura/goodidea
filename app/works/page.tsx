'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import WorkCard from '@/components/works/WorkCard'
import { works } from '@/data/works'
import { insights } from '@/data/insights'
import AnimatedTextCycle from '@/components/ui/animated-text-cycle'

const CATEGORIES = ['All', 'Branding', 'Strategy', 'Social Media']

// Stats data
const STATS = [
  { label: 'Brands Served', target: 200, suffix: '+' },
  { label: 'Years Active', target: 7, suffix: '' },
  { label: 'Cities', target: 3, suffix: '' },
]

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const pageRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  const filtered =
    activeCategory === 'All'
      ? works
      : works.filter(w => w.category === activeCategory)

  const featured = filtered[0]
  const rest = filtered.slice(1)

  const firstInsight = insights[0]

  useEffect(() => {
    let ctx: { revert: () => void } | null = null

    async function initGsap() {
      const gsapModule = await import('gsap')
      const gsap = gsapModule.default || gsapModule.gsap || gsapModule
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // ── Hero staggered text reveal ──
        const heroLines = heroRef.current?.querySelectorAll('.hero-line-inner')
        if (heroLines && heroLines.length > 0) {
          gsap.fromTo(
            heroLines,
            { y: '115%' },
            {
              y: '0%',
              duration: 1.1,
              ease: 'power4.out',
              stagger: 0.1,
              delay: 0.2,
            }
          )
        }

        // Hero label fade in
        const heroLabel = heroRef.current?.querySelector('.hero-label')
        if (heroLabel) {
          gsap.fromTo(heroLabel, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' })
        }

        // Hero subtext fade
        const heroSub = heroRef.current?.querySelector('.hero-sub')
        if (heroSub) {
          gsap.fromTo(heroSub, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.9, delay: 0.6, ease: 'power3.out' })
        }

        // ── Stats count-up ──
        const statEls = statsRef.current?.querySelectorAll<HTMLSpanElement>('.stat-number')
        if (statEls && statEls.length > 0) {
          statEls.forEach((el, i) => {
            const target = STATS[i]?.target ?? 0
            const suffix = STATS[i]?.suffix ?? ''
            const counter = { val: 0 }
            gsap.to(counter, {
              val: target,
              duration: 1.6,
              ease: 'power2.out',
              delay: 0.3 + i * 0.15,
              scrollTrigger: {
                trigger: statsRef.current,
                start: 'top 80%',
                once: true,
              },
              onUpdate() {
                el.textContent = Math.round(counter.val) + suffix
              },
            })
          })
        }

        // ── Card scroll reveals ──
        const cards = pageRef.current?.querySelectorAll('.work-card-reveal')
        if (cards && cards.length > 0) {
          cards.forEach((card) => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 48 },
              {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 88%',
                  once: true,
                },
              }
            )
          })
        }

        // ── CTA banner reveal ──
        const ctaBanner = pageRef.current?.querySelector('.cta-banner')
        if (ctaBanner) {
          gsap.fromTo(
            ctaBanner,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ctaBanner,
                start: 'top 85%',
                once: true,
              },
            }
          )
        }

        // ── Cross-section reveal ──
        const crossItems = pageRef.current?.querySelectorAll('.cross-item')
        if (crossItems && crossItems.length > 0) {
          gsap.fromTo(
            crossItems,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.15,
              scrollTrigger: {
                trigger: crossItems[0],
                start: 'top 88%',
                once: true,
              },
            }
          )
        }
      }, pageRef)
    }

    initGsap()

    return () => {
      if (ctx) ctx.revert()
    }
  }, [])

  return (
    <div
      ref={pageRef}
      style={{
        backgroundColor: '#F8F5F0',
        minHeight: '100vh',
        paddingTop: 'calc(72px + 2rem)',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-line-wrap { overflow: hidden; display: block; }
        .hero-line-inner { display: block; will-change: transform; }
        .works-grid-2col { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; }
        .filter-tab { transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease; }
        .filter-tab:hover { border-color: #111F2A !important; }
        .cross-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; }
        @media (max-width: 768px) {
          .works-grid-2col { grid-template-columns: 1fr !important; }
          .cross-grid { grid-template-columns: 1fr !important; }
        }
        .stats-bar > div + div { border-left: 1px solid rgba(17,31,42,0.12); }
        @media (max-width: 640px) {
          .stats-bar { flex-direction: column !important; }
          .stats-bar > div + div { border-left: none !important; border-top: 1px solid rgba(17,31,42,0.12); }
        }
      `}} />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingTop: '5rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid rgba(17,31,42,0.12)',
        }}
      >
        <p
          className="hero-label"
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#E85D26',
            marginBottom: '1.5rem',
            opacity: 0,
          }}
        >
          Selected Work — Dubai / Riyadh / London
        </p>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(3.5rem, 9vw, 9rem)',
            lineHeight: 0.95,
            color: '#111F2A',
            margin: '0 0 2rem 0',
            letterSpacing: '-0.02em',
          }}
        >
          {['What', "we've"].map((word, i) => (
            <span key={i} className="hero-line-wrap" style={{ display: 'block' }}>
              <span className="hero-line-inner">{word}</span>
            </span>
          ))}
          <span className="hero-line-wrap" style={{ display: 'block' }}>
            <span className="hero-line-inner">
              <AnimatedTextCycle
                words={['built.', 'created.', 'crafted.', 'shaped.']}
                interval={3000}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 900,
                  fontStyle: 'italic',
                  fontSize: 'clamp(3.5rem, 9vw, 9rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  color: '#E85D26',
                }}
              />
            </span>
          </span>
        </h1>

        <p
          className="hero-sub"
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'rgba(17,31,42,0.55)',
            maxWidth: '52ch',
            lineHeight: 1.7,
            opacity: 0,
          }}
        >
          Branding, strategy, and identity work for UAE and global brands.
          Every project is a conversation between craft and purpose.
        </p>
      </section>

      {/* ── STATS BAR ── */}
      <section
        ref={statsRef}
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          borderBottom: '1px solid rgba(17,31,42,0.12)',
        }}
      >
        <div
          className="stats-bar"
          style={{
            display: 'flex',
            alignItems: 'stretch',
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <span
                className="stat-number"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontStyle: 'italic',
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  color: '#111F2A',
                  lineHeight: 1,
                }}
              >
                0{stat.suffix}
              </span>
              <span
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,31,42,0.45)',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingTop: '2.5rem',
          paddingBottom: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(17,31,42,0.35)',
            marginRight: '0.75rem',
          }}
        >
          Filter:
        </span>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="filter-tab"
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '0.45rem 1.4rem',
              border: activeCategory === cat
                ? '1px solid #111F2A'
                : '1px solid rgba(17,31,42,0.2)',
              backgroundColor: activeCategory === cat ? '#111F2A' : 'transparent',
              color: activeCategory === cat ? '#F8F5F0' : '#111F2A',
              cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* ── WORKS GRID ── */}
      <section
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingBottom: '6rem',
        }}
      >
        {/* Featured — full width */}
        {featured && (
          <div className="work-card-reveal" style={{ marginBottom: '3.5rem' }}>
            <WorkCard work={featured} featured={true} index={0} />
          </div>
        )}

        {/* Rest — 2-column grid */}
        {rest.length > 0 && (
          <div className="works-grid-2col">
            {rest.map((work, i) => (
              <div key={work.slug} className="work-card-reveal">
                <WorkCard work={work} index={i + 1} />
              </div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <p
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '1rem',
              color: 'rgba(17,31,42,0.45)',
              textAlign: 'center',
              padding: '4rem 0',
            }}
          >
            No projects in this category yet.
          </p>
        )}
      </section>

      {/* ── MID-PAGE CTA BANNER (dark) ── */}
      <section
        className="cta-banner"
        style={{
          backgroundColor: '#111F2A',
          padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 5%, 5rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#E85D26',
              marginBottom: '1rem',
            }}
          >
            Let&apos;s Work Together
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              color: '#F8F5F0',
              margin: 0,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
            }}
          >
            Ready to build
            <br />a brand?
          </h2>
        </div>
        <Link
          href="/contact"
          style={{
            fontFamily: "'Gotham Bold', 'Helvetica Neue', sans-serif",
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '1.1rem 2.75rem',
            backgroundColor: '#E85D26',
            color: '#F8F5F0',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'background 0.25s ease',
            flexShrink: 0,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F8F5F0'; (e.currentTarget as HTMLAnchorElement).style.color = '#111F2A' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#E85D26'; (e.currentTarget as HTMLAnchorElement).style.color = '#F8F5F0' }}
        >
          Start a Conversation →
        </Link>
      </section>

      {/* ── CROSS-SECTION GLIMPSE ── */}
      <section
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingTop: '5rem',
          paddingBottom: '5rem',
          borderTop: '1px solid rgba(17,31,42,0.08)',
        }}
      >
        <p
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(17,31,42,0.4)',
            marginBottom: '3rem',
          }}
        >
          Explore More
        </p>

        <div className="cross-grid">
          {/* Insights teaser */}
          {firstInsight && (
            <Link
              href="/insights"
              className="cross-item"
              style={{
                display: 'block',
                textDecoration: 'none',
                paddingBottom: '2rem',
                borderBottom: '1px solid rgba(17,31,42,0.12)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#E85D26',
                  display: 'block',
                  marginBottom: '0.875rem',
                }}
              >
                From the Journal
              </span>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  color: '#111F2A',
                  margin: '0 0 0.75rem 0',
                  lineHeight: 1.15,
                }}
              >
                {firstInsight.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.9rem',
                  color: 'rgba(17,31,42,0.55)',
                  lineHeight: 1.65,
                  margin: '0 0 1.25rem 0',
                  maxWidth: '48ch',
                }}
              >
                {firstInsight.excerpt}
              </p>
              <span
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#111F2A',
                  borderBottom: '1px solid #111F2A',
                  paddingBottom: '2px',
                }}
              >
                Read the Journal →
              </span>
            </Link>
          )}

          {/* Services teaser */}
          <Link
            href="/services"
            className="cross-item"
            style={{
              display: 'block',
              textDecoration: 'none',
              paddingBottom: '2rem',
              borderBottom: '1px solid rgba(17,31,42,0.12)',
            }}
          >
            <span
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.68rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#E85D26',
                display: 'block',
                marginBottom: '0.875rem',
              }}
            >
              What We Do
            </span>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                color: '#111F2A',
                margin: '0 0 0.75rem 0',
                lineHeight: 1.15,
              }}
            >
              Brand Identity.
              <br />Strategy. Social.
            </h3>
            <p
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.9rem',
                color: 'rgba(17,31,42,0.55)',
                lineHeight: 1.65,
                margin: '0 0 1.25rem 0',
                maxWidth: '48ch',
              }}
            >
              From naming and visual identity to go-to-market strategy and
              ongoing social media — we offer end-to-end brand building for
              ambitious UAE and global brands.
            </p>
            <span
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#111F2A',
                borderBottom: '1px solid #111F2A',
                paddingBottom: '2px',
              }}
            >
              View Services →
            </span>
          </Link>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingBottom: '7rem',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2rem',
        }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            color: '#111F2A',
            margin: 0,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
          }}
        >
          Your brand,
          <br />
          <span style={{ color: '#E85D26' }}>next.</span>
        </h2>
        <Link
          href="/contact"
          style={{
            fontFamily: "'Gotham Bold', 'Helvetica Neue', sans-serif",
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '1.1rem 3rem',
            backgroundColor: '#111F2A',
            color: '#F8F5F0',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'background 0.25s ease, color 0.25s ease',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#E85D26' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#111F2A' }}
        >
          Start a Project →
        </Link>
      </section>
    </div>
  )
}
