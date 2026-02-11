'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedOrb() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.MeshDistortMaterial>(null)

  useFrame((state) => {
    if (materialRef.current) {
      // Pulse effect for distortion
      const t = state.clock.getElapsedTime()
      materialRef.current.distort = 0.3 + Math.sin(t * 1.5) * 0.1
      materialRef.current.speed = 2 + Math.cos(t * 0.5) * 0.5
    }
    
    if (meshRef.current) {
      // Gentle floating rotation
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef} scale={1.5}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#F97316"
        emissive="#B31B1B"
        emissiveIntensity={0.8}
        roughness={0.1}
        metalness={0.2}
        distort={0.4}
        speed={2}
      />
    </Sphere>
  )
}

function GlowEffect() {
  return (
    <pointLight position={[0, 0, 0]} intensity={25} color="#F97316" distance={8} decay={2} />
  )
}

export default function GlowingOrb() {
  return (
    <div className="hidden lg:block fixed top-1/2 right-[5vw] -translate-y-1/2 w-[40vw] h-[60vh] pointer-events-none z-[1] opacity-90">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#FDFDFD" />
        <pointLight position={[-5, -5, 5]} intensity={1} color="#B31B1B" />
        <GlowEffect />
        <AnimatedOrb />
      </Canvas>
    </div>
  )
}
