import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function GridLines({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["default-3"]}>
        <div className={styles["container-3"]}>
          <div className={styles["filler"]} />
          <div className={styles["line"]} />
          <div className={styles["line"]} />
          <div className={styles["filler"]} />
        </div>
      </div>
  )
}
