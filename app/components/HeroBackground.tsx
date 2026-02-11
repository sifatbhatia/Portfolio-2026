'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroBackground() {
    const { scrollY } = useScroll()

    // Parallax effects for different rows
    const y1 = useTransform(scrollY, [0, 1000], [0, 200])
    const y2 = useTransform(scrollY, [0, 1000], [0, -200])
    const y3 = useTransform(scrollY, [0, 1000], [0, 100])

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none flex flex-col justify-center items-center opacity-[0.03]">
            <motion.div style={{ y: y1 }} className="absolute top-[10%] -left-[10%] w-[120%] whitespace-nowrap">
                <h1 className="text-[15vw] font-bold font-inter leading-none tracking-tighter text-black">
                    SIFTION SIFTION SIFTION SIFTION
                </h1>
            </motion.div>

            <motion.div style={{ y: y2 }} className="absolute top-[40%] -right-[10%] w-[120%] whitespace-nowrap text-right">
                <h1 className="text-[15vw] font-light font-playfair italic leading-none tracking-tighter text-black">
                    Lumen Lumen Lumen Lumen
                </h1>
            </motion.div>

            <motion.div style={{ y: y3 }} className="absolute bottom-[10%] -left-[10%] w-[120%] whitespace-nowrap">
                <h1 className="text-[15vw] font-bold font-inter leading-none tracking-widest text-black">
                    DESIGN TECH DESIGN TECH
                </h1>
            </motion.div>

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
    )
}
