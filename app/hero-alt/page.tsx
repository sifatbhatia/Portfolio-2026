import Link from 'next/link'
import HeroAlt from '../components/HeroAlt'
import FooterBrand from '../components/FooterBrand'
import AuroraTransition from '../components/AuroraTransition'

export const metadata = {
  title: 'Siftion Studio — Redefining Digital Excellence',
}

const PROCESS = [
  { n: '01', title: 'Listening', desc: "Deeply understanding your story, your audience, and the impact you want to make." },
  { n: '02', title: 'Creative Path', desc: "Crafting a bespoke visual language—typography, color, and motion that tell your story." },
  { n: '03', title: 'Launch', desc: 'Precision building with clean, fast code and thorough testing for a flawless debut.' },
]

const SERVICES = [
  { title: 'Brand Story', desc: "Forging a distinctive visual narrative through motion systems and core aesthetics." },
  { title: 'Web Experience', desc: 'Crafting high-fidelity digital homes from conceptual strategy to final deployment.' },
  { title: 'Partnership', desc: "Long-term collaboration for strategic growth, performance optimization, and creative care." },
  { title: 'Performance', desc: "Engineering high-speed, accessible interfaces that command attention and drive results." },
]

export default function HeroAltPage() {
  return (
    <main className="bg-[#130502] antialiased overflow-x-hidden min-h-screen selection:bg-[#b83a3a] selection:text-white">
      {/* ─── Hero Boundary ─── */}
      <div className="bg-white">
        <HeroAlt />
      </div>

      {/* ─── SECTION 01: THE APPROACH ─── */}
      <section className="px-6 md:px-12 lg:px-[6%] py-20 md:py-32 lg:py-48 bg-[#130502] text-white relative flex flex-col items-center text-center">
        <div className="max-w-[1200px] w-full relative z-20">
          <div className="flex flex-col items-center gap-8 mb-24 md:mb-32">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#b83a3a] italic">Working Together</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.85] font-playfair italic">A Focused Process.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 text-left">
            {PROCESS.map(({ n, title, desc }) => (
              <div key={n} className="group relative">
                <span className="font-mono text-[10px] md:text-[11px] text-white/40 mb-6 md:mb-8 block tracking-widest">[ {n} ]</span>
                <h3 className="text-xl md:text-3xl tracking-tight leading-none mb-6 font-medium group-hover:text-[#b83a3a] transition-colors duration-500">
                  {title}
                </h3>
                <p className="text-white/75 leading-relaxed text-sm md:text-lg font-light max-w-[28ch] group-hover:text-white/85 transition-colors duration-500">
                  {desc}
                </p>
                <div className="mt-8 md:mt-12 h-px w-0 bg-[#b83a3a] group-hover:w-full transition-all duration-1000 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 02: CAPABILITIES & AURORA TRANSITION ─── */}
      <section className="relative bg-[#130502]">
        <AuroraTransition />
        {/* The Brand Surface (Creamy Foundation) */}
        <div className="relative z-20 bg-[#fff7f7] text-[#130502] rounded-t-[5rem] px-6 md:px-12 lg:px-[6%] pt-32 md:pt-48 pb-24 md:pb-32">
          <div className="max-w-[1700px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 md:gap-32 items-start pb-32 md:pb-48 border-b border-[#130502]/5">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.8] font-semibold mb-12">
                  Design that <br />
                  <span className="italic font-playfair font-normal text-[#b83a3a]">feels different.</span>
                </h2>
                <p className="text-[#130502]/50 text-lg md:text-xl font-light leading-relaxed max-w-[20ch] mb-16 italic">
                  Crafting memorable digital experiences for the visionary.
                </p>
                <Link href="/contact" className="group relative inline-flex items-center gap-4 md:gap-6 py-8 md:py-10 px-10 md:px-12 bg-[#130502] rounded-full text-white text-[10px] md:text-[11px] uppercase font-mono tracking-[0.3em] md:tracking-[0.4em] transition-all hover:scale-[1.03] active:scale-95 shadow-2xl hover:shadow-[#130502]/20 hover:bg-[#b83a3a]">
                  Let&apos;s talk
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#b83a3a] group-hover:bg-white animate-ping" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-24 md:gap-y-32">
                {SERVICES.map(({ title, desc }, i) => (
                  <div key={title} className="group/item min-h-[220px] flex flex-col">
                    <div className="mb-8 md:mb-10 flex items-center justify-between">
                      <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] opacity-20 uppercase">Stage 0{i+1}</span>
                      <div className="w-6 h-px bg-[#130502]/10" />
                    </div>
                    <h3 className="text-xl md:text-3xl tracking-tight leading-none mb-4 md:mb-6 group-hover/item:text-[#b83a3a] transition-colors">
                      {title}
                    </h3>
                    <p className="opacity-50 leading-relaxed text-sm md:text-base font-medium">
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
