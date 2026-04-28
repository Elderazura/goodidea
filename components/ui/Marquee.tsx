'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  items: string[]
  speed?: number
  separator?: string
  className?: string
  border?: boolean
  size?: 'sm' | 'md' | 'lg'
  reverse?: boolean
}

export default function Marquee({
  items,
  speed = 60,
  separator = ' — ',
  className,
  border = false,
  size = 'sm',
  reverse = false,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Respect prefers-reduced-motion
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) return

    // Wait one frame so layout is complete and scrollWidth is accurate
    const raf = requestAnimationFrame(() => {
      if (!track) return

      // Half scrollWidth = width of one copy of the content (content is duplicated)
      const totalWidth = track.scrollWidth / 2

      if (totalWidth === 0) return

      const tween = gsap.to(track, {
        x: reverse ? totalWidth : -totalWidth,
        duration: totalWidth / speed,
        ease: 'none',
        repeat: -1,
      })

      const el = track.parentElement
      const pause = () => tween.pause()
      const play = () => tween.play()
      el?.addEventListener('mouseenter', pause)
      el?.addEventListener('mouseleave', play)

      // Store for cleanup
      ;(track as HTMLDivElement & { _pause?: () => void; _play?: () => void })._pause = pause
      ;(track as HTMLDivElement & { _pause?: () => void; _play?: () => void })._play = play
      ;(track as HTMLDivElement & { _tween?: gsap.core.Tween })._tween = tween
    })

    return () => {
      cancelAnimationFrame(raf)
      const t = track as HTMLDivElement & {
        _pause?: () => void
        _play?: () => void
        _tween?: gsap.core.Tween
      }
      t._tween?.kill()
      const el = track.parentElement
      if (t._pause) el?.removeEventListener('mouseenter', t._pause)
      if (t._play) el?.removeEventListener('mouseleave', t._play)
    }
  }, [speed, reverse])

  const sizeClass: Record<NonNullable<MarqueeProps['size']>, string> = {
    sm: 'text-[0.75rem] uppercase tracking-[0.12em] font-gotham-book',
    md: 'text-[1rem] uppercase tracking-[0.08em] font-gotham-book',
    lg: 'text-[clamp(1.5rem,3vw,3rem)] tracking-[-0.02em] font-gotham-bold',
  }

  // Duplicate items for seamless GSAP loop
  const allItems = [...items, ...items]

  return (
    <div
      className={cn(
        'w-full overflow-hidden',
        border && 'border-t border-b border-[rgba(17,31,42,0.2)]',
        className
      )}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className={cn(
          'flex items-center whitespace-nowrap will-change-transform',
          sizeClass[size]
        )}
        style={{ color: 'var(--ink, #111F2A)' }}
      >
        {allItems.map((item, index) => (
          <span key={index} className="flex-shrink-0 inline-block">
            {item}
            {index < allItems.length - 1 && (
              <span aria-hidden="true">{separator}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
