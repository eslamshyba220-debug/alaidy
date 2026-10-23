import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function Template2({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["div-35"]} />
  )
}
