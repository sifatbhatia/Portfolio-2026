'use client'

import { motion } from 'framer-motion'
import GlobalNavbar from '../components/GlobalNavbar'
import FooterBrand from '../components/FooterBrand'
import AuroraTransition from '../components/AuroraTransition'

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#121212] antialiased overflow-x-hidden selection:bg-[#C41E3D] selection:text-white">
      <GlobalNavbar />

      {/* ─── CONTACT HEADER ─── */}
      <section className="px-[6%] pt-56 md:pt-80 pb-32 text-white relative">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col gap-12 md:gap-24">
             <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-[#C41E3D] font-bold">Inquiry</span>
             <h1 className="text-[clamp(4.5rem,14vw,18rem)] tracking-tighter leading-[0.75] font-bold">
               Let&apos;s Build <br />
               <span className="italic font-playfair font-normal text-[#DFDFDF] opacity-30">Something.</span>
             </h1>
          </div>
        </div>
      </section>

      {/* ─── CONTACT GRID ─── */}
      <section className="px-[6%] py-64 md:py-96 bg-[#080808] text-white border-y border-white/5">
         <div className="max-w-[1700px] mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-40 md:gap-64 items-start">
            
            <div className="space-y-32">
               <h2 className="text-4xl md:text-7xl tracking-tight leading-none font-bold">
                  The <br />
                  <span className="italic font-playfair font-normal text-[#C41E3D]">Approach.</span>
               </h2>
               <div className="space-y-16 max-w-[700px]">
                  <p className="text-white/40 text-2xl md:text-3xl font-light leading-relaxed italic font-playfair">
                    &ldquo;We take on a limited number of projects each quarter to ensure every partner receives our full creative focus.&rdquo;
                  </p>
                  
                  {/* Simple, high-end form placeholder/style */}
                  <div className="pt-24 space-y-12">
                     <div className="group border-b border-white/10 pb-4 focus-within:border-[#C41E3D] transition-colors duration-500">
                        <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold block mb-4">Name</label>
                        <input type="text" placeholder="Your Storyteller" className="w-full bg-transparent border-none outline-none text-2xl md:text-4xl font-light placeholder:text-white/5 font-playfair italic" />
                     </div>
                     <div className="group border-b border-white/10 pb-4 focus-within:border-[#C41E3D] transition-colors duration-500">
                        <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold block mb-4">Email</label>
                        <input type="email" placeholder="story@siftion.studio" className="w-full bg-transparent border-none outline-none text-2xl md:text-4xl font-light placeholder:text-white/5 font-playfair italic" />
                     </div>
                     <div className="group border-b border-white/10 pb-4 focus-within:border-[#C41E3D] transition-colors duration-500">
                        <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold block mb-4">Vision</label>
                        <textarea rows={2} placeholder="What are we building?" className="w-full bg-transparent border-none outline-none text-2xl md:text-4xl font-light placeholder:text-white/5 font-playfair italic resize-none" />
                     </div>
                     
                     <button className="group relative inline-flex items-center gap-10 py-10 px-24 bg-white rounded-full text-[#121212] text-[12px] uppercase font-mono tracking-[0.5em] transition-all hover:scale-[1.05] active:scale-95 shadow-[0_40px_80px_-20px_rgba(255,255,255,0.15)] font-bold">
                        Reach Out
                        <div className="w-3 h-3 rounded-full bg-[#C41E3D] animate-pulse" />
                     </button>
                  </div>
               </div>
            </div>

            <div className="lg:sticky lg:top-32 space-y-32 md:pt-24">
               <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.6em] text-[#C41E3D] font-bold mb-12 italic">Direct Channel</h3>
                  <a href="mailto:sifatbht@gmail.com" className="text-3xl md:text-5xl font-light text-white/40 hover:text-white transition-colors block border-b border-white/5 pb-8">sifatbht@gmail.com</a>
               </div>
               <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.6em] text-white/20 font-bold mb-12">Social Connect</h3>
                  <div className="flex flex-col gap-6">
                     {['Instagram', 'LinkedIn', 'Behance', 'Twitter'].map(s => (
                        <a key={s} href="#" className="text-2xl font-light text-white/30 hover:text-white transition-all duration-500 flex items-center justify-between group">
                           {s}
                           <span className="w-2 h-2 rounded-full bg-[#C41E3D]/30 group-hover:bg-[#C41E3D] transition-colors" />
                        </a>
                     ))}
                  </div>
               </div>
            </div>
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
