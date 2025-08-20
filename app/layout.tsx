import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { SchemaMarkup } from "@/components/schema-markup"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Pare-Brise & Dépannage",
  description:
    "Service professionnel de remplacement et réparation de pare-brise à domicile ou en atelier. Prise en charge assurance, franchise offerte selon conditions. Intervention sous 24-48h, garantie à vie sur la pose.",
  generator: "v0.app",
  keywords:
    "pare-brise, remplacement, réparation, vitrage automobile, assurance, franchise, ADAS, calibrage, intervention domicile",
  authors: [{ name: "Pare-Brise & Dépannage" }],
  creator: "Pare-Brise & Dépannage",
  publisher: "Pare-Brise & Dépannage",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Pare-Brise & Dépannage",
    description:
      "Service professionnel de remplacement et réparation de pare-brise à domicile ou en atelier. Prise en charge assurance, franchise offerte selon conditions.",
    type: "website",
    locale: "fr_FR",
    url: "https://pare-brise-depannage.fr",
    siteName: "Pare-Brise & Dépannage",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pare-Brise & Dépannage - Spécialiste du vitrage automobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pare-Brise & Dépannage",
    description: "Service professionnel de remplacement et réparation de pare-brise à domicile ou en atelier.",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <SchemaMarkup />
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-heading: ${poppins.variable};
  scroll-behavior: smooth;
}
        `}</style>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          storageKey="pare-brise-theme"
          disableTransitionOnChange={false}
        >
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
