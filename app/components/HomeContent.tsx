'use client'

import React from 'react'

export default function HomeContent() {
  return (
    <section className="bg-[#0b0b0b] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Metrics strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white/[0.02] rounded-lg border border-white/6 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-[var(--accent)]">–38%</div>
            <div className="mt-2 text-sm text-white/60">Average load‑time improvement</div>
          </div>
          <div className="p-6 bg-white/[0.02] rounded-lg border border-white/6 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-[var(--accent)]">+43%</div>
            <div className="mt-2 text-sm text-white/60">Typical increase in qualified inquiries</div>
          </div>
          <div className="p-6 bg-white/[0.02] rounded-lg border border-white/6 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-[var(--accent)]">2–5w</div>
            <div className="mt-2 text-sm text-white/60">Delivery window for portfolio projects</div>
          </div>
        </div>

        {/* Services grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-mono uppercase text-[#C41E3D] tracking-widest">Services</h3>
            <p className="text-sm text-white/60">Clear outcomes. Predictable delivery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/[0.02] rounded-xl border border-white/6">
              <h4 className="text-xl font-semibold">Portfolio redesign</h4>
              <p className="mt-3 text-white/70 text-sm">Refined messaging, prioritized content, and visual systems that convert the right clients.</p>
              <ul className="mt-4 text-white/50 text-sm space-y-2">
                <li>• Messaging audit</li>
                <li>• Design system & components</li>
                <li>• Performance remediation</li>
              </ul>
            </div>

            <div className="p-6 bg-white/[0.02] rounded-xl border border-white/6">
              <h4 className="text-xl font-semibold">New build</h4>
              <p className="mt-3 text-white/70 text-sm">End‑to‑end implementation: fast, maintainable, and built for scale.</p>
              <ul className="mt-4 text-white/50 text-sm space-y-2">
                <li>• Componentized frontend</li>
                <li>• Accessibility & SEO baseline</li>
                <li>• Documented handoff</li>
              </ul>
            </div>

            <div className="p-6 bg-white/[0.02] rounded-xl border border-white/6">
              <h4 className="text-xl font-semibold">Performance & maintenance</h4>
              <p className="mt-3 text-white/70 text-sm">Audits, prioritized fixes, and a short maintenance plan to keep momentum.</p>
              <ul className="mt-4 text-white/50 text-sm space-y-2">
                <li>• Lighthouse remediation</li>
                <li>• Ongoing retainer options</li>
                <li>• Analytics-driven iterations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Featured case studies */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-mono uppercase text-[#C41E3D] tracking-widest">Featured case studies</h3>
            <Link href="/projects" className="text-sm text-white/60 underline">View all projects</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="/projects/j-worra" className="block p-6 rounded-xl bg-white/[0.02] border border-white/6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <img src="/previews/j-worra/screenshot-1.webp" alt="J. Worra preview" className="w-36 h-24 object-cover rounded-md" />
                <div>
                  <h4 className="text-xl font-semibold">J. Worra — Web identity</h4>
                  <p className="mt-2 text-white/70 text-sm">Visual identity and site for an LA artist; cleaner content structure and performance improvements that reduced load times by ~40%.</p>
                </div>
              </div>
            </a>

            <a href="/projects/sifs-utilities" className="block p-6 rounded-xl bg-white/[0.02] border border-white/6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <img src="/previews/sifs-utilities/screenshot-1.webp" alt="Sif's Utilities preview" className="w-36 h-24 object-cover rounded-md" />
                <div>
                  <h4 className="text-xl font-semibold">Sif's Utilities — Privacy-first tools</h4>
                  <p className="mt-2 text-white/70 text-sm">Design and frontend engineering for a high-performance in-browser toolset focused on privacy and UX clarity.</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Logos row */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-mono uppercase text-[#C41E3D] tracking-widest">Trusted by</h3>
            <div className="text-sm text-white/60">Select collaborators</div>
          </div>
          <div className="flex items-center gap-8 flex-wrap">
            <img src="/previews/logos/logo-1.svg" alt="Client logo 1" className="h-8 opacity-80" onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} />
            <img src="/previews/logos/logo-2.svg" alt="Client logo 2" className="h-8 opacity-80" onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} />
            <img src="/previews/logos/logo-3.svg" alt="Client logo 3" className="h-8 opacity-80" onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} />
            <img src="/previews/logos/logo-4.svg" alt="Client logo 4" className="h-8 opacity-80" onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} />
          </div>
        </div>

        {/* About + CTA */}
        <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-sm font-mono uppercase text-[#C41E3D] tracking-widest">About</h3>
            <h4 className="mt-4 text-3xl font-semibold">I build clear, performant digital products</h4>
            <p className="mt-4 text-white/70">I’m Sifat Bhatia — a design engineer in Los Angeles. I combine product‑grade frontend engineering with refined visual design to build sites that perform and scale. I prioritize clarity, maintainability, and measurable outcomes.</p>
          </div>
          <div className="bg-white/[0.02] p-6 rounded-xl border border-white/6">
            <h4 className="font-semibold">Book a 15‑minute roadmap</h4>
            <p className="mt-3 text-white/70 text-sm">Align goals, scope, and first deliverables so the project starts with clear outcomes.</p>
            <a href="/contact" className="inline-block mt-4 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold">Request a session</a>
          </div>
        </div>

        {/* FAQ & Newsletter compact */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-mono uppercase text-[#C41E3D] tracking-widest">FAQ</h3>
            <div className="mt-4 space-y-3">
              <details className="p-4 bg-white/[0.02] rounded-lg border border-white/6">
                <summary className="cursor-pointer">How long does a project take?</summary>
                <p className="mt-2 text-white/70 text-sm">Most portfolio projects complete in 2–5 weeks depending on scope and content readiness.</p>
              </details>
              <details className="p-4 bg-white/[0.02] rounded-lg border border-white/6">
                <summary className="cursor-pointer">Do you handle both design and development?</summary>
                <p className="mt-2 text-white/70 text-sm">Yes — strategy, visual design, and frontend implementation are managed end‑to‑end to reduce handoff friction.</p>
              </details>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono uppercase text-[#C41E3D] tracking-widest">Newsletter</h3>
            <p className="mt-4 text-white/70">Monthly notes on design and performance — 1–2 emails a month. No spam.</p>
            <form action="/api/newsletter" method="post" className="mt-4 flex max-w-md">
              <input name="email" type="email" placeholder="you@company.com" className="flex-1 rounded-l-lg border border-white/10 bg-transparent px-4 py-2 text-white/90" required />
              <button type="submit" className="rounded-r-lg bg-[var(--accent)] px-4 py-2 font-semibold">Join</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
