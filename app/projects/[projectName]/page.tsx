'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import GlobalNavbar from '../../components/GlobalNavbar'
import Footer from '../../components/Footer'

type ProjectRecord = {
  title: string
  subtitle: string
  year: string
  summary: string
  challenge: string
  outcome: string
  services: string[]
  stack: string[]
  image: string
  liveUrl?: string
}

const PROJECTS: Record<string, ProjectRecord> = {
  'j-worra': {
    title: 'J. Worra',
    subtitle: 'Web Identity',
    year: '2026',
    summary: 'J. Worra needed a site as bold as her art—fast, discoverable, and unmistakably hers.',
    challenge: 'An artist website should feel personal and expressive without sacrificing performance and SEO.',
    outcome: 'A sharp site that loads quickly and improved contact conversions by ~30%.',
    services: ['Art Direction', 'UI/UX Design', 'Frontend Engineering'],
    stack: ['Next.js', 'TypeScript', 'Framer Motion'],
    image: '/previews/j-worra/screenshot-1.webp',
    liveUrl: 'https://jworra.com',
  },
  'sifs-utilities': {
    title: "Sif's Utilities",
    subtitle: 'Performance Utilities',
    year: '2025',
    summary: 'A suite of privacy-first browser tools where everything runs locally.',
    challenge: 'Make powerful utilities feel simple and trustworthy for repeat use.',
    outcome: 'A clean interface that reduced setup friction and boosted retention.',
    services: ['Product Design', 'TypeScript Development', 'Frontend Architecture'],
    stack: ['Next.js', 'React', 'Web APIs'],
    image: '/previews/sifs-utilities/screenshot-1.webp',
    liveUrl: '#',
  },
}

export default function ProjectDetail() {
  const params = useParams<{ projectName: string }>()
  const slug = params?.projectName || ''
  const project: ProjectRecord =
    PROJECTS[slug] || {
      title: slug.replace(/-/g, ' '),
      subtitle: 'Case Study',
      year: '2026',
      summary: 'Detailed case study coming soon.',
      challenge: 'Context in progress.',
      outcome: 'Publishing shortly.',
      services: ['Design', 'Engineering'],
      stack: ['Next.js'],
      image: '/previews/fallback.svg',
      liveUrl: '#',
    }

  return (
    <main className="min-h-screen bg-[#DFDFDF] text-[#121212] antialiased overflow-x-hidden">
      <GlobalNavbar />

      <section className="px-[6%] pt-[118px] md:pt-[146px] pb-12 border-b border-[#121212]/12">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#121212]/45">The Project</p>
        <h1 className="mt-3 text-[clamp(2.4rem,6.4vw,6.2rem)] leading-[0.88] tracking-[-0.045em]">{project.title}</h1>
        <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#121212]/50">
          {project.year} · {project.subtitle}
        </p>
        <p className="mt-5 max-w-[760px] text-[#121212]/72 text-lg leading-relaxed">{project.summary}</p>
      </section>

      <section className="px-[6%] py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[72px] gap-4 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 md:row-span-7 md:-rotate-[0.35deg]"
          >
            <div className="h-full rounded-2xl border border-[#121212]/12 bg-white overflow-hidden">
              <img src={project.image} alt={project.title} className="h-full w-full min-h-[300px] object-cover" />
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="md:col-span-4 md:row-span-3 rounded-2xl border border-[#121212]/12 bg-white p-5 md:translate-y-3"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#121212]/45">The Challenge</p>
            <p className="mt-3 text-[#121212]/78 leading-relaxed">{project.challenge}</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="md:col-span-4 md:row-span-3 rounded-2xl border border-[#121212]/12 bg-white p-5 md:-translate-y-2"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#121212]/45">The Result</p>
            <p className="mt-3 text-[#121212]/78 leading-relaxed">{project.outcome}</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="md:col-span-3 md:row-span-2 rounded-2xl border border-[#121212]/12 bg-white p-5 md:rotate-[0.25deg]"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#121212]/45">Project Details</p>
            <div className="mt-3 space-y-2 text-sm text-[#121212]/75">
              <p>
                <span className="font-semibold">Year:</span> {project.year}
              </p>
              <p>
                <span className="font-semibold">Type:</span> {project.subtitle}
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="md:col-span-5 md:row-span-2 rounded-2xl bg-[var(--accent)] p-5 text-white md:-translate-y-1"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Stack & Services</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[...project.services, ...project.stack].map((s) => (
                <span key={s} className="rounded-full border border-white/25 px-3 py-1 text-[10px] uppercase tracking-[0.14em]">
                  {s}
                </span>
              ))}
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4 md:row-span-1 flex items-end gap-3"
          >
            <a
              href={project.liveUrl || '#'}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#121212] px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-white no-underline hover:bg-[var(--accent)] transition-colors"
            >
              Visit Live Site
            </a>
            <Link
              href="/projects"
              className="inline-flex rounded-full border border-[#121212]/20 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-[#121212] no-underline hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              Back to projects
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
