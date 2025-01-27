import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Skilled GURU - Master AI and Emerging Tech",
  description:
    "Skilled GURU provides cutting-edge tech education, mock interviews, and career guidance in AI and rapidly evolving technologies.",
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

