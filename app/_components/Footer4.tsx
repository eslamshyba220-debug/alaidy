import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import Facebook from "./Facebook"
import Tiktok from "./Tiktok"
import Instagram from "./Instagram"
import { buildWhatsAppContactUrl, formatWhatsAppNumber, WHATSAPP_NUMBER } from "../_lib/consultation"

function ContactIcon({ kind }: { kind: "location" | "phone" | "whatsapp" | "email" | "website" }) {
  const common = {
    className: styles["footer-contact-icon"],
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  }

  if (kind === "location") {
    return <svg {...common}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
  }
  if (kind === "phone") {
    return <svg {...common}><path d="M21 16.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.8 2 2 0 0 1 3.1 1.6h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg>
  }
  if (kind === "whatsapp") {
    return <svg {...common}><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7A8.5 8.5 0 1 1 20.5 11.5Z" /><path d="M8.2 8.1c.3-.6.7-.6 1-.6h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5 0 .4-.2 1.2-.8 1.6-.5.4-1.1.6-1.8.4-1-.2-2.3-.8-3.6-2-1.1-1-2-2.4-2.3-3.5-.3-.9 0-1.7.5-2.2Z" /></svg>
  }
  if (kind === "email") {
    return <svg {...common}><rect x="2.5" y="4.5" width="19" height="15" rx="2" /><path d="m3 6 9 7 9-7" /></svg>
  }
  return <svg {...common}><circle cx="12" cy="12" r="9.5" /><path d="M2.8 12h18.4M12 2.5a15 15 0 0 1 0 19M12 2.5a15 15 0 0 0 0 19" /></svg>
}

export default function Footer4({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
      <div className={styles["desktop"]}>
        <div className={styles["background-image"]}>
          <div className={styles["div-17"]}>
            <img className={styles["img-4"]} src={slots[0] ?? "https://framerusercontent.com/images/nuF5MBQa5OHhR97TinwZmRWx23s.webp?width=1344&height=1170"} alt="" />
          </div>
        </div>
        <div className={styles["container-2"]}>
          <div className={styles["footer-cta-content-wrapper"]}>
            <div className={styles["cta-content-wrapper"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "573ms" }}>
              <div className={styles["let-s-plan-your-dream-getaway"]}>
                <h1 className={styles["h1"]}>{t(slots[1] ?? "Ready to Take the Next Step?", locale)}</h1>
              </div>
              <div className={styles["div-18"]}>
                <a className={styles["variant-7"]} href="/free-consultation">
                  <div className={styles["div"]}>
                    <p className={styles["p"]}>{t(slots[2] ?? "Book a Free Consultation", locale)}</p>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles["footer-wrapper"]}>
              <div className={styles["footer-content-wrapper"] + " " + styles["rv-1"]} data-reveal>
                <div className={styles["newsletter-wrapper"]}>
                  <div className={styles["image-1"]}>
                    <div className={styles["div-19"]}>
                      <img className={styles["img-5"]} src={slots[3] ?? "https://framerusercontent.com/images/f2noCmvFpCpDTUk11PGBQjkxAY.png?scale-down-to=512&width=3448&height=3076"} alt="" />
                    </div>
                  </div>
                  <div className={styles["newsletter-form"]}>
                    <div className={styles["home"]}>
                      <p className={styles["p-31"]}>{t(slots[4] ?? "Your trusted partner for business, banking, finance, mortgages, and digital growth across the UAE.", locale)}</p>
                    </div>
                  </div>
                </div>
                <address className={styles["footer-contact"]}>
                  <h2 className={styles["footer-contact-title"]}>{t("Contact Us", locale)}</h2>
                  <a className={styles["footer-contact-row"]} href="https://maps.google.com/?q=Westburry+Tower+1+Business+Bay+Dubai" target="_blank" rel="noopener noreferrer">
                    <ContactIcon kind="location" />
                    <span>{t("Office 303-275, Westburry Tower-1, Dubai, UAE", locale)}</span>
                  </a>
                  <a className={styles["footer-contact-row"]} href={`tel:+${WHATSAPP_NUMBER}`}>
                    <ContactIcon kind="phone" />
                    <span dir="ltr">+971 4 232 2774</span>
                  </a>
                  <a className={styles["footer-contact-row"]} href={buildWhatsAppContactUrl(locale)} target="_blank" rel="noopener noreferrer">
                    <ContactIcon kind="whatsapp" />
                    <span><bdi>{locale === "ar" ? "واتساب: " : "WhatsApp: "}</bdi><bdi dir="ltr">{formatWhatsAppNumber()}</bdi></span>
                  </a>
                  <a className={styles["footer-contact-row"]} href="mailto:contact@alaidygroup.com">
                    <ContactIcon kind="email" />
                    <span dir="ltr">contact@alaidygroup.com</span>
                  </a>
                  <a className={styles["footer-contact-row"]} href="https://www.alaidygroup.com" target="_blank" rel="noopener noreferrer">
                    <ContactIcon kind="website" />
                    <span dir="ltr">www.alaidygroup.com</span>
                  </a>
                </address>
                <div className={styles["footer-menu-wrapper"]}>
                  <div className={styles["footer-menu"]}>
                    <div className={styles["main-pages"]}>
                      <p className={styles["p-32"]}>{t(slots[5] ?? "Main Pages", locale)}</p>
                    </div>
                    <div className={styles["menu-wrapper"]}>
                      <div className={styles["footer-menu-2"]}>
                        <div className={styles["home-2"]}>
                          <div className={styles["p-33"]}>
                            <a className={styles["a"]} href="/">{t(slots[6] ?? "Home", locale)}</a>
                          </div>
                        </div>
                      </div>
                      <div className={styles["footer-menu-2"]}>
                        <div className={styles["home-3"]}>
                          <div className={styles["p-34"]}>
                            <a className={styles["a"]} href="/about">{t(slots[7] ?? "About", locale)}</a>
                          </div>
                        </div>
                      </div>
                      <div className={styles["footer-menu-2"]}>
                        <div className={styles["home-4"]}>
                          <div className={styles["p-35"]}>
                            <a className={styles["a"]} href="/#process-sections">{t("How It Works", locale)}</a>
                          </div>
                        </div>
                      </div>
                      <div className={styles["footer-menu-2"]}>
                        <div className={styles["home-5"]}>
                          <div className={styles["p-36"]}>
                            <a className={styles["a"]} href="/#solution">{t(slots[8] ?? "Services", locale)}</a>
                          </div>
                        </div>
                      </div>
                      <div className={styles["footer-menu-2"]}>
                        <div className={styles["home-6"]}>
                          <div className={styles["p-37"]}>
                            <a className={styles["a"]} href="/free-consultation">{t(slots[9] ?? "Free Consultation", locale)}</a>
                          </div>
                        </div>
                      </div>
                      <div className={styles["footer-menu-3"]}>
                        <div className={styles["home-7"]}>
                          <div className={styles["p-38"]}>
                            <a className={styles["a"]} href="/free-consultation">{t(slots[10] ?? "Contact Us", locale)}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-20"]}>
                    <div className={styles["footer-menu-4"]}>
                      <div className={styles["main-pages-2"]}>
                        <p className={styles["p-38"]}>{t(slots[11] ?? "Services", locale)}</p>
                      </div>
                      <div className={styles["menu-wrapper-2"]}>
                        <div className={styles["footer-menu-5"]}>
                          <div className={styles["home-7"]}>
                            <a className={styles["footer-service-link"]} href="/#business-setup">{t(slots[12] ?? "Business Setup", locale)}</a>
                          </div>
                        </div>
                        <div className={styles["footer-menu-5"]}>
                          <div className={styles["home-8"]}>
                            <a className={styles["footer-service-link"]} href="/#business-banking">{t(slots[13] ?? "Business Banking Support", locale)}</a>
                          </div>
                        </div>
                        <div className={styles["footer-menu-5"]}>
                          <div className={styles["home-9"]}>
                            <a className={styles["footer-service-link"]} href="/#business-finance">{t(slots[14] ?? "Business Finance Support", locale)}</a>
                          </div>
                        </div>
                        <div className={styles["footer-menu-5"]}>
                          <div className={styles["home-10"]}>
                            <a className={styles["footer-service-link"]} href="/#mortgage-solutions">{t(slots[15] ?? "Mortgage Solutions", locale)}</a>
                          </div>
                        </div>
                        <div className={styles["footer-menu-5"]}>
                          <div className={styles["home-11"]}>
                            <a className={styles["footer-service-link"]} href="/#personal-loans">{t(slots[16] ?? "Personal Loans", locale)}</a>
                          </div>
                        </div>
                        <div className={styles["footer-menu-5"]}>
                          <div className={styles["home-12"]}>
                            <a className={styles["footer-service-link"]} href="/#credit-card-solutions">{t(slots[17] ?? "Credit Card Solutions", locale)}</a>
                          </div>
                        </div>
                        <div className={styles["footer-menu-5"]}>
                          <div className={styles["home-12"]}>
                            <a className={styles["footer-service-link"]} href="/#digital-growth">{t(slots[18] ?? "Digital Growth", locale)}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["social-media-wrapper"]}>
                      <div className={styles["social-media"]}>
                        <p className={styles["p-45"]}>{t(slots[19] ?? "Social Media", locale)}</p>
                      </div>
                      <div className={styles["social-media-list"]}>
                        <div className={styles["div-21"]}>
                          <a className={styles["facebook"]} href="https://www.facebook.com/share/1DU2w7VUam/?mibextid=wwXIfr" aria-label="Facebook">
                            <Facebook locale={locale} />
                          </a>
                        </div>
                        <div className={styles["div-23"]}>
                          <a className={styles["tiktok"]} href="https://www.tiktok.com/@alaidygroup?_t=ZS-90ylo49aYde&_r=1" aria-label="TikTok">
                            <Tiktok locale={locale} />
                          </a>
                        </div>
                        <div className={styles["div-23"]}>
                          <a className={styles["tiktok"]} href="https://www.instagram.com/alaidy_group/" aria-label="Instagram">
                            <Instagram locale={locale} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["bottom-content-wrapper"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "102ms" }}>
                <div className={styles["bottom-text-wrapper"]}>
                  <div className={styles["banking-approval-disclaimer"]}>
                    <p className={styles["p-46"]}>{t(slots[20] ?? "All banking and financial products are subject to the eligibility criteria, terms, and final approval of the respective bank. Al Aidy Group does not guarantee approval.", locale)}</p>
                  </div>
                  <div className={styles["bottombar"]}>
                    <div className={styles["privacy-policy"]}>
                      <div className={styles["p-47"]}>
                        <a className={styles["a-2"]} href="/">{t(slots[21] ?? "Privacy Policy", locale)}</a>
                      </div>
                    </div>
                    <div className={styles["2000-2021-all-rights-reserved"]}>
                      <p className={styles["p-48"]}>{t(slots[22] ?? "© 2026 Al Aidy Group. All rights reserved.", locale)}</p>
                    </div>
                    <div className={styles["terms-of-use"]}>
                      <div className={styles["p-49"]}>
                        <a className={styles["a-2"]} href="/">{t(slots[23] ?? "Terms of Use", locale)}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["linear"]} />
      </div>
  )
}
