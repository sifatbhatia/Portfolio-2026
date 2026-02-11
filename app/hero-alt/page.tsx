'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import GlobalNavbar from '../components/GlobalNavbar'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import ThreeCarousel from '../components/ThreeCarousel'

const FEATURED_PROJECTS = [
    {
        name: "J. Worra",
        role: "Art Direction",
        image: "/previews/j-worra.png"
    },
    {
        name: "Wicked Paradise",
        role: "Web Design",
        image: "/previews/wicked-paradise.png"
    },
    {
        name: "Qlo Agency",
        role: "Development",
        image: "/previews/qlo-agency.png"
    }
]

export default function HeroAlt() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll()
    const [activeProjectIndex, setActiveProjectIndex] = useState(0)
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (isHovering) {
            interval = setInterval(() => {
                setActiveProjectIndex((prev) => (prev + 1) % FEATURED_PROJECTS.length)
            }, 2000)
        } else {
            setActiveProjectIndex(0) // Reset to first slide when not hovering
        }
        return () => clearInterval(interval)
    }, [isHovering])

    // Sifat Bhatia Scaling Logic - Anchored Top Left
    // Scale down from 1 to 0.15 (approx navbar logo size)
    const scale = useTransform(scrollY, [0, 300], [1, 0.15])
    // Move y position to align with navbar (handled by layout, but fine tune if needed)
    const y = useTransform(scrollY, [0, 300], [0, -10])

    return (
        <main className="min-h-[200vh] bg-white text-black font-inter selection:bg-[var(--accent)] selection:text-white relative">

            {/* Navbar with hidden logo (opacity 0) so we can replace it with our hero text */}
            <div className="fixed top-0 left-0 right-0 z-[50] pointer-events-none">
                <GlobalNavbar />
            </div>

            <section className="relative z-10 h-screen flex flex-col justify-between px-[6%] pt-32 pb-12 top-0 pointer-events-none">

                {/* Massive Sticky Title - Top Left */}
                <div className="fixed top-0 left-[6%] z-[70] origin-top-left pt-6 md:pt-8 mix-blend-difference text-white pointer-events-auto">
                    <motion.h1
                        style={{ scale, y }}
                        className="text-[10vw] leading-[0.9] font-normal tracking-[-0.05em] origin-top-left text-black"
                    >
                        Sifat <br className="hidden md:block" />
                        <span className="font-playfair italic">Bhatia.</span>
                    </motion.h1>
                </div>

                {/* This spacer pushes content down so it doesn't overlap the fixed header initially */}
                <div className="flex-grow" />

                {/* Bottom Content - Refined Typography */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 w-full pointer-events-auto pb-8">

                    {/* Left Side */}
                    <div className="max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-6xl md:text-8xl font-normal tracking-[-0.03em] leading-[0.9] mb-6 text-black"
                        >
                            Atmospheric <span className="font-playfair italic">Interfaces</span><sup className="text-2xl align-top ml-2 font-inter">™</sup>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-2xl md:text-3xl font-light text-black/60 mb-12 font-inter max-w-xl"
                        >
                            Design. Engineering. Experience.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-[0.6rem] font-bold uppercase tracking-[0.15em] leading-relaxed max-w-[280px] text-black"
                        >
                            Los Angeles based designer and developer crafting high-fidelity interactive digital experiences.
                        </motion.div>
                    </div>

                    {/* Right Side - Selected Projects Call to Action */}
                    <div className="flex flex-col items-end gap-6 w-full md:w-auto">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <Link
                                href="/projects"
                                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-black text-white hover:bg-[var(--accent)] transition-colors duration-300 rounded-full overflow-hidden"
                            >
                                <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em]">Selected Projects</span>
                                <span className="relative z-10 p-1 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                                    <ArrowUpRight size={14} className="text-white" />
                                </span>
                            </Link>
                        </motion.div>
                    </div>

                </div>

            </section>

        </main>
    )
}
