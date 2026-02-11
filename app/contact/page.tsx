'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import GlobalNavbar from '../components/GlobalNavbar'
import Footer from '../components/Footer'

export default function Contact() {
  const { scrollY } = useScroll()

  // Responsive scale: bigger minimum on mobile, smaller on desktop
  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Header Animation Logic - Matching hero-alt, projects, about, and pulse
  // Note: Contact page is dark themed, so we keep text-white but still use the scaling logic
  const titleScale = useTransform(scrollY, [0, 200], [1, isMobile ? 0.55 : 0.18])
  const titleY = useTransform(scrollY, [0, 200], [0, isMobile ? 2 : -10])
  const subContentOpacity = useTransform(scrollY, [0, 150], [1, 0])

  // Track scroll for pointer events
  const [isScrolled, setIsScrolled] = React.useState(false)
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[var(--accent)] selection:text-white relative overflow-x-hidden">
      <GlobalNavbar />

      {/* Fixed Hero Title Section */}
      <div className={`fixed top-0 left-0 w-full z-[500] px-[6%] pt-6 md:pt-8 mix-blend-difference text-white selection:bg-[#2EDBDB] transition-opacity duration-300 ${isScrolled ? 'pointer-events-none' : 'pointer-events-auto'}`}>
        <motion.div
          style={{ scale: titleScale, y: titleY }}
          className="origin-top-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <h1 className="font-inter text-5xl sm:text-7xl md:text-[8.5vw] leading-[0.9] font-normal tracking-[-0.05em] origin-top-left">
            Start the <br />
            <span className="font-playfair italic text-white/80">Dialogue.</span>
          </h1>
        </motion.div>
      </div>

      {/* Spacer to push content below the "Hero" area */}
      <div className="h-[35vh] md:h-[65vh]" />

      <section className="relative z-10 px-[6%] pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
          className="grid grid-cols-12 gap-8 mb-40"
        >
          <div className="col-span-12 md:col-span-6">
            <p className="text-xl md:text-3xl font-light leading-snug text-white/90 mb-12">
              Currently accepting select projects for Q1 and Q2 2026. If you have a visionary project that requires a high-fidelity refactor, get in touch.
            </p>

            <div className="mt-20">
              <a href="mailto:sifatbht@gmail.com" className="text-xl md:text-6xl font-normal tracking-tight no-underline text-white hover:text-[var(--accent)] transition-colors inline-flex items-center gap-4 md:gap-8 group">
                sifatbht@gmail.com <ArrowUpRight size={24} className="md:w-16 md:h-16 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" strokeWidth={1} />
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-start-9 md:col-span-4 border-t border-white/10 pt-8 mt-12 md:mt-0">
            <span className="block text-[0.6rem] font-bold opacity-30 uppercase tracking-widest mb-8">Social Protocols</span>
            <ul className="flex flex-col gap-6 list-none p-0 m-0">
              {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map(item => (
                <li key={item} className="text-sm font-bold uppercase tracking-widest flex justify-between items-center group cursor-pointer hover:text-[var(--accent)] transition-colors text-white">
                  {item} <span className="opacity-30 group-hover:opacity-100 transition-opacity">↗</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
