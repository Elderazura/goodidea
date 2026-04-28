import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { works, getWorkBySlug, getAdjacentWorks } from '@/data/works'
import WorkDetailClient from './WorkDetailClient'

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
  const otherWorks = works.filter(w => w.slug !== work.slug).slice(0, 2)

  return (
    <WorkDetailClient
      work={work}
      prev={prev}
      next={next}
      otherWorks={otherWorks}
    />
  )
}
