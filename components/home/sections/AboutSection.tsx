import Link from 'next/link'

export default function AboutSection() {
  return (
    <section
      id="section-about"
      style={{
        background: 'transparent',
        paddingTop: 'clamp(6rem, 12vh, 12rem)',
        paddingBottom: 'clamp(6rem, 12vh, 12rem)',
        paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
        paddingRight: 'clamp(1.5rem, 5%, 5rem)',
      }}
    >
      <div className="about-grid">
        {/* Left — editorial quote */}
        <div>
          <p
            className="reveal-up"
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E85D26',
              marginBottom: '2.5rem',
            }}
          >
            Our Story
          </p>
          <h2
            className="reveal-up"
            style={{
              fontFamily: "'Hepta Slab', Georgia, serif",
              fontWeight: 900,
              
              fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
              lineHeight: 1.0,
              color: '#ffffff',
              margin: '0 0 2.5rem 0',
              letterSpacing: '-0.02em',
            }}
          >
            Good ideas change everything — if you know how to build them.
          </h2>
          <p
            className="reveal-up"
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.5)',
              marginBottom: '3rem',
              maxWidth: '48ch',
            }}
          >
            Founded in Dubai in 2018, Goodidea is a creative and branding studio that helps ambitious businesses find their identity, their voice, and their audience. We work where strategy meets creativity.
          </p>
          <Link
            href="/about"
            className="reveal-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#ffffff',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              paddingBottom: '2px',
            }}
          >
            Meet the team →
          </Link>
        </div>

        {/* Right — image + floating stat */}
        <div className="reveal-up" style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/team/studio.jpeg"
              alt="Goodidea studio"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
          <div style={{
            position: 'absolute',
            bottom: '-2rem',
            right: '-2rem',
            backgroundColor: '#E85D26',
            padding: '2rem 2.5rem',
            zIndex: 10,
          }}>
            <div style={{
              fontFamily: "'Hepta Slab', Georgia, serif",
              fontWeight: 900,
              
              fontSize: '3.5rem',
              color: '#ffffff',
              lineHeight: 1,
              marginBottom: '0.25rem',
            }}>
              200+
            </div>
            <div style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
            }}>
              Brands Built
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
