import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
const services = [
  {
    "id": "business-setup",
    "code": "[001]",
    "title": "Business Setup",
    "tags": [
      "Company Formation",
      "Licensing Support",
      "Banking Readiness"
    ],
    "description": "Start your business with the right foundation. We support you with company formation, licensing requirements, and banking preparation for a smoother UAE launch.",
    "image": "https://framerusercontent.com/images/6IszatzFPYmCiCJQH2vfTzGzls.webp?width=1850&height=2150"
  },
  {
    "id": "business-banking",
    "code": "[002]",
    "title": "Business Banking Support",
    "tags": [
      "Bank Matching",
      "Document Review",
      "Application Support"
    ],
    "description": "We prepare your business profile, review the required documents, and help identify banking options aligned with your company’s needs and eligibility.",
    "image": "https://framerusercontent.com/images/LvtkipVNiJaJmIL3S5U7WvX2DH0.webp?width=1850&height=2150"
  },
  {
    "id": "business-finance",
    "code": "[003]",
    "title": "Business Finance Support",
    "tags": [
      "Funding Assessment",
      "Application Preparation",
      "Bank Comparison"
    ],
    "description": "We assess your funding needs, strengthen your application, and help you compare suitable business finance options from our banking network.",
    "image": "https://framerusercontent.com/images/Amv4gb9URgX6JqP03sxVdkpxA.webp?width=1850&height=2150"
  },
  {
    "id": "mortgage-solutions",
    "code": "[004]",
    "title": "Mortgage Solutions",
    "tags": [
      "Home Finance",
      "Buyout & Refinancing",
      "Property Investment"
    ],
    "description": "We compare mortgage options across leading UAE banks and guide you through eligibility, documentation, and the application process.",
    "image": "https://framerusercontent.com/images/D5VaO0lhYIkKQqsNILHdKc32Dw.webp?width=1850&height=2150"
  },
  {
    "id": "personal-loans",
    "code": "[005]",
    "title": "Personal Loans",
    "tags": [
      "Profile Assessment",
      "Bank Comparison",
      "Application Support"
    ],
    "description": "We review your financial profile, compare available personal loan options, and help you prepare a clear and complete application.",
    "image": "https://framerusercontent.com/images/Amv4gb9URgX6JqP03sxVdkpxA.webp?width=1850&height=2150"
  },
  {
    "id": "credit-card-solutions",
    "code": "[006]",
    "title": "Credit Card Solutions",
    "tags": [
      "Card Comparison",
      "Eligibility Review",
      "Application Support"
    ],
    "description": "We help you compare credit cards based on fees, benefits, income requirements, and eligibility, so you can make a more informed choice.",
    "image": "https://framerusercontent.com/images/LvtkipVNiJaJmIL3S5U7WvX2DH0.webp?width=1850&height=2150"
  },
  {
    "id": "digital-growth",
    "code": "[007]",
    "title": "Digital Growth",
    "tags": [
      "Website Development",
      "Social Media Marketing",
      "Lead Generation"
    ],
    "description": "Build a stronger digital presence through professional websites, strategic social media marketing, and campaigns designed to attract qualified enquiries.",
    "image": "https://framerusercontent.com/images/cWXq1wM0Otm2gLMZgiHSqVGw3es.webp?width=1850&height=2150"
  }
]
export default function HomeServices({locale}: {locale: Locale}) {
return <div className={styles["home-service-list"]}>{services.map(service => <article key={service.id} className={styles["home-service-row"]}><div><p className={styles["home-service-code"]}>{service.code}</p><h3>{t(service.title, locale)}</h3></div><div><ul>{service.tags.map(tag => <li key={tag}>{t(tag, locale)}</li>)}</ul><p>{t(service.description, locale)}</p></div><img src={service.image} alt={t(service.title, locale)} loading="lazy" /></article>)}</div>
}
