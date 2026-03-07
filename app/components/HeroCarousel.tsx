'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import './HeroCarousel.css'

type Item = { title: string; subtitle: string; year: string; slug: string; image: string }

const CONFIG = Object.freeze({
  HOVER_SCALE: 1.35,
  BASE_SCALE: 1,
  LERP_SPEED: 0.07,
  MOBILE_BP: 768,
  SCALE_MAX: 2.7,
  SCALE_MIN: 1,
  FALLOFF_RATIO: 0.7,
  WHEEL_MULTIPLIER: 1.5,
  RESIZE_DEBOUNCE_MS: 100,
})

export default function HeroCarousel({ items }: { items: Item[] }) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLSpanElement>(null)
  const subRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track) return

    const nodes = Array.from(track.querySelectorAll<HTMLElement>('.carousel-item'))
    if (!nodes.length) return

    nodes.forEach((item) => {
      item.style.setProperty('--scale', String(CONFIG.BASE_SCALE))
      item.style.setProperty('--scroll-scale', '0.9')
    })

    const mql = window.matchMedia(`(max-width: ${CONFIG.MOBILE_BP - 1}px)`)
    let isMobile = mql.matches
    let currentX = 0
    let targetX = 0
    let mouseRatioX = 0.5
    let mouseInside = false
    let rafId = 0
    let isPageVisible = !document.hidden
    let previousActive: HTMLElement | null = null
    let previousClosestMobile: HTMLElement | null = null

    const controller = new AbortController()
    const { signal } = controller

    const getMaxScroll = () => Math.max(0, track.scrollWidth - viewport.clientWidth)
    const clamp = (x: number) => {
      const max = getMaxScroll()
      return max === 0 ? 0 : Math.max(-max, Math.min(0, x))
    }
    const lerp = (a: number, b: number, t: number) => {
      const d = b - a
      return Math.abs(d) > 0.05 ? a + d * t : b
    }

    const updateActiveItemDesktop = () => {
      const vpCenterX = viewport.clientWidth / 2
      let closest = nodes[0]
      let closestDist = Infinity

      for (const item of nodes) {
        const rect = item.getBoundingClientRect()
        const dist = Math.abs(rect.left + rect.width / 2 - vpCenterX)
        if (dist < closestDist) {
          closestDist = dist
          closest = item
        }
      }

      if (closest !== previousActive) {
        previousActive?.classList.remove('is-active')
        closest.classList.add('is-active')
        previousActive = closest
      }
    }

    const updateMobileWidths = () => {
      const vpCenterY = window.innerHeight / 2
      const falloff = window.innerHeight * CONFIG.FALLOFF_RATIO
      let closest = nodes[0]
      let closestDist = Infinity

      const updates = nodes.map((item) => {
        const rect = item.getBoundingClientRect()
        const itemCenterY = rect.top + rect.height / 2
        const dist = Math.abs(itemCenterY - vpCenterY)
        const t = Math.min(1, dist / Math.max(1, falloff))
        const ease = 1 - t ** 1.5
        const scale = CONFIG.SCALE_MIN + ease * (CONFIG.SCALE_MAX - CONFIG.SCALE_MIN)

        if (dist < closestDist) {
          closestDist = dist
          closest = item
        }

        return { item, scale: scale.toFixed(3) }
      })

      for (const u of updates) u.item.style.setProperty('--scroll-scale', u.scale)

      if (closest !== previousClosestMobile) {
        previousClosestMobile = closest
        const titleEl = closest.querySelector('.caption-title')
        const subEl = closest.querySelector('.caption-subtitle')
        if (titleRef.current && titleEl) titleRef.current.textContent = titleEl.textContent || ''
        if (subRef.current && subEl) subRef.current.textContent = subEl.textContent || ''
      }
    }

    const tick = () => {
      if (!isPageVisible) {
        rafId = 0
        return
      }

      if (isMobile) {
        updateMobileWidths()
      } else {
        if (mouseInside) targetX = -getMaxScroll() * mouseRatioX
        currentX = lerp(currentX, targetX, CONFIG.LERP_SPEED)
        currentX = clamp(currentX)
        track.style.transform = `translate3d(${currentX}px,0,0)`
        updateActiveItemDesktop()
      }

      rafId = requestAnimationFrame(tick)
    }

    const startLoop = () => {
      if (rafId === 0) rafId = requestAnimationFrame(tick)
    }

    startLoop()

    viewport.addEventListener(
      'mousemove',
      (e) => {
        if (isMobile) return
        mouseInside = true
        const rect = viewport.getBoundingClientRect()
        mouseRatioX = Math.max(0, Math.min(1, (e.clientX - rect.left) / Math.max(1, rect.width)))
      },
      { signal },
    )
    viewport.addEventListener('mouseenter', () => (mouseInside = true), { signal })
    viewport.addEventListener('mouseleave', () => (mouseInside = false), { signal })

    viewport.addEventListener(
      'wheel',
      (e) => {
        if (isMobile) return
        mouseInside = false
        targetX = clamp(targetX - (e.deltaY || e.deltaX) * CONFIG.WHEEL_MULTIPLIER)
        e.preventDefault()
      },
      { passive: false, signal },
    )

    track.addEventListener(
      'mouseenter',
      (e) => {
        if (isMobile) return
        const item = (e.target as HTMLElement).closest('.carousel-item') as HTMLElement | null
        if (!item) return
        item.classList.add('is-hovered')
        track.classList.add('has-hover')
        item.style.setProperty('--scale', String(CONFIG.HOVER_SCALE))
      },
      { capture: true, signal },
    )

    track.addEventListener(
      'mouseleave',
      (e) => {
        const item = (e.target as HTMLElement).closest('.carousel-item') as HTMLElement | null
        if (!item) return
        item.classList.remove('is-hovered')
        track.classList.remove('has-hover')
        item.style.setProperty('--scale', String(CONFIG.BASE_SCALE))
      },
      { capture: true, signal },
    )

    const handleBreakpoint = (ev: MediaQueryListEvent) => {
      isMobile = ev.matches
      if (!isMobile) {
        targetX = clamp(targetX)
        currentX = clamp(currentX)
      }
    }
    mql.addEventListener('change', handleBreakpoint, { signal })

    let resizeTimer: number | undefined
    window.addEventListener(
      'resize',
      () => {
        window.clearTimeout(resizeTimer)
        resizeTimer = window.setTimeout(() => {
          if (!isMobile) {
            targetX = clamp(targetX)
            currentX = clamp(currentX)
          }
        }, CONFIG.RESIZE_DEBOUNCE_MS)
      },
      { signal },
    )

    document.addEventListener(
      'visibilitychange',
      () => {
        isPageVisible = !document.hidden
        if (isPageVisible) startLoop()
      },
      { signal },
    )

    return () => {
      controller.abort()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="hero-carousel-section px-[6%] pt-6 pb-4 border-b border-white/12">
      <div className="mb-3 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">Selected Works.</p>
          <p className="mt-1 max-w-[760px] text-sm text-white/60">
            A curated set of projects where visual logic meets technical precision — and where ambitious ideas become something you can feel.
          </p>
        </div>
        <p className="text-[10px] text-white/35 whitespace-nowrap">Drag / Scroll to explore</p>
      </div>
      <div id="carouselViewport" ref={viewportRef} className="hero-carousel-viewport">
        <div id="carouselTrack" ref={trackRef} className="hero-carousel-track">
          {items.map((item) => (
            <Link key={item.slug} className="carousel-item" href={`/projects/${item.slug}`}>
              <div className="carousel-item-media">
                <img src={item.image} alt={item.title} loading="eager" />
              </div>
              <div className="item-caption">
                <span className="caption-title">{item.title}</span>
                <span className="caption-subtitle">{item.subtitle}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div id="mobileCaption" className="mobile-caption">
        <span id="mobileCaptionTitle" ref={titleRef} className="caption-title">{items[0]?.title || ''}</span>
        <span id="mobileCaptionSubtitle" ref={subRef} className="caption-subtitle">{items[0]?.subtitle || ''}</span>
      </div>
    </section>
  )
}
