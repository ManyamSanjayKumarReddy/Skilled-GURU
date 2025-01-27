import { Button } from "@/components/ui/button"

export default function AICourse() {
  return (
    <section id="course" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">AI Engineer Course</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our first-ever comprehensive AI Engineer Course starting March 1st
        </p>
        <p className="text-lg text-gray-600 mb-8">Registrations opening soon!</p>
        <Button size="lg">Get Notified</Button>
      </div>
    </section>
  )
}

