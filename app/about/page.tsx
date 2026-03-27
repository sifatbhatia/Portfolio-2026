'use client'

import { motion } from 'framer-motion'
import GlobalNavbar from '../components/GlobalNavbar'
import FooterBrand from '../components/FooterBrand'
import AuroraTransition from '../components/AuroraTransition'

export default function About() {
  return (
    <main className="min-h-screen bg-[#121212] antialiased overflow-x-hidden selection:bg-[#C41E3D] selection:text-white">
      <GlobalNavbar />

      {/* ─── STUDIO MANIFESTO ─── */}
      <section className="px-[6%] pt-56 md:pt-80 pb-48 text-white relative">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col gap-12 md:gap-24">
             <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-[#C41E3D] font-bold">The Studio</span>
             <h1 className="text-[clamp(4.5rem,14vw,18rem)] tracking-tighter leading-[0.75] font-bold">
               Built for <br />
               <span className="italic font-playfair font-normal text-[#DFDFDF] opacity-30">Endurance.</span>
             </h1>
          </div>
        </div>
      </section>

      {/* ─── NARRATIVE SPREAD ─── */}
      <section className="px-[6%] py-64 md:py-96 bg-[#080808] text-white border-y border-white/5">
         <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-40 md:gap-64 items-start">
            <div className="space-y-16">
               <h2 className="text-5xl md:text-8xl tracking-tight leading-none font-bold">
                  The <br />
                  <span className="italic font-playfair font-normal text-[#C41E3D]">Philosophy.</span>
               </h2>
               <p className="text-white/40 text-2xl md:text-4xl font-light leading-relaxed italic font-playfair max-w-[18ch]">
                  &ldquo;We believe in digital craftsmanship that outlives the trend.&rdquo;
               </p>
            </div>

            <div className="space-y-32 pt-12 md:pt-24 font-light text-white/50 text-xl md:text-2xl leading-relaxed">
               <p>
                 Siftion is a boutique creative studio focused on the intersection of visual identity and engineering precision. We don&apos;t just build websites; we forge digital environments that feel alive and intentional.
               </p>
               <p>
                 Our approach is human-centric by design. We prioritize clarity, performance, and the emotional resonance of motion—ensuring every interaction is a moment of discovery rather than just a click.
               </p>
               <p className="text-[#DFDFDF] opacity-30 font-bold tracking-widest uppercase text-[10px] font-mono pt-12">
                 Est. 2026 · Based in the creative cloud.
               </p>
            </div>
         </div>
      </section>

      {/* ─── CAPABILITIES (RE-ITERATED) ─── */}
      <section className="px-[6%] py-48 md:py-80 bg-[#121212]">
         <div className="max-w-[1700px] mx-auto grid md:grid-cols-3 gap-24 md:gap-40">
            {[
               { t: 'Strategy', d: 'Defining the core intent before drawing a single pixel.' },
               { t: 'Identity', d: 'Crafting the visual language that speaks when you don’t.' },
               { t: 'Engineering', d: 'Turning vision into performant, high-fidelity code bases.' }
            ].map(c => (
               <div key={c.t} className="group flex flex-col gap-8">
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tight group-hover:text-[#C41E3D] transition-colors duration-500">{c.t}</h3>
                  <div className="h-[1.5px] w-12 bg-white/5 group-hover:w-full group-hover:bg-[#C41E3D] transition-all duration-1000" />
                  <p className="text-white/30 text-xl md:text-2xl font-light italic font-playfair group-hover:text-white/70 transition-colors duration-700">{c.d}</p>
               </div>
            ))}
         </div>
      </section>

      {/* ─── FINAL FOOTER ─── */}
      <section className="relative">
         <AuroraTransition />
         <div className="relative z-30 rounded-t-[5rem] bg-[#fdf5ef] shadow-[-30px_0_120px_rgba(0,0,0,0.6)]">
            <FooterBrand />
         </div>
      </section>
    </main>
  )
}
