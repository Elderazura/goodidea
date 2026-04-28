import Link from 'next/link'
import WorkCard from '@/components/works/WorkCard'
import { works as allWorks } from '@/data/works'
import type { Work } from '@/data/works'

interface WorksGridProps {
  works?: Work[]
  limit?: number
}

export default function WorksGrid({ works: propWorks, limit = 6 }: WorksGridProps) {
  const works = (propWorks ?? allWorks).slice(0, limit)

  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
        paddingRight: 'clamp(1.5rem, 5%, 5rem)',
      }}
    >
      {/* Top separator */}
      <div
        style={{
          borderTop: '1px solid rgba(17,31,42,0.2)',
          marginBottom: '3rem',
        }}
      />

      {/* Section header row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
        }}
      >
        <span
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(17,31,42,0.6)',
          }}
        >
          Selected Work
        </span>
        <Link
          href="/works"
          style={{
            fontFamily: 'Gotham Book, sans-serif',
            fontSize: '0.875rem',
            color: '#111F2A',
            textDecoration: 'none',
          }}
          className="works-grid-view-all"
        >
          View All →
        </Link>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
        }}
        className="works-grid"
      >
        {works.map((work, i) => (
          <div
            key={work.slug}
            style={
              i === 0
                ? { gridColumn: 'span 2' }
                : undefined
            }
          >
            <WorkCard
              work={work}
              featured={i === 0}
              index={i}
            />
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .works-grid-view-all:hover { text-decoration: underline; }
        @media (max-width: 640px) {
          .works-grid { grid-template-columns: 1fr !important; }
          .works-grid > div { grid-column: span 1 !important; }
        }
      ` }} />
    </section>
  )
}
