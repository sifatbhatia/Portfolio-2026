'use client'

import { motion } from 'framer-motion'
import GlobalNavbar from '../components/GlobalNavbar'
import FooterBrand from '../components/FooterBrand'
import AuroraTransition from '../components/AuroraTransition'

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/siftion' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/siftion' },
  { label: 'Behance', href: 'https://www.behance.net/siftion' },
  { label: 'X', href: 'https://twitter.com/siftion' },
] as const

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#130502] antialiased overflow-x-clip selection:bg-[#b83a3a] selection:text-[#fff7f7] font-sans">
      <GlobalNavbar />

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
                Contact
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <p className="text-base md:text-lg text-[#fff7f7]/45 leading-relaxed max-w-md">
                Limited slots each quarter so each build gets full attention. Share a short note—email is fastest.
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      <section className="border-t border-[#fff7f7]/[0.08] px-6 md:px-12 lg:px-[6%] pb-24 md:pb-32">
        <div className="max-w-[1600px] mx-auto pt-12 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <p className="text-lg md:text-xl text-[#fff7f7]/50 leading-relaxed max-w-xl mb-12 font-playfair italic">
                &ldquo;We take on a limited number of projects so every partner gets focused creative time.&rdquo;
              </p>

              <form className="max-w-xl space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="group border-b border-[#fff7f7]/10 pb-4 transition-colors focus-within:border-[#b83a3a]/40">
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#b83a3a]/90 block mb-3"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full bg-transparent border-none outline-none text-lg md:text-xl font-light text-[#fff7f7] placeholder:text-[#fff7f7]/30"
                  />
                </div>
                <div className="group border-b border-[#fff7f7]/10 pb-4 transition-colors focus-within:border-[#b83a3a]/40">
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#b83a3a]/90 block mb-3"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@domain.com"
                    className="w-full bg-transparent border-none outline-none text-lg md:text-xl font-light text-[#fff7f7] placeholder:text-[#fff7f7]/30"
                  />
                </div>
                <div className="group border-b border-[#fff7f7]/10 pb-4 transition-colors focus-within:border-[#b83a3a]/40">
                  <label
                    htmlFor="contact-message"
                    className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#b83a3a]/90 block mb-3"
                  >
                    Project
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Timeline, scope, links…"
                    className="w-full bg-transparent border-none outline-none text-lg md:text-xl font-light text-[#fff7f7] placeholder:text-[#fff7f7]/30 resize-y min-h-[120px]"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full border border-[#fff7f7]/15 bg-[#fff7f7]/[0.04] px-8 py-4 text-[11px] font-mono uppercase tracking-[0.28em] text-[#fff7f7] transition-all duration-300 hover:border-[#b83a3a]/45 hover:bg-[#b83a3a]/15"
                >
                  Send note
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b83a3a]" />
                </button>
                <p className="text-xs text-[#fff7f7]/30 font-mono">
                  Form is a preview—email{' '}
                  <a href="mailto:sifatbht@gmail.com" className="text-[#b83a3a] hover:text-[#fff7f7] transition-colors">
                    sifatbht@gmail.com
                  </a>{' '}
                  to reach out today.
                </p>
              </form>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4 lg:col-start-9 space-y-12 lg:sticky lg:top-32"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#b83a3a] font-semibold mb-4">
                  Email
                </p>
                <a
                  href="mailto:sifatbht@gmail.com"
                  className="text-xl md:text-2xl font-light text-[#fff7f7] hover:text-[#b83a3a] transition-colors border-b border-[#fff7f7]/10 pb-2 inline-block"
                >
                  sifatbht@gmail.com
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#fff7f7]/35 font-semibold mb-6">
                  Elsewhere
                </p>
                <ul className="space-y-4">
                  {SOCIALS.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between text-base md:text-lg font-light text-[#fff7f7]/60 hover:text-[#fff7f7] transition-colors"
                      >
                        {label}
                        <span className="h-1.5 w-1.5 rounded-full bg-[#b83a3a]/35 transition-colors group-hover:bg-[#b83a3a]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
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
