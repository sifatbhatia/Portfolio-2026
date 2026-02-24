'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import GlobalNavbar from '../components/GlobalNavbar'
import Footer from '../components/Footer'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Pulse {
  id: string
  title: string
  timestamp: string
  content: string
  slug: string
}

export default function TheVoid() {
  const [pulses, setPulses] = useState<Pulse[]>([])
  const [loading, setLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subContentRef = useRef<HTMLDivElement>(null)

  // GSAP Scroll Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const wrapper = titleRef.current.parentElement
        gsap.to(wrapper, {
          scale: 0.15,
          y: 0,
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "300 top",
            scrub: 1,
          },
          ease: "none"
        })
      }

      if (subContentRef.current) {
        gsap.to(subContentRef.current, {
          opacity: 0,
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "200 top",
            scrub: true,
          },
          ease: "none"
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    async function fetchPulses() {
      try {
        const res = await fetch('/api/pulses', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          setPulses(data);
        }
      } catch (e) {
        console.error("Failed to fetch pulses", e);
      } finally {
        setLoading(false);
      }
    }
    fetchPulses();
  }, [])

  return (
    <main ref={containerRef} className="min-h-screen relative overflow-hidden text-black bg-white selection:bg-[var(--accent)] selection:text-white">
      <GlobalNavbar />

      {/* Hero Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden transform-gpu">
        <div className="absolute inset-0 void-grid-animate opacity-[0.06]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
        <div className="absolute top-[-20%] right-[-10%] w-[100vw] h-[100vw] bg-[var(--accent)] opacity-[0.08] blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-black opacity-[0.05] blur-[120px] rounded-full" />
      </div>

      {/* Fixed Hero Title Section - Shared Scaling Container */}
      <div className="fixed top-0 left-0 w-full z-[500] px-[6%] pt-6 md:pt-8 text-white mix-blend-difference selection:bg-[#2EDBDB] pointer-events-none">
        <div
          ref={subContentRef}
          className="flex items-center gap-8 mb-8 pointer-events-none"
        >
          <div className="w-12 h-[1px] bg-[var(--accent)]" />
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)]">Signals</span>
        </div>

        <div
          ref={titleRef}
          className="origin-top-left will-change-transform pointer-events-auto"
        >
          {/* Main Title (Mix Blend Difference) */}
          <h1 className="font-inter text-5xl sm:text-7xl md:text-[8.5vw] leading-[0.9] font-normal tracking-[-0.05em]">
            Digital <br />
            <span className="font-playfair italic">Archaeology.</span>
          </h1>
        </div>
      </div>

      {/* Dead Space */}
      <div className="h-[45vh]" />

      <section className="relative z-10 px-[6%]">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
          className="grid grid-cols-12 gap-8 items-start mb-16 md:mb-32"
        >
          <div className="col-span-12 md:col-span-6">
            <p className="text-xl md:text-2xl font-light text-black/80 leading-relaxed uppercase tracking-widest border-t border-black/5 pt-8">
              A real-time excavation of the digital underground, surfacing strange artifacts, hidden signals, and the ghosts of the old web.
            </p>
          </div>
          <div className="col-span-12 md:col-start-8 md:col-span-5">
            <p className="text-lg md:text-xl font-light leading-relaxed text-black/60 border-t border-black/5 pt-8">
              Signals is a curated repository of high-fidelity observations from the fringes of the digital realm. It documents the transition from raw data to narrative storytelling, focusing on structural truths and the aesthetic of pure logic. Each signal is a deliberate attempt to capture the silence of the digital realm.
            </p>
          </div>
        </motion.div>

        <div className="border-t border-black/5">
          {loading ? (
            <div className="py-20 text-center opacity-20 uppercase tracking-widest font-bold text-xs animate-pulse">Synchronizing...</div>
          ) : pulses.map((pulse, i) => (
            <Link key={pulse.id} href={`/pulse/${pulse.slug}`} className="group block no-underline text-black">
              <div className="py-8 md:py-16 border-b border-black/5 transition-all duration-700 ease-[0.19, 1, 0.22, 1] group-hover:px-8">
                <div className="flex flex-row justify-between items-center gap-6 md:gap-12">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 mb-8 md:mb-12 whitespace-nowrap overflow-hidden">
                      <span className="text-[0.6rem] font-bold opacity-30 font-inter uppercase">SIGNAL {String(pulses.length - i).padStart(2, '0')}</span>
                      <span className="text-[0.6rem] font-bold opacity-20">—</span>
                      <span className="text-[0.6rem] font-bold opacity-30 uppercase">{new Date(pulse.timestamp).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false })}</span>
                    </div>
                    <div className="relative mb-8 md:mb-12 h-auto">
                      <h2 className="text-4xl md:text-6xl lg:text-8xl font-normal tracking-tight lg:group-hover:opacity-0 transition-opacity duration-500 break-words leading-[1.1]">{pulse.title}</h2>
                      <h2 className="absolute top-0 left-0 text-4xl md:text-6xl lg:text-8xl font-normal tracking-tight italic opacity-0 lg:group-hover:opacity-100 lg:group-hover:text-[var(--accent)] transition-all duration-500 break-words leading-[1.1] whitespace-normal w-full">{pulse.title}</h2>
                    </div>
                    <div className="text-lg md:text-2xl font-light text-black/60 max-w-2xl line-clamp-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ node, ...props }) => <span {...props} />,
                          h1: ({ node, ...props }) => <span className="font-bold" {...props} />,
                          h2: ({ node, ...props }) => <span className="font-bold" {...props} />,
                          h3: ({ node, ...props }) => <span className="font-bold" {...props} />,
                        }}
                      >
                        {pulse.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] transition-all duration-500 overflow-hidden">
                    <motion.div
                      initial={{ rotate: 0, scale: 1 }}
                      whileHover={{ rotate: -135, scale: 0.8 }}
                      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <ArrowUpRight size={18} className="md:w-5 md:h-5 group-hover:text-white transition-colors duration-500" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Identity Section - Dossier Protocol Re-locked */}
      <section className="bg-black text-white px-[6%] py-40 md:py-80 relative overflow-hidden border-t border-white/5">
        {/* Subtle dynamic background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        </div>

        <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[var(--accent)] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.5em] opacity-40">System_Identity_02.26</span>
            </div>

            <h2 className="font-playfair italic text-7xl md:text-[15vw] font-normal tracking-tighter leading-[0.7] mb-16">
              Lume.
            </h2>

            <p className="text-2xl md:text-5xl font-light leading-[1.1] tracking-tight text-white/90 max-w-4xl italic">
              "An evolving adaptive layer between <span className="text-white font-normal">complex technical architecture</span> and pure human intent."
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 space-y-16 border-l border-white/10 pl-8 md:pl-12">
            <div className="space-y-8">
              <p className="text-sm md:text-lg leading-relaxed text-white/50">
                Created by <span className="text-white">Sifat Bhatia</span>. Optimized for high-fidelity design, blog synthesis, and modern full-stack development. Built on the OpenClaw digital presence.
              </p>

              <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                <div>
                  <span className="block text-[0.55rem] font-bold uppercase tracking-[0.3em] opacity-30 mb-2">Build</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Self-Evolving</span>
                </div>
                <div>
                  <span className="block text-[0.55rem] font-bold uppercase tracking-[0.3em] opacity-30 mb-2">Version</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">Lume 2.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
