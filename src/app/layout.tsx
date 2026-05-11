import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const adminFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-admin",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maschinenbauer-3-0-production.vercel.app"),
  title: "Maschinenbauer 3.0 | noll.media",
  description:
    "Deine Website ist kein Kunstprojekt. Sie ist entweder ein Werkzeug - oder Zeitverschwendung. Ein komplettes System aus Website, Anzeigen und klaren Prozessen fuer planbare Kunden- und Mitarbeitergewinnung.",
  keywords: [
    "Maschinenbauer 3.0",
    "noll.media",
    "B2B Marketing",
    "Industriemarketing",
    "Fachkraeftegewinnung",
    "Website System",
    "Leadgenerierung",
  ],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  openGraph: {
    title: "Maschinenbauer 3.0 | noll.media",
    description:
      "Ein strukturiertes System aus Website, Anzeigen, klaren Prozessen und KI-Sichtbarkeit. Fuer Industrie, B2B und Fachkraeftegewinnung.",
    locale: "de_DE",
    type: "website",
    siteName: "noll.media",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={`dark scroll-smooth bg-background ${bodyFont.variable} ${adminFont.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-clip bg-background text-foreground">{children}</body>
    </html>
  );
}
