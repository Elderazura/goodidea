export interface Work {
  slug: string
  title: string
  tagline: string
  category: string
  /** Short 3–4 word discipline tag shown on cards */
  discipline?: string
  /** Hero/card image */
  posterImage: string
  /** All gallery images for the work detail page */
  gallery: string[]
  mainVideo?: string
  description: string
  year: number
}

export const works: Work[] = [
  {
    slug: 'woodo',
    title: 'Woodo',
    tagline: 'A brand rooted in craft',
    category: 'Branding',
    discipline: 'Brand Identity',
    posterImage: '/images/works/woodo-1.webp',
    gallery: [
      '/images/works/woodo-1.webp',
      '/images/works/woodo-2.webp',
      '/images/works/woodo-3.webp',
      '/images/works/woodo-4.webp',
      '/images/works/woodo-5.webp',
      '/images/works/woodo-6.webp',
      '/images/works/woodo-7.webp',
      '/images/works/woodo-8.webp',
      '/images/works/woodo-9.webp',
      '/images/works/woodo-10.webp',
      '/images/works/woodo-11.webp',
      '/images/works/woodo-12.webp',
      '/images/works/woodo-13.webp',
      '/images/works/woodo-14.webp',
      '/images/works/woodo-15.webp',
      '/images/works/woodo-16.webp',
    ],
    mainVideo: '/videos/work-1.mp4',
    description:
      'Complete brand identity for Woodo — a UAE artisanal brand celebrating craft and heritage. From naming to visual system, packaging to tone of voice.',
    year: 2025,
  },
  {
    slug: 'orego',
    title: 'Orego',
    tagline: 'Fresh flavour, fresh identity',
    category: 'Branding',
    discipline: 'Brand Identity',
    posterImage: '/images/works/orego-1.webp',
    gallery: [
      '/images/works/orego-cover.webp',
      '/images/works/orego-2.webp',
      '/images/works/orego-3.webp',
      '/images/works/orego-4.webp',
      '/images/works/orego-5.webp',
      '/images/works/orego-6.webp',
      '/images/works/orego-7.webp',
      '/images/works/orego-8.webp',
      '/images/works/orego-9.webp',
      '/images/works/orego-10.webp',
    ],
    mainVideo: '/videos/work-2.mp4',
    description:
      'Brand identity and packaging design for Orego — a bold, herb-forward food brand built for the modern UAE market.',
    year: 2025,
  },
  {
    slug: 'qawafil',
    title: 'Qawafil',
    tagline: 'Journeys made meaningful',
    category: 'Strategy',
    discipline: 'Brand Strategy',
    posterImage: '/images/works/qawafil-1.webp',
    gallery: [
      '/images/works/qawafil-1.webp',
      '/images/works/qawafil-full.webp',
    ],
    mainVideo: '/videos/work-3.mp4',
    description:
      'Brand strategy, naming and identity for Qawafil — a heritage travel and culture brand connecting Gulf audiences to authentic experiences.',
    year: 2025,
  },
  {
    slug: 'files',
    title: 'Files',
    tagline: 'Order in beautiful form',
    category: 'Branding',
    discipline: 'Brand Identity',
    posterImage: '/images/works/files-2.webp',
    gallery: [
      '/images/works/files-1.webp',
      '/images/works/files-2.webp',
      '/images/works/files-3.webp',
      '/images/works/files-4.webp',
      '/images/works/files-5.webp',
      '/images/works/files-6.webp',
      '/images/works/files-7.webp',
      '/images/works/files-8.webp',
      '/images/works/files-9.webp',
      '/images/works/files-10.webp',
    ],
    mainVideo: '/videos/work-4.mp4',
    description:
      'Brand identity for Files — a UAE-based productivity and workspace brand. Clean, structured visual language with a system that scales across digital and physical touchpoints.',
    year: 2025,
  },
  {
    slug: 'nova-identity',
    title: 'Nova',
    tagline: 'Social presence redefined',
    category: 'Social Media',
    discipline: 'Social Branding',
    posterImage: '/images/works/work-2.jpg',
    gallery: [
      '/images/works/work-2.jpg',
      '/images/works/shoot-1.jpg',
      '/images/works/shoot-2.jpg',
      '/images/works/shoot-3.jpg',
    ],
    mainVideo: '/videos/work-2.mp4',
    description:
      'Complete social media brand identity for a Dubai-based wellness brand, including template systems and content guidelines.',
    year: 2024,
  },
  {
    slug: 'meridian-identity',
    title: 'Meridian',
    tagline: 'Identity that speaks volumes',
    category: 'Branding',
    discipline: 'Brand Identity',
    posterImage: '/images/works/work-3.jpg',
    gallery: [
      '/images/works/work-3.jpg',
      '/images/works/shoot-4.jpg',
      '/images/works/shoot-5.jpg',
    ],
    mainVideo: '/videos/work-3.mp4',
    description:
      'Logo design, brand guidelines, and full identity system for a regional fintech startup entering the UAE market.',
    year: 2024,
  },
  {
    slug: 'pivot-strategy',
    title: 'Pivot',
    tagline: 'Strategy meets creativity',
    category: 'Strategy',
    discipline: 'Brand Strategy',
    posterImage: '/images/works/work-4.jpg',
    gallery: [
      '/images/works/work-4.jpg',
      '/images/works/shoot-6.jpg',
    ],
    mainVideo: '/videos/work-4.mp4',
    description:
      'Go-to-market strategy, brand positioning, and naming for a new B2B SaaS platform targeting MENA enterprises.',
    year: 2023,
  },
]

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find(w => w.slug === slug)
}

export function getAdjacentWorks(slug: string): { prev: Work | null; next: Work | null } {
  const index = works.findIndex(w => w.slug === slug)
  return {
    prev: index > 0               ? works[index - 1] : null,
    next: index < works.length - 1 ? works[index + 1] : null,
  }
}
