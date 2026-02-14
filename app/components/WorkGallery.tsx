'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export interface Project {
  title: string
  cat: string
  year: string
  slug: string
  color: string
  image: string
}

interface WorkGalleryProps {
  projects?: Project[]
}

const defaultProjects: Project[] = [
  { title: 'J. Worra', cat: 'Art Direction', year: '2026', slug: 'j-worra', color: '#d12424', image: '/previews/j-worra.png' },
  { title: "Sif's Utilities", cat: 'Performance Utilities', year: '2025', slug: 'sifs-utilities', color: '#1a1a1a', image: '/previews/sifs-utilities.png' },
  { title: "L' Affaire Musicale", cat: 'Identity Design', year: '2025', slug: 'l-affaire-musicale', color: '#1e1b4b', image: '/previews/l-affaire-musicale.png' },
  { title: 'The Void', cat: 'Digital Art', year: '2026', slug: 'the-void', color: '#4c1d95', image: '/previews/the-void.png' },
]

export default function WorkGallery({ projects = defaultProjects }: WorkGalleryProps) {
  return (
    <section id="selected-works" className="bg-white">
      {/* Section Header */}
      <div className="px-[6%] pt-32 md:pt-48 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.04em] leading-[0.85] text-black">
              Selected<br />
              <span className="font-playfair italic">Works</span>
            </h2>
            <p className="text-sm md:text-base font-light text-black/40 max-w-xs leading-relaxed">
              A curated selection of projects spanning design, engineering, and interactive experiences.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects - Editorial Layout */}
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Link 
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <div className={`px-[6%] py-16 md:py-24 border-t border-black/5 ${i === projects.length - 1 ? 'border-b border-black/5' : ''}`}>
                <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center ${i % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                  
                  {/* Image */}
                  <div className={`md:col-span-7 ${i % 2 === 0 ? '' : 'md:col-start-6'}`}>
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 58vw"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`md:col-span-5 ${i % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/30 mb-4">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.03em] leading-[0.9] text-black mb-4 group-hover:text-[#2EDBDB] transition-colors duration-500">
                        {project.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-sm font-medium text-black/60">{project.cat}</span>
                        <span className="w-1 h-1 rounded-full bg-black/20" />
                        <span className="text-sm font-light text-black/40">{project.year}</span>
                      </div>

                      <div className="flex items-center gap-2 text-black/40 group-hover:text-black transition-colors duration-300">
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
      <div className="px-[6%] py-24 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <Link 
            href="/projects"
            className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-black text-white hover:bg-[#2EDBDB] rounded-full transition-colors duration-500"
          >
            <span className="text-sm font-bold uppercase tracking-[0.2em]">View All Projects</span>
            <ArrowUpRight size={18} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}
