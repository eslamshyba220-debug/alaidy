"use client"

import { useEffect, useRef, useState } from "react"
import { t, type Locale } from "../_lib/i18n"
import styles from "./styles.module.css"
import LanguageToggle from "./LanguageToggle"

export default function Navigation({ slots = [] , locale = "en" }: { slots?: string[] ; locale?: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hiddenOnScroll, setHiddenOnScroll] = useState(false)
  const previousScrollY = useRef(0)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    previousScrollY.current = window.scrollY
    let frame = 0

    const updateVisibility = () => {
      frame = 0
      const currentScrollY = window.scrollY
      if (currentScrollY <= 24) {
        setHiddenOnScroll(false)
      } else if (currentScrollY > previousScrollY.current + 4) {
        setHiddenOnScroll(true)
      } else if (currentScrollY < previousScrollY.current - 4) {
        setHiddenOnScroll(false)
      }
      previousScrollY.current = currentScrollY
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateVisibility)
    }
    const onResize = () => {
      previousScrollY.current = window.scrollY
      setHiddenOnScroll(false)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
      <header
        className={`${styles["desktop-2"]} ${hiddenOnScroll ? styles["desktop-2-hidden"] : ""}`}
        aria-hidden={hiddenOnScroll}
        inert={hiddenOnScroll}
      >
        <div className={styles["container-full"]}>
          <div className={styles["left"]}>
            <div className={styles["left-2"]}>
              <a className={styles["image-1-2"]} href="/">
                <div className={styles["div-24"]}>
                  <img className={styles["img-6"]} src={slots[0] ?? "https://framerusercontent.com/images/f2noCmvFpCpDTUk11PGBQjkxAY.png?scale-down-to=512&width=3448&height=3076"} alt="" />
                </div>
              </a>
            </div>
            <nav
              id="mobile-navigation"
              aria-label={locale === "ar" ? "القائمة الرئيسية" : "Main navigation"}
              className={`${styles["middle"]} ${menuOpen ? styles["middle-open"] : ""}`}
            >
              <div className={styles["div-25"]}>
                <div className={styles["div-26"]}>
                  <div className={styles["p-50"]}>
                    <a className={styles["a-3"]} href="/" onClick={closeMenu}>{t(slots[1] ?? "Home", locale)}</a>
                  </div>
                </div>
                <div className={styles["div-27"]}>
                  <div className={styles["p-51"]}>
                    <a className={styles["a-3"]} href="/about" onClick={closeMenu}>{t(slots[2] ?? "About", locale)}</a>
                  </div>
                </div>
                <div className={styles["div-28"]}>
                  <div className={styles["p-52"]}>
                    <a className={styles["a-3"]} href="/#process-sections" onClick={closeMenu}>{t(slots[3] ?? "Our Process", locale)}</a>
                  </div>
                </div>
                <div className={styles["div-29"]}>
                  <div className={styles["p-53"]}>
                    <a className={styles["a-3"]} href="/#solution" onClick={closeMenu}>{t(slots[4] ?? "Services", locale)}</a>
                  </div>
                </div>
                <div className={styles["div-30"]}>
                  <div className={styles["p-54"]}>
                    <a className={styles["a-3"]} href="/free-consultation" onClick={closeMenu}>{t("Free Consultation", locale)}</a>
                  </div>
                </div>
                <a className={`${styles["a-3"]} ${styles["mobile-contact-link"]}`} href="/contact" onClick={closeMenu}>
                  {t(slots[7] ?? "Contact us", locale)}
                </a>
              </div>
            </nav>
            <LanguageToggle locale={locale} />
            <button
              className={styles["mobile-menu-button"]}
              type="button"
              aria-label={menuOpen
                ? (locale === "ar" ? "إغلاق القائمة" : "Close menu")
                : (locale === "ar" ? "فتح القائمة" : "Open menu")}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(open => !open)}
            >
              <span />
              <span />
              <span />
            </button>
            <div className={styles["shape"]}>
              <div className={styles["div-31"]}>
                <div className={styles["div-32"]}>
                  <img className={styles["img-7"]} src={slots[6] ?? "https://framerusercontent.com/images/IqSszVDWzGQQfswY7G1XpuEJ8g.svg?width=14&height=19"} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["right"]}>
            <div className={styles["div-33"]}>
              <a className={styles["default-2"]} href="/contact">
                <div className={styles["div-34"]}>
                  <p className={styles["p-55"]}>{t(slots[7] ?? "Contact us", locale)}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles["overlay"]} />
      </header>
  )
}
