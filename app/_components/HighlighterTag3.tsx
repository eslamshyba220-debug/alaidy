import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function HighlighterTag3({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["dot-small"]}>
        <div className={styles["text-14"]}>
          <p className={styles["p-62"]}>{t(slots[0] ?? "Our Mission", locale)}</p>
        </div>
      </div>
  )
}
