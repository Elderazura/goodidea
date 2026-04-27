import Link from 'next/link'
import Image from 'next/image'
import type { Work } from '@/data/works'

interface WorkNavigationProps {
  prev: Work | null
  next: Work | null
}

export default function WorkNavigation({ prev, next }: WorkNavigationProps) {
  return (
    <nav className="grid grid-cols-1 sm:grid-cols-2 border-t border-gray-200 mt-16" aria-label="Work navigation">
      {prev ? (
        <Link
          href={`/works/${prev.slug}`}
          aria-label={prev.title}
          className="group relative overflow-hidden aspect-video block border-r border-gray-100"
        >
          <Image
            src={prev.posterImage}
            alt={prev.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            <p className="text-light font-gotham text-xs uppercase tracking-widest mb-1">← Previous</p>
            <h3 className="text-light font-gotham-bold text-xl">{prev.title}</h3>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/works/${next.slug}`}
          aria-label={next.title}
          className="group relative overflow-hidden aspect-video block"
        >
          <Image
            src={next.posterImage}
            alt={next.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-right">
            <p className="text-light font-gotham text-xs uppercase tracking-widest mb-1">Next →</p>
            <h3 className="text-light font-gotham-bold text-xl">{next.title}</h3>
          </div>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}
