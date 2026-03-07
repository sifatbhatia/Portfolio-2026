'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import MagneticWrapper from '../../components/MagneticWrapper'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: false, amount: 0.3 })

  return (
    <footer ref={footerRef} className="mt-12 md:mt-16 bg-black text-white w-full relative overflow-hidden border-t border-white/5 pt-20 md:pt-28">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ y: '100%' }}
        animate={{ y: isInView ? '0%' : '100%' }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(42, 219, 219, 0.03) 50%, transparent 100%)',
        }}
      />

      <div className="px-[6%] relative z-10 w-full">
        <div className="mb-16 md:mb-20 max-w-[980px]">
          <h2 className="text-[clamp(2.2rem,7vw,6.8rem)] font-normal tracking-[-0.05em] leading-[0.9] text-white">
            Let's build something that lasts.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 mb-20 md:mb-24 items-start">
          <div className="col-span-12 lg:col-span-6">
            <a href="mailto:sifatbht@gmail.com" className="group flex flex-col no-underline text-white w-fit">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-40 mb-3 group-hover:opacity-100 transition-opacity">Email</span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-normal hover:text-[var(--accent)] transition-colors border-b border-white/15 pb-2 break-all sm:break-normal">
                sifatbht@gmail.com
              </span>
            </a>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-40 mb-5 block">Connect</span>
            <div className="flex flex-col gap-3">
              {[
                { name: 'LinkedIn', href: 'https://linkedin.com/in/siftion' },
                { name: 'Behance', href: 'https://www.behance.net/siftion' },
                { name: 'Instagram', href: 'https://instagram.com/siftion' },
              ].map((social) => (
                <MagneticWrapper key={social.name} intensity={0.2} className="w-fit">
                  <a href={social.href} target="_blank" className="group text-lg md:text-xl font-normal no-underline text-white hover:text-[var(--accent)] transition-colors w-fit border-b border-white/10 group-hover:border-white/25 pb-1 block">
                    {social.name}
                  </a>
                </MagneticWrapper>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-4 lg:items-end text-left lg:text-right">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/70">Los Angeles, CA — Available for Q1 & Q2 2026</p>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/55">EST. 2026 // LUMENÉ 4.0</p>
          </div>
        </div>

        <div className="py-10 border-t border-white/10">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/45">Let's build something that lasts.</p>
        </div>
      </div>
    </footer>
  )
}
