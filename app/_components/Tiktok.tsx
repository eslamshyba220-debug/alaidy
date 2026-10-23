import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function Tiktok({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <svg className={styles["social-glyph"]} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M16.7 1h-3.5v14.8a3.2 3.2 0 1 1-2.8-3.17V9.1a6.7 6.7 0 1 0 6.3 6.7V8.3a9 9 0 0 0 5.3 1.7V6.5A5.3 5.3 0 0 1 16.7 1Z" />
      </svg>
  )
}
