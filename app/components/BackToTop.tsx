'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useLenis } from 'lenis/react'

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const lenis = useLenis()

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        lenis?.scrollTo(0, { duration: 1.5 })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 bg-white text-black rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-black/5 hover:border-black/20 transition-colors"
                    aria-label="Back to top"
                >
                    <ArrowUp size={20} strokeWidth={1.5} />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
