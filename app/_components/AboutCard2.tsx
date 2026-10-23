import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function AboutCard2({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["card-2"]}>
        <div className={styles["top-4"]}>
          <div className={styles["step"]}>
            <div className={styles["01"]}>
              <h3 className={styles["h3-3"]}>{slots[0] ?? "02"}</h3>
            </div>
          </div>
          <div className={styles["image-4"]}>
            <div className={styles["div-38"]}>
              <img className={styles["img-8"]} src={slots[1] ?? "https://framerusercontent.com/images/6tLOXW5RyH3slWvkXJmPITexCR4.webp?scale-down-to=512&width=1350&height=1250"} alt="" />
            </div>
          </div>
        </div>
        <div className={styles["content-3"]}>
          <div className={styles["schedule-with-ease-2"]}>
            <h3 className={styles["h3-5"]}>{t(slots[2] ?? "Bank with clarity", locale)}</h3>
          </div>
          <div className={styles["pick-your-date-time-and-preferred-dentist-online-or-by-phone-our-team-confirms-your-slot-and-guide-you-with-simple-instruction-no-hassle-no-waiting-2"]}>
            <p className={styles["p-64"]}>{t(slots[3] ?? "We match your profile with suitable UAE banks, prepare your documents, and guide you through account opening, loans, and financial approvals.", locale)}</p>
          </div>
        </div>
        <div className={styles["pattern-2"]}>
          <div className={styles["div-40"]} />
        </div>
      </div>
  )
}
