'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, socialLinks } from '@/data/site'
import AnimatedLogo from '@/components/ui/AnimatedLogo'
import { InstagramIcon, FacebookIcon, LinkedInIcon } from '@/components/ui/SocialIcons'

const iconMap = { instagram: InstagramIcon, facebook: FacebookIcon, linkedin: LinkedInIcon }

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-paper flex flex-col p-6"
        >
          {/* Top row */}
          <div className="flex items-center justify-between mb-12">
            <Link href="/" onClick={onClose} className="w-32">
              <AnimatedLogo className="w-full h-auto" />
            </Link>
            <button onClick={onClose} aria-label="Close menu" className="p-2">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M1 1l20 20M21 1L1 21" stroke="#111f2a" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav aria-label="Mobile navigation" className="flex flex-col gap-5 flex-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-sans-bold text-headline text-ink hover:text-ink/40 transition-colors duration-300 block"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Social links */}
          <ul className="flex gap-6 pt-8 border-t border-ink/10">
            {socialLinks.map(link => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-ink hover:text-ink/50 transition-colors duration-300"
                  >
                    {Icon && <Icon width={22} height={22} />}
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
