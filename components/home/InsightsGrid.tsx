'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { Insight } from '@/data/insights'
import { insightCategories } from '@/data/insights'

interface InsightsGridProps {
  insights: Insight[]
  showFilter?: boolean
}

export default function InsightsGrid({ insights, showFilter = true }: InsightsGridProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All' ? insights : insights.filter(i => i.category === activeCategory)

  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
        paddingRight: 'clamp(1.5rem, 5%, 5rem)',
        borderTop: '1px solid rgba(17,31,42,0.2)',
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: showFilter ? '2rem' : '3rem',
        }}
      >
        <span
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase' as const,
            color: 'rgba(17,31,42,0.6)',
          }}
        >
          Latest Insights
        </span>
        <Link
          href="/insights"
          className="insights-view-all"
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.875rem',
            color: '#111F2A',
            textDecoration: 'none',
          }}
        >
          View All →
        </Link>
      </div>

      {/* Filter tabs */}
      {showFilter && (
        <nav
          style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.5rem', marginBottom: '3rem' }}
          aria-label="Insight categories"
        >
          {insightCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'insights-filter-btn',
                activeCategory === cat ? 'insights-filter-active' : ''
              )}
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                padding: '0.4rem 1rem',
                border: activeCategory === cat
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
        </nav>
      )}

      {/* Grid */}
      <div className="insights-grid">
        {filtered.map(insight => (
          <article key={insight.slug}>
            <Link href={`/insights/${insight.slug}`} className="insights-card-link" style={{ textDecoration: 'none', display: 'block' }}>
              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16/9',
                  width: '100%',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(17,31,42,0.06)',
                  marginBottom: '1rem',
                }}
              >
                <Image
                  src={insight.coverImage}
                  alt={insight.title}
                  fill
                  className="insights-card-img"
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Meta row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span
                  style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontSize: '0.65rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase' as const,
                    color: '#E85D26',
                    border: '1px solid #E85D26',
                    padding: '0.25rem 0.6rem',
                    lineHeight: 1,
                  }}
                >
                  {insight.category}
                </span>
                <span
                  style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontSize: '0.7rem',
                    color: 'rgba(17,31,42,0.6)',
                  }}
                >
                  {insight.readTime} min read
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  lineHeight: 1.4,
                  color: '#111F2A',
                  margin: '0 0 0.5rem 0',
                }}
              >
                {insight.title}
              </h3>

              {/* Excerpt */}
              <p
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  color: 'rgba(17,31,42,0.6)',
                  margin: '0 0 0.75rem 0',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical' as const,
                  overflow: 'hidden',
                }}
              >
                {insight.excerpt}
              </p>

              {/* Read link */}
              <span
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.8rem',
                  color: '#E85D26',
                }}
              >
                Read →
              </span>
            </Link>
          </article>
        ))}
      </div>

      <style>{`
        .insights-view-all:hover {
          text-decoration: underline;
        }
        .insights-card-img {
          transition: transform 0.5s ease;
        }
        .insights-card-link:hover .insights-card-img {
          transform: scale(1.04);
        }
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        @media (max-width: 1024px) {
          .insights-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .insights-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
