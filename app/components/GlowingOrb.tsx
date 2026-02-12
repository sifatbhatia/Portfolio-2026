'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

// Advanced Atmospheric Shader
const AtmosphericShader = {
  uniforms: {
    uTime: { value: 0 },
    uColorWhite: { value: new THREE.Color('#FDFDFD') },
    uColorBurgundy: { value: new THREE.Color('#B31B1B') },
    uColorCore: { value: new THREE.Color('#7A1212') },
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec3 vWorldPosition;
    uniform float uTime;

    // Simplex 3D Noise 
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
                 i.z + vec4(0.0, i1.z, i2.z, 1.0))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0))
               + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0) * 2.0 + 1.0;
      vec4 s1 = floor(b1) * 2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      
      // Multi-layered noise displacement for "Atmospheric" depth
      float noise1 = snoise(position * 2.0 + uTime * 0.3);
      float noise2 = snoise(position * 4.0 - uTime * 0.2) * 0.5;
      float displacement = (noise1 + noise2) * 0.15;
      
      vec3 newPosition = position + normal * displacement;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec3 vWorldPosition;
    uniform float uTime;
    uniform vec3 uColorWhite;
    uniform vec3 uColorBurgundy;
    uniform vec3 uColorCore;

    void main() {
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      
      // Fresnel Effect for glass-like reflections and edge glow
      float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
      
      // Secondary reflection rim
      float rim = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 6.0);
      
      // Color mixing based on normal and fresnel
      vec3 color = mix(uColorWhite, uColorBurgundy, vNormal.y * 0.5 + 0.5);
      
      // Add "Atmospheric" depth with burgundy core
      float coreInfluence = pow(1.0 - fresnel, 2.0);
      color = mix(color, uColorCore, coreInfluence * 0.4);
      
      // Highlight rim (Glass reflection look)
      color += uColorWhite * rim * 1.5;
      
      // Outer glow
      color += uColorBurgundy * fresnel * 0.8;

      gl_FragColor = vec4(color, 0.9);
    }
  `
}

function Particles() {
  const count = 100
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  const pointsRef = useRef<THREE.Points>(null)
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#B31B1B"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function OrbMesh({ isFooter = false }: { isFooter?: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const [isDesktop, setIsDesktop] = React.useState(true)

  React.useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
    }
  })

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColorWhite: { value: new THREE.Color('#FDFDFD') },
    uColorBurgundy: { value: new THREE.Color('#B31B1B') },
    uColorCore: { value: new THREE.Color('#7A1212') },
  }), [])

  // Position: Middle-Right on desktop, Center-Middle on mobile
  // For footer, it will be centered.
  const targetPosition: [number, number, number] = isFooter ? [0, 0, 0] : (isDesktop ? [2.8, 0.2, 0] : [0, 0, -4])
  const orbScale = isFooter ? 0.8 : (isDesktop ? 1.8 : 2.5)

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 128, 128]} ref={meshRef} position={targetPosition} scale={orbScale}>
        <shaderMaterial
          ref={materialRef}
          args={[AtmosphericShader]}
          uniforms={uniforms}
          transparent
        />
      </Sphere>
      {!isFooter && <Particles />}
    </Float>
  )
}

export default function GlowingOrb({ isFooter = false }: { isFooter?: boolean }) {
  return (
    <div className={`w-full h-full pointer-events-none overflow-hidden ${isFooter ? 'opacity-40' : 'opacity-60 md:opacity-90'}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#FDFDFD" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#B31B1B" />
        
        <OrbMesh isFooter={isFooter} />
      </Canvas>
    </div>
  )
}
