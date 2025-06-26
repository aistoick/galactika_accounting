import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Galactika - Professional Buxgalteriya Xizmatlari",
    template: "%s | Galactika",
  },
  description:
    "Professional buxgalteriya, soliq tayyorlash va moliyaviy maslahat xizmatlari. 500+ biznesga 25 yildan ortiq ishonchli xizmat.",
  keywords: ["buxgalteriya", "soliq tayyorlash", "ish haqi", "moliyaviy rejalashtirish", "biznes maslahat"],
  authors: [{ name: "Galactika" }],
  creator: "Galactika",
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://sterlingaccounting.com",
    title: "Galactika - Professional Buxgalteriya Xizmatlari",
    description: "Professional buxgalteriya, soliq tayyorlash va moliyaviy maslahat xizmatlari.",
    siteName: "Galactika",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galactika - Professional Buxgalteriya Xizmatlari",
    description: "Professional buxgalteriya, soliq tayyorlash va moliyaviy maslahat xizmatlari.",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
