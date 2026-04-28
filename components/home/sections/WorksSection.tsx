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
      <div
        className="reveal-up"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <div>
          <p style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#E85D26',
            marginBottom: '1.25rem',
          }}>
            Selected Work
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(3rem, 7vw, 7rem)',
            lineHeight: 0.92,
            color: '#111F2A',
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            What we&apos;ve<br />built.
          </h2>
        </div>
        <Link
          href="/works"
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#111F2A',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(17,31,42,0.4)',
            paddingBottom: '2px',
            alignSelf: 'flex-end',
          }}
        >
          All Work →
        </Link>
      </div>

      {/* Featured first work — full width */}
      <div className="reveal-up" style={{ marginBottom: '3rem' }}>
        <WorkCard work={works[0]} featured index={0} />
      </div>

      {/* 2-col grid for next 4 */}
      <div className="works-grid">
        {works.slice(1, 5).map((work, i) => (
          <div key={work.slug} className="reveal-up">
            <WorkCard work={work} index={i + 1} />
          </div>
        ))}
      </div>
    </section>
  )
}
