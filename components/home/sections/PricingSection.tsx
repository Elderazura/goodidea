import Link from 'next/link'

const PRICING = [
  { tier: 'Brand Essentials', from: 'From AED 8,000',  desc: 'Logo, brand guide, core assets. Perfect for startups and new ventures.' },
  { tier: 'Brand Standard',   from: 'From AED 18,000', desc: 'Full identity system plus strategy and tone-of-voice framework.' },
  { tier: 'Brand Premium',    from: 'From AED 40,000', desc: 'End-to-end brand development with research, strategy, identity, and launch.' },
]

export default function PricingSection() {
  return (
    <section
      id="section-pricing"
      style={{
        background: 'transparent',
        paddingTop: 'clamp(5rem, 10vh, 9rem)',
        paddingBottom: 'clamp(5rem, 10vh, 9rem)',
        paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
        paddingRight: 'clamp(1.5rem, 5%, 5rem)',
      }}
    >
      <div className="reveal-up" style={{ marginBottom: '4rem' }}>
        <p style={{
          fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
          fontSize: '0.7rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#E85D26',
          marginBottom: '1.25rem',
        }}>
          Investment
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 'clamp(3rem, 6vw, 6rem)',
          lineHeight: 0.92,
          color: '#111F2A',
          margin: '0 0 1.5rem 0',
          letterSpacing: '-0.02em',
        }}>
          Straightforward.<br />No surprises.
        </h2>
        <p style={{
          fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
          fontSize: '1.05rem',
          lineHeight: 1.7,
          color: 'rgba(17,31,42,0.6)',
          maxWidth: '50ch',
        }}>
          We offer clear, project-based pricing. No retainers or hidden fees — just honest work at fair rates.
        </p>
      </div>

      <div className="pricing-grid">
        {PRICING.map((p, i) => (
          <div
            key={p.tier}
            className="reveal-up"
            style={{
              padding: '3rem 2.5rem',
              borderTop: '1px solid rgba(17,31,42,0.15)',
              borderLeft: i > 0 ? '1px solid rgba(17,31,42,0.15)' : undefined,
            }}
          >
            <p style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(17,31,42,0.5)',
              marginBottom: '1.25rem',
            }}>
              {p.tier}
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
              color: '#E85D26',
              marginBottom: '1.25rem',
              lineHeight: 1.1,
            }}>
              {p.from}
            </p>
            <p style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.875rem',
              lineHeight: 1.7,
              color: 'rgba(17,31,42,0.6)',
            }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="reveal-up" style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link
          href="/pricing"
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#111F2A',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(17,31,42,0.4)',
            paddingBottom: '2px',
          }}
        >
          View Full Pricing →
        </Link>
      </div>
    </section>
  )
}
