import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import RevealWatcher from "./RevealWatcher"
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
import HighlighterTag22 from "./HighlighterTag22"
import AnimatedNumberCounter3 from "./AnimatedNumberCounter3"
import AnimatedNumberCounter4 from "./AnimatedNumberCounter4"
import HighlighterTag3 from "./HighlighterTag3"
import AboutCard from "./AboutCard"
import AboutCard2 from "./AboutCard2"
import HighlighterTag32 from "./HighlighterTag32"
import HighlighterTag33 from "./HighlighterTag33"
import StatsCard from "./StatsCard"
import StatsCard2 from "./StatsCard2"
import BankLogos from "./BankLogos"
import SiteTicker from "./SiteTicker"

export default function About({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-136"]}>
        <div className={styles["div-137"]}>
          <div className={styles["div-138"]}>
            <div className={styles["div-139"]}>
              <SmoothScroll locale={locale} slots={[]} />
            </div>
            <main className={styles["main"]}>
              <div className={styles["div-6"]}>
                <section className={styles["hero"]}>
                  <div className={styles["top-7"]}>
                    <div className={styles["div-140"]}>
                      <div className={styles["container-14"]}>
                        <div className={styles["div-141"]}>
                          <div className={styles["div-6"]}>
                            <div className={styles["div-142"]}>
                              <HighlighterTag2 locale={locale} slots={["Based in Dubai, UAE"]} />
                            </div>
                          </div>
                          <div className={styles["text-18"]}>
                            <h4 className={styles["h4-6"]}>{t(slots[0] ?? "End-to-end business and banking support, built on 16+ years of expertise. We help entrepreneurs start, bank, fund, grow, and invest with confidence across the UAE.", locale)}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-143"]}>
                      <div className={styles["div-144"]}>
                        <ScrollDownArrow locale={locale} slots={[]} />
                      </div>
                      <h1 className={styles["about-hero-title"]}>{t("About Al Aidy Group", locale)}</h1>
                    </div>
                  </div>
                  <div className={styles["bg"]}>
                    <div className={styles["img-main"]}>
                      <div className={styles["image-10"]}>
                        <div className={styles["div-145"]}>
                          <img className={styles["img-24"]} src={slots[1] ?? "https://framerusercontent.com/images/lNw00LKvjeNpRj9JGy0oiom2k.png?width=1890&height=780"} alt="" />
                        </div>
                        <div className={styles["overlay-2"]} />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <section className={styles["about"]}>
                <div className={styles["stack-2"]}>
                  <div className={styles["div-6"]}>
                    <div className={styles["div-146"]}>
                      <HighlighterTag22 locale={locale} slots={["About Us"]} />
                    </div>
                  </div>
                  <div className={styles["content-7"]}>
                    <div className={styles["top-8"]}>
                      <div className={styles["div-147"]}>
                        <div className={styles["div-6"]}>
                          <div className={styles["div-148"]}>
                            <div className={styles["p-108"]}>{t("Based in Dubai, Al Aidy Group began operations in 2021 and expanded in 2025 with the launch of Al Aidy Solutions & Services to grow the Group's capabilities and help businesses grow. With more than 16 years of combined banking experience and access to solutions across 18+ UAE banks, we support individuals and businesses with banking, finance, mortgages, business services, and digital growth.", locale)}</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["text-19"] + " " + styles["rv-2"]} data-reveal>
                        <p className={styles["p-109"]}>{t(slots[41] ?? "Based in Dubai, we support entrepreneurs, business owners, and investors across the UAE with company setup, bank account opening, funding solutions, mortgage consultancy, and digital growth services all through one trusted partner.", locale)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["div-6"]}>
                  <div className={styles["image-11"]}>
                    <div className={styles["div-149"]}>
                      <img className={styles["img-25"]} src={slots[42] ?? "https://framerusercontent.com/images/2xLG0apeoWcgNL8Rn9zNBAqmQk.png?scale-down-to=1024&width=3810&height=2719"} alt="" />
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["gallery"]}>
                <div className={styles["div-150"]}>
                  <div className={styles["images-gallery"]}>
                    <section className={styles["section-4"]}>
                      <ul className={styles["ul-5"] + " " + styles["rv-11"] + " " + styles["loop-3"]} data-reveal>
                        <li className={styles["li-11"]}>
                          <div className={styles["image-1-3"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-26"]} src={slots[43] ?? "https://framerusercontent.com/images/y2FdWwntBtoBM8jbaOuSjCqLU.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-12"]}>
                          <div className={styles["gallery-image-2"]}>
                            <div className={styles["div-152"]}>
                              <img className={styles["img-27"]} src={slots[44] ?? "https://framerusercontent.com/images/4Z5RzE3Lq1vTOP3HgBPM9jBhUyQ.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-11"]}>
                          <div className={styles["image-1-3"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-26"]} src={slots[45] ?? "https://framerusercontent.com/images/4S7VWkQcq1jOoJ4R5YVodT8EjWU.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-12"]}>
                          <div className={styles["gallery-image-2"]}>
                            <div className={styles["div-152"]}>
                              <img className={styles["img-27"]} src={slots[46] ?? "https://framerusercontent.com/images/wG21GboxDZ2cDg0cvtz9ie1TjBE.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-11"]}>
                          <div className={styles["image-1-3"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-26"]} src={slots[47] ?? "https://framerusercontent.com/images/y2FdWwntBtoBM8jbaOuSjCqLU.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-12"]}>
                          <div className={styles["gallery-image-2"]}>
                            <div className={styles["div-152"]}>
                              <img className={styles["img-27"]} src={slots[48] ?? "https://framerusercontent.com/images/4Z5RzE3Lq1vTOP3HgBPM9jBhUyQ.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-11"]}>
                          <div className={styles["image-1-3"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-26"]} src={slots[49] ?? "https://framerusercontent.com/images/4S7VWkQcq1jOoJ4R5YVodT8EjWU.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-12"]}>
                          <div className={styles["gallery-image-2"]}>
                            <div className={styles["div-152"]}>
                              <img className={styles["img-27"]} src={slots[50] ?? "https://framerusercontent.com/images/wG21GboxDZ2cDg0cvtz9ie1TjBE.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-11"]}>
                          <div className={styles["image-1-3"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-26"]} src={slots[51] ?? "https://framerusercontent.com/images/y2FdWwntBtoBM8jbaOuSjCqLU.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-12"]}>
                          <div className={styles["gallery-image-2"]}>
                            <div className={styles["div-152"]}>
                              <img className={styles["img-27"]} src={slots[52] ?? "https://framerusercontent.com/images/4Z5RzE3Lq1vTOP3HgBPM9jBhUyQ.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-11"]}>
                          <div className={styles["image-1-3"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-26"]} src={slots[53] ?? "https://framerusercontent.com/images/4S7VWkQcq1jOoJ4R5YVodT8EjWU.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-12"]}>
                          <div className={styles["gallery-image-2"]}>
                            <div className={styles["div-152"]}>
                              <img className={styles["img-27"]} src={slots[54] ?? "https://framerusercontent.com/images/wG21GboxDZ2cDg0cvtz9ie1TjBE.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-11"]}>
                          <div className={styles["image-1-3"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-26"]} src={slots[55] ?? "https://framerusercontent.com/images/y2FdWwntBtoBM8jbaOuSjCqLU.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-12"]}>
                          <div className={styles["gallery-image-2"]}>
                            <div className={styles["div-152"]}>
                              <img className={styles["img-27"]} src={slots[56] ?? "https://framerusercontent.com/images/4Z5RzE3Lq1vTOP3HgBPM9jBhUyQ.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-11"]}>
                          <div className={styles["image-1-3"]}>
                            <div className={styles["div-151"]}>
                              <img className={styles["img-26"]} src={slots[57] ?? "https://framerusercontent.com/images/4S7VWkQcq1jOoJ4R5YVodT8EjWU.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                        <li className={styles["li-12"]}>
                          <div className={styles["gallery-image-2"]}>
                            <div className={styles["div-152"]}>
                              <img className={styles["img-27"]} src={slots[58] ?? "https://framerusercontent.com/images/wG21GboxDZ2cDg0cvtz9ie1TjBE.webp?scale-down-to=1024&width=2250&height=2500"} alt="" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
                <BankLogos locale={locale} />
              </section>
              <section className={styles["stats"]}>
                <div className={styles["bottom-7"]}>
                  <div className={styles["div-6"]}>
                    <div className={styles["div-157"]}>
                      <Stats2 locale={locale} slots={["16+","16+","Years of banking expertise"]} />
                    </div>
                  </div>
                  <div className={styles["div-6"]}>
                    <div className={styles["div-158"]}>
                      <Stats2 locale={locale} slots={["18+","18+","UAE Banking Connections"]} />
                    </div>
                  </div>
                  <div className={styles["div-6"]}>
                    <div className={styles["div-157"]}>
                      <Stats2 locale={locale} slots={["3,000+","3,000+","Clients served"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["bg-imge"] + " " + styles["rv-12"]} data-reveal>
                  <div className={styles["div-159"]}>
                    <img className={styles["img-32"]} src={slots[76] ?? "https://framerusercontent.com/images/DCPNSTOdjZ89Emy5jJOCW8udGhM.webp?scale-down-to=4096&width=4672&height=7008"} alt="" />
                  </div>
                  <div className={styles["div-160"]} />
                </div>
              </section>
              <section className={styles["about-2"]}>
                <div className={styles["stack-3"]}>
                  <div className={styles["content-9"]}>
                    <div className={styles["content-10"]}>
                      <div className={styles["div-161"]}>
                        <div className={styles["div-6"]}>
                          <div className={styles["div-162"] + " " + styles["rv-2"]} data-reveal>
                                  <HighlighterTag3 locale={locale} slots={["Our Mission"]} />
                          </div>
                        </div>
                        <div className={styles["line-5"]} />
                      </div>
                      <div className={styles["top-9"]}>
                        <div className={styles["div-6"]}>
                          <div className={styles["text-20"] + " " + styles["rv-2"]} data-reveal>
                            <h1 className={styles["h1-4"]}>{t(slots[77] ?? "Where banking expertise meets seamless business growth", locale)}</h1>
                          </div>
                        </div>
                        <div className={styles["text-21"] + " " + styles["rv-2"]} data-reveal>
                          <p className={styles["p-111"]}>{t(slots[78] ?? "We help entrepreneurs, business owners, and investors make confident financial decisions with clear guidance, trusted banking access, and end-to-end support across the UAE.", locale)}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["about-card"]}>
                      <div className={styles["div-6"]}>
                        <div className={styles["div-163"] + " " + styles["rv-2"]} data-reveal>
                          <AboutCard locale={locale} slots={["01","https://framerusercontent.com/images/Pu42ZDcgAO7dzjpUJhRPHq4lavA.webp?scale-down-to=512&width=1350&height=1250","Start with confidence","From company setup to the right business structure, we help you build a strong, compliant foundation that keeps your next steps clear."]} />
                        </div>
                      </div>
                      <div className={styles["div-6"]}>
                        <div className={styles["div-164"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "79ms" }}>
                          <AboutCard2 locale={locale} slots={["02","https://framerusercontent.com/images/6tLOXW5RyH3slWvkXJmPITexCR4.webp?scale-down-to=512&width=1350&height=1250","Bank with clarity","We match your profile with suitable UAE banks, prepare your documents, and guide you through account opening, loans, and financial approvals."]} />
                        </div>
                      </div>
                      <div className={styles["div-6"]}>
                        <div className={styles["div-164"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "183ms" }}>
                          <AboutCard2 locale={locale} slots={["03","https://framerusercontent.com/images/HSIJ8kUc149TMXFFk4DETPt0.webp?scale-down-to=512&width=1350&height=1250","Grow with Confidence","From funding and expansion to digital growth, we deliver practical solutions that help your business move forward."]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["image-12"]}>
                <div className={styles["bg-imge-2"] + " " + styles["rv-12"]} data-reveal style={{ transitionDelay: "548ms" }}>
                  <div className={styles["div-165"]}>
                    <img className={styles["img-33"]} src={slots[79] ?? "https://framerusercontent.com/images/1tjV4YDZ5ZvNajNJxYlb8Cz0s1w.webp?scale-down-to=2048&width=4096&height=4096"} alt="" />
                  </div>
                  <div className={styles["div-166"]} />
                </div>
              </section>
              <section className={styles["team"]}>
                <div className={styles["image-13"]}>
                  <div className={styles["div-167"]}>
                    <img className={styles["img-34"]} src={slots[80] ?? "https://framerusercontent.com/images/2xLG0apeoWcgNL8Rn9zNBAqmQk.png?scale-down-to=1024&width=3810&height=2719"} alt="" />
                  </div>
                </div>
                <div className={styles["div-168"]}>
                  <div className={styles["div-169"]}>
                    <div className={styles["div-170"]}>
                      <div className={styles["div-6"]}>
                        <div className={styles["div-171"] + " " + styles["rv-2"]} data-reveal>
                          <HighlighterTag32 locale={locale} slots={["Why Us"]} />
                        </div>
                      </div>
                      <div className={styles["line-6"]} />
                    </div>
                    <div className={styles["div-6"]}>
                      <div className={styles["div-172"]}>
                        <h2 className={styles["h2-8"]}>
                          {t(slots[81] ?? "UAE business and banking experts", locale)}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className={styles["container-15"]}>
                    <div className={styles["left-3"] + " " + styles["rv-2"]} data-reveal>
                      <section className={styles["image-with-content"]}>
                        <div className={styles["content-11"]}>
                          <div className={styles["title-2"]}>
                            <div className={styles["div-6"]}>
                              <div className={styles["div-173"] + " " + styles["rv-2"]} data-reveal>
                                <HighlighterTag33 locale={locale} slots={["Why Clients Choose Us"]} />
                              </div>
                            </div>
                            <div className={styles["heading-5"]}>
                              <div className={styles["heading-6"]}>
                                <h2 className={styles["h2-9"]}>{t(slots[82] ?? "3K+ clients trust Al Aidy Group", locale)}</h2>
                              </div>
                            </div>
                          </div>
                          <div className={styles["container-16"]}>
                            <div className={styles["content-12"]}>
                                    <p className={styles["p-112"]}>{t(slots[83] ?? "We help entrepreneurs, business owners, and investors make confident financial decisions with clear guidance from start to finish.", locale)}</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles["div-6"]}>
                          <div className={styles["image-14"]}>
                            <div className={styles["div-174"]}>
                              <img className={styles["img-35"]} src={slots[84] ?? "https://framerusercontent.com/images/P23pjMDDz2p2wESUjD97r3yG1dg.webp?scale-down-to=1024&lossless=1&width=853&height=1280"} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className={styles["overlay-3"]} />
                      </section>
                    </div>
                    <div className={styles["div-6"]}>
                      <div className={styles["right-2"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "180ms" }}>
                        <div className={styles["stats-and-facts"]}>
                          <div className={styles["top-card"]}>
                            <div className={styles["div-6"]}>
                              <div className={styles["div-175"]}>
                                <StatsCard locale={locale} slots={["16+ Years\nExpertise","We prepare every client profile correctly, based on real UAE banking requirements."]} />
                              </div>
                            </div>
                            <div className={styles["div-6"]}>
                              <div className={styles["div-175"]}>
                                <StatsCard locale={locale} slots={["18+ UAE Banks\nNetwork","We compare options across our network of UAE banks to find the right fit for your profile, faster."]} />
                              </div>
                            </div>
                          </div>
                          <div className={styles["bottom-card"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "564ms" }}>
                            <div className={styles["div-6"]}>
                              <div className={styles["div-176"]}>
                                <StatsCard2 locale={locale} slots={["500M+ AED\nTransactions","Over AED 500 million in financing and banking solutions supported for our clients."]} />
                              </div>
                            </div>
                            <div className={styles["div-6"]}>
                              <div className={styles["div-176"]}>
                                <StatsCard2 locale={locale} slots={["Full Support\nEnd-to-End","From the first consultation to final approval, we stay with you at every step."]} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                          <h2 className={styles["h2-10"]}>
                            {locale === "ar" ? (
                              <span className={styles["span-76"]} dir="rtl">
                                {t("Questions Answered", locale)}
                              </span>
                            ) : (
                              <>
                                <span className={styles["span-76"]}>{t(slots[85] ?? "Your", locale)}</span>
                                {t("Question Answered", locale)}
                              </>
                            )}
                          </h2>
                        </div>
                        <div className={styles["section-description-3"]}>
                          <p className={styles["p-113"]}>{t(slots[86] ?? "Have questions about Salesflow? Here are some of the most common queries to help you get started.", locale)}</p>
                        </div>
                      </div>
                      <div className={styles["help-cta-2"]}>
                        <div className={styles["cta-heading"]}>
                          <h4 className={styles["h4-5"]}>{t(slots[87] ?? "Need More Help?", locale)}</h4>
                        </div>
                        <div className={styles["call-to-action-2"]}>
                          <div className={styles["cta-text-2"]}>
                            <p className={styles["p-114"]}>{t(slots[88] ?? "Have questions about business setup, banking, funding, or investment in the UAE? Here are the most common questions to help you get started.", locale)}</p>
                          </div>
                          <div className={styles["cta-button-2"] + " " + styles["rv-9"]} data-reveal style={{ transitionDelay: "206ms" }}>
                            <Button2 locale={locale} slots={["Get Consultation"]} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-130"]}>
                      <FAQs locale={locale} slots={["What services does Al Aidy Group offer?","We support entrepreneurs and business owners with business setup, corporate bank account opening, SME financing, mortgage consultancy, credit card advisory, website development, and social media growth.","Can you help me set up a company in the UAE?","Yes. We guide you through choosing the right structure, preparing documents, issuing the trade license, arranging office or visa requirements, and preparing your company for banking.","Do you help with opening business bank accounts?","Yes. We work with a network of 18 UAE banks and help match your business profile with the most suitable bank to reduce delays and improve approval chances.","Can Al Aidy Group help if my bank application was rejected?","Yes. We review the reason behind the rejection, improve your file, and identify another bank that may be more suitable for your business type and profile.","Do you offer business loans for SMEs?","Yes. We help businesses access different financing options, including business term loans, overdraft facilities, trade finance, and equipment financing through our banking network.","How much does the consultation cost?","Your initial consultation is free. We review your needs, understand your situation, and guide you toward the right solution before starting the process."]} />
                    </div>
                  </div>
                </section>
              </div>
            </main>
          </div>
          <div className={styles["div-16"]} />
          <div className={styles["div-131"]} />
          <div className={styles["div-6"]}>
            <div className={styles["div-132"]}>
              <div className={styles["div-6"]}>
                <SiteTicker locale={locale} />
                <Footer4 locale={locale} slots={["https://framerusercontent.com/images/nuF5MBQa5OHhR97TinwZmRWx23s.webp?width=1344&height=1170","Ready to Take the Next Step?","Book a Free Consultation","https://framerusercontent.com/images/f2noCmvFpCpDTUk11PGBQjkxAY.png?scale-down-to=512&width=3448&height=3076","Your trusted partner for business, banking, finance, mortgages, and digital growth across the UAE.","Main Pages","Home","About","Services","Free Consultation","Contact Us","Services","Business Setup","Business Banking Support","Business Finance Support","Mortgage Solutions","Personal Loans","Credit Card Solutions","Digital Growth","Social Media","All banking and financial products are subject to the eligibility criteria, terms, and final approval of the respective bank. Al Aidy Group does not guarantee approval.","Privacy Policy","© 2026 Al Aidy Group. All rights reserved.","Terms of Use"]} />
              </div>
            </div>
          </div>
          <div className={styles["lenis-smooth-scroll-2"]} />
          <div className={styles["div-6"]}>
            <div className={styles["div-177"]}>
              <Navigation locale={locale} slots={["https://framerusercontent.com/images/f2noCmvFpCpDTUk11PGBQjkxAY.png?scale-down-to=512&width=3448&height=3076","Home","About","Our Process","Services","free-consultation","https://framerusercontent.com/images/IqSszVDWzGQQfswY7G1XpuEJ8g.svg?width=14&height=19","Contact Us"]} />
            </div>
          </div>
        </div>
        <Template2 locale={locale} slots={[]} />
      </div>
      <div className={styles["div-134"]} aria-hidden="true" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", contain: "strict", pointerEvents: "none" }}>
        <SvgGraphic className={styles["svg-8"]} html={t("<svg viewBox=\"0 0 31 30\" id=\"svg11145595216\" data-f2c-idx=\"751\"><path d=\"M 14.031 19.808 L 14.031 4.746 L 16.969 4.746 L 16.969 19.808 L 24.033 12.972 L 26.096 15 L 15.5 25.254 L 4.904 15 L 6.967 12.972 Z\" fill=\"var(--token-fe9d93ed-b3f8-4dd5-a542-7dee2ff95478, rgb(249, 249, 249))\" data-f2c-idx=\"752\"></path></svg>", locale)} />
        <SvgGraphic className={styles["svg-5"]} html={t("<svg id=\"1235104226\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"753\"><path d=\"M 8 8 L 12 4 M 12 4 L 8 0 M 12 4 L 0 4\" fill=\"transparent\" height=\"8px\" id=\"JgTGlz8TK\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--b8xnka, 2)\" stroke=\"var(--4i27ky, rgb(0, 0, 0))\" transform=\"translate(6 8)\" width=\"12px\" data-f2c-idx=\"754\"></path></svg>", locale)} />
      </div>
      
      <div className={styles["iframe"]} />
    </>
  )
}
