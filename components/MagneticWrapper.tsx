"use client";

import React, { useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const SPRING_CONFIG = { damping: 40, stiffness: 400, mass: 1 };

export default function MagneticWrapper({ 
  children, 
  intensity = 0.3,
  className = "" 
}: { 
  children: React.ReactNode; 
  intensity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useSpring(0, SPRING_CONFIG);
  const mouseY = useSpring(0, SPRING_CONFIG);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    mouseX.set((clientX - centerX) * intensity);
    mouseY.set((clientY - centerY) * intensity);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: mouseX,
        y: mouseY,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
