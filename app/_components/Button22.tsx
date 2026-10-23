import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function Button22({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <a className={styles["variant-7-2"]} href="/#solution">
        <div className={styles["div-2"]}>
          <p className={styles["p-2"]}>{t(slots[0] ?? "Explore Our Services", locale)}</p>
        </div>
      </a>
  )
}
