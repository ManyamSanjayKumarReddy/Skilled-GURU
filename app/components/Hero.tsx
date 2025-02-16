"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Hero() {
  const [gradientPosition, setGradientPosition] = useState<{ x: number; y: number }>({
    x: 50,
    y: 50,
  })
  const [typedText, setTypedText] = useState("")
  const fullText = "Empowering Future Innovators"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const x = (clientX / window.innerWidth) * 100
    const y = (clientY / window.innerHeight) * 100
    setGradientPosition({ x, y })
  }

  return (
    <section
      className="relative py-20 sm:py-24 md:py-32 overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(0, 123, 255, 0.7), rgba(138, 43, 226, 0.7))`,
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white animate-fadeIn">{typedText}</h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 animate-fadeIn" style={{ animationDelay: "0.5s" }}>
            Learn AI, Data Science, Web Development & More!
          </p>
          <div
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg mb-8 animate-fadeIn"
            style={{ animationDelay: "0.7s" }}
          >
            <p className="text-xl sm:text-2xl font-semibold mb-4 text-white">Explore Our new Course on Mastering Agentic AI </p>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300"
              asChild
            >
              <Link href="/course">
                View Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div
            className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn"
            style={{ animationDelay: "0.9s" }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="#features">Our Offerings</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="#founder">Founder's Story</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  )
}

