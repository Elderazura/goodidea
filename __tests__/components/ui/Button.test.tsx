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

test('applies dark variant class by default', () => {
  render(<Button href="/contact">Get Started</Button>)
  expect(screen.getByRole('link')).toHaveClass('bg-dark')
})

test('applies light variant class when mode is light', () => {
  render(<Button href="/contact" mode="light">Get Started</Button>)
  expect(screen.getByRole('link')).toHaveClass('bg-light')
})
