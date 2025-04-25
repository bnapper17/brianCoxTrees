import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex justify-evenly items-center md:p-x-20 bg-back border-t-2 border-one">
            <div className="relative w-44 md:w-2/12">
                <Image
                    src="/images/logo.png"
                    height={480}
                    width={480}
                    alt="company logo"
                />
            </div>
            <div className="text-two md:text-3xl font-semibold space-y-1.5 md:space-y-3">
                <p>Christian Owned and Operated</p>
                <p>Fully Insured</p>
                <p>Free Estimates</p>
            </div>
        </div>
    )
}