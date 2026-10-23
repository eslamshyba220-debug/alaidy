import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

export default function InteractionComponentsTestimonialRating({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
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
  )
}
