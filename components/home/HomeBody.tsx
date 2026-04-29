'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Marquee from '@/components/ui/Marquee'
import ClientsMarquee        from '@/components/ui/ClientsMarquee'
import ServicesSection       from './sections/ServicesSection'
import WorksSection          from './sections/WorksSection'
import FeaturedScrollSection from './sections/FeaturedScrollSection'
import AboutSection          from './sections/AboutSection'
import PricingSection        from './sections/PricingSection'
import InsightsSection       from './sections/InsightsSection'
import CTASection            from './sections/CTASection'

gsap.registerPlugin(ScrollTrigger)

/** Background colour keyed to each section — drives the smooth scroll-transition effect */
const SECTION_COLORS = [
  { id: 'section-marquee',   bg: '#F8F5F0' },
  { id: 'section-services',  bg: '#111F2A' },
  { id: 'section-works',     bg: '#F8F5F0' },
  { id: 'section-clients',   bg: '#F8F5F0' },
  { id: 'section-featured',  bg: '#F8F5F0' },
  { id: 'section-about',     bg: '#0D1822' },
  { id: 'section-pricing',   bg: '#F8F5F0' },
  { id: 'section-insights',  bg: '#F8F5F0' },
  { id: 'section-cta',       bg: '#111F2A' },
] as const

export default function HomeBody() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapRef.current) return

    const ctx = gsap.context(() => {
      /* ── Smooth section background transitions ──────────────────────── */
      SECTION_COLORS.forEach(({ id, bg }, idx) => {
        const el = wrapRef.current!.querySelector(`#${id}`)
        if (!el) return
        ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          onEnter: () => gsap.to(wrapRef.current, { backgroundColor: bg, duration: 0.8, ease: 'power2.out' }),
          onLeaveBack: () => {
            const prevBg = idx > 0 ? SECTION_COLORS[idx - 1].bg : '#F8F5F0'
            gsap.to(wrapRef.current, { backgroundColor: prevBg, duration: 0.8, ease: 'power2.out' })
          },
        })
      })

      /* ── Fade-up reveals ────────────────────────────────────────────── */
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 48 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%' } }
        )
      })

      /* ── Service row stagger ────────────────────────────────────────── */
      gsap.utils.toArray<HTMLElement>('.service-row').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', delay: i * 0.04,
            scrollTrigger: { trigger: el, start: 'top 88%' } }
        )
      })

      /* ── Count-up numbers ───────────────────────────────────────────── */
      gsap.utils.toArray<HTMLElement>('.count-up').forEach(el => {
        const target = parseInt(el.getAttribute('data-target') ?? '0', 10)
        const suffix = el.getAttribute('data-suffix') ?? ''
        const counter = { val: 0 }
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            counter.val = 0
            gsap.to(counter, {
              val: target,
              duration: 1.6,
              ease: 'power2.out',
              onUpdate: () => { el.textContent = Math.round(counter.val) + suffix },
            })
          },
        })
      })

      /* ── Horizontal line grow-in ────────────────────────────────────── */
      gsap.utils.toArray<HTMLElement>('.line-grow').forEach(el => {
        gsap.fromTo(el,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.9, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 88%' } }
        )
      })

      /* ── Work card image zoom on reveal ─────────────────────────────── */
      gsap.utils.toArray<HTMLElement>('.work-card-img').forEach(el => {
        gsap.fromTo(el,
          { scale: 1.08 },
          { scale: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' } }
        )
      })

    }, wrapRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapRef} style={{ backgroundColor: '#F8F5F0' }}>

      <div id="section-marquee">
        <Marquee
          items={['Brand Identity', 'Strategy', 'Naming', 'Social Media', 'Packaging', 'Web Design', 'Tone of Voice']}
          speed={40}
          border
          size="sm"
        />
      </div>

      <ServicesSection />
      <WorksSection />
      <div id="section-clients">
        <ClientsMarquee theme="light" label="Brands We've Built" />
      </div>
      <FeaturedScrollSection />
      <AboutSection />
      <PricingSection />
      <InsightsSection />
      <CTASection />

      {/* Responsive overrides */}
      <style dangerouslySetInnerHTML={{ __html: `
        .works-grid    { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; }
        .insights-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
        .pricing-grid  { display: grid; grid-template-columns: repeat(3, 1fr); }
        .about-grid    { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .insight-img:hover { transform: scale(1.04); }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 768px) {
          .works-grid    { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .insights-grid { grid-template-columns: 1fr !important; }
          .pricing-grid  { grid-template-columns: 1fr !important; }
          .service-row   { grid-template-columns: 2.5rem 1fr !important; }
          .service-desc  { display: none !important; }
        }
      ` }} />
    </div>
  )
}
