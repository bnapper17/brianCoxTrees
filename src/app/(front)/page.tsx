import Image from "next/image";

export default function Home() {
  return (
    <div className="h-lvh md:h-195">
      <div className="relative splash-image h-full">
        <div className="absolute w-64 md:w-lg bottom-1/3 md:bottom-1/5 right-1/6 md:right-1/12 bg-background/75 rounded-xl p-1">
          <Image
            src="/images/company_tagline.png"
            height={56}
            width={560}
            alt="Whatever it takes"
            />
        </div>
      </div>
    </div>
  );
}