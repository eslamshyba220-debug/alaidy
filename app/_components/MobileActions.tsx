"use client"

import { useEffect, useState } from "react"
import { COMPANY_WHATSAPP } from "../_lib/consultation"
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

  if (!COMPANY_WHATSAPP) return null

  return (
    <nav className={styles["mobile-actions"]} aria-label={locale === "ar" ? "روابط سريعة" : "Quick actions"} hidden={formFocused}>
      <a href="tel:+97142322774">{locale === "ar" ? "اتصل" : "Call"}</a>
      <a href={`https://wa.me/${COMPANY_WHATSAPP}`} target="_blank" rel="noopener noreferrer">
        {locale === "ar" ? "واتساب" : "WhatsApp"}
      </a>
    </nav>
  )
}
