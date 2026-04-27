import WorkCard from '@/components/works/WorkCard'
import type { Work } from '@/data/works'

interface WorksGridProps {
  works: Work[]
}

export default function WorksGrid({ works }: WorksGridProps) {
  return (
    <section className="container-gi py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {works.map(work => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </section>
  )
}
