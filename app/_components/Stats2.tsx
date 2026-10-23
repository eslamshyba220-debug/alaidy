import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import CountUp from "./CountUp"

export default function Stats2({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["l-alt"]}>
        <div className={styles["counter-2"]}>
          <CountUp value={slots[1] ?? slots[0] ?? "16+"} className={styles["p-59"]} />
        </div>
        <div className={styles["texts-3"]}>
          <div className={styles["text-1-3"]}>
            <h4 className={styles["h4-3"]}>{t(slots[2] ?? "Years of banking expertise", locale)}</h4>
          </div>
        </div>
      </div>
  )
}
