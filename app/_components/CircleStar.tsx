import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function CircleStar({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <SvgGraphic className={styles["svg-2"]} html={t("<svg class=\"framer-NrnsD framer-1dyl2i\" role=\"presentation\" viewBox=\"0 0 24 24\" data-f2c-idx=\"733\"><use href=\"#559087864\" data-f2c-idx=\"734\"></use></svg>", locale)} />
  )
}
