import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import GoogleMark from "./GoogleMark"

export default function Google2({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <GoogleMark className={styles["div-13"]} />
  )
}
