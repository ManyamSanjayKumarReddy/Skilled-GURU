"use client"

import { Github, Linkedin, Instagram } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Founder() {
  const [isHovered, setIsHovered] = useState(false)

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/_04_sanju__/",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/manyamsanjaykumarreddy/",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Github,
      href: "https://github.com/ManyamSanjayKumarReddy",
      gradient: "from-gray-700 to-gray-800",
    },
  ]

  return (
    <section
      id="founder"
      className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient">
          The Journey Behind Skilled GURU
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="card group p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div
                className="relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  className={`
                  relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-purple-200
                  transform transition-all duration-500
                  ${isHovered ? "scale-105 rotate-3" : ""}
                `}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sanju.jpg-14d3rJf0jwoh3zWkJfT9X9JDHCu6uv.jpeg"
                    alt="Manyam Sanjay Kumar Reddy"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div
                  className={`
                  absolute inset-0 rounded-full
                  bg-gradient opacity-0
                  transition-all duration-500 blur-2xl
                  ${isHovered ? "opacity-20 scale-110" : ""}
                `}
                ></div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-gradient">Manyam Sanjay Kumar Reddy</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Founder & Lead Instructor</p>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                  "In my college days, learning advanced courses required anywhere from ₹30,000 to ₹2,00,000. Not every
                  student, including myself, could afford such expensive training. I realized that knowledge should be
                  accessible and affordable for everyone. This drove me to build Skilled GURU, a platform where students
                  can learn cutting-edge technologies, gain hands-on experience, and use the best AI tools without
                  financial barriers. My goal is simple: to empower students with real skills that lead to real jobs."
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        p-2 rounded-full bg-gradient-to-r ${social.gradient}
                        text-white transform transition-all duration-300
                        hover:scale-110 hover:shadow-lg hover:-translate-y-1
                      `}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

