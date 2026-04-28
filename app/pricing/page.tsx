import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import { pricingPackages } from '@/data/pricing'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent branding packages for every stage of your business.',
}

// Feature lists per package derived from pricingSpecs
const starterFeatures = [
  '1 logo concept',
  'Business card design',
  'Email signature',
  '2 revision rounds',
]

const growthFeatures = [
  '3 logo concepts',
  'Brand guidelines',
  'Social media kit',
  '1 brand positioning session',
  'Email signature & letterhead',
  '4 revision rounds',
]

const enterpriseFeatures = [
  'Unlimited logo concepts',
  'Full brand guidelines',
  'Website design',
  'Brand naming',
  'Tone of voice framework',
  'Motion templates',
  'Unlimited revisions',
]

const packageFeatures: Record<string, string[]> = {
  a: starterFeatures,
  b: growthFeatures,
  c: enterpriseFeatures,
}

export default function PricingPage() {
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
          Pricing
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
          Transparent
          <br />
          pricing.
        </h1>
        <p
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '1.125rem',
            color: 'rgba(17,31,42,0.6)',
            margin: 0,
          }}
        >
          No surprises. Just clear value.
        </p>
      </div>

      {/* Pricing cards */}
      <div
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}
      >
        <div
          className="pricing-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            alignItems: 'start',
          }}
        >
          {pricingPackages.map(pkg => {
            const isHighlighted = pkg.highlighted
            const features = packageFeatures[pkg.id] || []

            return (
              <div
                key={pkg.id}
                style={{
                  border: isHighlighted
                    ? '1px solid #111F2A'
                    : '1px solid rgba(17,31,42,0.2)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#F8F5F0',
                }}
              >
                {/* Most popular badge */}
                {isHighlighted && (
                  <p
                    style={{
                      fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                      fontSize: '0.65rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#E85D26',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Most Popular
                  </p>
                )}

                {/* Package name */}
                <p
                  style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#E85D26',
                    marginBottom: '1.5rem',
                  }}
                >
                  {pkg.name}
                </p>

                {/* Price row */}
                <div style={{ marginBottom: '0.5rem' }}>
                  <p
                    style={{
                      fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(17,31,42,0.6)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    AED
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 900,
                      fontStyle: 'italic',
                      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                      lineHeight: 1,
                      color: '#111F2A',
                      margin: '0 0 0.25rem 0',
                    }}
                  >
                    {pkg.priceAED}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                      fontSize: '0.75rem',
                      color: 'rgba(17,31,42,0.6)',
                    }}
                  >
                    / USD ${pkg.priceUSD}
                  </p>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: '1px',
                    backgroundColor: 'rgba(17,31,42,0.2)',
                    margin: '1.5rem 0',
                  }}
                />

                {/* Feature list */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1 }}>
                  {features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        paddingTop: '0.75rem',
                        paddingBottom: '0.75rem',
                        borderBottom: '1px solid rgba(17,31,42,0.1)',
                        fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                        fontSize: '0.9rem',
                        color: '#111F2A',
                      }}
                    >
                      <span
                        style={{
                          color: '#E85D26',
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: '0.05em',
                        }}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <Button href={pkg.url} variant={isHighlighted ? 'primary' : 'secondary'} size="md">
                  Get Started
                </Button>
              </div>
            )
          })}
        </div>

        {/* Note */}
        <p
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.875rem',
            color: 'rgba(17,31,42,0.6)',
            marginTop: '3rem',
            textAlign: 'center',
          }}
        >
          All prices in AED. Custom packages available.{' '}
          <a
            href="/contact"
            style={{ color: '#111F2A', textDecoration: 'underline' }}
          >
            Contact us to discuss.
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .pricing-cards {
            grid-template-columns: 1fr !important;
            max-width: 480px;
            margin: 0 auto;
          }
        }
        @media (max-width: 640px) {
          .pricing-cards {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
