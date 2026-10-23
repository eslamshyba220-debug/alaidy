import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function Facebook({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <svg className={styles["social-glyph"]} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.026 1.792-4.698 4.533-4.698 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.49 0-1.956.931-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
      </svg>
  )
}
