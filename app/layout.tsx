import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$sTRONg - The Strongest Meme on TRON",
  description: "The STRONGEST meme coin on TRON blockchain. Built for the community, powered by conviction. IYKYK.",
  keywords: ["sTRONg", "TRON", "meme coin", "cryptocurrency", "blockchain", "DeFi", "SunSwap"],
  authors: [{ name: "$sTRONg Community" }],
  creator: "$sTRONg Team",
  publisher: "$sTRONg",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://strong-meme.vercel.app",
    title: "$sTRONg - The Strongest Meme on TRON",
    description: "The STRONGEST meme coin on TRON blockchain. Built for the community, powered by conviction. IYKYK.",
    siteName: "$sTRONg",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "$sTRONg - The Strongest Meme on TRON",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$sTRONg - The Strongest Meme on TRON",
    description: "The STRONGEST meme coin on TRON blockchain. Built for the community, powered by conviction. IYKYK.",
    images: ["/og-image.png"],
    creator: "@justinsuntron",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="$sTRONg" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="msapplication-TileImage" content="/favicon-32x32.png" />
        <link rel="canonical" href="https://strong-meme.vercel.app" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
