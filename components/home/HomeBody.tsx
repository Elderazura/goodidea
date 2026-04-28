'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import WorkCard from '@/components/works/WorkCard'
import { works } from '@/data/works'
import { insights } from '@/data/insights'
import Marquee from '@/components/ui/Marquee'
import Button from '@/components/ui/Button'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  { num: '01', title: 'Brand Identity', desc: 'Logo systems, visual language, color, type — a complete identity built to last.' },
  { num: '02', title: 'Brand Strategy', desc: 'Positioning, competitive analysis, purpose and proof points.' },
  { num: '03', title: 'Naming', desc: 'Memorable, ownable names rooted in strategy and culture.' },
  { num: '04', title: 'Tone of Voice', desc: 'A distinct verbal identity — how your brand speaks to the world.' },
  { num: '05', title: 'Social Media', desc: 'Content systems, creative direction, and platform strategy.' },
  { num: '06', title: 'Website Design', desc: 'Conversion-first web experiences that feel as good as they perform.' },
]

const PRICING = [
  { tier: 'Brand Essentials', from: 'From AED 8,000', desc: 'Logo, brand guide, core assets. Perfect for startups and new ventures.' },
  { tier: 'Brand Standard', from: 'From AED 18,000', desc: 'Full identity system plus strategy and tone-of-voice framework.' },
  { tier: 'Brand Premium', from: 'From AED 40,000', desc: 'End-to-end brand development with research, strategy, identity, and launch.' },
]

export default function HomeBody() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapRef.current) return

    const ctx = gsap.context(() => {
      // Smooth background transitions driven by scroll
      const sectionColors: { selector: string; bg: string }[] = [
        { selector: '#section-marquee', bg: '#F8F5F0' },
        { selector: '#section-services', bg: '#111F2A' },
        { selector: '#section-works', bg: '#F8F5F0' },
        { selector: '#section-about', bg: '#0D1822' },
        { selector: '#section-pricing', bg: '#F8F5F0' },
        { selector: '#section-insights', bg: '#F8F5F0' },
        { selector: '#section-cta', bg: '#111F2A' },
      ]

      sectionColors.forEach(({ selector, bg }) => {
        const el = wrapRef.current!.querySelector(selector)
        if (!el) return
        ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          onEnter: () => gsap.to(wrapRef.current, { backgroundColor: bg, duration: 0.8, ease: 'power2.out' }),
          onLeaveBack: () => {
            // Find previous section
            const idx = sectionColors.findIndex(s => s.selector === selector)
            const prevBg = idx > 0 ? sectionColors[idx - 1].bg : '#F8F5F0'
            gsap.to(wrapRef.current, { backgroundColor: prevBg, duration: 0.8, ease: 'power2.out' })
          },
        })
      })

      // Fade-up reveals for content blocks
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 48 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%' },
          }
        )
      })

      // Stagger reveals for service rows
      gsap.utils.toArray<HTMLElement>('.service-row').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, x: -30 },
          {
            opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', delay: i * 0.04,
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        )
      })

      // Count-up for stat numbers
      gsap.utils.toArray<HTMLElement>('.count-up').forEach(el => {
        const target = parseInt(el.getAttribute('data-target') ?? '0', 10)
        const hasSuffix = el.getAttribute('data-suffix') ?? ''
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
              onUpdate: () => {
                el.textContent = Math.round(counter.val) + hasSuffix
              },
            })
          },
        })
      })

      // Horizontal line grow-in animations
      gsap.utils.toArray<HTMLElement>('.line-grow').forEach(el => {
        gsap.fromTo(el,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1, duration: 0.9, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        )
      })

      // Section heading char-by-char for big display text
      gsap.utils.toArray<HTMLElement>('.headline-split').forEach(el => {
        const text = el.textContent ?? ''
        el.innerHTML = text
          .split('')
          .map(c => c === ' ' ? ' ' : `<span style="display:inline-block;overflow:hidden"><span class="char-inner" style="display:inline-block;transform:translateY(110%)">${c}</span></span>`)
          .join('')
        gsap.to(el.querySelectorAll('.char-inner'), {
          y: '0%',
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.018,
          scrollTrigger: { trigger: el, start: 'top 80%' },
        })
      })

      // Work card image zoom on scroll-reveal
      gsap.utils.toArray<HTMLElement>('.work-card-img').forEach(el => {
        gsap.fromTo(el,
          { scale: 1.08 },
          {
            scale: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' },
          }
        )
      })
    }, wrapRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapRef} style={{ backgroundColor: '#F8F5F0' }}>

      {/* ══════════════════════════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════════════════════════ */}
      <div id="section-marquee">
        <Marquee
          items={['Brand Identity', 'Strategy', 'Naming', 'Social Media', 'Packaging', 'Web Design', 'Tone of Voice']}
          speed={40}
          border
          size="sm"
        />
      </div>

      {/* ══════════════════════════════════════════════════════════
          SERVICES PREVIEW — dark
      ══════════════════════════════════════════════════════════ */}
      <section
        id="section-services"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(5rem, 10vh, 9rem)',
          paddingBottom: 'clamp(5rem, 10vh, 9rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
        }}
      >
        {/* Header row */}
        <div
          className="reveal-up"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '5rem',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div>
            <p style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E85D26',
              marginBottom: '1.25rem',
            }}>
              What We Do
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(3rem, 7vw, 7rem)',
              lineHeight: 0.92,
              color: '#ffffff',
              margin: 0,
              letterSpacing: '-0.02em',
            }}>
              Services built<br />for impact.
            </h2>
          </div>
          <Link
            href="/services"
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              paddingBottom: '2px',
              alignSelf: 'flex-end',
            }}
          >
            All Services →
          </Link>
        </div>

        {/* Service rows */}
        <div>
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className="service-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '3rem 1fr 1fr',
                gap: '2rem',
                alignItems: 'center',
                paddingTop: '1.75rem',
                paddingBottom: '1.75rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                ...(i === SERVICES.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.1)' } : {}),
              }}
            >
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '1rem',
                color: '#E85D26',
              }}>
                {s.num}
              </span>
              <span style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
                color: '#ffffff',
                letterSpacing: '-0.01em',
              }}>
                {s.title}
              </span>
              <span style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.875rem',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.45)',
              }}
                className="service-desc"
              >
                {s.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SELECTED WORKS — light
      ══════════════════════════════════════════════════════════ */}
      <section
        id="section-works"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(5rem, 10vh, 9rem)',
          paddingBottom: 'clamp(5rem, 10vh, 9rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
        }}
      >
        {/* Header */}
        <div
          className="reveal-up"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '4rem',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div>
            <p style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E85D26',
              marginBottom: '1.25rem',
            }}>
              Selected Work
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(3rem, 7vw, 7rem)',
              lineHeight: 0.92,
              color: '#111F2A',
              margin: 0,
              letterSpacing: '-0.02em',
            }}>
              What we&apos;ve<br />built.
            </h2>
          </div>
          <Link
            href="/works"
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#111F2A',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(17,31,42,0.4)',
              paddingBottom: '2px',
              alignSelf: 'flex-end',
            }}
          >
            All Work →
          </Link>
        </div>

        {/* Featured work — full width */}
        <div className="reveal-up" style={{ marginBottom: '3rem' }}>
          <WorkCard work={works[0]} featured={true} index={0} />
        </div>

        {/* 2-col grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '3rem',
          }}
          className="works-grid"
        >
          {works.slice(1, 5).map((work, i) => (
            <div key={work.slug} className="reveal-up">
              <WorkCard work={work} index={i + 1} />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ABOUT TEASER — dark
      ══════════════════════════════════════════════════════════ */}
      <section
        id="section-about"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(6rem, 12vh, 12rem)',
          paddingBottom: 'clamp(6rem, 12vh, 12rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="about-grid">
          {/* Left — big editorial quote */}
          <div>
            <p style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E85D26',
              marginBottom: '2.5rem',
            }} className="reveal-up">
              Our Story
            </p>
            <h2
              className="reveal-up"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
                lineHeight: 1.0,
                color: '#ffffff',
                margin: '0 0 2.5rem 0',
                letterSpacing: '-0.02em',
              }}
            >
              Good ideas change everything — if you know how to build them.
            </h2>
            <p
              className="reveal-up"
              style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '3rem',
                maxWidth: '48ch',
              }}
            >
              Founded in Dubai in 2018, Goodidea is a creative and branding studio that helps ambitious businesses find their identity, their voice, and their audience. We work where strategy meets creativity.
            </p>
            <Link
              href="/about"
              className="reveal-up"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#ffffff',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.3)',
                paddingBottom: '2px',
              }}
            >
              Meet the team →
            </Link>
          </div>

          {/* Right — image + stat card */}
          <div className="reveal-up" style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/works/work-3.jpg"
                alt="Goodidea studio"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* Floating stat */}
            <div style={{
              position: 'absolute',
              bottom: '-2rem',
              right: '-2rem',
              backgroundColor: '#E85D26',
              padding: '2rem 2.5rem',
              zIndex: 10,
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: '3.5rem',
                color: '#ffffff',
                lineHeight: 1,
                marginBottom: '0.25rem',
              }}>
                200+
              </div>
              <div style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.65rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.8)',
              }}>
                Brands Built
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PRICING TEASER — light
      ══════════════════════════════════════════════════════════ */}
      <section
        id="section-pricing"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(5rem, 10vh, 9rem)',
          paddingBottom: 'clamp(5rem, 10vh, 9rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
        }}
      >
        <div className="reveal-up" style={{ marginBottom: '4rem' }}>
          <p style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#E85D26',
            marginBottom: '1.25rem',
          }}>
            Investment
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(3rem, 6vw, 6rem)',
            lineHeight: 0.92,
            color: '#111F2A',
            margin: '0 0 1.5rem 0',
            letterSpacing: '-0.02em',
          }}>
            Straightforward.<br />No surprises.
          </h2>
          <p style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: 'rgba(17,31,42,0.6)',
            maxWidth: '50ch',
          }}>
            We offer clear, project-based pricing. No retainers or hidden fees — just honest work at fair rates.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
          }}
          className="pricing-grid"
        >
          {PRICING.map((p, i) => (
            <div
              key={p.tier}
              className="reveal-up"
              style={{
                padding: '3rem 2.5rem',
                borderTop: '1px solid rgba(17,31,42,0.15)',
                borderLeft: i > 0 ? '1px solid rgba(17,31,42,0.15)' : undefined,
                position: 'relative',
              }}
            >
              <p style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(17,31,42,0.5)',
                marginBottom: '1.25rem',
              }}>
                {p.tier}
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                color: '#E85D26',
                marginBottom: '1.25rem',
                lineHeight: 1.1,
              }}>
                {p.from}
              </p>
              <p style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.875rem',
                lineHeight: 1.7,
                color: 'rgba(17,31,42,0.6)',
              }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal-up" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link
            href="/pricing"
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#111F2A',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(17,31,42,0.4)',
              paddingBottom: '2px',
            }}
          >
            View Full Pricing →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          INSIGHTS PREVIEW — light
      ══════════════════════════════════════════════════════════ */}
      <section
        id="section-insights"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(5rem, 10vh, 9rem)',
          paddingBottom: 'clamp(5rem, 10vh, 9rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          borderTop: '1px solid rgba(17,31,42,0.1)',
        }}
      >
        <div
          className="reveal-up"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '4rem',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div>
            <p style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E85D26',
              marginBottom: '1.25rem',
            }}>
              Insights
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              lineHeight: 0.92,
              color: '#111F2A',
              margin: 0,
              letterSpacing: '-0.02em',
            }}>
              Ideas worth<br />reading.
            </h2>
          </div>
          <Link
            href="/insights"
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#111F2A',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(17,31,42,0.4)',
              paddingBottom: '2px',
              alignSelf: 'flex-end',
            }}
          >
            All Articles →
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.5rem',
          }}
          className="insights-grid"
        >
          {insights.slice(0, 3).map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="reveal-up"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              {/* Image */}
              <div style={{ aspectRatio: '16/10', overflow: 'hidden', marginBottom: '1.5rem', position: 'relative' }}>
                <Image
                  src={insight.coverImage}
                  alt={insight.title}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="insight-img"
                />
              </div>
              {/* Category */}
              <p style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.65rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#E85D26',
                marginBottom: '0.5rem',
              }}>
                {insight.category}
              </p>
              {/* Title */}
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                color: '#111F2A',
                lineHeight: 1.2,
                margin: '0 0 0.75rem 0',
              }}>
                {insight.title}
              </h3>
              <p style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.875rem',
                lineHeight: 1.6,
                color: 'rgba(17,31,42,0.55)',
                margin: 0,
              }}>
                {insight.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA BAND — dark
      ══════════════════════════════════════════════════════════ */}
      <section
        id="section-cta"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(6rem, 14vh, 14rem)',
          paddingBottom: 'clamp(6rem, 14vh, 14rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <p
          className="reveal-up"
          style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#E85D26',
            marginBottom: '2rem',
          }}
        >
          Let&apos;s Work Together
        </p>
        <h2
          className="reveal-up"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(4rem, 10vw, 12rem)',
            lineHeight: 0.88,
            color: '#ffffff',
            margin: '0 0 3rem 0',
            letterSpacing: '-0.03em',
            maxWidth: '18ch',
          }}
        >
          Got a good idea?
        </h2>
        <div className="reveal-up" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="primary" href="/contact" arrow>
            Start a Project
          </Button>
          <a
            href="mailto:dubaiis@goodidea.ae"
            style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '0.75rem 2rem',
              transition: 'border-color 0.2s',
            }}
          >
            dubaiis@goodidea.ae
          </a>
        </div>
      </section>

      {/* Responsive overrides */}
      <style>{`
        .works-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; }
        .insights-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
        .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .insight-img:hover { transform: scale(1.04); }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 768px) {
          .works-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .insights-grid { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
          .service-row { grid-template-columns: 2.5rem 1fr !important; }
          .service-desc { display: none !important; }
        }
      `}</style>
    </div>
  )
}
