import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Lokum - Ekskluzywne Nieruchomości w Polsce",
    template: "%s | Lokum",
  },
  description:
    "Lokum to ekskluzywna platforma nieruchomości premium w Polsce. Starannie wyselekcjonowane rezydencje, apartamenty i domy w najlepszych lokalizacjach Warszawy, Krakowa i innych prestiżowych miast.",
  keywords: [
    "luksusowe nieruchomości",
    "ekskluzywne apartamenty",
    "rezydencje Warszawa",
    "premium real estate Poland",
    "penthouse Warszawa",
    "apartamenty Kraków",
    "domy Mokotów",
    "Wilanów nieruchomości",
  ],
  authors: [{ name: "Lokum" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Lokum - Ekskluzywne Nieruchomości w Polsce",
    description:
      "Starannie wyselekcjonowane rezydencje i apartamenty premium w najlepszych lokalizacjach Polski.",
    type: "website",
    locale: "pl_PL",
    siteName: "Lokum",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokum - Ekskluzywne Nieruchomości w Polsce",
    description:
      "Starannie wyselekcjonowane rezydencje i apartamenty premium w najlepszych lokalizacjach Polski.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" data-scroll-behavior="smooth" className={`${cormorant.variable} ${outfit.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
