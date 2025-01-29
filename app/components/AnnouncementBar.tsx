"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 px-4 relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-center animate-pulse">
          <Link href="/course" className="text-lg font-bold hover:underline">
            New AI Bootcamp: From Data Science to Autonomous Agents - Enroll Now!
          </Link>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
      >
        <X size={18} />
      </button>
    </div>
  )
}

