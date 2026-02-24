'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface CursorPreviewProps {
  hoveredProject: number | null
  projects: any[]
}

const CursorPreview: React.FC<CursorPreviewProps> = ({ hoveredProject, projects }) => {
  const cursorRef = useRef<HTMLDivElement>(null)

  // Get the correct image path for a project
  const getProjectImage = (project: any) => {
    if (!project) return null
    
    // For The Void (special case)
    if (project.slug === 'the-void') {
      return '/previews/the-void.png'
    }
    
    // For all other projects, use screenshot-1.webp
    return `/previews/${project.slug}/screenshot-1.webp`
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (hoveredProject === null || !projects[hoveredProject]) {
    return null
  }

  const project = projects[hoveredProject]
  const imageUrl = getProjectImage(project)

  return (
    <motion.div
      ref={cursorRef}
      className="fixed z-[9999] pointer-events-none w-40 h-25 rounded-lg overflow-hidden shadow-2xl border border-white/20"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2 }}
    >
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={`${project.title} preview`}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
      )}
    </motion.div>
  )
}

export default CursorPreview