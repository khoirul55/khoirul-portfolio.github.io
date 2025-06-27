import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Khoirul Gunawan - Web Developer Portfolio",
  description:
    "Information Systems graduate and web developer specializing in Laravel, JavaScript, and modern web technologies.",
  keywords: "web developer, laravel, javascript, portfolio, information systems, khoirul gunawan",
  authors: [{ name: "Khoirul Gunawan" }],
  creator: "Khoirul Gunawan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khoirulgunawan55.github.io",
    title: "Khoirul Gunawan - Web Developer Portfolio",
    description:
      "Information Systems graduate and web developer specializing in Laravel, JavaScript, and modern web technologies.",
    siteName: "Khoirul Gunawan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khoirul Gunawan - Web Developer Portfolio",
    description:
      "Information Systems graduate and web developer specializing in Laravel, JavaScript, and modern web technologies.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
