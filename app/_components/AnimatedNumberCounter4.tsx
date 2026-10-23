import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import CountUp from "./CountUp"

export default function AnimatedNumberCounter4({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <CountUp value={slots[0] ?? "3,000+"} className={styles["p-61"]} />
  )
}
