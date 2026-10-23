import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function Instagram({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <svg className={styles["social-glyph"]} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.25" />
      </svg>
  )
}
