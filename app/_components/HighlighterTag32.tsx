import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function HighlighterTag32({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["dot-small-2"]}>
        <div className={styles["text-15"]}>
          <p className={styles["p-65"]}>{t(slots[0] ?? "Why Us", locale)}</p>
        </div>
      </div>
  )
}
