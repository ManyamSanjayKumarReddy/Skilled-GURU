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
    title: "AI Bootcamp: From Data Science to Autonomous Agents",
    description: "Join our comprehensive AI Bootcamp - Enrollments Open!",
    status: "launched",
  },
  {
    icon: MessageSquare,
    title: "Career Guidance Chatbot",
    description: "Get personalized career advice with our AI-powered chatbot",
  },
]

export default function UpcomingFeatures() {
  return (
    <section id="upcoming-features" className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Exciting Features Coming Soon
        </h2>
        <div className="relative bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 opacity-30 rounded-3xl"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-white hover:bg-opacity-50 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-2 md:p-3 mr-3 md:mr-4">
                      <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">{feature.title}</h3>
                  </div>
                  {feature.status === "launched" && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded animate-pulse">
                      Launched
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
          {/* Dashed grid effect */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 pointer-events-none">
            <div className="border-b md:border-r border-gray-400 border-dashed"></div>
            <div className="border-b border-gray-400 border-dashed hidden md:block"></div>
            <div className="border-r border-gray-400 border-dashed hidden md:block"></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

