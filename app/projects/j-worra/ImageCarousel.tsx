'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Since jworra.com is minimal, we'll create atmospheric placeholder images
  // that match your portfolio's aesthetic
  const projectImages = [
    { 
      src: '/previews/j-worra.png', 
      alt: 'J. Worra Hero Section - Atmospheric electronic music artist website with dark theme and neon accents' 
    },
    { 
      src: '/previews/j-worra.png', 
      alt: 'J. Worra Music Section - Interactive audio visualization with smooth animations' 
    },
    { 
      src: '/previews/j-worra.png', 
      alt: 'J. Worra Events Section - Clean event calendar with dynamic date highlighting' 
    },
    { 
      src: '/previews/j-worra.png', 
      alt: 'J. Worra Contact Section - Minimal contact form with atmospheric background' 
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, projectImages.length])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % projectImages.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  return (
    <div className="relative">
      {/* Carousel Container with 16:10 ratio */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-neutral-900">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={projectImages[currentSlide].src}
            alt={projectImages[currentSlide].alt}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {projectImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentSlide(index)
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Auto-play indicator */}
      {isAutoPlaying && (
        <div className="absolute top-4 right-4 z-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Auto Sliding
          </span>
        </div>
      )}
    </div>
  )
}

export default ImageCarousel