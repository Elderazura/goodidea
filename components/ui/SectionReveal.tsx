'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: number
  y?: number
  start?: string
  once?: boolean
}

export default function SectionReveal({
  children,
  className,
  delay = 0,
  stagger = 0,
  y = 60,
  start = 'top 85%',
  once = true,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ctx: any

    async function init() {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!el) return
      ctx = gsap.context(() => {
        const targets = stagger > 0 ? Array.from(el!.children) : el!

        gsap.fromTo(
          targets,
          { y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay,
            stagger: stagger > 0 ? stagger : undefined,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start,
              once,
            },
          }
        )
      }, el)
    }

    init()
    return () => ctx?.revert()
  }, [delay, once, start, stagger, y])

  return (
    <div
      ref={ref}
      className={cn('will-change-transform', className)}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  )
}
