'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
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
      <nav className="fixed top-0 left-0 w-full z-[20001] border-b border-[var(--color-chalk)] bg-[var(--color-eggshell)]/95 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-[1200px] items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center gap-3 no-underline text-black">
            <span className="h-5 w-5 rounded-full bg-[conic-gradient(from_180deg,#3d75d8,#75bee5,#52d0e9,#2159ba,#ade8f3,#20bad0,#3d75d8)] shadow-[rgba(0,0,0,0.4)_0px_0px_1px_0px]" />
            <span className="text-sm font-bold tracking-[0.05em]">SIFTION</span>
          </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-normal tracking-[0.01em] text-black">
          {navLinks.map(link => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`no-underline transition-colors duration-300 ${isActive ? 'text-black' : 'text-[var(--color-gravel)] hover:text-black'}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--color-obsidian)]"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/contact" className="pill-button pill-button-ghost no-underline">Contact</Link>
          <Link href="/projects" className="pill-button pill-button-primary no-underline">View work</Link>
        </div>

        {/* Mobile Toggle */}
        <motion.div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
          className="relative z-[20002] flex h-9 min-w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[var(--color-chalk)] bg-white text-black shadow-[var(--shadow-subtle-2)] lg:hidden"
        >
          <motion.span
            animate={{
              y: isMenuOpen ? -40 : 0,
              opacity: isMenuOpen ? 0 : 1
            }}
            className="block"
          >
            <Menu size={16} />
          </motion.span>
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{
              y: isMenuOpen ? 0 : 40,
              opacity: isMenuOpen ? 1 : 0
            }}
            className="absolute inset-0 flex items-center justify-center text-black"
          >
            <X size={16} strokeWidth={2} />
          </motion.span>
        </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[20000] bg-[var(--color-eggshell)] p-[6%] pt-28 text-black flex flex-col"
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
                      className="group relative inline-block font-display text-5xl font-light leading-none no-underline text-black"
                    >
                      <span className={`block transition-all duration-500 ${isActive ? 'text-black opacity-100' : 'text-[var(--color-gravel)] group-hover:opacity-0'}`}>
                        {link.name}
                      </span>
                      {!isActive && (
                        <span className="absolute top-0 left-0 block opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-black whitespace-nowrap">
                          {link.name}
                        </span>
                      )}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
            <div className="mt-auto border-t border-[var(--color-chalk)] pt-8">
              <p className="text-sm text-[var(--color-gravel)] mb-2">Available for projects</p>
              <a href="mailto:sifatbht@gmail.com" className="text-xl font-medium text-black transition-colors">sifatbht@gmail.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
