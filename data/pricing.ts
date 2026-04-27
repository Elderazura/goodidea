export interface PricingPackage {
  id: 'a' | 'b' | 'c'
  name: string
  priceAED: string
  priceUSD: string
  url: string
  highlighted?: boolean
}

export interface PricingSpecRow {
  feature: string
  packageA: string | boolean
  packageB: string | boolean
  packageC: string | boolean
}

export interface PricingSpecBlock {
  title: string
  rows: PricingSpecRow[]
}

export const pricingPackages: PricingPackage[] = [
  { id: 'a', name: 'Starter',    priceAED: '5,000',  priceUSD: '1,360', url: '/contact' },
  { id: 'b', name: 'Growth',     priceAED: '12,000', priceUSD: '3,268', url: '/contact', highlighted: true },
  { id: 'c', name: 'Enterprise', priceAED: '25,000', priceUSD: '6,807', url: '/contact' },
]

export const pricingSpecs: PricingSpecBlock[] = [
  {
    title: 'Brand Identity',
    rows: [
      { feature: 'Logo Design',      packageA: '1 concept',  packageB: '3 concepts', packageC: 'Unlimited' },
      { feature: 'Brand Guidelines', packageA: false,        packageB: true,         packageC: true        },
      { feature: 'Business Card',    packageA: true,         packageB: true,         packageC: true        },
      { feature: 'Letterhead',       packageA: false,        packageB: true,         packageC: true        },
      { feature: 'Brand Patterns',   packageA: false,        packageB: false,        packageC: true        },
    ],
  },
  {
    title: 'Digital Presence',
    rows: [
      { feature: 'Social Media Kit', packageA: false, packageB: true,  packageC: true  },
      { feature: 'Website Design',   packageA: false, packageB: false, packageC: true  },
      { feature: 'Email Signature',  packageA: false, packageB: true,  packageC: true  },
      { feature: 'Motion Templates', packageA: false, packageB: false, packageC: true  },
    ],
  },
  {
    title: 'Strategy',
    rows: [
      { feature: 'Brand Positioning', packageA: false,           packageB: '1 session', packageC: 'Full workshop' },
      { feature: 'Naming',            packageA: false,           packageB: false,        packageC: true           },
      { feature: 'Tone of Voice',     packageA: false,           packageB: false,        packageC: true           },
      { feature: 'Revisions',         packageA: '2 rounds',      packageB: '4 rounds',   packageC: 'Unlimited'    },
    ],
  },
]
