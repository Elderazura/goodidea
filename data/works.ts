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
    slug: 'woodo',
    title: 'Woodo',
    tagline: 'A brand rooted in craft',
    category: 'Branding',
    posterImage: '/images/works/woodo-1.webp',
    mainVideo: '/videos/work-1.mp4',
    mediumVideo: '/videos/work-1.mp4',
    description: 'Complete brand identity for Woodo — a UAE artisanal brand celebrating craft and heritage. From naming to visual system, packaging to tone of voice.',
    year: 2025,
  },
  {
    slug: 'orego',
    title: 'Orego',
    tagline: 'Fresh flavour, fresh identity',
    category: 'Branding',
    posterImage: '/images/works/orego-1.webp',
    mainVideo: '/videos/work-2.mp4',
    mediumVideo: '/videos/work-2.mp4',
    description: 'Brand identity and packaging design for Orego — a bold, herb-forward food brand built for the modern UAE market.',
    year: 2025,
  },
  {
    slug: 'qawafil',
    title: 'Qawafil',
    tagline: 'Journeys made meaningful',
    category: 'Strategy',
    posterImage: '/images/works/qawafil-1.webp',
    mainVideo: '/videos/work-3.mp4',
    mediumVideo: '/videos/work-3.mp4',
    description: 'Brand strategy, naming and identity for Qawafil — a heritage travel and culture brand connecting Gulf audiences to authentic experiences.',
    year: 2025,
  },
  {
    slug: 'nova-identity',
    title: 'Nova',
    tagline: 'Social presence redefined',
    category: 'Social Media',
    posterImage: '/images/works/work-2.jpg',
    mainVideo: '/videos/work-2.mp4',
    mediumVideo: '/videos/work-2.mp4',
    description: 'Complete social media brand identity for a Dubai-based wellness brand, including template systems and content guidelines.',
    year: 2024,
  },
  {
    slug: 'meridian-identity',
    title: 'Meridian',
    tagline: 'Identity that speaks volumes',
    category: 'Branding',
    posterImage: '/images/works/work-3.jpg',
    mainVideo: '/videos/work-3.mp4',
    mediumVideo: '/videos/work-3.mp4',
    description: 'Logo design, brand guidelines, and full identity system for a regional fintech startup entering the UAE market.',
    year: 2024,
  },
  {
    slug: 'pivot-strategy',
    title: 'Pivot',
    tagline: 'Strategy meets creativity',
    category: 'Strategy',
    posterImage: '/images/works/work-4.jpg',
    mainVideo: '/videos/work-4.mp4',
    mediumVideo: '/videos/work-4.mp4',
    description: 'Go-to-market strategy, brand positioning, and naming for a new B2B SaaS platform targeting MENA enterprises.',
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
