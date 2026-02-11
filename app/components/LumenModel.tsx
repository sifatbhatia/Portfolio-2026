'use client'

import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function Model({ url }: { url: string }) {
  const group = useRef<THREE.Group>(null)
  const { scene } = useGLTF(url)

  useFrame((state) => {
    if (!group.current) return
    
    // Smoothly follow mouse
    const targetX = (state.mouse.x * Math.PI) / 8
    const targetY = (state.mouse.y * Math.PI) / 8
    
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, 0.1)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetY, 0.1)
  })

  return (
    <primitive 
      ref={group} 
      object={scene} 
      scale={2.5} 
      position={[0, -1, 0]}
    />
  )
}

export default function LumenModel() {
  return (
    <div className="w-full h-full min-h-[400px] cursor-crosshair">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Model url="/models/lumen.glb" />
          </Float>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}
