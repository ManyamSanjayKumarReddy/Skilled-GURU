"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [gradientPosition, setGradientPosition] = useState<{ x: number; y: number }>({
    x: 50,
    y: 50,
  })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const x = (clientX / window.innerWidth) * 100
    const y = (clientY / window.innerHeight) * 100
    setGradientPosition({ x, y })
  }

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #a3c8e7, #d1c2e9, #f7d1e4)`,
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 z-20 animate-fadeIn">
            Master AI and Emerging Tech with Skilled Guru
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 z-20 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            Stay ahead in the rapidly evolving world of technology with our cutting-edge courses and resources
          </p>
          <div
            className="
              bg-gradient-to-r from-blue-500 to-purple-500 
              text-white p-4 sm:p-6 rounded-lg shadow-lg 
              transform transition-all duration-300
              hover:shadow-xl mb-6 sm:mb-8
            "
          >
            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">New Course: Mastering Agentic AI</p>
            <p className="text-sm sm:text-base md:text-lg mb-4">Build & Deploy Your Own AI Agents</p>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300"
              asChild
            >
              <Link href="/course">
                Explore Our AI Course <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div
            className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 z-20"
              asChild
            >
              <Link href="#features">Discover Our Features</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105 z-20"
              asChild
            >
              <Link
                href="https://youtube.com/@skilled_guru?si=Dnify5KYXAz3AcvX"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Our Videos
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  )
}

