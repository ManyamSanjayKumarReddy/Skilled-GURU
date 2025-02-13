"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Youtube } from "lucide-react"
import Link from "next/link"

const videos = [
  {
    id: "vV7-JWgdCmg",
    title: "Essence of Learning Agentic AI in 2025",
    thumbnail: "https://img.youtube.com/vi/vV7-JWgdCmg/maxresdefault.jpg",
  },
  {
    id: "-oHJ0Qwsgpw",
    title: "Generative AI vs Agentic AI",
    thumbnail: "https://img.youtube.com/vi/-oHJ0Qwsgpw/maxresdefault.jpg",
  },
  {
    id: "YpyK-2qXQ1Q",
    title: "Deploy any Static Site in Just 5 Min",
    thumbnail: "https://img.youtube.com/vi/YpyK-2qXQ1Q/maxresdefault.jpg",
  },
]

export default function LatestVideos() {
  return (
    <section id="videos" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Latest Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg"
            >
              <CardHeader className="p-0 aspect-video relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-base sm:text-lg font-semibold line-clamp-2">{video.title}</CardTitle>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  variant="outline"
                  className="w-full transition-all duration-300 hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-white"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank")}
                >
                  <Youtube className="mr-2 h-4 w-4" /> Watch Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/videos">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 px-6 sm:px-8"
            >
              View All Videos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

