import type { Metadata } from 'next'
import { contactInfo, socialLinks } from '@/data/site'
import { InstagramIcon, FacebookIcon, LinkedInIcon } from '@/components/ui/SocialIcons'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Goodidea Dubai — branding and strategy agency.',
}

const iconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
}

export default function ContactPage() {
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
          Contact
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
          Let&apos;s talk
          <br />
          ideas.
        </h1>
      </div>

      {/* Two-column body */}
      <div
        style={{
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}
      >
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: info */}
          <div>
            <h2
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(17,31,42,0.6)',
                marginBottom: '1.5rem',
              }}
            >
              Get in touch
            </h2>

            {/* Contact details */}
            <div style={{ marginBottom: '2.5rem' }}>
              <a
                href={`mailto:${contactInfo.email}`}
                style={{
                  display: 'block',
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '1.125rem',
                  color: '#111F2A',
                  textDecoration: 'none',
                  marginBottom: '0.75rem',
                  borderBottom: '1px solid rgba(17,31,42,0.2)',
                  paddingBottom: '0.75rem',
                }}
              >
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                style={{
                  display: 'block',
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '1.125rem',
                  color: '#111F2A',
                  textDecoration: 'none',
                  marginBottom: '0.75rem',
                  borderBottom: '1px solid rgba(17,31,42,0.2)',
                  paddingBottom: '0.75rem',
                }}
              >
                {contactInfo.phone}
              </a>
              <address
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '1rem',
                  color: 'rgba(17,31,42,0.7)',
                  fontStyle: 'normal',
                  lineHeight: 1.6,
                }}
              >
                {contactInfo.address}
                <br />
                {contactInfo.city}, UAE
              </address>
            </div>

            {/* Social links */}
            <div style={{ marginBottom: '2.5rem' }}>
              <p
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,31,42,0.6)',
                  marginBottom: '1rem',
                }}
              >
                Follow Us
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'center',
                }}
              >
                {socialLinks.map(link => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap]
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        style={{
                          display: 'inline-flex',
                          color: '#111F2A',
                          opacity: 0.7,
                          transition: 'opacity 0.2s ease',
                        }}
                        className="social-link"
                      >
                        {Icon && <Icon width={22} height={22} />}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Hours */}
            <div>
              <p
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,31,42,0.6)',
                  marginBottom: '0.5rem',
                }}
              >
                Office Hours
              </p>
              <p
                style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.9rem',
                  color: '#111F2A',
                  margin: 0,
                }}
              >
                Sunday – Thursday, 9am – 6pm GST
              </p>
            </div>
          </div>

          {/* Right: Calendly */}
          <div>
            <p
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(17,31,42,0.6)',
                marginBottom: '1.5rem',
              }}
            >
              Book a free 30-min call
            </p>

            <div
              className="calendly-inline-widget"
              data-url={contactInfo.calendlyUrl}
              style={{
                minWidth: '320px',
                height: '630px',
                border: '1px solid rgba(17,31,42,0.2)',
              }}
            />

            <p
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.8rem',
                color: 'rgba(17,31,42,0.5)',
                marginTop: '1rem',
              }}
            >
              Or email us directly at{' '}
              <a
                href={`mailto:${contactInfo.email}`}
                style={{ color: '#E85D26', textDecoration: 'none' }}
              >
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .social-link:hover {
          opacity: 1 !important;
          color: #E85D26 !important;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  )
}
