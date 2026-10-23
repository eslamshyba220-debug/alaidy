import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import AccordionController from "./AccordionController"

export default function FAQs({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
    <AccordionController>
      <div className={styles["all-closed"]}>
        <div className={styles["question-1"]}>
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
              <div className={styles["answer"]}>
                <div className={styles["answer-2"]}>
                  <p className={styles["p-27"]}>{t(slots[1] ?? "We support clients with business setup, bank account applications, business and personal finance, credit cards, mortgages, business advisory, and digital growth.", locale)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["question-1"]}>
          <div className={styles["closed"]}>
            <div className={styles["content"]}>
              <div className={styles["question"]}>
                <div className={styles["text-11"]}>
                  <div className={styles["question-2"]}>
                    <p className={styles["p-26"]}>{t(slots[2] ?? "Can you support company formation in the UAE?", locale)}</p>
                  </div>
                </div>
                <button className={styles["icon-2"]}>
                  <div className={styles["horizontal"]} />
                  <div className={styles["vertical"]} />
                </button>
              </div>
              <div className={styles["answer-3"]}>
                <div className={styles["answer-4"]}>
                  <p className={styles["p-28"]}>{t(slots[3] ?? "Yes. We help clients understand suitable structures, prepare the required documentation, and coordinate the setup process with the relevant providers.", locale)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["question-1"]}>
          <div className={styles["closed"]}>
            <div className={styles["content"]}>
              <div className={styles["question"]}>
                <div className={styles["text-11"]}>
                  <div className={styles["question-2"]}>
                    <p className={styles["p-26"]}>{t(slots[4] ?? "Can you help with business bank account applications?", locale)}</p>
                  </div>
                </div>
                <button className={styles["icon-2"]}>
                  <div className={styles["horizontal"]} />
                  <div className={styles["vertical"]} />
                </button>
              </div>
              <div className={styles["answer-3"]}>
                <div className={styles["answer-4"]}>
                  <p className={styles["p-28"]}>{t(slots[5] ?? "Yes. We review your business profile, identify suitable banks, and support the document preparation and application process.", locale)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["question-1"]}>
          <div className={styles["closed"]}>
            <div className={styles["content"]}>
              <div className={styles["question"]}>
                <div className={styles["text-11"]}>
                  <div className={styles["question-2"]}>
                    <p className={styles["p-26"]}>{t(slots[6] ?? "Can you help after a rejected application?", locale)}</p>
                  </div>
                </div>
                <button className={styles["icon-2"]}>
                  <div className={styles["horizontal"]} />
                  <div className={styles["vertical"]} />
                </button>
              </div>
              <div className={styles["answer-5"]}>
                <div className={styles["answer-6"]}>
                  <p className={styles["p-29"]}>{t(slots[7] ?? "We can review the application, identify potential weaknesses, and recommend improvements or alternative options. Final approval remains subject to the bank’s criteria.", locale)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["question-1"]}>
          <div className={styles["closed"]}>
            <div className={styles["content"]}>
              <div className={styles["question"]}>
                <div className={styles["text-11"]}>
                  <div className={styles["question-2"]}>
                    <p className={styles["p-26"]}>{t(slots[8] ?? "Do you provide business finance support?", locale)}</p>
                  </div>
                </div>
                <button className={styles["icon-2"]}>
                  <div className={styles["horizontal"]} />
                  <div className={styles["vertical"]} />
                </button>
              </div>
              <div className={styles["answer-3"]}>
                <div className={styles["answer-4"]}>
                  <p className={styles["p-28"]}>{t(slots[9] ?? "Yes. We help eligible businesses explore options such as term finance, working capital, trade finance, and equipment finance.", locale)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["question-1"]}>
          <div className={styles["closed"]}>
            <div className={styles["content"]}>
              <div className={styles["question"]}>
                <div className={styles["text-11"]}>
                  <div className={styles["question-2"]}>
                    <p className={styles["p-26"]}>{t(slots[10] ?? "Is the initial consultation free?", locale)}</p>
                  </div>
                </div>
                <button className={styles["icon-2"]}>
                  <div className={styles["horizontal"]} />
                  <div className={styles["vertical"]} />
                </button>
              </div>
              <div className={styles["answer-7"]}>
                <div className={styles["answer-8"]}>
                  <p className={styles["p-30"]}>{t(slots[11] ?? "Yes. The initial consultation helps us understand your requirements and recommend the most suitable next step.", locale)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["div-15"]}>
          <div className={styles["div-16"]} />
        </div>
      </div>
    </AccordionController>
  )
}
