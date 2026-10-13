import { permanentRedirect } from "next/navigation"

// Quote requests are handled by SingleOps.
export default function EstimatePage() {
    permanentRedirect('https://app.singleops.com/accounts/BCTrees/portal')
}
