import { Globe, Smartphone, Share2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    icon: Globe,
    title: "LearnVerse",
    description: "The Self-Learning Universe",
    features: [
      "Automated Resume Builder",
      "AI-Powered Mock Interviews",
      "Smart Job Recommendations",
      "AI Knowledge Base & Skill Insights",
    ],
  },
  {
    icon: Smartphone,
    title: "UNIFY",
    description: "Distraction-Free Social Media for Learning",
    features: [
      "Educational content from Instagram & Facebook",
      "Filters out memes and entertainment",
      "Focuses on tech and news-related posts",
      "Boosts productivity and learning",
    ],
  },
  {
    icon: Share2,
    title: "Automedia",
    description: "AI-Powered Social Media Automation",
    features: [
      "Automates content creation and scheduling",
      "Optimizes posts and generates captions",
      "Analyzes trends for data-driven growth",
      "Boosts reach and engagement efficiently",
    ],
  },
]

export default function FlagshipProducts() {
  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient">Our Flagship Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="card group hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mt-4">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-2 text-blue-500">•</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

