'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  const containerRef  = useRef<HTMLElement>(null)
  const overlayRef    = useRef<HTMLDivElement>(null)
  const textRef       = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Text reveal: each line slides up from clip ────────── */
      const lines = Array.from(
        textRef.current?.querySelectorAll('.hero-line-inner') ?? []
      )
      const sub = textRef.current?.querySelector('.hero-sub')
      const cta = textRef.current?.querySelector('.hero-cta')

      if (lines.length) {
        gsap.fromTo(lines,
          { y: '110%' },
          { y: '0%', duration: 1.2, ease: 'power4.out', stagger: 0.1, delay: 0.2 }
        )
      }
      if (sub) {
        gsap.fromTo(sub,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.9 }
        )
      }
      if (cta) {
        gsap.fromTo(cta,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.2 }
        )
      }

      /* ── Subtle parallax: image moves slower than scroll ──── */
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    }, containerRef)

    /* ── Mouse parallax on bg image ─────────────────────────── */
    const section = containerRef.current
    if (section) {
      const img = section.querySelector('.hero-bg-img') as HTMLElement | null
      const onMove = (e: MouseEvent) => {
        const rect = section.getBoundingClientRect()
        const cx = (e.clientX - rect.left) / rect.width  - 0.5
        const cy = (e.clientY - rect.top)  / rect.height - 0.5
        if (img) {
          gsap.to(img, { x: cx * 24, y: cy * 14, duration: 1.6, ease: 'power2.out' })
        }
      }
      section.addEventListener('mousemove', onMove as EventListener)
      return () => { ctx.revert(); section.removeEventListener('mousemove', onMove as EventListener) }
    }

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      {/* ── Background image ──────────────────────────────────── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hero-bg-img"
        src="/images/team/studio.jpeg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 30%',
          willChange: 'transform',
        }}
      />

      {/* ── Dark overlay ─────────────────────────────────────── */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.25) 100%)',
          zIndex: 1,
        }}
      />

      {/* ── Nav-area top tint ────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '140px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* ── Text block ───────────────────────────────────────── */}
      <div
        ref={textRef}
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(2rem, 5%, 5rem)',
          paddingBottom: 'clamp(3rem, 7vh, 6rem)',
          maxWidth: '1440px',
          width: '100%',
        }}
      >
        {/* Main headline — WE'RE GOODIDEA all caps */}
        <h1
          style={{
            fontFamily: "'Hepta Slab', Georgia, serif",
            fontWeight: 900,
            fontSize: 'clamp(4rem, 13.5vw, 14rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: '#ffffff',
            margin: '0 0 clamp(1.5rem, 3vw, 2.5rem) 0',
          }}
        >
          <div style={{ overflow: 'hidden' }}>
            <div className="hero-line-inner" style={{ transform: 'translateY(110%)' }}>
              We&apos;re
            </div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div className="hero-line-inner" style={{ transform: 'translateY(110%)' }}>
              Goodidea
            </div>
          </div>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-sub"
          style={{
            fontFamily: "'Hepta Slab', Georgia, serif",
            fontWeight: 600,
            fontSize: 'clamp(1.35rem, 3.2vw, 3rem)',
            lineHeight: 1.2,
            color: 'rgba(255,255,255,0.92)',
            margin: '0 0 clamp(2rem, 4vh, 3.5rem) 0',
            maxWidth: '18ch',
            opacity: 0,
          }}
        >
          Dubai-based branding<br />and design agency.
        </p>

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
          <Link href="/works" style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.65)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.3)',
            paddingBottom: '2px',
          }}>
            View Our Work ↓
          </Link>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        right: 'clamp(2rem, 5%, 5rem)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        opacity: 0.5,
      }}>
        <div style={{
          width: '1px',
          height: '60px',
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.7))',
          animation: 'heroScrollLine 2s ease-in-out infinite',
        }} />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes heroScrollLine {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 0; }
          40%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          60%  { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
        @media (max-width: 767px) {
          .hero-section h1 {
            font-size: clamp(3.5rem, 18vw, 6rem) !important;
          }
          .hero-section .hero-sub {
            font-size: clamp(1.1rem, 5vw, 1.6rem) !important;
          }
        }
      ` }} />
    </section>
  )
}
