import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface CTABlockProps {
  heading: string
  content: string
  ctaLink: string
  ctaLabel: string
  mode?: 'dark' | 'light'
  className?: string
}

export default function CTABlock({
  heading,
  content,
  ctaLink,
  ctaLabel,
  mode = 'light',
  className,
}: CTABlockProps) {
  const isDark = mode === 'dark'

  return (
    <section
      className={cn(
        'py-20 px-4',
        isDark ? 'bg-dark text-light' : 'bg-light text-dark',
        className
      )}
    >
      <div className="container-gi text-center max-w-3xl mx-auto">
        <h2 className="font-hepta text-heading-lg mb-6">{heading}</h2>
        <p className="font-gotham text-body mb-10">{content}</p>
        <Button href={ctaLink} mode={isDark ? 'light' : 'dark'}>
          {ctaLabel}
        </Button>
      </div>
    </section>
  )
}
