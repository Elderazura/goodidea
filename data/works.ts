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
  // ── Real projects from WordPress ──────────────────────────────────────────
  {
    slug: 'woodo',
    title: 'Woodo',
    tagline: 'A brand rooted in craft',
    category: 'Branding',
    discipline: 'Brand Identity',
    posterImage: '/images/works/woodo-3.webp',
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
    posterImage: '/images/works/orego-cover.webp',
    gallery: [
      '/images/works/orego-1.webp',
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
    slug: 'files',
    title: 'Files',
    tagline: 'Order in beautiful form',
    category: 'Branding',
    discipline: 'Brand Identity',
    posterImage: '/images/works/files-3.webp',
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
    slug: 'meraki',
    title: 'Meraki',
    tagline: 'Soulful creativity, expressed',
    category: 'Branding',
    discipline: 'Brand Identity',
    posterImage: '/images/works/meraki-1.jpg',
    gallery: [
      '/images/works/meraki-1.jpg',
      '/images/works/meraki-2.jpg',
      '/images/works/meraki-3.jpg',
      '/images/works/meraki-4.jpg',
      '/images/works/meraki-5.jpg',
      '/images/works/meraki-6.jpg',
    ],
    description:
      'Full brand identity for Meraki — a Dubai-based creative studio. Rich editorial photography, expressive typography, and a visual world built to last.',
    year: 2020,
  },
  {
    slug: 'she-is-fit',
    title: 'She Is Fit',
    tagline: 'Strength has a new face',
    category: 'Branding',
    discipline: 'Brand Identity',
    posterImage: '/images/works/sheisfit-5.jpg',
    gallery: [
      '/images/works/sheisfit-1.jpg',
      '/images/works/sheisfit-2.jpg',
      '/images/works/sheisfit-3.jpg',
      '/images/works/sheisfit-4.jpg',
      '/images/works/sheisfit-5.jpg',
      '/images/works/sheisfit-6.jpg',
      '/images/works/sheisfit-7.jpg',
      '/images/works/sheisfit-8.jpg',
    ],
    mainVideo: '/videos/sheisfit.mp4',
    description:
      'Brand identity for She Is Fit — a UAE women\'s fitness brand that demanded bold, unapologetic design. Visual system, tone of voice, and campaign direction.',
    year: 2020,
  },
  {
    slug: 'logos',
    title: 'Logo Series',
    tagline: 'Identity distilled to a mark',
    category: 'Branding',
    discipline: 'Logo & Identity',
    posterImage: '/images/works/logos-4.jpg',
    gallery: [
      '/images/works/logos-1.jpg',
      '/images/works/logos-2.jpg',
      '/images/works/logos-3.jpg',
      '/images/works/logos-4.jpg',
      '/images/works/logos-5.jpg',
      '/images/works/logos-6.jpg',
    ],
    description:
      'A selection of logo marks and identity systems across industries — each one a distillation of a brand\'s character into a single, enduring mark.',
    year: 2020,
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
