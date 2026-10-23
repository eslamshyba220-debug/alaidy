import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import Facebook from "./Facebook"

export default function SocialIcon({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <a className={styles["facebook"]} href="https://www.facebook.com/share/1DU2w7VUam/?mibextid=wwXIfr" aria-label="Facebook">
        <Facebook locale={locale} />
      </a>
  )
}
