'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { ArrowUpRight } from 'lucide-react'

export interface Project {
  title: string
  cat: string
  year: string
  slug: string
  color: string
  image?: string
  description?: string
}

interface WorkGalleryProps {
  projects?: Project[]
  variant?: 'light' | 'dark'
}

const defaultProjects: Project[] = [
  { title: 'J. Worra', cat: 'Web Identity', year: '2026', slug: 'j-worra', color: '#C41E3D', image: '/previews/j-worra.png', description: 'Full digital identity and website for the LA-based tech-house DJ and producer.' },
  { title: "Sif's Utilities", cat: 'Performance Utilities', year: '2025', slug: 'sifs-utilities', color: '#1a1a1a', image: '/previews/sifs-utilities.png', description: 'Privacy-first file tools running entirely in-browser via WebAssembly.' },
  { title: "L' Affaire Musicale", cat: 'Identity Design', year: '2025', slug: 'l-affaire-musicale', color: '#1e1b4b', image: '/previews/l-affaire-musicale.png', description: 'Complete rebrand and website redesign for a 20-year dance music agency.' },
  { title: 'The Void', cat: 'Digital Art', year: '2026', slug: 'the-void', color: '#4c1d95', image: '/previews/the-void.png', description: 'Living archive of visual logic synthesis, updated every 4 hours via API.' },
]

export default function WorkGallery({ projects = defaultProjects, variant = 'light' }: WorkGalleryProps) {
  const dark = variant === 'dark'

  return (
    <section id="selected-works" className={dark ? 'bg-[#0A0A0D] text-white' : 'bg-white text-black'}>
      {/* Section Header */}
      <div className="px-[6%] pt-32 md:pt-48 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <h2 className={`text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.04em] leading-[0.85] ${dark ? 'text-white' : 'text-black'}`}>
            Selected<br />
            <span className="font-playfair italic">Works</span>
          </h2>
          <p className={`text-sm md:text-base font-light max-w-xs leading-relaxed ${dark ? 'text-white/50' : 'text-black/40'}`}>
            A curated selection of projects spanning design, engineering, and interactive experiences.
          </p>
        </motion.div>
      </div>

      {/* Projects - Editorial Layout */}
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <div className={`px-[6%] py-16 md:py-24 border-t ${dark ? 'border-white/12' : 'border-black/5'} ${i === projects.length - 1 ? (dark ? 'border-b border-white/12' : 'border-b border-black/5') : ''}`}>
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center ${i % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>

                  {/* Image */}
                  <div className={`md:col-span-7 ${i % 2 === 0 ? '' : 'md:col-start-6'}`}>
                    <div className={`relative aspect-[16/10] overflow-hidden rounded-xl ${dark ? 'bg-white/5 border border-white/10' : 'bg-neutral-50'}`}>
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.02]"
                        />
                      )}
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`md:col-span-5 ${i % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/30 mb-4">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <h3 className={`text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.03em] leading-[0.9] mb-4 transition-colors duration-500 ${dark ? 'text-white group-hover:text-[var(--accent)]' : 'text-black group-hover:text-[var(--accent)]'}`}>
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-medium text-black/60">{project.cat}</span>
                        <span className="w-1 h-1 rounded-full bg-black/20" />
                        <span className="text-sm font-light text-black/40">{project.year}</span>
                      </div>

                      {project.description && (
                        <p className="text-sm font-light text-black/40 leading-relaxed mb-6 max-w-xs">
                          {project.description}
                        </p>
                      )}

                      <div className={`flex items-center gap-2 transition-colors duration-300 ${dark ? 'text-white/50 group-hover:text-[var(--accent)]' : 'text-black/40 group-hover:text-[var(--accent)]'}`}>
                        <span className="text-sm font-medium uppercase tracking-wide">View Project</span>
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {/* View All CTA */}
      <div className="px-[6%] py-24 md:py-32 text-center">
        <Link
          href="/projects"
          className={`group inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full transition-colors duration-500 ${dark ? 'bg-[#C10206] text-white hover:brightness-110' : 'bg-[var(--accent)] text-white hover:brightness-110'}`}
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em]">View All Projects</span>
          <ArrowUpRight size={18} strokeWidth={2} />
        </Link>
      </div>
    </section>
  )
}
