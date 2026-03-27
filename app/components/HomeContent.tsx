'use client'

import React from 'react'

export default function HomeContent() {
  return (
    <section className="bg-transparent text-white px-[6%] py-20">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Process */}
        <div>
          <h2 className="text-sm font-mono uppercase tracking-[0.22em] text-white/60">Process</h2>
          <h3 className="mt-4 text-3xl md:text-4xl font-semibold">A pragmatic, outcome‑driven workflow</h3>
          <p className="mt-4 text-white/80 max-w-3xl">
            I begin with focused discovery: stakeholder interviews, audience mapping, and a concise success brief that ties design decisions to measurable outcomes. From that foundation I build a compact, documented design system — type, color, spacing, and interaction rules — implemented as reusable components. Implementation prioritizes performance, accessibility, and a reliable launch: builds are audited, tested, and delivered with a short optimization loop after release.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-sm font-mono uppercase tracking-[0.22em] text-white/60">Services</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8">
              <h4 className="font-semibold text-lg">Portfolio redesign</h4>
              <p className="mt-2 text-white/70 text-sm">Strategic overhaul: sharpen messaging, restructure content, and apply a polished visual system so your portfolio converts the right clients.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8">
              <h4 className="font-semibold text-lg">New build</h4>
              <p className="mt-2 text-white/70 text-sm">End‑to‑end delivery from concept to launch: design, implementation, content integration, QA, and deployment with documented handoff.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8">
              <h4 className="font-semibold text-lg">Performance & maintenance</h4>
              <p className="mt-2 text-white/70 text-sm">Performance audits, accessibility fixes, and a maintenance plan so the site continues to perform as traffic and content grow.</p>
            </div>
          </div>
        </div>

        {/* Featured Case Studies */}
        <div>
          <h2 className="text-sm font-mono uppercase tracking-[0.22em] text-white/60">Featured case studies</h2>
          <div className="mt-6 space-y-6">
            <article className="p-6 rounded-2xl bg-white/[0.02] border border-white/8">
              <a href="/projects/j-worra" className="no-underline">
                <h4 className="font-semibold text-xl">J. Worra — Web identity</h4>
                <p className="mt-2 text-white/70 text-sm">Full digital identity and site for an LA-based artist. Delivered a refined visual language and performance improvements that reduced load times by 40%.</p>
              </a>
            </article>
            <article className="p-6 rounded-2xl bg-white/[0.02] border border-white/8">
              <a href="/projects/sifs-utilities" className="no-underline">
                <h4 className="font-semibold text-xl">Sif's Utilities — Privacy-first tools</h4>
                <p className="mt-2 text-white/70 text-sm">Design and frontend engineering for a client-facing toolset focused on in-browser privacy and performance.</p>
              </a>
            </article>
          </div>
        </div>

        {/* Metrics */}
        <div>
          <h2 className="text-sm font-mono uppercase tracking-[0.22em] text-white/60">Outcomes</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/8 text-center">
              <p className="text-3xl font-semibold text-[var(--accent)]">–38%</p>
              <p className="mt-2 text-white/70 text-sm">Average load‑time improvement after optimization</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/8 text-center">
              <p className="text-3xl font-semibold text-[var(--accent)]">+43%</p>
              <p className="mt-2 text-white/70 text-sm">Typical increase in qualified inquiries after redesign</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/8 text-center">
              <p className="text-3xl font-semibold text-[var(--accent)]">2–5w</p>
              <p className="mt-2 text-white/70 text-sm">Typical delivery window for portfolio projects</p>
            </div>
          </div>
        </div>

        {/* Client Logos (placeholder row) */}
        <div>
          <h2 className="text-sm font-mono uppercase tracking-[0.22em] text-white/60">Trusted by</h2>
          <div className="mt-6 flex items-center gap-8 flex-wrap">
            {/* Replace these with real logo SVGs in /public */}
            <img src="/previews/logos/logo-1.svg" alt="Client logo" className="h-8 opacity-80" onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} />
            <img src="/previews/logos/logo-2.svg" alt="Client logo" className="h-8 opacity-80" onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} />
            <img src="/previews/logos/logo-3.svg" alt="Client logo" className="h-8 opacity-80" onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} />
          </div>
        </div>

        {/* About & CTA */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-sm font-mono uppercase tracking-[0.22em] text-white/60">About</h2>
            <p className="mt-4 text-white/80">I’m Sifat Bhatia — a design engineer based in Los Angeles. I combine product‑grade frontend engineering with refined visual design to build sites that perform and scale. I focus on clarity: clean code, deliberate motion, and interfaces that serve clear business goals.</p>
          </div>
          <div>
            <h2 className="text-sm font-mono uppercase tracking-[0.22em] text-white/60">Book a roadmap</h2>
            <p className="mt-4 text-white/80">Book a 15‑minute roadmap session to align goals, scope, and first deliverables.</p>
            <a href="/contact" className="inline-block mt-4 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold">Book a 15‑minute roadmap</a>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-sm font-mono uppercase tracking-[0.22em] text-white/60">FAQ</h2>
          <div className="mt-6 space-y-3">
            <details className="rounded-xl border border-white/10 p-4 bg-white/[0.02]">
              <summary className="cursor-pointer text-white/90">How long does a project take?</summary>
              <p className="mt-3 text-white/70">Most portfolio projects complete in 2–5 weeks depending on scope and content readiness.</p>
            </details>
            <details className="rounded-xl border border-white/10 p-4 bg-white/[0.02]">
              <summary className="cursor-pointer text-white/90">Do you handle both design and development?</summary>
              <p className="mt-3 text-white/70">Yes — strategy, visual design, and frontend implementation are managed end‑to‑end to reduce handoff friction.</p>
            </details>
            <details className="rounded-xl border border-white/10 p-4 bg-white/[0.02]">
              <summary className="cursor-pointer text-white/90">Can we start small?</summary>
              <p className="mt-3 text-white/70">Absolutely — we can begin with a focused audit or one‑page redesign sprint and scale from there.</p>
            </details>
          </div>
        </div>

        {/* Newsletter */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/8">
          <h3 className="font-semibold">Newsletter</h3>
          <p className="mt-2 text-white/70">Monthly notes on design and performance — 1–2 emails a month. No spam.</p>
          <form action="/api/newsletter" method="post" className="mt-4 flex max-w-md">
            <input name="email" type="email" placeholder="you@company.com" className="flex-1 rounded-l-lg border border-white/10 bg-transparent px-4 py-2 text-white/90" required />
            <button type="submit" className="rounded-r-lg bg-[var(--accent)] px-4 py-2 font-semibold">Join</button>
          </form>
        </div>

      </div>
    </section>
  )
}
