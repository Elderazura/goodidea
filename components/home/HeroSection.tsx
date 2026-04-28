'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import Button from '@/components/ui/Button'


/* ─── Image column data — Real work from Goodidea portfolio ─────────────── */
// Curated sequences: each column has a distinct visual rhythm + direction.
// Duplicated so GSAP can animate to -50% for a perfect seamless loop.

// Column 1 (upward, slowest) — brand identity showcase
const COL1_BASE = [
  '/images/works/woodo-1.webp',   // Woodo — craft brand
  '/images/works/orego-1.webp',   // Orego — food branding
  '/images/works/woodo-2.webp',   // Woodo details
  '/images/works/qawafil-1.webp', // Qawafil — heritage
]
// Column 2 (downward, medium) — identity details + packaging
const COL2_BASE = [
  '/images/works/orego-2.webp',   // Orego packaging
  '/images/works/woodo-3.webp',   // Woodo mark
  '/images/works/orego-3.webp',   // Orego identity
  '/images/works/work-3.jpg',     // Additional work
]
// Column 3 (upward, fastest) — editorial mix
const COL3_BASE = [
  '/images/works/project-b.webp', // Brand project B
  '/images/works/work-4.jpg',     // Strategy work
  '/images/works/project-c.webp', // Brand project C
  '/images/works/work-2.jpg',     // Social media work
]

// Duplicate each for the seamless GSAP loop
const COL1 = [...COL1_BASE, ...COL1_BASE]
const COL2 = [...COL2_BASE, ...COL2_BASE]
const COL3 = [...COL3_BASE, ...COL3_BASE]

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const col1Ref = useRef<HTMLDivElement>(null)
  const col2Ref = useRef<HTMLDivElement>(null)
  const col3Ref = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const columnsWrapRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Image column scroll ─────────────────────────────────── */
      // Col 1 — upward, slowest (flagship work deserves time)
      gsap.fromTo(col1Ref.current,
        { y: '0%' },
        { y: '-50%', duration: 30, ease: 'none', repeat: -1 }
      )
      // Col 2 — downward, medium pace (start mid-column for visual offset)
      gsap.fromTo(col2Ref.current,
        { y: '-50%' },
        { y: '0%', duration: 38, ease: 'none', repeat: -1 }
      )
      // Col 3 — upward, fastest + offset start (creates asymmetric depth)
      gsap.fromTo(col3Ref.current,
        { y: '-18%' },
        { y: '-68%', duration: 22, ease: 'none', repeat: -1 }
      )

      /* ── Text reveal ─────────────────────────────────────────── */
      const lines = Array.from(textRef.current?.querySelectorAll('.hero-line-inner') ?? [])
      const metaEls = Array.from(textRef.current?.querySelectorAll('.hero-meta') ?? [])
      const ctaEl = textRef.current?.querySelector('.hero-cta')

      if (lines.length) {
        gsap.fromTo(
          lines,
          { y: '115%' },
          { y: '0%', duration: 1.1, ease: 'power4.out', stagger: 0.07, delay: 0.2 }
        )
      }
      if (metaEls.length) {
        gsap.fromTo(
          metaEls,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.7, stagger: 0.15 }
        )
      }
      if (ctaEl) {
        gsap.fromTo(
          ctaEl,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.1 }
        )
      }

      /* ── Mouse parallax on image columns ─────────────────────── */
      const section = textRef.current?.closest('section')
      if (section && columnsWrapRef.current) {
        const xTo1 = gsap.quickTo(col1Ref.current, 'x', { duration: 1.8, ease: 'power2.out' })
        const xTo2 = gsap.quickTo(col2Ref.current, 'x', { duration: 2.2, ease: 'power2.out' })
        const xTo3 = gsap.quickTo(col3Ref.current, 'x', { duration: 1.4, ease: 'power2.out' })

        const onMove = (e: MouseEvent) => {
          const rect = section.getBoundingClientRect()
          const cx = (e.clientX - rect.left) / rect.width - 0.5  // -0.5 to 0.5
          const cy = (e.clientY - rect.top) / rect.height - 0.5

          // Each column drifts a different amount for depth
          xTo1(cx * 18)
          xTo2(cx * -12)
          xTo3(cx * 22)

          // Gentle vertical parallax on text
          if (textRef.current) {
            gsap.to(textRef.current, { y: cy * 12, duration: 1.2, ease: 'power2.out' })
          }
        }

        section.addEventListener('mousemove', onMove as EventListener)
        return () => {
          ctx.revert()
          section.removeEventListener('mousemove', onMove as EventListener)
        }
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100dvh',
        backgroundColor: '#F8F5F0',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
      className="hero-section"
    >
      {/* ── Left: headline text ─────────────────────────────────── */}
      <div
        ref={textRef}
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingTop: 'calc(72px + 2rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1rem, 3%, 3rem)',
          paddingBottom: 'clamp(3rem, 6vh, 5rem)',
        }}
      >
        {/* Eyebrow */}
        <div className="hero-meta" style={{ opacity: 0, marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(17,31,42,0.5)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '2.5rem',
                height: '1px',
                backgroundColor: '#E85D26',
                flexShrink: 0,
              }}
            />
            Dubai Creative Agency — Est. 2018
          </div>
        </div>

        {/* Display headline */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(4.5rem, 9vw, 11rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            color: '#111F2A',
            marginBottom: 'clamp(2rem, 4vh, 3.5rem)',
          }}
        >
          <div style={{ overflow: 'hidden' }}>
            <div className="hero-line-inner" style={{ transform: 'translateY(115%)' }}>We Build</div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div className="hero-line-inner" style={{ transform: 'translateY(115%)' }}>Brands</div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div className="hero-line-inner" style={{ transform: 'translateY(115%)' }}>
              That Matter<span style={{ color: '#E85D26' }}>.</span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="hero-meta" style={{ opacity: 0, marginBottom: 'clamp(2rem, 4vh, 3rem)' }}>
          <p
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)',
              lineHeight: 1.75,
              color: 'rgba(17,31,42,0.65)',
              maxWidth: '40ch',
              margin: 0,
            }}
          >
            We connect ambitious brands with transformative ideas — from
            identity to strategy to story, across the UAE and beyond.
          </p>
        </div>

        {/* CTA row */}
        <div
          className="hero-cta"
          style={{
            opacity: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <Button variant="primary" href="/contact" arrow>
            Start a Project
          </Button>
          <Link
            href="/works"
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#111F2A',
              textDecoration: 'none',
              borderBottom: '1px solid #111F2A',
              paddingBottom: '2px',
            }}
          >
            View Our Work ↓
          </Link>
        </div>

        {/* Stats row — bottom left */}
        <div
          className="hero-meta"
          style={{
            opacity: 0,
            display: 'flex',
            gap: '3rem',
            marginTop: 'clamp(3rem, 6vh, 5rem)',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(17,31,42,0.15)',
          }}
        >
          {[
            { value: '12+', label: 'Years' },
            { value: '200+', label: 'Brands Built' },
            { value: '3', label: 'Cities' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 900,
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: '#E85D26',
                  lineHeight: 1,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.6rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,31,42,0.5)',
                  marginTop: '0.25rem',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: scrolling image columns ─────────────────────── */}
      <div
        ref={columnsWrapRef}
        style={{
          position: 'relative',
          overflow: 'hidden',
          height: '100dvh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '10px',
          padding: '10px 10px 10px 16px',
        }}
        className="hero-columns"
      >
        {/* Column 1 — upward */}
        <div style={{ overflow: 'hidden' }}>
          <div ref={col1Ref} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {COL1.map((src, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(17,31,42,0.05)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  aria-hidden
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 — downward */}
        <div style={{ overflow: 'hidden' }}>
          <div ref={col2Ref} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {COL2.map((src, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(17,31,42,0.05)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  aria-hidden
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 — upward, offset */}
        <div style={{ overflow: 'hidden' }}>
          <div ref={col3Ref} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {COL3.map((src, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(17,31,42,0.05)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  aria-hidden
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Subtle left-fade so images blend into text area */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #F8F5F0 0%, transparent 22%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
        {/* Bottom fade */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '120px',
            background: 'linear-gradient(to bottom, transparent 0%, #F8F5F0 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
        {/* Floating project label — appears on hover */}
        <div
          ref={labelRef}
          aria-hidden
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            right: '2rem',
            zIndex: 20,
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.65rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#111F2A',
            backgroundColor: '#F8F5F0',
            padding: '0.5rem 1rem',
            opacity: 0,
            pointerEvents: 'none',
          }}
        >
          View Work →
        </div>
      </div>

      {/* ── Mobile layout overrides ─────────────────────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto 1fr;
          }
          .hero-columns {
            height: 45dvh !important;
            grid-template-columns: 1fr 1fr !important;
            padding: 0 !important;
          }
          .hero-columns > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
