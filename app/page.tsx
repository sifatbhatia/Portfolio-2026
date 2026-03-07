'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import GlobalNavbar from './components/GlobalNavbar'
import Footer from './components/Footer'
import HeroCarousel from './components/HeroCarousel'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const PROJECTS = [
  { title: 'J. Worra', subtitle: 'Artist Website · Web Identity', year: '2026', slug: 'j-worra', image: '/previews/j-worra/screenshot-1.webp' },
  { title: "Sif's Utilities", subtitle: 'Privacy-first Tool Suite', year: '2025', slug: 'sifs-utilities', image: '/previews/sifs-utilities/screenshot-1.webp' },
  { title: "L'Affaire Musicale", subtitle: 'Agency Rebrand', year: '2025', slug: 'l-affaire-musicale', image: '/previews/l-affaire-musicale/screenshot-1.webp' },
  { title: 'QLO Agency', subtitle: 'Studio Identity', year: '2025', slug: 'qlo-agency', image: '/previews/qlo-agency/screenshot-1.webp' },
  { title: 'ClipKeep', subtitle: 'Content Archival', year: '2025', slug: 'clipkeep', image: '/previews/clipkeep/screenshot-1.webp' },
  { title: 'Sam Blacky', subtitle: 'Artist Platform', year: '2025', slug: 'sam-blacky', image: '/previews/sam-blacky/screenshot-1.webp' },
  { title: 'Cherry Tooth', subtitle: 'Brand Identity', year: '2025', slug: 'cherry-tooth', image: '/previews/cherry-tooth/screenshot-1.webp' },
  { title: 'Wicked Paradise', subtitle: 'Event Experience', year: '2025', slug: 'wicked-paradise', image: '/previews/wicked-paradise/screenshot-1.webp' },
]

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (heroRef.current) {
      const heroEls = heroRef.current.querySelectorAll('[data-animate]')
      gsap.fromTo(
        heroEls,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: heroRef.current, start: 'top 80%' },
        },
      )
    }

    if (processRef.current) {
      const rows = processRef.current.querySelectorAll('.process-row')
      rows.forEach((row: any) => {
        gsap.fromTo(
          row,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: row, start: 'top 85%' },
          },
        )
      })
    }

    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: quoteRef.current, start: 'top 75%' },
        },
      )
    }

    if (metricsRef.current) {
      const cards = metricsRef.current.querySelectorAll('.metric-card')
      cards.forEach((card: any, i: number) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'back.out(1.4)',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          },
        )
      })
    }

    if (servicesRef.current) {
      const services = servicesRef.current.querySelectorAll('.service-item')
      services.forEach((s: any) => {
        gsap.fromTo(
          s,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: s, start: 'top 88%' },
          },
        )
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <main ref={containerRef} className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased overflow-x-hidden">
      <GlobalNavbar />

      <section ref={heroRef} className="px-[6%] pt-[112px] md:pt-[136px] pb-12 border-b border-white/12">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <p data-animate className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
              Atmospheric Interfaces.
            </p>
            <h1 data-animate className="mt-6 leading-[0.84] tracking-[-0.055em] font-semibold" style={{ fontSize: 'clamp(2.8rem, 9.2vw, 8.6rem)' }}>
              Design that moves.
              <br />
              Code that feels.
              <br />
              <span className="font-playfair italic font-normal text-[var(--accent)]">Experiences built to last.</span>
            </h1>
          </div>
          <div data-animate className="lg:col-span-4">
            <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">01 · Hook</p>
              <p className="mt-4 text-white/80 leading-relaxed">
                I'm Sifat — an LA-based design engineer crafting high-fidelity digital experiences for artists and brands who refuse to blend in.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/projects" className="rounded-full bg-[var(--accent)] px-5 py-2 text-[10px] uppercase tracking-[0.2em] text-white no-underline hover:brightness-110">
                  View work
                </Link>
                <Link href="/contact" className="rounded-full border border-white/20 px-5 py-2 text-[10px] uppercase tracking-[0.2em] text-white no-underline hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
                  Start project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeroCarousel items={PROJECTS} />

      <section ref={processRef} className="px-[6%] py-14 border-b border-white/12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">04 · My Process</p>
            <div className="mt-5 space-y-6">
              {[
                ['01', 'Listen', "I start by understanding your story, audience, and what you're hoping to achieve."],
                ['02', 'Design System', "I craft a visual language that's uniquely yours—typography, color, motion, and layout that tell your story."],
                ['03', 'Build & Launch', "I build your site with clean, fast code, test it across devices, and launch without a hitch."],
              ].map(([n, t, d]) => (
                <div key={n} className="process-row grid grid-cols-[42px_1fr] gap-4">
                  <p className="font-mono text-[11px] text-[var(--accent)]">{n}</p>
                  <div>
                    <h3 className="text-2xl tracking-[-0.02em]">{t}</h3>
                    <p className="mt-1 text-white/60">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 rounded-2xl bg-[var(--accent)] p-6 md:p-8 text-white">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Availability</p>
            <h3 className="mt-3 text-[clamp(2rem,4.2vw,3.4rem)] leading-[0.9] tracking-[-0.04em]">Accepting Q2 / Q3 2026 projects</h3>
            <p className="mt-4 text-white/85">Best fit: artists, agencies, founders. Typical scopes from focused landing systems to full portfolio redesign + build.</p>
            <Link href="/contact" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] no-underline hover:bg-[#DFDFDF]">
              Book intro
            </Link>
          </div>
        </div>
      </section>

      <section ref={quoteRef} className="px-[6%] py-16 border-b border-white/12">
        <div className="max-w-[980px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">05 · Mini-Quote</p>
          <p className="mt-5 font-playfair italic leading-[1.1] tracking-[-0.02em]" style={{ fontSize: 'clamp(2rem,5vw,4.8rem)' }}>
            "If your site looks like everyone else's, it costs you before a word is read."
          </p>
        </div>
      </section>

      <section ref={metricsRef} className="px-[6%] py-20 border-b border-white/12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ['-38%', 'Average load-time improvement after optimization pass.'],
            ['+43%', 'Typical increase in qualified inquiries after redesign.'],
            ['2–5 weeks', 'Most portfolio projects delivered in this window.'],
          ].map(([k, v]) => (
            <div key={k} className="metric-card rounded-2xl border border-white/12 bg-white/[0.02] p-6">
              <p className="text-[clamp(2rem,4vw,3rem)] leading-none tracking-tight text-[var(--accent)]">{k}</p>
              <p className="mt-3 text-white/65">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={servicesRef} className="px-[6%] py-20 border-b border-white/12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">03 · Capabilities & The Stack</p>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {[
              ['Portfolio Redesign', "Transform your existing site into a distinctive, high-performing presence. I'll refine your messaging, restructure content, and deliver a premium implementation."],
              ['New Build', "From concept to launch, I design and build your site from the ground up—complete with analytics, SEO basics, and thorough QA."],
              ['Performance Refactor', "Speed up your site, improve accessibility, and clean up the codebase so it's easier to maintain and scale."],
            ].map(([t, d]) => (
              <div key={t} className="service-item border-b border-white/10 pb-6">
                <h3 className="text-3xl tracking-[-0.03em]">{t}</h3>
                <p className="mt-2 text-white/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[6%] py-20 border-b border-white/12">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">05 · Trust Signals</p>
            <div className="mt-6 space-y-6">
              <blockquote className="text-xl leading-relaxed text-white/90">"Sifat translated our messy ideas into a site that finally feels premium."</blockquote>
              <p className="text-white/45 text-sm uppercase tracking-[0.14em]">Creative Director · Music Brand</p>
              <blockquote className="text-xl leading-relaxed text-white/90">"Fast, deliberate, and rare combo of design taste + engineering clarity."</blockquote>
              <p className="text-white/45 text-sm uppercase tracking-[0.14em]">Founder · Product Studio</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-6 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">Client fit</p>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>· Artists & creative brands who need a digital home as bold as their work.</li>
              <li>· Founders who care about aesthetics and performance.</li>
              <li>· Teams that want one person owning design + build.</li>
            </ul>
            <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-white no-underline hover:brightness-110">
              Start my project
            </Link>
          </div>
        </div>
      </section>

      <section className="px-[6%] py-20 border-b border-white/12">
        <div className="max-w-[960px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">06 · Mini-About</p>
          <p className="mt-5 text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.35] text-white/85">
            I'm Sifat Bhatia, a design engineer based in LA. I blend frontend development with design sensibility to craft sites that feel as good as they perform. When I'm not coding, you'll find me at a live show, exploring festival art installations, or obsessing over typography. I believe great digital products have a human heartbeat.
          </p>
        </div>
      </section>

      <section className="px-[6%] py-20 border-b border-white/12">
        <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-7 md:p-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">07 · High-Intent CTA</p>
            <h3 className="mt-3 text-[clamp(2rem,4.5vw,4rem)] leading-[0.95] tracking-[-0.04em]">Ready to build something that doesn't look like everyone else's?</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[var(--accent)] px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-white no-underline hover:brightness-110">
              Book a call
            </Link>
            <a href="/Sifat_Bhatia_Resume.pdf" className="rounded-full border border-white/20 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-white no-underline hover:border-[var(--accent)] hover:text-[var(--accent)]">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section className="px-[6%] py-20 border-b border-white/12">
        <div className="max-w-[960px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">Bonus · FAQ</p>
          <div className="mt-6 space-y-3">
            {[
              ['How long does it take?', 'Most projects land between 2 and 5 weeks depending on scope and content readiness.'],
              ['Do you do both design and development?', 'Yes — strategy, visuals, and code all stay in one stream.'],
              ['Can we start small?', 'Absolutely. We can begin with a focused audit or one-page redesign sprint.'],
            ].map(([q, a]) => (
              <details key={q} className="rounded-xl border border-white/12 p-4 bg-white/[0.02]">
                <summary className="cursor-pointer text-white/90">{q}</summary>
                <p className="mt-3 text-white/60">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
