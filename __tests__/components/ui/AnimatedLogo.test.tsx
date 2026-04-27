import { render, screen } from '@testing-library/react'
import AnimatedLogo from '@/components/ui/AnimatedLogo'

test('renders SVG logo', () => {
  render(<AnimatedLogo />)
  expect(document.querySelector('svg')).toBeInTheDocument()
})

test('renders mouth path element', () => {
  render(<AnimatedLogo />)
  expect(document.querySelector('#smiley-mouth')).toBeInTheDocument()
})
