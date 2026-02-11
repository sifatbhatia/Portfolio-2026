'use client'

import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'
import { ScrollToTop } from './ScrollToTop'

export default function SmoothScroll({ children }: { children: ReactNode }) {
  // We use ReactLenis root option to apply smooth scroll to the entire page
  return (
    <ReactLenis root options={{
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true
    }}>
      <ScrollToTop />
      {children}
    </ReactLenis>
  )
}
