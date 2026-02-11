'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import GlobalNavbar from '../components/GlobalNavbar'
import Footer from '../components/Footer'

export default function About() {
  const { scrollY } = useScroll()

  // Responsive scale: bigger minimum on mobile, smaller on desktop
  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Header Animation Logic - Matching sub-pages
  const titleScale = useTransform(scrollY, [0, 200], [1, isMobile ? 0.55 : 0.18])
  const titleY = useTransform(scrollY, [0, 200], [0, isMobile ? 2 : -10])
  const subContentOpacity = useTransform(scrollY, [0, 150], [1, 0])

  // Track if we've scrolled enough to click content
  const [isScrolled, setIsScrolled] = React.useState(false)
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-[var(--accent)] selection:text-white relative">
      <GlobalNavbar />

      {/* Hero Background Layer - Removed gradients/textures per user request */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      {/* Fixed Hero Title Section */}
      <div className={`fixed top-0 left-0 w-full z-[500] px-[6%] pt-6 md:pt-8 mix-blend-difference text-white selection:bg-[#2EDBDB] transition-opacity duration-300 ${isScrolled ? 'pointer-events-none' : 'pointer-events-auto'}`}>
        <motion.div
          style={{ scale: titleScale, y: titleY }}
          className="origin-top-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <motion.div
            style={{ opacity: subContentOpacity }}
            className="flex items-center gap-8 mb-8"
          >
            <div className="w-12 h-[1px] bg-[var(--accent)] mix-blend-screen" />
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mix-blend-screen">About</span>
          </motion.div>

          <h1 className="font-inter text-5xl sm:text-7xl md:text-[8.5vw] leading-[0.9] font-normal tracking-[-0.05em] origin-top-left mix-blend-difference text-white">
            Design <br />
            <span className="font-playfair italic">Metamorphosis.</span>
          </h1>
        </motion.div>
      </div>

      {/* Spacer to push content below the "Hero" area */}
      <div className="h-[35vh] md:h-[45vh]" />

      <section className="relative z-10 px-[6%] pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
          className="grid grid-cols-12 gap-8 mb-40"
        >
          <div className="col-span-12 md:col-span-6">
            <p className="text-xl md:text-3xl font-light leading-snug text-black/80 mb-12">
              Sifat Bhatia is a Los Angeles-based designer and developer specializing in interactive digital experiences. Through his brand, <span className="text-black font-normal italic">Siftion</span>, he bridges the gap between artistic vision and technical mastery.
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-black/60 mb-8">
              His journey started with a fascination for the intersection of art and technology—transforming concepts into functional, visually compelling realities. Today, Sifat works with notable artists and industry leaders like J. Worra, L’Affaire Musicale, and Wicked Paradise.
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-black/60">
              Every project is a commitment to attention to detail—removing the non-essential to amplify the core identity of the brand or artist.
            </p>
          </div>
          <div className="col-span-12 md:col-start-9 md:col-span-4 border-t border-black/10 pt-8 mt-12 md:mt-0">
            <span className="block text-[0.6rem] font-bold opacity-30 uppercase tracking-widest mb-8">Capabilities</span>
            <ul className="flex flex-col gap-6 list-none p-0 m-0 text-black">
              {['Custom Web Design', 'Webflow & Next.js Development', 'Artist Identity', 'Experience Design', 'CMS Systems'].map(item => (
                <li key={item} className="text-sm font-bold uppercase tracking-widest flex justify-between items-center group">
                  {item} <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent)]">→</span>
                </li>
              ))}
            </ul>

            <div className="mt-20 pt-8 border-t border-black/5">
              <span className="block text-[0.6rem] font-bold opacity-30 uppercase tracking-widest mb-4">Partners</span>
              <div className="text-xs font-bold uppercase tracking-wider opacity-60 leading-relaxed text-black">
                J. Worra • Miss Dre • Cherry Tooth • Kaysin • L’Affaire Musicale • Wicked Paradise
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
