import type { Metadata } from 'next'
import InsightsGrid from '@/components/home/InsightsGrid'
import { insights } from '@/data/insights'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Branding, strategy, and design insights from the Goodidea team.',
}

export default function InsightsPage() {
  return (
    <div>
      <div className="container-gi pt-12 pb-4">
        <h1 className="font-gotham-bold text-dark text-heading-lg">Insights</h1>
      </div>
      <InsightsGrid insights={insights} showFilter={true} />
    </div>
  )
}
