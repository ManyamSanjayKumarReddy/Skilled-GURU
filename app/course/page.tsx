"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, PhoneIcon, CheckCircle, Instagram, Linkedin, Github } from "lucide-react"
import Image from "next/image"
import AnnouncementBar from "../components/AnnouncementBar"
import Pricing from "../components/Pricing"
import { courseSections, benefits, courseDetails } from "@/utils/courseData"
// import { courseSections,} from "@/utils/courseData"

function CourseSection({ section, index }: { section: (typeof courseSections)[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      className="mb-4 overflow-hidden transition-all duration-300 hover:shadow-lg animate-fadeInUp shadow-md rounded-xl"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`h-2 w-full bg-gradient-to-r ${section.color}`}></div>
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
        <CardTitle className="text-xl sm:text-2xl font-bold">{section.title}</CardTitle>
        <Badge variant="outline" className="bg-blue-50 text-sm sm:text-base">
          {section.duration}
        </Badge>
      </CardHeader>
      <CardContent className="pt-0">
        <Button
          variant="ghost"
          className="w-full justify-between text-blue-600 hover:text-blue-800 hover:bg-blue-50 mb-2 text-sm sm:text-base"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Hide Details" : "Show Details"}
          {isExpanded ? (
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
          ) : (
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          )}
        </Button>
        {isExpanded && (
          <div className="mt-2 space-y-2 bg-gray-50 p-3 sm:p-4 rounded-lg animate-fadeIn">
            <div>
              <h4 className="font-semibold mb-1 text-gray-700 text-base sm:text-lg">Topics Covered:</h4>
              <ul className="list-disc list-inside space-y-1">
                {section.sessions.map((session, sessionIndex) => (
                  <li key={sessionIndex} className="text-gray-600 text-sm sm:text-base">
                    {session}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-gray-700 text-base sm:text-lg">Project:</h4>
              <p className="text-green-600 text-sm sm:text-base">{section.deliverable}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function CoursePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <AnnouncementBar />
      <Header />
      <main className="flex-grow py-6 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-fadeInUp">
            Mastering Agentic AI – Build & Deploy Your Own AI Agents
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center mb-6 sm:mb-8 text-gray-700">
            A Hands-on Course to Build AI Agents for Real-World Applications
          </p>

          {/* Course details and description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 p-2 sm:p-3 text-left text-xs sm:text-sm md:text-base">
                        Detail
                      </th>
                      <th className="border border-gray-300 p-2 sm:p-3 text-left text-xs sm:text-sm md:text-base">
                        Information
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseDetails.map((detail, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 sm:p-3 font-semibold text-xs sm:text-sm md:text-base">
                          {detail.label}
                        </td>
                        <td className="border border-gray-300 p-2 sm:p-3 text-xs sm:text-sm md:text-base">
                          {detail.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Course Description</h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                  AI is evolving from simple chatbots to fully autonomous AI agents that can think, plan, and act. This
                  course teaches you how to build, fine-tune, and deploy AI agents using Python, NLP, Machine Learning,
                  Deep Learning, LangChain, LangGraph, PhiData CrewAI, AutoGen, and RAG-based search. You'll also learn
                  how to monetize AI agents as a SaaS business.
                </p>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-3 sm:mt-4">
                  By the end, you'll have multiple AI agents built and deployed, along with a final capstone project
                  that can be used in your portfolio or business.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-center items-center bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-full aspect-video rounded-lg shadow-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/1dCjSLKTPXs?si=S0w3JTLYl3EUfi5a"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Prerequisites</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 text-sm sm:text-base">
                  <li>Basic Python Programming (If not, a crash course will be provided)</li>
                  <li>Understanding of Machine Learning Basics (Supervised & Unsupervised Learning)</li>
                  <li>Familiarity with APIs & Cloud Services (AWS/GCP is a plus)</li>
                </ul>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base transition-colors duration-300"
                  onClick={() => alert("Skill test coming soon!")}
                >
                  Test Your Skills (Coming Soon)
                </Button>
              </div>
            </div>
          </div>

          {/* What You'll Gain and Ready to Master Agentic AI sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="overflow-hidden animate-fadeInUp shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold">What You'll Gain</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 gap-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-sm sm:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden animate-fadeInUp shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-center">Ready to Master Agentic AI?</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
                <p className="text-center text-base sm:text-lg">
                  Join our AI Bootcamp and transform your career in tech!
                </p>
                <div className="space-y-4 w-full max-w-xs">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 w-full text-sm sm:text-base"
                    onClick={() => window.open("https://wa.me/917601003069", "_blank")}
                  >
                    <PhoneIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Contact Us on WhatsApp
                  </Button>
                  <p className="text-center text-xs sm:text-sm">
                    Or email us at:{" "}
                    <a href="mailto:skilledguruofficial@gmail.com" className="underline hover:text-blue-200">
                      skilledguruofficial@gmail.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8 text-gray-800 animate-fadeInUp">
            Course Contents
          </h2>

          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            {courseSections.map((section, index) => (
              <CourseSection key={index} section={section} index={index} />
            ))}
          </div>

          {/* Pricing section */}
          <div className="mb-16">
            <Pricing />
          </div>

          {/* Meet Your Instructor section */}
          <Card className="overflow-hidden animate-fadeInUp shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl mb-8 sm:mb-12">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center">Meet Your Instructor</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-purple-200">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sanju.jpg-14d3rJf0jwoh3zWkJfT9X9JDHCu6uv.jpeg"
                  alt="M Sanjay Kumar Reddy"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  M Sanjay Kumar Reddy
                </h3>
                <p className="text-gray-600 mb-2 text-base sm:text-lg">Founder & Lead Instructor</p>
                <p className="text-gray-600 mb-1 text-base sm:text-lg">2+ years of experience in Teaching AI</p>
                <p className="text-gray-600 mb-4 text-base sm:text-lg">Backend Developer & Scrum Master</p>
                <div className="flex justify-center sm:justify-start space-x-4">
                  <a
                    href="https://www.instagram.com/_04_sanju__/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manyamsanjaykumarreddy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/ManyamSanjayKumarReddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

