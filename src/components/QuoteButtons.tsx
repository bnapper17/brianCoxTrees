import { PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const base = "h-12 px-6 text-base font-semibold";

// "Get a Free Quote" + "Call" pair, for use on dark backgrounds.
export default function QuoteButtons({ className }: { className?: string }) {
    return (
        <div className={cn("flex flex-col sm:flex-row gap-3", className)}>
            <Button asChild className={cn(base, "bg-two text-white hover:bg-two/85")}>
                <a href={site.quoteUrl}>Get a Free Quote</a>
            </Button>
            <Button asChild variant="outline" className={cn(base, "bg-transparent text-white border-white/80 hover:bg-white hover:text-two")}>
                <a href={site.phoneHref}>
                    <PhoneIcon aria-hidden="true" />
                    Call {site.phone}
                </a>
            </Button>
        </div>
    );
}
