import { render } from '@testing-library/react'
import ImageCarousel from '@/components/ui/ImageCarousel'

const images = [
  { src: '/a.jpg', alt: 'Image A' },
  { src: '/b.jpg', alt: 'Image B' },
  { src: '/c.jpg', alt: 'Image C' },
]

test('renders swiper container', () => {
  render(<ImageCarousel images={images} />)
  expect(document.querySelector('.swiper')).toBeInTheDocument()
})

test('renders correct number of slides', () => {
  render(<ImageCarousel images={images} />)
  expect(document.querySelectorAll('.swiper-slide')).toHaveLength(3)
})
