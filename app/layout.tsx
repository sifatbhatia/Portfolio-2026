import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: '#ffffff',
};
import "./globals.css";
import "../src/components/ResponsiveCarousel.css";
import SmoothScroll from "./components/SmoothScroll";
import BackToTop from "./components/BackToTop";
import GlowingOrb from "./components/GlowingOrb";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://sifat.tech'),
  title: "Sifat Bhatia | High-Fidelity Web Design & Development in Los Angeles",
  description: "Portfolio of Sifat Bhatia, an LA-based designer and developer. Specializing in Webflow, Next.js, and custom digital experiences for artists and visionary brands.",
  keywords: ["Sifat Bhatia", "Los Angeles Web Designer", "Web Developer LA", "Webflow Developer", "Next.js Developer", "Artist Web Design", "Digital Identity"],
  authors: [{ name: "Sifat Bhatia" }],
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
  icons: {
    icon: [
      { url: '/favicon/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/icon-80x80.png', sizes: '80x80', type: 'image/png' },
      { url: '/favicon/icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicon/icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicon/icon-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/favicon/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon/icon-1024x1024.png', sizes: '1024x1024', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicon/icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicon/icon-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/favicon/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Sifat Bhatia | Design & Development Portfolio",
    description: "Websites for artists, brands, and events that perform and feel alive. Based in Los Angeles.",
    url: "https://sifat.tech",
    siteName: "Sifat Bhatia Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sifat Bhatia | Design & Development",
    description: "LA-based designer and developer building websites for artists, brands, and events that perform and feel alive.",
  },
  other: {
    "google-site-verification": "verification_token_here",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

        {/* Structured Data for AIO (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sifat Bhatia",
              "url": "https://sifat.tech",
              "jobTitle": "Web Designer and Developer",
              "brand": {
                "@type": "Brand",
                "name": "Sifat Bhatia"
              },
              "location": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Los Angeles",
                  "addressRegion": "CA"
                }
              },
              "sameAs": [
                "https://www.linkedin.com/in/siftion",
                "https://www.behance.net/siftion",
                "https://www.instagram.com/siftion"
              ],
              "knowsAbout": [
                "Web Design",
                "Webflow Development",
                "Next.js",
                "React",
                "Figma",
                "UI/UX Design",
                "Design Systems",
                "Digital Branding",
                "GSAP Animation"
              ]
            })
          }}
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-WJFRNZ86BX`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WJFRNZ86BX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <SmoothScroll>
          {children}
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
