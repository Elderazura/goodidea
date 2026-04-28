import HeroSection from '@/components/home/HeroSection'
import HomeBody from '@/components/home/HomeBody'

export const metadata = {
  title: 'Goodidea — Branding & Strategy Agency Dubai',
  description: 'Dubai-based creative and branding agency. We build brands that mean something.',
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HomeBody />
    </main>
  )
}
