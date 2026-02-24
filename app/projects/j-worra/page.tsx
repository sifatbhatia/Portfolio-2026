'use client'

export const runtime = 'edge'

import React, { useLayoutEffect, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import GlobalNavbar from '../../components/GlobalNavbar'
import Footer from '../../components/Footer'
import { useLenis } from 'lenis/react'

// Project data for J. Worra
const project = {
  title: 'J. Worra',
  subtitle: 'Artist Identity Design',
  slug: 'j-worra',
  description: 'Jamie Sitter, aka J. Worra, is a Los Angeles-based DJ and Producer who has redefined the tech-house landscape with her "Classic house meets new school tech" sound.',
  objective: 'The project focused on building a high-fidelity digital presence that matches J. Worra’s unique sound and energy. I redesigned the entire site from the ground up to create a more immersive experience for her fans, focusing on clean layouts, smooth transitions, and a better way to showcase her tour dates and merch.',
  impact: 'Hailed as DJ Mag’s 2019 Breakthrough Producer, J. Worra’s digital presence now provides a high-fidelity gateway for her global fanbase, integrating her official remixes for Kaskade and deadmau5 with a clean, immersive aesthetic.',
  role: 'Creative Lead & Lead Developer',
  service: ['Digital Identity', 'Art Direction', 'Web Design', 'Full-Stack Development', 'GSAP Animation'],
  url: 'https://jworra.com',
  stats: [
    { label: 'Year', value: '2026' },
    { label: 'Genre', value: 'Tech-House' }
  ]
}

// Auto-sliding carousel component for the inverted color scheme
const InvertedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // New correct paths for manual screenshots
  const projectImages = [
    '/previews/j-worra/screenshot-1.webp',
    '/previews/j-worra/screenshot-2.webp', 
    '/previews/j-worra/screenshot-3.webp',
    '/previews/j-worra/screenshot-4.webp',
    '/previews/j-worra/screenshot-5.webp'
  ]

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, projectImages.length])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % projectImages.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  return (
    <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_80px_-15px_rgba(255,255,255,0.1)] bg-black">
      {/* Carousel Images */}
      <div className="w-full h-full relative">
        {projectImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`J. Worra project screenshot ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M19 12H5"></path>
          <path d="M12 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {projectImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentSlide(index)
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function JWorraProject() {
  const lenis = useLenis()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    if (lenis) lenis.scrollTo(0, { immediate: true })
  }, [lenis])

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-[var(--accent)] selection:text-black font-inter">
      <GlobalNavbar />

      {/* Hero Section - Inverted Colors */}
      <section className="relative pt-28 md:pt-60 px-[6%] pb-20 overflow-hidden bg-black">
        <div className="relative z-10 w-full">
          <div className="flex items-center gap-8 mb-12">
            <div className="w-12 h-[1px] bg-[var(--accent)]" />
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)]">{project.subtitle} // 2026</span>
          </div>
          <h1 className="font-inter text-[8vw] md:text-[10vw] font-normal leading-[0.8] tracking-[-0.06em] mb-16 md:mb-24 text-white">
            {project.title}<br />
            <span className="font-playfair italic md:pl-[10vw]">Overview.</span>
          </h1>
        </div>
      </section>

      {/* Primary Showcase - 16:10 Auto-sliding Carousel */}
      <section className="px-[6%] mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px", once: true }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative"
        >
          <InvertedCarousel />
        </motion.div>
      </section>

      {/* Content Section - Inverted Colors */}
      <section className="px-[6%] py-20 border-t border-white/10 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-7">
            <p className="text-xl md:text-3xl font-light leading-snug text-white/80 mb-24">
              {project.description}
            </p>
            <div className="space-y-32">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-8">Objective</h3>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-white italic font-playfair tracking-tight">
                    "{project.objective}"
                  </p>
                </div>
              </div>

              {project.impact && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-12 md:col-span-4">
                    <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-8">Impact</h3>
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <p className="text-lg md:text-xl font-light leading-relaxed text-white/60">
                      {project.impact}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9 space-y-20 border-l border-white/10 pl-12">
            <div>
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-30 mb-8 text-white">Metadata</span>
              <div className="space-y-6">
                {project.stats.map(stat => (
                  <div key={stat.label} className="flex justify-between items-baseline border-b border-white/10 pb-4">
                    <span className="text-[0.6rem] font-bold uppercase tracking-widest opacity-30 text-white">{stat.label}</span>
                    <span className="text-sm font-medium uppercase tracking-tight text-white">{stat.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest opacity-30 text-white">Role</span>
                  <span className="text-sm font-medium uppercase tracking-tight text-white">{project.role}</span>
                </div>
              </div>
            </div>

            <div>
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-30 mb-8 text-white">Services</span>
              <div className="flex flex-col gap-3">
                {project.service.map(s => (
                  <div key={s} className="text-sm font-normal uppercase tracking-widest opacity-60 flex items-center gap-3 text-white">
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-12">
              <a href={project.url} target="_blank" className="group flex items-center justify-between w-full p-6 border-2 border-white rounded-full text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-black transition-all duration-500 ease-[0.19,1,0.22,1]">
                <span className="text-[0.75rem] font-bold uppercase tracking-[0.4em] pl-4">Visit Site</span>
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 mr-2" />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <Footer />

      {/* Navigation Portal - Inverted Colors */}
      <section className="border-t border-white/10 flex flex-col md:flex-row h-auto md:h-[30vh] overflow-hidden bg-white/5 gap-px relative">
        <Link
          href="/projects"
          className="flex-1 group relative bg-black flex flex-col justify-center px-[6%] py-12 no-underline text-white transition-all duration-[1.2s] ease-[0.19, 1, 0.22, 1] hover:flex-[1.5]"
        >
          <div className="relative z-10">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-4 block opacity-40 group-hover:opacity-100 transition-opacity">Back</span>
            <h2 className="text-4xl md:text-6xl font-normal tracking-tighter leading-none group-hover:italic group-hover:text-[var(--accent)] transition-all duration-500">
              Projects
            </h2>
          </div>
        </Link>

        <Link
          href="/projects/l-affaire-musicale"
          className="flex-1 group relative bg-black flex flex-col justify-center px-[6%] py-12 no-underline text-white transition-all duration-[1.2s] ease-[0.19, 1, 0.22, 1] hover:flex-[1.5]"
        >
          <div className="relative z-10 text-right md:text-left">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-4 block opacity-40 group-hover:opacity-100 transition-opacity">Next</span>
            <h2 className="text-4xl md:text-6xl font-normal tracking-tighter leading-none group-hover:italic group-hover:text-[var(--accent)] transition-all duration-500 group-hover:translate-x-4 text-white">
              L’ Affaire Musicale
            </h2>
          </div>
        </Link>
      </section>
    </main>
  )
}