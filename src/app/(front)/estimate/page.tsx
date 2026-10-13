import { permanentRedirect } from "next/navigation"
import { site } from "@/lib/site"

// Quote requests are handled by SingleOps.
export default function EstimatePage() {
    permanentRedirect(site.quoteUrl)
}
