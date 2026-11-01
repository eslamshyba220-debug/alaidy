import type { ReactNode } from "react"
import "./globals.css"
import { getLocale } from "./_lib/locale"
import ScrollEffects from "./_components/ScrollEffects"
import MobileActions from "./_components/MobileActions"

const brandImage = "https://framerusercontent.com/images/f2noCmvFpCpDTUk11PGBQjkxAY.png?scale-down-to=512&width=3448&height=3076"

export async function generateMetadata() {
  const locale = await getLocale()
  const title = locale === "ar"
    ? "مجموعة الأيدي | حلول الأعمال والخدمات المصرفية والتمويل في الإمارات"
    : "Al Aidy Group | Business, Banking & Finance Support UAE"
  const description = locale === "ar"
    ? "مجموعة الأيدي في دبي: تأسيس الشركات، فتح الحسابات البنكية، تمويل الأعمال، القروض الشخصية، الرهن العقاري والبطاقات الائتمانية عبر أكثر من 18 بنكاً في الإمارات. احجز استشارتك المجانية."
    : "Al Aidy Group in Dubai supports business setup, bank account applications, business finance, personal loans, mortgages, and credit cards across 18+ UAE banks."

  return {
    title,
    description,
    openGraph: { title, description, images: [brandImage], type: "website" },
    icons: { icon: brandImage },
  }
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale()
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>{children}<ScrollEffects /><MobileActions locale={locale} /></body>
    </html>
  )
}
