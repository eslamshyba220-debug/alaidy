import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function Button24({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <a className={styles["default-2"]} href="/free-consultation">
        <div className={styles["div-34"]}>
          <p className={styles["p-55"]}>{t(slots[0] ?? "Contact us", locale)}</p>
        </div>
      </a>
  )
}
