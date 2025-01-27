"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Youtube, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Features", id: "features", isLive: true },
    { name: "Videos", id: "videos", isLive: true },
    { name: "Mock Interviews", id: "mock-interviews", isLive: false },
    { name: "AI Course", id: "course", isLive: false },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Skilled GURU
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-gray-600 hover:text-blue-600 transition-colors ${
                        !item.isLive ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                      disabled={!item.isLive}
                      aria-label={item.isLive ? item.name : `${item.name} (Coming Soon)`}
                    >
                      {item.name}
                      {!item.isLive && <span className="ml-1 text-xs text-blue-600">(Soon)</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <Button
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 flex items-center gap-2"
              onClick={() => window.open("https://youtube.com/@skilled_guru?si=Dnify5KYXAz3AcvX", "_blank")}
              aria-label="Subscribe to our YouTube channel"
            >
              <Youtube className="w-4 h-4" />
              Subscribe
            </Button>
          </div>
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-gray-600 hover:text-blue-600 transition-colors ${
                      !item.isLive ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    disabled={!item.isLive}
                    aria-label={item.isLive ? item.name : `${item.name} (Coming Soon)`}
                  >
                    {item.name}
                    {!item.isLive && <span className="ml-1 text-xs text-blue-600">(Soon)</span>}
                  </button>
                </li>
              ))}
              <li>
                <Button
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 flex items-center gap-2 w-full justify-center"
                  onClick={() => window.open("https://youtube.com/@skilled_guru?si=Dnify5KYXAz3AcvX", "_blank")}
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="w-4 h-4" />
                  Subscribe
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

