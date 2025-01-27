"use client";

import { Button } from "@/components/ui/button"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Boost Your Tech Career?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Join Skilled GURU and stay ahead in the rapidly evolving world of technology.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
          onClick={() => window.open("https://whatsapp.com/channel/0029VakIQmhE50UnnswUAm0w", "_blank")}
        >
          <WhatsappIcon className="w-5 h-5" />
          Join our WhatsApp Channel
        </Button>
      </div>
    </section>
  )
}

