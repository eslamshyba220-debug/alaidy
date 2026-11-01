import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import ServiceIcon from "./ServiceIcon"

export default function NumberCounter({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["default"]}>
        <div className={styles["container"]}>
          <div className={styles["icon"]}>
            <div className={styles["div-5"]}>
              <div className={styles["div-6"]}>
                <ServiceIcon kind={slots[0] === "Access Across 18+ Banks" ? "bank" : slots[0] === "End-to-End Guidance" ? "check" : "shield"} />
              </div>
            </div>
          </div>
          <div className={styles["text-content"]}>
            <div className={styles["properties-under-management"]}>
              <p className={styles["p-10"]}>{t(slots[0] ?? "Competitive Options", locale)}</p>
            </div>
          </div>
        </div>
        <div className={styles["properties-under-management-2"]}>
          <p className={styles["p-11"]}>{t(slots[1] ?? "We compare suitable banking options based on your profile and requirements.", locale)}</p>
        </div>
      </div>
  )
}
