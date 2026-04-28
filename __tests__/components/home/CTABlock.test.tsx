import { render, screen } from '@testing-library/react'
import CTABlock from '@/components/home/CTABlock'

test('renders headline text', () => {
  render(<CTABlock />)
  expect(screen.getByText(/ready to build something remarkable/i)).toBeInTheDocument()
})

test('renders start a project link', () => {
  render(<CTABlock />)
  expect(screen.getByRole('link', { name: /start a project/i })).toHaveAttribute('href', '/contact')
})

test('renders book a free call link', () => {
  render(<CTABlock />)
  expect(screen.getByRole('link', { name: /book a free call/i })).toBeInTheDocument()
})

test('renders with dark background', () => {
  const { container } = render(<CTABlock />)
  const section = container.firstChild as HTMLElement
  expect(section?.style.backgroundColor).toBe('rgb(17, 31, 42)')
})
