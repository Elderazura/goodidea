import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import WorkNavigation from '@/components/works/WorkNavigation'
import { works, getWorkBySlug, getAdjacentWorks } from '@/data/works'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return works.map(work => ({ slug: work.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const work = getWorkBySlug(params.slug)
  if (!work) return {}
  return {
    title: work.title,
    description: work.tagline,
  }
}

export default function WorkDetailPage({ params }: Props) {
  const work = getWorkBySlug(params.slug)
  if (!work) notFound()

  const { prev, next } = getAdjacentWorks(params.slug)

  return (
    <article>
      <div className="relative w-full bg-dark" style={{ paddingBottom: '56.25%' }}>
        {work.mainVideo ? (
          <video
            src={work.mainVideo}
            poster={work.posterImage}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={work.posterImage}
            alt={work.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      <div className="container-gi py-12 max-w-3xl">
        <p className="font-gotham text-sm uppercase tracking-widest text-text-hover mb-3">
          {work.category} · {work.year}
        </p>
        <h1 className="font-gotham-bold text-dark text-heading-lg mb-4">{work.title}</h1>
        <p className="font-gotham text-body text-dark leading-relaxed">{work.description}</p>
      </div>

      <WorkNavigation prev={prev} next={next} />
    </article>
  )
}
