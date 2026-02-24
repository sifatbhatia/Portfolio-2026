'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ResponsiveCarouselProps {
  images: string[]
  altTexts?: string[]
  interval?: number
  inverted?: boolean
  className?: string
}

const ResponsiveCarousel: React.FC<ResponsiveCarouselProps> = ({
  images,
  altTexts = [],
  interval = 5000,
  inverted = false,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return
    
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, interval)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentSlide, isAutoPlaying, isDragging, interval, images.length])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentSlide(index)
  }

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setStartY(e.clientY)
    setIsAutoPlaying(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsAutoPlaying(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    
    const deltaX = e.clientX - startX
    const deltaY = e.clientY - startY
    
    // Only swipe horizontally if horizontal movement is greater than vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
      setIsDragging(false)
    }
  }

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setStartY(e.touches[0].clientY)
    setIsAutoPlaying(false)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return
    
    const endX = e.changedTouches[0].clientX
    const endY = e.changedTouches[0].clientY
    const deltaX = endX - startX
    const deltaY = endY - startY
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }
    
    setIsDragging(false)
    setIsAutoPlaying(true)
  }

  if (images.length === 0) {
    return (
      <div className={`relative aspect-[16/10] rounded-3xl overflow-hidden border ${inverted ? 'border-white/20' : 'border-black/20'} ${className}`}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-current/20 rounded-full animate-pulse" />
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={carouselRef}
      className={`relative aspect-[16/10] rounded-3xl overflow-hidden border ${inverted ? 'border-white/20 bg-black' : 'border-black/20 bg-white'} ${className}`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Carousel Images */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide}
          src={images[currentSlide]}
          alt={altTexts[currentSlide] || `Project screenshot ${currentSlide + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"></path>
              <path d="M12 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide 
                  ? (inverted ? 'bg-white' : 'bg-black') 
                  : (inverted ? 'bg-white/40' : 'bg-black/40')
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ResponsiveCarousel