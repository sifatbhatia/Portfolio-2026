'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import GlobalNavbar from '../components/GlobalNavbar'
import FooterBrand from '../components/FooterBrand'
import AuroraTransition from '../components/AuroraTransition'
import { getProjectThumbnail, getProjectColor } from './project-data'

const PROJECTS = [
  {
    slug: 'j-worra',
    title: 'J. Worra',
    tagline: 'Artist platform — motion-led front end, long-term partnership',
    category: 'Artist',
    year: '2021–26',
  },
  {
    slug: 'sifs-utilities',
    title: "Sif's Utilities",
    tagline: 'Privacy-first in-browser tools via WebAssembly',
    category: 'Product',
    year: '2025',
  },
  {
    slug: 'qlo-agency',
    title: 'QLO Agency',
    tagline: 'Webflow builds — components, SEO, accessibility-minded delivery',
    category: 'Agency',
    year: '2024–26',
  },
  {
    slug: 'l-affaire-musicale',
    title: "L'Affaire Musicale",
    tagline: 'Label identity, roster sites, and performance across 12+ properties',
    category: 'Brand',
    year: '2021–25',
  },
  {
    slug: 'clipkeep',
    title: 'ClipKeep',
    tagline: 'Personal vault for TikTok, IG & YouTube links — metadata, collections, mobile-first; Supabase + optional AI summaries',
    category: 'Product',
    year: '2025',
  },
  {
    slug: 'sam-blacky',
    title: 'Sam Blacky',
    tagline: 'Artist digital presence — Squarespace + custom front-end craft',
    category: 'Artist',
    year: '2025',
  },
  {
    slug: 'cherry-tooth',
    title: 'Cherry Tooth',
    tagline: 'Visual identity and web execution for the project',
    category: 'Brand',
    year: '2025',
  },
  {
    slug: 'wicked-paradise',
    title: 'Wicked Paradise',
    tagline: 'Festival-forward sister brand — template system & experience',
    category: 'Events',
    year: '2025',
  },
] as const

function gridPlacement(i: number) {
  if (i === 0) return 'col-span-12 lg:col-span-8 lg:row-span-2 min-h-[min(72vw,420px)] lg:min-h-[min(58vh,560px)]'
  if (i === 1 || i === 2) return 'col-span-12 lg:col-span-4 min-h-[min(56vw,280px)] lg:min-h-[272px]'
  if (i === 3 || i === 4) return 'col-span-12 lg:col-span-6 min-h-[min(52vw,260px)] lg:min-h-[300px]'
  return 'col-span-12 lg:col-span-4 min-h-[min(52vw,240px)] lg:min-h-[280px]'
}

export default function ProjectsIndex() {
  return (
    <main className="min-h-screen bg-[#130502] antialiased overflow-x-clip selection:bg-[#b83a3a] selection:text-[#fff7f7] font-sans">
      <GlobalNavbar />

      {/* ─── Page header ─── */}
      <header className="relative px-6 md:px-12 lg:px-[6%] pt-28 md:pt-36 pb-12 md:pb-20 overflow-x-clip">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] font-light tracking-[-0.035em] text-[#fff7f7]"
              >
                Projects
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              <p className="text-base md:text-lg text-[#fff7f7]/45 leading-relaxed max-w-md">
                Selected work across artist platforms, label ecosystems, agency delivery, and product builds — usually Next.js, Webflow, or Squarespace, always performance- and accessibility-aware.
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ─── Bento grid ─── */}
      <section className="px-6 md:px-12 lg:px-[6%] pb-24 md:pb-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-12 gap-4 md:gap-5 lg:gap-6">
            {PROJECTS.map((p, i) => {
              const image = getProjectThumbnail(p.slug)
              const accent = getProjectColor(p.slug)
              return (
                <motion.article
                  key={p.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: Math.min(i * 0.06, 0.42), ease: [0.22, 1, 0.36, 1] }}
                  className={gridPlacement(i)}
                >
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.25rem] md:rounded-3xl border border-[#fff7f7]/[0.07] bg-[#fff7f7]/[0.02] outline-none transition-[border-color,box-shadow] duration-500 focus-visible:ring-2 focus-visible:ring-[#b83a3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#130502] hover:border-[#fff7f7]/15"
                  >
                    {/* Media */}
                    <div className="relative flex-1 min-h-[140px] overflow-hidden">
                      {image ? (
                        <img
                          src={image}
                          alt={`${p.title} preview`}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div
                          className="absolute inset-0 opacity-40"
                          style={{
                            background: `linear-gradient(135deg, ${accent} 0%, #130502 100%)`,
                          }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#b83a3a]/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#130502] via-[#130502]/20 to-transparent opacity-90 md:opacity-80" />

                      {/* Corner index */}
                      <span className="absolute left-5 top-5 font-mono text-[10px] tabular-nums tracking-widest text-[#fff7f7]/35">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#fff7f7]/15 bg-[#130502]/50 text-[#fff7f7]/40 backdrop-blur-sm transition-all duration-500 group-hover:border-[#b83a3a]/45 group-hover:text-[#fff7f7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                    </div>

                    {/* Copy */}
                    <div className="relative z-[1] flex shrink-0 flex-col gap-2 border-t border-[#fff7f7]/[0.06] bg-[#130502]/90 px-5 py-5 md:px-7 md:py-6 backdrop-blur-md">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-mono uppercase tracking-[0.28em] text-[#fff7f7]/35">
                        <span>{p.category}</span>
                        <span className="text-[#fff7f7]/15">·</span>
                        <span className="tabular-nums">{p.year}</span>
                      </div>
                      <h2 className="text-xl font-normal tracking-[-0.02em] text-[#fff7f7] transition-colors duration-300 group-hover:text-[#b83a3a] md:text-2xl lg:text-[1.65rem]">
                        {p.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-[#fff7f7]/40 line-clamp-2 md:line-clamp-none">
                        {p.tagline}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <section className="relative">
        <AuroraTransition />
        <div className="relative z-30 rounded-t-[5rem] bg-[#fff7f7] shadow-[-30px_0_120px_rgba(0,0,0,0.6)]">
          <FooterBrand />
        </div>
      </section>
    </main>
  )
}
