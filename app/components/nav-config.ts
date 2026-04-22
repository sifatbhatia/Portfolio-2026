/** Shared primary navigation — keep in sync across menu surfaces. */
export const SITE_NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Signals', href: '/signals' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const

export function navLinkIsActive(pathname: string, href: string) {
  if (pathname === href) return true
  if (href === '/') return false
  if (href === '/signals')
    return pathname === '/signals' || pathname.startsWith('/signals/') || pathname === '/journal'
  return pathname.startsWith(href)
}
