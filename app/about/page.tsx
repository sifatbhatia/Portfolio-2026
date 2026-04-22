'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import GlobalNavbar from '../components/GlobalNavbar'
import FooterBrand from '../components/FooterBrand'
import AuroraTransition from '../components/AuroraTransition'

const APPROACH = [
  {
    num: '01',
    title: 'Strategy',
    body: 'Figure out what "done" means before touching layout. Fewer rounds, fewer surprises.',
  },
  {
    num: '02',
    title: 'Design',
    body: 'Identity as a system—type, color, motion—that still makes sense months after launch.',
  },
  {
    num: '03',
    title: 'Build',
    body: "Next.js, Webflow, or Squarespace when that's the right tool. Performance and accessibility baked in, not bolted on.",
  },
] as const

const META = [
  { label: 'Based', value: 'Los Angeles' },
  { label: 'Focus', value: 'Web, identity, product UI' },
  { label: 'Experience', value: '6+ years shipping' },
] as const

function GridField() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.4]"
      aria-hidden
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,247,247,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,247,247,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 20%, black 20%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 20%, black 20%, transparent 75%)',
      }}
    />
  )
}

export default function About() {
  return (
    <main className="relative min-h-screen bg-[#130502] antialiased overflow-x-clip selection:bg-[#b83a3a] selection:text-[#fff7f7] font-sans">
      <GridField />

      {/* Warm lift + vignette */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(184,58,58,0.14)_0%,transparent_50%),radial-gradient(ellipse_90%_60%_at_100%_50%,rgba(184,58,58,0.06)_0%,transparent_45%),radial-gradient(ellipse_70%_50%_at_0%_80%,rgba(255,247,247,0.04)_0%,transparent_50%)]"
        aria-hidden
      />

      <div className="relative z-10">
        <GlobalNavbar />

        <header className="relative px-5 sm:px-8 md:px-12 lg:px-[max(2rem,6vw)] pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-12 lg:gap-0 lg:min-h-[min(78vh,720px)]">
              {/* Left column */}
              <div className="lg:flex-1 lg:pr-12 xl:pr-20 flex flex-col justify-between gap-14">
                <div>
                  <div className="flex items-center gap-4 mb-10 md:mb-12">
                    <span className="h-px w-12 md:w-16 bg-[#b83a3a]" aria-hidden />
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#b83a3a] font-semibold">
                      About
                    </p>
                  </div>

                  <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[clamp(2rem,5.2vw,3.25rem)] sm:text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] font-light tracking-[-0.04em] text-[#fff7f7]"
                  >
                    <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#fff7f7]/35 font-normal mb-6 md:mb-8">
                      Sifat Bhatia
                    </span>
                    <span className="block">
                      Design engineer — I work with artists, labels, and small teams on sites and systems that need to{' '}
                      <span className="text-[#b83a3a] font-playfair italic font-normal">feel right</span>
                      <span className="text-[#fff7f7]/25"> & </span>
                      <span className="text-[#fff7f7]">stay fast.</span>
                    </span>
                  </motion.h1>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-xl text-base md:text-lg text-[#fff7f7]/50 leading-relaxed border-l-2 border-[#b83a3a]/50 pl-6 md:pl-8"
                >
                  <span className="text-[#fff7f7]">Siftion</span> is the name I ship under—one person, end to end. If
                  the project needs a bigger bench, I bring in collaborators and stay accountable for the result.
                </motion.p>
              </div>

              {/* Right column — meta slab */}
              <motion.aside
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="lg:w-[min(100%,380px)] xl:w-[420px] shrink-0 flex flex-col"
              >
                <div className="flex-1 rounded-sm border border-[#fff7f7]/[0.12] bg-[#0c0302]/80 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-center gap-10 shadow-[inset_0_1px_0_rgba(255,247,247,0.06),0_24px_80px_rgba(0,0,0,0.45)]">
                  {META.map(({ label, value }) => (
                    <div key={label} className="group">
                      <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-[#b83a3a]/90 mb-2">
                        {label}
                      </p>
                      <p className="text-lg md:text-xl text-[#fff7f7] font-light tracking-[-0.02em] group-hover:text-[#fff7f7] transition-colors border-b border-transparent group-hover:border-[#b83a3a]/40 pb-1 inline-block">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.aside>
            </div>
          </div>
        </header>

        {/* Lead — offset column + rule */}
        <section className="border-t border-[#fff7f7]/[0.1] px-5 sm:px-8 md:px-12 lg:px-[max(2rem,6vw)] py-24 md:py-32">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4 xl:col-span-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#fff7f7]/25 sticky top-32">
                  Practice
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-8 xl:col-span-7"
              >
                <p className="text-[clamp(1.35rem,2.8vw,2rem)] md:text-[clamp(1.5rem,2.5vw,2.125rem)] leading-[1.55] font-light text-[#fff7f7]/85">
                  Most of my work sits between <span className="text-[#fff7f7]">brand</span> and{' '}
                  <span className="text-[#fff7f7]">frontend</span>
                  : the part visitors actually touch. I care about load time, legibility, and motion that earns its
                  place—not noise for a reel.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-[max(2rem,6vw)] pb-24 md:pb-32">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-end justify-between gap-6 mb-16 md:mb-20 border-b border-[#fff7f7]/[0.1] pb-8">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#b83a3a] font-semibold">
                How I work
              </h2>
              <span className="hidden sm:block font-mono text-[9px] text-[#fff7f7]/20 tracking-[0.2em]">01 — 03</span>
            </div>

            <ul className="space-y-4 md:space-y-5">
              {APPROACH.map(({ num, title, body }, i) => (
                <motion.li
                  key={num}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-lg border border-[#fff7f7]/[0.08] bg-gradient-to-br from-[#fff7f7]/[0.03] to-transparent hover:border-[#b83a3a]/35 transition-all duration-500"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#b83a3a] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-2 flex md:flex-col md:items-start gap-4">
                      <span className="font-mono text-4xl md:text-5xl font-light text-[#fff7f7]/[0.07] group-hover:text-[#b83a3a]/25 transition-colors tabular-nums leading-none select-none">
                        {num}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-normal text-[#fff7f7] tracking-[-0.03em]">
                        {title}
                      </h3>
                    </div>
                    <p className="md:col-span-6 text-base md:text-[1.05rem] text-[#fff7f7]/55 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* Principle — full-bleed accent */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[#b83a3a]" aria-hidden />
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            aria-hidden
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10 px-5 sm:px-8 md:px-12 lg:px-[max(2rem,6vw)] max-w-[1600px] mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl text-[clamp(1.5rem,3.5vw,2.75rem)] md:text-[clamp(1.65rem,3.2vw,3rem)] leading-[1.3] font-light font-playfair italic text-[#fff7f7] [text-shadow:0_1px_40px_rgba(19,5,2,0.15)]"
            >
              Clarity first, then performance, then motion—only when it helps someone understand or feel the work.
            </motion.p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#fff7f7]/[0.1] px-5 sm:px-8 md:px-12 lg:px-[max(2rem,6vw)] py-20 md:py-28">
          <div className="max-w-[1600px] mx-auto rounded-2xl border border-[#fff7f7]/[0.1] bg-[#fff7f7]/[0.02] p-10 md:p-14 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <p className="text-xl md:text-2xl text-[#fff7f7]/70 max-w-2xl leading-snug font-light">
              Tell me what you&apos;re building—timeline, budget ballpark, links. I&apos;ll reply with an honest read on
              fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#fff7f7] px-10 py-4 text-[11px] font-mono uppercase tracking-[0.28em] text-[#130502] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_0_1px_rgba(255,247,247,0.2),0_20px_50px_rgba(0,0,0,0.35)]"
            >
              Get in touch
              <span className="h-1.5 w-1.5 rounded-full bg-[#b83a3a]" />
            </Link>
          </div>
        </section>

        <section className="relative">
          <AuroraTransition />
          <div className="relative z-30 rounded-t-[5rem] bg-[#fff7f7] shadow-[-30px_0_120px_rgba(0,0,0,0.6)]">
            <FooterBrand />
          </div>
        </section>
      </div>
    </main>
  )
}
