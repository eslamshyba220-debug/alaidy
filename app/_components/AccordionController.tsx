"use client"

import { useEffect, useId, useRef, type ReactNode } from "react"
import styles from "./styles.module.css"

export default function AccordionController({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  const id = useId()
  useEffect(() => {
    const rows = root.current?.querySelectorAll<HTMLElement>(`.${styles.closed}`) ?? []
    const cleanups: (() => void)[] = []
    rows.forEach((row, index) => {
      const content = row.firstElementChild as HTMLElement | null
      const question = content?.firstElementChild as HTMLElement | null
      const answer = question?.nextElementSibling as HTMLElement | null
      const button = question?.querySelector("button")
      if (!content || !question || !answer || !button) return
      button.type = "button"
      answer.id = `${id}-answer-${index}`
      button.setAttribute("aria-controls", answer.id)
      button.setAttribute("aria-expanded", "false")
      answer.hidden = true
      const toggle = () => {
        const open = button.getAttribute("aria-expanded") !== "true"
        button.setAttribute("aria-expanded", String(open))
        row.dataset.accordionOpen = String(open)
        answer.hidden = !open
      }
      question.addEventListener("click", toggle)
      cleanups.push(() => question.removeEventListener("click", toggle))
    })
    return () => cleanups.forEach(cleanup => cleanup())
  }, [id])
  return <div ref={root} style={{ display: "contents" }}>{children}</div>
}
