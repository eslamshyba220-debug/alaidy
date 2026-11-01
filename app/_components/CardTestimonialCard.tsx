import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import Google2 from "./Google2"

export default function CardTestimonialCard({ slots = [], locale = "en" }: { slots?: string[]; locale?: Locale }) {
  const sourceName = slots[6] ?? "Mohamed Mady"
  const reviewerName = t(sourceName.replace(/\b[a-z]/g, initial => initial.toUpperCase()), locale)

  return (
    <article className={styles["testimonial-card"]}>
      <div>
        <div className={styles["testimonial-stars"]} aria-label="5 out of 5 stars">★★★★★</div>
        <blockquote className={styles["testimonial-quote"]}>
          {t(slots[5] ?? "“Al Aidy Group kept us updated, explained every option clearly, and responded quickly throughout the process.”", locale)}
        </blockquote>
      </div>
      <footer className={styles["testimonial-footer"]}>
        <div className={styles["reviewer-avatar"]} aria-label={reviewerName}>
          <span aria-hidden="true">{Array.from(reviewerName)[0]}</span>
          <span className={styles["reviewer-google-mark"]} aria-hidden="true"><Google2 locale={locale} /></span>
        </div>
        <div className={styles["reviewer-details"]}>
          <h3 className={styles["reviewer-name"]}>{reviewerName}</h3>
          <p className={styles["reviewer-type"]}>{t(slots[7] ?? "Mortgage Client", locale)}</p>
        </div>
      </footer>
    </article>
  )
}
