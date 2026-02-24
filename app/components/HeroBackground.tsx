import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function HeroBackground() {
    const containerRef = useRef<HTMLDivElement>(null)
    const row1Ref = useRef<HTMLDivElement>(null)
    const row2Ref = useRef<HTMLDivElement>(null)
    const row3Ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            // Parallax effects for different rows
            gsap.to(row1Ref.current, {
                y: 200,
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "1000 top",
                    scrub: true,
                },
                ease: "none"
            })

            gsap.to(row2Ref.current, {
                y: -200,
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "1000 top",
                    scrub: true,
                },
                ease: "none"
            })

            gsap.to(row3Ref.current, {
                y: 100,
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "1000 top",
                    scrub: true,
                },
                ease: "none"
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none flex flex-col justify-center items-center opacity-[0.03]">
            <div ref={row1Ref} className="absolute top-[10%] -left-[10%] w-[120%] whitespace-nowrap will-change-transform">
                <h1 className="text-[15vw] font-bold font-inter leading-none tracking-tighter text-black">
                    SIFTION SIFTION SIFTION SIFTION
                </h1>
            </div>

            <div ref={row2Ref} className="absolute top-[40%] -right-[10%] w-[120%] whitespace-nowrap text-right will-change-transform">
                <h1 className="text-[15vw] font-light font-playfair italic leading-none tracking-tighter text-black">
                    Lumen Lumen Lumen Lumen
                </h1>
            </div>

            <div ref={row3Ref} className="absolute bottom-[10%] -left-[10%] w-[120%] whitespace-nowrap will-change-transform">
                <h1 className="text-[15vw] font-bold font-inter leading-none tracking-widest text-black">
                    DESIGN TECH DESIGN TECH
                </h1>
            </div>

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
    )
}
