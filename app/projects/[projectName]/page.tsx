'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import GlobalNavbar from '../../components/GlobalNavbar'
import FooterBrand from '../../components/FooterBrand'
import AuroraTransition from '../../components/AuroraTransition'

type ProjectRecord = {
  title: string
  subtitle: string
  year: string
  summary: string
  challengeText: string
  outcomeText: string
  services: string[]
  stack: string[]
  image: string
  liveUrl?: string
}

const PROJECTS: Record<string, ProjectRecord> = {
  'j-worra': {
    title: 'J. Worra',
    subtitle: 'Digital Identity',
    year: '2026',
    summary: 'A bold artist platform crafted to match a high-energy creative spirit—fast, memorable, and unmistakably hers. Built for the endurance of a global artist career.',
    challengeText: 'The project demanded a digital home that felt personal and expressive without sacrificing the technical performance required of a top-tier artist platform.',
    outcomeText: 'A high-fidelity experience that captured the nuance of her brand while driving a significant increase in engagement and direct inquiries through motion-led storytelling.',
    services: ['Creative Direction', 'UI/UX Design', 'Engineering'],
    stack: ['Next.js', 'GSAP', 'Framer Motion'],
    image: '/previews/j-worra/screenshot-1.webp',
    liveUrl: 'https://jworra.com',
  },
  'sifs-utilities': {
    title: "My Utilities",
    subtitle: 'Digital Tools',
    year: '2025',
    summary: 'A suite of private tools where efficiency meets a clean, focused aesthetic—built for the daily high-frequency work of a designer.',
    challengeText: 'Balancing powerful technical utility with an interface that feels calm and intuitive for repeat use without cognitive load.',
    outcomeText: 'A streamlined toolset that removed friction from the creative workflow, now serving as a core part of the studio stack for internal operations.',
    services: ['Product Design', 'Web Development'],
    stack: ['TypeScript', 'React', 'Local APIs'],
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
      subtitle: 'Selected Work',
      year: '2026',
      summary: 'A detailed exploration of this project is coming soon.',
      challengeText: 'We are currently documenting the creative process behind this work.',
      outcomeText: 'Full results and insights will be published shortly.',
      services: ['Design', 'Engineering'],
      stack: ['Modern Web'],
      image: '/previews/fallback.svg',
      liveUrl: '#',
    }

  return (
    <main className="min-h-screen bg-[#121212] antialiased overflow-x-hidden selection:bg-[#C41E3D] selection:text-white pb-32">
      <GlobalNavbar />

      {/* ─── EXPERIENTIAL HEADER ─── */}
      <section className="px-[6%] pt-56 md:pt-80 pb-48 text-white relative">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col gap-24">
             <div className="flex items-center gap-8 mb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#C41E3D] font-bold">Case Study </span>
                <div className="h-[1px] w-20 bg-white/5" />
                <span className="font-mono text-[11px] uppercase tracking-[0.4em] opacity-20 font-bold">{project.year}</span>
             </div>
             
             <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-16">
               <h1 className="text-[clamp(4.5rem,14vw,18rem)] tracking-tighter leading-[0.7] font-bold">
                 {project.title.split(' ')[0]} <br />
                 {project.title.split(' ').slice(1).join(' ') && (
                    <span className="italic font-playfair font-normal text-[#DFDFDF] opacity-30">
                       {project.title.split(' ').slice(1).join(' ')}
                    </span>
                 )}
               </h1>

               <div className="flex flex-col items-start md:items-end gap-10 md:text-right md:pb-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#C41E3D] font-bold italic">{project.subtitle}</p>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group flex items-center gap-6 py-8 px-16 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all shadow-[0_40px_80px_-20px_rgba(255,255,255,0.1)] active:scale-95"
                  >
                     <span className="font-mono text-[11px] uppercase tracking-[0.4em] font-bold">Discover</span>
                     <div className="w-3 h-3 rounded-full bg-[#C41E3D] group-hover:bg-black animate-pulse" />
                  </a>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* ─── NARRATIVE FLOW ─── */}
      <section className="px-[6%] py-64 md:py-96 bg-[#080808] text-white border-y border-white/5">
         <div className="max-w-[1700px] mx-auto grid lg:grid-cols-[1fr_1.85fr] gap-40 md:gap-64 items-start">
            
            {/* Metadata Rail */}
            <div className="lg:sticky lg:top-32 space-y-32">
               <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.6em] text-[#C41E3D] font-bold mb-12 italic">The Services</h3>
                  <div className="flex flex-col gap-6">
                    {project.services.map(s => (
                      <span key={s} className="text-2xl md:text-4xl font-light border-b border-white/5 pb-4 last:border-0 hover:text-[#C41E3D] transition-colors">{s}</span>
                    ))}
                  </div>
               </div>
               <div className="pt-24 md:pt-48 border-t border-white/5">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.6em] text-white/20 font-bold mb-12">The Stack</h3>
                  <div className="flex flex-wrap gap-4">
                    {project.stack.map(s => (
                      <span key={s} className="px-8 py-3 rounded-full bg-white/[0.03] font-mono text-[11px] tracking-[0.3em] font-bold border border-white/5 hover:bg-white/10 transition-colors uppercase">{s}</span>
                    ))}
                  </div>
               </div>
            </div>

            {/* Content Thread */}
            <div className="space-y-64 md:space-y-96 pr-4 lg:pr-24">
               <div className="space-y-16">
                  <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#C41E3D] font-bold">Concept</span>
                  <p className="text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] font-light tracking-tight italic font-playfair text-[#DFDFDF]">
                     &ldquo;{project.summary}&rdquo;
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-32 md:gap-48 items-start">
                  <div className="space-y-10 group">
                     <h4 className="font-mono text-[11px] uppercase tracking-[0.6em] text-white/20 font-bold mb-12 transition-colors group-hover:text-[#C41E3D]">The Vision</h4>
                     <p className="text-2xl md:text-3xl leading-snug text-white/40 italic font-playfair group-hover:text-white/70 transition-colors duration-700">{project.challengeText}</p>
                     <div className="h-[1.5px] w-20 bg-[#C41E3D]/30 mt-12 transition-all duration-1000 group-hover:w-full" />
                  </div>
                  <div className="space-y-10 group">
                     <h4 className="font-mono text-[11px] uppercase tracking-[0.6em] text-white/20 font-bold mb-12 transition-colors group-hover:text-[#C41E3D]">The Outcome</h4>
                     <p className="text-2xl md:text-3xl leading-snug text-white/40 italic font-playfair group-hover:text-white/70 transition-colors duration-700">{project.outcomeText}</p>
                     <div className="h-[1.5px] w-20 bg-[#C41E3D]/30 mt-12 transition-all duration-1000 group-hover:w-full" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ─── VISUAL IMPACT ─── */}
      <section className="px-[6%] py-48 md:py-96 bg-[#121212]">
         <div className="max-w-[1900px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
              className="rounded-[4rem] md:rounded-[7.5rem] overflow-hidden bg-[#080808] shadow-2xl"
            >
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full aspect-[16/10] md:aspect-[16/7] object-cover scale-[1.08] hover:scale-100 transition-transform duration-[3000ms] pointer-events-none opacity-90"
               />
            </motion.div>
         </div>
      </section>

      {/* ─── FOOTER BRIDGE ─── */}
      <section className="relative mt-32">
         <AuroraTransition />
         <div className="relative z-30 rounded-t-[5rem] bg-[#fdf5ef] shadow-[-30px_0_120px_rgba(0,0,0,0.6)]">
            <FooterBrand />
         </div>
      </section>
    </main>
  )
}
