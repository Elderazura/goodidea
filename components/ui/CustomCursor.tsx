'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current
    const label = labelRef.current
    if (!cursor || !label) return

    // Hide system cursor
    document.body.style.cursor = 'none'

    // Position cursor centered on pointer
    gsap.set(cursor, { xPercent: -50, yPercent: -50 })

    // Smooth following via quickTo
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3' })

    let hasMovedOnce = false

    function onMouseMove(e: MouseEvent) {
      xTo(e.clientX)
      yTo(e.clientY)

      if (!hasMovedOnce) {
        hasMovedOnce = true
        gsap.to(cursor, { opacity: 1, duration: 0.3 })
      }
    }

    function onMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement

      if (target.closest('[data-cursor="view"]')) {
        // VIEW state: 96px, ink background, white text
        gsap.to(cursor, {
          width: 96,
          height: 96,
          backgroundColor: '#111F2A',
          duration: 0.4,
          ease: 'power3.out',
        })
        gsap.set(cursor, { display: 'flex', alignItems: 'center', justifyContent: 'center' })
        gsap.to(label, { opacity: 1, duration: 0.2, delay: 0.1 })
      } else if (target.closest('a, button')) {
        // Link/button state: 40px, accent color, no text
        gsap.to(cursor, {
          width: 40,
          height: 40,
          backgroundColor: '#E85D26',
          duration: 0.3,
          ease: 'power3.out',
        })
        gsap.to(label, { opacity: 0, duration: 0.15 })
      } else {
        // Default state: 12px, ink color
        gsap.to(cursor, {
          width: 12,
          height: 12,
          backgroundColor: '#111F2A',
          duration: 0.3,
          ease: 'power3.out',
        })
        gsap.to(label, { opacity: 0, duration: 0.15 })
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
    }
  }, [])

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
      `}</style>

      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: '#111F2A',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          ref={labelRef}
          style={{
            opacity: 0,
            color: '#ffffff',
            fontSize: '0.625rem',
            fontFamily: 'Gotham Bold, Gotham, sans-serif',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            lineHeight: 1,
          }}
        >
          VIEW
        </span>
      </div>
    </>
  )
}
