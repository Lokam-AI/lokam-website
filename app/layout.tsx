import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://lokam-website.vercel.app";

export const metadata: Metadata = {
  title: "Lokam — Voice AI for Automotive Dealerships",
  description:
    "Lokam is Voice AI for automotive dealerships — automating CSI follow-up calls, recovering unsold leads, and improving Google ratings. Book a demo to see it live at your dealership.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Lokam — Voice AI for Automotive Dealerships",
    description:
      "Lokam is Voice AI for automotive dealerships — automating CSI follow-up calls, recovering unsold leads, and improving Google ratings. Book a demo to see it live at your dealership.",
    url: SITE_URL,
    siteName: "Lokam",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/assets/car.jpg`,
        width: 2560,
        height: 1911,
        alt: "Lokam Voice AI for Automotive Dealerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokam — Voice AI for Automotive Dealerships",
    description:
      "Lokam is Voice AI for automotive dealerships — automating CSI follow-up calls, recovering unsold leads, and improving Google ratings. Book a demo to see it live at your dealership.",
    images: [`${SITE_URL}/assets/car.jpg`],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lokam",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/image-47.png`,
  description:
    "Voice AI platform for automotive dealerships that automates customer follow-up after service visits, CSI calls, and unsold lead re-engagement.",
  telephone: "+19809446263",
  email: "founder@lokam.ai",
  sameAs: [
    SITE_URL,
    "https://www.linkedin.com/company/lokam-ai/",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2261 Market Street STE 46073",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94114",
    addressCountry: "US",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lokam",
  url: SITE_URL,
  description:
    "Voice AI platform for automotive dealerships — automates CSI follow-up, lead re-engagement, and service retention calls.",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lokam Voice AI",
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered voice platform that automatically calls automotive dealership customers after service visits and showroom appointments — recovering at-risk relationships, automating CSI surveys, and re-engaging unsold leads.",
  featureList: [
    "AI-automated post-service customer follow-up calls",
    "CSI score automation and survey completion",
    "Lead re-engagement for unsold desklog customers",
    "Branded caller ID for improved contact rates",
    "Multilingual customer outreach",
    "DMS and CRM integration",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Book a demo — plans tailored to your dealership and use case.",
    url: "https://calendly.com/saleeq-lokam/30-minutes-meeting",
  },
  provider: {
    "@type": "Organization",
    name: "Lokam",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://stream.mux.com" />
        <link rel="preconnect" href="https://image.mux.com" />
        <link rel="preload" as="image" href="/assets/car.avif" type="image/avif" />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
