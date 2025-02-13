"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Chatbot from "./Chatbot"

export default function ChatbotIcon() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 h-[500px] overflow-hidden">
          <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
            <h3 className="font-bold">Skilled GURU Assistant</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close chatbot">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Chatbot />
        </div>
      ) : (
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
          onClick={() => setIsOpen(true)}
          aria-label="Open chatbot"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

