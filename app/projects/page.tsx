"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import GlobalNavbar from '../components/GlobalNavbar'
import Footer from '../components/Footer'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECT_DATA, getProjectThumbnail, getScreenshotCount } from './project-data'
const selectedProjects = [
  { title: 'J. Worra', cat: 'Web Identity', year: '2026', slug: 'j-worra', color: '#B31B1B', description: 'Full digital identity and website for the LA-based tech-house DJ and producer.' },
  { title: "Sif's Utilities", cat: 'Performance Utilities', year: '2025', slug: 'sifs-utilities', color: '#1a1a1a', description: 'Privacy-first file tools running entirely in-browser via WebAssembly.' },
  { title: 'QLO Agency', cat: 'Studio Identity', year: '2025', slug: 'qlo-agency', color: '#450a0a', description: 'High-performance branding system for an LA design studio in transition.' },
  { title: "L' Affaire Musicale", cat: 'Agency Rebrand', year: '2025', slug: 'l-affaire-musicale', color: '#1e1b4b', description: 'Complete rebrand and website redesign for a 20-year dance music agency.' },
  { title: 'ClipKeep', cat: 'Content Archival', year: '2025', slug: 'clipkeep', color: '#1a1a1a', description: 'Fast, minimal archival tool for capturing and organizing digital clippings.' },
]

const ongoingProjects: any[] = []

const otherProjects = [
  { title: 'Star Consciousness', cat: 'Digital Experience', year: '2025', slug: 'star-consciousness', color: '#0a0a0a', description: 'Immersive web experience exploring consciousness and cosmic connectivity.' },
  { title: 'Wicked Paradise', cat: 'Event Ecosystem', year: '2026', slug: 'wicked-paradise', color: '#064e3b', description: "Multi-city event brand site for LA's premier day club and boat party series." },
  { title: 'Sam Blacky', cat: 'Artist Portal', year: '2025', slug: 'sam-blacky', color: '#0f172a', description: 'Performance audit and restoration for a globally recognized DJ and model.' },
  { title: 'Kaysin', cat: 'Digital Gateway', year: '2025', slug: 'kaysin', color: '#312e81', description: 'Minimal artist portal centralizing discography, tours, and identity.' },
  { title: 'Miss Dre', cat: 'Identity Design', year: '2024', slug: 'miss-dre', color: '#B31B1B', description: 'Cohesive digital identity for a rising electronic music artist.' },
  { title: 'Cherry Tooth', cat: 'Visual Protocol', year: '2024', slug: 'cherry-tooth', color: '#000000', description: 'Systematic visual framework for consistent digital art presentation.' },
]

export default function ProjectsIndex() {
  const [activeProjects, setActiveProjects] = useState<any[]>([])
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [dynamicImage, setDynamicImage] = useState<string | null>(null)

  // Framer Motion values for smooth tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Custom spring config for buttery smooth hover following
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 }
  const hoverX = useSpring(mouseX, springConfig)
  const hoverY = useSpring(mouseY, springConfig)

  const titleRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function syncProjectData() {
      try {
        const res = await fetch('/api/projects', { cache: 'no-store' });
        const dynamicData = await res.json();

        const projectsWithDetails = [...selectedProjects, ...ongoingProjects, ...otherProjects].map(project => {
          const dynamic = dynamicData[project.slug] || {};
          return {
            ...project,
            image: dynamic.thumbnail || getProjectThumbnail(project.slug),
            screenshotCount: dynamic.screenshotCount || getScreenshotCount(project.slug),
            extension: dynamic.extension || (project.slug === 'the-void' ? '.png' : '.webp')
          };
        });
        setActiveProjects(projectsWithDetails);
      } catch (e) {
        console.error("Failed to sync project data", e);
        // Fallback to static data
        const projectsWithDetails = [...selectedProjects, ...ongoingProjects, ...otherProjects].map(project => ({
          ...project,
          image: getProjectThumbnail(project.slug),
          screenshotCount: getScreenshotCount(project.slug)
        }));
        setActiveProjects(projectsWithDetails);
      }
    }
    syncProjectData();
  }, [])

  // Track mouse position natively and handle dynamic thumbnail
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Direct assignment bypassing React renders for supreme performance
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      // Dynamic image calculation mapping
      if (hoveredProject !== null && activeProjects[hoveredProject]) {
        const project = activeProjects[hoveredProject]
        const count = project.screenshotCount || 1

        if (count > 1) {
          const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920
          const progress = Math.max(0, Math.min(1, e.clientX / windowWidth))
          const imageIndex = Math.min(Math.floor(progress * count), count - 1)

          if (project.slug === 'the-void') {
            setDynamicImage('/previews/the-void.png')
          } else {
            const ext = project.extension || '.webp'
            setDynamicImage(`/previews/${project.slug}/screenshot-${imageIndex + 1}${ext}`)
          }
        } else {
          setDynamicImage(project.image)
        }
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [hoveredProject, activeProjects, mouseX, mouseY])

  // Clear tracking image when leaving hover
  useEffect(() => {
    if (hoveredProject === null) setDynamicImage(null)
  }, [hoveredProject])

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
        onMouseEnter={() => setHoveredProject(absoluteIndex)}
        onMouseLeave={() => setHoveredProject(null)}
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
              {project.description && (
                <div className="text-[0.65rem] md:text-xs font-light text-black/40 mt-2 max-w-[240px] leading-relaxed normal-case tracking-normal hidden md:block">{project.description}</div>
              )}
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

      {/* Hero Background Layer */}
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

      {/* Desktop Hover Preview */}
      <AnimatePresence>
        {hoveredProject !== null && !isMobile && activeProjects[hoveredProject] && (
          <motion.div
            key={hoveredProject}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              x: hoverX,
              y: hoverY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            className="fixed top-0 left-0 pointer-events-none z-[600] w-80 h-52 rounded-xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] overflow-hidden hidden md:block"
          >
            <div className="absolute inset-0 z-0 bg-black/5">
              <img
                key={dynamicImage || activeProjects[hoveredProject].image || 'fallback'}
                src={dynamicImage || activeProjects[hoveredProject].image || '/previews/fallback.svg'}
                alt={activeProjects[hoveredProject].title}
                className="w-full h-full object-cover transition-opacity duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src && !target.src.endsWith('fallback.svg')) {
                    target.src = '/previews/fallback.svg';
                  }
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dead Space */}
      <div className="h-[40vh] md:h-[60vh]" />

      {/* Selected Works Block */}
      <section className="relative z-10">
        {selectedProjects.map((p, i) => renderProjectItem(p, i, 'selected', 0))}
      </section>

      {/* Other Projects Section */}
      <section className="relative z-10 border-b border-black/5">
        <div className="px-[6%] py-12 md:py-24 border-b border-black/5">
          <h2 className="text-4xl md:text-7xl font-normal tracking-tight text-black">Extended <span className="font-playfair italic">Works.</span></h2>
        </div>
        {otherProjects.map((p, i) => renderProjectItem(p, i, 'other', selectedProjects.length + ongoingProjects.length))}
      </section>

      <Footer />
    </main>
  )
}
