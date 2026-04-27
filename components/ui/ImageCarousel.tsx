'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface CarouselImage {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const swiperRef = useRef<HTMLDivElement>(null)
  const swiperInstance = useRef<any>(null)

  useEffect(() => {
    async function initSwiper() {
      const { Swiper } = await import('swiper')
      const { Navigation } = await import('swiper/modules')

      if (swiperRef.current && !swiperInstance.current) {
        swiperInstance.current = new Swiper(swiperRef.current, {
          modules: [Navigation],
          direction: 'horizontal',
          loop: false,
          slidesPerView: 2,
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
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
    <div className="relative">
      <div ref={swiperRef} className="swiper work-slider">
        <div className="swiper-wrapper">
          {images.map((img, i) => (
            <div key={i} className="swiper-slide">
              <div className="relative aspect-video">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>
    </div>
  )
}
