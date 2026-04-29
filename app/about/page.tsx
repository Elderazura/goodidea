'use client'

import { useEffect, useRef } from 'react'

import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/ui/Button'
import Marquee from '@/components/ui/Marquee'
import AnimatedTextCycle from '@/components/ui/animated-text-cycle'
import ClientsMarquee from '@/components/ui/ClientsMarquee'

gsap.registerPlugin(ScrollTrigger)

const TEAM = [
  {
    name: 'Sara Al-Mansouri',
    role: 'Founder & Creative Director',
    bio: 'Over 15 years building brands across the Gulf. Strategy-first, aesthetics always.',
    image: '/images/team/team_a.jpeg',
  },
  {
    name: 'Layla Nasser',
    role: 'Head of Strategy',
    bio: 'Brand strategist with deep roots in MENA consumer behaviour and positioning.',
    image: '/images/team/team_b.jpeg',
  },
  {
    name: 'Faris Al-Rashid',
    role: 'Creative Director',
    bio: 'Identity systems, typography, and visual storytelling. Formerly at Interbrand Dubai.',
    image: '/images/team/team_c.jpeg',
  },
  {
    name: 'Omar Khalil',
    role: 'Senior Designer',
    bio: 'Words that carry weight — naming, messaging, and tone-of-voice architecture.',
    image: '/images/team/team_d.jpeg',
  },
]

const VALUES = [
  { title: 'Clarity over complexity', body: 'Great brands communicate clearly. We strip away the unnecessary and focus on what truly matters.' },
  { title: 'Strategy before aesthetics', body: 'Beautiful design that doesn\'t serve a purpose is decoration. We anchor every decision in insight.' },
  { title: 'Honest relationships', body: 'We work closely, speak candidly, and treat our clients as partners — not accounts.' },
  { title: 'Rooted in culture', body: 'Dubai is a city of incredible ambition. We understand its nuances, its diversity, and its pace.' },
  { title: 'Built to last', body: 'Trends pass. We design for longevity — identities and strategies that compound in value over time.' },
  { title: 'Good ideas first', body: 'It always comes back to the idea. We pursue the ones that change how people see a brand.' },
]

const PROCESS = [
  { num: '01', title: 'Discover', body: 'We immerse in your world — your category, your audience, your ambitions and blind spots. Research, interviews, competitive mapping.' },
  { num: '02', title: 'Define', body: 'We synthesise insights into a sharp strategic foundation: positioning, personality, purpose, proof points.' },
  { num: '03', title: 'Design', body: 'Visual identity, naming, verbal systems — executed with craft and attention to every detail.' },
  { num: '04', title: 'Deliver', body: 'Full brand guidelines, asset libraries, launch support and training. Everything you need to go to market with confidence.' },
]

export default function AboutPage() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapRef.current) return

    const ctx = gsap.context(() => {
      // Background transitions
      const sections = [
        { id: '#about-hero', bg: '#F8F5F0' },
        { id: '#about-story', bg: '#111F2A' },
        { id: '#about-values', bg: '#F8F5F0' },
        { id: '#about-process', bg: '#0D1822' },
        { id: '#about-team', bg: '#F8F5F0' },
        { id: '#about-cta', bg: '#111F2A' },
      ]

      sections.forEach(({ id, bg }) => {
        const el = wrapRef.current!.querySelector(id)
        if (!el) return
        ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          onEnter: () => gsap.to(wrapRef.current, { backgroundColor: bg, duration: 0.85, ease: 'power2.out' }),
          onLeaveBack: () => {
            const idx = sections.findIndex(s => s.id === id)
            const prevBg = idx > 0 ? sections[idx - 1].bg : '#F8F5F0'
            gsap.to(wrapRef.current, { backgroundColor: prevBg, duration: 0.85, ease: 'power2.out' })
          },
        })
      })

      // Reveal animations
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 84%' },
          }
        )
      })

      gsap.utils.toArray<HTMLElement>('.reveal-left').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, x: -40 },
          {
            opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 84%' },
          }
        )
      })

      // Hero text reveal
      gsap.fromTo('.hero-line',
        { y: '110%' },
        { y: '0%', duration: 1.1, ease: 'power4.out', stagger: 0.06, delay: 0.2 }
      )
      gsap.fromTo('.hero-sub',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      )
    }, wrapRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapRef} style={{ backgroundColor: '#F8F5F0' }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="about-hero"
        className="page-hero-section"
        style={{
          background: 'transparent',
          minHeight: '100dvh',
          paddingTop: 'calc(72px + 5rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          paddingBottom: 'clamp(4rem, 8vh, 8rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Top: eyebrow */}
        <p className="hero-sub" style={{
          fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
          fontSize: '0.7rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(17,31,42,0.5)',
          opacity: 0,
        }}>
          The Studio — Goodidea Dubai
        </p>

        {/* Center: giant headline */}
        <div style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 'clamp(5rem, 12vw, 15rem)',
          lineHeight: 0.88,
          letterSpacing: '-0.04em',
          color: '#111F2A',
          overflow: 'hidden',
          margin: 'auto 0',
        }}>
          <div style={{ overflow: 'hidden' }}><div className="hero-line" style={{ transform: 'translateY(110%)' }}>We are</div></div>
          <div style={{ overflow: 'hidden' }}><div className="hero-line" style={{ transform: 'translateY(110%)' }}>
            a{' '}
            <AnimatedTextCycle
              words={['brand', 'creative', 'strategy', 'design']}
              interval={3000}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: 'clamp(5rem, 12vw, 15rem)',
                lineHeight: 0.88,
                letterSpacing: '-0.04em',
                color: '#E85D26',
              }}
            />
          </div></div>
          <div style={{ overflow: 'hidden' }}>
            <div className="hero-line" style={{ transform: 'translateY(110%)' }}>
              studio<span style={{ color: '#E85D26' }}>.</span>
            </div>
          </div>
        </div>

        {/* Bottom: tagline + stat row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <p className="hero-sub" style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '1.1rem',
            lineHeight: 1.75,
            color: 'rgba(17,31,42,0.6)',
            maxWidth: '45ch',
            margin: 0,
            opacity: 0,
          }}>
            Dubai-based. Strategy-led. Creative at heart.
            We&apos;ve been building brands in the UAE and beyond since 2018.
          </p>
          <div className="hero-sub" style={{ opacity: 0, display: 'flex', gap: '3rem' }}>
            {[['12+', 'Years'], ['200+', 'Brands'], ['3', 'Cities']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'right' }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 900, fontStyle: 'italic',
                  fontSize: '2.5rem', color: '#E85D26', lineHeight: 1,
                }}>{val}</div>
                <div style={{
                  fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                  fontSize: '0.6rem', letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'rgba(17,31,42,0.4)',
                }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────────── */}
      <section
        id="about-story"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(6rem, 12vh, 12rem)',
          paddingBottom: 'clamp(6rem, 12vh, 12rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="story-grid">
          {/* Left: image */}
          <div className="reveal-up" style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/team/studio.jpeg" alt="Goodidea Studio" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            {/* Accent line */}
            <div style={{
              position: 'absolute',
              top: '3rem', left: '-1.5rem',
              width: '3px', height: '40%',
              backgroundColor: '#E85D26',
            }} />
          </div>

          {/* Right: story text */}
          <div>
            <p className="reveal-up" style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '0.7rem', letterSpacing: '0.16em',
              textTransform: 'uppercase', color: '#E85D26', marginBottom: '2rem',
            }}>
              Our Origin
            </p>
            <h2 className="reveal-up" style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 900, fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4vw, 4rem)',
              lineHeight: 1.05, color: '#ffffff',
              margin: '0 0 2rem 0', letterSpacing: '-0.02em',
            }}>
              Born from the belief that creativity and strategy should never be separated.
            </h2>
            <p className="reveal-up" style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '1rem', lineHeight: 1.85,
              color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem',
            }}>
              Goodidea was founded in Dubai in 2018 by creatives who were tired of seeing brands built on aesthetics alone — beautiful on the surface, hollow at the core.
            </p>
            <p className="reveal-up" style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '1rem', lineHeight: 1.85,
              color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem',
            }}>
              We started with a simple conviction: good ideas, rigorously built and beautifully expressed, change what people believe about a brand. That conviction has guided every project we&apos;ve taken on since.
            </p>
            <p className="reveal-up" style={{
              fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
              fontSize: '1rem', lineHeight: 1.85,
              color: 'rgba(255,255,255,0.5)',
            }}>
              Today we work with startups finding their voice, heritage brands finding new relevance, and regional leaders finding global ambition — all across the UAE, Saudi Arabia, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────────── */}
      <section
        id="about-values"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(6rem, 12vh, 12rem)',
          paddingBottom: 'clamp(6rem, 12vh, 12rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
        }}
      >
        <div className="reveal-up" style={{ marginBottom: '5rem' }}>
          <p style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.7rem', letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#E85D26', marginBottom: '1.25rem',
          }}>
            What We Believe
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900, fontStyle: 'italic',
            fontSize: 'clamp(3rem, 6vw, 6rem)',
            lineHeight: 0.92, color: '#111F2A',
            margin: 0, letterSpacing: '-0.02em',
          }}>
            Our principles.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }} className="values-grid">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="reveal-up"
              style={{
                padding: '2.5rem',
                borderTop: '1px solid rgba(17,31,42,0.15)',
                borderLeft: i % 3 !== 0 ? '1px solid rgba(17,31,42,0.15)' : undefined,
                ...(i >= 3 ? {} : {}),
              }}
            >
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700, fontStyle: 'italic',
                fontSize: '1.35rem', color: '#111F2A',
                margin: '0 0 0.875rem 0', lineHeight: 1.2,
              }}>
                {v.title}
              </h3>
              <p style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.875rem', lineHeight: 1.7,
                color: 'rgba(17,31,42,0.55)', margin: 0,
              }}>
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────────── */}
      <section
        id="about-process"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(6rem, 12vh, 12rem)',
          paddingBottom: 'clamp(6rem, 12vh, 12rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
        }}
      >
        <div className="reveal-up" style={{ marginBottom: '5rem' }}>
          <p style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.7rem', letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#E85D26', marginBottom: '1.25rem',
          }}>
            How We Work
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900, fontStyle: 'italic',
            fontSize: 'clamp(3rem, 6vw, 6rem)',
            lineHeight: 0.92, color: '#ffffff',
            margin: 0, letterSpacing: '-0.02em',
          }}>
            The process.
          </h2>
        </div>

        <div>
          {PROCESS.map((p, i) => (
            <div
              key={p.num}
              className="reveal-up process-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '4rem 18rem 1fr',
                gap: '3rem',
                alignItems: 'start',
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                ...(i === PROCESS.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.1)' } : {}),
              }}
            >
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic', fontSize: '1.1rem', color: '#E85D26',
              }}>{p.num}</span>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700, fontStyle: 'italic',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                color: '#ffffff', margin: 0, lineHeight: 1.1,
              }}>{p.title}</h3>
              <p style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '1rem', lineHeight: 1.8,
                color: 'rgba(255,255,255,0.45)', margin: 0,
              }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────── */}
      <section
        id="about-team"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(6rem, 12vh, 12rem)',
          paddingBottom: 'clamp(6rem, 12vh, 12rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
        }}
      >
        <div className="reveal-up" style={{ marginBottom: '5rem' }}>
          <p style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.7rem', letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#E85D26', marginBottom: '1.25rem',
          }}>
            The People
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 900, fontStyle: 'italic',
            fontSize: 'clamp(3rem, 6vw, 6rem)',
            lineHeight: 0.92, color: '#111F2A',
            margin: 0, letterSpacing: '-0.02em',
          }}>
            Meet the team.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="team-grid">
          {TEAM.map(member => (
            <div key={member.name} className="reveal-up">
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', marginBottom: '1.5rem', position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
                />
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700, fontStyle: 'italic',
                fontSize: '1.35rem', color: '#111F2A',
                margin: '0 0 0.25rem 0',
              }}>{member.name}</h3>
              <p style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.7rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', color: '#E85D26',
                marginBottom: '0.875rem',
              }}>{member.role}</p>
              <p style={{
                fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
                fontSize: '0.875rem', lineHeight: 1.65,
                color: 'rgba(17,31,42,0.55)', margin: 0,
              }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Client Names Marquee ────────────────────────────── */}
      <ClientsMarquee theme="light" label="Brands We've Built" />

      {/* ── Marquee break ─────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid rgba(17,31,42,0.12)' }}>
        <Marquee
          items={['Dubai', 'Riyadh', 'London', 'Strategy', 'Identity', 'Naming', 'Story']}
          speed={30}
          size="sm"
        />
      </div>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        id="about-cta"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(8rem, 16vh, 16rem)',
          paddingBottom: 'clamp(8rem, 16vh, 16rem)',
          paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
          paddingRight: 'clamp(1.5rem, 5%, 5rem)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 className="reveal-up" style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 900, fontStyle: 'italic',
          fontSize: 'clamp(3.5rem, 9vw, 10rem)',
          lineHeight: 0.9, color: '#ffffff',
          margin: '0 0 3rem 0', letterSpacing: '-0.03em',
        }}>
          Ready to build something great?
        </h2>
        <div className="reveal-up" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="primary" href="/contact" arrow>Start a Project</Button>
          <Link href="/works" style={{
            fontFamily: "'Gotham Book', 'Helvetica Neue', sans-serif",
            fontSize: '0.8rem', letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.25)',
            paddingBottom: '2px', display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}>
            View Our Work
          </Link>
        </div>
      </section>

      {/* Responsive */}
      <style dangerouslySetInnerHTML={{ __html: `
        .story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
        .team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .process-row { grid-template-columns: 4rem 18rem 1fr; }

        @media (max-width: 1024px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .process-row { grid-template-columns: 3rem 1fr !important; gap: 1.5rem !important; }
        }
        @media (max-width: 640px) {
          .team-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </div>
  )
}
