import { Button } from "@/components/ui/button"

export default function Chatbot() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Career Guidance Chatbot</h2>
        <p className="text-xl text-gray-600 mb-8">Get personalized career advice with our AI-powered chatbot</p>
        <Button size="lg">Chat Now</Button>
      </div>
    </section>
  )
}

