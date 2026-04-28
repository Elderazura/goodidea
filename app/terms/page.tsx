import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for Goodidea FZ LLC',
}

const SECTIONS = [
  {
    heading: 'Acceptance of Terms',
    body: 'By accessing or using goodidea.ae, you agree to be bound by these Terms of Use. If you do not agree, please do not use the site.',
  },
  {
    heading: 'Intellectual Property',
    body: 'All content on this website — including text, images, video, and brand assets — is the property of Goodidea FZ LLC and protected by UAE and international copyright law. You may not reproduce, distribute, or create derivative works without our written consent.',
  },
  {
    heading: 'Use of the Website',
    body: 'You agree to use this website only for lawful purposes. You must not misuse or attempt to gain unauthorised access to any part of the site or its related services.',
  },
  {
    heading: 'Disclaimer',
    body: 'The website and its contents are provided "as is" without warranties of any kind. Goodidea FZ LLC does not guarantee the accuracy or completeness of any information presented.',
  },
  {
    heading: 'Limitation of Liability',
    body: 'Goodidea FZ LLC shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use this website.',
  },
  {
    heading: 'Governing Law',
    body: 'These terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.',
  },
  {
    heading: 'Contact',
    body: 'Questions about these terms? Email us at dubaiis@goodidea.ae.',
  },
]

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#F8F5F0', minHeight: '100vh', paddingTop: 'calc(72px + 3rem)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem clamp(1.5rem, 5%, 5rem) 6rem' }}>
        <p style={{ fontFamily: "'Gotham Book', sans-serif", fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E85D26', marginBottom: '1rem' }}>
          Legal
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 900, fontStyle: 'italic', fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1, color: '#111F2A', marginBottom: '3rem' }}>
          Terms of Use
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
