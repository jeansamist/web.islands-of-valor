import type { Metadata, Viewport } from "next";
import "./globals.css";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: "Islands of Valor — Veterans Healing in the USVI",
    template: "%s | Islands of Valor",
  },
  description:
    "A nonprofit supporting veterans and their families across the U.S. Virgin Islands. Connecting them to peer communities, meaningful activities, and opportunities to heal and grow.",
  keywords: [
    "veterans",
    "USVI",
    "U.S. Virgin Islands",
    "nonprofit",
    "veteran support",
    "veteran community",
    "healing",
    "Islands of Valor",
  ],
  authors: [{ name: "Islands of Valor" }],
  creator: "Islands of Valor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://islandsofvalor.org",
    siteName: "Islands of Valor",
    title: "Islands of Valor — Veterans Healing in the USVI",
    description:
      "A nonprofit supporting veterans and their families across the U.S. Virgin Islands.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Islands of Valor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islands of Valor",
    description:
      "A nonprofit supporting veterans and their families across the U.S. Virgin Islands.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
// Fonts are loaded via <link> at runtime (browser), not at build time.
// This avoids next/font/google failing when Google Fonts is unreachable
// during `next build` (e.g. restricted network / CI environments).

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-greige-pale text-navy overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
