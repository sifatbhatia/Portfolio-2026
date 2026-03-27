import Link from 'next/link'
import HeroAlt from '../components/HeroAlt'
import FooterBrand from '../components/FooterBrand'
import AuroraTransition from '../components/AuroraTransition'

export const metadata = {
  title: 'Siftion Studio — Redefining Digital Excellence',
}

const PROCESS = [
  { n: '01', title: 'Listening',      desc: "Deeply understanding your story, your audience, and the impact you want to make." },
  { n: '02', title: 'Creative Path',  desc: "Crafting a bespoke visual language—typography, color, and motion that tell your story." },
  { n: '03', title: 'Launch',         desc: 'Precision building with clean, fast code and thorough testing for a flawless debut.' },
]

const SERVICES = [
  { title: 'Brand Story', desc: "Forging a distinctive visual narrative through motion systems and core aesthetics." },
  { title: 'Web Experience', desc: 'Crafting high-fidelity digital homes from conceptual strategy to final deployment.' },
  { title: 'Partnership', desc: "Long-term collaboration for strategic growth, performance optimization, and creative care." },
  { title: 'Performance', desc: "Engineering high-speed, accessible interfaces that command attention and drive results." },
]

export default function HeroAltPage() {
  return (
    <main className="bg-[#121212] antialiased overflow-x-hidden min-h-screen selection:bg-[#C41E3D] selection:text-white">
      
      {/* ─── Hero Boundary ─── */}
      <div className="bg-white">
        <HeroAlt />
      </div>

      {/* ─── SECTION 01: THE APPROACH ─── */}
      <section className="px-[6%] py-40 md:py-64 bg-[#121212] text-white relative flex flex-col items-center text-center">
        <div className="max-w-[1200px] w-full relative z-20">
          <div className="flex flex-col items-center gap-8 mb-32">
             <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#C41E3D]/60 italic">Working Together</span>
             <h2 className="text-5xl md:text-8xl tracking-tight leading-[0.85] font-playfair italic">A Focused Process.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-32 text-left">
            {PROCESS.map(({ n, title, desc }) => (
              <div key={n} className="group relative">
                <span className="font-mono text-[11px] text-white/20 mb-10 block tracking-widest">[ {n} ]</span>
                <h3 className="text-3xl md:text-4xl tracking-tight leading-none mb-8 font-medium group-hover:text-[#C41E3D] transition-colors duration-500">
                  {title}
                </h3>
                <p className="text-white/30 leading-relaxed text-lg font-light max-w-[28ch] group-hover:text-white/60 transition-colors duration-500">
                  {desc}
                </p>
                <div className="mt-12 h-[1px] w-0 bg-[#C41E3D] group-hover:w-full transition-all duration-1000 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 02: CAPABILITIES & AURORA TRANSITION ─── */}
      <section className="relative bg-[#121212]">
        
        <AuroraTransition />

        {/* The Brand Surface (Creamy Foundation) */}
        <div className="relative z-20 bg-[#fdf5ef] text-[#121212] rounded-t-[5rem] px-[6%] pt-48 pb-32 md:pt-64 md:pb-48">
          <div className="max-w-[1700px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-32 md:gap-48 items-start pb-48 border-b border-[#121212]/5">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-[clamp(4rem,10vw,9.5rem)] tracking-tighter leading-[0.8] font-semibold mb-16">
                  Design that <br />
                  <span className="italic font-playfair font-normal text-[#C41E3D]">feels different.</span>
                </h2>
                <p className="text-[#121212]/30 text-2xl font-light leading-relaxed max-w-[20ch] mb-20 italic">
                  Crafting memorable digital experiences for the visionary.
                </p>
                <Link href="/contact" className="group relative inline-flex items-center gap-6 py-6 px-12 bg-[#121212] rounded-full text-white text-[12px] uppercase font-mono tracking-[0.3em] transition-all hover:scale-[1.03] active:scale-95 shadow-2xl hover:shadow-[#121212]/20">
                  Let&apos;s talk
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3D] animate-ping" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-32">
                {SERVICES.map(({ title, desc }, i) => (
                  <div key={title} className="group/item min-h-[220px] flex flex-col">
                    <div className="mb-10 flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.4em] opacity-20 uppercase">Stage 0{i+1}</span>
                      <div className="w-6 h-[1px] bg-[#121212]/10" />
                    </div>
                    <h3 className="text-3xl md:text-4xl tracking-tight leading-none font-medium mb-6 group-hover/item:text-[#C41E3D] transition-colors">
                      {title}
                    </h3>
                    <p className="opacity-40 leading-relaxed text-base font-medium">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <FooterBrand />
          </div>
        </div>
      </section>
    </main>
  )
}
