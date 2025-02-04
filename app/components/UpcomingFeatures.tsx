import { Users, BookOpen, MessageSquare, Briefcase } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Mock Interviews",
    description: "Practice with domain-specific mock interviews to boost your career",
  },
  {
    icon: BookOpen,
    title: "Mastering Agentic AI",
    description: "Build & Deploy Your Own AI Agents - Enrollments Open!",
    status: "launched",
  },
  {
    icon: MessageSquare,
    title: "Career Guidance Chatbot",
    description: "Get personalized career advice with our AI-powered chatbot",
  },
  {
    icon: Briefcase,
    title: "AI-Powered Placement Training Platform",
    description: "Enhance your skills and increase your chances of landing your dream job",
  },
]

export default function UpcomingFeatures() {
  return (
    <section id="upcoming-features" className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Exciting Features Coming Soon
        </h2>
        <div className="relative bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 opacity-30 rounded-3xl"></div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-white hover:bg-opacity-50 transform hover:-translate-y-1 m-1"
              >
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-2 mr-3">
                      <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800">{feature.title}</h3>
                  </div>
                  {feature.status === "launched" && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded animate-pulse">
                      Launched
                    </span>
                  )}
                </div>
                <p className="text-sm md:text-base text-gray-600 ml-11">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="absolute inset-6 md:inset-8 lg:inset-10 grid grid-cols-1 sm:grid-cols-2 pointer-events-none">
            <div className="border-b sm:border-r border-gray-400 border-dashed"></div>
            <div className="border-b border-gray-400 border-dashed hidden sm:block"></div>
            <div className="border-r border-gray-400 border-dashed hidden sm:block"></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

