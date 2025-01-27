"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

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
      className="relative py-20 overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #a3c8e7, #d1c2e9, #f7d1e4)`, // Darker gradient colors
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 z-20">
            Master AI and Emerging Tech with Skilled Guru
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 z-20">
            Stay ahead in the rapidly evolving world of technology with our cutting-edge courses and resources
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 z-20"
          >
            Explore Our Content 
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  )
}
