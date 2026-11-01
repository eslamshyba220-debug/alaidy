"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { t, type Locale } from "../_lib/i18n"
import { formatWhatsAppNumber, WHATSAPP_NUMBER } from "../_lib/consultation"
import styles from "./styles.module.css"
import LanguageToggle from "./LanguageToggle"

export default function Navigation({ slots = [], locale = "en" }: { slots?: string[]; locale?: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hiddenOnScroll, setHiddenOnScroll] = useState(false)
  const previousScrollY = useRef(0)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
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

  useEffect(() => {
    if (!menuOpen) return
    const bodyOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const menu = document.getElementById("mobile-navigation")
    const focusable = () => menu?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ) ?? []
    focusable()[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setMenuOpen(false)
        return
      }
      if (event.key !== "Tab") return
      const items = focusable()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = bodyOverflow
      document.removeEventListener("keydown", onKeyDown)
      menuButtonRef.current?.focus()
    }
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) setHiddenOnScroll(false)
  }, [menuOpen])

  return (
      <header
        className={`${styles["desktop-2"]} ${hiddenOnScroll ? styles["desktop-2-hidden"] : ""}`}
        aria-hidden={hiddenOnScroll && !menuOpen}
        inert={hiddenOnScroll && !menuOpen}
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
              <button className={styles["mobile-drawer-close"]} type="button" onClick={closeMenu}>
                {locale === "ar" ? "إغلاق القائمة" : "Close menu"}
              </button>
              <div className={styles["div-25"]}>
                <div className={styles["div-26"]}>
                  <div className={styles["p-50"]}>
                    <a className={styles["a-3"]} href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={closeMenu}>{t(slots[1] ?? "Home", locale)}</a>
                  </div>
                </div>
                <div className={styles["div-27"]}>
                  <div className={styles["p-51"]}>
                    <a className={styles["a-3"]} href="/about" aria-current={pathname === "/about" ? "page" : undefined} onClick={closeMenu}>{t(slots[2] ?? "About", locale)}</a>
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
                    <a className={styles["a-3"]} href="/free-consultation" aria-current={pathname === "/free-consultation" ? "page" : undefined} onClick={closeMenu}>{t("Free Consultation", locale)}</a>
                  </div>
                </div>
                <a className={`${styles["a-3"]} ${styles["mobile-contact-link"]}`} href="/free-consultation" onClick={closeMenu}>
                  {t(slots[7] ?? "Contact Us", locale)}
                </a>
                <LanguageToggle locale={locale} />
                <div className={styles["mobile-quick-links"]}>
                  <a href={`tel:+${WHATSAPP_NUMBER}`}>{formatWhatsAppNumber()}</a>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                    {locale === "ar" ? "واتساب" : "WhatsApp"}
                  </a>
                </div>
              </div>
            </nav>
            <div className={styles["desktop-language-toggle"]}><LanguageToggle locale={locale} /></div>
            <button
              ref={menuButtonRef}
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
              <a className={styles["default-2"]} href="/free-consultation">
                <div className={styles["div-34"]}>
                  <p className={styles["p-55"]}>{t(slots[7] ?? "Contact us", locale)}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`${styles["mobile-menu-overlay"]} ${menuOpen ? styles["mobile-menu-overlay-open"] : ""}`}
          onClick={closeMenu}
          aria-hidden="true"
        />
      </header>
  )
}
