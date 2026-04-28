'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return // skip touch

    const el = cursorRef.current
    if (!el) return

    async function init() {
      const { default: gsap } = await import('gsap')

      const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' })

      function onMove(e: MouseEvent) {
        xTo(e.clientX)
        yTo(e.clientY)
      }

      function onEnterView(e: MouseEvent) {
        const target = e.target as HTMLElement
        if (target.closest('[data-cursor="view"]')) {
          gsap.to(el, { width: 80, height: 80, duration: 0.3, ease: 'expo.out' })
          if (labelRef.current) {
            gsap.to(labelRef.current, { opacity: 1, duration: 0.2, delay: 0.1 })
          }
        }
      }

      function onLeaveView(e: MouseEvent) {
        const target = e.target as HTMLElement
        if (target.closest('[data-cursor="view"]')) {
          gsap.to(el, { width: 12, height: 12, duration: 0.3, ease: 'expo.out' })
          if (labelRef.current) {
            gsap.to(labelRef.current, { opacity: 0, duration: 0.15 })
          }
        }
      }

      window.addEventListener('mousemove', onMove)
      window.addEventListener('mouseover', onEnterView)
      window.addEventListener('mouseout', onLeaveView)

      return () => {
        window.removeEventListener('mousemove', onMove)
        window.removeEventListener('mouseover', onEnterView)
        window.removeEventListener('mouseout', onLeaveView)
      }
    }

    let cleanup: (() => void) | undefined
    init().then(fn => { cleanup = fn })

    return () => {
      cleanup?.()
    }
  }, [])

  return (
    <>
      {/* Hide default cursor on desktop */}
      <style>{`@media (pointer: fine) { *, *::before, *::after { cursor: none !important; } }`}</style>
      <div
        ref={cursorRef}
        aria-hidden
        style={{
          position: 'fixed',
          top: -6,
          left: -6,
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: '#111f2a',
          pointerEvents: 'none',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mixBlendMode: 'difference',
        }}
      >
        <span
          ref={labelRef}
          style={{
            opacity: 0,
            color: '#fff',
            fontSize: '9px',
            fontFamily: 'sans-serif',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            userSelect: 'none',
          }}
        >
          View
        </span>
      </div>
    </>
  )
}
