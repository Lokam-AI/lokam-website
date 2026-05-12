import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Lokam - Voice AI Follow Up for Automotive Dealerships",
  description:
    "78% of car buyers choose the first dealer to follow up. Lokam automates that call for every service visit and showroom appointment. 70% contact rate, DMS-native.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Lokam - Voice AI Follow Up for Automotive Dealerships",
    description:
      "78% of car buyers choose the first dealer to follow up. Lokam automates that call for every service visit and showroom appointment. 70% contact rate, DMS-native.",
    url: SITE_URL,
    siteName: "Lokam",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Lokam Voice AI for Automotive Dealerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokam - Voice AI Follow Up for Automotive Dealerships",
    description:
      "78% of car buyers choose the first dealer to follow up. Lokam automates that call for every service visit and showroom appointment. 70% contact rate, DMS-native.",
    images: [`${SITE_URL}/opengraph-image`],
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
    "https://www.linkedin.com/company/lokam-ai/",
    "https://www.crunchbase.com/organization/lokam-ai",
  ],
  founder: {
    "@type": "Person",
    name: "Muhammed Saleeq",
    jobTitle: "Co-founder & CEO",
    url: "https://www.lokam.ai/about",
    sameAs: ["https://www.linkedin.com/in/muhammed-saleeq/"],
  },
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
    "Voice AI platform for automotive dealerships - automates CSI follow-up, lead re-engagement, and service retention calls.",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lokam Voice AI",
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered voice platform that automatically calls automotive dealership customers after service visits and showroom appointments - recovering at-risk relationships, automating CSI surveys, and re-engaging unsold leads.",
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
    description: "Book a demo - plans tailored to your dealership and use case.",
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W8V1LMBJLP"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W8V1LMBJLP');
          `}
        </Script>
      </body>
    </html>
  );
}
