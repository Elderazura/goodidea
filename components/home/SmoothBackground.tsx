'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Section {
  /** Selector for the element that triggers the color change */
  trigger: string
  /** Background color to transition to */
  bg: string
  /** Text color class/value: 'dark' | 'light' */
  theme: 'dark' | 'light'
}

interface Props {
  sections: Section[]
  children: React.ReactNode
}

/**
 * Wraps page content. As each registered section scrolls into view,
 * the page background smoothly transitions using GSAP ScrollTrigger scrub.
 */
export default function SmoothBackground({ sections, children }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    const ctx = gsap.context(() => {
      sections.forEach(({ trigger, bg, theme }) => {
        const el = wrap.querySelector(trigger)
        if (!el) return

        ScrollTrigger.create({
          trigger: el,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => {
            gsap.to(wrap, { backgroundColor: bg, duration: 0.9, ease: 'power2.out' })
            wrap.setAttribute('data-theme', theme)
          },
          onLeaveBack: () => {
            // Revert to previous section
          },
        })
      })
    }, wrap)

    return () => ctx.revert()
  }, [sections])

  return (
    <div
      ref={wrapRef}
      style={{ backgroundColor: '#F8F5F0', transition: 'none' }}
    >
      {children}
    </div>
  )
}
