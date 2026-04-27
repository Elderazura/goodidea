import { render, screen } from '@testing-library/react'
import WorkCard from '@/components/works/WorkCard'
import type { Work } from '@/data/works'

const mockWork: Work = {
  slug: 'test-project',
  title: 'Test Project',
  tagline: 'A test tagline',
  category: 'Branding',
  posterImage: '/images/test.jpg',
  description: 'Test description',
  year: 2024,
}

test('renders work title', () => {
  render(<WorkCard work={mockWork} />)
  expect(screen.getByText('Test Project')).toBeInTheDocument()
})

test('renders work tagline', () => {
  render(<WorkCard work={mockWork} />)
  expect(screen.getByText('A test tagline')).toBeInTheDocument()
})

test('links to work detail page', () => {
  render(<WorkCard work={mockWork} />)
  expect(screen.getByRole('link')).toHaveAttribute('href', '/works/test-project')
})

test('renders poster image', () => {
  render(<WorkCard work={mockWork} />)
  expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test Project')
})
