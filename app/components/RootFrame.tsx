'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion'
import Lenis from 'lenis'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// --- Magnetic Component ---
export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 20, stiffness: 150 })
  const springY = useSpring(y, { damping: 20, stiffness: 150 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    x.set(middleX * 0.25)
    y.set(middleY * 0.25)
  }

  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={() => { x.set(0); y.set(0) }} style={{ x: springX, y: springY }}>
      {children}
    </motion.div>
  )
}

export default function RootFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [time, setTime] = useState('')

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true })
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
    }, 1000)

    return () => { lenis.destroy(); clearInterval(timer) }
  }, [])

  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <div style={{ backgroundColor: '#FDFDFD', color: '#000', minHeight: '100vh', width: '100%', margin: 0, padding: 0, fontFamily: 'Inter, sans-serif', overflowX: 'hidden' }}>
      
      {/* 00. SYSTEM BOUNDARY NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '100vh', pointerEvents: 'none', zIndex: 1000, padding: '3.5rem 6%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', pointerEvents: 'auto' }}>
          <div style={{ display: 'flex', gap: '4rem' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#000' }}>
              <div style={{ fontWeight: 900, fontSize: '0.8rem', letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: 1.2 }}>
                Sifat Bhatia <br />
                <span style={{ opacity: 0.25, fontSize: '0.6rem', fontWeight: 700 }}>Creative Developer</span>
              </div>
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
               <span style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.2em', opacity: 0.2 }}>LOCAL_TIME</span>
               <span style={{ fontSize: '0.65rem', fontWeight: 800 }}>{time || '--:--'} PST</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '5rem', alignItems: 'center' }}>
             <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B31B1B' }}>Live_Build</div>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, opacity: 0.15 }}>SUBSTRATE_V.31</div>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ width: '32px', height: '1.5px', backgroundColor: '#000' }} />
                <div style={{ width: '20px', height: '1.5px', backgroundColor: '#000', alignSelf: 'flex-end' }} />
             </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '3.5rem', left: '6%', right: '6%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', pointerEvents: 'auto' }}>
           <div style={{ display: 'flex', gap: '4rem' }}>
              <Link href="/work" style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.4em', color: '#000', textDecoration: 'none', opacity: pathname === '/work' ? 1 : 0.35 }}>INDEX</Link>
              <Link href="/about" style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.4em', color: '#000', textDecoration: 'none', opacity: pathname === '/about' ? 1 : 0.35 }}>STUDIO</Link>
              <Link href="/contact" style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.4em', color: '#000', textDecoration: 'none', opacity: pathname === '/contact' ? 1 : 0.35 }}>CONTACT</Link>
           </div>
           
           <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
              <div style={{ width: '180px', position: 'relative' }}>
                <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(0,0,0,0.08)' }} />
                <motion.div style={{ position: 'absolute', top: 0, left: 0, height: '1px', backgroundColor: '#B31B1B', width: '100%', scaleX: progressScale, transformOrigin: 'left' }} />
                <div style={{ marginTop: '0.8rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.55rem', fontWeight: 900, opacity: 0.2, letterSpacing: '0.1em' }}>
                   <span>SCROLL_DEP</span>
                   <span>100%</span>
                </div>
              </div>
              <div style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.3em', opacity: 0.3 }}>©2026</div>
           </div>
        </div>

        <div style={{ position: 'absolute', left: '6%', top: 100, bottom: 100, width: '1px', backgroundColor: 'rgba(0,0,0,0.03)' }} />
        <div style={{ position: 'absolute', right: '6%', top: 100, bottom: 100, width: '1px', backgroundColor: 'rgba(0,0,0,0.03)' }} />
      </nav>

      <main>{children}</main>

      <style jsx global>{`
        ::selection { background: #B31B1B; color: #fff; }
        body { -webkit-font-smoothing: antialiased; background-color: #FDFDFD; margin: 0; }
        html.lenis, html.lenis body { height: auto; }
        .lenis.lenis-smooth { scroll-behavior: auto !important; }
        .lenis.lenis-stopped { overflow: hidden; }
      `}</style>
    </div>
  )
}
