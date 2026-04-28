'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import WorkNavigation from '@/components/works/WorkNavigation'
import type { Work } from '@/data/works'

gsap.registerPlugin(ScrollTrigger)

interface WorkDetailClientProps {
  work: Work
  prev: Work | null
  next: Work | null
  otherWorks: Work[]
}

export default function WorkDetailClient({ work, prev, next, otherWorks }: WorkDetailClientProps) {
  const containerRef = useRef<HTMLElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title words animate up
      gsap.from('.hero-title-line', {
        y: '110%',
        stagger: 0.08,
        duration: 1.1,
        ease: 'power4.out',
        delay: 0.3,
      })

      // Hero overlay parallax fade on scroll
      if (overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0.7 },
          {
            opacity: 0.4,
            scrollTrigger: {
              trigger: overlayRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          }
        )
      }

      // Gallery images scroll-triggered
      gsap.from('.gallery-img', {
        opacity: 0,
        scale: 1.05,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#work-gallery',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // Project details section reveal
      gsap.from('.reveal-up', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.reveal-up',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const titleWords = work.title.split(' ')

  // Gallery layout logic
  const galleryCount = work.gallery.length
  const galleryLayout: 'single' | 'two-col' | 'mixed' =
    galleryCount === 1 ? 'single' : galleryCount <= 4 ? 'two-col' : 'mixed'

  const firstImage = galleryCount >= 5 ? work.gallery[0] : null
  const gridImages =
    galleryLayout === 'single'
      ? work.gallery
      : galleryLayout === 'two-col'
      ? work.gallery
      : work.gallery.slice(1)

  return (
    <article ref={containerRef} style={{ backgroundColor: '#F8F5F0' }}>
      {/* ─── Project Hero ─── */}
      <div
        style={{
          position: 'relative',
          minHeight: '100dvh',
          backgroundColor: '#111F2A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background video or image */}
        {work.mainVideo ? (
          <video
            src={work.mainVideo}
            poster={work.posterImage}
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={work.posterImage}
            alt={work.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}

        {/* Dark overlay — animated by GSAP */}
        <div
          ref={overlayRef}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}
        />

        {/* Centered content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: 'clamp(1.5rem, 5%, 5rem)',
            maxWidth: '900px',
          }}
        >
          <p
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#E85D26',
              marginBottom: '1.5rem',
            }}
          >
            {work.category}
          </p>

          {/* Title with per-word overflow-hidden wrappers */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(5rem, 10vw, 12rem)',
              lineHeight: 0.95,
              color: '#ffffff',
              margin: '0 0 2rem 0',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0 0.25em',
            }}
          >
            {titleWords.map((word, i) => (
              <span
                key={i}
                style={{ display: 'inline-block', overflow: 'hidden', lineHeight: 1.05 }}
              >
                <span className="hero-title-line" style={{ display: 'inline-block' }}>
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.7)',
              margin: 0,
            }}
          >
            {work.tagline}
          </p>
        </div>

        {/* Year badge — bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: 'clamp(1.5rem, 5%, 5rem)',
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
            }}
          >
            #{work.year}
          </span>
        </div>
      </div>

      {/* ─── Project Details ─── */}
      <div
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}
      >
        <div
          className="work-detail-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: description */}
          <div className="reveal-up">
            <p
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: '#111F2A',
                margin: 0,
              }}
            >
              {work.description}
            </p>
          </div>

          {/* Right: project info */}
          <div
            className="reveal-up"
            style={{
              borderLeft: '1px solid rgba(17,31,42,0.2)',
              paddingLeft: '3rem',
            }}
          >
            {/* Category */}
            <div style={{ marginBottom: '1.5rem' }}>
              <p
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,31,42,0.6)',
                  marginBottom: '0.375rem',
                }}
              >
                Category
              </p>
              <p
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#111F2A',
                  margin: 0,
                }}
              >
                {work.category}
              </p>
            </div>

            {/* Discipline badge */}
            {work.discipline && (
              <div
                style={{
                  borderTop: '1px solid rgba(17,31,42,0.2)',
                  paddingTop: '1.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(17,31,42,0.6)',
                    marginBottom: '0.375rem',
                  }}
                >
                  Discipline
                </p>
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    color: '#E85D26',
                    border: '1px solid #E85D26',
                    borderRadius: '2px',
                    padding: '0.2rem 0.6rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {work.discipline}
                </span>
              </div>
            )}

            {/* Year */}
            <div
              style={{
                borderTop: '1px solid rgba(17,31,42,0.2)',
                paddingTop: '1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <p
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,31,42,0.6)',
                  marginBottom: '0.375rem',
                }}
              >
                Year
              </p>
              <p
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#111F2A',
                  margin: 0,
                }}
              >
                {work.year}
              </p>
            </div>
          </div>
        </div>

        {/* Poster image block */}
        <div
          className="reveal-up"
          style={{
            marginTop: '5rem',
            position: 'relative',
            aspectRatio: '16/9',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: 'rgba(17,31,42,0.06)',
          }}
        >
          <Image
            src={work.posterImage}
            alt={work.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* ─── Gallery Section ─── */}
      {work.gallery && work.gallery.length > 0 && (
        <section
          id="work-gallery"
          style={{ padding: '0 clamp(1.5rem, 5%, 5rem) clamp(6rem, 12vh, 10rem)' }}
        >
          {/* Mixed: first image full-width, rest in 2-col grid */}
          {galleryLayout === 'mixed' && firstImage && (
            <>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16/9',
                  width: '100%',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="gallery-img"
                  src={firstImage}
                  alt={`${work.title} — gallery 1`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem',
                }}
              >
                {gridImages.map((img, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'relative',
                      aspectRatio: '3/2',
                      overflow: 'hidden',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="gallery-img"
                      src={img}
                      alt={`${work.title} — gallery ${i + 2}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Single: full width 16/9 */}
          {galleryLayout === 'single' && (
            <div
              style={{
                position: 'relative',
                aspectRatio: '16/9',
                width: '100%',
                overflow: 'hidden',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="gallery-img"
                src={work.gallery[0]}
                alt={`${work.title} — gallery 1`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}

          {/* 2–4 images: 2-column grid, 3/2 aspect */}
          {galleryLayout === 'two-col' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
              }}
            >
              {gridImages.map((img, i) => (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    aspectRatio: '3/2',
                    overflow: 'hidden',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="gallery-img"
                    src={img}
                    alt={`${work.title} — gallery ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ─── More Work Cross-Section ─── */}
      {otherWorks.length > 0 && (
        <section
          id="work-more"
          style={{
            backgroundColor: '#111F2A',
            padding: 'clamp(4rem, 8vh, 7rem) clamp(1.5rem, 5%, 5rem)',
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E85D26',
              marginBottom: '2.5rem',
            }}
          >
            More Work
          </p>

          {/* Cards grid */}
          <div
            className="more-work-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              marginBottom: '3rem',
            }}
          >
            {otherWorks.map(other => (
              <Link
                key={other.slug}
                href={`/works/${other.slug}`}
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <div
                  className="more-work-card"
                  style={{ overflow: 'hidden', cursor: 'pointer' }}
                >
                  {/* Poster with hover zoom */}
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '3/2',
                      overflow: 'hidden',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={other.posterImage}
                      alt={other.title}
                      className="more-work-poster"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
                      }}
                    />
                  </div>
                  {/* Card text */}
                  <div style={{ paddingTop: '1rem' }}>
                    <p
                      style={{
                        fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                        fontSize: '0.65rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#E85D26',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {other.category}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 700,
                        fontStyle: 'italic',
                        fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                        color: '#ffffff',
                        margin: 0,
                        lineHeight: 1.1,
                      }}
                    >
                      {other.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All link */}
          <div style={{ textAlign: 'center' }}>
            <Link
              href="/works"
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.3)',
                paddingBottom: '2px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
            >
              View All Work →
            </Link>
          </div>
        </section>
      )}

      {/* ─── Next Project Navigation ─── */}
      <WorkNavigation prev={prev} next={next} />

      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .work-detail-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
            .work-detail-grid > div:last-child { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(17,31,42,0.2); padding-top: 2rem; }
            .more-work-grid { grid-template-columns: 1fr !important; }
          }
          .more-work-card:hover .more-work-poster { transform: scale(1.05); }
        `
      }} />
    </article>
  )
}
