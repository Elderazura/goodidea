import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import WorkNavigation from '@/components/works/WorkNavigation'
import { works, getWorkBySlug, getAdjacentWorks } from '@/data/works'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return works.map(work => ({ slug: work.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const work = getWorkBySlug(params.slug)
  if (!work) return {}
  return {
    title: work.title,
    description: work.tagline,
  }
}

export default function WorkDetailPage({ params }: Props) {
  const work = getWorkBySlug(params.slug)
  if (!work) notFound()

  const { prev, next } = getAdjacentWorks(params.slug)

  return (
    <article style={{ backgroundColor: '#F8F5F0' }}>
      {/* Project Hero — full viewport, dark background */}
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

        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
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
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(5rem, 10vw, 12rem)',
              lineHeight: 0.95,
              color: '#ffffff',
              margin: '0 0 2rem 0',
            }}
          >
            {work.title}
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

      {/* Project Details */}
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
          <div>
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
            style={{
              borderLeft: '1px solid rgba(17,31,42,0.2)',
              paddingLeft: '3rem',
            }}
          >
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

      <WorkNavigation prev={prev} next={next} />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .work-detail-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .work-detail-grid > div:last-child { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(17,31,42,0.2); padding-top: 2rem; }
        }
      ` }} />
    </article>
  )
}
