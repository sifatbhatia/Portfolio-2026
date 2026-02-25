'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import GlobalNavbar from '../components/GlobalNavbar'
import Footer from '../components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  // Responsive scale: bigger minimum on mobile, smaller on desktop
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // GSAP Scroll Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const wrapper = titleRef.current.parentElement
        gsap.to(wrapper, {
          scale: isMobile ? 0.55 : 0.18,
          y: 0,
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "200 top",
            scrub: 1,
          },
          ease: "none"
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [isMobile])

  // Track scroll for pointer events
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-[var(--accent)] selection:text-white relative overflow-x-hidden">
      <GlobalNavbar />

      {/* Fixed Hero Title Section */}
      <div className="fixed top-0 left-0 w-full z-[500] px-[6%] pt-6 md:pt-8 text-white mix-blend-difference selection:bg-[#2EDBDB] pointer-events-none">
        <div className="origin-top-left will-change-transform pointer-events-auto">
          <h1
            ref={titleRef}
            className="font-inter text-5xl sm:text-7xl md:text-[8.5vw] leading-[0.9] font-normal tracking-[-0.05em]"
          >
            Start the <br />
            <span className="font-playfair italic">Dialogue.</span>
          </h1>
        </div>
      </div>

      {/* Dead Space */}
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
              <a href="mailto:hi@sifat.tech" className="text-xl md:text-6xl font-normal tracking-tight no-underline text-white hover:text-[var(--accent)] transition-colors inline-flex items-center gap-4 md:gap-8 group">
                hi@sifat.tech <ArrowUpRight size={24} className="md:w-16 md:h-16 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" strokeWidth={1} />
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
