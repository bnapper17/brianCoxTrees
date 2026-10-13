import type { Metadata } from "next";
import { Montserrat,  } from 'next/font/google';
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const description =
  "Christian owned, fully insured tree service based in English, Indiana, serving all of Southern Indiana. Storm damage cleanup, tree removal, tree trimming and stump grinding. Free estimates.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "B.C. Trees | Tree Service in Southern Indiana",
    template: "%s | B.C. Trees",
  },
  description,
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: "B.C. Trees | Tree Service in Southern Indiana",
    description,
    images: [{ url: "/images/splash_cropped.jpg", alt: "B.C. Trees tree service" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

// LocalBusiness structured data for Google rich results and the map pack.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description,
  url: site.url,
  telephone: `+1-${site.phone}`,
  email: site.email,
  logo: `${site.url}/images/logo.png`,
  image: `${site.url}/images/splash_cropped.jpg`,
  slogan: "Whatever It Takes",
  sameAs: [site.facebook],
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.stateCode,
    postalCode: site.postalCode,
    addressCountry: "US",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: site.serviceArea,
  },
  makesOffer: [
    "Storm Damage Cleanup",
    "Tree Removal",
    "Tree Trimming",
    "Stump Grinding",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'], // Or an array of weights
  subsets: ['latin'], // Or other subsets
  display: 'swap', // Recommended for faster rendering
  fallback: ['Arial', 'sans-serif'], // Fallback if Montserrat fails to load
  variable: '--font-montserrat' // Optional, for custom CSS variables
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
