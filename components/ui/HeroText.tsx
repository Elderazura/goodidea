'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface HeroTextProps {
  children: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'p'
  delay?: number
}

export default function HeroText({
  children,
  className,
  tag: Tag = 'h1',
  delay = 0,
}: HeroTextProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let ctx: any

    async function init() {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!el) return
      const words = el.querySelectorAll<HTMLSpanElement>('[data-word]')

      ctx = gsap.context(() => {
        gsap.fromTo(
          words,
          { y: '110%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 0.8,
            delay,
            stagger: 0.06,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true,
            },
          }
        )
      }, el)
    }

    init()
    return () => ctx?.revert()
  }, [delay])

  const words = children.split(' ')

  return (
    <Tag ref={containerRef as any} className={cn(className)}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ overflow: 'hidden', display: 'inline-block', marginRight: '0.3em' }}
        >
          <span data-word style={{ display: 'inline-block', opacity: 0 }}>
            {word}
          </span>
        </span>
      ))}
    </Tag>
  )
}
