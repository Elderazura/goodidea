import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

jest.mock('@/components/home/HomeSlider', () => ({
  __esModule: true,
  default: () => <div data-testid="home-slider" />,
}))

jest.mock('@/components/home/WorksGrid', () => ({
  __esModule: true,
  default: () => <div data-testid="works-grid" />,
}))

jest.mock('@/components/home/CTABlock', () => ({
  __esModule: true,
  default: () => <div data-testid="cta-block" />,
}))

jest.mock('@/components/home/InsightsGrid', () => ({
  __esModule: true,
  default: () => <div data-testid="insights-grid" />,
}))

test('renders all home sections', () => {
  render(<HomePage />)
  expect(screen.getByTestId('home-slider')).toBeInTheDocument()
  expect(screen.getByTestId('works-grid')).toBeInTheDocument()
  expect(screen.getByTestId('cta-block')).toBeInTheDocument()
  expect(screen.getByTestId('insights-grid')).toBeInTheDocument()
})
