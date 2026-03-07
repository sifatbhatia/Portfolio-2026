'use client'

import { useState } from 'react'
import GlobalNavbar from '../components/GlobalNavbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', message: '' })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType || 'General'}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\n${formData.message}`)
    window.location.href = `mailto:sifatbht@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen bg-[#DFDFDF] text-[#04101D] antialiased overflow-x-hidden">
      <GlobalNavbar />

      <section className="px-[6%] pt-[118px] md:pt-[146px] pb-14 border-b border-[#04101D]/12">
        <h1 className="text-[clamp(2.2rem,6vw,5.6rem)] tracking-[-0.04em] leading-[0.9]">
          Start the <span className="font-playfair italic text-[var(--accent)]">Dialogue.</span>
        </h1>
        <p className="mt-7 max-w-[760px] text-[#04101D]/75 leading-relaxed">
          Now booking select projects for Q1 & Q2 2026. If you're working on something that demands more than ordinary — a rebrand, a high-fidelity build, an experience worth remembering — let's talk.
        </p>
      </section>

      <section className="px-[6%] py-12 grid gap-8 lg:grid-cols-12 border-b border-[#04101D]/12">
        <form onSubmit={submit} className="lg:col-span-8 space-y-5 rounded-xl border border-[#04101D]/12 bg-white/70 p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-5">
            <input required placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="rounded-xl border border-[#04101D]/14 bg-white px-4 py-3 text-[#04101D] placeholder:text-[#04101D]/40 focus:border-[var(--accent)] outline-none" />
            <input required type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="rounded-xl border border-[#04101D]/14 bg-white px-4 py-3 text-[#04101D] placeholder:text-[#04101D]/40 focus:border-[var(--accent)] outline-none" />
          </div>
          <input placeholder="Project type" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full rounded-xl border border-[#04101D]/14 bg-white px-4 py-3 text-[#04101D] placeholder:text-[#04101D]/40 focus:border-[var(--accent)] outline-none" />
          <textarea required rows={6} placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full rounded-xl border border-[#04101D]/14 bg-white px-4 py-3 text-[#04101D] placeholder:text-[#04101D]/40 focus:border-[var(--accent)] outline-none" />
          <button className="rounded-full bg-[var(--accent)] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white hover:brightness-110">Send inquiry</button>
        </form>

        <aside className="lg:col-span-4 rounded-xl border border-[#04101D]/12 bg-white/70 p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#04101D]/55">Social Protocols.</p>
          <div className="mt-5 space-y-3 text-[#04101D]/80">
            <a className="block no-underline text-[#04101D] hover:text-[var(--accent)]" href="https://linkedin.com/in/siftion" target="_blank">LinkedIn</a>
            <a className="block no-underline text-[#04101D] hover:text-[var(--accent)]" href="https://instagram.com/siftion" target="_blank">Instagram</a>
            <a className="block no-underline text-[#04101D] hover:text-[var(--accent)]" href="https://www.behance.net/siftion" target="_blank">Behance</a>
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  )
}
