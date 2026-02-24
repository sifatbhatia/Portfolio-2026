'use client'

import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'
import { ScrollToTop } from './ScrollToTop'

export default function SmoothScroll({ children }: { children: ReactNode }) {
  // We use ReactLenis root option to apply smooth scroll to the entire page
  return (
    <ReactLenis root options={{
      lerp: 0.12,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2,
    }}>
      <ScrollToTop />
      {children}
    </ReactLenis>
  )
}
