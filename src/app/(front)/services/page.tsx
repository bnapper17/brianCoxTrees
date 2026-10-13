import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import CtaBanner from "@/components/CtaBanner"
import QuoteButtons from "@/components/QuoteButtons"
import TrustList from "@/components/TrustList"
import { services } from "@/lib/services"
import { site } from "@/lib/site"

const title = "Tree Services in Southern Indiana"
const description =
    "Storm damage cleanup, tree trimming, tree removal and stump grinding across Southern Indiana from B.C. Trees in English, IN. Fully insured with free estimates."

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/services" },
    openGraph: {
        type: "website",
        siteName: "B.C. Trees",
        locale: "en_US",
        url: "/services",
        title: `${title} | B.C. Trees`,
        description,
        images: [{ url: "/images/storm_damage.jpeg", alt: "Storm damage cleanup by B.C. Trees" }],
    },
}

export default function Services() {
    return (
        <>
            {/* Page header */}
            <section className="bg-one text-white">
                <div className="mx-auto max-w-6xl space-y-5 px-6 py-12 md:py-16">
                    <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
                    <h1 className="max-w-3xl text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
                    <p className="max-w-2xl text-lg md:text-xl text-white/90">
                        From emergency storm cleanup to a single stump, B.C. Trees handles it all with a fully
                        insured crew based in {site.city}, {site.state}. Every estimate is free.
                    </p>
                    <QuoteButtons className="pt-2" />
                </div>
            </section>

            {/* One row per service, alternating sides on desktop */}
            <section className="bg-dark-back">
                <div className="mx-auto max-w-6xl space-y-8 px-6 py-14 md:space-y-12 md:py-20">
                    {services.map((service, i) => (
                        <article
                            key={service.slug}
                            className="grid overflow-hidden rounded-lg bg-back shadow-md shadow-gray-700/30 md:grid-cols-5"
                        >
                            <div className={`relative aspect-4/3 md:col-span-2 md:aspect-auto md:min-h-80 ${i % 2 ? "md:order-last" : ""}`}>
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    fill
                                    placeholder="blur"
                                    sizes="(max-width: 767px) 100vw, 440px"
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-4 p-6 md:col-span-3 md:p-10">
                                <h2 className="text-2xl md:text-3xl font-bold text-two">{service.title}</h2>
                                <p className="text-lg leading-relaxed text-foreground/85">{service.intro}</p>
                                <ul className="grid gap-2 sm:grid-cols-2">
                                    {service.included.slice(0, 4).map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-foreground/85">
                                            <CheckIcon size={18} className="mt-0.5 shrink-0 text-one" aria-hidden="true" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="mt-auto inline-flex w-fit items-center gap-2 pt-2 font-semibold text-two hover:underline"
                                >
                                    More about {service.title.toLowerCase()} <ArrowRightIcon size={18} aria-hidden="true" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Why us */}
            <section className="bg-back">
                <div className="mx-auto max-w-6xl space-y-8 px-6 py-14 md:py-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-two">Why B.C. Trees</h2>
                    <TrustList className="sm:grid-cols-2" />
                </div>
            </section>

            <CtaBanner />
        </>
    )
}
