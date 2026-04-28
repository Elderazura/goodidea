import type { Metadata } from 'next'
import InsightsGrid from '@/components/home/InsightsGrid'
import { insights } from '@/data/insights'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Branding, strategy, and design insights from the Goodidea team.',
}

export default function InsightsPage() {
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
          Insights
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
          Ideas worth
          <br />
          sharing.
        </h1>
      </div>

      <InsightsGrid insights={insights} showFilter={true} />
    </div>
  )
}
