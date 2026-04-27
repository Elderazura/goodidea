import { render, screen } from '@testing-library/react'
import PricingTable from '@/components/ui/PricingTable'
import { pricingPackages, pricingSpecs } from '@/data/pricing'

test('renders all 3 package names', () => {
  render(<PricingTable packages={pricingPackages} specs={pricingSpecs} />)
  expect(screen.getByText('Starter')).toBeInTheDocument()
  expect(screen.getByText('Growth')).toBeInTheDocument()
  expect(screen.getByText('Enterprise')).toBeInTheDocument()
})

test('renders AED prices', () => {
  render(<PricingTable packages={pricingPackages} specs={pricingSpecs} />)
  expect(screen.getAllByText(/5,000/)[0]).toBeInTheDocument()
})

test('renders spec block titles', () => {
  render(<PricingTable packages={pricingPackages} specs={pricingSpecs} />)
  expect(screen.getByText('Brand Identity')).toBeInTheDocument()
})

test('highlighted package has a visual indicator', () => {
  const { container } = render(<PricingTable packages={pricingPackages} specs={pricingSpecs} />)
  expect(container.querySelector('.ring-2')).toBeInTheDocument()
})
