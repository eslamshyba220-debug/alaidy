import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function SiteTicker({ locale }: { locale: Locale }) {
  return <div className={styles["ticker-text"]}>
    <p>{t("Business, banking, finance, and property support across the UAE.", locale)}</p>
    <span className={styles.circle} aria-hidden="true" />
    <p>{t("18 banks. 16+ years of combined banking experience.", locale)}</p>
    <span className={styles.circle} aria-hidden="true" />
    <p>{t("Practical guidance for stronger applications and clearer next steps.", locale)}</p>
  </div>
}
