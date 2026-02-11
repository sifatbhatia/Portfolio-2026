'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import GlobalNavbar from '../components/GlobalNavbar'
import Footer from '../components/Footer'

const selectedProjects = [
  { title: 'J. Worra', cat: 'Artist Identity', year: '2026', slug: 'j-worra', color: '#B31B1B', image: '/previews/j-worra.png' },
  { title: "Sif's Utilities", cat: 'Performance Utilities', year: '2025', slug: 'sifs-utilities', color: '#1a1a1a', image: '/previews/sifs-utilities.png' },
  { title: 'QLO Agency', cat: 'Studio Identity', year: '2025', slug: 'qlo-agency', color: '#450a0a', image: '/previews/qlo-agency.png' },
  { title: 'L’ Affaire Musicale', cat: 'Agency Refactor', year: '2025', slug: 'l-affaire-musicale', color: '#1e1b4b', image: '/previews/l-affaire-musicale.png' },
  { title: 'The Void', cat: 'Digital Art', year: '2026', slug: 'the-void', color: '#4c1d95', image: '/previews/the-void.png' },
]

const ongoingProjects = []

const otherProjects = [
  { title: 'Star Consciousness', cat: 'Digital Experience', year: '2025', slug: 'star-consciousness', color: '#0a0a0a', image: '/previews/star-consciousness.png' },
  { title: 'ClipKeep', cat: 'Content Archival', year: '2025', slug: 'clipkeep', color: '#1a1a1a', image: '/previews/clipkeep.png' },
  { title: 'Wicked Paradise', cat: 'Event Ecosystem', year: '2026', slug: 'wicked-paradise', color: '#064e3b', image: '/previews/wicked-paradise.png' },
  { title: 'Sam Blacky', cat: 'Artist Portal', year: '2025', slug: 'sam-blacky', color: '#0f172a', image: '/previews/sam-blacky.png' },
  { title: 'Kaysin', cat: 'Digital Gateway', year: '2025', slug: 'kaysin', color: '#312e81', image: '/previews/kaysin.png' },
  { title: 'Miss Dre', cat: 'Identity Design', year: '2024', slug: 'miss-dre', color: '#B31B1B', image: '' },
  { title: 'Cherry Tooth', cat: 'Visual Protocol', year: '2024', slug: 'cherry-tooth', color: '#000000', image: '' },
]

export default function ProjectsIndex() {
  const [hoveredIndex, setHoveredIndex] = useState<{ section: string, i: number } | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const renderProjectItem = (project: any, i: number, section: string, baseIndex: number) => (
    <Link
      key={i}
      href={`/projects/${project.slug}`}
      onMouseEnter={() => setHoveredIndex({ section, i })}
      onMouseLeave={() => setHoveredIndex(null)}
      className="group block no-underline text-black"
    >
      <motion.div
        whileHover={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="bg-white py-6 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer px-[6%] md:group-hover:px-[8%] transition-all duration-700 ease-[0.19, 1, 0.22, 1] border-b border-black/5"
      >
        <div className="flex items-baseline gap-6 md:gap-12 mb-4 md:mb-0">
          <span className="text-[0.55rem] md:text-[0.65rem] font-bold opacity-20 font-inter tabular-nums">
            {String(baseIndex + i + 1).padStart(2, '0')}
          </span>
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
            <div className="text-[0.5rem] md:text-[0.6rem] font-black opacity-30 mt-1 uppercase">{project.year}</div>
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

      <AnimatePresence mode="wait">
        {hoveredIndex?.section === section && hoveredIndex?.i === i && (
          <motion.div
            key={`${section}-${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translate(-50%, -50%)',
            }}
            className="fixed pointer-events-none z-[120] w-80 h-52 rounded-xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] overflow-hidden hidden md:block"
          >
            <div
              style={{ backgroundColor: project.color }}
              className="absolute inset-0 z-0"
            >
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="fluid-morph w-[150%] h-[150%] opacity-80" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  )

  // ... props and scroll logic ...
  const { scrollY } = useScroll()

  // Responsive scale: bigger minimum on mobile, smaller on desktop
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Header Animation Logic
  // Scale down title matches hero-alt
  const titleScale = useTransform(scrollY, [0, 200], [1, isMobile ? 0.55 : 0.18])
  // Move y position to align with navbar
  const titleY = useTransform(scrollY, [0, 200], [0, isMobile ? 2 : -10])
  const subContentOpacity = useTransform(scrollY, [0, 200], [1, 0])

  // Track if we've scrolled enough to click content
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main
      className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-[var(--accent)] selection:text-white relative"
    >
      <GlobalNavbar />

      {/* Hero Background Layer - Removed gradients/textures per user request */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      {/* Fixed Hero Title Section */}
      <div className={`fixed top-0 left-0 w-full z-[500] px-[6%] pt-6 md:pt-8 mix-blend-difference text-white selection:bg-[#2EDBDB] transition-opacity duration-300 ${isScrolled ? 'pointer-events-none' : 'pointer-events-auto'}`}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <motion.div
            style={{ scale: titleScale, y: titleY }}
            className="origin-top-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >

            <h1 className="font-inter text-5xl sm:text-7xl md:text-[8.5vw] leading-[0.9] font-normal tracking-[-0.05em] origin-top-left mix-blend-difference text-white">
              Selected <br /> <span className="font-playfair italic">Works.</span>
            </h1>
          </motion.div>


        </div>
      </div>

      {/* Spacer to push list content below the "Hero" area */}
      <div className="h-[40vh] md:h-[60vh]" />

      {/* Selected Works Block */}
      <section className="relative z-10">
        {selectedProjects.map((p, i) => renderProjectItem(p, i, 'selected', 0))}
      </section>

      {/* Other Projects Section */}
      <section className="relative z-10 border-b border-black/5">
        <div className="px-[6%] py-12 md:py-24 border-b border-black/5">
          <h2 className="text-4xl md:text-7xl font-normal tracking-tight text-black">Other <span className="font-playfair italic">Projects.</span></h2>
        </div>
        {otherProjects.map((p, i) => renderProjectItem(p, i, 'other', selectedProjects.length + ongoingProjects.length))}
      </section>

      <Footer />
    </main>
  )
}
