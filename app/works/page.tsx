import type { Metadata } from 'next'
import WorksGrid from '@/components/home/WorksGrid'
import { works } from '@/data/works'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Portfolio of branding and strategy projects by Goodidea Dubai.',
}

export default function WorksPage() {
  return (
    <div>
      <div className="container-gi pt-12 pb-4">
        <h1 className="font-gotham-bold text-dark text-heading-lg">Our Work</h1>
      </div>
      <WorksGrid works={works} />
    </div>
  )
}
