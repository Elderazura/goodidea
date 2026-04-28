import Link from 'next/link'
import Image from 'next/image'
import { insights } from '@/data/insights'

export default function InsightsSection() {
  return (
    <section
      id="section-insights"
      style={{
        background: 'transparent',
        paddingTop: 'clamp(5rem, 10vh, 9rem)',
        paddingBottom: 'clamp(5rem, 10vh, 9rem)',
        paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
        paddingRight: 'clamp(1.5rem, 5%, 5rem)',
        borderTop: '1px solid rgba(17,31,42,0.1)',
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
            Insights
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(3rem, 6vw, 6rem)',
            lineHeight: 0.92,
            color: '#111F2A',
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            Ideas worth<br />reading.
          </h2>
        </div>
        <Link
          href="/insights"
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
          All Articles →
        </Link>
      </div>

      <div className="insights-grid">
        {insights.slice(0, 3).map((insight) => (
          <Link
            key={insight.slug}
            href={`/insights/${insight.slug}`}
            className="reveal-up"
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <div style={{ aspectRatio: '16/10', overflow: 'hidden', marginBottom: '1.5rem', position: 'relative' }}>
              <Image
                src={insight.coverImage}
                alt={insight.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                className="insight-img"
              />
            </div>
            <p style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#E85D26',
              marginBottom: '0.5rem',
            }}>
              {insight.category}
            </p>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
              color: '#111F2A',
              lineHeight: 1.2,
              margin: '0 0 0.75rem 0',
            }}>
              {insight.title}
            </h3>
            <p style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.875rem',
              lineHeight: 1.6,
              color: 'rgba(17,31,42,0.55)',
              margin: 0,
            }}>
              {insight.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
