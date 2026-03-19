import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us | Hustlers Towing Las Vegas",
  description:
    "Need a tow in Las Vegas? Call (702) 123-4567 for immediate 24/7 dispatch or fill out our contact form for a free quote. Fast, reliable towing across the entire Las Vegas Valley.",
  keywords: [
    "contact towing Las Vegas",
    "tow truck Las Vegas phone number",
    "24 hour towing Las Vegas",
    "emergency towing contact Las Vegas",
    "Las Vegas towing free quote",
    "roadside assistance Las Vegas contact",
  ],
  openGraph: {
    title: "Contact Us | Hustlers Towing Las Vegas",
    description:
      "Call (702) 123-4567 for immediate 24/7 towing dispatch in Las Vegas. Free quotes, no hidden fees, ~35 min response time.",
    url: "https://hustlerstowing.com/contact",
    siteName: "Hustlers Towing",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Hustlers Towing Las Vegas",
    description:
      "Call (702) 123-4567 for immediate 24/7 towing dispatch in Las Vegas. Free quotes, no hidden fees.",
  },
  alternates: {
    canonical: "https://hustlerstowing.com/contact",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hustlerstowing.com/#business",
  name: "Hustlers Towing",
  url: "https://hustlerstowing.com",
  telephone: "+17021234567",
  priceRange: "$$",
  description:
    "24/7 towing and roadside assistance serving the entire Las Vegas Valley. Fast response, free quotes, no hidden fees.",
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
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+17021234567",
    contactType: "customer service",
    availableLanguage: "English",
    hoursAvailable: "Mo-Su 00:00-23:59",
  },
};
const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <ContactHero />
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-site-dark border-t border-gold">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>
    </>
  );
};

export default page;
