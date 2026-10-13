import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import QuoteButtons from "@/components/QuoteButtons";
import ServiceCard from "@/components/ServiceCard";
import TrustList from "@/components/TrustList";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import splash from "../../../public/images/splash_cropped.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* Largest element on the page: preload it and blur in while it loads */}
        <Image
          src={splash}
          alt="B.C. Trees crew removing a large tree trunk with a grapple saw truck"
          fill
          priority
          placeholder="blur"
          // portrait phones crop the landscape photo, so it renders much wider than the screen
          sizes="(max-width: 767px) 200vw, 100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/85 via-black/45 to-black/10 md:bg-linear-to-r md:from-black/80 md:via-black/45 md:to-black/0" />
        <div className="mx-auto flex min-h-[75svh] max-w-6xl flex-col justify-end gap-5 px-6 py-12 md:min-h-[620px] md:justify-center md:py-20">
          <Image
            src="/images/company_tagline.png"
            height={56}
            width={560}
            alt="Whatever it takes"
            className="w-56 md:w-80 rounded-md bg-background/80 p-1"
          />
          <h1 className="max-w-2xl text-4xl md:text-6xl font-bold leading-tight text-white">
            Tree Service for Southern Indiana
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-white/90">
            Storm cleanup, tree removal, trimming and stump grinding from a fully insured crew based in {site.city}, {site.state}.
          </p>
          <QuoteButtons className="pt-2" />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-back text-two">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-5 md:py-20">
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Whatever it takes, done right</h2>
            <p className="text-lg leading-relaxed text-foreground/85">
              B.C. Trees is a Christian owned and operated tree service based in {site.city}, {site.state}.
              We&apos;re fully insured and equipped to handle everything from routine trimming to emergency
              storm cleanup across {site.serviceArea}, and every estimate is free.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85">
              Whether it&apos;s one dead tree near the house or a yard full of storm damage, we&apos;ll get
              the job done safely and leave your property clean.
            </p>
          </div>
          <TrustList className="md:col-span-2 content-center border-t-2 border-one/30 pt-8 md:border-t-0 md:border-l-2 md:pt-0 md:pl-10" />
        </div>
      </section>

      {/* Services */}
      <section className="bg-dark-back">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-two">Our Services</h2>
            <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-two hover:underline">
              View all services <ArrowRightIcon size={18} aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 280px" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
