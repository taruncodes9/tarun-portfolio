import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import Cursor from "@/components/Cursor";
import { profile } from "@/data/content";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://taruncodes9.github.io/tarun-portfolio";
const ogImageUrl = `${siteUrl}/og-image.png`;
const cleanTitle = `${profile.name} | ${profile.title}`;
const cleanDescription = `${profile.tagline} Experienced in PHP, Laravel, Java Spring Boot, MySQL, REST APIs, and C# .NET 8 desktop utilities.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: cleanTitle,
    template: `%s | ${profile.name}`,
  },
  description: cleanDescription,
  keywords: [
    "Tarun Chhabra",
    "Tarun Chhabra Portfolio",
    "Full-Stack Web Developer",
    "PHP Developer",
    "Laravel Developer",
    "Java Spring Boot Developer",
    "REST API Architecture",
    "WooCommerce Solutions",
    "WordPress Plugins",
    "C# .NET 8",
    "WheelConvert",
    "Next.js Developer",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  publisher: profile.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: cleanTitle,
    description: "Explore software projects, REST APIs, enterprise CRM systems, and desktop utilities by Tarun Chhabra.",
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${profile.name} — Full-Stack Web Developer Portfolio`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: cleanTitle,
    description: "Explore software projects, REST APIs, enterprise CRM systems, and desktop utilities by Tarun Chhabra.",
    images: [ogImageUrl],
    creator: "@taruncodes9",
  },
};

export const viewport: Viewport = {
  themeColor: "#141414",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        {/* Explicit OpenGraph & Social meta fallbacks for WhatsApp, LinkedIn, iMessage & Telegram scrapers */}
        <meta property="og:title" content={cleanTitle} />
        <meta property="og:description" content="Explore software projects, REST APIs, enterprise CRM systems, and desktop utilities by Tarun Chhabra." />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={`${profile.name} Portfolio`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={cleanTitle} />
        <meta name="twitter:description" content="Explore software projects, REST APIs, enterprise CRM systems, and desktop utilities by Tarun Chhabra." />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:image:alt" content={`${profile.name} Developer Portfolio`} />

        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
