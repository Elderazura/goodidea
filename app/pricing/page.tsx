import type { Metadata } from 'next'
import PricingTable from '@/components/ui/PricingTable'
import { pricingPackages, pricingSpecs } from '@/data/pricing'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent branding packages for every stage of your business.',
}

export default function PricingPage() {
  return (
    <div>
      <div className="container-gi pt-12 pb-8">
        <h1 className="font-gotham-bold text-dark text-heading-lg mb-4">Pricing</h1>
        <p className="font-gotham text-body text-dark max-w-lg">
          Affordable packages that deliver real brand value. All prices in AED and USD.
        </p>
      </div>
      <PricingTable packages={pricingPackages} specs={pricingSpecs} />
    </div>
  )
}
