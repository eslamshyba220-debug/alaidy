"use client"

import { useEffect, useRef } from "react"

export default function CountUp({ value, className }: { value: string; className: string }) {
  const element = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    const node = element.current
    if (!node) return
    const target = Number(value.replace(/[^\d.]/g, ""))
    if (!Number.isFinite(target)) return
    const suffix = value.endsWith("+") ? "+" : ""
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    let started = false
    const format = (amount: number) => `${Math.round(amount).toLocaleString("en-US")}${suffix}`
    const start = () => {
      if (started) return
      started = true
      if (reduced.matches) { node.textContent = value; return }
      const begin = performance.now()
      const tick = (now: number) => {
        const progress = Math.min(1, (now - begin) / 1500)
        node.textContent = format(target * (1 - Math.pow(1 - progress, 3)))
        if (progress < 1) frame = requestAnimationFrame(tick)
        else node.textContent = value
      }
      frame = requestAnimationFrame(tick)
    }
    if (!("IntersectionObserver" in window)) { start(); return () => cancelAnimationFrame(frame) }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { start(); observer.disconnect() }
    }, { threshold: 0.35 })
    observer.observe(node)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [value])
  return <p ref={element} className={className} data-counter="" aria-label={value} dir="ltr">{value}</p>
}
