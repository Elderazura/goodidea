'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import type { Work } from '@/data/works'

interface WorkCardProps {
  work: Work
}

export default function WorkCard({ work }: WorkCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  function handleMouseEnter() {
    videoRef.current?.play()
  }

  function handleMouseLeave() {
    videoRef.current?.pause()
  }

  return (
    <Link
      href={`/works/${work.slug}`}
      className="block group relative overflow-hidden bg-gray-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-video relative">
        {work.mediumVideo ? (
          <>
            <Image
              src={work.posterImage}
              alt={work.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <video
              ref={videoRef}
              src={work.mediumVideo}
              poster={work.posterImage}
              muted
              loop
              playsInline
              className="workvideos absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </>
        ) : (
          <Image
            src={work.posterImage}
            alt={work.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>

      <div className="p-4">
        <p className="font-gotham text-sm text-text-hover mb-1">{work.tagline}</p>
        <h3 className="font-gotham-bold text-dark">{work.title}</h3>
      </div>
    </Link>
  )
}
