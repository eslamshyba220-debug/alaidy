"use client"

import { useEffect } from "react"
import styles from "./styles.module.css"

export default function ScrollEffects() {
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      document.querySelectorAll<HTMLElement>(`.${styles["process-card"]}`).forEach(element => {
        const bounds = element.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, (innerHeight * 0.55 - bounds.top) / bounds.height))
        element.style.setProperty("--process-progress", String(progress))
      })
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    update()
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])
  return null
}
