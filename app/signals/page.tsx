'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import GlobalNavbar from '../components/GlobalNavbar'
import FooterBrand from '../components/FooterBrand'
import AuroraTransition from '../components/AuroraTransition'

interface Entry {
  id: string
  title: string
  timestamp: string
  slug: string
  content: string
}

export default function JournalIndex() {
  const [entries, setEntries] = useState<Entry[]>([])

  useEffect(() => {
    fetch('/api/pulses', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setEntries(d || []))
      .catch(() => setEntries([]))
  }, [])

  return (
    <main className="min-h-screen bg-[#121212] antialiased overflow-x-hidden selection:bg-[#C41E3D] selection:text-white">
      <GlobalNavbar />

      {/* ─── JOURNAL HEADER ─── */}
      <section className="px-[6%] pt-56 md:pt-80 pb-32 text-white relative">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col gap-12 md:gap-24">
             <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-[#C41E3D] font-bold">Reflections</span>
             <h1 className="text-[clamp(4.5rem,14vw,18rem)] tracking-tighter leading-[0.75] font-bold">
               Digital <br />
               <span className="italic font-playfair font-normal text-[#DFDFDF] opacity-30">Journal.</span>
             </h1>
          </div>
        </div>
      </section>

      {/* ─── STAGGERED FEED ─── */}
      <section className="px-[6%] py-64 md:py-96 bg-[#080808] text-white border-y border-white/5">
        <div className="max-w-[1200px] mx-auto space-y-48 md:space-y-80">
          {entries.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className={`group flex flex-col md:flex-row gap-12 md:gap-32 ${i % 2 !== 0 ? 'md:flex-row-reverse md:text-right' : ''}`}
            >
              <div className="flex flex-col gap-8 flex-1">
                 <div className={`flex items-center gap-6 mb-4 ${i % 2 !== 0 ? 'md:justify-end' : ''}`}>
                    <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#C41E3D] font-bold">Note</span>
                    <div className="h-[1px] w-12 bg-white/10" />
                    <time className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-20 font-bold">{new Date(p.timestamp).toLocaleDateString()}</time>
                 </div>
                 
                 <Link href={`/signals/${p.slug}`} className="block group/link">
                   <h2 className="text-4xl md:text-8xl tracking-tight leading-[0.85] font-bold group-hover/link:text-[#C41E3D] transition-colors duration-500">
                     {p.title}
                   </h2>
                   <p className="mt-12 text-white/30 text-2xl md:text-3xl font-light leading-relaxed italic font-playfair max-w-[35ch] group-hover/link:text-white/60 transition-colors duration-700">
                     &ldquo;{p.content}&rdquo;
                   </p>
                 </Link>
                 
                 <div className={`mt-16 h-[1.5px] w-24 bg-white/5 group-hover:bg-[#C41E3D] group-hover:w-full transition-all duration-1000 ${i % 2 !== 0 ? 'md:ml-auto' : ''}`} />
              </div>
              
              <div className="hidden md:flex flex-col justify-end pb-8">
                 <span className="text-[clamp(4rem,8vw,10rem)] font-mono opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">/ 0{i+1} /</span>
              </div>
            </motion.article>
          ))}

          {!entries.length && (
            <div className="py-48 text-center bg-[#121212]/50 rounded-[4rem] border border-white/5">
                <p className="text-white/20 text-3xl font-light italic font-playfair">The journal is currently in sync. New reflections appearing shortly.</p>
            </div>
          )}
        </div>
      </section>

      {/* ─── FINAL FOOTER ─── */}
      <section className="relative">
         <AuroraTransition />
         <div className="relative z-30 rounded-t-[5rem] bg-[#fdf5ef] shadow-[-30px_0_120px_rgba(0,0,0,0.6)]">
            <FooterBrand />
         </div>
      </section>
    </main>
  )
}
