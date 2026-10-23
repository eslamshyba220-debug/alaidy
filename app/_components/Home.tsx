import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import RevealWatcher from "./RevealWatcher"
import HeroCarousel from "./HeroCarousel"
import { SvgGraphic } from "./RichText"
import Button2 from "./Button2"
import Button22 from "./Button22"
import Stats from "./Stats"
import AnimatedNumberCounter from "./AnimatedNumberCounter"
import Stats2 from "./Stats2"
import AnimatedNumberCounter2 from "./AnimatedNumberCounter2"
import NumberCounter from "./NumberCounter"
import Phosphor from "./Phosphor"
import Button23 from "./Button23"
import Badge from "./Badge"
import ProcessCard from "./ProcessCard"
import ProcessCard2 from "./ProcessCard2"
import Badge2 from "./Badge2"
import CircleStar from "./CircleStar"
import Google from "./Google"
import CardTestimonialCard from "./CardTestimonialCard"
import InteractionComponentsTestimonialRating from "./InteractionComponentsTestimonialRating"
import Google2 from "./Google2"
import CardTestimonialCard2 from "./CardTestimonialCard2"
import Badge3 from "./Badge3"
import Button from "./Button"
import ArrowRight from "./ArrowRight"
import FAQs from "./FAQs"
import Accordion from "./Accordion"
import LayoutJumpPreventer from "./LayoutJumpPreventer"
import Footer4 from "./Footer4"
import SocialIcon from "./SocialIcon"
import Facebook from "./Facebook"
import Tiktok from "./Tiktok"
import Instagram from "./Instagram"
import Navigation from "./Navigation"
import Button24 from "./Button24"
import Template2 from "./Template2"
import SmoothScroll from "./SmoothScroll"
import HighlighterTag2 from "./HighlighterTag2"
import ScrollDownArrow from "./ScrollDownArrow"
import GridLines from "./GridLines"
import HighlighterTag22 from "./HighlighterTag22"
import GridLines2 from "./GridLines2"
import AnimatedNumberCounter3 from "./AnimatedNumberCounter3"
import AnimatedNumberCounter4 from "./AnimatedNumberCounter4"
import GridLines3 from "./GridLines3"
import HighlighterTag3 from "./HighlighterTag3"
import AboutCard from "./AboutCard"
import AboutCard2 from "./AboutCard2"
import GridLines4 from "./GridLines4"
import HighlighterTag32 from "./HighlighterTag32"
import HighlighterTag33 from "./HighlighterTag33"
import StatsCard from "./StatsCard"
import StatsCard2 from "./StatsCard2"

export default function Home({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-42"]}>
        <div className={styles["div-43"]}>
          <div className={styles["div-44"]}>
            <header className={styles["sections-hero"]}>
              <div className={styles["container-7"]}>
                <div className={styles["hero-content"]}>
                  <div className={styles["top-part"]}>
                    <div className={styles["content-4"]}>
                      <div className={styles["tag-section"]}>
                        <div className={styles["ranking-container"]}>
                          <div className={styles["trusted-label"]}>
                            <p className={styles["p-69"]}>{t(slots[0] ?? "Trusted", locale)}</p>
                          </div>
                        </div>
                        <div className={styles["trusted-by-10-000-homeowners-label"]}>
                          <p className={styles["p-70"]}>{t(slots[1] ?? "Supporting Individuals & Businesses Across the UAE", locale)}</p>
                        </div>
                      </div>
                      <div className={styles["h1-2"]}>
                        <h1 className={styles["h1-3"]}>{locale === "ar" ? t("One Partner for Business, Banking, Finance & Property", locale) : <>
                          <div className={styles["span"]}>
                            <span className={styles["span-2"]}>{t(slots[2] ?? "O", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[3] ?? "n", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[4] ?? "e", locale)}</span>
                          </div>
                          {" "}
                          <div className={styles["span"]}>
                            <span className={styles["span-4"]}>{t(slots[5] ?? "P", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[6] ?? "a", locale)}</span>
                            <span className={styles["span-5"]}>{t(slots[7] ?? "r", locale)}</span>
                            <span className={styles["span-6"]}>{t(slots[8] ?? "t", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[9] ?? "n", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[10] ?? "e", locale)}</span>
                            <span className={styles["span-5"]}>{t(slots[11] ?? "r", locale)}</span>
                          </div>
                          {" "}
                          <div className={styles["span"]}>
                            <span className={styles["span-7"]}>{t(slots[12] ?? "f", locale)}</span>
                            <span className={styles["span-8"]}>{t(slots[13] ?? "o", locale)}</span>
                            <span className={styles["span-5"]}>{t(slots[14] ?? "r", locale)}</span>
                          </div>
                          {" "}
                          <div className={styles["span"]}>
                            <span className={styles["span-4"]}>{t(slots[15] ?? "B", locale)}</span>
                            <span className={styles["span-9"]}>{t(slots[16] ?? "u", locale)}</span>
                            <span className={styles["span-10"]}>{t(slots[17] ?? "s", locale)}</span>
                            <span className={styles["span-11"]}>{t(slots[18] ?? "i", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[19] ?? "n", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[20] ?? "e", locale)}</span>
                            <span className={styles["span-10"]}>{t(slots[21] ?? "s", locale)}</span>
                            <span className={styles["span-10"]}>{t(slots[22] ?? "s", locale)}</span>
                            <span className={styles["span-11"]}>{slots[23] ?? ","}</span>
                          </div>
                          {" "}
                          <div className={styles["span"]}>
                            <span className={styles["span-4"]}>{t(slots[24] ?? "B", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[25] ?? "a", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[26] ?? "n", locale)}</span>
                            <span className={styles["span-9"]}>{t(slots[27] ?? "k", locale)}</span>
                            <span className={styles["span-11"]}>{t(slots[28] ?? "i", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[29] ?? "n", locale)}</span>
                            <span className={styles["span-12"]}>{t(slots[30] ?? "g", locale)}</span>
                            <span className={styles["span-11"]}>{slots[31] ?? ","}</span>
                          </div>
                          {" "}
                          <div className={styles["span"]}>
                            <span className={styles["span-13"]}>{t(slots[32] ?? "F", locale)}</span>
                            <span className={styles["span-11"]}>{t(slots[33] ?? "i", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[34] ?? "n", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[35] ?? "a", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[36] ?? "n", locale)}</span>
                            <span className={styles["span-14"]}>{t(slots[37] ?? "c", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[38] ?? "e", locale)}</span>
                          </div>
                          {" "}
                          <div className={styles["span"]}>
                            <span className={styles["span-15"]}>{slots[39] ?? "&"}</span>
                          </div>
                          {" "}
                          <div className={styles["span"]}>
                            <span className={styles["span-4"]}>{t(slots[40] ?? "P", locale)}</span>
                            <span className={styles["span-5"]}>{t(slots[41] ?? "r", locale)}</span>
                            <span className={styles["span-8"]}>{t(slots[42] ?? "o", locale)}</span>
                            <span className={styles["span-16"]}>{t(slots[43] ?? "p", locale)}</span>
                            <span className={styles["span-3"]}>{t(slots[44] ?? "e", locale)}</span>
                            <span className={styles["span-5"]}>{t(slots[45] ?? "r", locale)}</span>
                            <span className={styles["span-6"]}>{t(slots[46] ?? "t", locale)}</span>
                            <span className={styles["span-4"]}>{t(slots[47] ?? "y", locale)}</span>
                          </div>
                        </>}</h1>
                      </div>
                      <div className={styles["paragraph"]}>
                        <p className={styles["p-71"]}>{t(slots[48] ?? "We help individuals and businesses prepare stronger applications, compare suitable banking options, and move forward with clarity.", locale)}</p>
                      </div>
                    </div>
                    <div className={styles["div-6"]}>
                      <div className={styles["div-18"]}>
                        <Button2 locale={locale} variant="white" slots={["Book a Free Consultation"]} />
                      </div>
                    </div>
                    <div className={styles["div-6"]}>
                      <div className={styles["div-45"]}>
                        <Button22 locale={locale} slots={["Explore Our Services"]} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["background"]}>
                <HeroCarousel>
                  <section className={styles["section"]}>
                    <div className={styles["div-47"]}>
                      <ul className={styles["ul"]}>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-5"]}>
                            <div className={styles["div-48"]}>
                              <img className={styles["img-9"]} src={slots[49] ?? "https://framerusercontent.com/images/EVTCv7i859PX9QxaERUWKy3fw1s.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-5"]}>
                            <div className={styles["div-48"]}>
                              <img className={styles["img-9"]} src={slots[50] ?? "https://framerusercontent.com/images/iVQQdCF0OPG2PUpdmgekjlAPtWA.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-5"]}>
                            <div className={styles["div-48"]}>
                              <img className={styles["img-9"]} src={slots[51] ?? "https://framerusercontent.com/images/HEiIkkhUMk7uvVmrdAXPMai6o.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-5"]}>
                            <div className={styles["div-48"]}>
                              <img className={styles["img-9"]} src={slots[52] ?? "https://framerusercontent.com/images/BxK50nPehtQHGlRRGHAFzbz9XeU.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-5"]}>
                            <div className={styles["div-48"]}>
                              <img className={styles["img-9"]} src={slots[53] ?? "https://framerusercontent.com/images/EVTCv7i859PX9QxaERUWKy3fw1s.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-6"]}>
                            <div className={styles["div-49"]}>
                              <img className={styles["img-10"]} src={slots[54] ?? "https://framerusercontent.com/images/iVQQdCF0OPG2PUpdmgekjlAPtWA.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-6"]}>
                            <div className={styles["div-49"]}>
                              <img className={styles["img-10"]} src={slots[55] ?? "https://framerusercontent.com/images/HEiIkkhUMk7uvVmrdAXPMai6o.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-6"]}>
                            <div className={styles["div-49"]}>
                              <img className={styles["img-10"]} src={slots[56] ?? "https://framerusercontent.com/images/BxK50nPehtQHGlRRGHAFzbz9XeU.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-7"]}>
                            <div className={styles["div-49"]}>
                              <img className={styles["img-10"]} src={slots[57] ?? "https://framerusercontent.com/images/EVTCv7i859PX9QxaERUWKy3fw1s.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-8"]}>
                            <div className={styles["div-48"]}>
                              <img className={styles["img-9"]} src={slots[58] ?? "https://framerusercontent.com/images/iVQQdCF0OPG2PUpdmgekjlAPtWA.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-8"]}>
                            <div className={styles["div-48"]}>
                              <img className={styles["img-9"]} src={slots[59] ?? "https://framerusercontent.com/images/HEiIkkhUMk7uvVmrdAXPMai6o.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-8"]}>
                            <div className={styles["div-48"]}>
                              <img className={styles["img-9"]} src={slots[60] ?? "https://framerusercontent.com/images/BxK50nPehtQHGlRRGHAFzbz9XeU.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-8"]}>
                            <div className={styles["div-48"]}>
                              <img className={styles["img-9"]} src={slots[61] ?? "https://framerusercontent.com/images/EVTCv7i859PX9QxaERUWKy3fw1s.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-8"]}>
                            <div className={styles["div-48"]}>
                              <img className={styles["img-9"]} src={slots[62] ?? "https://framerusercontent.com/images/iVQQdCF0OPG2PUpdmgekjlAPtWA.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-8"]}>
                            <div className={styles["div-48"]}>
                              <img className={styles["img-9"]} src={slots[63] ?? "https://framerusercontent.com/images/HEiIkkhUMk7uvVmrdAXPMai6o.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["div-6"]}>
                          <div className={styles["image-8"]}>
                            <div className={styles["div-48"]}>
                              <img className={styles["img-9"]} src={slots[64] ?? "https://framerusercontent.com/images/BxK50nPehtQHGlRRGHAFzbz9XeU.webp?width=1890&height=875"} alt="" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className={styles["fieldset"]}>
                      <div className={styles["div-50"]}>
                        <button className={styles["button-3"]}>
                          <img className={styles["img-11"]} src={slots[65] ?? "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg?arrow=left"} alt="" />
                        </button>
                        <button className={styles["button-3"]}>
                          <img className={styles["img-11"]} src={slots[66] ?? "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg?arrow=right"} alt="" />
                        </button>
                      </div>
                      <div className={styles["div-51"]}>
                        <button className={styles["button-4"]}>
                          <div className={styles["div-52"]} />
                        </button>
                        <button className={styles["button-5"]}>
                          <div className={styles["div-52"]} />
                        </button>
                        <button className={styles["button-5"]}>
                          <div className={styles["div-52"]} />
                        </button>
                        <button className={styles["button-6"]}>
                          <div className={styles["div-53"]} />
                        </button>
                      </div>
                    </div>
                  </section>
                </HeroCarousel>
                <div className={styles["dark-overlay"]} />
              </div>
            </header>
            <div className={styles["about-us-section"]}>
              <section className={styles["container-8"]}>
                <div className={styles["overview-content"]}>
                  <div className={styles["div-6"]}>
                    <div className={styles["image-9"]}>
                      <div className={styles["div-54"]}>
                        <img className={styles["img-12"]} src={slots[67] ?? "https://framerusercontent.com/images/f2yENMexat4bD9tQCGqVFiUh3NM.webp?scale-down-to=1024&width=3810&height=2719"} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={styles["stack"]}>
                    <div className={styles["div-55"]}>
                      <div className={styles["div-6"]}>
                        <div className={styles["title-text"]}>
                          <h2 className={styles["h2-2"]}>
                            <span className={styles["span-17"]}>{t(slots[68] ?? "About", locale)}</span>
                            <br className={styles["br"]} />
                            {t("Al Aidy Group", locale)}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className={styles["content-5"]}>
                      <div className={styles["top-5"]}>
                        <div className={styles["text-17"] + " " + styles["rv-2"]} data-reveal>
                          <p className={styles["p-72"]}>{t(slots[69] ?? "Based in Dubai, Al Aidy Group brings together Al Aidy Marketing Management, established in 2021, and Al Aidy Solutions & Services, launched in 2025 to expand the Group’s capabilities and help businesses grow. With more than 16 years of combined banking experience and access to solutions across 18 UAE banks, we support individuals and businesses with banking, finance, mortgages, business services, and digital growth.", locale)}</p>
                        </div>
                      </div>
                      <div className={styles["bottom-5"]}>
                        <div className={styles["div-6"]}>
                          <div className={styles["div-56"]}>
                            <Stats locale={locale} slots={["16+","16+","Years of Combined Banking Experience"]} />
                          </div>
                        </div>
                        <div className={styles["div-6"]}>
                          <div className={styles["div-57"]}>
                            <Stats2 locale={locale} slots={["18+","18+","UAE Banks Across Our Network"]} />
                          </div>
                        </div>
                        <div className={styles["div-6"]}>
                          <div className={styles["div-57"]}>
                            <Stats2 locale={locale} slots={["400+","400+","trusted partners"]} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["stat-cards"] + " " + styles["rv-3"]} data-reveal>
                  <div className={styles["div-6"]}>
                    <div className={styles["stat-card-1"]}>
                      <NumberCounter locale={locale} slots={["Competitive Options","We compare suitable banking options based on your profile and requirements."]} />
                    </div>
                  </div>
                  <div className={styles["div-6"]}>
                    <div className={styles["stat-card-2"]}>
                      <NumberCounter locale={locale} slots={["Access Across 18 Banks","Explore a wider range of solutions through our UAE banking network."]} />
                    </div>
                  </div>
                  <div className={styles["div-6"]}>
                    <div className={styles["stat-card-1"]}>
                      <NumberCounter locale={locale} slots={["End-to-End Guidance","From profile review and document preparation to submission and follow-up."]} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <section className={styles["bank-logos-section"]}>
              <div className={styles["container-9"]}>
                <div className={styles["content-6"]}>
                  <div className={styles["info-text"] + " " + styles["rv-4"]} data-reveal>
                    <p className={styles["p-73"]}>{t(slots[70] ?? "Access to Solutions Across Leading UAE Banks", locale)}</p>
                  </div>
                  <div className={styles["brand-wrap"]}>
                    <ul className={styles["ul-2"] + " " + styles["rv-5"]} data-reveal>
                      <li className={styles["li"]}>
                        <div className={styles["logo-01"]}>
                          <div className={styles["div-58"]}>
                            <img className={styles["img-13"]} src={slots[71] ?? "https://framerusercontent.com/images/NrHS3yewoKKOMJdIjggszmVP0ak.png?scale-down-to=512&width=800&height=210"} alt="" />
                          </div>
                        </div>
                      </li>
                      <li className={styles["li-2"]}>
                        <div className={styles["logo-02"]}>
                          <div className={styles["div-59"]}>
                            <img className={styles["img-14"]} src={slots[72] ?? "https://framerusercontent.com/images/VVQEYMZAC3TUbf7H7LwelOAG6mk.png?width=250&height=99"} alt="" />
                          </div>
                        </div>
                      </li>
                      <li className={styles["li-3"]}>
                        <div className={styles["logo-03"]}>
                          <div className={styles["div-60"]}>
                            <img className={styles["img-15"]} src={slots[73] ?? "https://framerusercontent.com/images/bBDK6cY8vU7hNGIxxLHtH62BTQo.png?scale-down-to=512&width=800&height=470"} alt="" />
                          </div>
                        </div>
                      </li>
                      <li className={styles["li-4"]}>
                        <div className={styles["logo-04"]}>
                          <div className={styles["div-61"]}>
                            <img className={styles["img-16"]} src={slots[74] ?? "https://framerusercontent.com/images/5dfXrcGwKVK8zKsMME1od7hSoU.png?scale-down-to=512&width=535&height=186"} alt="" />
                          </div>
                        </div>
                      </li>
                      <li className={styles["li-5"]}>
                        <div className={styles["logo-05"]}>
                          <div className={styles["div-62"]}>
                            <img className={styles["img-17"]} src={slots[75] ?? "https://framerusercontent.com/images/Y06hEq9T9JMTwhLZZ1FASzUjzo.png?scale-down-to=512&width=800&height=269"} alt="" />
                          </div>
                        </div>
                      </li>
                      <li className={styles["li-6"]}>
                        <div className={styles["logo-06"]}>
                          <div className={styles["div-63"]}>
                            <img className={styles["img-18"]} src={slots[76] ?? "https://framerusercontent.com/images/GrIJ0BTBKkNHJJkQs56slXHPpU.png?width=270&height=88"} alt="" />
                          </div>
                        </div>
                      </li>
                      <li className={styles["li-7"]}>
                        <div className={styles["logo-07"]}>
                          <div className={styles["div-64"]}>
                            <img className={styles["img-19"]} src={slots[77] ?? "https://framerusercontent.com/images/R0LVh8JU9YRGLdt6mUOM2jLsS4.png?scale-down-to=512&width=800&height=279"} alt="" />
                          </div>
                        </div>
                      </li>
                      <li className={styles["li-7"]}>
                        <div className={styles["logo-07"]}>
                          <div className={styles["div-64"]}>
                            <img className={styles["img-20"]} src={slots[78] ?? "https://framerusercontent.com/images/GfANrxCivyQ3lV5x7HmbsoA3zOw.png?width=800&height=93"} alt="" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className={styles["left-glow"]} />
                  <div className={styles["right-glow"]} />
                </div>
              </div>
            </section>
            <div className={styles["service-sections"]}>
              <div className={styles["background-image-2"]}>
                <div className={styles["div-65"]}>
                  <img className={styles["img-21"]} src={slots[79] ?? "https://framerusercontent.com/images/z7lYkVyiZ3Nqat5lSI98CpQwXQk.webp?width=1890&height=640"} alt="" />
                </div>
              </div>
              <div className={styles["liner-color"]} />
              <div className={styles["container-10"]}>
                <div className={styles["content-wrapper"]}>
                  <div className={styles["we-re-helping-landowners-businesses-and-communities-generate-sustainable-power"]}>
                    <h3 className={styles["h3-6"]}>{t(slots[80] ?? "Support at Every Stage of Your Journey", locale)}</h3>
                  </div>
                  <div className={styles["text-button-wrapper"]}>
                    <div className={styles["text-wrapper-2"]}>
                      <div className={styles["div-6"]}>
                        <div className={styles["we-re-helping-landowners-businesses-and-communities-generate-sustainable-power-and-lasting-value"]}>
                          <p className={styles["p-74"]}>{t(slots[81] ?? "From business setup and banking to finance, digital growth, and property, we help you move forward with a clearer plan.", locale)}</p>
                        </div>
                      </div>
                      <div className={styles["div-6"]}>
                        <div className={styles["div-66"]}>
                          <Button23 locale={locale} slots={["Start Your Journey"]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["process-sections"]}>
              <div className={styles["container-11"]}>
                <div className={styles["section-title-block"]}>
                  <div className={styles["div-6"]}>
                    <div className={styles["badge-component"]}>
                      <Badge locale={locale} slots={["/","How It Works"]} />
                    </div>
                  </div>
                  <div className={styles["title-text-2"]}>
                    <h2 className={styles["h2-3"]}>
                      {t("Our Process, ", locale)}
                      <br className={styles["br-2"]} />
                      <span className={styles["span-18"]}>{t(slots[82] ?? "Made Simple", locale)}</span>
                    </h2>
                  </div>
                  <div className={styles["section-description"]}>{locale === "ar" ? t("Three clear steps to help you understand your options and prepare your application.", locale) : <>
                    <div className={styles["p-75"]}>
                      <span className={styles["span-19"]}>{t(slots[83] ?? "Three", locale)}</span>
                      {" "}
                      <span className={styles["span-20"]}>{t(slots[84] ?? "clear", locale)}</span>
                      {" "}
                      <span className={styles["span-21"]}>{t(slots[85] ?? "steps", locale)}</span>
                      {" "}
                      <span className={styles["span-22"]}>{t(slots[86] ?? "to", locale)}</span>
                      {" "}
                      <span className={styles["span-23"]}>{t(slots[87] ?? "help", locale)}</span>
                      {" "}
                      <span className={styles["span-24"]}>{t(slots[88] ?? "you", locale)}</span>
                      {" "}
                      <span className={styles["span-25"]}>{t(slots[89] ?? "understand", locale)}</span>
                      {" "}
                      <span className={styles["span-26"]}>{t(slots[90] ?? "your", locale)}</span>
                      {" "}
                      <span className={styles["span-27"]}>{t(slots[91] ?? "options", locale)}</span>
                      {" "}
                      <span className={styles["span-28"]}>{t(slots[92] ?? "and", locale)}</span>
                      {" "}
                      <span className={styles["span-29"]}>{t(slots[93] ?? "prepare", locale)}</span>
                      {" "}
                      <span className={styles["span-26"]}>{t(slots[94] ?? "your", locale)}</span>
                      {" "}
                      <span className={styles["span-30"]}>{t(slots[95] ?? "application.", locale)}</span>
                    </div>
                  </>}</div>
                </div>
                <div className={styles["process-card"] + " " + styles["rv-1"]} data-reveal>
                  <div className={styles["div-6"]}>
                    <div className={styles["div-67"]}>
                      <ProcessCard locale={locale} slots={["1","Profile Review Session","https://framerusercontent.com/images/wpEJ1UWlF5gcMqEC9MNiESMsIA.webp?width=462&height=476","Understand Your Profile","We review your goals, financial position, documents, and requirements."]} />
                    </div>
                  </div>
                  <div className={styles["div-6"]}>
                    <div className={styles["div-68"]}>
                      <ProcessCard2 locale={locale} slots={["2","Bank Matching Process","https://framerusercontent.com/images/kgndFB14ESSANgRXJMgs5ixPdg.webp?width=462&height=476","Compare and Prepare","We identify suitable options and help prepare the required documentation."]} />
                    </div>
                  </div>
                  <div className={styles["div-6"]}>
                    <div className={styles["div-69"]}>
                      <ProcessCard locale={locale} slots={["3","Application Follow Up","https://framerusercontent.com/images/wFGEVv94h0RxpPMAvB07csiSSw.webp?width=462&height=476","Submit and Follow Up","We support your application and keep you informed throughout the process."]} />
                    </div>
                  </div>
                  <div className={styles["line-wrapper"]}>
                    <div className={styles["active-line-wrapper"]} />
                  </div>
                </div>
              </div>
              <div className={styles["process-card-2"]} />
              <div className={styles["line-wrapper-2"]} />
              <div className={styles["process-card-03"]} />
            </div>
            <section className={styles["solutions-section"]}>
              <div className={styles["container-12"]}>
                <div className={styles["top-6"]}>
                  <div className={styles["section-title-container"] + " " + styles["rv-3"]} data-reveal>
                    <div className={styles["div-6"]}>
                      <div className={styles["div-70"]}>
                        <Badge locale={locale} slots={["/","Our services"]} />
                      </div>
                    </div>
                    <div className={styles["div-6"]}>
                      <div className={styles["title-text-3"]}>
                        <h2 className={styles["h2-4"]}>{t(slots[96] ?? "Business & Financial Solutions, Built Around You", locale)}</h2>
                      </div>
                    </div>
                    <div className={styles["div-6"]}>
                      <div className={styles["description-text"]}>
                        <div className={styles["p-76"]}>{locale === "ar" ? t("Practical support for individuals, entrepreneurs, and established businesses across the UAE.", locale) : <>
                          <span className={styles["span-31"]}>{t(slots[97] ?? "Practical", locale)}</span>
                          {" "}
                          <span className={styles["span-32"]}>{t(slots[98] ?? "support", locale)}</span>
                          {" "}
                          <span className={styles["span-33"]}>{t(slots[99] ?? "for", locale)}</span>
                          {" "}
                          <span className={styles["span-34"]}>{t(slots[100] ?? "individuals,", locale)}</span>
                          {" "}
                          <span className={styles["span-35"]}>{t(slots[101] ?? "entrepreneurs,", locale)}</span>
                          {" "}
                          <span className={styles["span-36"]}>{t(slots[102] ?? "and", locale)}</span>
                          {" "}
                          <span className={styles["span-37"]}>{t(slots[103] ?? "established", locale)}</span>
                          {" "}
                          <span className={styles["span-38"]}>{t(slots[104] ?? "businesses", locale)}</span>
                          {" "}
                          <span className={styles["span-39"]}>{t(slots[105] ?? "across", locale)}</span>
                          {" "}
                          <span className={styles["span-40"]}>{t(slots[106] ?? "the", locale)}</span>
                          {" "}
                          <span className={styles["span-41"]}>{t(slots[107] ?? "UAE.", locale)}</span>
                        </>}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["bottom-6"]}>
                  <div className={styles["scroll-container"]}>
                    <div className={styles["div-6"]}>
                      <div className={styles["div-71"] + " " + styles["rv-2"]} data-reveal>
                        <div className={styles["desktop-3"]}>
                          <div className={styles["heading"]}>
                            <div className={styles["heading-eyebrow"]}>
                              <div className={styles["eyebrow"]}>
                                <div className={styles["div-72"]}>
                                  <div className={styles["secondary"]}>
                                    <div className={styles["div-73"]}>
                                      <p className={styles["p-77"]}>{slots[108] ?? "[001]"}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["heading-2"]}>
                                <div className={styles["div-74"]}>
                                  <h2 className={styles["h2-5"]}>{t(slots[109] ?? "Business", locale)}</h2>
                                </div>
                                <div className={styles["div-75"]}>
                                  <h2 className={styles["h2-5"]}>{t(slots[110] ?? "Setup", locale)}</h2>
                                </div>
                              </div>
                            </div>
                            <div className={styles["chips"]} />
                          </div>
                          <div className={styles["subheading-services"]}>
                            <div className={styles["services"]}>
                              <div className={styles["01row"]}>
                                <div className={styles["div-76"]}>
                                  <div className={styles["chips-2"]}>
                                    <div className={styles["div-77"]}>
                                      <p className={styles["p-78"]}>{t(slots[111] ?? "Company Formation", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles["div-78"]}>
                                  <div className={styles["chips-3"]}>
                                    <div className={styles["div-79"]}>
                                      <p className={styles["p-79"]}>{t(slots[112] ?? "Licensing Support", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["02row"]}>
                                <div className={styles["div-80"]}>
                                  <div className={styles["chips-4"]}>
                                    <div className={styles["div-81"]}>
                                      <p className={styles["p-80"]}>{t(slots[113] ?? "Banking Readiness", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-82"]}>
                              <p className={styles["p-81"]}>{t(slots[114] ?? "Start your business with the right foundation. We support you with company formation, licensing requirements, and banking preparation for a smoother UAE launch.", locale)}</p>
                            </div>
                          </div>
                          <div className={styles["banner"]}>
                            <div className={styles["dynamic-ski-descent"]}>
                              <div className={styles["div-83"]}>
                                <img className={styles["img-22"]} src={slots[115] ?? "https://framerusercontent.com/images/6IszatzFPYmCiCJQH2vfTzGzls.webp?scale-down-to=1024&width=1850&height=2150"} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-6"]}>
                      <div className={styles["div-84"] + " " + styles["rv-2"]} data-reveal>
                        <div className={styles["desktop-4"]}>
                          <div className={styles["heading-3"]}>
                            <div className={styles["heading-eyebrow-2"]}>
                              <div className={styles["eyebrow"]}>
                                <div className={styles["div-85"]}>
                                  <div className={styles["secondary-2"]}>
                                    <div className={styles["div-86"]}>
                                      <p className={styles["p-82"]}>{slots[116] ?? "[002]"}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["heading-4"]}>
                                <div className={styles["div-87"]}>
                                  <h2 className={styles["h2-6"]}>{t(slots[117] ?? "Business Banking", locale)}</h2>
                                </div>
                                <div className={styles["div-75"]}>
                                  <h2 className={styles["h2-5"]}>{t(slots[118] ?? "Support", locale)}</h2>
                                </div>
                              </div>
                            </div>
                            <div className={styles["chips"]} />
                          </div>
                          <div className={styles["subheading-services-2"]}>
                            <div className={styles["services"]}>
                              <div className={styles["01row-2"]}>
                                <div className={styles["div-88"]}>
                                  <div className={styles["chips-5"]}>
                                    <div className={styles["div-89"]}>
                                      <p className={styles["p-83"]}>{t(slots[119] ?? "Bank Matching", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles["div-90"]}>
                                  <div className={styles["chips-6"]}>
                                    <div className={styles["div-91"]}>
                                      <p className={styles["p-84"]}>{t(slots[120] ?? "Document Review", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["02row-2"]}>
                                <div className={styles["div-92"]}>
                                  <div className={styles["chips-7"]}>
                                    <div className={styles["div-93"]}>
                                      <p className={styles["p-85"]}>{t(slots[121] ?? "Application Support", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-82"]}>
                              <p className={styles["p-81"]}>{t(slots[122] ?? "We prepare your business profile, review the required documents, and help identify banking options aligned with your company’s needs and eligibility.", locale)}</p>
                            </div>
                          </div>
                          <div className={styles["banner-2"]}>
                            <div className={styles["dynamic-ski-descent-2"]}>
                              <div className={styles["div-94"]}>
                                <img className={styles["img-23"]} src={slots[123] ?? "https://framerusercontent.com/images/LvtkipVNiJaJmIL3S5U7WvX2DH0.webp?scale-down-to=1024&width=1850&height=2150"} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-6"]}>
                      <div className={styles["div-95"] + " " + styles["rv-2"]} data-reveal>
                        <div className={styles["desktop-4"]}>
                          <div className={styles["heading-3"]}>
                            <div className={styles["heading-eyebrow-2"]}>
                              <div className={styles["eyebrow"]}>
                                <div className={styles["div-85"]}>
                                  <div className={styles["secondary-2"]}>
                                    <div className={styles["div-86"]}>
                                      <p className={styles["p-82"]}>{slots[124] ?? "[003]"}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["heading-4"]}>
                                <div className={styles["div-87"]}>
                                  <h2 className={styles["h2-6"]}>{t(slots[125] ?? "Business Finance", locale)}</h2>
                                </div>
                                <div className={styles["div-75"]}>
                                  <h2 className={styles["h2-5"]}>{t(slots[126] ?? "Support", locale)}</h2>
                                </div>
                              </div>
                            </div>
                            <div className={styles["chips"]} />
                          </div>
                          <div className={styles["subheading-services-2"]}>
                            <div className={styles["services"]}>
                              <div className={styles["01row-3"]}>
                                <div className={styles["div-96"]}>
                                  <div className={styles["chips-8"]}>
                                    <div className={styles["div-97"]}>
                                      <p className={styles["p-86"]}>{t(slots[127] ?? "Funding Assessment", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles["div-98"]}>
                                  <div className={styles["chips-9"]}>
                                    <div className={styles["div-99"]}>
                                      <p className={styles["p-87"]}>{t(slots[128] ?? "Application Preparation", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["02row-3"]}>
                                <div className={styles["div-100"]}>
                                  <div className={styles["chips-10"]}>
                                    <div className={styles["div-101"]}>
                                      <p className={styles["p-88"]}>{t(slots[129] ?? "Bank Comparison", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-82"]}>
                              <p className={styles["p-81"]}>{t(slots[130] ?? "We assess your funding needs, strengthen your application, and help you compare suitable business finance options from our banking network.", locale)}</p>
                            </div>
                          </div>
                          <div className={styles["banner-2"]}>
                            <div className={styles["dynamic-ski-descent-2"]}>
                              <div className={styles["div-94"]}>
                                <img className={styles["img-23"]} src={slots[131] ?? "https://framerusercontent.com/images/Amv4gb9URgX6JqP03sxVdkpxA.webp?scale-down-to=1024&width=1850&height=2150"} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-6"]}>
                      <div className={styles["div-102"] + " " + styles["rv-2"]} data-reveal>
                        <div className={styles["desktop-3"]}>
                          <div className={styles["heading"]}>
                            <div className={styles["heading-eyebrow"]}>
                              <div className={styles["eyebrow"]}>
                                <div className={styles["div-85"]}>
                                  <div className={styles["secondary-2"]}>
                                    <div className={styles["div-86"]}>
                                      <p className={styles["p-82"]}>{slots[132] ?? "[005]"}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["heading-2"]}>
                                <div className={styles["div-74"]}>
                                  <h2 className={styles["h2-5"]}>{t(slots[133] ?? "Mortgage", locale)}</h2>
                                </div>
                                <div className={styles["div-75"]}>
                                  <h2 className={styles["h2-5"]}>{t(slots[134] ?? "Solutions", locale)}</h2>
                                </div>
                              </div>
                            </div>
                            <div className={styles["chips"]} />
                          </div>
                          <div className={styles["subheading-services"]}>
                            <div className={styles["services"]}>
                              <div className={styles["01row-4"]}>
                                <div className={styles["div-103"]}>
                                  <div className={styles["chips-11"]}>
                                    <div className={styles["div-104"]}>
                                      <p className={styles["p-89"]}>{t(slots[135] ?? "Home Finance", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles["div-105"]}>
                                  <div className={styles["chips-12"]}>
                                    <div className={styles["div-106"]}>
                                      <p className={styles["p-90"]}>{t(slots[136] ?? "Buyout & Refinancing", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["02row-4"]}>
                                <div className={styles["div-107"]}>
                                  <div className={styles["chips-13"]}>
                                    <div className={styles["div-108"]}>
                                      <p className={styles["p-91"]}>{t(slots[137] ?? "Property Investment", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-109"]}>
                              <p className={styles["p-92"]}>{t(slots[138] ?? "We compare mortgage options across leading UAE banks and guide you through eligibility, documentation, and the application process.", locale)}</p>
                            </div>
                          </div>
                          <div className={styles["banner"]}>
                            <div className={styles["dynamic-ski-descent"]}>
                              <div className={styles["div-83"]}>
                                <img className={styles["img-22"]} src={slots[139] ?? "https://framerusercontent.com/images/cWXq1wM0Otm2gLMZgiHSqVGw3es.webp?scale-down-to=1024&width=1850&height=2150"} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-6"]}>
                      <div className={styles["div-102"] + " " + styles["rv-2"]} data-reveal>
                        <div className={styles["desktop-3"]}>
                          <div className={styles["heading"]}>
                            <div className={styles["heading-eyebrow"]}>
                              <div className={styles["eyebrow"]}>
                                <div className={styles["div-110"]}>
                                  <div className={styles["secondary-3"]}>
                                    <div className={styles["div-111"]}>
                                      <p className={styles["p-93"]}>{slots[140] ?? "[006]"}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["heading-2"]}>
                                <div className={styles["div-74"]}>
                                  <h2 className={styles["h2-5"]}>{t(slots[141] ?? "Personal", locale)}</h2>
                                </div>
                                <div className={styles["div-75"]}>
                                  <h2 className={styles["h2-5"]}>{t(slots[142] ?? "Loans", locale)}</h2>
                                </div>
                              </div>
                            </div>
                            <div className={styles["chips"]} />
                          </div>
                          <div className={styles["subheading-services"]}>
                            <div className={styles["services"]}>
                              <div className={styles["01row-5"]}>
                                <div className={styles["div-112"]}>
                                  <div className={styles["chips-14"]}>
                                    <div className={styles["div-113"]}>
                                      <p className={styles["p-94"]}>{t(slots[143] ?? "Profile Assessment", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles["div-100"]}>
                                  <div className={styles["chips-10"]}>
                                    <div className={styles["div-101"]}>
                                      <p className={styles["p-88"]}>{t(slots[144] ?? "Bank Comparison", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["02row-2"]}>
                                <div className={styles["div-92"]}>
                                  <div className={styles["chips-7"]}>
                                    <div className={styles["div-93"]}>
                                      <p className={styles["p-85"]}>{t(slots[145] ?? "Application Support", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-109"]}>
                              <p className={styles["p-92"]}>{t(slots[146] ?? "We review your financial profile, compare available personal loan options, and help you prepare a clear and complete application.", locale)}</p>
                            </div>
                          </div>
                          <div className={styles["banner"]}>
                            <div className={styles["dynamic-ski-descent"]}>
                              <div className={styles["div-83"]}>
                                <img className={styles["img-22"]} src={slots[147] ?? "https://framerusercontent.com/images/Amv4gb9URgX6JqP03sxVdkpxA.webp?scale-down-to=1024&width=1850&height=2150"} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-6"]}>
                      <div className={styles["div-102"] + " " + styles["rv-2"]} data-reveal>
                        <div className={styles["desktop-3"]}>
                          <div className={styles["heading"]}>
                            <div className={styles["heading-eyebrow"]}>
                              <div className={styles["eyebrow"]}>
                                <div className={styles["div-72"]}>
                                  <div className={styles["secondary"]}>
                                    <div className={styles["div-73"]}>
                                      <p className={styles["p-77"]}>{slots[148] ?? "[007]"}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["heading-2"]}>
                                <div className={styles["div-74"]}>
                                  <h2 className={styles["h2-5"]}>{t(slots[149] ?? "Credit Card", locale)}</h2>
                                </div>
                                <div className={styles["div-75"]}>
                                  <h2 className={styles["h2-5"]}>{t(slots[150] ?? "Solutions", locale)}</h2>
                                </div>
                              </div>
                            </div>
                            <div className={styles["chips"]} />
                          </div>
                          <div className={styles["subheading-services"]}>
                            <div className={styles["services"]}>
                              <div className={styles["01row-6"]}>
                                <div className={styles["div-114"]}>
                                  <div className={styles["chips-15"]}>
                                    <div className={styles["div-115"]}>
                                      <p className={styles["p-95"]}>{t(slots[151] ?? "Card Comparison", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles["div-116"]}>
                                  <div className={styles["chips-16"]}>
                                    <div className={styles["div-117"]}>
                                      <p className={styles["p-96"]}>{t(slots[152] ?? "Eligibility Review", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["02row-2"]}>
                                <div className={styles["div-92"]}>
                                  <div className={styles["chips-7"]}>
                                    <div className={styles["div-93"]}>
                                      <p className={styles["p-85"]}>{t(slots[153] ?? "Application Support", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-109"]}>
                              <p className={styles["p-92"]}>{t(slots[154] ?? "We help you compare credit cards based on fees, benefits, income requirements, and eligibility, so you can make a more informed choice.", locale)}</p>
                            </div>
                          </div>
                          <div className={styles["banner"]}>
                            <div className={styles["dynamic-ski-descent"]}>
                              <div className={styles["div-83"]}>
                                <img className={styles["img-22"]} src={slots[155] ?? "https://framerusercontent.com/images/cWXq1wM0Otm2gLMZgiHSqVGw3es.webp?scale-down-to=1024&width=1850&height=2150"} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-6"]}>
                      <div className={styles["div-118"] + " " + styles["rv-2"]} data-reveal>
                        <div className={styles["desktop-3"]}>
                          <div className={styles["heading"]}>
                            <div className={styles["heading-eyebrow"]}>
                              <div className={styles["eyebrow"]}>
                                <div className={styles["div-85"]}>
                                  <div className={styles["secondary-2"]}>
                                    <div className={styles["div-86"]}>
                                      <p className={styles["p-82"]}>{slots[156] ?? "[004]"}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["heading-2"]}>
                                <div className={styles["div-74"]}>
                                  <h2 className={styles["h2-5"]}>{t(slots[157] ?? "Digital", locale)}</h2>
                                </div>
                                <div className={styles["div-75"]}>
                                  <h2 className={styles["h2-5"]}>{t(slots[158] ?? "Growth", locale)}</h2>
                                </div>
                              </div>
                            </div>
                            <div className={styles["chips"]} />
                          </div>
                          <div className={styles["subheading-services"]}>
                            <div className={styles["services"]}>
                              <div className={styles["01row-7"]}>
                                <div className={styles["div-119"]}>
                                  <div className={styles["chips-17"]}>
                                    <div className={styles["div-120"]}>
                                      <p className={styles["p-97"]}>{t(slots[159] ?? "Website Development", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles["div-121"]}>
                                  <div className={styles["chips-18"]}>
                                    <div className={styles["div-122"]}>
                                      <p className={styles["p-98"]}>{t(slots[160] ?? "Social Media Marketing", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["02row-5"]}>
                                <div className={styles["div-123"]}>
                                  <div className={styles["chips-19"]}>
                                    <div className={styles["div-124"]}>
                                      <p className={styles["p-99"]}>{t(slots[161] ?? "Lead Generation", locale)}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-82"]}>
                              <p className={styles["p-81"]}>{t(slots[162] ?? "Build a stronger digital presence through professional websites, strategic social media marketing, and campaigns designed to attract qualified enquiries.", locale)}</p>
                            </div>
                          </div>
                          <div className={styles["banner"]}>
                            <div className={styles["dynamic-ski-descent"]}>
                              <div className={styles["div-83"]}>
                                <img className={styles["img-22"]} src={slots[163] ?? "https://framerusercontent.com/images/D5VaO0lhYIkKQqsNILHdKc32Dw.webp?scale-down-to=1024&width=1850&height=2150"} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["1-4"]} />
                    <div className={styles["2"]} />
                    <div className={styles["3"]} />
                    <div className={styles["4"]} />
                  </div>
                  <div className={styles["eligibility-note"]}>
                    <p className={styles["p-100"]}>{t(slots[164] ?? "Banking and finance products are subject to eligibility requirements, bank policies, and final approval.", locale)}</p>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["testimonial"]}>
              <div className={styles["title"]}>
                <div className={styles["section-title"]}>
                  <div className={styles["div-6"]}>
                    <div className={styles["div-125"]}>
                      <Badge2 locale={locale} slots={["/","Testimonial"]} />
                    </div>
                  </div>
                  <div className={styles["div-6"]}>
                    <div className={styles["section-description-2"]}>
                      <p className={styles["p-101"]}>{t(slots[165] ?? "Real experiences from clients who trusted Al Aidy Group with their business and financial goals.", locale)}</p>
                    </div>
                  </div>
                  <a className={styles["google-reviews-link"]} href="https://share.google/XWj5cVf1KHia5WqvE">
                    <CircleStar locale={locale} slots={[]} />
                    <div className={styles["label"]}>
                      <p className={styles["p-102"]}>{t(slots[166] ?? "View Our Google Reviews", locale)}</p>
                    </div>
                    <Google locale={locale} slots={[]} />
                  </a>
                </div>
              </div>
              <div className={styles["ticker-1"]}>
                <section className={styles["section-2"]}>
                  <ul className={styles["ul-3"] + " " + styles["rv-6"] + " " + styles["loop-1"]} data-reveal>
                    <li className={styles["li-8"]}>
                      <div className={styles["div-126"]}>
                        <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group kept us updated, explained every option clearly, and responded quickly throughout the process.”","Mohamed Mady","Mortgage Client"]} />
                      </div>
                    </li>
                    <li className={styles["li-8"]}>
                      <div className={styles["div-126"]}>
                        <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Marketing Management was honest, professional, and reliable, making the entire experience smooth and trusted.”","hazem abdel aleem","Marketing Client"]} />
                      </div>
                    </li>
                    <li className={styles["li-8"]}>
                      <div className={styles["div-126"]}>
                        <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group delivered clear communication, professional support, and reliable service that exceeded my expectations.”","omario","Business Client"]} />
                      </div>
                    </li>
                    <li className={styles["li-8"]}>
                      <div className={styles["div-126"]}>
                        <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group made the refinancing process clear and smooth, with patient support and professional guidance every step.”","Ivana Jocic","Refinancing Client"]} />
                      </div>
                    </li>
                    <li className={styles["li-8"]}>
                      <div className={styles["div-126"]}>
                        <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group kept us updated, explained every option clearly, and responded quickly throughout the process.”","Mohamed Mady","Mortgage Client"]} />
                      </div>
                    </li>
                    <li className={styles["li-8"]}>
                      <div className={styles["div-126"]}>
                        <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Marketing Management was honest, professional, and reliable, making the entire experience smooth and trusted.”","hazem abdel aleem","Marketing Client"]} />
                      </div>
                    </li>
                    <li className={styles["li-8"]}>
                      <div className={styles["div-126"]}>
                        <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group delivered clear communication, professional support, and reliable service that exceeded my expectations.”","omario","Business Client"]} />
                      </div>
                    </li>
                    <li className={styles["li-8"]}>
                      <div className={styles["div-126"]}>
                        <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group made the refinancing process clear and smooth, with patient support and professional guidance every step.”","Ivana Jocic","Refinancing Client"]} />
                      </div>
                    </li>
                    <li className={styles["li-8"]}>
                      <div className={styles["div-126"]}>
                        <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group kept us updated, explained every option clearly, and responded quickly throughout the process.”","Mohamed Mady","Mortgage Client"]} />
                      </div>
                    </li>
                    <li className={styles["li-8"]}>
                      <div className={styles["div-126"]}>
                        <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Marketing Management was honest, professional, and reliable, making the entire experience smooth and trusted.”","hazem abdel aleem","Marketing Client"]} />
                      </div>
                    </li>
                    <li className={styles["li-8"]}>
                      <div className={styles["div-126"]}>
                        <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group delivered clear communication, professional support, and reliable service that exceeded my expectations.”","omario","Business Client"]} />
                      </div>
                    </li>
                    <li className={styles["li-8"]}>
                      <div className={styles["div-126"]}>
                        <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group made the refinancing process clear and smooth, with patient support and professional guidance every step.”","Ivana Jocic","Refinancing Client"]} />
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
              <div className={styles["tickers"]}>
                <div className={styles["ticker-2"]}>
                  <section className={styles["section-3"]}>
                    <ul className={styles["ul-4"] + " " + styles["rv-7"] + " " + styles["loop-2"]} data-reveal>
                      <li className={styles["li-8"]}>
                        <div className={styles["div-126"]}>
                          <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group processed my application quickly, made every step clear, and answered questions promptly.”","Lilo Sweet","Banking Client"]} />
                        </div>
                      </li>
                      <li className={styles["li-9"]}>
                        <div className={styles["div-127"]}>
                          <CardTestimonialCard2 locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group provided excellent mortgage support, great customer service, and smart problem-solving from start to finish.”","Hend Karam","Mortgage Client"]} />
                        </div>
                      </li>
                      <li className={styles["li-10"]}>
                        <div className={styles["div-128"]}>
                          <CardTestimonialCard2 locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group understood my business needs and delivered professional marketing solutions with knowledge, care, and dedication.”","Marwa Yassin","Marketing Client"]} />
                        </div>
                      </li>
                      <li className={styles["li-8"]}>
                        <div className={styles["div-126"]}>
                          <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group was organized, punctual, and followed up closely, making the mortgage process much smoother.”","Mohammad Naseriddin","Mortgage Client"]} />
                        </div>
                      </li>
                      <li className={styles["li-8"]}>
                        <div className={styles["div-126"]}>
                          <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group processed my application quickly, made every step clear, and answered questions promptly.”","Lilo Sweet","Banking Client"]} />
                        </div>
                      </li>
                      <li className={styles["li-9"]}>
                        <div className={styles["div-127"]}>
                          <CardTestimonialCard2 locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group provided excellent mortgage support, great customer service, and smart problem-solving from start to finish.”","Hend Karam","Mortgage Client"]} />
                        </div>
                      </li>
                      <li className={styles["li-10"]}>
                        <div className={styles["div-128"]}>
                          <CardTestimonialCard2 locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group understood my business needs and delivered professional marketing solutions with knowledge, care, and dedication.”","Marwa Yassin","Marketing Client"]} />
                        </div>
                      </li>
                      <li className={styles["li-8"]}>
                        <div className={styles["div-126"]}>
                          <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group was organized, punctual, and followed up closely, making the mortgage process much smoother.”","Mohammad Naseriddin","Mortgage Client"]} />
                        </div>
                      </li>
                      <li className={styles["li-8"]}>
                        <div className={styles["div-126"]}>
                          <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group processed my application quickly, made every step clear, and answered questions promptly.”","Lilo Sweet","Banking Client"]} />
                        </div>
                      </li>
                      <li className={styles["li-9"]}>
                        <div className={styles["div-127"]}>
                          <CardTestimonialCard2 locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group provided excellent mortgage support, great customer service, and smart problem-solving from start to finish.”","Hend Karam","Mortgage Client"]} />
                        </div>
                      </li>
                      <li className={styles["li-10"]}>
                        <div className={styles["div-128"]}>
                          <CardTestimonialCard2 locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group understood my business needs and delivered professional marketing solutions with knowledge, care, and dedication.”","Marwa Yassin","Marketing Client"]} />
                        </div>
                      </li>
                      <li className={styles["li-8"]}>
                        <div className={styles["div-126"]}>
                          <CardTestimonialCard locale={locale} slots={["https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","https://framerusercontent.com/images/tJsOd07kzOCIP0RQ6tCFZQA6AE.png","“Al Aidy Group was organized, punctual, and followed up closely, making the mortgage process much smoother.”","Mohammad Naseriddin","Mortgage Client"]} />
                        </div>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </section>
            <div className={styles["div-6"]}>
              <section className={styles["faqs-section"]}>
                <div className={styles["container-13"] + " " + styles["rv-8"]} data-reveal>
                  <div className={styles["left-wrapper"]}>
                    <div className={styles["section-title-2"]}>
                      <div className={styles["div-129"]}>
                        <Badge3 locale={locale} slots={["/","FAQs"]} />
                      </div>
                      <div className={styles["title-text-4"]}>
                        <h2 className={styles["h2-7"]}>{t(slots[167] ?? "Frequently Asked Questions", locale)}</h2>
                      </div>
                      <div className={styles["section-description-3"]}>
                        <p className={styles["p-103"]}>{t(slots[168] ?? "Clear answers about our business, banking, finance, and mortgage services.", locale)}</p>
                      </div>
                    </div>
                    <div className={styles["help-cta"]}>
                      <div className={styles["cta-heading"]}>
                        <h4 className={styles["h4-5"]}>{t(slots[169] ?? "Need More Help?", locale)}</h4>
                      </div>
                      <div className={styles["call-to-action"]}>
                        <div className={styles["cta-text"]}>
                          <p className={styles["p-104"]}>{t(slots[170] ?? "Speak with our team about your business, banking, finance, or mortgage requirements.", locale)}</p>
                        </div>
                        <div className={styles["cta-button"] + " " + styles["rv-9"]} data-reveal style={{ transitionDelay: "182ms" }}>
                          <Button locale={locale} slots={["Book a Free Consultation"]} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-130"]}>
                    <FAQs locale={locale} slots={["What services does Al Aidy Group provide?","We support clients with business setup, bank account applications, business and personal finance, credit cards, mortgages, business advisory, and digital growth.","Can you support company formation in the UAE?","Yes. We help clients understand suitable structures, prepare the required documentation, and coordinate the setup process with the relevant providers.","Can you help with business bank account applications?","Yes. We review your business profile, identify suitable banks, and support the document preparation and application process.","Can you help after a rejected application?","We can review the application, identify potential weaknesses, and recommend improvements or alternative options. Final approval remains subject to the bank’s criteria.","Do you provide business finance support?","Yes. We help eligible businesses explore options such as term finance, working capital, trade finance, and equipment finance.","Is the initial consultation free?","Yes. The initial consultation helps us understand your requirements and recommend the most suitable next step."]} />
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className={styles["div-16"]} />
          <div className={styles["div-131"]} />
          <div className={styles["ticker-text"]}>
            <div className={styles["text-01"]}>
              <p className={styles["p-105"]}>{t(slots[171] ?? "Business, banking, finance, and property support across the UAE.", locale)}</p>
            </div>
            <div className={styles["circle"]} />
            <div className={styles["text-02"]}>
              <p className={styles["p-106"]}>{t(slots[172] ?? "18 banks. 16+ years of combined banking experience.", locale)}</p>
            </div>
            <div className={styles["circle"]} />
            <div className={styles["text-03"]}>
              <p className={styles["p-107"]}>{t(slots[173] ?? "Practical guidance for stronger applications and clearer next steps.", locale)}</p>
            </div>
          </div>
          <div className={styles["div-6"]}>
            <div className={styles["div-132"]}>
              <div className={styles["div-6"]}>
                <Footer4 locale={locale} slots={["https://framerusercontent.com/images/nuF5MBQa5OHhR97TinwZmRWx23s.webp?width=1344&height=1170","Ready to Take the Next Step?","Book a Free Consultation","https://framerusercontent.com/images/f2noCmvFpCpDTUk11PGBQjkxAY.png?scale-down-to=512&width=3448&height=3076","Your trusted partner for business, banking, finance, mortgages, and digital growth across the UAE.","Main Pages","Home","About","Services","Free Consultation","Contact Us","Services","Business Setup","Business Account Opening","Business Finance","Mortgage Consultancy","Credit Card Advisory","Digital Growth Solutions","Social Media","All banking and financial products are subject to the eligibility criteria, terms, and final approval of the respective bank. Al Aidy Group does not guarantee approval.","Privacy policy","© 2026 Al Aidy Group. All rights reserved.","Terms of Use"]} />
              </div>
            </div>
          </div>
          <div className={styles["lenis-smooth-scroll"]} />
          <div className={styles["div-6"]}>
            <div className={styles["div-133"]}>
              <Navigation locale={locale} slots={["https://framerusercontent.com/images/f2noCmvFpCpDTUk11PGBQjkxAY.png?scale-down-to=512&width=3448&height=3076","Home","About","Our Process","Services","free-consultation","https://framerusercontent.com/images/IqSszVDWzGQQfswY7G1XpuEJ8g.svg?width=14&height=19","Contact us"]} />
            </div>
          </div>
        </div>
        <Template2 locale={locale} slots={[]} />
      </div>
      <div className={styles["div-134"]} aria-hidden="true" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", contain: "strict", pointerEvents: "none" }}>
        <SvgGraphic className={styles["svg-5"]} html={t("<svg id=\"559087864\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"1922\"><path d=\"M 4.123 0.69 C 4.258 0.274 4.648 -0.005 5.086 0 C 5.523 0.006 5.906 0.295 6.032 0.714 L 6.769 2.166 C 6.914 2.452 7.188 2.651 7.506 2.701 L 9.14 2.957 C 9.571 2.959 9.953 3.237 10.087 3.647 C 10.22 4.058 10.075 4.508 9.728 4.763 L 8.556 5.931 C 8.328 6.158 8.223 6.48 8.274 6.797 L 8.533 8.41 C 8.679 8.825 8.537 9.287 8.182 9.548 C 7.828 9.809 7.344 9.807 6.992 9.544 L 5.527 8.794 C 5.24 8.647 4.901 8.647 4.615 8.794 L 3.15 9.544 C 2.797 9.805 2.315 9.805 1.962 9.545 C 1.609 9.285 1.466 8.825 1.611 8.411 L 1.869 6.798 C 1.919 6.481 1.815 6.158 1.587 5.931 L 0.431 4.779 C 0.071 4.53 -0.085 4.075 0.046 3.658 C 0.177 3.24 0.565 2.956 1.003 2.957 L 2.636 2.701 C 2.953 2.651 3.227 2.452 3.373 2.166 Z\" fill=\"transparent\" height=\"9.742455677761509px\" id=\"tKP1j4O9p\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(6.928 6.926)\" width=\"10.135752438310277px\" data-f2c-idx=\"1923\"></path><path d=\"M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z\" fill=\"transparent\" height=\"20px\" id=\"UrkZqyNFM\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(2 2)\" width=\"20px\" data-f2c-idx=\"1924\"></path></svg>", locale)} />
        <SvgGraphic className={styles["svg-5"]} html={t("<svg id=\"1235104226\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"1925\"><path d=\"M 8 8 L 12 4 M 12 4 L 8 0 M 12 4 L 0 4\" fill=\"transparent\" height=\"8px\" id=\"JgTGlz8TK\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--b8xnka, 2)\" stroke=\"var(--4i27ky, rgb(0, 0, 0))\" transform=\"translate(6 8)\" width=\"12px\" data-f2c-idx=\"1926\"></path></svg>", locale)} />
      </div>
      
      <div className={styles["iframe"]} />
    </>
  )
}
