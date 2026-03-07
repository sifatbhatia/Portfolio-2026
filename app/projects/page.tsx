'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import GlobalNavbar from '../components/GlobalNavbar'
import Footer from '../components/Footer'

const projects = [
  { title: 'J. Worra', cat: 'Web Identity', year: '2026', slug: 'j-worra', image: '/previews/j-worra/screenshot-1.webp', note: 'A bold artist platform with a custom identity that stands out.' },
  { title: "Sif's Utilities", cat: 'Performance Utilities', year: '2025', slug: 'sifs-utilities', image: '/previews/sifs-utilities/screenshot-1.webp', note: 'Privacy-focused browser tools that feel like magic.' },
  { title: 'QLO Agency', cat: 'Studio Identity', year: '2025', slug: 'qlo-agency', image: '/previews/qlo-agency/screenshot-1.webp', note: 'A digital presence that matches the studio’s creative edge.' },
  { title: "L' Affaire Musicale", cat: 'Agency Rebrand', year: '2025', slug: 'l-affaire-musicale', image: '/previews/l-affaire-musicale/screenshot-1.webp', note: 'Full rebrand—from visual identity to website—capturing the agency’s soul.' },
  { title: 'ClipKeep', cat: 'Content Archival', year: '2025', slug: 'clipkeep', image: '/previews/clipkeep/screenshot-1.webp', note: 'Simple but powerful content archiving that just works.' },
  { title: 'Sam Blacky', cat: 'Artist Platform', year: '2025', slug: 'sam-blacky', image: '/previews/sam-blacky/screenshot-1.webp', note: 'Visual-forward artist platform tuned for high-energy discovery.' },
  { title: 'Cherry Tooth', cat: 'Brand Identity', year: '2025', slug: 'cherry-tooth', image: '/previews/cherry-tooth/screenshot-1.webp', note: 'Identity-led website balancing precision with personality.' },
  { title: 'Wicked Paradise', cat: 'Event Experience', year: '2025', slug: 'wicked-paradise', image: '/previews/wicked-paradise/screenshot-1.webp', note: 'A festival-forward digital experience built to hold attention.' },
]

const tileLayout = [
  'md:col-span-7 md:row-span-5 md:-rotate-[0.5deg]',
  'md:col-span-5 md:row-span-4 md:translate-y-4 md:rotate-[0.35deg]',
  'md:col-span-4 md:row-span-4 md:-translate-y-2 md:-rotate-[0.35deg]',
  'md:col-span-8 md:row-span-5 md:translate-y-2 md:rotate-[0.3deg]',
  'md:col-span-6 md:row-span-4 md:-translate-y-1 md:-rotate-[0.25deg]',
]

export default function ProjectsIndex() {
  return (
    <main className="min-h-screen bg-[#DFDFDF] text-[#121212] antialiased overflow-x-hidden">
      <GlobalNavbar />

      <section className="px-[6%] pt-[118px] md:pt-[146px] pb-14 border-b border-[#121212]/12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h1 className="text-[clamp(2.3rem,6vw,6.2rem)] tracking-[-0.045em] leading-[0.88]">
            The Work.
          </h1>
          <p className="max-w-[620px] text-[#121212]/70 leading-relaxed">
            Every project here is a digital transformation — visual identity, motion, and engineering working as one.
          </p>
        </div>
      </section>

      <section className="px-[6%] py-10">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[#121212]/55">More Work.</p>
        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[74px] gap-4 md:gap-5 items-stretch">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group ${tileLayout[i % tileLayout.length]} relative`}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="relative h-full min-h-[320px] md:min-h-0 flex flex-col rounded-2xl border border-[#121212]/12 bg-white no-underline text-[#121212] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:border-[var(--accent)]"
              >
                <div className="relative flex-1 min-h-[180px] overflow-hidden border-b border-[#121212]/10">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]" />
                  <span className="absolute top-3 left-3 rounded-full bg-[#121212]/78 px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] text-white/90">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="p-5 md:p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#121212]/48">{p.cat} · {p.year}</p>
                  <h2 className="mt-2 text-[clamp(1.5rem,2.3vw,2.8rem)] leading-[0.92] tracking-[-0.03em] group-hover:text-[var(--accent)] transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-[#121212]/65 text-sm leading-relaxed">{p.note}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}