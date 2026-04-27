'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { Insight } from '@/data/insights'
import { insightCategories } from '@/data/insights'

interface InsightsGridProps {
  insights: Insight[]
  showFilter?: boolean
}

export default function InsightsGrid({ insights, showFilter = true }: InsightsGridProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All' ? insights : insights.filter(i => i.category === activeCategory)

  return (
    <section className="container-gi py-12">
      {showFilter && (
        <nav className="flex flex-wrap gap-3 mb-10" aria-label="Insight categories">
          {insightCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-2 font-gotham text-sm uppercase tracking-wider border transition-colors',
                activeCategory === cat
                  ? 'bg-dark text-light border-dark'
                  : 'text-dark border-dark hover:bg-dark hover:text-light'
              )}
            >
              {cat}
            </button>
          ))}
        </nav>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(insight => (
          <article key={insight.slug} className="group">
            <Link href={`/insights/${insight.slug}`} className="block">
              <div className="relative aspect-video mb-4 overflow-hidden bg-gray-100">
                <Image
                  src={insight.coverImage}
                  alt={insight.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="font-gotham text-xs uppercase tracking-widest text-text-hover mb-2">
                {insight.category} · {insight.readTime} min read
              </p>
              <h3 className="font-gotham-bold text-dark text-lg leading-snug group-hover:text-text-hover transition-colors">
                {insight.title}
              </h3>
              <p className="font-gotham text-sm text-text-hover mt-2 line-clamp-2">{insight.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
