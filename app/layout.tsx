import type { Metadata } from 'next'
import { Hepta_Slab } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import Script from 'next/script'
import { siteConfig } from '@/data/site'

const heptaSlab = Hepta_Slab({
  subsets: ['latin'],
  variable: '--font-hepta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Goodidea — Branding & Strategy Agency Dubai',
    template: '%s | Goodidea',
  },
  description: 'Connecting good strategies with good creativity. Dubai-based branding and strategy agency.',
  openGraph: {
    siteName: 'Goodidea',
    locale: 'en_AE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={heptaSlab.variable}>
      <head>
        <link
          rel="preload"
          as="font"
          href="/fonts/gothaam/Gotham-Bold.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/gothaam/Gotham-Medium.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/gothaam/Gotham-Book.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
        <CustomCursor />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.analyticsId}');
          `}
        </Script>
      </body>
    </html>
  )
}
