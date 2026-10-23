import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function Badge3({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["badge-2"]}>
        <div className={styles["slash-separator"]}>
          <p className={styles["p-13"]}>{slots[0] ?? "/"}</p>
        </div>
        <div className={styles["market-leaders-label-3"]}>
          <p className={styles["p-24"]}>{t(slots[1] ?? "FAQs", locale)}</p>
        </div>
      </div>
  )
}
