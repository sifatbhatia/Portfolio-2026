import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
  title: "Sifat Bhatia | High-Fidelity Web Design & Development in Los Angeles",
  description: "Portfolio of Sifat Bhatia, an LA-based designer and developer. Specializing in Webflow, Next.js, and custom digital experiences for artists and visionary brands through Siftion.",
  keywords: ["Sifat Bhatia", "Siftion", "Los Angeles Web Designer", "Web Developer LA", "Webflow Developer", "Next.js Developer", "Artist Web Design", "Digital Identity"],
  authors: [{ name: "Sifat Bhatia" }],
  openGraph: {
    title: "Sifat Bhatia | Design & Development Portfolio",
    description: "Surgical precision in high-fidelity digital experiences. Based in Los Angeles.",
    url: "https://siftion.pages.dev",
    siteName: "Sifat Bhatia Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sifat Bhatia | Design & Development",
    description: "LA-based designer and developer crafting interactive digital experiences.",
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
    <html lang="en">
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
              "url": "https://siftion.pages.dev",
              "jobTitle": "Web Designer and Developer",
              "brand": {
                "@type": "Brand",
                "name": "Siftion"
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
                "https://dribbble.com/sifatb",
                "https://www.instagram.com/sifatxo"
              ],
              "knowsAbout": [
                "Web Design",
                "Webflow Development",
                "Next.js",
                "React",
                "User Interface Design",
                "Digital Branding",
                "Aesthetic Engineering"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen">
        <script src="https://js.puter.com/v2/" defer></script>
        <SmoothScroll>
          {children}
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
