'use client'

import dynamic from 'next/dynamic'

// Dynamically import the 3D component with SSR disabled
const AtmosphericWave = dynamic(
  () => import('./AtmosphericWave'),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 z-0 pointer-events-none" />
  }
)

export default AtmosphericWave