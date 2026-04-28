'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import type { Work } from '@/data/works'

interface WorkCardProps {
  work: Work
  featured?: boolean
  index?: number
}

export default function WorkCard({ work, featured = false, index }: WorkCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)

  function handleMouseEnter() {
    setHovered(true)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  function handleMouseLeave() {
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  const aspectClass = featured ? 'aspect-[16/9]' : 'aspect-[4/3]'

  const indexLabel =
    index !== undefined
      ? String(index + 1).padStart(2, '0')
      : null

  return (
    <Link
      href={`/works/${work.slug}`}
      data-cursor="view"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'block', textDecoration: 'none' }}
    >
      {/* Category + year row — above image for featured variant */}
      {featured && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.75rem',
          }}
        >
          <span
            style={{
              fontFamily: 'Gotham Book, sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#E85D26',
            }}
          >
            {work.category}
          </span>
          <span
            style={{
              fontFamily: 'Gotham Book, sans-serif',
              fontSize: '0.7rem',
              color: 'rgba(17,31,42,0.6)',
            }}
          >
            {work.year}
          </span>
        </div>
      )}

      {/* Image / video container */}
      <div
        className={aspectClass}
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Index number */}
        {indexLabel && (
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 10,
              fontFamily: 'Gotham Book, sans-serif',
              fontSize: '0.75rem',
              color: 'rgba(17,31,42,0.6)',
              padding: '0.75rem',
              lineHeight: 1,
            }}
          >
            {indexLabel}
          </span>
        )}

        {/* Poster image */}
        <Image
          src={work.posterImage}
          alt={work.title}
          fill
          className="object-cover"
          sizes={featured ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
        />

        {/* Video layer */}
        {work.mainVideo && (
          <video
            ref={videoRef}
            src={work.mainVideo}
            poster={work.posterImage}
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.35s ease',
            }}
          />
        )}

        {/* Hover overlay — slides up from bottom */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(17,31,42,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: hovered ? 'translateY(0%)' : 'translateY(100%)',
            transition: 'transform 0.35s ease',
          }}
        >
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: 'italic',
              fontSize: '1.5rem',
              color: '#ffffff',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.25s ease 0.1s',
              textAlign: 'center',
              padding: '0 1.5rem',
              margin: 0,
            }}
          >
            {work.tagline}
          </p>
        </div>
      </div>

      {/* Metadata + title — below image for default variant */}
      {!featured && (
        <div style={{ marginTop: '1rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.375rem',
            }}
          >
            <span
              style={{
                fontFamily: 'Gotham Book, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#E85D26',
              }}
            >
              {work.category}
            </span>
            <span
              style={{
                fontFamily: 'Gotham Book, sans-serif',
                fontSize: '0.7rem',
                color: 'rgba(17,31,42,0.6)',
              }}
            >
              {work.year}
            </span>
          </div>
          <h3
            style={{
              fontFamily: 'Gotham Bold, sans-serif',
              fontSize: '1.125rem',
              color: '#111F2A',
              margin: 0,
              fontWeight: 700,
            }}
          >
            {work.title}
          </h3>
        </div>
      )}

      {/* Featured title — large italic below image */}
      {featured && (
        <div style={{ marginTop: '1rem' }}>
          <h3
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: 'italic',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#111F2A',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {work.title}
          </h3>
        </div>
      )}
    </Link>
  )
}
