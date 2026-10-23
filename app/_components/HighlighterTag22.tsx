import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function HighlighterTag22({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["primary-4"]}>
        <div className={styles["highlighter-2"]} />
        <div className={styles["text-13"]}>
          <p className={styles["p-57"]}>{t(slots[0] ?? "About Us", locale)}</p>
        </div>
      </div>
  )
}
