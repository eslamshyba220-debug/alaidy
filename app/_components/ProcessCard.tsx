import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function ProcessCard({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["process-card-active"]}>
        <div className={styles["button"]}>
          <div className={styles["number"]}>
            <div className={styles["1"]}>
              <p className={styles["p-15"]}>{slots[0] ?? "1"}</p>
            </div>
          </div>
          <div className={styles["site-planning-approval"]}>
            <p className={styles["p-16"]}>{t(slots[1] ?? "Profile Review Session", locale)}</p>
          </div>
        </div>
        <div className={styles["right-content-wrapper"]}>
          <div className={styles["image"]}>
            <div className={styles["div-8"]}>
              <img className={styles["img"]} src={slots[2] ?? "https://framerusercontent.com/images/wpEJ1UWlF5gcMqEC9MNiESMsIA.webp?width=462&height=476"} alt="" />
            </div>
          </div>
          <div className={styles["text-wrapper"]}>
            <div className={styles["site-planning-preparation"]}>
              <h2 className={styles["h2"]}>{t(slots[3] ?? "Understand Your Profile", locale)}</h2>
            </div>
            <div className={styles["we-collaborate-with-you-to-assess-site-layouts-review-architectural-plans-and-determine-the-best-setup-for-your-solar-installation-ensuring-all-permits-and-requirements-are-ready-before-construction-begins"]}>
              <p className={styles["p-17"]}>{t(slots[4] ?? "We review your goals, financial position, documents, and requirements.", locale)}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
