"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import { Button } from "@/components/ui/button"

import type { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

const metadata = {
  title: "Skilled GURU - Master AI and Emerging Tech",
  description:
    "Skilled GURU provides cutting-edge tech education, mock interviews, and career guidance in AI and rapidly evolving technologies.",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-4 rounded-l-md transform -rotate-90 origin-right transition-all duration-300 hover:scale-105"
            onClick={() =>
              window.open("https://wa.me/918825988659?text=Hi,%20I'm%20interested%20in%20your%20services", "_blank")
            }
          >
            <span className="inline-block transform">Enquire Now</span>
          </Button>
        </div>
      </body>
    </html>
  )
}

