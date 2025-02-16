import { BookOpen, Briefcase, BotIcon as Robot, Video } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Courses & Training",
    description: "Expert-led training in AI, Data Science, Web Development, and more",
  },
  {
    icon: Robot,
    title: "AI-Powered Mock Interviews",
    description: "Real-world technical and behavioral assessments using AI",
  },
  {
    icon: Briefcase,
    title: "Placement Training",
    description: "Structured programs to increase job placement rates for universities",
  },
  {
    icon: Video,
    title: "Live Industry Sessions",
    description: "Hands-on exposure to the latest technologies with industry leaders",
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient">What Skilled GURU Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

