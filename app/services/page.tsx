import type { Metadata } from 'next'
import CTABlock from '@/components/home/CTABlock'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Branding, strategy, and social media services by Goodidea Dubai.',
}

const services = [
  {
    number: '01',
    title: 'Brand Identity',
    description:
      'We craft visual identities that are distinctive, ownable, and built to last — from logo and typography to the full visual language of your brand.',
  },
  {
    number: '02',
    title: 'Brand Strategy',
    description:
      'We build the strategic foundations that give your brand clarity, direction, and a reason to exist — positioning, messaging, and go-to-market frameworks that work.',
  },
  {
    number: '03',
    title: 'Social Media Branding',
    description:
      'We define how your brand shows up online — template systems, content guidelines, and visual frameworks that keep your social presence sharp and consistent.',
  },
  {
    number: '04',
    title: 'Naming & Verbal Identity',
    description:
      'We find the words that work — brand names, taglines, and tone-of-voice guidelines that make your brand sound as distinctive as it looks.',
  },
]

export default function ServicesPage() {
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
          Services
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(3rem, 7vw, 7rem)',
            lineHeight: 1.0,
            color: '#111F2A',
            margin: 0,
          }}
        >
          How we
          <br />
          help you.
        </h1>
      </div>

      {/* Services editorial list */}
      <div
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}
      >
        {services.map(service => (
          <div
            key={service.number}
            style={{
              borderBottom: '1px solid rgba(17,31,42,0.2)',
              paddingBottom: '3.5rem',
              marginBottom: '3.5rem',
            }}
          >
            {/* Number + rule row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 900,
                  fontStyle: 'italic',
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  lineHeight: 1,
                  color: '#E85D26',
                  opacity: 0.5,
                  flexShrink: 0,
                }}
              >
                {service.number}
              </span>
              <div
                style={{
                  flex: 1,
                  height: '1px',
                  backgroundColor: 'rgba(17,31,42,0.2)',
                }}
              />
            </div>

            {/* Service name */}
            <h2
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                color: '#111F2A',
                margin: '0 0 1rem 0',
                lineHeight: 1.2,
              }}
            >
              {service.title}
            </h2>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'rgba(17,31,42,0.6)',
                margin: '0 0 1.5rem 0',
                maxWidth: '60ch',
              }}
            >
              {service.description}
            </p>

            {/* Learn more link */}
            <a
              href="/contact"
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.8125rem',
                letterSpacing: '0.06em',
                color: '#E85D26',
                textDecoration: 'none',
              }}
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>

      <CTABlock />
    </div>
  )
}
