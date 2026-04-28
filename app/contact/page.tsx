import type { Metadata } from 'next'
import { contactInfo, socialLinks } from '@/data/site'
import { InstagramIcon, FacebookIcon, LinkedInIcon } from '@/components/ui/SocialIcons'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Goodidea Dubai — branding and strategy agency.',
}

const iconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
}

export default function ContactPage() {
  return (
    <div className="container-gi py-12 max-w-3xl">
      <h1 className="font-gotham-bold text-dark text-heading-lg mb-4">Let's Talk</h1>
      <p className="font-gotham text-body text-dark mb-12 max-w-lg">
        Tell us about your brand challenge and we'll respond within 24 hours.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="font-gotham-bold text-sm uppercase tracking-widest mb-4">Dubai Office</h2>
          <address className="font-gotham text-dark leading-relaxed">
            {contactInfo.address}
            <br /><br />
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-text-hover transition-colors block"
            >
              {contactInfo.email}
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="hover:text-text-hover transition-colors block"
            >
              {contactInfo.phone}
            </a>
          </address>
        </div>

        <div>
          <h2 className="font-gotham-bold text-sm uppercase tracking-widest mb-4">Follow Us</h2>
          <ul className="flex gap-5">
            {socialLinks.map(link => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-dark hover:text-text-hover transition-colors"
                  >
                    {Icon && <Icon width={24} height={24} />}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div
        className="calendly-inline-widget w-full"
        data-url={contactInfo.calendlyUrl}
        style={{ minWidth: '320px', height: '630px' }}
      />
    </div>
  )
}
