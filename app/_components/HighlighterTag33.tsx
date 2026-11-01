import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function HighlighterTag33({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["dot-small-3"]}>
        <div className={styles["text-16"]}>
          <p className={styles["p-66"]}>{t(slots[0] ?? "Why Clients Choose Us", locale)}</p>
        </div>
      </div>
  )
}
