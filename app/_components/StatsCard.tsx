import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function StatsCard({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["desk"]}>
        <div className={styles["data"]}>
          <div className={styles["3x"]}>
            <h4 className={styles["h4-4"]}>{t(slots[0] ?? "16+ Years\nExpertise", locale)}</h4>
          </div>
        </div>
        <div className={styles["heal-quicker-with-our-advanced-implants-and-laser-tech-for-less-pain-faster-results-more-smiles"]}>
          <p className={styles["p-67"]}>{t(slots[1] ?? "We prepare every client profile correctly, based on real UAE banking requirements.", locale)}</p>
        </div>
      </div>
  )
}
