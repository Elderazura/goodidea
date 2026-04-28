import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import { insights, getInsightBySlug } from '@/data/insights'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return insights.map(i => ({ slug: i.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const insight = getInsightBySlug(params.slug)
  if (!insight) return {}
  return {
    title: insight.title,
    description: insight.excerpt,
  }
}

export default function InsightDetailPage({ params }: Props) {
  const insight = getInsightBySlug(params.slug)
  if (!insight) notFound()

  return (
    <article className="container-gi py-12 max-w-3xl">
      <p className="font-gotham text-xs uppercase tracking-widest text-text-hover mb-4">
        {insight.category} · {insight.readTime} min read · {insight.date}
      </p>
      <h1 className="font-gotham-bold text-dark text-heading-lg mb-8">{insight.title}</h1>

      <div className="relative aspect-video mb-10">
        <Image
          src={insight.coverImage}
          alt={insight.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>

      <p className="font-gotham text-body text-dark leading-relaxed">{insight.excerpt}</p>
    </article>
  )
}
