import Link from 'next/link'
import WorkCard from '@/components/works/WorkCard'
import { works } from '@/data/works'

export default function WorksSection() {
  return (
    <section
      id="section-works"
      style={{
        background: 'transparent',
        paddingTop: 'clamp(5rem, 10vh, 9rem)',
        paddingBottom: 'clamp(5rem, 10vh, 9rem)',
        paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
        paddingRight: 'clamp(1.5rem, 5%, 5rem)',
      }}
    >
      {/* Section header */}
      <div
        className="reveal-up"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <div>
          <p style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#E85D26',
            marginBottom: '1rem',
          }}>
            Selected Work
          </p>
          <h2 style={{
            fontFamily: "'Hepta Slab', Georgia, serif",
            fontWeight: 900,
            fontSize: 'clamp(2.8rem, 6vw, 6.5rem)',
            lineHeight: 0.92,
            color: '#111F2A',
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            Works
          </h2>
        </div>
        <div style={{ maxWidth: '28rem' }}>
          <p style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
            lineHeight: 1.7,
            color: 'rgba(17,31,42,0.6)',
            margin: '0 0 1.5rem 0',
          }}>
            We craft brands and experiences that inspire extraordinary transformation.
          </p>
          <Link
            href="/works"
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#111F2A',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(17,31,42,0.4)',
              paddingBottom: '2px',
              display: 'inline-block',
            }}
          >
            See all work →
          </Link>
        </div>
      </div>

      {/* 3-column grid — all works equal */}
      <div className="works-grid-3col">
        {works.slice(0, 6).map((work, i) => (
          <div key={work.slug} className="reveal-up">
            <WorkCard work={work} index={i} />
          </div>
        ))}
      </div>

      {/* See all — bottom centre */}
      <div className="reveal-up" style={{ textAlign: 'center', marginTop: 'clamp(3rem, 5vw, 4rem)' }}>
        <Link
          href="/works"
          style={{
            display: 'inline-block',
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#111F2A',
            textDecoration: 'none',
            border: '1px solid rgba(17,31,42,0.3)',
            padding: '1rem 3rem',
            transition: 'background 0.25s, color 0.25s',
          }}
          className="see-all-btn"
        >
          See All Work
        </Link>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .works-grid-3col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 900px) {
          .works-grid-3col { grid-template-columns: repeat(2, 1fr) !important; gap: 1.5rem !important; }
        }
        @media (max-width: 560px) {
          .works-grid-3col { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        .see-all-btn:hover {
          background: #111F2A;
          color: #ffffff;
        }
      ` }} />
    </section>
  )
}
