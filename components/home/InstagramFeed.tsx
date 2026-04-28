'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/* ─── Feed cards — real portfolio moments ─────────────────────────────────
   These represent the Goodidea Instagram feed.
   Using real work images from the portfolio.
────────────────────────────────────────────────────────────────────────── */
const CARDS = [
  { src: '/images/works/woodo-1.webp',   label: 'Woodo · Brand Identity' },
  { src: '/images/works/orego-1.webp',   label: 'Orego · Packaging' },
  { src: '/images/works/qawafil-1.webp', label: 'Qawafil · Strategy' },
  { src: '/images/works/woodo-2.webp',   label: 'Woodo · Visual System' },
  { src: '/images/works/orego-2.webp',   label: 'Orego · Brand Colours' },
  { src: '/images/works/project-b.webp', label: 'In Progress · 2025' },
  { src: '/images/works/woodo-3.webp',   label: 'Woodo · Typography' },
  { src: '/images/works/project-c.webp', label: 'Identity · Dubai' },
  { src: '/images/works/orego-3.webp',   label: 'Orego · Final Mark' },
  { src: '/images/works/project-d.webp', label: 'Naming · Strategy' },
]

// Duplicate for seamless loop
const ALL_CARDS = [...CARDS, ...CARDS]

export default function InstagramFeed() {
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      // One frame delay so layout is settled and scrollWidth is accurate
      const raf = requestAnimationFrame(() => {
        const totalWidth = track.scrollWidth / 2 // half = one full set of cards

        // Continuous rightward → leftward scroll (shows content moving left)
        const tween = gsap.fromTo(
          track,
          { x: 0 },
          {
            x: -totalWidth,
            duration: totalWidth / 60, // 60px/s — smooth, cinematic
            ease: 'none',
            repeat: -1,
          }
        )

        // Pause on hover
        const section = sectionRef.current
        const pause = () => tween.timeScale(0.2)
        const play = () => tween.timeScale(1)
        section?.addEventListener('mouseenter', pause)
        section?.addEventListener('mouseleave', play)

        return () => {
          section?.removeEventListener('mouseenter', pause)
          section?.removeEventListener('mouseleave', play)
        }
      })

      return () => cancelAnimationFrame(raf)
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        overflow: 'hidden',
        backgroundColor: '#111F2A',
        paddingTop: 'clamp(5rem, 8vh, 8rem)',
        paddingBottom: 'clamp(5rem, 8vh, 8rem)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          marginBottom: '3rem',
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
              marginBottom: '0.75rem',
            }}
          >
            Follow Along
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              lineHeight: 0.9,
              color: '#ffffff',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            @goodideadubai
          </h2>
        </div>
        <a
          href="https://www.instagram.com/goodideadubai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            paddingBottom: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexShrink: 0,
          }}
          aria-label="Follow Goodidea Dubai on Instagram"
        >
          Follow on Instagram →
        </a>
      </div>

      {/* Scrolling card track */}
      <div
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          overflow: 'visible',
        }}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '1rem',
            willChange: 'transform',
          }}
        >
          {ALL_CARDS.map((card, i) => (
            <a
              key={i}
              href="https://www.instagram.com/goodideadubai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${card.label} — view on Instagram`}
              style={{
                flexShrink: 0,
                width: 'clamp(160px, 18vw, 220px)',
                aspectRatio: '9/16',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'rgba(255,255,255,0.06)',
                display: 'block',
                textDecoration: 'none',
              }}
              className="insta-card"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.src}
                alt={card.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  transition: 'transform 0.6s ease, filter 0.4s ease',
                }}
                className="insta-card-img"
              />

              {/* Hover overlay */}
              <div
                className="insta-card-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(17,31,42,0.9) 0%, transparent 60%)',
                  opacity: 0,
                  transition: 'opacity 0.35s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem',
                }}
              >
                {/* Instagram icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                  style={{ marginBottom: '0.5rem', opacity: 0.7 }}
                  aria-hidden
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
                </svg>
                <p style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.9)',
                  margin: 0,
                  lineHeight: 1.4,
                }}>
                  {card.label}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Gradient fade right edge */}
      <div
        aria-hidden
        style={{
          position: 'relative',
          pointerEvents: 'none',
          marginTop: '-100%',
          height: '100%',
        }}
      />

      <style>{`
        .insta-card:hover .insta-card-overlay { opacity: 1; }
        .insta-card:hover .insta-card-img { transform: scale(1.04); filter: brightness(0.85); }
      `}</style>
    </section>
  )
}
