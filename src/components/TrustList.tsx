import { ClipboardCheckIcon, HeartHandshakeIcon, MapPinIcon, ShieldCheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const trustPoints = [
    { icon: HeartHandshakeIcon, label: "Christian owned and operated" },
    { icon: ShieldCheckIcon, label: "Fully insured" },
    { icon: ClipboardCheckIcon, label: "Free estimates" },
    { icon: MapPinIcon, label: `Serving all of ${site.serviceArea}` },
];

export default function TrustList({ className }: { className?: string }) {
    return (
        <ul className={cn("grid gap-4 text-two", className)}>
            {trustPoints.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-4 text-lg font-semibold">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-one text-white">
                        <Icon size={22} aria-hidden="true" />
                    </span>
                    {label}
                </li>
            ))}
        </ul>
    );
}
