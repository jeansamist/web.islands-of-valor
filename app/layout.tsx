import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

// ─── Font Configuration ───────────────────────────────────────────────────────

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-greige-pale text-navy overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
