import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function ScrollDownArrow({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["primary-3"]}>
        <div className={styles["arrow-down"]}>
          <div className={styles["div-36"]}>
            <SvgGraphic className={styles["svg-4"]} html={t("<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"28\"><use href=\"#svg11145595216\" data-f2c-idx=\"29\"></use></svg>", locale)} />
          </div>
        </div>
      </div>
  )
}
