'use client'
import { useParams } from 'next/navigation'
import GlobalNavbar from '../../components/GlobalNavbar'
import FooterBrand from '../../components/FooterBrand'
import { getProjectScreenshots } from '../project-data'

type ProjectRecord = {
  title: string
  subtitle: string
  year: string
  summary: string
  challengeText: string
  outcomeText: string
  services: string[]
  stack: string[]
  quote?: string
  projectDemoUrl?: string
  highlights?: string[]
  focusAreas?: string[]
  toolsIncluded?: Array<{ name: string; path: string; detail: string }>
  demoFlow?: string[]
  runLocally?: string[]
  facts?: Array<{ label: string; value: string }>
  processLabels?: string[]
  images: string[]
  liveUrl?: string
}

type ProjectCopy = Omit<ProjectRecord, 'images'>

/** Narrative copy only — gallery files always come from `public/previews/<slug>/` via `getProjectScreenshots`. */
const PROJECT_COPY: Record<string, ProjectCopy> = {
  'j-worra': {
    title: 'J. Worra',
    subtitle: 'Digital Identity',
    year: '2026',
    summary: 'A bold artist platform crafted to match a high-energy creative spirit.',
    challengeText: 'The project demanded a digital home that felt personal and expressive without sacrificing technical performance.',
    outcomeText: 'A high-fidelity experience capturing her brand while driving engagement through motion-led storytelling.',
    services: ['Creative Direction', 'UI/UX Design', 'Engineering'],
    stack: ['Next.js', 'GSAP', 'Framer Motion'],
    liveUrl: 'https://jworra.com',
  },
  'l-affaire-musicale': {
    title: "L'Affaire Musicale",
    subtitle: 'Agency Rebrand',
    year: '2025',
    summary: 'Full rebrand capturing the agency\'s soul.',
    challengeText: 'Translating a music agency\'s identity into a cohesive digital presence.',
    outcomeText: 'Complete visual identity system and website that resonates with artists and clients.',
    services: ['Brand Identity', 'Web Design', 'Development'],
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    liveUrl: '#',
  },
  'sifs-utilities': {
    title: "Sif's Utilities",
    subtitle: 'Browser Utility Suite',
    year: '2026',
    summary: 'A multi-tool browser-first utility suite with one product language across image, video, PDF, metadata, and icon workflows.',
    challengeText: 'The real constraint was consistency: each tool needed its own controls and processing pipeline while still feeling like one ecosystem, especially on mobile where spacing, safe-areas, and touch targets can break fast.',
    outcomeText: 'The suite now delivers a low-friction flow from drop to tune to export, with mostly client-side processing for privacy-forward UX and theme-aware controls that stay coherent across every workspace.',
    services: ['Product Design', 'Design Systems', 'Frontend Engineering'],
    stack: ['Next.js App Router', 'React', 'TypeScript', 'GSAP', 'Framer Motion', 'Browser APIs'],
    quote: 'I treated Sif\'s Utilities like a product system, not a bag of tools: every route shares the same interaction DNA, but each workspace still feels purpose-built.',
    projectDemoUrl: '/sif/utils',
    highlights: [
      'Three visual modes: Classic, Liquid Glass, and Neo-brutal.',
      'Shared theming/chrome orchestration via lib/marketingChrome.ts.',
      'Global shell tokens and primitives grounded in app/globals.css.',
      'Route-level SEO hygiene with metadata, robots, and sitemap support.',
    ],
    focusAreas: [
      'Theme-aware controls in each utility workspace.',
      'Liquid-glass performance tuning for mobile and reduced-motion contexts.',
      'Responsive layouts for desktop creation flows and mobile quick actions.',
      'Minimal friction utility loop: drop file, tune controls, export.',
    ],
    toolsIncluded: [
      { name: 'PixSqueeze', path: '/pixsqueeze', detail: 'Image compression and format export.' },
      { name: 'VidSqueeze', path: '/vidsqueeze', detail: 'Browser-native video compression flow.' },
      { name: 'PDFPress', path: '/pdf-compressor', detail: 'PDF compression utility.' },
      { name: 'CircleCrop', path: '/circle-crop', detail: 'Circular image cropping workflow.' },
      { name: 'MetaShield', path: '/meta-shield', detail: 'Metadata cleaning for supported file types.' },
      { name: 'SynthClean', path: '/synth-strip', detail: 'Metadata cleaning plus optional spectral softening controls.' },
      { name: 'GrainPix', path: '/grain-pix', detail: 'Artistic grain controls with live preview.' },
      { name: 'IconSet', path: '/icon-set', detail: 'Icon pack generation from a source logo.' },
    ],
    demoFlow: [
      'Start at the landing page and switch between themes.',
      'Open /sif/utils to highlight cross-tool consistency.',
      'Demo PixSqueeze, GrainPix, and MetaShield to show different interaction models.',
      'Return to landing and take the view-all-tools path.',
    ],
    runLocally: ['npm install', 'npm run dev', 'npm run lint'],
    facts: [
      { label: 'Client', value: 'Siftion Internal Product' },
      { label: 'Industry', value: 'Creative Utility Software' },
      { label: 'Year', value: '2026' },
      { label: 'Role', value: 'Product Design + Frontend Engineering' },
    ],
    processLabels: ['App page', 'Theme system', 'Mobile workspaces', 'Tool consistency', 'Privacy-first flow', 'Selected website screens'],
    liveUrl: '#',
  },
  'qlo-agency': {
    title: 'QLO Agency',
    subtitle: 'Webflow Production',
    year: '2024–26',
    summary: 'Ongoing Webflow builds for a creative studio — responsive layouts, reusable components, and launch-ready polish.',
    challengeText: 'Turning fast-moving creative direction into maintainable, client-ready sites without sacrificing design fidelity.',
    outcomeText: 'A repeatable component workflow and SEO- and accessibility-minded pages shipped on a steady cadence.',
    services: ['Web Design', 'Webflow Development', 'SEO'],
    stack: ['Webflow', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
  },
  'wicked-paradise': {
    title: 'Wicked Paradise',
    subtitle: 'Sister Brand',
    year: '2025',
    summary: 'Festival-forward digital presence with a reusable Squarespace foundation for the Wicked Paradise universe.',
    challengeText: 'Scaling a distinct visual identity across events and campaigns while keeping updates fast for the team.',
    outcomeText: 'A template-driven site system that cuts build time while staying on-brand in the field.',
    services: ['Brand Systems', 'Web Design', 'Squarespace'],
    stack: ['Squarespace', 'CSS', 'JavaScript'],
    liveUrl: '#',
  },
  'clipkeep': {
    title: 'ClipKeep',
    subtitle: 'Clip vault',
    year: '2025',
    summary:
      'A bookmarking and organization app for short-form and social video — paste links from TikTok, Instagram, YouTube, and more, and ClipKeep pulls metadata (title, thumbnails, platform) so you can file clips into collections with search, favorites, and a mobile-first UI that uses either a sidebar or a bottom bar. Built like a small design-forward product, not a raw link list.',
    challengeText:
      'Normalizing different platforms into one filing model, keeping the experience fast on phones, and wiring Supabase plus pairing-style flows on top of the same “saved link + context” core without cluttering the interface.',
    outcomeText:
      'Next.js / TypeScript with Tailwind and Radix (light/dark, onboarding, modals), cloud storage via Supabase, and optional on-demand AI summaries (NVIDIA / OpenRouter) with a local fallback — all on the same saved-link foundation.',
    services: ['Product Design', 'Full-stack Engineering', 'UX'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Supabase', 'PostgreSQL', 'OpenRouter'],
    liveUrl: 'https://clipkeep.vercel.app',
  },
  'sam-blacky': {
    title: 'Sam Blacky',
    subtitle: 'Artist Platform',
    year: '2025',
    summary: 'Artist digital presence with custom Squarespace craft and performance in mind.',
    challengeText: 'Showcasing releases and tour energy in a site that stays fast on mobile and easy for the team to update.',
    outcomeText: 'A polished artist hub aligned with label workflows and ongoing content rhythm.',
    services: ['Web Design', 'Development'],
    stack: ['Squarespace', 'CSS', 'JavaScript'],
    liveUrl: '#',
  },
  'cherry-tooth': {
    title: 'Cherry Tooth',
    subtitle: 'Visual Identity',
    year: '2025',
    summary: 'Brand-forward web execution for Cherry Tooth — sharp visuals and a focused narrative.',
    challengeText: 'Carrying a strong visual identity into the browser without diluting attitude or legibility.',
    outcomeText: 'A cohesive on-site story with room to grow as releases and collaborations stack up.',
    services: ['Brand', 'Web Design', 'Development'],
    stack: ['Squarespace', 'CSS', 'JavaScript'],
    liveUrl: '#',
  },
}

const FALLBACK_COPY: ProjectCopy = {
  title: '',
  subtitle: 'Selected Work',
  year: '2026',
  summary: 'A detailed exploration of this project is coming soon.',
  challengeText: 'We are currently documenting the creative process.',
  outcomeText: 'Full results and insights will be published shortly.',
  services: ['Design', 'Engineering'],
  stack: ['Modern Web'],
  facts: [],
  processLabels: [],
  liveUrl: '#',
}

function resolveProject(slug: string): ProjectRecord {
  const images = getProjectScreenshots(slug)
  const base = PROJECT_COPY[slug]
  if (base) return { ...base, images }
  return {
    ...FALLBACK_COPY,
    title: slug.replace(/-/g, ' '),
    images,
  }
}

export default function ProjectDetail() {
  const params = useParams<{ projectName: string }>()
  const slug = params?.projectName || ''
  const project = resolveProject(slug)
  const showcaseImage = project.images.length > 1 ? project.images[1] : project.images[0]
  const isSifsUtilities = slug === 'sifs-utilities'

  return (
    <main className={`min-h-screen antialiased overflow-x-hidden font-sans ${isSifsUtilities ? 'bg-[#030303] selection:bg-[#ff76a2] selection:text-[#0c0c0c]' : 'bg-[#130502] selection:bg-[#b83a3a] selection:text-[#fff7f7]'}`}>
      <GlobalNavbar />
      
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className={`absolute inset-0 ${isSifsUtilities ? 'bg-gradient-to-t from-[#030303] via-[#030303]/70 to-transparent' : 'bg-gradient-to-t from-[#130502] via-[#130502]/80 to-transparent'}`} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-[8%] pb-16 md:pb-24">
          <div className="max-w-[1600px] mx-auto">
            {/* Meta line */}
            <div className="flex items-center gap-6 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#b83a3a] font-bold">
                {project.year}
              </span>
              <div className="h-px flex-1 max-w-[100px] bg-[#fff7f7]/10" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#fff7f7]/30">
                {project.subtitle}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-[clamp(3rem,12vw,10rem)] leading-[0.85] tracking-[-0.03em] font-light text-[#fff7f7]">
              {project.title}
            </h1>

            {isSifsUtilities && (
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.35em] text-[#ff76a2]">
                UX that changes how utility workflows are seen.
              </p>
            )}

            {/* Summary */}
            <p className="mt-8 text-xl md:text-2xl lg:text-3xl text-[#fff7f7]/50 max-w-2xl font-light leading-relaxed">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {isSifsUtilities ? (
        <>
          <section className="border-y border-[#ffffff1f] bg-[#030303]">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[8%] py-8 md:py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.facts?.map((fact) => (
                <article key={fact.label} className="rounded-2xl border border-[#ffffff22] bg-[#101010] px-4 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#ff76a2]">{fact.label}</p>
                  <p className="mt-2 text-[#fff7f7] text-sm md:text-base leading-tight">{fact.value}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="px-6 md:px-12 lg:px-[8%] py-16 md:py-24">
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-start">
              <div>
                <h2 className="text-[clamp(2rem,4.5vw,4rem)] leading-[0.95] tracking-[-0.03em] text-[#fff7f7] max-w-4xl">
                  UX that makes complex utility workflows feel instant.
                </h2>
                <p className="mt-6 text-base md:text-lg text-[#fff7f7]/60 leading-relaxed max-w-3xl">
                  {project.challengeText}
                </p>
                <p className="mt-5 text-base md:text-lg text-[#fff7f7]/60 leading-relaxed max-w-3xl">
                  {project.outcomeText}
                </p>
                <div className="mt-8 inline-flex items-center gap-4 rounded-full border border-[#ffffff24] px-5 py-3">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#ff76a2] uppercase">Let’s Connect</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff76a2]" />
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#ffffffa8] uppercase">Book Intro</span>
                </div>
              </div>

              <aside className="rounded-3xl border border-[#ffffff24] bg-[#0f0f0f] p-6 md:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#ff76a2]">Project Direction</p>
                <p className="mt-4 text-[#fff7f7]/75 leading-relaxed text-sm md:text-base">{project.quote}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.projectDemoUrl || '/'}
                    className="px-4 py-2.5 rounded-full bg-[#fff7f7] text-[#050505] font-mono text-[10px] uppercase tracking-[0.22em] hover:bg-[#ff76a2] hover:text-[#050505] transition-colors"
                  >
                    Open Utility Hub
                  </a>
                  <a
                    href="/projects"
                    className="px-4 py-2.5 rounded-full border border-[#ffffff3d] text-[#fff7f7] font-mono text-[10px] uppercase tracking-[0.22em] hover:border-[#ff76a2] hover:text-[#ff76a2] transition-colors"
                  >
                    More Cases
                  </a>
                </div>
              </aside>
            </div>
          </section>

          <section className="px-6 md:px-12 lg:px-[8%] pb-10 md:pb-14">
            <div className="max-w-[1600px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {project.processLabels?.map((label) => (
                <article key={label} className="rounded-2xl border border-[#ffffff1f] bg-[#0a0a0a] px-4 py-4">
                  <p className="text-[#fff7f7] text-sm md:text-base">{label}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="px-6 md:px-12 lg:px-[8%] pb-16 md:pb-24">
            <div className="max-w-[1600px] mx-auto">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#fff7f7]/45 mb-5">Selected Website Screens</h3>
              <div className="grid grid-cols-12 gap-4 md:gap-5">
                <article className="col-span-12 md:col-span-8">
                  <div className="rounded-3xl overflow-hidden border border-[#ffffff22] bg-[#0a0a0a]">
                    <img src={project.images[0]} alt={`${project.title} main screen`} className="w-full h-full object-cover aspect-[16/10]" />
                  </div>
                </article>
                <article className="col-span-12 md:col-span-4 space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="rounded-3xl overflow-hidden border border-[#ffffff22] bg-[#0f0f0f] relative">
                      <img src={project.images[0]} alt={`${project.title} detail screen ${i}`} className="w-full h-full object-cover aspect-[4/3] opacity-70" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
                    </div>
                  ))}
                </article>
              </div>
            </div>
          </section>

          <section className="px-6 md:px-12 lg:px-[8%] pb-16 md:pb-24">
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-8 md:gap-10">
              <article className="rounded-3xl border border-[#ffffff22] bg-[#0a0a0a] p-6 md:p-8">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#ff76a2]">Tool Ecosystem</h3>
                <div className="mt-5 space-y-4">
                  {project.toolsIncluded?.map((tool) => (
                    <div key={tool.name} className="pb-4 border-b border-[#ffffff1c] last:border-b-0 last:pb-0">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[#fff7f7] tracking-[-0.01em]">{tool.name}</p>
                        <span className="font-mono text-[10px] text-[#ff76a2]">{tool.path}</span>
                      </div>
                      <p className="mt-2 text-[#fff7f7]/55 text-sm leading-relaxed">{tool.detail}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border border-[#ffffff22] bg-[#101010] p-6 md:p-8">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#fff7f7]/35">Execution Flow</h3>
                <ol className="mt-5 space-y-3">
                  {project.demoFlow?.map((step, index) => (
                    <li key={step} className="text-[#fff7f7]/70 text-sm md:text-base leading-relaxed">
                      <span className="font-mono text-[#ff76a2] mr-2">{index + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>

                <h4 className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#fff7f7]/35 mt-8">Run Locally</h4>
                <div className="mt-4 space-y-2">
                  {project.runLocally?.map((cmd) => (
                    <p key={cmd} className="font-mono text-xs md:text-sm text-[#fff7f7]/80 rounded-xl border border-[#ffffff1f] bg-[#050505] px-3 py-2">
                      {cmd}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </section>

          <section className="px-6 md:px-12 lg:px-[8%] pb-16 md:pb-24">
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-8 md:gap-10">
              <article className="rounded-3xl border border-[#ffffff22] bg-[#0a0a0a] p-6 md:p-8">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#fff7f7]/35">Technical Highlights</h3>
                <ul className="mt-5 space-y-3">
                  {project.highlights?.map((item) => (
                    <li key={item} className="text-[#fff7f7]/70 text-sm md:text-base leading-relaxed">{item}</li>
                  ))}
                </ul>
              </article>
              <article className="rounded-3xl border border-[#ffffff22] bg-[#0a0a0a] p-6 md:p-8">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#fff7f7]/35">UX and Performance Focus</h3>
                <ul className="mt-5 space-y-3">
                  {project.focusAreas?.map((item) => (
                    <li key={item} className="text-[#fff7f7]/70 text-sm md:text-base leading-relaxed">{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* ─── SERVICES STRIP ─── */}
          <section className="border-y border-[#fff7f7]/5 py-12 md:py-16">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 px-6">
              {project.services.map((s, i) => (
                <div key={s} className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-[#b83a3a]">0{i + 1}</span>
                  <span className="text-sm md:text-base text-[#fff7f7]/70">{s}</span>
                </div>
              ))}
              <div className="hidden md:block h-4 w-px bg-[#fff7f7]/10" />
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-[#fff7f7] text-[#130502] font-mono text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-[#b83a3a] hover:text-[#fff7f7] transition-all"
              >
                View Live
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </section>

          {/* ─── TWO-COLUMN NARRATIVE ─── */}
          <section className="px-6 md:px-12 lg:px-[8%] py-24 md:py-40">
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32">
              {/* Left: Vision */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#fff7f7]/30">01</span>
                  <div className="h-px w-12 bg-[#b83a3a]" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff7f7] tracking-[-0.02em]">
                  The Vision
                </h2>
                <p className="text-lg md:text-xl text-[#fff7f7]/50 leading-relaxed">
                  {project.challengeText}
                </p>
              </div>

              {/* Right: Outcome */}
              <div className="space-y-8 lg:pt-32">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#fff7f7]/30">02</span>
                  <div className="h-px w-12 bg-[#b83a3a]" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff7f7] tracking-[-0.02em]">
                  The Outcome
                </h2>
                <p className="text-lg md:text-xl text-[#fff7f7]/50 leading-relaxed">
                  {project.outcomeText}
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ─── FULL-WIDTH IMAGE ─── */}
      <section className="px-6 md:px-12 lg:px-[8%] py-16 md:py-24">
        <div className="max-w-[1800px] mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[4rem] overflow-hidden bg-[#1a1a1a]">
            <img
              src={showcaseImage}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="px-6 md:px-12 lg:px-[8%] py-16 md:py-24 border-t border-[#fff7f7]/5">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#fff7f7]/30 block mb-4">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-3">
              {project.stack.map(s => (
                <span 
                  key={s} 
                  className="px-4 py-2 rounded-full border border-[#fff7f7]/10 text-sm text-[#fff7f7]/70 hover:border-[#b83a3a] hover:text-[#b83a3a] transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          
          {/* Back to projects */}
          <a
            href="/projects"
            className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#fff7f7]/50 hover:text-[#b83a3a] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M5 12L12 19M5 12L12 5"/>
            </svg>
            All Projects
          </a>
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
