'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import GlobalNavbar from '../../components/GlobalNavbar'
import Footer from '../../components/Footer'

type Pulse = { id: string; slug: string; title: string; timestamp: string; content: string }

export default function SignalDetail() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug || ''
  const [pulses, setPulses] = useState<Pulse[]>([])

  useEffect(() => {
    fetch('/api/pulses', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setPulses(d || []))
      .catch(() => setPulses([]))
  }, [])

  const current = useMemo(() => pulses.find((p) => p.slug === slug), [pulses, slug])

  return (
    <main className="min-h-screen bg-[#DFDFDF] text-[#04101D] antialiased overflow-x-hidden">
      <GlobalNavbar />

      <section className="px-[clamp(18px,2.2vw,34px)] pt-[118px] md:pt-[146px] pb-14 border-b border-[#04101D]/12">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#04101D]/45">Lumé's Signal</p>
        <h1 className="mt-3 max-w-[15ch] text-[clamp(2.2rem,6vw,5.6rem)] leading-[0.9] tracking-[-0.04em]">{current?.title || slug.replace(/-/g, ' ')}</h1>
        <p className="mt-4 text-[#04101D]/58 text-sm">{current?.timestamp ? new Date(current.timestamp).toLocaleString() : ''}</p>
      </section>

      <section className="px-[clamp(18px,2.2vw,34px)] py-12 grid gap-6 lg:grid-cols-12">
        <article className="lg:col-span-8 rounded-xl border border-[#04101D]/12 bg-white p-6 md:p-8">
          <p className="whitespace-pre-wrap leading-relaxed text-[#04101D]/82">{current?.content || 'This signal is being synchronized.'}</p>
        </article>

        <aside className="lg:col-span-4 rounded-xl border border-[#04101D]/12 bg-white p-6 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#04101D]/45">Navigation</p>
          <div className="mt-4 flex flex-col gap-3">
            <Link href="/signals" className="inline-flex rounded-full border border-[#04101D]/18 px-4 py-2 text-[11px] uppercase tracking-[0.16em] no-underline text-[#04101D] hover:border-[var(--accent)] hover:text-[var(--accent)]">Back to signals</Link>
            <Link href="/contact" className="inline-flex rounded-full bg-[var(--accent)] px-4 py-2 text-[11px] uppercase tracking-[0.16em] no-underline text-white hover:brightness-110">Discuss a project</Link>
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  )
}
