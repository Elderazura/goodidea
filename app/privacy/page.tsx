import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Goodidea FZ LLC',
}

const SECTIONS = [
  {
    heading: 'Information We Collect',
    body: 'We collect information you provide directly — such as your name, email address, and project details when you contact us or schedule a meeting. We also collect standard analytics data (pages visited, session duration) through Google Analytics.',
  },
  {
    heading: 'How We Use Your Information',
    body: 'We use your information solely to respond to enquiries, deliver project work, send relevant communications you have requested, and improve our website. We never sell your data to third parties.',
  },
  {
    heading: 'Cookies',
    body: 'Our website uses cookies for analytics (Google Analytics) and to remember your preferences. You can disable cookies in your browser settings at any time.',
  },
  {
    heading: 'Data Retention',
    body: 'We retain enquiry data for up to two years. You may request deletion at any time by emailing dubaiis@goodidea.ae.',
  },
  {
    heading: 'Third-Party Services',
    body: 'We use Calendly for scheduling and Google Analytics for usage data. Both services operate under their own privacy policies.',
  },
  {
    heading: 'Contact',
    body: 'For any privacy-related questions, email us at dubaiis@goodidea.ae.',
  },
]

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#F8F5F0', minHeight: '100vh', paddingTop: 'calc(72px + 3rem)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem clamp(1.5rem, 5%, 5rem) 6rem' }}>
        <p style={{ fontFamily: "'Gotham Book', sans-serif", fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E85D26', marginBottom: '1rem' }}>
          Legal
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 900, fontStyle: 'italic', fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1, color: '#111F2A', marginBottom: '3rem' }}>
          Privacy Policy
        </h1>
        <p style={{ fontFamily: "'Gotham Book', sans-serif", fontSize: '0.85rem', color: 'rgba(17,31,42,0.5)', marginBottom: '3rem' }}>
          Last updated: April 2026
        </p>
        {SECTIONS.map(({ heading, body }) => (
          <div key={heading} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: "'Gotham Book', sans-serif", fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111F2A', marginBottom: '0.75rem' }}>
              {heading}
            </h2>
            <p style={{ fontFamily: "'Gotham Book', sans-serif", fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(17,31,42,0.75)' }}>
              {body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
