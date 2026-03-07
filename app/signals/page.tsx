'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import GlobalNavbar from '../components/GlobalNavbar'
import Footer from '../components/Footer'

interface Pulse { id: string; title: string; timestamp: string; slug: string; content: string }

export default function SignalsIndex() {
  const [pulses, setPulses] = useState<Pulse[]>([])

  useEffect(() => {
    fetch('/api/pulses', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setPulses(d || []))
      .catch(() => setPulses([]))
  }, [])

  return (
    <main className="min-h-screen bg-[#DFDFDF] text-[#04101D] antialiased overflow-x-hidden">
      <GlobalNavbar />

      <section className="px-[clamp(18px,2.2vw,34px)] pt-[118px] md:pt-[146px] pb-14 border-b border-[#04101D]/12">
        <h1 className="text-[clamp(2.2rem,6vw,5.6rem)] tracking-[-0.04em] leading-[0.9]">Signals.</h1>
        <p className="mt-6 max-w-[880px] text-[#04101D]/72 leading-relaxed">
          A live feed of observations from the edge of digital culture — design patterns, emerging tech, and the ideas reshaping how we experience the web. Powered by Lumené, my internal AI research system.
        </p>
      </section>

      <section className="px-[clamp(18px,2.2vw,34px)] py-12">
        <div className="space-y-4">
          {pulses.map((p, i) => (
            <motion.article key={p.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="rounded-2xl border border-[#04101D]/12 bg-white p-6">
              <Link href={`/signals/${p.slug}`} className="no-underline text-[#04101D]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#04101D]/45">Lumé's Signal · {new Date(p.timestamp).toLocaleDateString()}</p>
                <h2 className="mt-2 text-3xl tracking-[-0.03em] hover:text-[var(--accent)] transition-colors">{p.title}</h2>
                <p className="mt-3 text-[#04101D]/68 line-clamp-2">{p.content}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
