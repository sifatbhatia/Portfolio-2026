'use client'

import GlobalNavbar from '../components/GlobalNavbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <main className="min-h-screen bg-[#DFDFDF] text-[#04101D] antialiased overflow-x-hidden">
      <GlobalNavbar />

      <section className="px-[clamp(18px,2.2vw,34px)] pt-[118px] md:pt-[146px] pb-14 border-b border-[#04101D]/12">
        <h1 className="text-[clamp(2.2rem,6vw,5.6rem)] leading-[0.9] tracking-[-0.04em]">
          Design <span className="font-playfair italic text-[var(--accent)]">Metamorphosis.</span>
        </h1>
      </section>

      <section className="px-[clamp(18px,2.2vw,34px)] py-12 border-b border-[#04101D]/12">
        <div className="max-w-[980px] space-y-6 text-lg leading-relaxed text-[#04101D]/80">
          <p>
            I'm Sifat — a Los Angeles-based design engineer working at the intersection of visual storytelling and technical precision. My practice is built around one core idea: digital experiences should feel as intentional as they look.
          </p>
          <p>
            It started with notebook sketches and a single question — how do you make technology feel human? That curiosity grew into a full creative practice focused on motion, atmosphere, and the details most people never consciously notice but always feel.
          </p>
          <p>
            I work under Siftion (pronounced "sif-chun"), partnering with artists and brands — J. Worra, Miss Dre, Wicked Paradise — to turn abstract creative visions into interfaces that move, breathe, and hold attention.
          </p>
          <p>
            What separates my work isn't a stack or a style. It's the refusal to treat any element as an afterthought. Every project is a cohesive narrative built from motion, clarity, and structure that earns trust.
          </p>
        </div>
      </section>

      <section className="px-[clamp(18px,2.2vw,34px)] py-12 border-b border-[#04101D]/12">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#04101D]/55">What I Do.</p>
        <div className="mt-5 grid md:grid-cols-3 gap-4">
          {[
            ['Direction', 'Editorial hierarchy, strong typography, and visual intent.'],
            ['Execution', 'Production-grade frontend architecture and motion discipline.'],
            ['Outcome', 'Distinctive web presence that supports real business goals.'],
          ].map(([t, d]) => (
            <article key={t} className="rounded-xl border border-[#04101D]/12 bg-white/60 p-5">
              <h3 className="text-xl tracking-tight">{t}</h3>
              <p className="mt-2 text-[#04101D]/70">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-[clamp(18px,2.2vw,34px)] py-12 border-b border-[#04101D]/12">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#04101D]/55">Press & Features.</p>
        <div className="mt-5 grid md:grid-cols-2 gap-4">
          <article className="rounded-xl border border-[#04101D]/12 bg-white/60 p-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#04101D]/45">Featured Work</p>
            <p className="mt-2 text-[#04101D]/78">Selected collaborations and releases are being documented here.</p>
          </article>
          <article className="rounded-xl border border-[#04101D]/12 bg-white/60 p-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#04101D]/45">Updates</p>
            <p className="mt-2 text-[#04101D]/78">New mentions, interviews, and project highlights will be published as they drop.</p>
          </article>
        </div>
      </section>

      <section className="px-[clamp(18px,2.2vw,34px)] py-12">
        <a href="/contact" className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-white no-underline hover:brightness-110">
          Start project
        </a>
      </section>

      <Footer />
    </main>
  )
}
