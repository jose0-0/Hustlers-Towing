import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PhoneIcon, PinIcon } from "@/components/Icons";
import ServicesList from "./ServicesList";
import ServicesHero from "./ServicesHero";
import ServicesFAQ from "./ServicesFAQ";
import ServicesCTA from "./ServicesCTA";

export const metadata: Metadata = {
  title: "Towing Services in Las Vegas | Hustlers Towing",
  description:
    "24/7 towing services in Las Vegas — light & heavy duty towing, jump starts, lockouts, tire changes, fuel delivery, and emergency recovery. Call (702) 123-4567 for a free quote.",
  keywords: [
    "towing service Las Vegas",
    "tow truck Las Vegas",
    "emergency towing Las Vegas",
    "roadside assistance Las Vegas",
    "jump start Las Vegas",
    "lockout service Las Vegas",
    "heavy duty towing Las Vegas",
    "24 hour towing Las Vegas",
    "towing service",
  ],
  openGraph: {
    title: "Towing Services in Las Vegas | Hustlers Towing",
    description:
      "24/7 towing, roadside assistance & emergency recovery across Las Vegas Valley. Call (702) 123-4567.",
    url: "https://hustlerstowing.com/services",
    siteName: "Hustlers Towing",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Towing Services in Las Vegas | Hustlers Towing",
    description:
      "24/7 towing, roadside assistance & emergency recovery. Call (702) 123-4567.",
  },
  alternates: {
    canonical: "https://hustlerstowing.com/services",
  },
};

// LocalBusiness + Service structured data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://hustlerstowing.com/#business",
      name: "Hustlers Towing",
      url: "https://hustlerstowing.com",
      telephone: "+17021234567",
      priceRange: "$$",
      image: "https://hustlerstowing.com/og-image.jpg",
      description:
        "24/7 towing and roadside assistance serving Las Vegas Valley, Nevada.",
      areaServed: [
        {
          "@type": "City",
          name: "Las Vegas",
          sameAs: "https://en.wikipedia.org/wiki/Las_Vegas",
        },
        { "@type": "City", name: "Henderson" },
        { "@type": "City", name: "North Las Vegas" },
        { "@type": "City", name: "Summerlin" },
        { "@type": "City", name: "Las Vegas" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        addressCountry: "US",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "33",
        bestRating: "5",
      },
    },
    {
      "@type": "Service",
      serviceType: "Towing Service",
      provider: { "@id": "https://hustlerstowing.com/#business" },
      areaServed: "Las Vegas, NV",
      description:
        "24/7 light and heavy duty towing, emergency recovery, and roadside assistance.",
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          description: "Free quote — call (702) 123-4567",
        },
      },
    },
  ],
};
const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <ServicesHero />
        <ServicesList />
        <ServicesFAQ />
        <ServicesCTA />
      </main>
    </>
  );
};

export default page;
