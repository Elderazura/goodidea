import type { Metadata } from 'next'
import CTABlock from '@/components/home/CTABlock'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Branding, strategy, and social media services by Goodidea Dubai.',
}

const services = [
  {
    title: 'Brand Identity',
    description:
      'From logo to full brand system — we create identities that are distinctive, consistent, and built to last.',
  },
  {
    title: 'Brand Strategy',
    description:
      'Positioning, messaging, and go-to-market frameworks that give your brand clarity and direction.',
  },
  {
    title: 'Social Media Branding',
    description:
      'Templates, guidelines, and content systems that keep your social presence sharp and on-brand.',
  },
  {
    title: 'Naming & Verbal Identity',
    description:
      'Brand names, taglines, and tone-of-voice guidelines that make your brand sound as good as it looks.',
  },
]

export default function ServicesPage() {
  return (
    <div>
      <div className="container-gi pt-12 pb-16">
        <h1 className="font-gotham-bold text-dark text-heading-lg mb-4 max-w-2xl">
          What We Do
        </h1>
        <p className="font-gotham text-body text-dark max-w-xl">
          We combine strategy and creativity to build brands that connect with people.
        </p>
      </div>

      <div className="container-gi pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {services.map(service => (
            <div key={service.title}>
              <h2 className="font-gotham-bold text-dark text-heading-sm mb-3">{service.title}</h2>
              <p className="font-gotham text-body text-dark leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <CTABlock
        heading="Ready to build your brand?"
        content="Tell us about your project and we'll get back to you within 24 hours."
        ctaLink="/contact"
        ctaLabel="Start a Conversation"
        mode="dark"
      />
    </div>
  )
}
