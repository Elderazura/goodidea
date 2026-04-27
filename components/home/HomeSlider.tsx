'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import type { Work } from '@/data/works'

interface HomeSliderProps {
  works: Work[]
}

export default function HomeSlider({ works }: HomeSliderProps) {
  const swiperRef = useRef<HTMLDivElement>(null)
  const swiperInstance = useRef<any>(null)

  useEffect(() => {
    async function initSwiper() {
      const { Swiper } = await import('swiper')
      const { Pagination, Autoplay } = await import('swiper/modules')

      if (swiperRef.current && !swiperInstance.current) {
        swiperInstance.current = new Swiper(swiperRef.current, {
          modules: [Pagination, Autoplay],
          direction: 'horizontal',
          loop: false,
          autoplay: { delay: 5000 },
          pagination: { el: '.swiper-pagination', clickable: true },
        })
      }
    }
    initSwiper()

    return () => {
      swiperInstance.current?.destroy(true, true)
      swiperInstance.current = null
    }
  }, [])

  return (
    <section className="relative w-full">
      <div ref={swiperRef} className="swiper w-full">
        <div className="swiper-wrapper">
          {works.map(work => (
            <div key={work.slug} className="swiper-slide relative">
              <Link href={`/works/${work.slug}`} className="block">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  {work.mainVideo ? (
                    <video
                      src={work.mainVideo}
                      poster={work.posterImage}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={work.posterImage}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-light font-gotham text-sm mb-1">{work.tagline}</p>
                    <h2 className="text-light font-gotham-bold text-2xl md:text-4xl">{work.title}</h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="swiper-pagination" />
      </div>
    </section>
  )
}
