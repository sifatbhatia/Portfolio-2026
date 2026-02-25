'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MagneticWrapper from '../../../components/MagneticWrapper'

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextImage = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <div ref={containerRef} className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] bg-neutral-900 group">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      <MagneticWrapper intensity={0.2} className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevImage}
          className="w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
      </MagneticWrapper>

      <MagneticWrapper intensity={0.2} className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextImage}
          className="w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </MagneticWrapper>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/30 hover:bg-white/50'
              }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white text-xs font-medium">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
