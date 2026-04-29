'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/ui/Button'
import { pricingPackages } from '@/data/pricing'

gsap.registerPlugin(ScrollTrigger)

const starterFeatures = [
  '1 logo concept',
  'Business card design',
  'Email signature',
  '2 revision rounds',
]

const growthFeatures = [
  '3 logo concepts',
  'Brand guidelines',
  'Social media kit',
  '1 brand positioning session',
  'Email signature & letterhead',
  '4 revision rounds',
]

const enterpriseFeatures = [
  'Unlimited logo concepts',
  'Full brand guidelines',
  'Website design',
  'Brand naming',
  'Tone of voice framework',
  'Motion templates',
  'Unlimited revisions',
]

const packageFeatures: Record<string, string[]> = {
  a: starterFeatures,
  b: growthFeatures,
  c: enterpriseFeatures,
}

const faqs = [
  {
    q: 'Do you work with startups?',
    a: 'Yes. Our Starter package was built exactly for early-stage brands that need to look and feel credible from day one.',
  },
  {
    q: 'Can we add services later?',
    a: 'Absolutely. Most clients start with identity and add strategy or social as they grow.',
  },
  {
    q: 'How long does a project take?',
    a: 'Brand identity takes 4–6 weeks. Full strategy engagements run 8–12 weeks. We always agree timelines upfront.',
  },
]

export default function PricingPage() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapRef.current) return
    const ctx = gsap.context(() => {
      // Hero lines animate up on mount
      gsap.from('.hero-line', {
        y: '110%',
        opacity: 0,
        duration: 1.1,
        stagger: 0.06,
        ease: 'power3.out',
      })

      // Pricing cards stagger in
      gsap.from('.pricing-card', {
        opacity: 0,
        y: 48,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pricing-cards-grid',
          start: 'top 82%',
        },
      })

      // Reveal-up elements scroll-triggered
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach(el => {
        gsap.from(el, {
          opacity: 0,
          y: 48,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
          },
        })
      })
    }, wrapRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapRef} style={{ backgroundColor: '#F8F5F0', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .pricing-hero {
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-top: calc(72px + 4rem);
          padding-bottom: 5rem;
          padding-left: clamp(1.5rem, 5%, 5rem);
          padding-right: clamp(1.5rem, 5%, 5rem);
          background-color: #F8F5F0;
        }
        .hero-overflow {
          overflow: hidden;
          display: block;
        }
        .pricing-cards-section {
          background-color: #F8F5F0;
          padding: 5rem clamp(1.5rem, 5%, 5rem);
        }
        .pricing-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          align-items: start;
        }
        .pricing-card {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          border: 1px solid rgba(17,31,42,0.2);
          background-color: #F8F5F0;
        }
        .pricing-card--highlighted {
          border-color: #111F2A;
          background-color: #111F2A;
        }
        .pricing-faq {
          background-color: #F8F5F0;
          padding: 6rem clamp(1.5rem, 5%, 5rem);
          border-top: 1px solid rgba(17,31,42,0.12);
        }
        details.faq-item {
          border-bottom: 1px solid rgba(17,31,42,0.15);
        }
        details.faq-item summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 0;
          cursor: pointer;
          list-style: none;
          font-family: 'Gotham Book', 'Helvetica Neue', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #111F2A;
          user-select: none;
        }
        details.faq-item summary::-webkit-details-marker { display: none; }
        details.faq-item summary::after {
          content: '+';
          font-size: 1.4rem;
          font-weight: 300;
          color: #E85D26;
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }
        details.faq-item[open] summary::after {
          transform: rotate(45deg);
        }
        .faq-answer {
          font-family: 'Gotham Book', 'Helvetica Neue', sans-serif;
          font-size: 0.9375rem;
          line-height: 1.7;
          color: rgba(17,31,42,0.7);
          padding-bottom: 1.5rem;
          max-width: 680px;
        }
        .pricing-works {
          background-color: #F8F5F0;
          padding: 6rem clamp(1.5rem, 5%, 5rem);
          border-top: 1px solid rgba(17,31,42,0.12);
        }
        .works-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .work-card-link {
          display: block;
          text-decoration: none;
          overflow: hidden;
        }
        .work-card-img-wrap {
          position: relative;
          aspect-ratio: 4/3;
          width: 100%;
          overflow: hidden;
          background-color: rgba(17,31,42,0.06);
        }
        .work-card-img {
          transition: transform 0.55s ease;
        }
        .work-card-link:hover .work-card-img {
          transform: scale(1.04);
        }
        .pricing-cta {
          background-color: #111F2A;
          padding: 8rem clamp(1.5rem, 5%, 5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2rem;
        }
        @media (max-width: 1024px) {
          .pricing-cards-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto;
          }
          .works-grid-2 {
            grid-template-columns: 1fr;
          }
        }
      ` }} />

      {/* ── Hero ── */}
      <section className="pricing-hero">
        <p style={{
          fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#E85D26',
          marginBottom: '1.25rem',
        }}>
          <span className="hero-line" style={{ display: 'inline-block' }}>Transparent Pricing</span>
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 'clamp(4rem, 8vw, 9rem)',
          lineHeight: 1.0,
          color: '#111F2A',
          margin: '0 0 1.5rem 0',
        }}>
          <span className="hero-overflow"><span className="hero-line" style={{ display: 'inline-block' }}>Simple packages.</span></span>
          <br />
          <span className="hero-overflow"><span className="hero-line" style={{ display: 'inline-block' }}>Real results.</span></span>
        </h1>
        <p className="hero-line" style={{
          fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
          fontSize: 'clamp(1rem, 1.5vw, 1.1875rem)',
          color: 'rgba(17,31,42,0.6)',
          maxWidth: '560px',
          lineHeight: 1.65,
          margin: 0,
          display: 'inline-block',
        }}>
          No hidden fees. No retainer surprises. Just clear scope, honest value, and work that earns its price.
        </p>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="pricing-cards-section">
        <div className="pricing-cards-grid">
          {pricingPackages.map(pkg => {
            const isHighlighted = pkg.highlighted
            const features = packageFeatures[pkg.id] || []
            const textColor = isHighlighted ? '#F8F5F0' : '#111F2A'
            const mutedColor = isHighlighted ? 'rgba(248,245,240,0.6)' : 'rgba(17,31,42,0.6)'
            const dividerColor = isHighlighted ? 'rgba(248,245,240,0.15)' : 'rgba(17,31,42,0.15)'

            return (
              <div
                key={pkg.id}
                className={`pricing-card${isHighlighted ? ' pricing-card--highlighted' : ''}`}
              >
                {isHighlighted && (
                  <p style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#E85D26',
                    marginBottom: '0.5rem',
                  }}>
                    Most Popular
                  </p>
                )}
                <p style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#E85D26',
                  marginBottom: '1.5rem',
                }}>
                  {pkg.name}
                </p>

                {/* Price */}
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: mutedColor,
                    marginBottom: '0.25rem',
                  }}>AED</p>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 900,
                    fontStyle: 'italic',
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    lineHeight: 1,
                    color: textColor,
                    margin: '0 0 0.25rem 0',
                  }}>
                    {pkg.priceAED}
                  </p>
                  <p style={{
                    fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                    fontSize: '0.75rem',
                    color: mutedColor,
                  }}>
                    / USD ${pkg.priceUSD}
                  </p>
                </div>

                <div style={{ height: '1px', backgroundColor: dividerColor, margin: '1.5rem 0' }} />

                {/* What's included heading */}
                <p style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: mutedColor,
                  marginBottom: '0.75rem',
                }}>
                  What&apos;s included
                </p>

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1 }}>
                  {features.map((feature, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      paddingTop: '0.75rem',
                      paddingBottom: '0.75rem',
                      borderBottom: `1px solid ${dividerColor}`,
                      fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                      fontSize: '0.9rem',
                      color: textColor,
                    }}>
                      <span style={{ color: '#E85D26', fontWeight: 700, flexShrink: 0, marginTop: '0.05em' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button href={pkg.url} variant={isHighlighted ? 'primary' : 'secondary'} size="md">
                  Get Started
                </Button>
              </div>
            )
          })}
        </div>

        <p className="reveal-up" style={{
          fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
          fontSize: '0.875rem',
          color: 'rgba(17,31,42,0.6)',
          marginTop: '3rem',
          textAlign: 'center',
        }}>
          All prices in AED. Custom packages available.{' '}
          <Link href="/contact" style={{ color: '#111F2A', textDecoration: 'underline' }}>
            Contact us to discuss.
          </Link>
        </p>
      </section>

      {/* ── FAQ ── */}
      <section id="pricing-faq" className="pricing-faq">
        <p className="reveal-up" style={{
          fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#E85D26',
          marginBottom: '1rem',
        }}>
          FAQ
        </p>
        <h2 className="reveal-up" style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          lineHeight: 1.05,
          color: '#111F2A',
          margin: '0 0 3rem 0',
          maxWidth: '640px',
        }}>
          Common questions.
        </h2>
        <div style={{ maxWidth: '760px' }}>
          {faqs.map((faq, i) => (
            <details key={i} className="faq-item reveal-up">
              <summary>{faq.q}</summary>
              <p className="faq-answer">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Works Cross-section ── */}
      <section id="pricing-works" className="pricing-works">
        <p className="reveal-up" style={{
          fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#E85D26',
          marginBottom: '1rem',
        }}>
          Why It&apos;s Worth It
        </p>
        <h2 className="reveal-up" style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          lineHeight: 1.05,
          color: '#111F2A',
          margin: 0,
        }}>
          Work that justifies every dirham.
        </h2>

        <div className="works-grid-2">
          {[
            { href: '/works/woodo', src: '/images/works/woodo-3.webp', name: 'Woodo', tag: 'Brand Identity' },
            { href: '/works/orego', src: '/images/works/orego-cover.webp', name: 'Orego', tag: 'Brand Identity' },
          ].map(work => (
            <Link key={work.name} href={work.href} className="work-card-link reveal-up">
              <div className="work-card-img-wrap">
                <Image
                  src={work.src}
                  alt={work.name}
                  fill
                  className="work-card-img"
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div style={{ paddingTop: '1rem' }}>
                <p style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#E85D26',
                  marginBottom: '0.3rem',
                }}>
                  {work.tag}
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontSize: '1.375rem',
                  color: '#111F2A',
                  margin: 0,
                }}>
                  {work.name}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="reveal-up" style={{ marginTop: '3rem' }}>
          <Link href="/works" style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.875rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#111F2A',
            textDecoration: 'none',
            borderBottom: '1px solid #111F2A',
            paddingBottom: '2px',
          }}>
            See All Work →
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pricing-cta">
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 'clamp(2.5rem, 5vw, 5rem)',
          lineHeight: 1.05,
          color: '#F8F5F0',
          margin: 0,
          maxWidth: '700px',
        }}>
          Not sure which package? Let&apos;s talk.
        </h2>
        <Button href="/contact" variant="primary" size="lg">
          Book a Free Call
        </Button>
      </section>
    </div>
  )
}
