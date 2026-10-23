import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function Badge({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["badge"]}>
        <div className={styles["slash-separator"]}>
          <p className={styles["p-13"]}>{slots[0] ?? "/"}</p>
        </div>
        <div className={styles["market-leaders-label"]}>
          <p className={styles["p-14"]}>{t(slots[1] ?? "How It Works", locale)}</p>
        </div>
      </div>
  )
}
