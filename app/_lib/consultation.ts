import { t, type Locale } from "./i18n"

// Company WhatsApp number supplied by the project owner.
export const COMPANY_WHATSAPP = "97142322774"

export const consultationFields = [
  "Name", "Phone Number", "Email", "Job Title", "Company Name",
  "Residency Status", "Monthly Salary Range", "Financing Requirement", "Message / Notes",
] as const

export const consultationOptions = {
  "Residency Status": ["UAE National", "UAE Resident / Expat", "Non-Resident Client"],
  "Monthly Salary Range": ["Below AED 8,000", "AED 8,000 – AED 15,000", "AED 15,001 – AED 25,000", "AED 25,001 – AED 40,000", "Above AED 40,000"],
  "Financing Requirement": ["Personal Finance", "Mortgage Finance / Home Loan", "Other Financial Solution"],
}

export function buildConsultationUrl(values: Record<string, string>, locale: Locale): string {
  const lines = [t("New free consultation request", locale), ""]
  for (const field of consultationFields) {
    const value = values[field]?.trim()
    if (value) lines.push(`${t(field, locale)}: ${t(value, locale)}`)
  }
  return `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`
}
