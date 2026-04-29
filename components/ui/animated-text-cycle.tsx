'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedTextCycleProps {
  words: string[]
  interval?: number
  /** Extra className applied to each word span */
  className?: string
  /** Inline style applied to each word span */
  style?: React.CSSProperties
}

export default function AnimatedTextCycle({
  words,
  interval = 3000,
  className = '',
  style,
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState<number | 'auto'>('auto')
  const measureRef = useRef<HTMLSpanElement>(null)

  // Measure width of current word
  useEffect(() => {
    if (!measureRef.current) return
    const spans = measureRef.current.children
    if (spans[currentIndex]) {
      setWidth(spans[currentIndex].getBoundingClientRect().width + 4)
    }
  }, [currentIndex])

  // Cycle through words
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(i => (i + 1) % words.length)
    }, interval)
    return () => clearInterval(timer)
  }, [interval, words.length])

  const enter = {
    y: -22,
    opacity: 0,
    filter: 'blur(6px)',
  }
  const visible = {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }
  const exit = {
    y: 22,
    opacity: 0,
    filter: 'blur(6px)',
    transition: { duration: 0.3, ease: [0.7, 0, 0.84, 0] as [number, number, number, number] },
  }

  return (
    <>
      {/* Hidden measurement layer — renders all words offscreen */}
      <span
        ref={measureRef}
        aria-hidden="true"
        style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', whiteSpace: 'nowrap' }}
      >
        {words.map((word, i) => (
          <span key={i} className={className} style={style}>
            {word}
          </span>
        ))}
      </span>

      {/* Animated container — clips overflowing frames */}
      <motion.span
        animate={{
          width,
          transition: { type: 'spring', stiffness: 160, damping: 18, mass: 1 },
        }}
        style={{ display: 'inline-block', position: 'relative', overflow: 'hidden', verticalAlign: 'bottom' }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            initial={enter}
            animate={visible}
            exit={exit}
            className={className}
            style={{ display: 'inline-block', whiteSpace: 'nowrap', ...style }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  )
}
