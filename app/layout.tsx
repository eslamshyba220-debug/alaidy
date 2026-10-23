import type { ReactNode } from "react"
import "./globals.css"
import { getLocale } from "./_lib/locale"
import ScrollEffects from "./_components/ScrollEffects"

export const metadata = { title: "Al Aidy Group | Business, Banking & Finance Support UAE" }

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale()
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>{children}<ScrollEffects /></body>
    </html>
  )
}
