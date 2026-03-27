"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    if (pathname === '/') return <>{children}</>

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

    const delay = isHomePage ? 0.3 : 0.0

    return (
        <div key={pathname} className="relative z-0 min-h-screen">
            {/* ─── Page Transition Curtain ─── */}
            <motion.div
                initial={curtainInitial}
                animate={curtainTarget}
                transition={
                    holdCurtainForLoadCheck
                        ? { duration: 0 }
                        : {
                            duration: 1.1,
                            ease: [0.19, 1, 0.22, 1],
                            delay: delay,
                        }
                }
                className={`fixed inset-0 z-[9999] bg-black pointer-events-none ${curtainOriginClass}`}
            />

            {/* Content wrapper strictly without spatial translations. 
                This allows GSAP ScrollTrigger to measure the DOM instantly and without glitches. */}
            <div className="relative z-10 bg-[var(--background)] min-h-screen">
                {children}
            </div>
        </div>
    )
}
