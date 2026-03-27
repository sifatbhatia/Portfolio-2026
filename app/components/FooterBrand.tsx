'use client'

import Link from 'next/link'

const SOCIALS = [
  { name: 'Instagram', href: 'https://instagram.com/siftion' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/siftion' },
  { name: 'Behance', href: 'https://www.behance.net/siftion' },
  { name: 'Twitter', href: 'https://twitter.com/siftion' },
]

export default function FooterBrand() {
  return (
    <footer className="relative bg-[#fdf5ef] text-[#121212] px-[6%] pt-40 pb-12 overflow-hidden group/footer">
      <div className="max-w-[1700px] mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-16 md:gap-12 items-start pb-48">

          {/* Logo Block */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block transition-transform duration-500 hover:scale-110 active:scale-95">
              <img src="/Sifat -Bhatia.svg" alt="Sifat Bhatia Logo" className="w-[180px] md:w-[220px] h-auto" />
            </Link>
          </div>

          {/* Navigation Matrices */}
          {[
            { label: 'Process', items: ['Listen', 'Strategy', 'Design', 'Development'] },
            { label: 'Studio', items: ['About', 'Projects', 'Journal', 'News'] },
            { label: 'Explore', items: ['Case Studies', 'Tech Stack', 'Philosophy', 'Contact'] },
          ].map((col) => (
            <div key={col.label}>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-20 mb-10 font-bold">{col.label}</h4>
              <ul className="space-y-4">
                {col.items.map(item => (
                  <li key={item}>
                    <Link href="#" className="text-[14px] font-medium opacity-50 hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-20 mb-10 font-bold">Connect</h4>
            <ul className="space-y-4">
              {SOCIALS.map(({ name, href }) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noreferrer" className="text-[14px] font-medium opacity-50 hover:opacity-100 transition-all duration-300">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Foundational Branding Decal */}
        <div className="relative pt-24 flex flex-col justify-end min-h-[50vh] select-none cursor-default">
          <div className="flex flex-col md:flex-row justify-between items-end w-full relative z-20 pb-12">
            <p className="text-[11px] font-mono tracking-[0.2em] opacity-20">
              © 2026 Siftion, Inc. · Creative Engineering
            </p>
            <p className="hidden md:block text-[11px] font-mono tracking-[0.2em] opacity-20 italic">
              Designed for the endurance of digital craftsmanship.
            </p>
          </div>

          {/* The "Foundational SVG" - Using a centered oversized width to prevent scroll and alignment issues */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[100vw] pointer-events-none translate-y-[28%] select-none transition-transform duration-1000 group-hover/footer:translate-y-[22%]">
            <img
              src="/Siftion.svg"
              alt="Siftion Foundational Wordmark"
              className="w-full h-auto opacity-100"
              style={{ filter: 'brightness(0)' }}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
