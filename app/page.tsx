import HomeSlider from '@/components/home/HomeSlider'
import WorksGrid from '@/components/home/WorksGrid'
import CTABlock from '@/components/home/CTABlock'
import InsightsGrid from '@/components/home/InsightsGrid'
import { works } from '@/data/works'
import { insights } from '@/data/insights'

export const metadata = {
  title: 'Goodidea — Branding & Strategy Agency Dubai',
}

export default function HomePage() {
  const sliderWorks = works.slice(0, 8)

  return (
    <>
      <HomeSlider works={sliderWorks} />
      <WorksGrid works={works} />
      <CTABlock
        heading="Got a good idea?"
        content="Let's shape it into a brand that connects with your audience."
        ctaLink="/contact"
        ctaLabel="Start a Project"
        mode="dark"
      />
      <InsightsGrid insights={insights} showFilter={false} />
    </>
  )
}
