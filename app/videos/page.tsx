import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"

const videos = [
  { id: 1, title: "Introduction to GPT-4", thumbnail: "/placeholder.svg?height=180&width=320" },
  { id: 2, title: "The Future of Quantum Computing", thumbnail: "/placeholder.svg?height=180&width=320" },
  { id: 3, title: "Blockchain Technology Explained", thumbnail: "/placeholder.svg?height=180&width=320" },
  { id: 4, title: "Machine Learning Basics", thumbnail: "/placeholder.svg?height=180&width=320" },
  { id: 5, title: "Cybersecurity in the Age of AI", thumbnail: "/placeholder.svg?height=180&width=320" },
  { id: 6, title: "The Rise of Edge Computing", thumbnail: "/placeholder.svg?height=180&width=320" },
]

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Skilled GURU Videos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                    <Button variant="outline" className="w-full">
                      Watch Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

