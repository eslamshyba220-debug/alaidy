"use client"

import { t, type Locale } from "../_lib/i18n"
import { buildConsultationUrl, consultationOptions } from "../_lib/consultation"
import styles from "./styles.module.css"

export default function ConsultationForm({ locale }: { locale: Locale }) {
  const inputs = [
    { name: "Name", type: "text", placeholder: "John Carter", required: true, autoComplete: "name" },
    { name: "Phone Number", type: "tel", placeholder: "+1 (555) 234-5678", required: true, autoComplete: "tel" },
    { name: "Email", type: "email", placeholder: "jane@framer.com", required: true, autoComplete: "email" },
    { name: "Job Title", type: "text", placeholder: "Enter your current job title", autoComplete: "organization-title" },
    { name: "Company Name", type: "text", placeholder: "Enter your company name", autoComplete: "organization" },
  ]
  return (
    <form className={styles["consultation-form"]} onSubmit={event => {
      event.preventDefault()
      const form = event.currentTarget
      if (!form.reportValidity()) return
      const values = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
      window.location.assign(buildConsultationUrl(values, locale))
    }}>
      {inputs.map(input => (
        <label key={input.name} className={styles["consultation-field"]}>
          <span>{t(input.name, locale)}</span>
          <input {...input} dir={input.type === "email" || input.type === "tel" ? "ltr" : undefined}
            placeholder={locale === "ar" && input.name === "Name" ? "الاسم الكامل" : t(input.placeholder, locale)}
            minLength={input.type === "tel" ? 7 : undefined} maxLength={input.type === "tel" ? 24 : 160}
            pattern={input.type === "tel" ? "[+0-9() .\\-]{7,24}" : undefined} />
        </label>
      ))}
      {Object.entries(consultationOptions).map(([name, options]) => (
        <label key={name} className={styles["consultation-field"]}>
          <span>{t(name, locale)}</span>
          <select name={name} required defaultValue="">
            <option value="" disabled>{t(name === "Financing Requirement" ? "Select the service you need" : "Select…", locale)}</option>
            {options.map(option => <option key={option} value={option}>{t(option, locale)}</option>)}
          </select>
        </label>
      ))}
      <label className={styles["consultation-field"]}>
        <span>{t("Message", locale)}</span>
        <textarea name="Message / Notes" placeholder={t("Tell us more about your request", locale)} rows={5} maxLength={3000} />
      </label>
      <p className={styles["consultation-notice"]}>{t("Our consultation and assistance services are completely free of charge. No service fees, hidden charges, or upfront payments are required.", locale)}</p>
      <button className={styles["consultation-submit"]} type="submit">{t("Submit", locale)}</button>
    </form>
  )
}
