'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Send, CheckCircle } from 'lucide-react'
import GlobalNavbar from '../components/GlobalNavbar'
import Footer from '../components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  // Track scroll for pointer events
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Construct mailto with form data
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\n${formData.message}`
    )
    window.location.href = `mailto:sifatbht@gmail.com?subject=${subject}&body=${body}`

    // Show success state
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1000)
  }

  const inputBaseStyles = "w-full bg-transparent border-b border-white/15 text-white text-lg md:text-xl font-light py-4 px-0 focus:outline-none focus:border-[var(--accent)] transition-colors duration-500 placeholder:text-white/20"

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/siftion' },
    { name: 'Behance', href: 'https://www.behance.net/siftion' },
    { name: 'Instagram', href: 'https://instagram.com/siftion' },
  ]

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-[var(--accent)] selection:text-white relative overflow-x-hidden">
      <GlobalNavbar />

      {/* Fixed Hero Title Section */}
      <div className="fixed top-0 left-0 w-full z-[500] px-[6%] pt-6 md:pt-8 text-white mix-blend-difference selection:bg-[#2EDBDB] pointer-events-none">
        <div className="origin-top-left will-change-transform pointer-events-auto">
          <h1
            ref={titleRef}
            className="font-inter text-5xl sm:text-7xl md:text-[8.5vw] leading-[0.9] font-normal tracking-[-0.05em]"
          >
            Start the <br />
            <span className="font-playfair italic">Dialogue.</span>
          </h1>
        </div>
      </div>

      {/* Dead Space */}
      <div className="h-[35vh] md:h-[65vh]" />

      <section className="relative z-10 px-[6%] pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
          className="grid grid-cols-12 gap-8 md:gap-16 mb-40"
        >
          {/* Left: Form */}
          <div className="col-span-12 md:col-span-7">
            <p className="text-xl md:text-3xl font-light leading-snug text-white/90 mb-16">
              Currently accepting select projects for Q2 2026. Whether you need a full website, a brand refresh, or a creative build — let's talk.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 py-12"
              >
                <CheckCircle size={32} className="text-[var(--accent)]" />
                <div>
                  <h3 className="text-2xl font-normal mb-2">Message ready to send</h3>
                  <p className="text-white/50 text-sm">Your email client should have opened with the details pre-filled.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-[0.6rem] font-bold uppercase tracking-[0.4em] opacity-30 mb-4">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputBaseStyles}
                    />
                  </div>
                  <div>
                    <label className="block text-[0.6rem] font-bold uppercase tracking-[0.4em] opacity-30 mb-4">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputBaseStyles}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.6rem] font-bold uppercase tracking-[0.4em] opacity-30 mb-4">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className={`${inputBaseStyles} cursor-pointer appearance-none bg-transparent`}
                    style={{ backgroundImage: 'none' }}
                  >
                    <option value="" className="bg-black text-white/40">Select a project type</option>
                    <option value="Website Design & Development" className="bg-black">Website Design & Development</option>
                    <option value="Brand Identity" className="bg-black">Brand Identity</option>
                    <option value="Webflow Build" className="bg-black">Webflow Build</option>
                    <option value="Creative Tech / Interactive" className="bg-black">Creative Tech / Interactive</option>
                    <option value="Consultation" className="bg-black">Consultation</option>
                    <option value="Other" className="bg-black">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[0.6rem] font-bold uppercase tracking-[0.4em] opacity-30 mb-4">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputBaseStyles} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center gap-4 px-10 py-5 bg-white text-black hover:bg-[var(--accent)] hover:text-black rounded-full transition-all duration-500 cursor-pointer disabled:opacity-50"
                >
                  <span className="text-sm font-bold uppercase tracking-[0.2em]">
                    {isSubmitting ? 'Opening mail...' : 'Send Message'}
                  </span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </form>
            )}

            {/* Direct email fallback */}
            <div className="mt-16 pt-12 border-t border-white/5">
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-20 mb-4">Or reach out directly</span>
              <a href="mailto:sifatbht@gmail.com" className="text-xl md:text-3xl font-normal tracking-tight no-underline text-white hover:text-[var(--accent)] transition-colors inline-flex items-center gap-4 group">
                sifatbht@gmail.com <ArrowUpRight size={20} className="md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" strokeWidth={1} />
              </a>
            </div>
          </div>

          {/* Right: Social + Info */}
          <div className="col-span-12 md:col-start-9 md:col-span-4 border-t border-white/10 pt-8 mt-12 md:mt-0">
            <span className="block text-[0.6rem] font-bold opacity-30 uppercase tracking-widest mb-8">Connect</span>
            <ul className="flex flex-col gap-6 list-none p-0 m-0">
              {socialLinks.map(item => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold uppercase tracking-widest flex justify-between items-center group cursor-pointer hover:text-[var(--accent)] transition-colors text-white no-underline"
                  >
                    {item.name} <span className="opacity-30 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-16 pt-8 border-t border-white/10">
              <span className="block text-[0.6rem] font-bold opacity-30 uppercase tracking-widest mb-4">Based in</span>
              <p className="text-lg font-light text-white/60">Los Angeles, California</p>
            </div>

            <div className="mt-8">
              <span className="block text-[0.6rem] font-bold opacity-30 uppercase tracking-widest mb-4">Availability</span>
              <p className="text-lg font-light text-white/60">Currently accepting Q2 2026 projects</p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
