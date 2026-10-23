"use client"

import { useEffect, useRef, type ReactNode } from "react"
import styles from "./styles.module.css"

// Keep the exported slides and controls server-rendered; restore only their behavior.
export default function HeroCarousel({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = root.current
    if (!element) return
    const track = element.querySelector<HTMLElement>(`.${styles.ul}`)
    const dots = Array.from(element.querySelectorAll<HTMLButtonElement>(`.${styles["div-51"]} button`))
    const arrows = Array.from(element.querySelectorAll<HTMLButtonElement>(`.${styles["div-50"]} button`))
    if (!track || !dots.length) return

    // Framer exported four repeated groups for its seamless carousel loop.
    const count = dots.length
    const first = count
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let index = first
    let timer: ReturnType<typeof setTimeout> | undefined
    let settle: ReturnType<typeof setTimeout> | undefined
    let pointerStart: number | undefined
    let navigation = 0
    let disposed = false
    const activeIndex = () => ((index - first) % count + count) % count

    function paint(animate: boolean) {
      track!.style.transition = animate && !reducedMotion.matches
        ? "transform 1800ms cubic-bezier(0.16, 1, 0.3, 1)"
        : "none"
      track!.style.transform = `translateX(calc(${-index * 100}% - ${index * gap}px))`
      element!.dataset.activeSlide = String(activeIndex() + 1)
      dots.forEach((dot, i) => {
        dot.type = "button"
        dot.setAttribute("aria-label", `Scroll to page ${i + 1}`)
        if (i === activeIndex()) dot.setAttribute("aria-current", "true")
        else dot.removeAttribute("aria-current")
        const indicator = dot.firstElementChild as HTMLElement | null
        if (indicator) indicator.style.opacity = i === activeIndex() ? "1" : "0.5"
      })
    }

    function schedule() {
      clearTimeout(timer)
      if (!document.hidden && !reducedMotion.matches) {
        timer = setTimeout(() => {
          // Also check activeElement: focus events may be deferred in an inactive tab.
          if (element!.contains(document.activeElement)) schedule()
          else goTo(index + 1)
        }, 3000)
      }
    }

    async function goTo(next: number) {
      const request = ++navigation
      clearTimeout(timer)
      next = Math.max(0, Math.min(track!.children.length - 1, next))
      // Keep the current image visible until the destination is decoded.
      const images = Array.from(track!.children[next].querySelectorAll("img"))
      try {
        await Promise.all(images.map(image => image.decode()))
      } catch {
        if (!disposed && request === navigation) schedule()
        return
      }
      if (disposed || request !== navigation) return
      clearTimeout(settle)
      index = next
      paint(true)
      settle = setTimeout(() => {
        if (index < first || index >= first + count) {
          index = first + activeIndex()
          paint(false)
        }
      }, reducedMotion.matches ? 0 : 1800)
      schedule()
    }

    const dotHandlers = dots.map((dot, i) => {
      const handler = () => goTo(first + i)
      dot.addEventListener("click", handler)
      return handler
    })
    const arrowHandlers = arrows.map((arrow, i) => {
      arrow.type = "button"
      arrow.setAttribute("aria-label", i === 0 ? "Previous" : "Next")
      const handler = () => goTo(index + (i === 0 ? -1 : 1))
      arrow.addEventListener("click", handler)
      return handler
    })
    const onFocusIn = () => { clearTimeout(timer) }
    const onFocusOut = (event: FocusEvent) => {
      if (!element.contains(event.relatedTarget as Node | null)) {
        schedule()
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault()
        goTo(index + (event.key === "ArrowLeft" ? -1 : 1))
      }
    }
    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "touch" || (event.target as Element).closest("button")) return
      pointerStart = event.clientX
      clearTimeout(timer)
    }
    const onPointerUp = (event: PointerEvent) => {
      if (pointerStart === undefined) return
      const distance = event.clientX - pointerStart
      pointerStart = undefined
      if (Math.abs(distance) > 40) goTo(index + (distance < 0 ? 1 : -1))
      else schedule()
    }
    const onPointerCancel = () => { pointerStart = undefined; schedule() }
    element.addEventListener("focusin", onFocusIn)
    element.addEventListener("focusout", onFocusOut)
    element.addEventListener("keydown", onKeyDown)
    element.addEventListener("pointerdown", onPointerDown)
    element.addEventListener("pointerup", onPointerUp)
    element.addEventListener("pointercancel", onPointerCancel)
    document.addEventListener("visibilitychange", schedule)
    reducedMotion.addEventListener("change", schedule)
    paint(false)
    schedule()

    return () => {
      disposed = true
      clearTimeout(timer)
      clearTimeout(settle)
      dots.forEach((dot, i) => dot.removeEventListener("click", dotHandlers[i]))
      arrows.forEach((arrow, i) => arrow.removeEventListener("click", arrowHandlers[i]))
      element.removeEventListener("focusin", onFocusIn)
      element.removeEventListener("focusout", onFocusOut)
      element.removeEventListener("keydown", onKeyDown)
      element.removeEventListener("pointerdown", onPointerDown)
      element.removeEventListener("pointerup", onPointerUp)
      element.removeEventListener("pointercancel", onPointerCancel)
      document.removeEventListener("visibilitychange", schedule)
      reducedMotion.removeEventListener("change", schedule)
    }
  }, [])

  return <div ref={root} className={styles["div-46"]} role="region" aria-label="Featured images">{children}</div>
}
