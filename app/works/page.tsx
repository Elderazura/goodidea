'use client'

import { useState } from 'react'
import WorkCard from '@/components/works/WorkCard'
import { works } from '@/data/works'

const CATEGORIES = ['All', 'Branding', 'Social Media', 'Strategy']


export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? works
      : works.filter(w => w.category === activeCategory)

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <div
      style={{
        backgroundColor: '#F8F5F0',
        minHeight: '100vh',
        paddingTop: 'calc(72px + 3rem)',
      }}
    >
      {/* Page Hero */}
      <div
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingTop: '4rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(17,31,42,0.2)',
        }}
      >
        <p
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#E85D26',
            marginBottom: '1rem',
          }}
        >
          Our Work
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(3rem, 7vw, 7rem)',
            lineHeight: 1.0,
            color: '#111F2A',
            margin: '0 0 1.25rem 0',
          }}
        >
          What we&apos;ve
          <br />
          built.
        </h1>
        <p
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '1.125rem',
            color: 'rgba(17,31,42,0.6)',
            margin: 0,
            maxWidth: '50ch',
          }}
        >
          Branding, strategy, and identity work for UAE and global brands.
        </p>
      </div>

      {/* Filter tabs */}
      <div
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.4rem 1.25rem',
              border:
                activeCategory === cat
                  ? '1px solid #111F2A'
                  : '1px solid rgba(17,31,42,0.2)',
              backgroundColor: activeCategory === cat ? '#111F2A' : 'transparent',
              color: activeCategory === cat ? '#F8F5F0' : '#111F2A',
              cursor: 'pointer',
              transition: 'all 0.18s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Works grid */}
      <div
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingBottom: '5rem',
        }}
      >
        {/* Featured first card — full width */}
        {featured && (
          <div style={{ marginBottom: '3rem' }}>
            <WorkCard work={featured} featured={true} index={0} />
          </div>
        )}

        {/* 2-column grid for the rest */}
        {rest.length > 0 && (
          <div
            className="works-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '3rem',
            }}
          >
            {rest.map((work, i) => (
              <WorkCard key={work.slug} work={work} index={i + 1} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .works-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
