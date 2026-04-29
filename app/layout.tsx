import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import InstagramFeed from '@/components/home/InstagramFeed'
import CustomCursor from '@/components/ui/CustomCursor'
import JsonLd from '@/components/seo/JsonLd'
import ContactModal from '@/components/ui/ContactModal'
import { ContactModalProvider } from '@/context/ContactModalContext'
import Script from 'next/script'
import { siteConfig } from '@/data/site'

const BASE_URL = 'https://goodidea.ae'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Goodidea — Branding & Strategy Agency Dubai',
    template: '%s | Goodidea Dubai',
  },
  description:
    'Goodidea is a Dubai-based creative and branding agency. We build brands through strategy, identity, naming, and design — for UAE businesses and beyond.',
  keywords: [
    'branding agency Dubai',
    'brand strategy UAE',
    'brand identity Dubai',
    'creative agency Dubai',
    'naming agency',
    'logo design Dubai',
    'brand design UAE',
    'social media branding Dubai',
    'marketing agency Dubai',
    'Goodidea Dubai',
  ],
  authors: [{ name: 'Goodidea', url: BASE_URL }],
  creator: 'Goodidea FZ LLC',
  publisher: 'Goodidea FZ LLC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: BASE_URL,
    siteName: 'Goodidea',
    title: 'Goodidea — Branding & Strategy Agency Dubai',
    description:
      'Dubai-based creative and branding agency. We build brands that mean something — through strategy, identity, and design.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Goodidea — Branding & Strategy Agency Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goodidea — Branding & Strategy Agency Dubai',
    description: 'Dubai-based creative and branding agency building brands that mean something.',
    images: ['/images/og-image.jpg'],
    creator: '@goodideadubai',
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ backgroundColor: '#F8F5F0' }}>
      <head>
        {/* Google Fonts: Hepta Slab */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Gotham preloads */}
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
        <ContactModalProvider>
          <Header />
          <JsonLd />
          <main className="pt-16 md:pt-20">{children}</main>
          <InstagramFeed />
          <Footer />
          <CustomCursor />
          <ContactModal />
        </ContactModalProvider>

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
