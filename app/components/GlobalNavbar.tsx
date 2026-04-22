'use client'

import Link from 'next/link'
import SiteMenuCard from './SiteMenuCard'

export { SITE_NAV_LINKS as navLinks, navLinkIsActive } from './nav-config'

export type GlobalNavbarSurface = 'dark' | 'light'

/**
 * Inner pages: wordmark home link + same dot-grid menu as the home hero (see SiteMenuCard).
 */
export default function GlobalNavbar({ surface = 'dark' }: { surface?: GlobalNavbarSurface }) {
  const isLight = surface === 'light'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[20001] flex justify-between items-center px-[6%] py-6 md:py-8 pointer-events-none ${
          isLight ? 'text-[#130502] mix-blend-normal' : 'text-white mix-blend-difference'
        }`}
      >
        <Link
          href="/"
          className="pointer-events-auto transition-transform duration-500 hover:scale-105 active:scale-95 group"
        >
          <img
            src="/Sifat -Bhatia.svg"
            alt="Sifat Bhatia Logo"
            className={`h-8 md:h-10 w-auto ${isLight ? 'brightness-0' : 'invert brightness-0'}`}
          />
        </Link>
      </nav>
      <SiteMenuCard />
    </>
  )
}
