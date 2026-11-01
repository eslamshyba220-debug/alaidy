import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function SiteTicker({ locale }: { locale: Locale }) {
  const items = [
    "Business, banking, finance, and property support across the UAE.",
    "18 banks. 16+ years of combined banking experience.",
    "Practical guidance for stronger applications and clearer next steps.",
  ]
  const renderItems = (duplicate = false) => (
    <div className={styles["site-ticker-set"]} aria-hidden={duplicate || undefined}>
      {items.map((item, index) => (
        <span key={item}>
          {t(item, locale)}
          {index < items.length - 1 && <span aria-hidden="true"> · </span>}
        </span>
      ))}
    </div>
  )

  return (
    <div className={styles["site-ticker"]}>
      <div className={styles["site-ticker-track"]}>
        {renderItems()}
        {renderItems(true)}
      </div>
    </div>
  )
}
