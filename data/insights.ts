export interface Insight {
  slug: string
  title: string
  excerpt: string
  category: string
  coverImage: string
  date: string
  readTime: number
}

export const insightCategories = ['All', 'Branding', 'Strategy', 'Social Media', 'Design']

export const insights: Insight[] = [
  {
    slug: 'why-brand-strategy-matters',
    title: 'Why Brand Strategy Matters More Than Your Logo',
    excerpt: 'A logo is just the surface. Brand strategy is the foundation that makes everything work — before, during, and long after launch.',
    category: 'Strategy',
    coverImage: '/images/insights/brand-strategy.jpg',
    date: '2025-01-15',
    readTime: 5,
  },
  {
    slug: 'social-media-branding-2025',
    title: 'Social Media Branding Trends in 2025',
    excerpt: 'What the top brands are doing on social in 2025 — and the three principles that separate the memorable from the forgettable.',
    category: 'Social Media',
    coverImage: '/images/insights/social-trends.jpg',
    date: '2025-02-10',
    readTime: 7,
  },
  {
    slug: 'dubai-market-branding',
    title: 'Branding for the Dubai Market',
    excerpt: 'The nuances of building a brand identity that genuinely resonates with UAE audiences across cultures, languages, and generations.',
    category: 'Branding',
    coverImage: '/images/insights/dubai-branding.jpg',
    date: '2025-03-01',
    readTime: 6,
  },
  {
    slug: 'naming-your-brand',
    title: 'The Art and Science of Brand Naming',
    excerpt: 'How to find a name that is distinctive, ownable, and works across markets — and the mistakes most founders make in the process.',
    category: 'Branding',
    coverImage: '/images/insights/naming.jpg',
    date: '2025-03-20',
    readTime: 8,
  },
]

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find(i => i.slug === slug)
}
