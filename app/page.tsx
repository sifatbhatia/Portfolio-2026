'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import GlobalNavbar from './components/GlobalNavbar'
import { ArrowDown, ArrowUpRight, Play } from 'lucide-react'
import Footer from './components/Footer'
import WorkGallery from './components/WorkGallery'

const projects = [
  { title: 'J. Worra', cat: 'Art Direction', year: '2026', slug: 'j-worra', color: '#ff4704', image: '/previews/j-worra/screenshot-1.webp' },
  { title: "Sif's Utilities", cat: 'Performance Utilities', year: '2025', slug: 'sifs-utilities', color: '#0447ff', image: '/previews/sifs-utilities/screenshot-1.webp' },
  { title: 'L’ Affaire Musicale', cat: 'Identity Design', year: '2025', slug: 'l-affaire-musicale', color: '#000000', image: '/previews/l-affaire-musicale/screenshot-1.webp' },
]

export default function Home() {
  return (
    <main className="relative bg-[var(--color-eggshell)] text-black">
      <GlobalNavbar />

      <section className="mx-auto grid min-h-screen max-w-[1200px] grid-cols-1 content-end gap-12 px-5 pb-16 pt-28 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:pb-24 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col justify-end"
        >
          <p className="mb-3 text-sm text-[var(--color-gravel)]">Los Angeles based designer and developer</p>
          <h1 className="font-display max-w-[680px] text-[56px] leading-[0.98] text-black sm:text-[72px] md:text-[88px] lg:text-[104px]">
            Sifat Bhatia crafts atmospheric interfaces with editorial restraint.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 tracking-[0.01em] text-[var(--color-gravel)] md:text-lg">
            High-fidelity websites, digital identities, and product-like experiences for artists, agencies, and ambitious teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById('selected-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="pill-button pill-button-primary"
            >
              Selected Projects
              <ArrowDown size={15} />
            </button>
            <Link href="/contact" className="pill-button pill-button-ghost no-underline">
              Contact
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          className="self-end rounded-2xl bg-white p-4 shadow-[var(--shadow-subtle-4)]"
        >
          <div className="mb-4 flex items-center justify-between border-b border-[var(--color-chalk)] pb-3">
            <div className="flex gap-2">
              <span className="rounded-full border border-[var(--color-chalk)] px-3 py-2 text-sm font-bold tracking-[0.05em]">PORTFOLIO</span>
              <span className="hidden rounded-full border border-[var(--color-chalk)] px-3 py-2 text-sm font-bold tracking-[0.05em] text-[var(--color-gravel)] sm:inline-flex">2026</span>
            </div>
            <button className="pill-button pill-button-primary h-9 min-h-9 px-3" aria-label="Play reel">
              <Play size={14} fill="currentColor" />
            </button>
          </div>

          <div className="space-y-2">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-[32px_1fr_auto] items-center gap-3 rounded px-3 py-2 no-underline transition-colors hover:bg-[var(--color-powder)]"
              >
                <span className="h-8 w-8 rounded-full shadow-[var(--shadow-subtle)]" style={{ background: project.color }} />
                <span>
                  <span className="block text-sm font-medium text-black">{project.title}</span>
                  <span className="block text-[13px] leading-5 text-[var(--color-gravel)]">{project.cat}</span>
                </span>
                <span className="font-mono text-[13px] text-[var(--color-slate)]">[{String(index + 1).padStart(2, '0')}]</span>
              </Link>
            ))}
          </div>

          <div className="mt-5 border-t border-[var(--color-chalk)] pt-4">
            <p className="font-mono text-[13px] leading-6 text-[var(--color-gravel)]">
              [available] Building interface systems where motion, brand, and engineering share the same quiet surface.
            </p>
          </div>
        </motion.div>
      </section>

      <WorkGallery projects={projects} />

      <Footer />
    </main>
  )
}
