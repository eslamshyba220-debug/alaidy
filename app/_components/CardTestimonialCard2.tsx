import type { Locale } from "../_lib/i18n"
import CardTestimonialCard from "./CardTestimonialCard"

export default function CardTestimonialCard2({ slots = [], locale = "en" }: { slots?: string[]; locale?: Locale }) {
  return <CardTestimonialCard slots={slots} locale={locale} />
}
