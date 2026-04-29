'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InsightsGrid from '@/components/home/InsightsGrid'
import { insights } from '@/data/insights'

gsap.registerPlugin(ScrollTrigger)

const worksItems = [
  { href: '/works/woodo', src: '/images/works/woodo-3.webp', name: 'Woodo', tag: 'Brand Identity' },
  { href: '/works/orego', src: '/images/works/orego-cover.webp', name: 'Orego', tag: 'Brand Identity' },
  { href: '/works/files', src: '/images/works/files-3.webp', name: 'Files', tag: 'Brand Identity' },
]

export default function InsightsPage() {
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
        .insights-hero {
          min-height: 70vh;
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
        .insights-works {
          background-color: #F8F5F0;
          padding: 6rem clamp(1.5rem, 5%, 5rem);
          border-top: 1px solid rgba(17,31,42,0.12);
        }
        .works-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
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
        .insights-about {
          background-color: #111F2A;
          padding: 8rem clamp(1.5rem, 5%, 5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.75rem;
        }
        @media (max-width: 1024px) {
          .works-grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .works-grid-3 {
            grid-template-columns: 1fr;
          }
        }
      ` }} />

      {/* ── Hero ── */}
      <section className="insights-hero">
        <p style={{
          fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#E85D26',
          marginBottom: '1.25rem',
        }}>
          <span className="hero-line" style={{ display: 'inline-block' }}>Insights</span>
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
          <span className="hero-overflow"><span className="hero-line" style={{ display: 'inline-block' }}>Ideas worth</span></span>
          <br />
          <span className="hero-overflow"><span className="hero-line" style={{ display: 'inline-block' }}>sharing.</span></span>
        </h1>
        <p className="hero-line" style={{
          fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
          fontSize: 'clamp(1rem, 1.5vw, 1.1875rem)',
          color: 'rgba(17,31,42,0.6)',
          maxWidth: '540px',
          lineHeight: 1.65,
          margin: 0,
          display: 'inline-block',
        }}>
          Strategy thinking, design notes, and brand lessons from the Goodidea team.
        </p>
      </section>

      {/* ── Insights Grid ── */}
      <InsightsGrid insights={insights} showFilter={true} />

      {/* ── Works Cross-section ── */}
      <section id="insights-works" className="insights-works">
        <p className="reveal-up" style={{
          fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#E85D26',
          marginBottom: '1rem',
        }}>
          Our Work
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
          Words are just half the story.
        </h2>

        <div className="works-grid-3">
          {worksItems.map(work => (
            <Link key={work.name} href={work.href} className="work-card-link reveal-up">
              <div className="work-card-img-wrap">
                <Image
                  src={work.src}
                  alt={work.name}
                  fill
                  className="work-card-img"
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
            View Our Work →
          </Link>
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section id="insights-about" className="insights-about">
        <blockquote style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          lineHeight: 1.15,
          color: '#F8F5F0',
          margin: 0,
          maxWidth: '820px',
          textAlign: 'center',
        }}>
          &ldquo;We build brands that have something to say &mdash; and say it beautifully.&rdquo;
        </blockquote>
        <p style={{
          fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
          fontSize: '1rem',
          color: 'rgba(248,245,240,0.6)',
          margin: 0,
        }}>
          Learn about who we are and how we work.
        </p>
        <Link href="/about" style={{
          fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
          fontSize: '0.875rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#F8F5F0',
          textDecoration: 'none',
          borderBottom: '1px solid rgba(248,245,240,0.4)',
          paddingBottom: '2px',
        }}>
          About Us →
        </Link>
      </section>
    </div>
  )
}
