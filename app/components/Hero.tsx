import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Master AI and Emerging Tech with Skilled GURU
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Stay ahead in the rapidly evolving world of technology with our cutting-edge courses and resources
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Content <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

