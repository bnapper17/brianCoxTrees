import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

export type Crumb = { label: string; href?: string };

// Last crumb is the current page and isn't linked.
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/80">
                {crumbs.map((crumb, i) => (
                    <li key={crumb.label} className="flex items-center gap-1.5">
                        {i > 0 && <ChevronRightIcon size={14} aria-hidden="true" />}
                        {crumb.href ? (
                            <Link href={crumb.href} className="hover:text-white hover:underline">{crumb.label}</Link>
                        ) : (
                            <span aria-current="page" className="text-white">{crumb.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
