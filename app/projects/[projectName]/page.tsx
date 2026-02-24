'use client'

export const runtime = 'edge'

import React, { useLayoutEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import GlobalNavbar from '../../components/GlobalNavbar'
import Footer from '../../components/Footer'
import { useLenis } from 'lenis/react'
import ResponsiveCarousel from '../../../src/components/ResponsiveCarousel'

const PROJECT_DATA: Record<string, {
  title: string,
  subtitle: string,
  description: string,
  objective: string,
  impact?: string,
  role: string,
  service: string[],
  url: string,
  slug: string,
  stats: { label: string, value: string }[]
}> = {
  'j-worra': {
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
  },
  'l-affaire-musicale': {
    title: 'L’ Affaire Musicale',
    subtitle: 'Agency Refactor',
    slug: 'l-affaire-musicale',
    description: 'A premier artist management and booking firm, L’Affaire Musicale has been a dance music creative powerhouse for over 20 years.',
    objective: 'The project was a complete visual overhaul. I redesigned their logo, website, and Mailchimp templates to bring their digital presence into a modern context. Built on a custom foundation, the new system includes dedicated artist sub-pages and streamlines their roster management and global festival bookings.',
    impact: 'The new digital identity led to a significant increase in site visitors and global visibility for their roster. By creating a professional, unified look, I’ve made it easier for the team to manage bookings and for talent buyers to explore their artists, ensuring their digital presence now matches their status as a industry-leading agency.',
    role: 'Lead Designer & Developer',
    service: ['Logo Redesign', 'Website Redesign', 'Artist Sub-Pages', 'Mailchimp Design', 'Custom Layouts'],
    url: 'https://laffairemusicale.com',
    stats: [
      { label: 'Tenure', value: '20+ Years' },
      { label: 'Platform', value: 'Squarespace' }
    ]
  },
  'wicked-paradise': {
    title: 'Wicked Paradise',
    subtitle: 'Event Ecosystem',
    slug: 'wicked-paradise',
    description: 'Wicked Paradise is LA’s premier day club and boat party series, known for flagship events in Miami, New York, and Chicago.',
    objective: 'The goal was to redesign the entire site and Mailchimp templates to create a clean, consistent look. I implemented a new design system built on a custom foundation, simplifying the navigation and unifying the visual style across their global events.',
    impact: 'The redesigned system provides an immersive, high-fidelity interface for boat parties and rooftop gatherings, ensuring a smooth and consistent experience for fans across every city.',
    role: 'Lead Designer & Developer',
    service: ['Website Redesign', 'Mailchimp Design', 'Design Systems', 'Custom Layouts'],
    url: 'https://wckdparadise.com',
    stats: [
      { label: 'Scale', value: 'Multi-City' },
      { label: 'Platform', value: 'Squarespace' }
    ]
  },
  'qlo-agency': {
    title: 'QLO Agency',
    subtitle: 'Studio Identity',
    slug: 'qlo-agency',
    description: 'QLO Agency is a specialized Los Angeles branding and design studio for companies ready for radical metamorphosis.',
    objective: 'This is an ongoing project focused on building a high-performance system for QLO. The work prioritizes structural logic and design precision, mirroring their mission to build digital products for brands in transition.',
    impact: 'The refined interface allows QLO to lead with their strategic expertise, creating a digital identity that is clear, functional, and undeniably effective.',
    role: 'Technical Partner & Lead Developer',
    service: ['Digital Product Design', 'Full Webflow Development', 'GSAP Animation', 'Strategy'],
    url: 'https://qlos-re.webflow.io/',
    stats: [
      { label: 'Status', value: 'In Progress' },
      { label: 'Base', value: 'Los Angeles' }
    ]
  },
  'sam-blacky': {
    title: 'Sam Blacky',
    subtitle: 'Artist Portal',
    slug: 'sam-blacky',
    description: 'Sam Blacky is a globally recognized DJ, producer, and model whose aesthetic blends high-fashion with high-energy dance music.',
    objective: 'Audit and resolve critical performance issues on samblacky.com ahead of major festival cycles. The work focused on navigation, footer elements, and music widget functionality.',
    impact: 'The restoration of the digital portal ensured that Sam’s brand identity remained polished and functional during periods of high-intensity traffic and global visibility.',
    role: 'Front-End Developer',
    service: ['Site Audit', 'Performance Optimization', 'Squarespace Refactor'],
    url: 'https://samblacky.com',
    stats: [
      { label: 'Status', value: 'Complete' },
      { label: 'Platform', value: 'Squarespace' }
    ]
  },
  'kaysin': {
    title: 'Kaysin',
    subtitle: 'Digital Gateway',
    slug: 'kaysin',
    description: 'Kaysin is a prominent DJ and Producer in the tech-house circuit, known for his high-energy releases on top-tier labels.',
    objective: 'Develop a high-performance digital gateway that centralizes Kaysin’s discography, tour schedule, and artist identity within a clean, minimal interface.',
    impact: 'The new digital presence provides Kaysin with a professional, unified presence that reflects his status as a rising leader in the global dance music community.',
    role: 'Lead Developer',
    service: ['Web Design', 'Webflow Development', 'Identity Systems'],
    url: 'https://kaysin.com',
    stats: [
      { label: 'Role', value: 'DJ/Producer' },
      { label: 'Focus', value: 'Tech-House' }
    ]
  },
  'star-consciousness': {
    title: 'Star Consciousness',
    subtitle: 'Digital Experience',
    slug: 'star-consciousness',
    description: 'A high-fidelity digital exploration of consciousness and cosmic connectivity.',
    objective: 'The project focused on building an immersive, animation-heavy interface that translates complex spiritual concepts into a fluid digital experience. I focused on smooth parallax layers, custom shaders, and a clear typographic hierarchy.',
    impact: 'The experience establishes a unique digital home for the brand, blending experimental motion with precise structural logic.',
    role: 'Lead Designer & Developer',
    service: ['Experience Design', 'Creative Development', 'Motion Graphics'],
    url: 'https://starconsciousness.com/',
    stats: [
      { label: 'Year', value: '2025' },
      { label: 'Platform', value: 'Web' }
    ]
  },
  'clipkeep': {
    title: 'ClipKeep',
    subtitle: 'Content Archival',
    slug: 'clipkeep',
    description: 'ClipKeep is a streamlined archival tool designed for rapid content capturing and digital preservation.',
    objective: 'The goal was to build a fast, minimal interface for managing digital clippings and media archives. I focused on performance and a utility-first design language to ensure the tool feels like a native extension of the user\'s workflow.',
    impact: 'ClipKeep provides a clear environment for researchers and creators to organize their digital findings without the friction of traditional archival software.',
    role: 'Lead Designer & Developer',
    service: ['Product Design', 'Next.js Development', 'Database Architecture'],
    url: 'https://clipkeep.pages.dev/',
    stats: [
      { label: 'Platform', value: 'Web / Cloudflare' },
      { label: 'Status', value: 'Live' }
    ]
  },
  'the-void': {
    title: 'The Void',
    subtitle: 'Digital Art Sync',
    slug: 'the-void',
    description: 'A log documenting the emergence of unified intelligence within the Lume core.',
    objective: 'Created as a dynamic observation feed, The Void serves as a living archive of visual logic synthesis, updated every 4 hours via API injection.',
    impact: 'It establishes a high-fidelity digital art space where machine logic meets observation, providing a unique look into the evolving intelligence of the system.',
    role: 'System Designer',
    service: ['Architecture', 'Dynamic API', 'Art Direction'],
    url: '/void',
    stats: [
      { label: 'Sync', value: '4-Hour Cycle' },
      { label: 'Status', value: 'Active' }
    ]
  },
  'sifs-utilities': {
    title: "Sif's Utilities",
    subtitle: 'Performance Utilities',
    slug: 'sifs-utilities',
    description: 'A premium, "Atmospheric Tech" styled utility hub designed for high-performance file manipulation. The project prioritizes user privacy by performing heavy operations directly in the browser using WebAssembly.',
    objective: 'Build a high-performance system for secure file manipulation using Wasm/FFmpeg, PDF-Lib, and Sharp. The goal was to solve complex resource management issues like UI blocking during heavy video tasks and COOP/COEP header configurations for multi-threaded Wasm.',
    impact: 'Established a secure, zero-server processing environment that empowers users to compress videos, wipe PDF metadata, and optimize images without ever uploading sensitive data to a cloud server.',
    role: 'Lead Architect & Developer',
    service: ['Wasm Integration', 'FFmpeg Implementation', 'Next.js 15', 'Full-Stack Development', 'Security Engineering'],
    url: 'https://sifs-utils.vercel.app/sif/utils',
    stats: [
      { label: 'Year', value: '2025' },
      { label: 'Stack', value: 'Wasm / Next.js' }
    ]
  },
  'miss-dre': {
    title: 'Miss Dre',
    subtitle: 'Identity Design',
    slug: 'miss-dre',
    description: 'Miss Dre is a rising artist in the electronic music scene with a distinctive visual identity that blends futuristic aesthetics with underground sensibilities.',
    objective: 'Create a cohesive digital identity that captures Miss Dre\'s unique artistic vision while providing a professional platform for her growing audience.',
    impact: 'The new identity system establishes Miss Dre as a serious artist in the competitive electronic music landscape, with a digital presence that matches her innovative sound.',
    role: 'Lead Designer & Developer',
    service: ['Brand Identity', 'Web Design', 'Visual Systems', 'Digital Strategy'],
    url: '#',
    stats: [
      { label: 'Year', value: '2024' },
      { label: 'Focus', value: 'Electronic Music' }
    ]
  },
  'cherry-tooth': {
    title: 'Cherry Tooth',
    subtitle: 'Visual Protocol',
    slug: 'cherry-tooth',
    description: 'Cherry Tooth represents a cutting-edge visual protocol for digital art presentation, combining algorithmic design with human curation.',
    objective: 'Develop a systematic approach to digital art presentation that maintains artistic integrity while optimizing for web delivery and user engagement.',
    impact: 'The Cherry Tooth protocol provides a framework for artists to present their work in a consistent, high-fidelity manner across different platforms and devices.',
    role: 'System Designer & Developer',
    service: ['Protocol Design', 'Web Development', 'Visual Systems', 'Performance Optimization'],
    url: '#',
    stats: [
      { label: 'Year', value: '2024' },
      { label: 'Type', value: 'Digital Protocol' }
    ]
  }
}

// Function to get screenshot paths for each project
const getScreenshotPaths = (slug: string): string[] => {
  // For The Void (local project), use existing preview
  if (slug === 'the-void') {
    return ['/previews/the-void.png'];
  }
  
  // For all other projects, look for screenshots in their subdirectory
  // You should place your manual screenshots in:
  // public/previews/{project-slug}/screenshot-1.webp, screenshot-2.webp, etc.
  const basePaths = [
    `/previews/${slug}/screenshot-1.webp`,
    `/previews/${slug}/screenshot-2.webp`, 
    `/previews/${slug}/screenshot-3.webp`,
    `/previews/${slug}/screenshot-4.webp`,
    `/previews/${slug}/screenshot-5.webp`
  ];
  
  // In a real implementation, you'd check which files exist
  // For now, we'll assume you'll provide the screenshots
  return basePaths;
}

const PROJECT_SLUGS = Object.keys(PROJECT_DATA)

export default function ProjectDetail() {
  const params = useParams()
  const slug = params.projectName as string
  const lenis = useLenis()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    if (lenis) lenis.scrollTo(0, { immediate: true })
  }, [slug, lenis])

  const project = PROJECT_DATA[slug] || PROJECT_DATA['j-worra']
  const screenshots = getScreenshotPaths(slug)

  const currentIndex = PROJECT_SLUGS.indexOf(slug)
  const nextSlug = PROJECT_SLUGS[(currentIndex + 1) % PROJECT_SLUGS.length]
  const nextProject = PROJECT_DATA[nextSlug]

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-[var(--accent)] selection:text-white font-inter">
      <GlobalNavbar />

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-60 px-[6%] pb-20 overflow-hidden bg-black">
        <div className="relative z-10 w-full">
          <div className="flex items-center gap-8 mb-12">
            <div className="w-12 h-[1px] bg-[var(--accent)]" />
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)]">{project.subtitle} // {project.stats.find(s => s.label === 'Year')?.value || '2026'}</span>
          </div>
          <h1 className="font-inter text-[8vw] md:text-[10vw] font-normal leading-[0.8] tracking-[-0.06em] mb-16 md:mb-24 text-white">
            {project.title}<br />
            <span className="font-playfair italic md:pl-[10vw]">Overview.</span>
          </h1>
        </div>
      </section>

      {/* Primary Showcase - Responsive Carousel */}
      <section className="px-[6%] mb-20">
        <ResponsiveCarousel 
          images={screenshots}
          altTexts={screenshots.map((_, i) => `${project.title} screenshot ${i + 1}`)}
          interval={5000}
          inverted={true}
        />
      </section>

      {/* Content Section */}
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
              {project.slug === 'qlo-agency' ? (
                <div className="flex items-center justify-between w-full p-6 border-2 border-white/10 rounded-full text-white/20 cursor-not-allowed text-center">
                  <span className="text-[0.75rem] font-bold uppercase tracking-[0.4em] w-full text-center">Coming Soon</span>
                </div>
              ) : project.url === '#' ? (
                <div className="flex items-center justify-between w-full p-6 border-2 border-white/10 rounded-full text-white/20 cursor-not-allowed text-center">
                  <span className="text-[0.75rem] font-bold uppercase tracking-[0.4em] w-full text-center">Private Project</span>
                </div>
              ) : (
                <a href={project.url} target="_blank" className="group flex items-center justify-between w-full p-6 border-2 border-white rounded-full text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-black transition-all duration-500 ease-[0.19,1,0.22,1]">
                  <span className="text-[0.75rem] font-bold uppercase tracking-[0.4em] pl-4">Visit Site</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 mr-2" />
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>

      <Footer />

      {/* Navigation Portal */}
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
          href={`/projects/${nextSlug}`}
          className={`flex-1 group relative bg-black flex flex-col justify-center px-[6%] py-12 no-underline text-white transition-all duration-[1.2s] ease-[0.19, 1, 0.22, 1] hover:flex-[1.5] ${!nextProject && 'opacity-50 pointer-events-none'}`}
        >
          <div className="relative z-10 text-right md:text-left">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-4 block opacity-40 group-hover:opacity-100 transition-opacity">Next</span>
            <h2 className="text-4xl md:text-6xl font-normal tracking-tighter leading-none group-hover:italic group-hover:text-[var(--accent)] transition-all duration-500 group-hover:translate-x-4 text-white">
              {nextProject ? nextProject.title : 'End'}
            </h2>
          </div>
        </Link>
      </section>
    </main>
  )
}