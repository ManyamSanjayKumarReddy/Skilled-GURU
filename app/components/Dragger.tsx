import { Button } from "@/components/ui/button"

export default function Dragger() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Introducing Dragger</h2>
        <p className="text-xl text-gray-600 mb-8">Our upcoming SaaS product designed to revolutionize your workflow</p>
        <Button size="lg">Learn More</Button>
      </div>
    </section>
  )
}

