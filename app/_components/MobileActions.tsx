"use client"

import { useEffect, useState } from "react"
import { WHATSAPP_NUMBER } from "../_lib/consultation"
import type { Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function MobileActions({ locale }: { locale: Locale }) {
  const [formFocused, setFormFocused] = useState(false)

  useEffect(() => {
    const updateFormFocus = (event: FocusEvent) => {
      setFormFocused((event.target as HTMLElement | null)?.closest(".consultation-form") !== null)
    }
    const clearFormFocus = () => {
      window.setTimeout(() => {
        setFormFocused(Boolean(document.activeElement?.closest(".consultation-form")))
      }, 0)
    }
    document.addEventListener("focusin", updateFormFocus)
    document.addEventListener("focusout", clearFormFocus)
    return () => {
      document.removeEventListener("focusin", updateFormFocus)
      document.removeEventListener("focusout", clearFormFocus)
    }
  }, [])

  if (!WHATSAPP_NUMBER) return null

  return (
    <nav className={styles["mobile-actions"]} aria-label={locale === "ar" ? "روابط سريعة" : "Quick actions"} hidden={formFocused}>
      <a href={`tel:+${WHATSAPP_NUMBER}`}>{locale === "ar" ? "اتصل" : "Call"}</a>
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
        {locale === "ar" ? "واتساب" : "WhatsApp"}
      </a>
    </nav>
  )
}
