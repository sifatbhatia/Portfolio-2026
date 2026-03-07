"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    // Hydration-safe flags: same initial render on server + client, then decide client-side.
    const [isHydrated, setIsHydrated] = useState(false)
    const [isFirstLoad, setIsFirstLoad] = useState(false)

    useEffect(() => {
        setIsHydrated(true)
        const key = 'sifat-portfolio-loaded'
        const alreadyLoaded = window.sessionStorage.getItem(key)
        if (!alreadyLoaded) {
            setIsFirstLoad(true)
            window.sessionStorage.setItem(key, '1')
        }
    }, [])

    // Refresh GSAP ScrollTrigger after the sweep so it catches the new page coordinates perfectly
    useEffect(() => {
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger)
            ScrollTrigger.refresh()
        }, 1200) // Delay until after sweep completes
        return () => clearTimeout(timer)
    }, [pathname])

    const isHomePage = pathname === '/'
    const showLoadingScreen = isHydrated && isFirstLoad && isHomePage

    // Bottom-to-top sweep for first load and homepage. Right-to-left for other pages.
    const isVerticalSweep = showLoadingScreen || isHomePage

    // Ensure we explicitly dictate X and scaleY so animations don't conflict
    const curtainInitial = isVerticalSweep ? { scaleY: 1, x: "0%" } : { scaleY: 1, x: "0%" }
    const curtainAnimate = isVerticalSweep ? { scaleY: 0, x: "0%" } : { scaleY: 1, x: "-100%" }
    const curtainOriginClass = isVerticalSweep ? "origin-top" : ""

    const delay = showLoadingScreen ? 1.5 : 0.0

    return (
        <div key={pathname} className="relative z-0 min-h-screen">
            {/* 
        The "curtain" overlay.
        Covers the screen on entry, then sweeps upward magically.
      */}
            <motion.div
                initial={curtainInitial}
                animate={curtainAnimate}
                transition={{
                    duration: 1.2,
                    ease: [0.19, 1, 0.22, 1], // Signature motion curve
                    delay: delay,
                }}
                className={`fixed inset-0 z-[9999] bg-black pointer-events-none flex flex-col items-center justify-center ${curtainOriginClass}`}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center gap-6"
                >
                    {showLoadingScreen && (
                        <div className="flex flex-col items-center gap-4">
                            <div className="overflow-hidden">
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
                                    className="text-white font-playfair italic font-light tracking-tight text-4xl md:text-6xl"
                                >
                                    Sifat Bhatia.
                                </motion.div>
                            </div>
                            <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.9 }}
                                className="max-w-[760px] px-6 text-center text-white/70 text-sm md:text-base"
                            >
                                “The details are not the details. They make the design.” — Charles Eames
                            </motion.p>
                        </div>
                    )}
                </motion.div>
            </motion.div>

            {/* Content wrapper strictly without spatial translations. 
                This allows GSAP ScrollTrigger to measure the DOM instantly and without glitches. */}
            <div className="relative z-10 bg-[var(--background)] min-h-screen">
                {children}
            </div>
        </div>
    )
}
