import { Video, Users, Brain, BotIcon as Robot } from "lucide-react"

const features = [
  {
    icon: Video,
    title: "Latest Tech Videos",
    description: "Stay updated with our videos on AI and emerging technologies",
    gradient: "from-red-400 to-pink-400",
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Connect with industry professionals and expand your network",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: Brain,
    title: "Cutting-edge Content",
    description: "Access the latest insights in AI and emerging technologies",
    gradient: "from-purple-400 to-indigo-400",
  },
  {
    icon: Robot,
    title: "Personalized Learning",
    description: "Tailored learning paths to accelerate your tech career",
    gradient: "from-green-400 to-teal-400",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          What Skilled GURU Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-white border-opacity-30"
            >
              <div
                className={`rounded-full w-16 h-16 flex items-center justify-center mb-4 bg-gradient-to-r ${feature.gradient}`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

