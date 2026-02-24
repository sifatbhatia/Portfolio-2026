'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import GlobalNavbar from '../components/GlobalNavbar'
import Footer from '../components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECT_DATA } from './project-data'

// Function to get thumbnail for each project
const getProjectThumbnail = (slug: string): string => {
  // For The Void (local project), use existing preview
  if (slug === 'the-void') {
    return '/previews/the-void.png';
  }
  
  // For all other projects, use screenshot-1.webp from their subdirectory
  return `/previews/${slug}/screenshot-1.webp`;
}

const selectedProjects = [
  { title: 'J. Worra', cat: 'Artist Identity', year: '2026', slug: 'j-worra', color: '#B31B1B' },
  { title: "Sif's Utilities", cat: 'Performance Utilities', year: '2025', slug: 'sifs-utilities', color: '#1a1a1a' },
  { title: 'QLO Agency', cat: 'Studio Identity', year: '2025', slug: 'qlo-agency', color: '#450a0a' },
  { title: 'L’ Affaire Musicale', cat: 'Agency Refactor', year: '2025', slug: 'l-affaire-musicale', color: '#1e1b4b' },
  { title: 'The Void', cat: 'Digital Art', year: '2026', slug: 'the-void', color: '#4c1d95' },
]

const ongoingProjects: any[] = []

const otherProjects = [
  { title: 'Star Consciousness', cat: 'Digital Experience', year: '2025', slug: 'star-consciousness', color: '#0a0a0a' },
  { title: 'ClipKeep', cat: 'Content Archival', year: '2025', slug: 'clipkeep', color: '#1a1a1a' },
  { title: 'Wicked Paradise', cat: 'Event Ecosystem', year: '2026', slug: 'wicked-paradise', color: '#064e3b' },
  { title: 'Sam Blacky', cat: 'Artist Portal', year: '2025', slug: 'sam-blacky', color: '#0f172a' },
  { title: 'Kaysin', cat: 'Digital Gateway', year: '2025', slug: 'kaysin', color: '#312e81' },
  { title: 'Miss Dre', cat: 'Identity Design', year: '2024', slug: 'miss-dre', color: '#B31B1B' },
  { title: 'Cherry Tooth', cat: 'Visual Protocol', year: '2024', slug: 'cherry-tooth', color: '#000000' },
]

export default function ProjectsIndex() {
  const [activeProjects, setActiveProjects] = useState<any[]>([])
  const titleRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add thumbnails to all projects
    const projectsWithThumbnails = [...selectedProjects, ...ongoingProjects, ...otherProjects].map(project => ({
      ...project,
      image: getProjectThumbnail(project.slug)
    }));
    setActiveProjects(projectsWithThumbnails)
  }, [])

  // Responsive state
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

  const renderProjectItem = (project: any, i: number, section: string, baseIndex: number) => {
    const absoluteIndex = baseIndex + i
    return (
      <Link
        key={i}
        href={`/projects/${project.slug}`}
        className="group block no-underline text-black"
      >
        <motion.div
          whileHover={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="bg-white py-6 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer px-[6%] md:group-hover:px-[8%] transition-all duration-700 ease-[0.19, 1, 0.22, 1] border-b border-black/5"
        >
          <div className="flex items-baseline gap-6 md:gap-12 mb-4 md:mb-0">
            <span className="text-[0.55rem] md:text-[0.65rem] font-bold opacity-20 font-inter tabular-nums">
              {String(absoluteIndex + 1).padStart(2, '0')}
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
      </Link>
    )
  }

  // Track if we've scrolled enough to click content
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-[var(--accent)] selection:text-white relative"
    >
      <GlobalNavbar />

      {/* Hero Background Layer - Removed gradients/textures per user request */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      {/* Fixed Hero Title Section */}
      <div className="fixed top-0 left-0 w-full z-[500] px-[6%] pt-6 md:pt-8 text-white mix-blend-difference selection:bg-[#2EDBDB] pointer-events-none">
        <div className="origin-top-left will-change-transform pointer-events-auto">
          <h1
            ref={titleRef}
            className="font-inter text-5xl sm:text-7xl md:text-[8.5vw] leading-[0.9] font-normal tracking-[-0.05em]"
          >
            Selected <br /> <span className="font-playfair italic">Works.</span>
          </h1>
        </div>
      </div>

      {/* Dead Space */}
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