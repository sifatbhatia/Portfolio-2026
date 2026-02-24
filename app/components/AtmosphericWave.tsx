'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * REUSABLE 3D COMPONENT: Ethereal Wave
 * A flowing, atmospheric ribbon of particles that feels like silk or wind.
 */
export default function AtmosphericWave({ 
  primaryColor = '#DC143C', 
  secondaryColor = '#000000' 
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Skip if we're on the server (no window object)
    if (typeof window === 'undefined' || !containerRef.current) return

    const container = containerRef.current
    let animationFrameId: number

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 2, 8) // Angled slightly down
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    // 2. Geometry & Particles Setup
    const waveGroup = new THREE.Group()
    scene.add(waveGroup)

    const particleCount = 6000 // Increased density for 100% width coverage
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const initialPositions = new Float32Array(particleCount * 3) // Store for wave math
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    const redPalette = [
      '#C10206',
      '#A50113', 
      '#DC143C',
      '#FF2400',
      '#810725',
      '#9B111E',
      '#9F0E31',
      '#B22222'
    ]

    const baseDark = new THREE.Color(secondaryColor)

    for (let i = 0; i < particleCount; i++) {
      // Create a wider, deep grid for the ribbon to span 100% width
      const x = (Math.random() - 0.5) * 20 // Spread width widened from 12 to 20
      const z = (Math.random() - 0.5) * 6   // Spread depth
      const y = 0

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      initialPositions[i * 3] = x
      initialPositions[i * 3 + 1] = y
      initialPositions[i * 3 + 2] = z

      // Color mixing - mostly dark, sparse vibrant red highlights
      const randomRedHex = redPalette[Math.floor(Math.random() * redPalette.length)]
      const randomRed = new THREE.Color(randomRedHex)
      const mixRatio = Math.random() > 0.85 ? (0.6 + Math.random() * 0.4) : (Math.random() * 0.15)
      const mixedColor = baseDark.clone().lerp(randomRed, mixRatio)
      
      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b

      // Very small, delicate particles
      sizes[i] = Math.random() * 1.5 + 0.5
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.6, // More transparent for "airy" feel
      blending: THREE.NormalBlending,
      depthWrite: false
    })

    const particles = new THREE.Points(geometry, material)
    waveGroup.add(particles)

    // 3. Responsive Positioning
    const updateOffset = () => {
      const isMobile = window.innerWidth < 768
      // Centered on X-axis for both mobile and desktop to take up 100% width
      waveGroup.position.set(0, isMobile ? 1 : -0.5, 0)
      waveGroup.rotation.x = isMobile ? 0.5 : 0.3 // Tilt the wave
      waveGroup.scale.setScalar(isMobile ? 0.7 : 1.1)
    }
    updateOffset()

    // 4. Mouse Interaction
    let mouseX = 0, mouseY = 0
    let targetX = 0, targetY = 0

    const onMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1
      targetY = -(e.clientY / window.innerHeight) * 2 + 1
    }

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      updateOffset()
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    // 5. Animation Loop
    const clock = new THREE.Clock()
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const time = clock.getElapsedTime() * 0.4 // Slow, elegant speed

      // Smooth mouse follow (parallax effect)
      mouseX += (targetX - mouseX) * 0.05
      mouseY += (targetY - mouseY) * 0.05

      waveGroup.rotation.y = mouseX * 0.2 // Removed the +3 offset so it stays centered
      waveGroup.position.x = mouseX * 0.5
      waveGroup.position.y = (window.innerWidth < 768 ? 1 : -0.5) - (mouseY * 0.5)

      // --- THE WAVE MATH ---
      // Distort the Y position of particles based on sine waves to create flowing fabric
      const posAttribute = geometry.attributes.position
      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3
        const initX = initialPositions[ix]
        const initZ = initialPositions[ix + 2]

        // Complex overlapping sine waves
        const wave1 = Math.sin(initX * 0.5 + time) * 0.5
        const wave2 = Math.cos(initZ * 0.3 + time * 0.8) * 0.5
        const wave3 = Math.sin((initX + initZ) * 0.2 + time * 0.5) * 0.5
        
        posAttribute.array[ix + 1] = wave1 + wave2 + wave3
      }
      posAttribute.needsUpdate = true

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />
}