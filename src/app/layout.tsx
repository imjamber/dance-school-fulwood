import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { SITE_TITLE, LOCATION_NAME, FULL_ADDRESS } from "@/lib/constants"

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: `${SITE_TITLE} | Dance Classes in ${LOCATION_NAME}`,
  description: `Professional dance classes for all ages in ${LOCATION_NAME}, Lancashire. Ballet, Tap, Contemporary, Jazz and more. Located at ${FULL_ADDRESS}.`,
  keywords: [`dance school ${LOCATION_NAME}`, "ballet classes Lancashire", "dance classes Preston", "children dance"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-charcoal text-ivory antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
