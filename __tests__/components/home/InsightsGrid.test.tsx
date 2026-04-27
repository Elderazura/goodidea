import { render, screen, fireEvent } from '@testing-library/react'
import InsightsGrid from '@/components/home/InsightsGrid'
import type { Insight } from '@/data/insights'

const mockInsights: Insight[] = [
  { slug: 'post-a', title: 'Post A', excerpt: 'Ex A', category: 'Branding', coverImage: '/a.jpg', date: '2025-01-01', readTime: 3 },
  { slug: 'post-b', title: 'Post B', excerpt: 'Ex B', category: 'Strategy', coverImage: '/b.jpg', date: '2025-02-01', readTime: 5 },
  { slug: 'post-c', title: 'Post C', excerpt: 'Ex C', category: 'Branding', coverImage: '/c.jpg', date: '2025-03-01', readTime: 4 },
]

test('renders all insights by default', () => {
  render(<InsightsGrid insights={mockInsights} />)
  expect(screen.getAllByRole('article')).toHaveLength(3)
})

test('filters by category when tab is clicked', () => {
  render(<InsightsGrid insights={mockInsights} />)
  fireEvent.click(screen.getByRole('button', { name: 'Branding' }))
  expect(screen.getAllByRole('article')).toHaveLength(2)
})

test('renders insight titles', () => {
  render(<InsightsGrid insights={mockInsights} />)
  expect(screen.getByText('Post A')).toBeInTheDocument()
})
