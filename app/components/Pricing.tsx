import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Beginner",
    price: "₹199",
    description: "Get started with Python & AI Development Basics",
    features: ["Python & AI Development Basics", "No other extra perks"],
  },
  {
    name: "Intermediate",
    price: "₹499",
    description: "Includes Beginner plan plus Machine Learning and Deep Learning Essentials",
    features: [
      "All Beginner plan features",
      "Machine Learning and Deep Learning Essentials",
      "Weekly Doubt Clarification Sessions",
      "Access to Profile Building Sessions",
    ],
  },
  {
    name: "Advanced",
    price: "₹799",
    description: "Includes Intermediate plan plus NLP for AI Agents",
    features: [
      "All Intermediate plan features",
      "NLP for AI Agents",
      "Industry Expert Sessions",
      "24/7 Chatbot Premium Support",
      "9 AM to 5 PM Weekday WhatsApp Text Support",
    ],
  },
  {
    name: "Pro Developer",
    price: "₹1299",
    description: "Full access to all course content and exclusive perks",
    features: [
      "All Advanced plan features",
      "Multi-Agent Systems and Deploying AI Agents",
      "Money Making Strategy Sessions",
      "AI Agents Discussion Sessions",
      "Clarity through Call Support",
      "Beta Access to All Our Products",
      "Internship Opportunities",
    ],
  },
]

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Choose Your Learning Path
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl sm:text-4xl font-bold mb-4">{plan.price}</p>
                <p className="text-sm sm:text-base text-gray-600 mb-6">{plan.description}</p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base">
                  Choose Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

