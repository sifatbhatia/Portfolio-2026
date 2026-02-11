'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import GlobalNavbar from './components/GlobalNavbar'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white text-black flex flex-col selection:bg-[var(--accent)] selection:text-white overflow-hidden relative">
            <GlobalNavbar />

            <section className="flex-1 flex flex-col items-center justify-center px-[6%] text-center relative z-10 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    className="w-full max-w-2xl mx-auto space-y-8"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">404 Error</span>

                    <h1 className="font-playfair italic text-5xl md:text-7xl lg:text-8xl font-normal leading-tight text-black">
                        Page not found.
                    </h1>

                    <p className="text-lg md:text-xl font-light text-black/60 max-w-md mx-auto leading-relaxed">
                        The page you are looking for doesn't exist or has been moved.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <Link href="/" className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:bg-[var(--accent)] hover:border-[var(--accent)]">
                            <span>Back Home</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/pulse" className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-colors text-black">
                            Read Signals
                        </Link>
                    </div>
                </motion.div>

            </section>
        </main>
    )
}
