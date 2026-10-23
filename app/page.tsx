import Page from "./_components/Home3"
import { getLocale } from "./_lib/locale"

export default async function Route() {
  return <Page locale={await getLocale()} />
}
