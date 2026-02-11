'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Signals', href: '/signals' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function GlobalNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[20001] flex justify-end items-center px-[6%] py-6 md:py-8 text-white mix-blend-difference pointer-events-none">

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-12 text-[0.7rem] font-medium uppercase tracking-[0.2em] pointer-events-auto">
          {navLinks.map(link => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`no-underline transition-colors duration-300 ${isActive ? 'text-[var(--accent)] font-bold' : 'hover:text-[var(--accent)]'}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--accent)] rounded-full"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile Toggle */}
        <motion.div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
          className="lg:hidden z-[20002] text-[0.6rem] font-medium uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full cursor-pointer relative overflow-hidden group min-w-[80px] flex justify-center items-center h-8 pointer-events-auto bg-white/10 backdrop-blur-sm"
        >
          <motion.span
            animate={{
              y: isMenuOpen ? -40 : 0,
              opacity: isMenuOpen ? 0 : 1
            }}
            className="block"
          >
            Menu
          </motion.span>
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{
              y: isMenuOpen ? 0 : 40,
              opacity: isMenuOpen ? 1 : 0
            }}
            className="absolute inset-0 flex justify-center items-center text-white font-bold gap-1"
          >
            <X size={12} strokeWidth={3} />
            Close
          </motion.span>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[20000] bg-[#050505] text-white p-[6%] pt-32 flex flex-col"
          >
            <ul className="flex flex-col gap-8">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10, transition: { duration: 0.2 } }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group relative inline-block text-5xl font-normal tracking-tight no-underline text-white"
                    >
                      <span className={`block transition-all duration-500 ${isActive ? 'italic text-[var(--accent)] opacity-100' : 'group-hover:opacity-0'}`}>
                        {link.name}
                      </span>
                      {!isActive && (
                        <span className="absolute top-0 left-0 block opacity-0 transition-opacity duration-500 group-hover:opacity-100 italic text-[var(--accent)] whitespace-nowrap">
                          {link.name}
                        </span>
                      )}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
            <div className="mt-auto border-t border-white/10 pt-8">
              <p className="text-[0.6rem] font-bold uppercase tracking-widest opacity-30 mb-2 text-white">Available for projects</p>
              <a href="mailto:sifatbht@gmail.com" className="text-xl font-bold hover:text-[var(--accent)] transition-colors text-white">sifatbht@gmail.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
