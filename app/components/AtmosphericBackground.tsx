'use client'

import React, { useEffect, useRef } from 'react'

/**
 * REUSABLE COMPONENT: Atmospheric Background
 * A CSS-based atmospheric background that creates depth and movement
 * without the complexity of Three.js
 */
export default function AtmosphericBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Layered atmospheric gradients */}
      <div className="absolute inset-0 opacity-20" 
           style={{
             background: `radial-gradient(circle at 30% 30%, rgba(219, 42, 42, 0.15) 0%, transparent 40%),
                         radial-gradient(circle at 70% 70%, rgba(219, 42, 42, 0.1) 0%, transparent 50%)`
           }}
      />
      
      {/* Floating particles (CSS only) */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-red-500 opacity-10 animate-float"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle noise texture for depth */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }}
      />
    </div>
  )
}