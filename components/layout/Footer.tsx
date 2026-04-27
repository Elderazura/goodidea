'use client'

import { useEffect, useRef } from 'react'
import { contactInfo, socialLinks, siteConfig, navLinks } from '@/data/site'
import { InstagramIcon, FacebookIcon, LinkedInIcon } from '@/components/ui/SocialIcons'

const iconMap = { instagram: InstagramIcon, facebook: FacebookIcon, linkedin: LinkedInIcon }

const STATS = [
  { value: 200, suffix: '+', label: 'Projects delivered' },
  { value: 8,   suffix: '',  label: 'Years in Dubai'     },
  { value: 40,  suffix: '+', label: 'Brand identities'   },
]

export default function Footer() {
  const statsRef  = useRef<HTMLDivElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    async function init() {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      if (!statsRef.current || triggered.current) return
      triggered.current = true
      const counters = statsRef.current.querySelectorAll<HTMLSpanElement>('[data-count]')
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          counters.forEach(el => {
            const target = parseInt(el.getAttribute('data-count') ?? '0', 10)
            const obj = { val: 0 }
            gsap.to(obj, {
              val: target,
              duration: 1.8,
              ease: 'power2.out',
              onUpdate() { el.textContent = String(Math.round(obj.val)) },
            })
          })
        },
      })
    }
    init()
  }, [])

  function openCalendly() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).Calendly.initPopupWidget({ url: contactInfo.calendlyUrl })
    }
  }

  return (
    <footer className="bg-paper border-t border-ink/10">
      {/* Stats */}
      <div ref={statsRef} className="border-b border-ink/10">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-3 divide-x divide-ink/10">
          {STATS.map(stat => (
            <div key={stat.label} className="py-10 md:py-14 px-6 text-center">
              <p className="font-serif t-headline text-ink leading-none">
                <span data-count={stat.value}>0</span>{stat.suffix}
              </p>
              <p className="t-caption text-ink/50 mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main body */}
      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Contact */}
        <div className="md:col-span-4">
          <p className="t-caption text-ink/50 mb-6">Get in touch</p>
          <address className="font-sans text-body text-ink not-italic leading-loose">
            {contactInfo.address}
            <br />
            <a href={`mailto:${contactInfo.email}`} className="hover:text-ink/50 transition-colors duration-300 block">{contactInfo.email}</a>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-ink/50 transition-colors duration-300 block">{contactInfo.phone}</a>
          </address>
          <button
            onClick={openCalendly}
            className="mt-8 inline-flex items-center gap-3 border border-ink px-6 py-4 t-caption text-ink hover:bg-ink hover:text-paper transition-colors duration-300"
          >
            Schedule Meeting
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Nav */}
        <div className="md:col-span-3 md:col-start-6">
          <p className="t-caption text-ink/50 mb-6">Navigate</p>
          <nav className="flex flex-col gap-3">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="font-sans text-subhead text-ink hover:text-ink/50 transition-colors duration-300 w-fit">{link.label}</a>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div className="md:col-span-2 md:col-start-11">
          <p className="t-caption text-ink/50 mb-6">Follow</p>
          <ul className="flex flex-col gap-4">
            {socialLinks.map(link => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-ink hover:text-ink/50 transition-colors duration-300">
                    {Icon && <Icon width={20} height={20} />}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Giant lettermark */}
      <div className="overflow-hidden select-none" aria-hidden>
        <p className="font-sans-bold text-ink leading-[0.85] px-4 tracking-tight opacity-[0.06] whitespace-nowrap" style={{ fontSize: 'clamp(5rem, 16vw, 20rem)' }}>
          GOODIDEA
        </p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink/10">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="t-caption text-ink/40">{siteConfig.copyright}</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="t-caption text-ink/40 hover:text-ink transition-colors duration-300">
            Back to top ↑
          </button>
        </div>
      </div>

      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <script src="https://assets.calendly.com/assets/external/widget.js" async />
    </footer>
  )
}
