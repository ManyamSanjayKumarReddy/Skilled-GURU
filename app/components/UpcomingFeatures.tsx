import { Users, Box, BookOpen, MessageSquare } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Mock Interviews",
    description: "Practice with domain-specific mock interviews to boost your career",
  },
  {
    icon: Box,
    title: "Dragger",
    description: "Our upcoming SaaS product designed to revolutionize your workflow",
  },
  {
    icon: BookOpen,
    title: "AI Engineer Course",
    description: "Join our comprehensive AI Engineer Course starting soon",
  },
  {
    icon: MessageSquare,
    title: "Career Guidance Chatbot",
    description: "Get personalized career advice with our AI-powered chatbot",
  },
]

export default function UpcomingFeatures() {
  return (
    <section id="mock-interviews" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Exciting Features Coming Soon
        </h2>
        <div className="relative bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 opacity-30 rounded-3xl"></div>
          <div className="relative grid grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-white hover:bg-opacity-50"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-3 mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-cols-2 pointer-events-none">
            <div className="border-r border-b border-gray-400 border-dashed"></div>
            <div className="border-b border-gray-400 border-dashed"></div>
            <div className="border-r border-gray-400 border-dashed"></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

