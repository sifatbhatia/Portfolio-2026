'use client'

import React, { useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import GlobalNavbar from './components/GlobalNavbar'
import { ArrowUpRight } from 'lucide-react'
import Footer from './components/Footer'
import GlowingOrb from './components/GlowingOrb'

export default function Home() {
  const { scrollY } = useScroll()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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

  const projects = [
    { title: 'J. Worra', cat: 'Art Direction', year: '2026', slug: 'j-worra', color: '#d12424', image: '/previews/j-worra.png' },
    { title: "Sif's Utilities", cat: 'Performance Utilities', year: '2025', slug: 'sifs-utilities', color: '#1a1a1a', image: '/previews/sifs-utilities.png' },
    { title: 'L’ Affaire Musicale', cat: 'Identity Design', year: '2025', slug: 'l-affaire-musicale', color: '#1e1b4b', image: '/previews/l-affaire-musicale.png' },
    { title: 'The Void', cat: 'Digital Art', year: '2026', slug: 'the-void', color: '#4c1d95', image: '/previews/the-void.png' },
  ]

  return (
    <main className="bg-white text-black font-inter relative">

      <GlobalNavbar />

      {/* Fixed Hero Title Section */}
      <div className="fixed top-0 left-0 w-full z-[500] px-[6%] pt-6 md:pt-8 text-white mix-blend-difference selection:bg-[#2EDBDB] pointer-events-none">
        <motion.h1
          style={{ scale: titleScale, y: titleY }}
          className="font-inter text-5xl sm:text-7xl md:text-[8.5vw] leading-[0.9] font-normal tracking-[-0.05em] origin-top-left pointer-events-auto"
        >
          Sifat <br />
          <span className="font-playfair italic">Bhatia.</span>
        </motion.h1>
      </div>

      {/* Cursor Following Preview */}
      <AnimatePresence>
        {hoveredProject !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translate(-50%, -50%)',
            }}
            className="fixed pointer-events-none z-[600] w-80 h-52 rounded-xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] overflow-hidden hidden md:block"
          >
            <div
              style={{ backgroundColor: projects[hoveredProject].color }}
              className="absolute inset-0 z-0"
            >
              {projects[hoveredProject].image ? (
                <img
                  src={projects[hoveredProject].image}
                  alt={projects[hoveredProject].title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full opacity-80 mix-blend-overlay" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative z-10 min-h-screen flex flex-col justify-between px-[6%] pt-32 pb-12 top-0 pointer-events-none">
        
        {/* Scoped Glowing Orb Container */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[0]">
          <GlowingOrb />
        </div>

        {/* This spacer pushes content down so it doesn't overlap the fixed header initially */}
        <div className="flex-grow min-h-[20vh] md:min-h-[30vh]" />

        {/* Bottom Content - Refined Typography */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-end gap-8 md:gap-12 w-full pointer-events-auto pb-8">

          {/* Left Side -> Bottom Right on Mobile */}
          <div className="max-w-3xl ml-auto md:ml-0 text-right md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-8xl font-normal tracking-[-0.03em] leading-[0.9] mb-4 md:mb-6 text-black"
            >
              Atmospheric <span className="font-playfair italic">Interfaces</span><sup className="text-xl md:text-2xl align-top ml-1 md:ml-2 font-inter">™</sup>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-3xl font-light text-black/60 mb-8 md:mb-12 font-inter max-w-xl ml-auto md:ml-0"
            >
              Design. Engineering. Experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[0.5rem] md:text-[0.6rem] font-bold uppercase tracking-[0.15em] leading-relaxed max-w-[200px] md:max-w-[280px] text-black ml-auto md:ml-0"
            >
              Los Angeles based designer and developer crafting high-fidelity interactive digital experiences.
            </motion.div>
          </div>
          {/* Right Side - Selected Projects Call to Action */}
          <div className="flex flex-col items-end gap-4 md:gap-6 w-full md:w-auto mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button
                onClick={() => {
                  const element = document.getElementById('selected-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative inline-flex items-center gap-3 md:gap-4 px-6 py-3 md:px-8 md:py-4 bg-black text-white hover:bg-[var(--accent)] transition-colors duration-300 rounded-full overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 text-[0.6rem] md:text-xs font-bold uppercase tracking-[0.2em]">Selected Projects</span>
                <span className="relative z-10 p-1 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                  <ArrowUpRight size={12} className="md:w-[14px] md:h-[14px] text-white" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section id="selected-works" className="px-[6%] py-16 md:py-60 border-t border-black/5 bg-white relative z-10">
        <div className="mb-20 md:mb-32 flex justify-start items-start">
          <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-black">Selected Works</h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-transparent mb-32">
          {projects.map((project, i) => (
            <Link
              key={i}
              href={`/projects`}
              className="group block no-underline text-black"
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                className="bg-transparent py-8 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer px-4 md:group-hover:px-8 transition-all duration-700 ease-[0.19, 1, 0.22, 1] border-b border-black/5"
              >
                <div className="flex items-baseline gap-6 md:gap-12 mb-4 md:mb-0">
                  <span className="text-[0.55rem] md:text-[0.65rem] font-bold opacity-20 font-inter text-black">0{i + 1}</span>
                  <div className="relative">
                    <h2 className="font-inter text-4xl md:text-6xl lg:text-8xl font-normal tracking-tight whitespace-normal md:whitespace-nowrap group-hover:opacity-0 transition-opacity duration-500">
                      {project.title}
                    </h2>
                    <h2 className="absolute top-0 left-0 font-inter text-4xl md:text-6xl lg:text-8xl font-normal tracking-tight italic whitespace-normal md:whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-opacity duration-500">
                      {project.title}
                    </h2>
                  </div>
                </div>
                <div className="w-full md:w-auto flex justify-between items-center md:gap-20">
                  <div className="text-left md:text-right">
                    <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] group-hover:text-[var(--accent)] transition-colors">{project.cat}</div>
                    <div className="text-[0.5rem] md:text-[0.6rem] font-black opacity-30 mt-1 uppercase text-black">{project.year}</div>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] transition-all duration-500 overflow-hidden">
                    <motion.div
                      initial={{ rotate: 0, scale: 1 }}
                      whileHover={{ rotate: -135, scale: 0.8 }}
                      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <ArrowUpRight size={18} className="md:w-5 md:h-5 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-black text-white hover:bg-[var(--accent)] transition-colors duration-500 rounded-full overflow-hidden"
          >
            <span className="relative z-10 text-sm font-bold uppercase tracking-[0.2em]">View All Projects</span>
            <span className="relative z-10 p-1 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
              <ArrowUpRight size={16} className="text-white" />
            </span>
          </Link>
        </div>

      </section>

      <Footer />

    </main>
  )
}
