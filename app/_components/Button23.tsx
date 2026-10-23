import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function Button23({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <a className={styles["variant-7-3"]} href="/free-consultation">
        <div className={styles["div-7"]}>
          <p className={styles["p-12"]}>{t(slots[0] ?? "Start Your Journey", locale)}</p>
        </div>
      </a>
  )
}
