'use client'

import React, { useEffect, useRef } from 'react'

export default function SignalWave() {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const timeRef = useRef(0)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const animate = () => {
      timeRef.current += 0.02
      const t = timeRef.current
      const points: string[] = []
      
      for (let i = 0; i <= 100; i += 2) {
        const y = 50 + Math.sin(i * 0.1 + t) * 15 * Math.sin(t * 0.5)
        points.push(`${i},${y}`)
      }
      
      path.setAttribute('d', 'M' + points.join(' L'))
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <section className="signal-wave h-[40vh] md:h-[60vh] relative overflow-hidden" aria-hidden="true">
      <svg ref={svgRef} className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <path ref={pathRef} fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black/20" />
      </svg>
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .signal-wave svg path {
            animation: none;
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  )
}
