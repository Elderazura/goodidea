import { render, screen } from '@testing-library/react'
import WorkNavigation from '@/components/works/WorkNavigation'
import type { Work } from '@/data/works'

const prev: Work = { slug: 'prev-work', title: 'Prev Work', tagline: 'Prev', category: 'Branding', posterImage: '/p.jpg', description: 'D', year: 2024 }
const next: Work = { slug: 'next-work', title: 'Next Work', tagline: 'Next', category: 'Strategy', posterImage: '/n.jpg', description: 'D', year: 2024 }

test('renders prev work link', () => {
  render(<WorkNavigation prev={prev} next={null} />)
  expect(screen.getByRole('link', { name: /prev work/i })).toHaveAttribute('href', '/works/prev-work')
})

test('renders next work link', () => {
  render(<WorkNavigation prev={null} next={next} />)
  expect(screen.getByRole('link', { name: /next work/i })).toHaveAttribute('href', '/works/next-work')
})

test('does not render prev link when prev is null', () => {
  render(<WorkNavigation prev={null} next={next} />)
  expect(screen.queryByText(/← /)).not.toBeInTheDocument()
})
