'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * REUSABLE COMPONENT: The core 3D Particle Orb (Vanilla Three.js in React)
 * 
 * Note: This version uses plain Three.js inside a React useEffect.
 * This avoids the `react-reconciler` compatibility errors often seen with 
 * React Three Fiber (R3F) in generic bundlers/sandboxes. It is highly 
 * portable and can be dropped into any Next.js or React app reliably.
 */
export default function SignalOrbScene({
  particleCount = 3000,
  baseRadius = 2.2,
  primaryColor = '#DC143C', // Updated to Crimson for the core
  secondaryColor = '#000000',
  mouseInfluence = 0.05
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    let animationFrameId: number

    // 1. Scene Setup
    const scene = new THREE.Scene()

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 6

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance"
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)) // Cap at 1.5x for scroll performance
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    // 4. Orb Group (to hold particles and core)
    const orbGroup = new THREE.Group()
    scene.add(orbGroup)

    // 5. Generate Particles
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    const redPalette = [
      '#C10206', // Guardsman Red
      '#A50113', // Madder
      '#DC143C', // Crimson
      '#FF2400', // Scarlet
      '#810725', // Burgundy
      '#9B111E', // Ruby Red
      '#9F0E31', // Arabian Red
      '#B22222'  // Fire Brick
    ]

    const baseDark = new THREE.Color(secondaryColor)

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      const r = baseRadius + (Math.random() * 0.1)

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      // Select a random red from the palette
      const randomRedHex = redPalette[Math.floor(Math.random() * redPalette.length)]
      const randomRed = new THREE.Color(randomRedHex)

      // Mix with the dark base to retain the shadow/depth
      const mixedColor = baseDark.clone().lerp(randomRed, 0.3 + Math.random() * 0.7)
      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b

      sizes[i] = Math.random() * 2 + 1
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.NormalBlending,
      depthWrite: false
    })

    const particles = new THREE.Points(geometry, material)
    orbGroup.add(particles)

    // 6. Inner Core
    const coreGeom = new THREE.SphereGeometry(baseRadius * 0.8, 32, 32)
    const coreMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: 0.03,
      wireframe: true
    })
    const core = new THREE.Mesh(coreGeom, coreMat)
    orbGroup.add(core)

    // 7. Responsive Positioning
    const updateOffset = () => {
      const isMobile = window.innerWidth < 768
      // Shift further right on desktop, center on mobile
      orbGroup.position.set(isMobile ? 0 : 4.0, isMobile ? -1 : 0, 0)
    }
    updateOffset()

    // 8. Event Listeners (Mouse & Resize)
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

    // 9. Animation Loop
    const clock = new THREE.Clock()
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const time = clock.getElapsedTime()

      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * mouseInfluence
      mouseY += (targetY - mouseY) * mouseInfluence

      orbGroup.rotation.y = time * 0.1 + (mouseX * 0.5)
      orbGroup.rotation.x = mouseY * 0.5

      // Breathing effect
      const scale = 1 + Math.sin(time * 0.5) * 0.03
      particles.scale.set(scale, scale, scale)
      core.scale.set(scale * 1.1, scale * 1.1, scale * 1.1)

      renderer.render(scene, camera)
    }
    animate()

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }

      geometry.dispose()
      material.dispose()
      coreGeom.dispose()
      coreMat.dispose()
      renderer.dispose()
    }
  }, [particleCount, baseRadius, primaryColor, secondaryColor, mouseInfluence])

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />
}