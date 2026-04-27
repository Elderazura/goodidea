import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { PricingPackage, PricingSpecBlock } from '@/data/pricing'

interface PricingTableProps {
  packages: PricingPackage[]
  specs: PricingSpecBlock[]
}

function SpecValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return <span className="text-green-600 font-gotham-bold">✓</span>
  }
  if (value === false) {
    return <span className="text-gray-300">—</span>
  }
  return <span className="font-gotham text-sm">{value}</span>
}

export default function PricingTable({ packages, specs }: PricingTableProps) {
  return (
    <div className="container-gi py-12 overflow-x-auto">
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div />
        {packages.map(pkg => (
          <div
            key={pkg.id}
            className={cn(
              'p-6 text-center border border-gray-200',
              pkg.highlighted && 'ring-2 ring-dark'
            )}
          >
            <h3 className="font-gotham-bold text-dark text-lg mb-2">{pkg.name}</h3>
            <p className="font-hepta text-2xl font-bold mb-1">AED {pkg.priceAED}</p>
            <p className="font-gotham text-sm text-text-hover mb-4">USD {pkg.priceUSD}</p>
            <Link
              href={pkg.url}
              className={cn(
                'inline-block px-4 py-2 font-gotham-bold text-xs uppercase tracking-wider transition-colors',
                pkg.highlighted
                  ? 'bg-dark text-light hover:opacity-80'
                  : 'border border-dark text-dark hover:bg-dark hover:text-light'
              )}
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>

      {specs.map(block => (
        <div key={block.title} className="mb-8">
          <h4 className="font-gotham-bold text-dark uppercase tracking-widest text-sm mb-4">
            {block.title}
          </h4>
          {block.rows.map(row => (
            <div key={row.feature} className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100">
              <span className="font-gotham text-sm text-dark">{row.feature}</span>
              <div className="text-center"><SpecValue value={row.packageA} /></div>
              <div className="text-center"><SpecValue value={row.packageB} /></div>
              <div className="text-center"><SpecValue value={row.packageC} /></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
