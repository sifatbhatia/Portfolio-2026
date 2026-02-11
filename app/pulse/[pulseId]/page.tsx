'use client'

export const runtime = 'edge'

import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import GlobalNavbar from '../../components/GlobalNavbar'
import Footer from '../../components/Footer'
import { useLenis } from 'lenis/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PulseData {
  title: string
  content: string
  timestamp: string
  integrity: string
  resonance: string
  atmosphere?: string
  prompt?: string
  slug: string
}

export default function PulseDetail() {
  const params = useParams()
  const slug = params.pulseId as string
  const [pulse, setPulse] = useState<PulseData | null>(null)
  const [pulses, setPulses] = useState<PulseData[]>([])
  const [loading, setLoading] = useState(true)
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const lenis = useLenis()

  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scaleHero = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const yHero = useTransform(scrollYProgress, [0, 0.5], [0, 50])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [slug, lenis])

  useEffect(() => {
    async function fetchPulse() {
      try {
        const res = await fetch('/api/pulses')
        if (res.ok) {
          const data = await res.json()
          setPulses(data)
          const matched = data.find((p: any) => p.slug === slug)
          if (matched) setPulse(matched)
        }
      } catch (e) { console.error(e) } finally { setLoading(false) }
    }
    fetchPulse()
  }, [slug])

  // Puter image generation
  useEffect(() => {
    if (pulse?.prompt && !generatedImageUrl && !isGenerating) {
      const generateImage = async () => {
        // @ts-ignore
        if (window.puter && !window.puter.auth?.isSignedIn()) return
        setIsGenerating(true)
        try {
          // @ts-ignore
          if (window.puter) {
            // @ts-ignore
            const img = await window.puter.ai.txt2img(pulse.prompt, { model: 'black-forest-labs/FLUX.1-schnell' });
            setGeneratedImageUrl(img.src);
          }
        } catch (e) { console.error(e); } finally { setIsGenerating(false) }
      }
      generateImage();
    }
  }, [pulse, generatedImageUrl, isGenerating])

  if (loading) return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-[0.6rem] font-bold uppercase tracking-[0.4em] opacity-20 animate-pulse text-black">Synchronizing...</div>
    </main>
  )

  const currentIndex = pulses.findIndex(p => p.slug === slug)
  const nextPulse = currentIndex < pulses.length - 1 ? pulses[currentIndex + 1] : null

  const displayTitle = pulse?.title || slug?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  const displayContent = pulse?.content || 'Signal pending...'

  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-[var(--accent)] selection:text-white">
      <GlobalNavbar />

      <section ref={heroRef} className="relative pt-28 md:pt-60 px-[6%] pb-12 md:pb-40 border-b border-black/5 bg-white z-10">
        <motion.div style={{ opacity: opacityText, scale: scaleHero, y: yHero }}>
          <div className="flex items-center gap-4 md:gap-8 mb-8 md:mb-12">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="h-[1px] bg-[var(--accent)]"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[0.6rem] md:text-[0.7rem] font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[var(--accent)]"
            >
              {pulse?.timestamp ? new Date(pulse.timestamp).toLocaleDateString([], { month: 'long', day: 'numeric', year: 'numeric' }) : '2026'}
            </motion.span>
          </div>

          <h1 className="font-inter text-[10vw] md:text-[6vw] lg:text-[8vw] font-normal leading-[0.9] md:leading-[0.8] tracking-[-0.04em] md:tracking-[-0.06em] mb-12 md:mb-20 text-black break-words">
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="block"
            >
              {displayTitle}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="font-playfair italic md:pl-[12vw] block text-[8vw] md:text-[5vw] lg:text-[6vw] opacity-20"
            >
              Signal.
            </motion.span>
          </h1>
        </motion.div>
      </section>

      <section className="px-[6%] py-16 md:py-32 bg-white relative z-10">
        <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-24">
          <div className="col-span-12 md:col-span-7">
            <div className="relative">
              <span className="absolute -left-12 top-2 text-[0.6rem] font-bold opacity-20 rotate-90 origin-left uppercase tracking-widest hidden md:block text-black">Signal</span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="prose prose-neutral max-w-none text-black"
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ node, ...props }) => <p className="text-xl md:text-3xl lg:text-4xl font-light leading-[1.2] md:leading-[1.1] tracking-tight mb-6 md:mb-10 text-black" {...props} />,
                    h1: ({ node, ...props }) => <h1 className="text-3xl md:text-5xl font-bold mb-6" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-2xl md:text-4xl font-bold mb-4 mt-12" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-xl md:text-3xl font-bold mb-3 mt-8" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
                    li: ({ node, ...props }) => <li className="text-lg md:text-2xl font-light leading-relaxed" {...props} />,
                  }}
                >
                  {displayContent}
                </ReactMarkdown>
              </motion.div>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="w-full h-[1px] bg-black/5 mb-8 md:mb-20 origin-left"
            />
          </div>

          <div className="col-span-12 md:col-start-9 lg:col-start-10 md:col-span-4 lg:col-span-3 mt-12 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="md:sticky md:top-40 space-y-12 md:space-y-20"
            >
              <div className="flex md:block gap-12">
                <div className="flex-1">
                  <span className="block text-[0.55rem] md:text-[0.6rem] font-bold opacity-30 uppercase tracking-widest mb-4 md:mb-6 text-black">Signal</span>
                  <div className="space-y-4 md:space-y-8 text-black">
                    <div>
                      <div className="text-[0.5rem] md:text-[0.55rem] uppercase opacity-40 mb-1">Intent</div>
                      <div className="text-lg md:text-xl font-medium">{pulse?.integrity || 'Pure'}</div>
                    </div>
                    <div>
                      <div className="text-[0.5rem] md:text-[0.55rem] uppercase opacity-40 mb-1">Tags</div>
                      <div className="text-lg md:text-xl font-medium">{pulse?.resonance || 'None'}</div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 md:mt-20">
                  <span className="block text-[0.55rem] md:text-[0.6rem] font-bold opacity-30 uppercase tracking-widest mb-4 md:mb-6 text-black">Atmosphere</span>
                  <div className="w-full aspect-square bg-black/5 rounded-full flex items-center justify-center relative overflow-hidden max-w-[120px] md:max-w-[180px] lg:max-w-none">
                    <div
                      style={{
                        backgroundImage: pulse?.atmosphere || 'linear-gradient(135deg, #B31B1B 0%, #ec4899 100%)'
                      }}
                      className="absolute inset-0 w-full h-full animate-gradient-flow"
                    />
                    <AnimatePresence>
                      {generatedImageUrl && (
                        <motion.img
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          src={generatedImageUrl}
                          alt="Manifestation"
                          className="absolute inset-0 w-full h-full object-cover z-20"
                        />
                      )}
                    </AnimatePresence>
                    <div className="text-[0.4rem] md:text-[0.5rem] font-bold opacity-10 uppercase tracking-widest text-black z-10">
                      {isGenerating && !generatedImageUrl ? 'Manifesting...' : 'Lume_Sync'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Persistent Navigation Portal */}
      <section className="border-t border-black/5 flex flex-col md:flex-row h-auto md:h-[30vh] overflow-hidden bg-black/5 gap-px relative">
        <Link
          href="/pulse"
          className="flex-1 group relative bg-white flex flex-col justify-center px-[6%] py-12 no-underline text-black transition-all duration-[1.2s] ease-[0.19, 1, 0.22, 1] hover:flex-[1.5]"
        >
          <div className="relative z-10">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-4 block opacity-40 group-hover:opacity-100 transition-opacity">Return</span>
            <h2 className="text-4xl md:text-6xl font-normal tracking-tighter leading-none group-hover:italic group-hover:text-[var(--accent)] transition-all duration-500">
              Return to Signals
            </h2>
          </div>
        </Link>

        <Link
          href={nextPulse ? `/pulse/${nextPulse.slug}` : '/pulse'}
          className={`flex-1 group relative bg-white flex flex-col justify-center px-[6%] py-12 no-underline text-black transition-all duration-[1.2s] ease-[0.19, 1, 0.22, 1] hover:flex-[1.5] ${!nextPulse && 'opacity-50 pointer-events-none'}`}
        >
          <div className="relative z-10 text-right md:text-left">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-4 block opacity-40 group-hover:opacity-100 transition-opacity">Next</span>
            <h2 className="text-4xl md:text-6xl font-normal tracking-tighter leading-none group-hover:italic group-hover:text-[var(--accent)] transition-all duration-500">
              {nextPulse ? nextPulse.title : 'End'}
            </h2>
          </div>
        </Link>
      </section>

      <Footer />
    </main>
  )
}
