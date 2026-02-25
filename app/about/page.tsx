'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import GlobalNavbar from '../components/GlobalNavbar'
import Footer from '../components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const CAPABILITIES = [
  {
    category: 'Product Design',
    items: ['Art Direction', 'UI/UX Design', 'Visual Identity', 'Typography', 'Design Systems', 'Motion Design', 'Interactive Prototypes']
  },
  {
    category: 'Core Engineering',
    items: ['Next.js / React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Performance Optimization', 'Wasm Integration', 'API Architecture']
  },
  {
    category: 'Creative Tech',
    items: ['WebGL / Three.js', 'GSAP Animation', 'Framer Motion', 'Shader Development', 'Dynamic Visualization', 'Generative Art']
  }
]

const PRESS = [
  { name: 'Voyage LA', type: 'Interview', url: 'https://voyagela.com/interview/meet-sifat-bhatia-of-los-angeles/' },
  { name: 'Shoutout LA', type: 'Interview', url: 'https://shoutoutla.com/meet-sifat-bhatia-web-designer-developer/' },
  { name: 'Bold Journey', type: 'Interview', url: 'https://boldjourney.com/meet-sifat-bhatia' },
  { name: 'CanvasRebel', type: 'Coming Soon', url: '#' },
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  // Responsive scale: bigger minimum on mobile, smaller on desktop
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // GSAP Scroll Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const wrapper = titleRef.current.parentElement
        gsap.to(wrapper, {
          scale: isMobile ? 0.55 : 0.18,
          y: 0,
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "200 top",
            scrub: 1,
          },
          ease: "none"
        })
      }

    }, containerRef)

    return () => ctx.revert()
  }, [isMobile])

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-[var(--accent)] selection:text-white relative">
      <GlobalNavbar />

      {/* Hero Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      {/* Fixed Hero Title Section */}
      <div className="fixed top-0 left-0 w-full z-[500] px-[6%] pt-6 md:pt-8 text-white mix-blend-difference selection:bg-[#2EDBDB] pointer-events-none">

        <div className="origin-top-left will-change-transform pointer-events-auto">
          <h1
            ref={titleRef}
            className="font-inter text-5xl sm:text-7xl md:text-[8.5vw] leading-[0.9] font-normal tracking-[-0.05em]"
          >
            Design <br />
            <span className="font-playfair italic">Metamorphosis.</span>
          </h1>
        </div>
      </div>

      {/* Dead Space */}
      <div className="h-[40vh] md:h-[60vh]" />

      <section className="relative z-10 px-[6%] pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            >
              <p className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-black mb-16">
                Sifat Bhatia is a Los Angeles-based <span className="italic font-playfair">design engineer</span> whose work exists at the intersection of visual logic and technical precision.
              </p>
              <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-black/60 max-w-2xl">
                <p>
                  My journey began with sketches in notebooks and a fascination for how technology could amplify artistic expression. Today, that curiosity has evolved into a specialization in high-fidelity digital experiences that prioritize structural logic and visual atmosphere.
                </p>
                <p>
                  Operating through <span className="text-black font-normal">Siftion</span> (pronounced "sif-chun"), I partner with industry-leading artists and brands like <span className="text-black font-normal">J. Worra</span>, <span className="text-black font-normal">Miss Dre</span>, and <span className="text-black font-normal">Wicked Paradise</span> to transform abstract visions into functional, animated interfaces.
                </p>
                <p>
                  What sets my work apart is an unwavering focus on <span className="italic font-playfair text-black">feel</span>. I believe a digital presence should be more than just a collection of features—it should be a cohesive narrative defined by motion, clarity, and intentional structure.
                </p>
              </div>
            </motion.div>

            {/* Press Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            >
              <span className="block text-[0.6rem] font-bold opacity-30 uppercase tracking-[0.4em] mb-10">Press & Features</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {PRESS.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block group border-l border-black/10 pl-6 no-underline text-black transition-all ${item.url === '#' ? 'pointer-events-none opacity-50' : 'hover:border-[var(--accent)]'}`}
                  >
                    <span className="text-[0.6rem] font-bold uppercase tracking-widest opacity-30 block mb-2">{item.type}</span>
                    <h4 className="text-xl md:text-2xl font-normal tracking-tight group-hover:italic group-hover:text-[var(--accent)] transition-all">
                      {item.name}
                    </h4>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Expanded Capabilities Section */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="border-t border-black/10 pt-8">
              <span className="block text-[0.6rem] font-bold opacity-30 uppercase tracking-[0.4em] mb-12">Capabilities</span>

              <div className="space-y-16">
                {CAPABILITIES.map((group) => (
                  <div key={group.category} className="group">
                    <h3 className="text-[0.6rem] font-black uppercase tracking-widest text-[var(--accent)] mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                      {group.category}
                    </h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {group.items.map((item) => (
                        <li key={item} className="text-sm md:text-base font-medium uppercase tracking-tight flex justify-between items-center group/item border-b border-black/5 pb-2">
                          <span className="group-hover/item:pl-2 transition-all duration-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
