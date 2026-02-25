'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function ScrollAnimation() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    // Create GSAP timeline for scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true
      }
    })

    // Animate the title scale based on scroll position
    tl.to(titleRef.current, {
      scale: 0.8,
      duration: 1,
      ease: 'power2.out'
    })

    // Clean up scroll trigger
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
      tl.kill()
    }
  }, [])

  return titleRef
}