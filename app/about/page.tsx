import Page from "../_components/About"
import { getLocale } from "../_lib/locale"

export default async function Route() {
  return <Page locale={await getLocale()} />
}
