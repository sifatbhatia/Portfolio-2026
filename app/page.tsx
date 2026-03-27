import Link from 'next/link'
import HeroAlt from './components/HeroAlt'
import FooterBrand from './components/FooterBrand'

export const metadata = {
  title: 'Sifat Bhatia — Design Engineer | Strategy & Engineering for Visionary Brands',
}

const PROCESS = [
  { 
    title: 'Discovery', 
    desc: "Stakeholder interviews, user-audience mapping, and a concise success brief that defines what success looks like in metrics and behavior." 
  },
  { 
    title: 'Design system', 
    desc: "A compact, documented design system—typography, color, spacing, and interaction rules—implemented as reusable components for consistency." 
  },
  { 
    title: 'Implementation & launch', 
    desc: 'Builds prioritize performance, accessibility, and maintainability. Audited and deployed with a short post-launch optimization window.' 
  },
]

const SERVICES = [
  { 
    title: 'Portfolio redesign', 
    desc: "A strategic overhaul that sharpens messaging, restructures content for clarity, and applies a polished visual system for conversion." 
  },
  { 
    title: 'New build', 
    desc: 'Full-stack delivery from concept to launch: design, implementation, content integration, QA, and deployment with documented handoff.' 
  },
  { 
    title: 'Performance & maintenance', 
    desc: "Speed, reliability, and long-term maintainability: performance audits, accessibility fixes, and a maintenance plan for growth." 
  },
]

const TESTIMONIALS = [
  { quote: "Sifat translated our messy ideas into a site that finally feels premium.", author: "Creative Director, Music Brand" },
  { quote: "Fast, deliberate, and the rare combo of design taste + engineering clarity.", author: "Founder, Product Studio" },
]

const FAQS = [
  { q: "How long does a project take?", a: "Most portfolio projects complete in 2–5 weeks, depending on scope and how quickly content is available." },
  { q: "Do you handle both design and development?", a: "Yes. Strategy, visual design, and frontend implementation are managed end-to-end to reduce handoff friction." },
  { q: "Can we start small?", a: "Absolutely. We can begin with a focused audit or a one-page redesign sprint and scale from there." },
]

export default function Home() {
  return (
    <main className="bg-[#121212] antialiased overflow-x-hidden min-h-screen selection:bg-[#C41E3D] selection:text-white font-sans">
      
      {/* ─── Hero Section (Untouched) ─── */}
      <div className="bg-white">
        <HeroAlt />
      </div>

      {/* ─── APPROACH ─── */}
      <section className="relative px-[6%] py-64 md:py-96 bg-[#121212] text-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col gap-16 md:gap-32 items-baseline mb-48">
             <span className="font-mono text-[11px] uppercase tracking-[0.6em] text-[#C41E3D] font-bold">Approach</span>
             <h2 className="text-[clamp(4.5rem,13vw,16rem)] tracking-tighter leading-[0.7] font-bold">
                Strategic Design. <br />
                <span className="italic font-playfair font-normal text-[#DFDFDF] opacity-30">Careful delivery.</span>
             </h2>
          </div>

          <div className="grid lg:grid-cols-[1fr_2.5fr] gap-24 md:gap-48 items-start">
             <div className="lg:sticky lg:top-32 h-px w-full bg-white/5" />
             <div className="space-y-24 md:space-y-32">
                <p className="text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05] font-light tracking-tight italic font-playfair text-[#DFDFDF] opacity-80">
                   &ldquo;I begin with focused discovery: interviews, audience mapping, and clear success metrics so every design decision traces back to a measurable outcome.&rdquo;
                </p>
                <div className="grid md:grid-cols-2 gap-24 md:gap-40 border-t border-white/5 pt-24 md:pt-48 mt-12">
                   <p className="text-white/40 text-xl md:text-2xl leading-relaxed">
                     From that foundation I create a compact design system — type, color, spacing, and motion — documented and componentized so the interface is predictable, cohesive, and easy to maintain.
                   </p>
                   <p className="text-white/40 text-xl md:text-2xl leading-relaxed">
                     Implementation prioritizes performance, accessibility, and a reliable launch. Builds are audited, tested, and deployed with a short optimization loop after release.
                   </p>
                </div>
                <div className="pt-24 border-t border-white/5">
                   <Link href="/contact" className="group text-2xl md:text-4xl font-playfair italic flex items-center gap-6 text-white/30 hover:text-[#C41E3D] transition-colors duration-500">
                      Book a 15‑minute roadmap to align goals.
                      <span className="text-[#C41E3D] group-hover:translate-x-4 transition-transform duration-700">→</span>
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="px-[6%] py-64 md:py-96 bg-[#080808] text-white border-y border-white/5">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col gap-8 mb-48 md:mb-64">
             <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#C41E3D] font-bold">Process</span>
             <h2 className="text-5xl md:text-9xl tracking-tighter leading-none font-bold">
               A pragmatic <br />
               <span className="italic font-playfair font-normal text-[#DFDFDF] opacity-30">end‑to‑end approach.</span>
             </h2>
             <p className="mt-12 text-white/40 text-2xl md:text-4xl font-light leading-relaxed italic border-l border-white/10 pl-12 font-playfair">
               Tying design decisions to measurable outcomes.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-40">
            {PROCESS.map(({ title, desc }, i) => (
              <div key={title} className="group relative pt-24 border-t border-white/5 hover:border-[#C41E3D] transition-colors duration-700">
                <span className="font-mono text-[11px] text-[#C41E3D] mb-10 block tracking-widest font-bold">/ 0{i+1} /</span>
                <h3 className="text-3xl md:text-5xl tracking-tight leading-none mb-10 font-bold group-hover:text-[#C41E3D] transition-colors duration-500 lowercase">
                  {title}
                </h3>
                <p className="text-white/30 leading-relaxed text-xl md:text-2xl font-light group-hover:text-white/60 transition-colors duration-700 font-playfair italic">
                  &ldquo;{desc}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="px-[6%] py-64 md:py-96 bg-[#121212] text-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col gap-8 mb-48 md:mb-64 items-end text-right">
             <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#C41E3D] font-bold">Services</span>
             <h2 className="text-5xl md:text-9xl tracking-tighter leading-[0.8] font-bold">
               Clear Offerings. <br />
               <span className="italic font-playfair font-normal text-[#DFDFDF] opacity-30">Defined outcomes.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-40">
            {SERVICES.map(({ title, desc }, i) => (
              <div key={title} className="group flex flex-col gap-10">
                 <h3 className="text-4xl md:text-6xl font-bold tracking-tight group-hover:text-[#C41E3D] transition-colors duration-500">{title}</h3>
                 <p className="text-white/30 text-xl md:text-2xl font-light leading-relaxed group-hover:text-white/70 transition-colors duration-700">{desc}</p>
                 <div className="h-[1.5px] w-12 bg-white/5 group-hover:w-full group-hover:bg-[#C41E3D] transition-all duration-[1200ms] mt-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AVAILABILITY & OUTCOMES ─── */}
      <section className="px-[6%] py-48 md:py-80 bg-[#080808] text-white border-y border-white/5">
         <div className="max-w-[1700px] mx-auto grid lg:grid-cols-2 gap-40 md:gap-64 items-start">
            <div className="space-y-24">
               <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#C41E3D] font-bold">Availability</span>
               <h2 className="text-4xl md:text-7xl tracking-tighter leading-none font-bold">
                  2026 <br />
                  <span className="italic font-playfair font-normal text-[#DFDFDF] opacity-30">Engagements.</span>
               </h2>
               <p className="text-white/40 text-xl md:text-2xl leading-relaxed max-w-[40ch]">
                 Accepting select engagements for upcoming quarters. Typical engagements range from focused one‑page redesigns to multi‑week brand + site builds. Standard delivery window for portfolio projects: 2–5 weeks.
               </p>
               <div className="pt-12">
                  <Link href="/contact" className="px-12 py-5 bg-white rounded-full text-black font-mono text-[11px] uppercase tracking-[0.4em] font-bold hover:scale-105 transition-transform inline-block">Request a session</Link>
               </div>
            </div>

            <div className="space-y-32">
               <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">Outcomes (Metrics)</span>
               <div className="space-y-16">
                  {[
                    { label: "Performance", val: "-38%", desc: "Average load-time improvements" },
                    { label: "Inquiries", val: "+43%", desc: "Typical increase in qualified inquiries" },
                    { label: "Velocity", val: "2-5w", desc: "Standard delivery window" }
                  ].map(m => (
                    <div key={m.label} className="flex justify-between items-end border-b border-white/5 pb-8 group">
                       <div className="space-y-2">
                          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-[#C41E3D] transition-colors">{m.label}</p>
                          <p className="text-white/50 text-xl font-light">{m.desc}</p>
                       </div>
                       <p className="text-5xl md:text-8xl font-mono tracking-tighter leading-none group-hover:text-white transition-colors">{m.val}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ─── TRUST & TESTIMONIALS ─── */}
      <section className="px-[6%] py-64 md:py-96 bg-[#121212]">
         <div className="max-w-[1700px] mx-auto overflow-hidden">
            <div className="flex flex-col md:flex-row gap-32 md:gap-64">
               {TESTIMONIALS.map((t, i) => (
                 <div key={i} className="flex-1 space-y-16 group">
                    <span className="text-[clamp(4rem,10vw,12rem)] font-mono opacity-5 leading-none transition-opacity group-hover:opacity-10 pointer-events-none">/ 0{i+1} /</span>
                    <p className="text-3xl md:text-6xl leading-[1.1] font-light tracking-tight italic font-playfair text-[#DFDFDF] opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                       &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="pt-12 border-t border-white/5 flex items-center justify-between">
                       <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/20 font-bold">{t.author}</p>
                       <div className="w-12 h-[1.5px] bg-[#C41E3D]/30" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ─── CLIENT FIT & ABOUT ─── */}
      <section className="px-[6%] py-64 md:py-96 bg-[#080808] text-white border-t border-white/5">
         <div className="max-w-[1700px] mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-40 md:gap-64 items-start">
            <div className="space-y-32">
               <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.6em] text-[#C41E3D] font-bold mb-12 italic">Client Fit</h3>
                  <ul className="space-y-8">
                    {[
                      'Artists and creative brands seeking a distinct home',
                      'Founders and studios seeking design + build from a single owner',
                      'Teams seeking fast, measurable performance improvements'
                    ].map(f => (
                      <li key={f} className="text-2xl md:text-3xl font-light text-white/40 flex items-start gap-6 group hover:text-white transition-colors duration-500 italic font-playfair">
                         <span className="w-2 h-2 rounded-full bg-[#C41E3D] mt-4 opacity-30 group-hover:opacity-100 transition-opacity" />
                         {f}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

            <div className="space-y-48">
               <div className="space-y-12">
                  <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/20 font-bold italic">The Engineer</span>
                  <h2 className="text-5xl md:text-9xl tracking-tighter leading-none font-bold">
                    Sifat <br />
                    <span className="italic font-playfair font-normal text-[#DFDFDF] opacity-30">Bhatia.</span>
                  </h2>
                  <p className="text-white/40 text-2xl md:text-4xl font-light leading-relaxed italic font-playfair max-w-[40ch]">
                    I combine product‑grade frontend engineering with refined visual design to build sites that perform and scale. I focus on clarity: clean code, deliberate motion, and interfaces that serve clear business goals.
                  </p>
               </div>
               
               <div className="pt-24 border-t border-white/5">
                  <Link href="/contact" className="group text-4xl md:text-7xl tracking-tighter font-bold flex flex-col items-start gap-8 hover:text-[#C41E3D] transition-colors duration-700">
                     <span className="font-mono text-[10px] uppercase tracking-[0.8em] text-white/20">Call to action</span>
                     <span className="leading-tight">Book a 15‑minute roadmap session.</span>
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-[6%] py-64 md:py-96 bg-[#121212] text-white">
         <div className="max-w-[1300px] mx-auto">
            <div className="flex flex-col gap-12 mb-48 md:mb-64 items-center text-center">
               <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#C41E3D] font-bold">Clarifications</span>
               <h2 className="text-5xl md:text-9xl tracking-tighter leading-none font-bold italic font-playfair">FAQ.</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-24 md:gap-40 items-start">
               {FAQS.map(f => (
                 <div key={f.q} className="space-y-8 group border-t border-white/5 pt-12 hover:border-[#C41E3D] transition-colors duration-700">
                    <h4 className="text-2xl md:text-3xl font-bold tracking-tight">{f.q}</h4>
                    <p className="text-white/30 text-lg md:text-xl font-light leading-relaxed group-hover:text-white/60 transition-colors duration-700">{f.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ─── BRANDING SURFACE (Untouched) ─── */}
      <section className="relative">
        <div className="relative z-30 rounded-t-[5rem] bg-[#fdf5ef] shadow-[-30px_0_120px_rgba(0,0,0,0.6)]">
           <FooterBrand />
        </div>
      </section>
    </main>
  )
}
