import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function ProcessCard2({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["process-card-inactive"]}>
        <div className={styles["button-2"]}>
          <div className={styles["number"]}>
            <div className={styles["1-2"]}>
              <p className={styles["p-18"]}>{slots[0] ?? "2"}</p>
            </div>
          </div>
          <div className={styles["site-planning-approval-2"]}>
            <p className={styles["p-19"]}>{t(slots[1] ?? "Bank Matching Process", locale)}</p>
          </div>
        </div>
        <div className={styles["right-content-wrapper-2"]}>
          <div className={styles["image-2"]}>
            <div className={styles["div-9"]}>
              <img className={styles["img-2"]} src={slots[2] ?? "https://framerusercontent.com/images/kgndFB14ESSANgRXJMgs5ixPdg.webp?width=462&height=476"} alt="" />
            </div>
          </div>
          <div className={styles["text-wrapper"]}>
            <div className={styles["site-planning-preparation"]}>
              <h2 className={styles["h2"]}>{t(slots[3] ?? "Compare and Prepare", locale)}</h2>
            </div>
            <div className={styles["we-collaborate-with-you-to-assess-site-layouts-review-architectural-plans-and-determine-the-best-setup-for-your-solar-installation-ensuring-all-permits-and-requirements-are-ready-before-construction-begins"]}>
              <p className={styles["p-17"]}>{t(slots[4] ?? "We identify suitable options and help prepare the required documentation.", locale)}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
