import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import Google2 from "./Google2"

export default function CardTestimonialCard({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  const reviewerName = t(slots[6] ?? "Mohamed Mady", locale)
  return (
      <div className={styles["primary"]}>
        <div className={styles["div-11"]}>
          <div className={styles["variant-1"]}>
            <div className={styles["1-3"]}>
              <div className={styles["div-12"]}>
                <img className={styles["img-3"]} src={slots[0] ?? "https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png"} alt="" />
              </div>
            </div>
            <div className={styles["1-3"]}>
              <div className={styles["div-12"]}>
                <img className={styles["img-3"]} src={slots[1] ?? "https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png"} alt="" />
              </div>
            </div>
            <div className={styles["1-3"]}>
              <div className={styles["div-12"]}>
                <img className={styles["img-3"]} src={slots[2] ?? "https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png"} alt="" />
              </div>
            </div>
            <div className={styles["1-3"]}>
              <div className={styles["div-12"]}>
                <img className={styles["img-3"]} src={slots[3] ?? "https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png"} alt="" />
              </div>
            </div>
            <div className={styles["1-3"]}>
              <div className={styles["div-12"]}>
                <img className={styles["img-3"]} src={slots[4] ?? "https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png"} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["text"]}>
          <div className={styles["text-2"]}>
            <h3 className={styles["h3"]}>{t(slots[5] ?? "“Al Aidy Group kept us updated, explained every option clearly, and responded quickly throughout the process.”", locale)}</h3>
          </div>
        </div>
        <div className={styles["bottom"]}>
          <div className={styles["image-text"]}>
            <div className={styles["image-3"]}>
              <div className={styles["reviewer-avatar"]} aria-label={reviewerName}>
                <span aria-hidden="true">{Array.from(reviewerName)[0]}</span>
                <div className={styles["reviewer-google-mark"]} aria-hidden="true">
                <Google2 locale={locale} />
                </div>
              </div>
            </div>
            <div className={styles["text-3"]}>
              <div className={styles["top"]}>
                <div className={styles["text-4"]}>
                  <h4 className={styles["h4"]}>{reviewerName}</h4>
                </div>
              </div>
              <div className={styles["bottom-2"]}>
                <div className={styles["text-5"]}>
                  <p className={styles["p-22"]}>{t(slots[7] ?? "Mortgage Client", locale)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
