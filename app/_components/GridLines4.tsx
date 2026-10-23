import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function GridLines4({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["default-6"]}>
        <div className={styles["container-6"]}>
          <div className={styles["filler-4"]} />
          <div className={styles["line-4"]} />
          <div className={styles["line-4"]} />
          <div className={styles["filler-4"]} />
        </div>
      </div>
  )
}
