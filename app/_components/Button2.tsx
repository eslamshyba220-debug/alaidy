import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function Button2({ slots = [], variant = "solid" , locale = "en" }: { slots?: string[]; variant?: "solid" | "white" ; locale?: Locale }) {
  if (variant === "white") {
    return (
      <a className={styles["variant-7"]} href="/free-consultation">
        <div className={styles["div"]}>
          <p className={styles["p"]}>{t(slots[0] ?? "Get Consultation", locale)}</p>
        </div>
      </a>
    )
  }
  return (
      <a className={styles["solid-black-2"]} href="/free-consultation">
        <div className={styles["div-41"]}>
          <p className={styles["p-68"]}>{t(slots[0] ?? "Get Consultation", locale)}</p>
        </div>
        <div className={styles["arrow-icon-wrapper"]}>
          <svg className={styles["arrow-icon"]} viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <svg className={styles["arrow-icon-2"]} viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </a>
  )
}
