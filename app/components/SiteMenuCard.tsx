'use client'

import { forwardRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SITE_NAV_LINKS } from './nav-config'

// Diagonal positions in the 3×3 grid form a natural X
const X_DOTS = new Set([0, 2, 4, 6, 8])

/** Top-right square sized to the trigger — old % insets clipped the larger frosted chip. */
const CLOSED = 'inset(0 0 calc(100% - 4.75rem) calc(100% - 4.75rem) round 16px)'
const WIDE = 'inset(0 0 calc(100% - 4.75rem) 0 round 16px)'
const OPEN = 'inset(0 0 0 0 round 16px)'

/**
 * Same expandable dot-grid menu as the home hero (HeroAlt), for use on inner pages.
 * Closed: flat brand-dark chip + cream dots (visible on dark pages and cream footer). No drop shadow.
 * Open: chip fades out so the X reads on the cream panel.
 */
const SiteMenuCard = forwardRef<HTMLDivElement>(function SiteMenuCard(_, ref) {
  const [open, setOpen] = useState(false)

  return (
    <div
      ref={ref}
      className="fixed z-[20002] right-3 top-[max(0.75rem,env(safe-area-inset-top))] sm:right-[6%] sm:top-6 pointer-events-auto"
    >
      <motion.div
        animate={{
          clipPath: open ? [CLOSED, WIDE, OPEN] : [OPEN, WIDE, CLOSED],
          backgroundColor: open ? '#fff7f7' : 'rgba(246,232,234,0)',
        }}
        transition={{
          clipPath: {
            duration: open ? 0.72 : 0.52,
            times: [0, 0.4, 1],
            ease: open ? [0.16, 1, 0.3, 1] : [0.7, 0, 0.84, 0],
          },
          backgroundColor: { duration: 0.22, delay: open ? 0 : 0.3 },
        }}
        style={{ borderRadius: 16 }}
        className="w-[min(100vw-1.5rem,280px)] sm:w-[280px]"
      >
        <div className="flex justify-end p-3">
          <motion.div
            animate={{
              backgroundColor: open ? 'rgba(19, 5, 2, 0)' : 'rgba(19, 5, 2, 0.92)',
              borderColor: open ? 'rgba(255, 247, 247, 0)' : 'rgba(255, 247, 247, 0.12)',
            }}
            transition={{ duration: 0.2 }}
            className="flex size-[2.75rem] shrink-0 items-center justify-center rounded-xl border shadow-none"
          >
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid h-[30px] w-[30px] grid-cols-3 grid-rows-3 gap-1.5 place-items-center p-0 cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b83a3a]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#130502]"
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.span
                  key={i}
                  animate={{
                    opacity: open && !X_DOTS.has(i) ? 0 : 1,
                    scale: open && X_DOTS.has(i) ? 1.3 : 1,
                    backgroundColor:
                      open && X_DOTS.has(i)
                        ? '#130502'
                        : open
                          ? 'rgba(255,247,247,0)'
                          : '#fff7f7',
                  }}
                  transition={{ duration: 0.22, delay: open ? i * 0.018 : (8 - i) * 0.018 }}
                  className="block size-1.5 rounded-[1.5px]"
                />
              ))}
            </button>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.18, delay: open ? 0.5 : 0 }}
          aria-hidden={!open}
          className="px-7 pb-9"
        >
          <ul className="flex flex-col">
            {SITE_NAV_LINKS.map((link, i) => (
              <motion.li
                key={link.name}
                animate={{ opacity: open ? 1 : 0, y: open ? 0 : 10 }}
                transition={{ duration: 0.26, delay: open ? i * 0.055 + 0.52 : 0, ease: 'easeOut' }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="block py-3 text-[1.35rem] font-medium tracking-[-0.025em] text-[#130502]/75 no-underline hover:text-[#130502] transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: 0.2, delay: open ? 0.75 : 0 }}
            className="mt-6 pt-5 border-t border-[#130502]/12"
          >
            <p className="text-[0.65rem] uppercase tracking-widest text-[#130502]/35 mb-2">Q2 2026 · Open for projects</p>
            <a
              href="mailto:sifatbht@gmail.com"
              tabIndex={open ? 0 : -1}
              className="text-[0.85rem] font-medium text-[#130502]/55 hover:text-[#130502] transition-colors"
            >
              sifatbht@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
})

export default SiteMenuCard
