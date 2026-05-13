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
  title: "Lokam | Voice AI Follow Up for Automotive Dealerships",
  description:
    "Lokam is a Voice AI follow-up platform for automotive dealerships. Recovers unsold showroom traffic, automates CSI calls and improves Google ratings.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Lokam | Voice AI Follow Up for Automotive Dealerships",
    description:
      "Lokam is a Voice AI follow-up platform for automotive dealerships. Recovers unsold showroom traffic, automates CSI calls and improves Google ratings.",
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
    title: "Lokam | Voice AI Follow Up for Automotive Dealerships",
    description:
      "Lokam is a Voice AI follow-up platform for automotive dealerships. Recovers unsold showroom traffic, automates CSI calls and improves Google ratings.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Lokam",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/assets/image-47.png`,
    width: 200,
    height: 200,
  },
  description:
    "Voice AI platform for automotive dealerships that automates customer follow-up after service visits, CSI calls, and unsold lead re-engagement.",
  telephone: "+19809446263",
  email: "founder@lokam.ai",
  areaServed: "North America",
  knowsAbout: [
    "AI voice agents for automotive dealerships",
    "CSI follow-up automation",
    "Unsold lead recovery for car dealerships",
    "Dealership BDC software automation",
    "Dealer Management System integration",
    "Customer satisfaction improvement for auto dealers",
    "Post-service customer follow-up calls",
  ],
  sameAs: [
    "https://www.linkedin.com/company/lokam-ai/",
    "https://www.crunchbase.com/organization/lokam-ai",
  ],
  founder: {
    "@type": "Person",
    name: "Muhammed Saleeq",
    jobTitle: "Co-founder & CEO",
    url: `${SITE_URL}/about`,
    sameAs: ["https://www.linkedin.com/in/muhammed-saleeq/"],
    worksFor: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
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
  "@id": `${SITE_URL}/#website`,
  name: "Lokam",
  url: SITE_URL,
  inLanguage: "en-US",
  description:
    "Voice AI platform for automotive dealerships - automates CSI follow-up, lead re-engagement, and service retention calls.",
  publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: "Lokam Voice AI",
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Automotive Dealership Software",
  operatingSystem: "Web",
  inLanguage: ["en", "es"],
  areaServed: "North America",
  description:
    "AI-powered voice platform that automatically calls automotive dealership customers after service visits and showroom appointments - recovering at-risk relationships, automating CSI surveys, and re-engaging unsold leads.",
  featureList: [
    "AI-automated post-service customer follow-up calls",
    "CSI score automation and survey completion",
    "Lead re-engagement for unsold desklog customers",
    "Branded caller ID for improved contact rates",
    "Multilingual customer outreach - English and Spanish",
    "DMS and CRM integration - CDK, Dealertrack, VinSolutions",
  ],
  offers: {
    "@type": "Offer",
    description: "Book a demo - plans tailored to your dealership and use case.",
    url: "https://calendly.com/saleeq-lokam/30-minutes-meeting",
  },
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
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
