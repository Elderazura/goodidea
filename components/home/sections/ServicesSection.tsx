import Link from 'next/link'

const SERVICES = [
  { num: '01', title: 'Brand Identity',  desc: 'Logo systems, visual language, color, type — a complete identity built to last.' },
  { num: '02', title: 'Brand Strategy',  desc: 'Positioning, competitive analysis, purpose and proof points.' },
  { num: '03', title: 'Naming',          desc: 'Memorable, ownable names rooted in strategy and culture.' },
  { num: '04', title: 'Tone of Voice',   desc: 'A distinct verbal identity — how your brand speaks to the world.' },
  { num: '05', title: 'Social Media',    desc: 'Content systems, creative direction, and platform strategy.' },
  { num: '06', title: 'Website Design',  desc: 'Conversion-first web experiences that feel as good as they perform.' },
]

const P = {
  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
  fontSize: '0.7rem',
  letterSpacing: '0.16em',
  textTransform: 'uppercase' as const,
  color: '#E85D26',
  marginBottom: '1.25rem',
}

export default function ServicesSection() {
  return (
    <section
      id="section-services"
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
          marginBottom: '5rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <div>
          <p style={P}>What We Do</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(3rem, 7vw, 7rem)',
            lineHeight: 0.92,
            color: '#ffffff',
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            Services built<br />for impact.
          </h2>
        </div>
        <Link
          href="/services"
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.3)',
            paddingBottom: '2px',
            alignSelf: 'flex-end',
          }}
        >
          All Services →
        </Link>
      </div>

      <div>
        {SERVICES.map((s, i) => (
          <div
            key={s.num}
            className="service-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '3rem 1fr 1fr',
              gap: '2rem',
              alignItems: 'center',
              paddingTop: '1.75rem',
              paddingBottom: '1.75rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              ...(i === SERVICES.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.1)' } : {}),
            }}
          >
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '1rem', color: '#E85D26' }}>
              {s.num}
            </span>
            <span style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
              color: '#ffffff',
              letterSpacing: '-0.01em',
            }}>
              {s.title}
            </span>
            <span
              className="service-desc"
              style={{ fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif", fontSize: '0.875rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)' }}
            >
              {s.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
