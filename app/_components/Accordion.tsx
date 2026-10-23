import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import AccordionController from "./AccordionController"

export default function Accordion({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
    <AccordionController>
      <div className={styles["closed"]}>
        <div className={styles["content"]}>
          <div className={styles["question"]}>
            <div className={styles["text-11"]}>
              <div className={styles["question-2"]}>
                <p className={styles["p-26"]}>{t(slots[0] ?? "What services does Al Aidy Group provide?", locale)}</p>
              </div>
            </div>
            <button className={styles["icon-2"]}>
              <div className={styles["horizontal"]} />
              <div className={styles["vertical"]} />
            </button>
          </div>
          <div className={styles["answer-5"]}>
            <div className={styles["answer-6"]}>
              <p className={styles["p-29"]}>{t(slots[1] ?? "We support clients with business setup, bank account applications, business and personal finance, credit cards, mortgages, business advisory, and digital growth.", locale)}</p>
            </div>
          </div>
        </div>
      </div>
    </AccordionController>
  )
}
