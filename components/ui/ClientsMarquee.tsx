'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const CLIENTS = [
  'Woodo',
  'Meraki',
  'Orego',
  'Qawafil',
  'Files',
  'She Is Fit',
  'Blue Lagoon',
  'Australian Green Hills',
]

// Duplicate enough to fill any screen width seamlessly
const TRACK = [...CLIENTS, ...CLIENTS, ...CLIENTS]

interface ClientsMarqueeProps {
  /** 'light' = cream bg (home), 'dark' = ink bg (studio) */
  theme?: 'light' | 'dark'
  /** Section label shown above the marquee */
  label?: string
}

export default function ClientsMarquee({
  theme = 'light',
  label = 'Brands We\'ve Built',
}: ClientsMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  const bg      = theme === 'dark' ? 'transparent' : 'transparent'
  const ink     = theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(17,31,42,0.08)'
  const nameClr = theme === 'dark' ? 'rgba(255,255,255,0.85)' : '#111F2A'
  const dotClr  = '#E85D26'
  const labelClr = theme === 'dark' ? 'rgba(255,255,255,0.35)' : 'rgba(17,31,42,0.4)'

  useEffect(() => {
    if (!trackRef.current) return

    // Measure one full set width
    const oneSet = trackRef.current.scrollWidth / 3

    tweenRef.current = gsap.fromTo(
      trackRef.current,
      { x: 0 },
      {
        x: -oneSet,
        duration: 28,
        ease: 'none',
        repeat: -1,
      }
    )

    // Slow on hover
    const el = trackRef.current.parentElement
    const slow = () => tweenRef.current?.timeScale(0.3)
    const fast = () => tweenRef.current?.timeScale(1)
    el?.addEventListener('mouseenter', slow)
    el?.addEventListener('mouseleave', fast)

    return () => {
      tweenRef.current?.kill()
      el?.removeEventListener('mouseenter', slow)
      el?.removeEventListener('mouseleave', fast)
    }
  }, [])

  return (
    <section
      style={{
        background: bg,
        borderTop: `1px solid ${ink}`,
        borderBottom: `1px solid ${ink}`,
        paddingTop: 'clamp(4rem, 8vh, 8rem)',
        paddingBottom: 'clamp(4rem, 8vh, 8rem)',
        overflow: 'hidden',
      }}
    >
      {/* Label */}
      <p style={{
        fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
        fontSize: '0.68rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: labelClr,
        textAlign: 'center',
        marginBottom: '3rem',
      }}>
        {label}
      </p>

      {/* Scrolling names */}
      <div style={{ overflow: 'hidden', cursor: 'default' }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            willChange: 'transform',
          }}
        >
          {TRACK.map((name, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexShrink: 0,
                paddingRight: '1.5rem',
              }}
            >
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                color: nameClr,
                transition: 'color 0.25s ease',
              }}>
                {name}
              </span>
              {/* Separator dot */}
              <span style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: dotClr,
                flexShrink: 0,
              }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
