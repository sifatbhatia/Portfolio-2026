'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import GlobalNavbar from '../components/GlobalNavbar'
import FooterBrand from '../components/FooterBrand'
import AuroraTransition from '../components/AuroraTransition'

const projects = [
  { title: 'J. Worra', cat: 'Creative Studio', year: '2026', slug: 'j-worra', image: '/previews/j-worra/screenshot-1.webp', note: 'A bold artist platform with a custom identity that stands out.' },
  { title: "My Utilities", cat: 'Digital Tools', year: '2025', slug: 'sifs-utilities', image: '/previews/sifs-utilities/screenshot-1.webp', note: 'Tools designed for performance and digital well-being.' },
  { title: 'QLO Agency', cat: 'Studio Identity', year: '2025', slug: 'qlo-agency', image: '/previews/qlo-agency/screenshot-1.webp', note: 'A digital presence that matches the studio’s creative edge.' },
  { title: "L' Affaire", cat: 'Brand Rebrand', year: '2025', slug: 'l-affaire-musicale', image: '/previews/l-affaire-musicale/screenshot-1.webp', note: 'Full rebrand—from visual identity to website—capturing the agency’s soul.' },
  { title: 'ClipKeep', cat: 'Archive System', year: '2025', slug: 'clipkeep', image: '/previews/clipkeep/screenshot-1.webp', note: 'Simple but powerful content archiving that just works.' },
  { title: 'Sam Blacky', cat: 'Artist Identity', year: '2025', slug: 'sam-blacky', image: '/previews/sam-blacky/screenshot-1.webp', note: 'Visual-forward artist platform tuned for high-energy discovery.' },
  { title: 'Cherry Tooth', cat: 'Visual Identity', year: '2025', slug: 'cherry-tooth', image: '/previews/cherry-tooth/screenshot-1.webp', note: 'Identity-led website balancing precision with personality.' },
  { title: 'Wicked Paradise', cat: 'Web Experience', year: '2025', slug: 'wicked-paradise', image: '/previews/wicked-paradise/screenshot-1.webp', note: 'A festival-forward digital experience built to hold attention.' },
]

export default function ProjectsIndex() {
  return (
    <main className="min-h-screen bg-[#121212] antialiased overflow-x-hidden selection:bg-[#C41E3D] selection:text-white">
      <GlobalNavbar />

      {/* ─── HEADER ─── */}
      <section className="px-[6%] pt-56 md:pt-72 pb-32 text-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16 md:gap-32">
            <div className="max-w-[1100px]">
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#C41E3D] font-bold block mb-12">Archive</span>
              <h1 className="text-[clamp(4.5rem,12vw,16rem)] tracking-tighter leading-[0.7] font-bold">
                 The <span className="italic font-playfair font-normal text-[#DFDFDF] opacity-30">Selection.</span>
              </h1>
            </div>
            <p className="max-w-[450px] text-white/30 text-2xl md:text-3xl font-light leading-snug italic border-l border-white/5 pl-12 font-playfair hover:text-white/60 transition-colors duration-700">
              &ldquo;A curation of digital homes where visual identity and engineering converge into singular experiences.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── ASYMMETRIC GRID ─── */}
      <section className="px-[6%] py-32 md:pb-64">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-20 gap-y-48 md:gap-y-80">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, delay: (i % 2) * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className={`group col-span-1 flex flex-col ${
                 i === 0 ? 'md:col-span-8' :
                 i === 1 ? 'md:col-span-4 md:pt-48' :
                 i === 2 ? 'md:col-span-5 md:pt-24' :
                 i === 3 ? 'md:col-span-7' :
                 i % 2 === 0 ? 'md:col-span-7' : 'md:col-span-5 md:pt-32'
              }`}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="relative block aspect-[16/10] md:aspect-auto md:h-full min-h-[450px] md:min-h-[550px] rounded-[3.5rem] md:rounded-[5.5rem] overflow-hidden bg-[#080808] border border-white/5 transition-transform duration-1000 group-hover:scale-[1.01] active:scale-[0.98]"
              >
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="h-full w-full object-cover grayscale-[0.6] group-hover:grayscale-0 scale-[1.05] group-hover:scale-100 transition-all duration-[2000ms] ease-out opacity-80 group-hover:opacity-100 shadow-2xl" 
                />
                
                {/* Clean metadata overlay */}
                <div className="absolute inset-x-8 top-8 md:inset-x-12 md:top-12 flex justify-between items-start pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                   <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">0{i+1} / 0{projects.length}</span>
                </div>

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex items-center justify-center backdrop-blur-[2px]">
                   <div className="flex flex-col items-center gap-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-1000 ease-out">
                      <div className="px-12 py-5 bg-white rounded-full text-black font-mono text-[11px] uppercase tracking-[0.4em] font-bold shadow-2xl">
                         Explore Project
                      </div>
                   </div>
                </div>
              </Link>

              <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-baseline justify-between gap-12 md:gap-32">
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                     <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#C41E3D] font-bold italic">Process Outcome</span>
                     <div className="h-[1.5px] w-20 bg-white/5 group-hover:bg-[#C41E3D] group-hover:w-32 transition-all duration-1000" />
                  </div>
                  <h2 className="text-5xl md:text-9xl tracking-tighter leading-[0.75] font-bold text-white group-hover:text-[#C41E3D] transition-colors duration-700">
                    {p.title}
                  </h2>
                </div>
                <div className="md:pt-8 md:text-right border-l border-white/5 pl-12 md:border-l-0 md:pl-0 md:border-r md:pr-12">
                   <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20 mb-6 font-bold">{p.cat} · {p.year}</p>
                   <p className="text-white/30 text-2xl md:text-3xl font-light leading-snug max-w-[20ch] italic font-playfair group-hover:text-white/70 transition-colors duration-1000">
                     &ldquo;{p.note}&rdquo;
                   </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ─── FOOTER TRANSITION ─── */}
      <section className="relative">
         <AuroraTransition />
         <div className="relative z-30 rounded-t-[5rem] bg-[#fdf5ef] shadow-[-30px_0_120px_rgba(0,0,0,0.6)]">
            <FooterBrand />
         </div>
      </section>
    </main>
  )
}
