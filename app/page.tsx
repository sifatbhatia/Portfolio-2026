import Link from 'next/link'
import HeroAlt from './components/HeroAlt'
import FooterBrand from './components/FooterBrand'

export const metadata = {
  title: 'Sifat Bhatia — Design Engineer | Strategy & Engineering for Visionary Brands',
}

const PROJECTS = [
  { num: '01', name: 'J. Worra', category: 'Artist platform', desc: 'Front-end redesign with GSAP & Framer — ongoing since 2021', awards: ['Awwwards x 1'] },
  { num: '02', name: "L'Affaire Musicale", category: 'Label & roster', desc: 'Brand systems, Squarespace builds, and performance for 12+ artist sites', awards: ['CSSDA x 2'] },
  { num: '03', name: 'QLO Agency', category: 'Webflow (contract)', desc: 'Monthly client sites — responsive layouts, components, SEO & WCAG-minded delivery', awards: [] },
  { num: '04', name: 'Wicked Paradise', category: 'Sister brand', desc: 'Reusable Squarespace template and festival-forward digital presence', awards: [] },
  { num: '05', name: 'ClipKeep', category: 'Product', desc: 'Vault for social clips — paste links, collections & search; Next.js + Supabase, design-forward UI, optional AI summaries', awards: [] },
]

export default function Home() {
  return (
    <main className="bg-[#130502] antialiased min-h-screen selection:bg-[#b83a3a] selection:text-[#fff7f7] font-sans">
      {/* ─── HERO ─── */}
      <div className="bg-[#130502] overflow-x-hidden">
        <HeroAlt />
      </div>

      {/* ─── WORK SECTION ─── */}
      <section className="relative bg-[#130502] pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
            {/* Intro — stays visible while scrolling projects on large screens */}
            <div className="lg:sticky lg:top-28 lg:max-w-xl">
              <h2 className="text-[clamp(3rem,10vw,8rem)] leading-[0.85] font-light text-[#fff7f7] tracking-[-0.03em] mb-8">
                Work
                <span className="inline-block ml-4 text-[#b83a3a]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </h2>
              <p className="text-base md:text-lg text-[#fff7f7]/40 max-w-xl leading-relaxed">
                Los Angeles–based design engineer with 6+ years shipping Next.js and React for artists, labels, and teams — plus full-stack and AI-integrated products when the brief needs it. Performance, accessibility, and SEO are part of the build, not a late pass.
              </p>
              <div className="mt-8 text-xs font-mono text-[#fff7f7]/20 tracking-widest">
                ©2019-26
              </div>
            </div>

            {/* Project List */}
            <ul className="space-y-1 min-w-0">
              {PROJECTS.map(({ num, name, category, desc, awards }) => (
                <li key={num}>
                  <Link
                    href={`/projects/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="group block py-8 md:py-10 border-t border-[#fff7f7]/5 hover:border-[#b83a3a]/30 transition-colors"
                  >
                    <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-center">
                      <div className="font-mono text-[10px] text-[#fff7f7]/20 tracking-widest md:col-span-1">
                        {num}
                      </div>
                      <div className="md:col-span-5 lg:col-span-6">
                        <div className="text-sm text-[#fff7f7]/50 mb-2 group-hover:text-[#fff7f7]/70 transition-colors">
                          {desc}
                        </div>
                        {awards.length > 0 && (
                          <div className="flex gap-4 text-[10px] font-mono text-[#b83a3a]/60">
                            {awards.map(a => <div key={a}>{a}</div>)}
                          </div>
                        )}
                      </div>
                      <div className="md:col-span-4 lg:col-span-3 md:text-right">
                        <h3 className="text-2xl md:text-3xl font-normal text-[#fff7f7] group-hover:text-[#b83a3a] transition-colors tracking-[-0.02em]">
                          {name}
                        </h3>
                        <div className="text-sm text-[#fff7f7]/30 mt-1">
                          {category}
                        </div>
                      </div>
                      <div className="hidden md:flex md:col-span-2 lg:col-span-2 justify-end">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#fff7f7]/10 group-hover:text-[#b83a3a] transition-colors">
                          <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <section className="relative">
        <div className="relative z-30 rounded-t-[5rem] bg-[#fff7f7] shadow-[-30px_0_120px_rgba(0,0,0,0.6)]">
          <FooterBrand />
        </div>
      </section>
    </main>
  )
}
