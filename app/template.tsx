"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    // Hydration-safe load gate: don't start curtain animation until sessionStorage check runs.
    const [hasCheckedLoad, setHasCheckedLoad] = useState(false)
    const [isFirstLoad, setIsFirstLoad] = useState(false)

    useEffect(() => {
        const key = 'sifat-portfolio-loaded'
        const alreadyLoaded = window.sessionStorage.getItem(key)
        if (!alreadyLoaded) {
            setIsFirstLoad(true)
            window.sessionStorage.setItem(key, '1')
        }
        setHasCheckedLoad(true)
    }, [])

    // Refresh GSAP ScrollTrigger after the sweep so it catches the new page coordinates perfectly
    useEffect(() => {
        const refreshDelay = pathname === '/' ? 4700 : 1300
        const timer = setTimeout(() => {
            gsap.registerPlugin(ScrollTrigger)
            ScrollTrigger.refresh()
        }, refreshDelay)
        return () => clearTimeout(timer)
    }, [pathname])

    const isHomePage = pathname === '/'
    const showLoadingScreen = hasCheckedLoad && isFirstLoad && isHomePage
    const holdCurtainForLoadCheck = isHomePage && !hasCheckedLoad

    // Bottom-to-top sweep for first load and homepage. Right-to-left for other pages.
    const isVerticalSweep = showLoadingScreen || isHomePage

    // Ensure we explicitly dictate X and scaleY so animations don't conflict
    const curtainInitial = isVerticalSweep ? { scaleY: 1, x: "0%" } : { scaleY: 1, x: "0%" }
    const curtainAnimate = isVerticalSweep ? { scaleY: 0, x: "0%" } : { scaleY: 1, x: "-100%" }
    const curtainTarget = holdCurtainForLoadCheck ? { scaleY: 1, x: "0%" } : curtainAnimate
    const curtainOriginClass = isVerticalSweep ? "origin-top" : ""

    const delay = showLoadingScreen ? 3.8 : isHomePage ? 2.0 : 0.0

    return (
        <div key={pathname} className="relative z-0 min-h-screen">
            {/* 
        The "curtain" overlay.
        Covers the screen on entry, then sweeps upward magically.
      */}
            <motion.div
                initial={curtainInitial}
                animate={curtainTarget}
                transition={
                    holdCurtainForLoadCheck
                        ? { duration: 0 }
                        : {
                            duration: 1.7,
                            ease: [0.19, 1, 0.22, 1], // Signature motion curve
                            delay: delay,
                        }
                }
                className={`fixed inset-0 z-[9999] bg-black pointer-events-none flex flex-col items-center justify-center ${curtainOriginClass}`}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center gap-6"
                >
                    {isHomePage && (
                        <div className="flex flex-col items-center gap-3 px-6">
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.1, delay: showLoadingScreen ? 0.55 : 0.35 }}
                                className="max-w-[900px] text-center text-white/88 leading-[1.2] tracking-[-0.02em] text-[clamp(1.2rem,2.2vw,2rem)]"
                            >
                                “The details are not the details. They make the design.”
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: showLoadingScreen ? 1.35 : 0.9 }}
                                className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/55"
                            >
                                — Charles Eames
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
