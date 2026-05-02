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
  image?: string
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
    <section id="selected-works" className="bg-[var(--color-eggshell)]">
      {/* Section Header */}
      <div className="mx-auto max-w-[1200px] px-5 pt-24 md:px-8 md:pt-32 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-black">
            Selected works
          </h2>
          <p className="text-sm md:text-base text-[var(--color-gravel)] max-w-xs leading-relaxed">
            A curated selection of projects spanning design, engineering, and interactive experiences.
          </p>
        </motion.div>
      </div>

      {/* Projects - Editorial Layout */}
      <div className="mx-auto flex max-w-[1200px] flex-col px-5 md:px-8">
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
              <div className={`py-12 md:py-16 border-t border-[var(--color-chalk)] ${i === projects.length - 1 ? 'border-b border-[var(--color-chalk)]' : ''}`}>
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center ${i % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>

                  {/* Image */}
                  <div className={`md:col-span-7 ${i % 2 === 0 ? '' : 'md:col-start-6'}`}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-subtle-4)]">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, 58vw"
                        />
                      )}
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`md:col-span-5 ${i % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}>
                    <div className="flex flex-col">
                      <span className="text-xs font-mono text-[var(--color-slate)] mb-4">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <h3 className="font-display text-4xl md:text-5xl lg:text-6xl leading-none text-black mb-4 transition-colors duration-500">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-4 mb-6">
                        <span className="h-2 w-2 rounded-full" style={{ background: project.color }} />
                        <span className="text-sm font-medium text-[var(--color-gravel)]">{project.cat}</span>
                        <span className="w-1 h-1 rounded-full bg-[var(--color-chalk)]" />
                        <span className="text-sm text-[var(--color-slate)]">{project.year}</span>
                      </div>

                      <div className="pill-button pill-button-ghost w-fit">
                        <span>View Project</span>
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
      <div className="px-5 py-20 md:py-24 text-center">
        <Link
          href="/projects"
          className="pill-button pill-button-primary group no-underline"
        >
          <span>View All Projects</span>
          <ArrowUpRight size={18} strokeWidth={2} />
        </Link>
      </div>
    </section>
  )
}
