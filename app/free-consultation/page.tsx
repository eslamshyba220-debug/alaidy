import { getLocale } from "../_lib/locale"
import { t } from "../_lib/i18n"
import Navigation from "../_components/Navigation"
import Footer4 from "../_components/Footer4"
import ConsultationForm from "../_components/ConsultationForm"
import RevealWatcher from "../_components/RevealWatcher"
import SiteTicker from "../_components/SiteTicker"
import styles from "../_components/styles.module.css"

export default async function FreeConsultation() {
  const locale = await getLocale()
  return (
    <main className={styles["consultation-page"]}>
      <RevealWatcher />
      <section className={styles["consultation-hero"]}>
        <img src="https://framerusercontent.com/images/GtYPcnDFzY0sSf0W1OkeeS7VfI.webp?width=1885&height=695" alt="" />
        <h1>{t("Free Consultation", locale)}</h1>
      </section>
      <div className={styles["consultation-navigation"]}><Navigation locale={locale} /></div>
      <section className={styles["consultation-content"]}>
        <div className={styles["consultation-inner"]}>
          <header className={styles["consultation-intro"]}>
            <h2>{t("Find the Right Financial Solution for Your Next Step", locale)}</h2>
            <p>{t("Complete the form and our advisors will review your profile, understand your needs, and guide you toward the most suitable solution.", locale)}</p>
          </header>
          <div className={styles["consultation-columns"]}>
            <aside className={styles["consultation-photo"]}>
              <img src="https://framerusercontent.com/images/vmImYLNFK5D7FBmXJXubVhfFHE.webp?lossless=1&width=4672&height=7008" alt="" loading="lazy" />
              <p>{t("Choosing the right financial solution starts with the right guidance — we review your profile and help you move forward clearly.", locale)}</p>
            </aside>
            <ConsultationForm locale={locale} />
          </div>
        </div>
      </section>
      <SiteTicker locale={locale} />
      <Footer4 locale={locale} />
    </main>
  )
}
