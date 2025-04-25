import Image from "next/image";
import company_name from "../../public/images/company_name.png"
import Link from "next/link";


  

import AnimatedHamburger from "./AnimatedHamburger";

export default function Header() {

    return (
        <div className="p-2 h-20 md:h-28 flex justify-between border-b-2 border-one bg-back">
            <div className="relative w-48 md:w-72">
                <Image
                    src={company_name}
                    alt="B.C. Trees"
                    /> 
            </div>

            {/* navigation links on large screens */}
            <div className="hidden md:flex justify-evenly gap-5 items-end text-xl md:text-2xl text-two font-semibold md:mr-8">
                <Link href="/" title="Services">
                    <h2 className=" hover:underline">Home</h2>
                </Link>
                <Link href="/services" title="Services">
                    <h2 className=" hover:underline">Services</h2>
                </Link>
                <Link href="/estimate" title="Services">
                    <h2 className=" hover:underline">Free Quote</h2>
                </Link>
            </div>

            {/* navigation links on small screens */}
            <AnimatedHamburger />
        </div>
    )
}