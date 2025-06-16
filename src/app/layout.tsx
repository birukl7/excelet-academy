import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Excelet Academy - Your All-in-One Learning Hub",
  description: "From school subjects to real-world skills, we help you learn smarter, faster, and better.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
