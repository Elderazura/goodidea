import { render, screen } from '@testing-library/react'
import Button from '@/components/ui/Button'

test('renders button text', () => {
  render(<Button href="/contact">Get Started</Button>)
  expect(screen.getByText('Get Started')).toBeInTheDocument()
})

test('renders as anchor with correct href', () => {
  render(<Button href="/contact">Get Started</Button>)
  expect(screen.getByRole('link')).toHaveAttribute('href', '/contact')
})

test('applies primary variant class by default', () => {
  render(<Button href="/contact">Get Started</Button>)
  const link = screen.getByRole('link')
  expect(link.className).toContain('bg-[var(--ink')
})

test('applies secondary variant class when variant is secondary', () => {
  render(<Button href="/contact" variant="secondary">Get Started</Button>)
  const link = screen.getByRole('link')
  expect(link.className).toContain('bg-transparent')
})
