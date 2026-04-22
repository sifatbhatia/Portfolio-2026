'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'

const FOOTER_EMAIL = 'sifatbht@gmail.com'

function FooterEmail() {
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2200)
    return () => clearTimeout(t)
  }, [copied])

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(FOOTER_EMAIL)
      setCopied(true)
    } catch {
      /* clipboard blocked or unavailable */
    }
  }, [])

  const handleClick = () => {
    if (clickTimer.current) clearTimeout(clickTimer.current)
    clickTimer.current = setTimeout(() => {
      clickTimer.current = null
      void copyEmail()
    }, 300)
  }

  const handleDoubleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (clickTimer.current) {
      clearTimeout(clickTimer.current)
      clickTimer.current = null
    }
    window.location.href = `mailto:${FOOTER_EMAIL}`
  }

  return (
    <div className="mt-8 group">
      <button
        type="button"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        className="inline-block text-left text-[14px] font-medium text-[#130502] border-b border-[#130502]/25 hover:border-[#b83a3a] hover:text-[#b83a3a] transition-colors pb-0.5 cursor-pointer bg-transparent p-0 font-inherit rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b83a3a]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff7f7]"
        aria-label={`${FOOTER_EMAIL}. Click once to copy. Double-click to open your mail app.`}
        aria-describedby="footer-email-hint"
      >
        {FOOTER_EMAIL}
      </button>
      <span id="footer-email-hint" className="sr-only">
        One click copies; double-click to write.
      </span>
      <p
        className={
          copied
            ? 'mt-2 block text-[12px] font-normal leading-relaxed text-[#b83a3a]'
            : 'mt-2 hidden max-w-[15rem] text-[12px] font-normal leading-relaxed text-[#130502]/40 group-hover:block group-focus-within:block'
        }
        aria-hidden={!copied}
      >
        {copied ? (
          <span aria-live="polite">Copied.</span>
        ) : (
          'One click copies; double-click to write.'
        )}
      </p>
      <a href={`mailto:${FOOTER_EMAIL}`} className="sr-only">
        Open mail app to email {FOOTER_EMAIL}
      </a>
    </div>
  )
}

const NAV = [
  { label: 'Projects', href: '/projects' },
  { label: 'Signals', href: '/signals' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/siftion' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/siftion' },
  { label: 'Behance', href: 'https://www.behance.net/siftion' },
  { label: 'X', href: 'https://twitter.com/siftion' },
] as const

export default function FooterBrand() {
  return (
    <footer className="relative bg-[#fff7f7] text-[#130502] px-6 sm:px-10 md:px-[6%] pt-24 md:pt-32 pb-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-14 lg:gap-20 pb-16 md:pb-20 border-b border-[#130502]/[0.08]">
          <div className="max-w-xl">
            <Link
              href="/"
              className="inline-block transition-transform duration-300 hover:opacity-80 active:scale-[0.98]"
            >
              <img
                src="/Sifat -Bhatia.svg"
                alt="Sifat Bhatia"
                className="w-[160px] md:w-[200px] h-auto"
                style={{ filter: 'brightness(0) saturate(100%)' }}
              />
            </Link>
            <p className="mt-8 text-[15px] md:text-base text-[#130502]/50 leading-[1.65]">
              Design engineer in Los Angeles — sites, identities, and small products. If the work fits, we&apos;ll
              talk timelines and scope plainly.
            </p>
            <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
              {NAV.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[14px] font-medium text-[#130502] hover:text-[#b83a3a] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:shrink-0 lg:pt-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#130502]/40 mb-5">Elsewhere</p>
            <ul className="space-y-3">
              {SOCIALS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[14px] text-[#130502]/65 hover:text-[#b83a3a] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <FooterEmail />
          </div>
        </div>

        <div className="relative pt-12 md:pt-16 flex flex-col justify-end min-h-[min(42vh,420px)] select-none">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 relative z-20 pb-10">
            <p className="text-[12px] text-[#130502]/45">© {new Date().getFullYear()} Sifat Bhatia</p>
            <p className="text-[12px] text-[#130502]/40">Los Angeles, CA</p>
          </div>

          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[min(100vw,1400px)] pointer-events-none translate-y-[26%] md:translate-y-[24%]">
            <img
              src="/Siftion.svg"
              alt=""
              className="w-full h-auto opacity-[0.22] md:opacity-25"
              style={{ filter: 'brightness(0) saturate(100%)' }}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
