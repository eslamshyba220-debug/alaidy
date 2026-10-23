import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"
import Google2 from "./Google2"

export default function CardTestimonialCard2({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["primary-2"]}>
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
        <div className={styles["text-6"]}>
          <div className={styles["text-7"]}>
            <h3 className={styles["h3-2"]}>{t(slots[5] ?? "“Al Aidy Group provided excellent mortgage support, great customer service, and smart problem-solving from start to finish.”", locale)}</h3>
          </div>
        </div>
        <div className={styles["bottom-3"]}>
          <div className={styles["image-text-2"]}>
            <div className={styles["image-3"]}>
              <div className={styles["google-review-badge"]}>
                <SvgGraphic className={styles["svg-3"]} html={t("<svg class=\"framer-NrnsD framer-tv8btq\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: rgb(244, 178, 60); --js9iwy: 2; opacity: 1;\" data-f2c-idx=\"1253\"><use href=\"#559087864\" data-f2c-idx=\"1254\"></use></svg>", locale)} />
                <Google2 locale={locale} />
              </div>
            </div>
            <div className={styles["text-8"]}>
              <div className={styles["top-2"]}>
                <div className={styles["text-9"]}>
                  <h4 className={styles["h4-2"]}>{t(slots[6] ?? "Hend Karam", locale)}</h4>
                </div>
              </div>
              <div className={styles["bottom-4"]}>
                <div className={styles["text-10"]}>
                  <p className={styles["p-23"]}>{t(slots[7] ?? "Mortgage Client", locale)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
