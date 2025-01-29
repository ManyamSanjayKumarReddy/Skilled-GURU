"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import VideoPlayer from "../components/VideoPlayer"
import AnnouncementBar from "../components/AnnouncementBar"

const videos = [
  {
    id: "1dCjSLKTPXs",
    title: "Is Deepseek R1 better than ChatGPT o1?",
    description: "A comparison between Deepseek R1 and ChatGPT o1 models.",
  },
  {
    id: "jq-aCeVyQcw",
    title: "Python Variables and Data Types",
    description: "Learn about Python variables and data types in this comprehensive tutorial.",
  },
  {
    id: "uhnp1jM1mrw",
    title: "Exploring the Future of AI with Bappy",
    description: "An insightful discussion on the future of AI technology with Bappy.",
  },
  {
    id: "vV7-JWgdCmg",
    title: "Essence of Learning Agentic AI in 2025",
    description: "Learn about the future of AI and how to prepare for it.",
  },
  {
    id: "-oHJ0Qwsgpw",
    title: "Generative AI vs Agentic AI",
    description: "Understand the key differences between Generative and Agentic AI.",
  },
  {
    id: "YpyK-2qXQ1Q",
    title: "Deploy any Static Site in Just 5 Min",
    description: "Quick tutorial on deploying static websites efficiently.",
  },
]

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <AnnouncementBar />
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            All Videos
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <VideoPlayer videoId={video.id} title={video.title} />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 line-clamp-2">{video.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

