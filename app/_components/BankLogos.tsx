import type { CSSProperties } from "react"
import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"

const banks = [
  { src: "/images/banks/emirates-nbd.png", alt: "Emirates NBD", altAr: "بنك الإمارات دبي الوطني", h: 52, hMobile: 36, width: 622, height: 185 },
  { src: "/images/banks/mashreq.png", alt: "Mashreq", altAr: "المشرق", h: 34, hMobile: 24, width: 664, height: 115 },
  { src: "/images/banks/dib.png", alt: "Dubai Islamic Bank", altAr: "بنك دبي الإسلامي", h: 56, hMobile: 38, width: 320, height: 135 },
  { src: "/images/banks/arab-bank.png", alt: "Arab Bank", altAr: "البنك العربي", h: 54, hMobile: 38, width: 618, height: 208 },
  { src: "/images/banks/ajman-bank.png", alt: "Ajman Bank", altAr: "مصرف عجمان", h: 50, hMobile: 34, width: 340, height: 135 },
  { src: "/images/banks/bank-of-baroda.png", alt: "Bank of Baroda", altAr: "بنك بارودا", h: 44, hMobile: 30, width: 677, height: 181 },
]

export default function BankLogos({ locale }: { locale: Locale }) {
  const renderSet = (duplicate = false) => (
    <ul className={styles["bank-logo-list"]} aria-hidden={duplicate || undefined}>
      {banks.map(bank => (
        <li key={bank.src}>
          <img
            src={bank.src}
            alt={duplicate ? "" : locale === "ar" ? bank.altAr : bank.alt}
            width={bank.width}
            height={bank.height}
            loading="lazy"
            decoding="async"
            style={{
              "--logo-height": `${bank.h}px`,
              "--logo-height-mobile": `${bank.hMobile}px`,
            } as CSSProperties}
          />
        </li>
      ))}
    </ul>
  )

  return (
    <section className={styles["bank-strip"]} aria-label={t("Access to Solutions Across Leading UAE Banks", locale)}>
      <h2>{t("Access to Solutions Across Leading UAE Banks", locale)}</h2>
      <div className={styles["bank-strip-mask"]}>
        <div className={styles["bank-strip-track"]}>
          {renderSet()}
          {renderSet(true)}
        </div>
      </div>
    </section>
  )
}
