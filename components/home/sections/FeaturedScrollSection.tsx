'use client'

import Link from 'next/link'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'

// Cycle through 3 real brand project images inside the scroll card
const FEATURED = [
  { src: '/images/works/woodo-3.webp',   project: 'Woodo',   slug: 'woodo',   tag: 'Brand Identity' },
  { src: '/images/works/meraki-4.jpg',   project: 'Meraki',  slug: 'meraki',  tag: 'Brand Identity' },
  { src: '/images/works/sheisfit-5.jpg', project: 'She Is Fit', slug: 'she-is-fit', tag: 'Brand Identity' },
]

// Pick the first one as the featured image — rich, full-bleed
const MAIN = FEATURED[0]

export default function FeaturedScrollSection() {
  return (
    <section
      id="section-featured"
      style={{ backgroundColor: '#F8F5F0', overflow: 'hidden' }}
    >
      <ContainerScroll
        titleComponent={
          <div style={{ marginBottom: '1rem' }}>
            {/* Eyebrow */}
            <p style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.68rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#E85D26',
              marginBottom: '1.25rem',
            }}>
              Featured Project
            </p>

            {/* Headline */}
            <h2 style={{
              fontFamily: "'Hepta Slab', Georgia, serif",
              fontWeight: 900,
              
              fontSize: 'clamp(2.5rem, 6vw, 6rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: '#111F2A',
              margin: '0 0 1.5rem',
            }}>
              Work that
              <br />
              <span style={{ color: '#E85D26' }}>speaks</span> for itself.
            </h2>

            {/* Project meta + link */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}>
              <span style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.65rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(17,31,42,0.4)',
              }}>
                {MAIN.project} · {MAIN.tag}
              </span>
              <Link
                href={`/works/${MAIN.slug}`}
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#111F2A',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(17,31,42,0.4)',
                  paddingBottom: '2px',
                  transition: 'border-color 0.2s ease, color 0.2s ease',
                }}
              >
                View Case Study →
              </Link>
            </div>
          </div>
        }
      >
        {/* Full-bleed project image inside the 3D card */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={MAIN.src}
            alt={`${MAIN.project} — brand identity`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />

          {/* Bottom label overlay */}
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            padding: '1.5rem 2rem',
            background: 'linear-gradient(to top, rgba(17,31,42,0.85) 0%, transparent 100%)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1rem',
          }}>
            <div>
              <p style={{
                fontFamily: "'Hepta Slab', Georgia, serif",
                fontWeight: 700,
                
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                color: '#ffffff',
                margin: '0 0 0.2rem',
                lineHeight: 1,
              }}>
                {MAIN.project}
              </p>
              <p style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.6rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                margin: 0,
              }}>
                {MAIN.tag}
              </p>
            </div>

            {/* Small project thumbnails — other works */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {FEATURED.slice(1).map(f => (
                <Link
                  key={f.slug}
                  href={`/works/${f.slug}`}
                  style={{
                    width: '52px',
                    height: '40px',
                    overflow: 'hidden',
                    opacity: 0.65,
                    flexShrink: 0,
                    display: 'block',
                    transition: 'opacity 0.25s ease',
                  }}
                  title={f.project}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.src}
                    alt={f.project}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  )
}
