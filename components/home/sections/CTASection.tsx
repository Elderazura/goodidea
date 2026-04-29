import Button from '@/components/ui/Button'

export default function CTASection() {
  return (
    <section
      id="section-cta"
      style={{
        background: 'transparent',
        paddingTop: 'clamp(6rem, 14vh, 14rem)',
        paddingBottom: 'clamp(6rem, 14vh, 14rem)',
        paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
        paddingRight: 'clamp(1.5rem, 5%, 5rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <p
        className="reveal-up"
        style={{
          fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
          fontSize: '0.7rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#E85D26',
          marginBottom: '2rem',
        }}
      >
        Let&apos;s Work Together
      </p>
      <h2
        className="reveal-up"
        style={{
          fontFamily: "'Hepta Slab', Georgia, serif",
          fontWeight: 900,
          
          fontSize: 'clamp(4rem, 10vw, 12rem)',
          lineHeight: 0.88,
          color: '#ffffff',
          margin: '0 0 3rem 0',
          letterSpacing: '-0.03em',
          maxWidth: '18ch',
        }}
      >
        Got a good idea?
      </h2>
      <div
        className="reveal-up"
        style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <Button variant="primary" href="/contact" arrow>
          Start a Project
        </Button>
        <a
          href="mailto:dubaiis@goodidea.ae"
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '0.75rem 2rem',
          }}
        >
          dubaiis@goodidea.ae
        </a>
      </div>
    </section>
  )
}
