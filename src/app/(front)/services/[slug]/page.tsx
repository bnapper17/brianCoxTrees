import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CheckIcon, ChevronDownIcon } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import CtaBanner from "@/components/CtaBanner"
import QuoteButtons from "@/components/QuoteButtons"
import ServiceCard from "@/components/ServiceCard"
import TrustList from "@/components/TrustList"
import { getService, services } from "@/lib/services"
import { site } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
    return services.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const service = getService((await params).slug)
    if (!service) return {}
    const path = `/services/${service.slug}`
    return {
        title: service.headline,
        description: service.intro,
        alternates: { canonical: path },
        openGraph: {
            type: "website",
            siteName: site.name,
            locale: "en_US",
            url: path,
            title: `${service.headline} | ${site.name}`,
            description: service.intro,
            images: [{ url: service.image.src, alt: service.alt }],
        },
    }
}

export default async function ServicePage({ params }: Props) {
    const service = getService((await params).slug)
    if (!service) notFound()

    const url = `${site.url}/services/${service.slug}`
    const otherServices = services.filter(({ slug }) => slug !== service.slug)

    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            serviceType: service.title,
            description: service.intro,
            url,
            provider: { "@id": `${site.url}/#business` },
            areaServed: { "@type": "AdministrativeArea", name: site.serviceArea },
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map(({ question, answer }) => ({
                "@type": "Question",
                name: question,
                acceptedAnswer: { "@type": "Answer", text: answer },
            })),
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: site.url },
                { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
                { "@type": "ListItem", position: 3, name: service.title, item: url },
            ],
        },
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Hero: text beside a framed photo (the service photos are too small to run full width) */}
            <section className="bg-one text-white">
                <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-5 md:py-16">
                    <div className="space-y-5 md:col-span-3">
                        <Breadcrumbs
                            crumbs={[
                                { label: "Home", href: "/" },
                                { label: "Services", href: "/services" },
                                { label: service.title },
                            ]}
                        />
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">{service.headline}</h1>
                        <p className="max-w-xl text-lg md:text-xl text-white/90">{service.intro}</p>
                        <QuoteButtons className="pt-2" />
                    </div>
                    <div className="relative aspect-4/3 overflow-hidden rounded-lg shadow-xl shadow-black/40 md:col-span-2 md:aspect-4/5">
                        <Image
                            src={service.image}
                            alt={service.alt}
                            fill
                            priority
                            placeholder="blur"
                            sizes="(max-width: 767px) 100vw, 440px"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Details */}
            <section className="bg-back">
                <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-5 md:py-20">
                    <div className="space-y-4 md:col-span-3">
                        <h2 className="text-3xl md:text-4xl font-bold text-two">How we help</h2>
                        {service.body.map((paragraph) => (
                            <p key={paragraph} className="text-lg leading-relaxed text-foreground/85">{paragraph}</p>
                        ))}
                        <TrustList className="pt-6 sm:grid-cols-2" />
                    </div>
                    <aside className="h-fit rounded-lg bg-dark-back/50 p-6 md:col-span-2 md:p-8">
                        <h2 className="mb-4 text-2xl font-bold text-two">What&apos;s included</h2>
                        <ul className="space-y-3">
                            {service.included.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-lg text-foreground/85">
                                    <CheckIcon size={20} className="mt-1 shrink-0 text-one" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-dark-back">
                <div className="mx-auto max-w-3xl space-y-8 px-6 py-14 md:py-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-two">Common questions</h2>
                    <div className="space-y-3">
                        {service.faqs.map(({ question, answer }) => (
                            <details key={question} className="group rounded-lg bg-back shadow-sm shadow-gray-700/20">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-semibold text-two [&::-webkit-details-marker]:hidden">
                                    {question}
                                    <ChevronDownIcon size={20} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                                </summary>
                                <p className="px-5 pb-5 leading-relaxed text-foreground/85">{answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other services */}
            <section className="bg-back">
                <div className="mx-auto max-w-6xl space-y-8 px-6 py-14 md:py-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-two">Other services</h2>
                    <ul className="grid gap-6 sm:grid-cols-3">
                        {otherServices.map((other) => (
                            <li key={other.slug}>
                                <ServiceCard service={other} sizes="(max-width: 639px) 100vw, 360px" />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <CtaBanner />
        </>
    )
}
