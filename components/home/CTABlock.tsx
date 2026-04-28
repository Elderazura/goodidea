import Link from 'next/link'

export default function CTABlock() {
  return (
    <section
      style={{
        backgroundColor: '#111F2A',
        width: '100%',
        padding: '6rem clamp(1.5rem, 5%, 5rem)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '3rem',
      }}
      className="cta-block"
    >
      {/* Left: headline */}
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 'clamp(3rem, 6vw, 6rem)',
          lineHeight: 1.05,
          color: '#F8F5F0',
          margin: 0,
          maxWidth: '18ch',
        }}
      >
        Ready to build something remarkable?
      </h2>

      {/* Right: actions */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1rem',
          flexShrink: 0,
        }}
        className="cta-block-actions"
      >
        <Link
          href="/contact"
          className="cta-block-btn"
          style={{
            display: 'inline-block',
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontWeight: 700,
            fontSize: '0.8125rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            color: '#F8F5F0',
            border: '1px solid #F8F5F0',
            padding: '1rem 2.5rem',
            textDecoration: 'none',
            transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
          }}
        >
          Start a Project
        </Link>

        <Link
          href="/contact?type=call"
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.8rem',
            color: 'rgba(248,245,240,0.8)',
            textDecoration: 'underline',
          }}
        >
          or book a free call
        </Link>
      </div>

      <style>{`
        .cta-block-btn:hover {
          background-color: #E85D26 !important;
          border-color: #E85D26 !important;
        }
        @media (max-width: 768px) {
          .cta-block {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .cta-block-actions {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  )
}
