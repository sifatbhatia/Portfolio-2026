'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useRef } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [currentTime, setCurrentTime] = React.useState('')
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: false, amount: 0.3 })

  React.useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'America/Los_Angeles'
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer ref={footerRef} className="bg-black text-white w-full relative overflow-hidden border-t border-white/5 pt-24 md:pt-40">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ y: '100%' }}
        animate={{ y: isInView ? '0%' : '100%' }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(42, 219, 219, 0.03) 50%, transparent 100%)',
        }}
      />

      {/* Subtle Grid Pattern */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        initial={{ y: '100%' }}
        animate={{ y: isInView ? '0%' : '100%' }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="px-[6%] relative z-10 w-full">
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-[8vw] font-normal tracking-tighter leading-[0.8] uppercase text-white">
            Let's create <br />
            <span className="font-playfair italic lowercase tracking-tight text-white/80">the</span> future.
          </h2>
        </div>

        {/* Triple Column Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 mb-32 md:mb-48 items-start">
          {/* Column 1: Email */}
          <div className="col-span-12 lg:col-span-6 mb-12 lg:mb-0">
            <a href="mailto:hi@sifat.tech" className="group flex flex-col no-underline text-white w-fit">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-40 mb-4 group-hover:opacity-100 transition-opacity">Email</span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal hover:text-[var(--accent)] transition-colors border-b-2 border-white/10 pb-2 break-all sm:break-normal">
                hi@sifat.tech
              </span>
            </a>
          </div>

          {/* Column 2: Connect */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-40 mb-6 block">Connect</span>
            <div className="flex flex-col gap-4">
              {[
                { name: 'LinkedIn', href: 'https://linkedin.com/in/siftion' },
                { name: 'Behance', href: 'https://behance.net/siftion' },
                { name: 'Instagram', href: 'https://instagram.com/sifatxo' },
                { name: 'Facebook', href: '#' }
              ].map((social) => (
                <a key={social.name} href={social.href} target="_blank" className="group text-xl md:text-2xl font-normal no-underline text-white hover:text-[var(--accent)] transition-colors w-fit border-b border-white/5 group-hover:border-white/20 pb-1">
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Time Block */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-8 lg:items-end text-left lg:text-right">
            <div className="flex flex-col gap-2">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-40">Current Time</span>
              <div className="flex items-center lg:justify-end gap-3 opacity-60">
                <Globe size={14} strokeWidth={1.5} />
                <span className="text-xl md:text-2xl font-medium tracking-tight uppercase">{currentTime} PST</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-40">System Status</span>
              <div className="text-[0.6rem] font-bold uppercase tracking-[0.4em] opacity-60">
                EST. 2026 // LUMENÉ 4.0
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-t border-white/10 gap-8 w-full">
          <div className="flex gap-8 md:gap-16 text-[0.65rem] font-bold uppercase tracking-[0.4em] opacity-60">
            <span className="text-white">Based in Los Angeles</span>
            <span className="text-white">Available for Q1 2026</span>
          </div>
          <div className="text-[0.65rem] font-bold uppercase tracking-[0.4em] opacity-40 text-white">
            © {currentYear} // Sifat Bhatia // All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
