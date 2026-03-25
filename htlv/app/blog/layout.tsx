import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Towing Tips & Roadside Guides | Hustlers Towing Las Vegas",
  description:
    "Roadside safety tips, towing guides, and Las Vegas driving advice from Hustlers Towing. 24/7 towing service in Las Vegas.",
  openGraph: {
    title: "Towing Tips & Roadside Guides | Hustlers Towing Las Vegas",
    description:
      "Roadside safety tips, towing guides, and Las Vegas driving advice from Hustlers Towing.",
    url: "https://hustlerstowing.com/blog",
    siteName: "Hustlers Towing",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
