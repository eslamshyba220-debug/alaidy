import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import Facebook from "./Facebook"
import Tiktok from "./Tiktok"
import Instagram from "./Instagram"

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
                <a className={styles["variant-7"]} href="/contact">
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
                            <a className={styles["a"]} href="/#solution">{t(slots[8] ?? "Services", locale)}</a>
                          </div>
                        </div>
                      </div>
                      <div className={styles["footer-menu-2"]}>
                        <div className={styles["home-5"]}>
                          <div className={styles["p-36"]}>
                            <a className={styles["a"]} href="/free-consultation">{t(slots[9] ?? "Free Consultation", locale)}</a>
                          </div>
                        </div>
                      </div>
                      <div className={styles["footer-menu-3"]}>
                        <div className={styles["home-6"]}>
                          <div className={styles["p-37"]}>
                            <a className={styles["a"]} href="/contact">{t(slots[10] ?? "Contact Us", locale)}</a>
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
                            <p className={styles["p-39"]}>{t(slots[12] ?? "Business Setup", locale)}</p>
                          </div>
                        </div>
                        <div className={styles["footer-menu-5"]}>
                          <div className={styles["home-8"]}>
                            <p className={styles["p-40"]}>{t(slots[13] ?? "Business Account Opening", locale)}</p>
                          </div>
                        </div>
                        <div className={styles["footer-menu-5"]}>
                          <div className={styles["home-9"]}>
                            <p className={styles["p-41"]}>{t(slots[14] ?? "Business Finance", locale)}</p>
                          </div>
                        </div>
                        <div className={styles["footer-menu-5"]}>
                          <div className={styles["home-10"]}>
                            <p className={styles["p-42"]}>{t(slots[15] ?? "Mortgage Consultancy", locale)}</p>
                          </div>
                        </div>
                        <div className={styles["footer-menu-5"]}>
                          <div className={styles["home-11"]}>
                            <p className={styles["p-43"]}>{t(slots[16] ?? "Credit Card Advisory", locale)}</p>
                          </div>
                        </div>
                        <div className={styles["footer-menu-5"]}>
                          <div className={styles["home-12"]}>
                            <p className={styles["p-44"]}>{t(slots[17] ?? "Digital Growth Solutions", locale)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["social-media-wrapper"]}>
                      <div className={styles["social-media"]}>
                        <p className={styles["p-45"]}>{t(slots[18] ?? "Social Media", locale)}</p>
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
                    <p className={styles["p-46"]}>{t(slots[19] ?? "All banking and financial products are subject to the eligibility criteria, terms, and final approval of the respective bank. Al Aidy Group does not guarantee approval.", locale)}</p>
                  </div>
                  <div className={styles["bottombar"]}>
                    <div className={styles["privacy-policy"]}>
                      <div className={styles["p-47"]}>
                        <a className={styles["a-2"]} href="/">{t(slots[20] ?? "Privacy policy", locale)}</a>
                      </div>
                    </div>
                    <div className={styles["2000-2021-all-rights-reserved"]}>
                      <p className={styles["p-48"]}>{t(slots[21] ?? "© 2026 Al Aidy Group. All rights reserved.", locale)}</p>
                    </div>
                    <div className={styles["terms-of-use"]}>
                      <div className={styles["p-49"]}>
                        <a className={styles["a-2"]} href="/">{t(slots[22] ?? "Terms of Use", locale)}</a>
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
