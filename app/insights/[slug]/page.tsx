import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import { insights, getInsightBySlug } from '@/data/insights'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return insights.map(i => ({ slug: i.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const insight = getInsightBySlug(params.slug)
  if (!insight) return {}
  return {
    title: insight.title,
    description: insight.excerpt,
  }
}

export default function InsightDetailPage({ params }: Props) {
  const insight = getInsightBySlug(params.slug)
  if (!insight) notFound()

  const formattedDate = new Date(insight.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article
      style={{
        backgroundColor: '#F8F5F0',
        minHeight: '100vh',
        paddingTop: 'calc(72px + 3rem)',
      }}
    >
      {/* Article hero */}
      <div
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingTop: '4rem',
          paddingBottom: '3rem',
        }}
      >
        {/* Meta row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#E85D26',
              border: '1px solid #E85D26',
              padding: '0.25rem 0.75rem',
              lineHeight: 1,
            }}
          >
            {insight.category}
          </span>
          <span
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.8rem',
              color: 'rgba(17,31,42,0.6)',
            }}
          >
            {formattedDate}
          </span>
          <span
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.8rem',
              color: 'rgba(17,31,42,0.6)',
            }}
          >
            {insight.readTime} min read
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(3rem, 6vw, 6rem)',
            lineHeight: 1.0,
            color: '#111F2A',
            margin: '0 0 2.5rem 0',
            maxWidth: '15ch',
          }}
        >
          {insight.title}
        </h1>

        {/* Horizontal rule */}
        <div style={{ height: '1px', backgroundColor: 'rgba(17,31,42,0.2)', marginBottom: '2.5rem' }} />

        {/* Cover image — full width 16:9 */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '16/9',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: 'rgba(17,31,42,0.06)',
          }}
        >
          <Image
            src={insight.coverImage}
            alt={insight.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
        </div>
      </div>

      {/* Article body — two columns */}
      <div
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingTop: '4rem',
          paddingBottom: '5rem',
        }}
      >
        <div
          className="insight-body-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '65% 35%',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* Content — 65% */}
          <div>
            <p
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#111F2A',
                marginBottom: '2rem',
              }}
            >
              {insight.excerpt}
            </p>
            <p
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'rgba(17,31,42,0.7)',
                fontStyle: 'italic',
                borderLeft: '3px solid #E85D26',
                paddingLeft: '1.5rem',
                margin: '2rem 0',
              }}
            >
              This article is from the Goodidea Insights series — strategic perspectives on branding, identity, and the UAE market.
            </p>
            <p
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#111F2A',
              }}
            >
              The ideas and observations shared here come from our work with brands across Dubai and the broader MENA region. Every brand challenge is unique, but the principles of strong identity and clear strategy are universal.
            </p>
          </div>

          {/* Sidebar — 35% */}
          <div style={{ position: 'sticky', top: '7rem' }}>
            <div
              style={{
                border: '1px solid rgba(17,31,42,0.2)',
                padding: '1.5rem',
              }}
            >
              <p
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,31,42,0.6)',
                  marginBottom: '1.25rem',
                }}
              >
                About this article
              </p>

              <div style={{ marginBottom: '1rem' }}>
                <p
                  style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(17,31,42,0.5)',
                    marginBottom: '0.25rem',
                  }}
                >
                  Category
                </p>
                <p
                  style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: '#111F2A',
                    margin: 0,
                  }}
                >
                  {insight.category}
                </p>
              </div>

              <div
                style={{
                  height: '1px',
                  backgroundColor: 'rgba(17,31,42,0.1)',
                  margin: '1rem 0',
                }}
              />

              <div style={{ marginBottom: '1rem' }}>
                <p
                  style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(17,31,42,0.5)',
                    marginBottom: '0.25rem',
                  }}
                >
                  Published
                </p>
                <p
                  style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontSize: '0.9rem',
                    color: '#111F2A',
                    margin: 0,
                  }}
                >
                  {formattedDate}
                </p>
              </div>

              <div
                style={{
                  height: '1px',
                  backgroundColor: 'rgba(17,31,42,0.1)',
                  margin: '1rem 0',
                }}
              />

              <div>
                <p
                  style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(17,31,42,0.5)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Tags
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {[insight.category, 'Goodidea', 'Dubai'].map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                        fontSize: '0.65rem',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: '#111F2A',
                        border: '1px solid rgba(17,31,42,0.2)',
                        padding: '0.2rem 0.6rem',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .insight-body-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      ` }} />
    </article>
  )
}
