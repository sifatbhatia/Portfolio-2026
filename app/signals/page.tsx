'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import GlobalNavbar from '../components/GlobalNavbar'
import FooterBrand from '../components/FooterBrand'
import AuroraTransition from '../components/AuroraTransition'
import { plainExcerptFromMarkdown } from './plain-excerpt'

interface Entry {
  id: string
  title: string
  timestamp: string
  slug: string
  content: string
}

export default function SignalsIndexPage() {
  const [entries, setEntries] = useState<Entry[]>([])

  useEffect(() => {
    fetch('/api/pulses', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setEntries(d || []))
      .catch(() => setEntries([]))
  }, [])

  return (
    <main className="min-h-screen bg-[#130502] antialiased overflow-x-clip selection:bg-[#b83a3a] selection:text-[#fff7f7] font-sans">
      <GlobalNavbar />

      {/* One section: sticky intro + 2-col card grid — less vertical scroll */}
      <section className="px-6 md:px-12 lg:px-[6%] pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
            <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto space-y-5 pr-1">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.92] font-light tracking-[-0.035em] text-[#fff7f7]"
              >
                Signals
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm md:text-[15px] text-[#fff7f7]/45 leading-relaxed"
              >
                Published notes from{' '}
                <span className="text-[#fff7f7]/60">Lumis</span>—the research loop I run locally: it observes the
                stack, synthesizes what changed, and drafts posts. I edit every signal before it goes live; this page is
                the public slice of that loop.
              </motion.p>
            </div>

            <div className="lg:col-span-8 xl:col-span-9 min-w-0">
              {entries.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  {entries.map((p, i) => (
                    <motion.li
                      key={p.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.32), ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={`/signals/${p.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-[#fff7f7]/[0.07] bg-[#fff7f7]/[0.02] p-5 md:p-6 outline-none transition-all duration-300 hover:border-[#b83a3a]/35 hover:bg-[#fff7f7]/[0.04] focus-visible:ring-2 focus-visible:ring-[#b83a3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#130502]"
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-mono uppercase tracking-[0.22em] text-[#fff7f7]/35">
                            <span className="text-[#b83a3a]">Signal</span>
                            <span className="text-[#fff7f7]/12">·</span>
                            <time className="tabular-nums">{new Date(p.timestamp).toLocaleDateString()}</time>
                          </div>
                          <ArrowUpRight
                            className="h-4 w-4 shrink-0 text-[#fff7f7]/25 transition-colors group-hover:text-[#b83a3a]"
                            strokeWidth={1.5}
                          />
                        </div>
                        <h3 className="text-lg md:text-xl font-normal tracking-[-0.02em] text-[#fff7f7] group-hover:text-[#b83a3a] transition-colors leading-snug">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-sm text-[#fff7f7]/42 leading-relaxed line-clamp-3 group-hover:text-[#fff7f7]/50 transition-colors">
                          {plainExcerptFromMarkdown(p.content)}
                        </p>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-dashed border-[#fff7f7]/15 bg-[#fff7f7]/[0.02] px-6 py-16 text-center"
                >
                  <p className="text-[#fff7f7]/40 text-base md:text-lg font-light max-w-md mx-auto leading-relaxed">
                    Nothing here yet. New posts will show up when they&apos;re ready.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <AuroraTransition />
        <div className="relative z-30 rounded-t-[5rem] bg-[#fff7f7] shadow-[-30px_0_120px_rgba(0,0,0,0.6)]">
          <FooterBrand />
        </div>
      </section>
    </main>
  )
}
