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
    "Lokam is Voice AI for automotive dealerships — automating CSI follow-up calls, recovering unsold leads, and improving Google ratings. Live at your store in under 4 hours.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Lokam — Voice AI for Automotive Dealerships",
    description:
      "Lokam is Voice AI for automotive dealerships — automating CSI follow-up calls, recovering unsold leads, and improving Google ratings. Live at your store in under 4 hours.",
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
      "Lokam is Voice AI for automotive dealerships — automating CSI follow-up calls, recovering unsold leads, and improving Google ratings. Live at your store in under 4 hours.",
    images: [`${SITE_URL}/assets/car.jpg`],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lokam",
  url: SITE_URL,
  description:
    "Voice AI platform for automotive dealerships that automates customer follow-up after service visits, CSI calls, and unsold lead re-engagement.",
  telephone: "+19809446263",
  email: "founder@lokam.ai",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lokam",
  url: SITE_URL,
  description:
    "Voice AI platform for automotive dealerships — automates CSI follow-up, lead re-engagement, and service retention calls.",
  telephone: "+19809446263",
  email: "founder@lokam.ai",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2261 Market Street STE 46073",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94114",
    addressCountry: "US",
  },
  sameAs: [SITE_URL],
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
    "DMS integration — live in under 4 hours",
  ],
  provider: {
    "@type": "Organization",
    name: "Lokam",
    url: SITE_URL,
  },
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Scott Falcone — World Auto Group Testimonial",
  description:
    "Dealer principal Scott Falcone explains how Lokam boosted Google ratings from 4.0 to 4.6 in 5 weeks and helped close 15–20 extra cars per month.",
  thumbnailUrl: `https://image.mux.com/ky85x1jCLPGj01xCsPM1upXYxQvuocJPnz1MCnJ3mM600/thumbnail.jpg`,
  contentUrl: `https://stream.mux.com/ky85x1jCLPGj01xCsPM1upXYxQvuocJPnz1MCnJ3mM600.m3u8`,
  embedUrl: `https://player.mux.com/ky85x1jCLPGj01xCsPM1upXYxQvuocJPnz1MCnJ3mM600`,
  uploadDate: "2026-01-01",
  publisher: { "@type": "Organization", name: "Lokam", url: SITE_URL },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
