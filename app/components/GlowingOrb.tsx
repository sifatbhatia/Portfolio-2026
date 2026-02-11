'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

// Custom Shader for Gradient/Glow effect
const GradientShader = {
  uniforms: {
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color('#FFF5EE') }, // Warm white/seashell
    uColorB: { value: new THREE.Color('#F2D2BD') }, // Soft peach/tan
    uColorC: { value: new THREE.Color('#D4A5A5') }, // Muted pinkish red
    uColorCore: { value: new THREE.Color('#B31B1B') }, // Burgundy core
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform float uTime;

    // Simplex noise function for organic movement
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    float snoise(vec3 v) { 
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 = v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
      vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
      i = mod289(i); 
      vec4 p = permute( permute( permute( 
                 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
               + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 0.142857142857; // 1.0/7.0
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
    }

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      
      // Subtle vertex displacement
      float noiseVal = snoise(position * 1.5 + uTime * 0.2);
      vec3 newPosition = position + normal * noiseVal * 0.05;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform vec3 uColorC;
    uniform vec3 uColorCore;

    void main() {
      // Fresnel effect for edge glow
      vec3 viewDir = normalize(cameraPosition - vPosition);
      float fresnel = pow(1.0 - dot(viewDir, vNormal), 2.0);

      // Mix colors based on fresnel
      vec3 color = mix(uColorA, uColorB, vNormal.y * 0.5 + 0.5); // Vertical gradient
      
      // Add the burgundy core influence based on fresnel intensity
      color = mix(color, uColorC, fresnel * 0.6);
      
      // Core glow
      color += uColorCore * (1.0 - fresnel) * 0.2;

      // Soft glow output
      gl_FragColor = vec4(color, 1.0);
    }
  `
}

function OrbMesh() {
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
      meshRef.current.rotation.y += 0.002
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05
    }
  })

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color('#F5F5F5') }, // Off-white
    uColorB: { value: new THREE.Color('#E0C0C0') }, // Soft warm rose
    uColorC: { value: new THREE.Color('#B31B1B') }, // Burgundy
    uColorCore: { value: new THREE.Color('#500000') }, // Deep red core
  }), [])

  // Position: Middle-Right on desktop, Center/Top-Left on mobile
  const targetPosition = isDesktop ? [2.5, 0.5, 1] : [0, 1, 0]

  return (
    <Sphere args={[1.5, 64, 64]} ref={meshRef} position={targetPosition}>
      <shaderMaterial
        ref={materialRef}
        args={[GradientShader]}
        uniforms={uniforms}
        transparent
      />
    </Sphere>
  )
}

export default function GlowingOrb() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#ffccdd" />
        
        {/* The Orb */}
        <OrbMesh />
      </Canvas>
    </div>
  )
}
