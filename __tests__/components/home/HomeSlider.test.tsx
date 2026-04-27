import { render, screen } from '@testing-library/react'
import HomeSlider from '@/components/home/HomeSlider'
import type { Work } from '@/data/works'

const mockWorks: Work[] = [
  {
    slug: 'work-1',
    title: 'Work One',
    tagline: 'Tagline one',
    category: 'Branding',
    posterImage: '/images/work-1.jpg',
    mainVideo: '/videos/work-1.mp4',
    description: 'Desc',
    year: 2024,
  },
  {
    slug: 'work-2',
    title: 'Work Two',
    tagline: 'Tagline two',
    category: 'Strategy',
    posterImage: '/images/work-2.jpg',
    description: 'Desc',
    year: 2024,
  },
]

test('renders slider container', () => {
  render(<HomeSlider works={mockWorks} />)
  expect(document.querySelector('.swiper')).toBeInTheDocument()
})

test('renders one slide per work', () => {
  render(<HomeSlider works={mockWorks} />)
  expect(document.querySelectorAll('.swiper-slide')).toHaveLength(2)
})
