import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function GridLines3({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["default-5"]}>
        <div className={styles["container-5"]}>
          <div className={styles["filler-3"]} />
          <div className={styles["line-3"]} />
          <div className={styles["line-3"]} />
          <div className={styles["filler-3"]} />
        </div>
      </div>
  )
}
