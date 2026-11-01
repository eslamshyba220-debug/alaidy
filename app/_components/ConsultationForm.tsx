"use client"

import { useState } from "react"
import { t, type Locale } from "../_lib/i18n"
import { buildConsultationUrl, consultationOptions } from "../_lib/consultation"
import styles from "./styles.module.css"

export default function ConsultationForm({ locale }: { locale: Locale }) {
  const [whatsAppUrl, setWhatsAppUrl] = useState("")
  const [popupBlocked, setPopupBlocked] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const inputs = [
    { name: "Name", type: "text", placeholder: "Full name", required: true, autoComplete: "name" },
    { name: "Phone Number", type: "tel", placeholder: "+971 50 123 4567", required: true, autoComplete: "tel", inputMode: "tel" as const },
    { name: "Email", type: "email", placeholder: "name@example.com", required: true, autoComplete: "email" },
    { name: "Job Title", type: "text", placeholder: "Enter your current job title", autoComplete: "organization-title" },
    { name: "Company Name", type: "text", placeholder: "Enter your company name", autoComplete: "organization" },
  ]
  return (
    <form className={styles["consultation-form"]} noValidate onSubmit={event => {
      event.preventDefault()
      const form = event.currentTarget
      const nextErrors: Record<string, string> = {}
      const controls = Array.from(form.elements).filter((control): control is HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement =>
        control instanceof HTMLInputElement || control instanceof HTMLSelectElement || control instanceof HTMLTextAreaElement,
      )
      for (const control of controls) {
        const value = control.value.trim()
        if (control.required && !value) {
          nextErrors[control.name] = t("This field is required", locale)
        } else if (control.name === "Email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          nextErrors[control.name] = t("Please enter a valid email address", locale)
        } else if (control.name === "Phone Number" && !/^(?:\+971|00971|0)(?:2|3|4|6|7|9|50|52|54|55|56|58)[\s().-]*\d{3}[\s.-]*\d{4}$/.test(value)) {
          nextErrors[control.name] = t("Please enter a valid UAE phone number", locale)
        }
      }
      setErrors(nextErrors)
      const firstInvalid = controls.find(control => nextErrors[control.name])
      if (firstInvalid) {
        firstInvalid.focus({ preventScroll: true })
        firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" })
        return
      }
      const values = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
      const url = buildConsultationUrl(values, locale)
      setWhatsAppUrl(url)
      const whatsAppWindow = window.open(url, "_blank")
      if (whatsAppWindow) {
        whatsAppWindow.opener = null
        setPopupBlocked(false)
      } else {
        setPopupBlocked(true)
      }
    }}>
      {inputs.map(input => (
        <label key={input.name} className={styles["consultation-field"]}>
          <span>{t(input.name, locale)}</span>
          <input
            {...input}
            id={`consultation-${input.name.replace(/ /g, "-")}`}
            dir={input.type === "email" || input.type === "tel" ? "ltr" : undefined}
            placeholder={t(input.placeholder, locale)}
            maxLength={input.type === "tel" ? 24 : 160}
            aria-invalid={Boolean(errors[input.name])}
            aria-describedby={errors[input.name] ? `error-${input.name.replace(/ /g, "-")}` : undefined}
          />
          {errors[input.name] && <span id={`error-${input.name.replace(/ /g, "-")}`} className={styles["consultation-field-error"]} role="alert">{errors[input.name]}</span>}
        </label>
      ))}
      {Object.entries(consultationOptions).map(([name, options]) => (
        <label key={name} className={styles["consultation-field"]}>
          <span>{t(name, locale)}</span>
          <select name={name} required defaultValue="" aria-invalid={Boolean(errors[name])}
            aria-describedby={errors[name] ? `error-${name.replace(/ /g, "-")}` : undefined}>
            <option value="" disabled>{t(name === "Financing Requirement" ? "Select the service you need" : "Select…", locale)}</option>
            {options.map(option => <option key={option} value={option}>{t(option, locale)}</option>)}
          </select>
          {errors[name] && <span id={`error-${name.replace(/ /g, "-")}`} className={styles["consultation-field-error"]} role="alert">{errors[name]}</span>}
        </label>
      ))}
      <label className={styles["consultation-field"]}>
        <span>{t("Message", locale)}</span>
        <textarea name="Message / Notes" placeholder={t("Tell us more about your request", locale)} rows={5} maxLength={3000} />
      </label>
      <p className={styles["consultation-notice"]}>{t("Our consultation and assistance services are completely free of charge. No service fees, hidden charges, or upfront payments are required.", locale)}</p>
      <button className={styles["consultation-submit"]} type="submit">{t("Submit", locale)}</button>
      {whatsAppUrl && (
        <div className={styles["consultation-submit-feedback"]} role="status" aria-live="polite">
          <p>
            {popupBlocked
              ? (locale === "ar" ? "لم يفتح واتساب تلقائيًا. اضغط على الرابط لإكمال طلبك." : "WhatsApp did not open automatically. Use the link to continue.")
              : (locale === "ar" ? "تم تجهيز طلبك. أكمل الإرسال في واتساب." : "Your request is ready. Complete sending it in WhatsApp.")}
          </p>
          <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
            {locale === "ar" ? "فتح واتساب وإرسال الطلب" : "Open WhatsApp to send your request"}
          </a>
        </div>
      )}
    </form>
  )
}
