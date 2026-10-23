import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import CountUp from "./CountUp"

export default function Stats({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["l"]}>
        <div className={styles["counter"]}>
          <CountUp value={slots[1] ?? slots[0] ?? "16+"} className={styles["p-4"]} />
        </div>
        <div className={styles["texts"]}>
          <div className={styles["text-1"]}>
            <p className={styles["p-5"]}>{t(slots[2] ?? "Years of Combined Banking Experience", locale)}</p>
          </div>
        </div>
      </div>
  )
}
