"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import type { Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function LanguageToggle({ locale }: { locale: Locale }) {
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  return (
    <div className={styles["language-toggle"]} role="group" aria-label="Language / اللغة" aria-busy={pending} dir="ltr">
      {(["en", "ar"] as const).map(language => (
        <button
          key={language}
          type="button"
          lang={language}
          dir={language === "ar" ? "rtl" : "ltr"}
          aria-pressed={locale === language}
          disabled={pending}
          onClick={() => {
            if (language === locale) return
            document.cookie = `site-language=${language}; Path=/; Max-Age=31536000; SameSite=Lax`
            startTransition(() => router.refresh())
          }}
        >
          {language === "ar" ? "العربية" : "EN"}
        </button>
      ))}
    </div>
  )
}
