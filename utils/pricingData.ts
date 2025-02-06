import { Book, Brain, Rocket, Star } from "lucide-react"

export const plans = [
  {
    name: "Beginner",
    icon: Book,
    description: "Start your AI journey",
    price: "₹199",
    sections: ["Python & AI Development Basics"],
    perks: ["No other extra perks"],
    highlight: false,
    tag: null,
  },
  {
    name: "Intermediate",
    icon: Brain,
    description: "Level up your skills",
    price: "₹499",
    sections: ["Python & AI Development Basics", "Machine Learning & Deep Learning Essentials"],
    perks: ["Weekly Doubt Clarification Sessions", "Access to Profile Building Sessions"],
    highlight: false,
    tag: "Suggested Plan",
  },
  {
    name: "Advanced",
    icon: Rocket,
    description: "Master AI development",
    price: "₹799",
    sections: ["Python & AI Development Basics", "Machine Learning & Deep Learning Essentials", "NLP for AI Agents"],
    perks: [
      "Weekly Doubt Clarification Sessions",
      "Access to Profile Building Sessions",
      "Industry Expert Sessions",
      "24/7 Chatbot Premium Support",
      "9 AM to 5 PM Weekday WhatsApp Text Support",
    ],
    highlight: true,
    tag: "Most Popular",
  },
  {
    name: "Pro Developer",
    icon: Star,
    description: "Become an AI expert",
    price: "₹1299",
    sections: [
      "Python & AI Development Basics",
      "Machine Learning & Deep Learning Essentials",
      "NLP for AI Agents",
      "Multi-Agent Systems",
      "Deploying AI Agents",
    ],
    perks: [
      "All Advanced plan features",
      "Money Making Strategy Sessions",
      "AI Agents Discussion Sessions",
      "Clarity through Call Support",
      "Beta Access to All Our Products",
      "Internship Opportunities",
    ],
    highlight: false,
    tag: null,
  },
]

