import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function AboutCard({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["card"]}>
        <div className={styles["top-3"]}>
          <div className={styles["step"]}>
            <div className={styles["01"]}>
              <h3 className={styles["h3-3"]}>{slots[0] ?? "01"}</h3>
            </div>
          </div>
          <div className={styles["image-4"]}>
            <div className={styles["div-38"]}>
              <img className={styles["img-8"]} src={slots[1] ?? "https://framerusercontent.com/images/Pu42ZDcgAO7dzjpUJhRPHq4lavA.webp?scale-down-to=512&width=1350&height=1250"} alt="" />
            </div>
          </div>
        </div>
        <div className={styles["content-2"]}>
          <div className={styles["schedule-with-ease"]}>
            <h3 className={styles["h3-4"]}>{t(slots[2] ?? "Start with confidence", locale)}</h3>
          </div>
          <div className={styles["pick-your-date-time-and-preferred-dentist-online-or-by-phone-our-team-confirms-your-slot-and-guide-you-with-simple-instruction-no-hassle-no-waiting"]}>
            <p className={styles["p-63"]}>{t(slots[3] ?? "From company setup to the right business structure, we help you build a strong, compliant foundation that keeps your next steps clear.", locale)}</p>
          </div>
        </div>
        <div className={styles["pattern"]}>
          <div className={styles["div-39"]} />
        </div>
      </div>
  )
}
