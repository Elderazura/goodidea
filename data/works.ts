export interface Work {
  slug: string
  title: string
  tagline: string
  category: string
  posterImage: string
  mainVideo?: string
  mediumVideo?: string
  description: string
  year: number
}

export const works: Work[] = [
  {
    slug: 'elevate-brand',
    title: 'Elevate',
    tagline: 'Brand strategy that connects',
    category: 'Branding',
    posterImage: '/images/works/elevate-poster.jpg',
    mainVideo: '/videos/elevate-main.mp4',
    mediumVideo: '/videos/elevate-medium.mp4',
    description: 'A comprehensive brand identity and strategy for a leading UAE hospitality group. From positioning to full visual system.',
    year: 2025,
  },
  {
    slug: 'nova-identity',
    title: 'Nova',
    tagline: 'Social presence redefined',
    category: 'Social Media',
    posterImage: '/images/works/nova-poster.jpg',
    mainVideo: '/videos/nova-main.mp4',
    mediumVideo: '/videos/nova-medium.mp4',
    description: 'Complete social media brand identity for a Dubai-based wellness brand, including template systems and content guidelines.',
    year: 2024,
  },
  {
    slug: 'meridian-identity',
    title: 'Meridian',
    tagline: 'Identity that speaks volumes',
    category: 'Branding',
    posterImage: '/images/works/meridian-poster.jpg',
    description: 'Logo design, brand guidelines, and full identity system for a regional fintech startup entering the UAE market.',
    year: 2024,
  },
  {
    slug: 'pivot-strategy',
    title: 'Pivot',
    tagline: 'Strategy meets creativity',
    category: 'Strategy',
    posterImage: '/images/works/pivot-poster.jpg',
    description: 'Go-to-market strategy, brand positioning, and naming for a new B2B SaaS platform targeting MENA enterprises.',
    year: 2023,
  },
  {
    slug: 'bloom-social',
    title: 'Bloom',
    tagline: 'Beauty, bottled and branded',
    category: 'Branding',
    posterImage: '/images/works/bloom-poster.jpg',
    description: 'Packaging design, brand identity, and digital presence for a UAE homegrown beauty brand.',
    year: 2023,
  },
  {
    slug: 'apex-naming',
    title: 'Apex',
    tagline: 'A name worth owning',
    category: 'Strategy',
    posterImage: '/images/works/apex-poster.jpg',
    description: 'Brand naming, verbal identity, and tone-of-voice framework for a luxury real estate developer in Dubai.',
    year: 2023,
  },
]

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find(w => w.slug === slug)
}

export function getAdjacentWorks(slug: string): { prev: Work | null; next: Work | null } {
  const index = works.findIndex(w => w.slug === slug)
  return {
    prev: index > 0             ? works[index - 1] : null,
    next: index < works.length - 1 ? works[index + 1] : null,
  }
}
