import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service, sizes }: { service: Service; sizes: string }) {
    return (
        <Link
            href={`/services/${service.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-lg bg-back shadow-md shadow-gray-700/30 transition-shadow hover:shadow-xl focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-two"
        >
            <div className="relative aspect-4/3 overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    placeholder="blur"
                    sizes={sizes}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-xl font-bold text-two">{service.title}</h3>
                <p className="text-foreground/80">{service.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-semibold text-two group-hover:underline">
                    Learn more <ArrowRightIcon size={16} aria-hidden="true" />
                </span>
            </div>
        </Link>
    );
}
