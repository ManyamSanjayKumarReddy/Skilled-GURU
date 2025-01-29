"use client";

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, PhoneIcon, CheckCircle, Instagram, Linkedin, Github } from "lucide-react"
import Image from "next/image"
import AnnouncementBar from "../components/AnnouncementBar"

const courseSections = [
  {
    title: "Data Science Foundations",
    duration: "3 Weeks: March 15th – March 30th",
    sessions: [
      "Introduction to Data Science and AI Ecosystem",
      "Python for Data Science (Pandas, Numpy, Data Manipulation)",
      "Data Visualization & Storytelling with Matplotlib & Seaborn",
    ],
    deliverable: "Build a basic data insights dashboard",
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Transition to AI",
    duration: "2 Weeks: April 5th – April 13th",
    sessions: [
      "Machine Learning Basics (Supervised and Unsupervised Learning)",
      "Deep Learning Basics using TensorFlow & Keras",
    ],
    deliverable: "Create a machine learning model with hyperparameter tuning",
    color: "from-green-400 to-teal-400",
  },
  {
    title: "Generative AI Mastery",
    duration: "5 Weeks: April 19th – May 18th",
    sessions: [
      "Introduction to Generative AI: Concepts and Use Cases",
      "Text Generation with ChatGPT, Gemini, and OpenAI APIs",
      "Image Generation using Stable Diffusion & Gemini API",
      "Advanced Language Model Techniques with Llama",
      "Search and Recommendation Systems using DeepSeek",
    ],
    deliverable: "Build a content generation tool integrating multiple APIs",
    color: "from-purple-400 to-indigo-400",
  },
  {
    title: "Agentic AI Frameworks",
    duration: "5 Weeks: May 24th – June 22nd",
    sessions: [
      "Understanding Agentic AI: Autonomous Agents Concepts",
      "Agent Building with Crew AI and Task Automation",
      "Leveraging LangGraph for Complex Agent Workflows",
      "Data Pipeline Automation with Phidata",
      "AI Deployment on AWS Bedrock & Autogen Frameworks",
    ],
    deliverable: "Build a task automation agent deployed on AWS",
    color: "from-red-400 to-pink-400",
  },
  {
    title: "Capstone Project & Practical Applications",
    duration: "3 Weeks: June 28th – July 13th",
    sessions: [
      "Integrating Generative & Agentic AI for End-to-End Solutions",
      "Capstone Project Presentation & AI Deployment Best Practices",
    ],
    deliverable: "AI-powered web application combining Generative and Agentic AI",
    color: "from-yellow-400 to-orange-400",
  },
]

const benefits = [
  "Comprehensive understanding of Data Science and AI",
  "Hands-on experience with cutting-edge AI tools and frameworks",
  "Build a portfolio of real-world AI projects",
  "Personalized mentorship and career guidance",
  "Access to a community of AI enthusiasts and professionals",
  "Certificate of completion from Skilled GURU",
]

const courseDetails = [
  { label: "Schedule", value: "Sat & Sun, 10 AM - 12 PM" },
  { label: "Language", value: "Telugu" },
  { label: "Platform", value: "Online" },
]

function CourseSection({ section, index }: { section: (typeof courseSections)[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      className="mb-6 overflow-hidden transition-all duration-300 hover:shadow-lg animate-fadeInUp shadow-md rounded-xl"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`h-2 w-full bg-gradient-to-r ${section.color}`}></div>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">{section.title}</CardTitle>
        <Badge variant="outline" className="bg-blue-50 text-lg">
          {section.duration}
        </Badge>
      </CardHeader>
      <CardContent className="pt-0">
        <Button
          variant="ghost"
          className="w-full justify-between text-blue-600 hover:text-blue-800 hover:bg-blue-50 mb-2 text-lg"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Hide Details" : "Show Details"}
          {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </Button>
        {isExpanded && (
          <div className="mt-2 space-y-2 bg-gray-50 p-4 rounded-lg animate-fadeIn">
            <div>
              <h4 className="font-semibold mb-1 text-gray-700 text-lg">Sessions:</h4>
              <ul className="list-disc list-inside space-y-1">
                {section.sessions.map((session, sessionIndex) => (
                  <li key={sessionIndex} className="text-gray-600 text-base">
                    {session}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-gray-700 text-lg">Deliverable:</h4>
              <p className="text-green-600 text-base">{section.deliverable}</p>
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
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-fadeInUp">
            AI Bootcamp: From Data Science to Autonomous Agents
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Detail</th>
                    <th className="border border-gray-300 p-3 text-left">Information</th>
                  </tr>
                </thead>
                <tbody>
                  {courseDetails.map((detail, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">{detail.label}</td>
                      <td className="border border-gray-300 p-3">{detail.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Course Description</h3>
                <p className="text-gray-700">
                  Our comprehensive AI Bootcamp takes you on an exciting journey from Data Science fundamentals to
                  advanced Autonomous Agents. Over 4 months, you'll gain hands-on experience with cutting-edge AI tools
                  and frameworks, building real-world projects that showcase your skills. Whether you're a beginner or
                  an experienced professional, this course will equip you with the knowledge and practical abilities
                  needed to excel in the rapidly evolving field of AI.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white p-6 rounded-lg shadow-md">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1dCjSLKTPXs?si=S0w3JTLYl3EUfi5a"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full aspect-video rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden animate-fadeInUp shadow-md rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">What You'll Gain</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 gap-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden animate-fadeInUp shadow-md rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Ready to Start Your AI Journey?</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-6">
                <p className="text-center text-lg">Join our AI Bootcamp and transform your career in tech!</p>
                <div className="space-y-4 w-full max-w-xs">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 w-full"
                    onClick={() => window.open("https://wa.me/917601003069", "_blank")}
                  >
                    <PhoneIcon className="mr-2 h-5 w-5" /> Contact Us on WhatsApp
                  </Button>
                  <p className="text-center text-sm">
                    Or email us at:{" "}
                    <a href="mailto:skilledguruofficial@gmail.com" className="underline hover:text-blue-200">
                      skilledguruofficial@gmail.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 animate-fadeInUp">Course Contents</h2>

          <div className="space-y-6 mb-12">
            {courseSections.map((section, index) => (
              <CourseSection key={index} section={section} index={index} />
            ))}
          </div>

          <Card className="overflow-hidden animate-fadeInUp shadow-md rounded-xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Meet Your Instructor</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center gap-6 justify-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-purple-200">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sanju.jpg-14d3rJf0jwoh3zWkJfT9X9JDHCu6uv.jpeg"
                  alt="M Sanjay Kumar Reddy"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  M Sanjay Kumar Reddy
                </h3>
                <p className="text-gray-600 mb-2 text-lg">Founder & Lead Instructor</p>
                <p className="text-gray-600 mb-1">2+ years of experience in Teaching AI</p>
                <p className="text-gray-600 mb-4">Backend Developer & Scrum Master</p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href="https://www.instagram.com/_04_sanju__/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manyamsanjaykumarreddy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/ManyamSanjayKumarReddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-6 h-6" />
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

