import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: '#130502',
}

export const metadata: Metadata = {
  title: 'About — Sifat Bhatia',
  description:
    'Sifat Bhatia — LA-based design engineer. Siftion is the solo practice behind web, identity, and product UI for artists, labels, and small teams.',
  openGraph: {
    title: 'About — Sifat Bhatia',
    description:
      'Design engineer in Los Angeles. Brand-to-frontend work: fast, accessible sites and systems for music and culture.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — Sifat Bhatia',
    description:
      'Design engineer in Los Angeles. Brand-to-frontend work for artists, labels, and small teams.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
