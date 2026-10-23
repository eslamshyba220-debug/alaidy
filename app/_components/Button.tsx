import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Button({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <a className={styles["solid-black"]} href="/free-consultation">
        <div className={styles["div-14"]}>
          <p className={styles["p-25"]}>{t(slots[0] ?? "Book a Free Consultation", locale)}</p>
        </div>
        <div className={styles["arrow-icon-wrapper"]}>
          <SvgGraphic className={styles["arrow-icon"]} html={t("<svg data-framer-name=\"Arrow Icon\" class=\"framer-QYMJl framer-j6tph6\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--4i27ky: var(--token-cecf886f-35d1-4207-a045-acf7164ed7a9, rgb(255, 255, 255)); --b8xnka: 2; --42b6oa: 0.16; opacity: 1;\" data-f2c-idx=\"1659\"><use href=\"#1235104226\" data-f2c-idx=\"1660\"></use></svg>", locale)} />
          <SvgGraphic className={styles["arrow-icon-2"]} html={t("<svg data-framer-name=\"Arrow Icon\" class=\"framer-QYMJl framer-vlv1kw\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--4i27ky: var(--token-15d833e3-f4d9-4ee2-8e53-d70dcb341a0a, rgb(226, 250, 90)); --b8xnka: 2; --42b6oa: 0.16; opacity: 1;\" data-f2c-idx=\"1661\"><use href=\"#1235104226\" data-f2c-idx=\"1662\"></use></svg>", locale)} />
        </div>
      </a>
  )
}
