import Image from "next/image";
import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
    return (
        <footer className="bg-back border-t-2 border-one text-two">
            {/* single centered column on phones, one row on desktop */}
            <div className="flex flex-col items-center gap-5 px-6 py-6 md:flex-row md:justify-evenly md:gap-8 md:px-20 md:pt-0 md:pb-4">
                <div className="relative w-32 md:w-2/12">
                    <Image
                        src="/images/logo.png"
                        height={480}
                        width={480}
                        alt="B.C. Trees logo"
                    />
                </div>
                <ul className="text-center md:text-left text-lg md:text-2xl font-semibold space-y-1 md:space-y-3">
                    <li>Christian Owned and Operated</li>
                    <li>Fully Insured</li>
                    <li>Free Estimates</li>
                </ul>
                <address className="w-fit not-italic font-semibold md:text-xl flex flex-col gap-1 border-t border-one/30 pt-5 md:border-0 md:pt-0">
                    <p className="flex items-start gap-3 py-1">
                        <MapPinIcon size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{site.city}, {site.state}<br/>Serving all of {site.serviceArea}</span>
                    </p>
                    <a href={site.phoneHref} className="flex items-center gap-3 py-1 hover:underline">
                        <PhoneIcon size={20} className="shrink-0" aria-hidden="true" />
                        {site.phone}
                    </a>
                    <a href={`mailto:${site.email}`} className="flex items-center gap-3 py-1 hover:underline break-all">
                        <MailIcon size={20} className="shrink-0" aria-hidden="true" />
                        {site.email}
                    </a>
                    <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-1 hover:underline">
                        <FacebookIcon size={20} className="shrink-0" aria-hidden="true" />
                        Follow us on Facebook
                    </a>
                </address>
            </div>
            <p className="border-t border-one/30 px-4 py-3 text-center text-xs md:text-sm">
                &copy; {new Date().getFullYear()} Ntouch Solutions. All rights reserved.
            </p>
        </footer>
    )
}
