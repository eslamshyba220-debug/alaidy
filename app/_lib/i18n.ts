import arabic from "./ar.json"

export type Locale = "en" | "ar"

const messages: Record<string, string> = {
  ...arabic,
  "One Partner for Business, Banking, Finance & Property": "شريك واحد للأعمال والخدمات المصرفية والتمويل والعقارات",
  "Three clear steps to help you understand your options and prepare your application.": "ثلاث خطوات واضحة لفهم خياراتك وتجهيز طلبك.",
  "Practical support for individuals, entrepreneurs, and established businesses across the UAE.": "دعم عملي للأفراد ورواد الأعمال والشركات القائمة في جميع أنحاء الإمارات.",
  "Al Aidy Group": "مجموعة العايدي",
  "About Al Aidy®": "عن مجموعة العايدي®",
  "Question": "نجيب عنها",
  "Answered": "بوضوح",
  "Facebook": "فيسبوك",
  "Instagram": "إنستغرام",
  "TikTok": "تيك توك",
  "Find the Right Financial Solution for Your Next Step": "اعثر على الحل المالي المناسب لخطوتك التالية",
  "Complete the form and our advisors will review your profile, understand your needs, and guide you toward the most suitable solution.": "أكمل النموذج ليراجع مستشارونا ملفك ويفهموا احتياجاتك ويرشدوك إلى الحل الأنسب.",
  "Choosing the right financial solution starts with the right guidance — we review your profile and help you move forward clearly.": "اختيار الحل المالي المناسب يبدأ بالإرشاد الصحيح. نراجع ملفك ونساعدك على التقدم بوضوح.",
  "Name": "الاسم",
  "Phone Number": "رقم الهاتف",
  "Email": "البريد الإلكتروني",
  "Job Title": "المسمى الوظيفي",
  "Company Name": "اسم الشركة",
  "Residency Status": "حالة الإقامة",
  "Monthly Salary Range": "نطاق الراتب الشهري",
  "Financing Requirement": "الاحتياج التمويلي",
  "Message": "الرسالة",
  "Message / Notes": "الرسالة / الملاحظات",
  "Enter your current job title": "أدخل مسماك الوظيفي الحالي",
  "Enter your company name": "أدخل اسم شركتك",
  "Tell us more about your request": "أخبرنا بالمزيد عن طلبك",
  "Select…": "اختر…",
  "Select the service you need": "اختر الخدمة التي تحتاجها",
  "UAE National": "مواطن إماراتي",
  "UAE Resident / Expat": "مقيم في الإمارات / وافد",
  "Non-Resident Client": "عميل غير مقيم",
  "Below AED 8,000": "أقل من 8,000 درهم",
  "AED 8,000 – AED 15,000": "من 8,000 إلى 15,000 درهم",
  "AED 15,001 – AED 25,000": "من 15,001 إلى 25,000 درهم",
  "AED 25,001 – AED 40,000": "من 25,001 إلى 40,000 درهم",
  "Above AED 40,000": "أكثر من 40,000 درهم",
  "Personal Finance": "التمويل الشخصي",
  "Mortgage Finance / Home Loan": "تمويل عقاري / قرض سكني",
  "Other Financial Solution": "حل مالي آخر",
  "Our consultation and assistance services are completely free of charge. No service fees, hidden charges, or upfront payments are required.": "خدمات الاستشارة والمساعدة لدينا مجانية بالكامل. لا توجد رسوم خدمة أو رسوم خفية أو دفعات مقدمة.",
  "Submit": "إرسال",
  "New free consultation request": "طلب استشارة مجانية جديد",
  "Please enter a valid phone number.": "يرجى إدخال رقم هاتف صحيح.",
}

export function t(text: string, locale: Locale = "en"): string {
  if (locale !== "ar") return text
  if (text.startsWith("One Group. Integrated Business and Financial Support.")) {
    return "مجموعة واحدة. دعم متكامل للأعمال والتمويل.\n\nمن مقرنا في دبي، وبخبرة مصرفية مشتركة تتجاوز 16 عامًا وشبكة تشمل 18 بنكًا في الإمارات، ندعم الأفراد والشركات في الخدمات المصرفية والتمويل والتمويل العقاري وخدمات الأعمال والنمو الرقمي."
  }
  return messages[text] ?? text
}
