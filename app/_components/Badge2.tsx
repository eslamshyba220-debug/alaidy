import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function Badge2({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["white"]}>
        <div className={styles["slash-separator"]}>
          <p className={styles["p-20"]}>{slots[0] ?? "/"}</p>
        </div>
        <div className={styles["market-leaders-label-2"]}>
          <p className={styles["p-21"]}>{t(slots[1] ?? "Testimonial", locale)}</p>
        </div>
      </div>
  )
}
