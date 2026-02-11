'use client'

import React, { useRef, useState, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { useTexture, shaderMaterial } from '@react-three/drei'

// --- Custom Shader Material for Smooth Transitions ---
// This shader mixes two textures using a displacement map for a fluid/organic feel.
const ImageFadeMaterial = shaderMaterial(
    {
        effectFactor: 1.2,
        dispFactor: 0,
        tex: new THREE.Texture(),
        tex2: new THREE.Texture(),
        disp: new THREE.Texture()
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `,
    // Fragment Shader
    `
    varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float dispFactor;
    uniform float effectFactor;

    void main() {
      vec2 uv = vUv;
      
      // Sample standard displacement map (using the image itself usually works well)
      vec4 disp = texture2D(disp, uv);

      // Create a distorted UV coordinate set for transition
      // We displace based on the "next" image's luminosity/red channel
      float intensity = disp.r * effectFactor;
      
      // Slide/Distort Effect:
      // Texture 1 moves slightly differently than Texture 2
      vec2 distortedPosition1 = vec2(uv.x - dispFactor * intensity, uv.y);
      vec2 distortedPosition2 = vec2(uv.x + (1.0 - dispFactor) * intensity, uv.y);

      // Sample both textures with distortion
      vec4 _texture = texture2D(tex, distortedPosition1);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);

      // Mix them based on progress (dispFactor)
      // Using smoothstep makes the transition pace non-linear and more natural
      float finalMix = smoothstep(0.0, 1.0, dispFactor);
      
      gl_FragColor = mix(_texture, _texture2, finalMix);
    }
  `
)

extend({ ImageFadeMaterial })

// Add TypeScript definition for the custom material
declare global {
    namespace JSX {
        interface IntrinsicElements {
            imageFadeMaterial: any
        }
    }
}

// Inner Scene Component that handles the texture loading and transition logic
const Scene = ({ images, activeIndex }: { images: string[], activeIndex: number }) => {
    const { viewport } = useThree()

    // Load all images as textures
    const textures = useTexture(images)

    // Shader Material Reference
    const materialRef = useRef<any>(null)

    // State to track transition
    const [currentIdx, setCurrentIdx] = useState(0)
    const isTransitioning = useRef(false)
    const progress = useRef(0)
    const nextTarget = useRef(0)

    // When activeIndex prop changes, trigger transition
    useEffect(() => {
        if (activeIndex !== currentIdx) {
            if (!isTransitioning.current) {
                isTransitioning.current = true
                nextTarget.current = activeIndex
                progress.current = 0

                // Prepare the shader for transition:
                // Set current texture as 'tex'
                // Set next texture as 'tex2' and 'disp'
                if (materialRef.current) {
                    materialRef.current.uniforms.tex.value = textures[currentIdx]
                    materialRef.current.uniforms.tex2.value = textures[nextTarget.current]
                    materialRef.current.uniforms.disp.value = textures[nextTarget.current] // Use next image for displacement pattern
                }
            }
        }
    }, [activeIndex, currentIdx, textures])

    // Animation Loop
    useFrame((state, delta) => {
        if (materialRef.current && isTransitioning.current) {
            // Increment progress (0 to 1)
            // Adjust speed by multiplying delta (e.g., * 1.5)
            progress.current += delta * 1.5

            if (progress.current >= 1) {
                // Transition Finished
                progress.current = 1
                isTransitioning.current = false
                setCurrentIdx(nextTarget.current) // Update React state to reflect new current index

                // Snap final state
                materialRef.current.uniforms.dispFactor.value = 0
                materialRef.current.uniforms.tex.value = textures[nextTarget.current]
            } else {
                // Update Uniforms
                materialRef.current.uniforms.dispFactor.value = progress.current
            }
        }
    })

    // Initial Setup: Ensure material has textures on mount
    useEffect(() => {
        if (materialRef.current) {
            materialRef.current.uniforms.tex.value = textures[currentIdx]
            materialRef.current.uniforms.tex2.value = textures[nextTarget.current]
            materialRef.current.uniforms.disp.value = textures[nextTarget.current]
            materialRef.current.uniforms.dispFactor.value = 0
        }
    }, []) // Run once on mount

    return (
        <mesh scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry args={[1, 1]} />
            {/* @ts-ignore */}
            <imageFadeMaterial
                ref={materialRef}
                tex={textures[0]}
                tex2={textures[0]}
                disp={textures[0]}
                dispFactor={0}
                effectFactor={0.4} // Strength of the displacement effect
                toneMapped={false}
            />
        </mesh>
    )
}

// Main Component Export
export default function ThreeCarousel({ images, activeIndex }: { images: string[], activeIndex: number }) {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 1], fov: 50 }} gl={{ antialias: true, alpha: true }}>
                <Scene images={images} activeIndex={activeIndex} />
            </Canvas>
        </div>
    )
}
