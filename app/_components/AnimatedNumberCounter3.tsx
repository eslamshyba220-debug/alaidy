import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import CountUp from "./CountUp"

export default function AnimatedNumberCounter3({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <CountUp value={slots[0] ?? "16+"} className={styles["p-60"]} />
  )
}
