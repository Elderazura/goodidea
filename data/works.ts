export interface BrandStorySection {
  label: string
  body: string
  /** Optional image(s) shown below the text block */
  images?: string[]
}

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
  /** Editorial brand-narrative sections shown on the case study page */
  brandStory?: BrandStorySection[]
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
    brandStory: [
      {
        label: 'Brand Idea',
        body: 'Woodo is built on the belief that the finest things are made by hand. In a world of mass production, the brand stands as a quiet rebellion — celebrating the knots, the grain, the imperfection that makes every piece singular. The visual world reflects this: earthy, tactile, honest.',
        images: ['/images/works/woodo-1.webp', '/images/works/woodo-2.webp'],
      },
      {
        label: 'The Name',
        body: 'We arrived at "Woodo" by playing with the material at the heart of the brand: wood. The double-O softens the word into something warm and memorable, giving it a personality that feels artisanal without being archaic. It is easy to say, easy to remember, and impossible to confuse.',
        images: ['/images/works/woodo-3.webp'],
      },
      {
        label: 'Brand Colors',
        body: 'The palette draws from the workshop — raw timber, aged oak, deep walnut, and the warm white of freshly sanded pine. No harsh blacks. No cold whites. Every tone is pulled from nature, giving the brand a warmth that feels handmade even on screen.',
        images: ['/images/works/woodo-4.webp', '/images/works/woodo-5.webp'],
      },
      {
        label: 'Logo Symbol',
        body: 'The mark distils the brand into a single graphic thought: a stylised wood grain expressed as flowing parallel lines that also suggest movement and growth. It is bold enough to stamp onto packaging and delicate enough to emboss into leather.',
        images: ['/images/works/woodo-6.webp'],
      },
      {
        label: 'Logo',
        body: 'The wordmark is set in a bespoke serif with hairline contrast — refined enough for luxury retail, honest enough for craft. The combination of mark and type creates a system that scales from a business card to a workshop hoarding without losing an ounce of character.',
        images: ['/images/works/woodo-7.webp', '/images/works/woodo-8.webp'],
      },
    ],
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
    brandStory: [
      {
        label: 'Brand Idea',
        body: 'Orego is the antidote to bland. In a food market crowded with safe, neutral packaging, this brand chose to be vivid — to smell and look like the fresh herbs it celebrates. The brand idea is simple: food that is alive deserves a brand that is alive too.',
        images: ['/images/works/orego-1.webp', '/images/works/orego-2.webp'],
      },
      {
        label: 'The Name',
        body: 'Orego is oregano, stripped back and made punchy. The truncation is intentional — it gives the brand a modern, confident shorthand that feels native to the UAE\'s fast-moving, internationally-minded food scene. Short. Punchy. Unmistakable.',
        images: ['/images/works/orego-3.webp'],
      },
      {
        label: 'Brand Colors',
        body: 'We built the palette from the spice rack: deep forest greens, turmeric golds, and earthy terracotta. Each colour is herb-specific, allowing the system to branch across product lines while the family remains unmistakably Orego.',
        images: ['/images/works/orego-4.webp', '/images/works/orego-5.webp'],
      },
      {
        label: 'Logo Symbol',
        body: 'The mark is a stylised leaf — but not the generic botanical illustration you have seen a thousand times. This is geometric, confident, slightly imperfect at the edges. It looks grown, not drawn. It anchors the brand with a living quality that carries across packaging, labels, and social.',
        images: ['/images/works/orego-6.webp'],
      },
      {
        label: 'Logo',
        body: 'The logotype pairs the leaf mark with a wide, confident sans-serif set in tracked capitals. The weight creates shelf presence. The colour-coded system means that every product variant announces itself immediately, while the underlying structure keeps the family coherent.',
        images: ['/images/works/orego-7.webp', '/images/works/orego-8.webp'],
      },
    ],
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
    brandStory: [
      {
        label: 'Brand Idea',
        body: 'Files is premised on the idea that organisation is a form of care — that when your workspace is ordered, your thinking is ordered. The brand does not sell storage. It sells clarity. Every visual decision reinforces this: nothing superfluous, nothing decorative, everything purposeful.',
        images: ['/images/works/files-1.webp', '/images/works/files-2.webp'],
      },
      {
        label: 'The Name',
        body: '"Files" is the most honest name this brand could carry. Direct, functional, and immediately understood in any language. We leaned into this honesty rather than masking it — the name\'s plainness becomes a design statement in a category full of invented compound words.',
        images: ['/images/works/files-3.webp'],
      },
      {
        label: 'Brand Colors',
        body: 'The palette is deliberate restraint: off-white, deep navy, and a single warm accent. No gradients. No textures. The colours reinforce the brand promise — a clean desk, a clear mind. The accent is used surgingly, making every instance of it feel considered.',
        images: ['/images/works/files-4.webp', '/images/works/files-5.webp'],
      },
      {
        label: 'Logo Symbol',
        body: 'The mark is a stacked set of lines — a direct reference to a filed document but abstracted to the point of pure geometry. It is systematic, modular, and endlessly scalable. A single element that can expand into pattern, texture, or stand alone as a favicon.',
        images: ['/images/works/files-6.webp'],
      },
      {
        label: 'Logo',
        body: 'The wordmark uses a geometric sans-serif with optically adjusted tracking. Set in lowercase to maintain approachability within the rigour of the system. The result is a brand that feels professional without being corporate — serious about its work, not about its status.',
        images: ['/images/works/files-7.webp', '/images/works/files-8.webp'],
      },
    ],
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
    brandStory: [
      {
        label: 'Brand Idea',
        body: 'Qawafil honours the ancient caravans that once crossed Arabia — connecting cultures, carrying stories, forging paths across the unknown. The brand transforms this heritage into a modern proposition: travel not as tourism but as transformation. Every journey a caravan, every traveller a storyteller.',
        images: ['/images/works/qawafil-1.webp'],
      },
      {
        label: 'The Name',
        body: '"Qawafil" — قوافل — is the Arabic plural of "caravan". It carries weight, history, and a sense of collective movement. For Gulf audiences, the word resonates immediately. For international audiences, it is distinct, memorable, and carries its meaning in its sound. It required no translation.',
        images: ['/images/works/qawafil-full.webp'],
      },
      {
        label: 'Brand Strategy',
        body: 'We positioned Qawafil between the mass travel market and high-end luxury: a premium brand that values depth over opulence, meaning over comfort. The strategy identified three pillars — Heritage, Discovery, and Community — that guide every touchpoint from itinerary design to Instagram caption.',
        images: [],
      },
    ],
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
    brandStory: [
      {
        label: 'Brand Idea',
        body: 'Meraki is a Greek word with no direct English equivalent: to do something with soul, to put a piece of yourself into your work. For a Dubai creative studio, this became the entire brand proposition — a rejection of the transactional, a commitment to the meaningful. The brand was built to feel as considered as the work it represents.',
        images: ['/images/works/meraki-1.jpg', '/images/works/meraki-2.jpg'],
      },
      {
        label: 'The Name',
        body: 'The name arrived before the brief was fully written. "Meraki" is the kind of word that, once you know it, you begin seeing it everywhere — in the care a chef takes with a plate, in the hours a designer spends on a detail no one will notice. It names something that already existed. The studio just gave it a home.',
        images: ['/images/works/meraki-3.jpg'],
      },
      {
        label: 'Brand Colors',
        body: 'We chose a palette of deep, deliberate tones: almost-black charcoal, warm stone, and a single thread of gold used with the kind of restraint that makes every appearance feel earned. The palette communicates premium creative work without the cold arrogance that luxury brands often mistake for sophistication.',
        images: ['/images/works/meraki-4.jpg'],
      },
      {
        label: 'Logo',
        body: 'The logotype is composed in a high-contrast serif with expressive ink traps — a nod to the craft of letterpress, updated for contemporary use. The M is a logo in its own right: architectural, memorable, and grounded in the typography\'s visual language. Used at scale it commands. Used small it still holds.',
        images: ['/images/works/meraki-5.jpg', '/images/works/meraki-6.jpg'],
      },
    ],
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
    brandStory: [
      {
        label: 'Brand Idea',
        body: 'She Is Fit was born from a frustration with fitness brands that speak to women in pastels and whispers. This brand speaks in capitals. Strength is not a trend. It is not aspirational. It is already there — the brand\'s role is to name it, celebrate it, and refuse to soften it for anyone\'s comfort.',
        images: ['/images/works/sheisfit-1.jpg', '/images/works/sheisfit-2.jpg'],
      },
      {
        label: 'Brand Colors',
        body: 'Black. White. One electric accent. The palette does not negotiate. In a category defined by blush pinks and millennial lavenders, this brand chose contrast and conviction. The accent colour shifts across campaigns — always bold, always unapologetic — while the core identity remains immovable.',
        images: ['/images/works/sheisfit-3.jpg', '/images/works/sheisfit-4.jpg'],
      },
      {
        label: 'Logo Symbol',
        body: 'The mark is a dynamic slash — not decorative, but directional. It suggests movement, momentum, and precision. Set at an angle that implies acceleration, it functions as a watermark, a crop, and a graphic device that structures every layout in the system.',
        images: ['/images/works/sheisfit-5.jpg'],
      },
      {
        label: 'Logo',
        body: 'The wordmark is set in a condensed, heavy grotesque — the typographic equivalent of a clenched fist. Every letter is tight, intentional, and immovable. The brand\'s full name is its statement: She Is Fit. Said plainly, without qualification, without a question mark at the end.',
        images: ['/images/works/sheisfit-6.jpg', '/images/works/sheisfit-7.jpg'],
      },
    ],
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
    brandStory: [
      {
        label: 'The Brief',
        body: 'Across industries, categories, and cultures, every brief asked the same thing: make us a mark that means something. Not just a shape. Not just a font. A graphic thought — one that captures the character of a business in the time it takes to read a name. These are some of those marks.',
        images: ['/images/works/logos-1.jpg', '/images/works/logos-2.jpg'],
      },
      {
        label: 'The Process',
        body: 'Every logo in this collection began with words, not sketches. We start by understanding what a brand believes, not what it sells. The mark comes last — it is the crystallisation of everything before it: the strategy, the personality, the audience, the ambition. When a logo is right, you know it. There is nothing left to add and nothing you would dare remove.',
        images: ['/images/works/logos-3.jpg', '/images/works/logos-4.jpg'],
      },
      {
        label: 'The Marks',
        body: 'From minimal wordmarks to geometric symbols, from heritage-inflected serifs to contemporary sans-serifs — each solution is custom to its context. What they share is a standard: every mark must work at 16px on a screen and 16 metres on a billboard, in full colour and in single black. Anything less is decoration, not design.',
        images: ['/images/works/logos-5.jpg', '/images/works/logos-6.jpg'],
      },
    ],
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
