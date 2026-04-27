import { render, screen } from '@testing-library/react'
import CTABlock from '@/components/home/CTABlock'

test('renders heading text', () => {
  render(<CTABlock heading="Let's Talk" content="Start a project" ctaLink="/contact" ctaLabel="Contact Us" />)
  expect(screen.getByText("Let's Talk")).toBeInTheDocument()
})

test('renders CTA link', () => {
  render(<CTABlock heading="Let's Talk" content="Start a project" ctaLink="/contact" ctaLabel="Contact Us" />)
  expect(screen.getByRole('link', { name: /contact us/i })).toHaveAttribute('href', '/contact')
})

test('applies dark mode classes', () => {
  const { container } = render(
    <CTABlock heading="H" content="C" ctaLink="/" ctaLabel="Go" mode="dark" />
  )
  expect(container.firstChild).toHaveClass('bg-dark')
})

test('applies light mode by default', () => {
  const { container } = render(
    <CTABlock heading="H" content="C" ctaLink="/" ctaLabel="Go" />
  )
  expect(container.firstChild).toHaveClass('bg-light')
})
