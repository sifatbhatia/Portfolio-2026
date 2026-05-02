'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useRef } from 'react'
import MagneticWrapper from '../../components/MagneticWrapper'

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
    <footer ref={footerRef} className="bg-[var(--color-eggshell)] text-black w-full relative overflow-hidden border-t border-[var(--color-chalk)] pt-20 md:pt-28">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ y: '100%' }}
        animate={{ y: isInView ? '0%' : '100%' }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(245, 243, 241, 0.9) 50%, transparent 100%)',
        }}
      />

      {/* Subtle Grid Pattern */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        initial={{ y: '100%' }}
        animate={{ y: isInView ? '0%' : '100%' }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="mx-auto max-w-[1200px] px-5 md:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="mb-20">
          <p className="mb-3 text-sm text-[var(--color-gravel)]">Contact</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-black">
            Let's create the future.
          </h2>
        </div>

        {/* Triple Column Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 mb-32 md:mb-48 items-start">
          {/* Column 1: Email */}
          <div className="col-span-12 lg:col-span-6 mb-12 lg:mb-0">
            <a href="mailto:hi@sifat.tech" className="group flex flex-col no-underline text-white w-fit">
              <span className="text-sm text-[var(--color-gravel)] mb-4 transition-opacity">Email</span>
              <span className="font-display text-4xl md:text-5xl font-light transition-colors border-b border-[var(--color-chalk)] pb-2 break-all sm:break-normal">
                hi@sifat.tech
              </span>
            </a>
          </div>

          {/* Column 2: Connect */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <span className="text-sm text-[var(--color-gravel)] mb-6 block">Connect</span>
            <div className="flex flex-col gap-4">
              {[
                { name: 'LinkedIn', href: 'https://linkedin.com/in/siftion' },
                { name: 'Behance', href: 'https://www.behance.net/siftion' },
                { name: 'Instagram', href: 'https://instagram.com/siftion' }
              ].map((social) => (
                <MagneticWrapper key={social.name} intensity={0.2} className="w-fit">
                  <a href={social.href} target="_blank" className="group text-lg md:text-xl font-normal no-underline text-black transition-colors w-fit border-b border-[var(--color-chalk)] pb-1 block">
                    {social.name}
                  </a>
                </MagneticWrapper>
              ))}
            </div>
          </div>

          {/* Column 3: Time Block */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-8 lg:items-end text-left lg:text-right">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[var(--color-gravel)]">Current Time</span>
              <div className="flex items-center lg:justify-end gap-3 text-[var(--color-gravel)]">
                <Globe size={14} strokeWidth={1.5} />
                <span className="text-base md:text-lg font-medium tracking-tight uppercase">{currentTime} PST</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[var(--color-gravel)]">System Status</span>
              <div className="font-mono text-[13px] text-[var(--color-gravel)]">
                EST. 2026 // LUMENÉ 4.0
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-t border-[var(--color-chalk)] gap-8 w-full">
          <div className="flex gap-6 md:gap-10 text-sm text-[var(--color-gravel)]">
            <span>Based in Los Angeles</span>
            <span>Available for Q1 2026</span>
          </div>
          <div className="text-sm text-[var(--color-slate)]">
            © {currentYear} // Sifat Bhatia // All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
