import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function Button({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <a className={styles["solid-black"]} href="/free-consultation">
        <div className={styles["div-14"]}>
          <p className={styles["p-25"]}>{t(slots[0] ?? "Book a Free Consultation", locale)}</p>
        </div>
        <div className={styles["arrow-icon-wrapper"]}>
          <svg className={styles["arrow-icon"]} viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <svg className={styles["arrow-icon-2"]} viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </a>
  )
}
