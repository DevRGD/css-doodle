import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0c27' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export const metadata = {
  title: {
    default: 'CSS Doodle | Interactive Generative Art by DevRGD',
    template: '%s | CSS Doodle - DevRGD',
  },
  description:
    'Explore a stunning showcase of scroll-triggered generative art backgrounds created with css-doodle, Next.js, and GSAP. A creative coding project by DevRGD.',
  keywords: [
    'css-doodle',
    'generative art',
    'next.js',
    'react',
    'gsap',
    'scrolltrigger',
    'interactive backgrounds',
    'web design',
    'creative coding',
    'frontend development',
    'javascript animation',
    'DevRGD',
  ],
  creator: 'DevRGD',
  authors: [{ name: 'DevRGD', url: 'https://css-doodle.vercel.app' }],
  metadataBase: new URL('https://css-doodle.vercel.app'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'CSS Doodle | Interactive Generative Art by DevRGD',
    description:
      'A stunning showcase of scroll-triggered generative art backgrounds created with css-doodle, Next.js, and GSAP.',
    url: 'https://css-doodle.vercel.app',
    siteName: 'CSS Doodle | DevRGD',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'A showcase of generative art patterns from CSS Doodle.',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSS Doodle | Interactive Generative Art by DevRGD',
    description:
      'A stunning showcase of scroll-triggered generative art backgrounds created with css-doodle, Next.js, and GSAP.',
    creator: '@DevRGD',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'CSS Doodle Showcase',
              url: 'https://css-doodle.vercel.app',
              applicationCategory: 'DesignApplication',
              operatingSystem: 'All',
              author: {
                '@type': 'Person',
                name: 'DevRGD',
                url: 'https://css-doodle.vercel.app',
              },
              description: metadata.description,
              screenshot: 'https://css-doodle.vercel.app/og-image.png',
            }),
          }}
        />
      </body>
    </html>
  );
}
