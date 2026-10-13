import Image from "next/image";
import company_name from "../../public/images/company_name.png"
import Link from "next/link";
import { site } from "@/lib/site";


  

import AnimatedHamburger from "./AnimatedHamburger";

export default function Header() {

    return (
        <header className="p-2 h-20 md:h-28 flex justify-between border-b-2 border-one bg-back">
            <div className="relative w-48 md:w-72">
                <Image
                    src={company_name}
                    alt="B.C. Trees"
                    /> 
            </div>

            {/* navigation links on large screens */}
            <nav className="hidden md:flex justify-evenly gap-5 items-end text-xl md:text-2xl text-two font-semibold md:mr-8">
                <Link href="/" title="Home">
                    <span className="hover:underline">Home</span>
                </Link>
                <Link href="/services" title="Services">
                    <span className="hover:underline">Services</span>
                </Link>
                <Link href={site.quoteUrl} title="Free Quote">
                    <span className="hover:underline">Free Quote</span>
                </Link>
            </nav>

            {/* navigation links on small screens */}
            <AnimatedHamburger />
        </header>
    )
}
