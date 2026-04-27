import { render, screen } from '@testing-library/react'
import WorksGrid from '@/components/home/WorksGrid'
import type { Work } from '@/data/works'

const mockWorks: Work[] = [
  { slug: 'a', title: 'Alpha', tagline: 'Tag A', category: 'Branding', posterImage: '/a.jpg', description: 'D', year: 2024 },
  { slug: 'b', title: 'Beta', tagline: 'Tag B', category: 'Strategy', posterImage: '/b.jpg', description: 'D', year: 2024 },
  { slug: 'c', title: 'Gamma', tagline: 'Tag C', category: 'Design', posterImage: '/c.jpg', description: 'D', year: 2023 },
]

test('renders all work cards', () => {
  render(<WorksGrid works={mockWorks} />)
  expect(screen.getAllByRole('link')).toHaveLength(3)
})

test('renders work titles', () => {
  render(<WorksGrid works={mockWorks} />)
  expect(screen.getByText('Alpha')).toBeInTheDocument()
  expect(screen.getByText('Beta')).toBeInTheDocument()
})
