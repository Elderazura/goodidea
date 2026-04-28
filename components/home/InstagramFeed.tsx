'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CARDS = [
  { src: '/images/instagram/shoot-000011.jpg', label: 'Behind the Brand · 2025' },
  { src: '/images/works/woodo-3.webp',         label: 'Woodo · Visual System' },
  { src: '/images/instagram/shoot-000021.jpg', label: 'Studio Life · Dubai' },
  { src: '/images/works/orego-4.webp',         label: 'Orego · Packaging' },
  { src: '/images/instagram/shoot-000031.jpg', label: 'Process · Craft' },
  { src: '/images/works/woodo-7.webp',         label: 'Woodo · Typography' },
  { src: '/images/instagram/shoot-000041.jpg', label: 'Identity Work · 2025' },
  { src: '/images/works/files-3.webp',         label: 'Files · Brand System' },
  { src: '/images/instagram/shoot-000051.jpg', label: 'Strategy Sessions' },
  { src: '/images/works/orego-6.webp',         label: 'Orego · Colour World' },
  { src: '/images/instagram/shoot-000061.jpg', label: 'Brand in the Wild' },
  { src: '/images/works/qawafil-1.webp',       label: 'Qawafil · Heritage' },
]

// Triplicate for seamless infinite loop
const TRACK_CARDS = [...CARDS, ...CARDS, ...CARDS]

const CARD_W = 200   // px — explicit card width
const CARD_H = 320   // px — explicit card height (≈ 9:16 at 180px wide, but taller for impact)
const CARD_GAP = 14  // px

export default function InstagramFeed() {
  const trackRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Width of ONE full set of cards
    const setWidth = CARDS.length * (CARD_W + CARD_GAP)

    // Start position: show from the beginning of the second set (so first appears seamless)
    gsap.set(track, { x: -setWidth })

    const tween = gsap.to(track, {
      x: `-=${setWidth}`,
      duration: setWidth / 55, // ~55px/s
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (x: string) => {
          const val = parseFloat(x)
          // Reset: when we've moved two full sets, snap back one set
          const mod = ((val + setWidth * 2) % (setWidth * 2)) - setWidth * 2
          return `${mod}px`
        },
      },
    })
    tweenRef.current = tween

    const section = sectionRef.current
    const pause = () => tween.timeScale(0.15)
    const play  = () => tween.timeScale(1)
    section?.addEventListener('mouseenter', pause)
    section?.addEventListener('mouseleave', play)

    return () => {
      section?.removeEventListener('mouseenter', pause)
      section?.removeEventListener('mouseleave', play)
      tween.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#111F2A',
        paddingTop: 'clamp(5rem, 8vh, 8rem)',
        paddingBottom: 'clamp(5rem, 8vh, 8rem)',
        overflow: 'hidden',
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
          marginBottom: '2.5rem',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#E85D26',
              margin: '0 0 0.6rem 0',
            }}
          >
            Follow Along
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              lineHeight: 0.92,
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
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            paddingBottom: '2px',
            flexShrink: 0,
          }}
        >
          Follow on Instagram →
        </a>
      </div>

      {/* Card strip — full bleed, clips at section edges */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: `${CARD_GAP}px`,
            height: `${CARD_H}px`,
            willChange: 'transform',
          }}
        >
          {TRACK_CARDS.map((card, i) => (
            <a
              key={i}
              href="https://www.instagram.com/goodideadubai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${card.label} — view on Instagram`}
              className="insta-card"
              style={{
                flexShrink: 0,
                width: `${CARD_W}px`,
                height: `${CARD_H}px`,
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'rgba(255,255,255,0.08)',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.src}
                alt={card.label}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                className="insta-img"
              />

              {/* Hover caption overlay */}
              <div
                className="insta-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(17,31,42,0.88) 0%, transparent 55%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1rem',
                }}
              >
                {/* Instagram glyph */}
                <svg
                  width="18" height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                  style={{ marginBottom: '0.4rem', opacity: 0.6 }}
                  aria-hidden
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
                </svg>
                <p style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.65rem',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.85)',
                  margin: 0,
                  lineHeight: 1.4,
                }}>
                  {card.label}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Fade edges */}
        <div aria-hidden style={{
          position: 'absolute', top: 0, left: 0, bottom: 0,
          width: '8rem',
          background: 'linear-gradient(to right, #111F2A, transparent)',
          pointerEvents: 'none', zIndex: 2,
        }} />
        <div aria-hidden style={{
          position: 'absolute', top: 0, right: 0, bottom: 0,
          width: '8rem',
          background: 'linear-gradient(to left, #111F2A, transparent)',
          pointerEvents: 'none', zIndex: 2,
        }} />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .insta-card:hover .insta-overlay { opacity: 1; }
        .insta-card:hover .insta-img { transform: scale(1.06); }
      ` }} />
    </section>
  )
}
