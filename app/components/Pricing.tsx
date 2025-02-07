"use client"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { plans } from "@/utils/pricingData"

export default function Pricing() {
  return (
    <section className="py-20 bg-white border border-gray-200 rounded-lg">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Choose Your Learning Journey</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Select the plan that best fits your learning goals. Each tier builds upon the previous, offering more
            advanced content and exclusive perks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`
                  relative bg-white rounded-xl overflow-hidden transition-all duration-300
                  hover:shadow-xl border-2 flex flex-col
                  ${plan.highlight ? "border-blue-500 shadow-lg" : "border-gray-200"}
                `}
              >
                {plan.tag && (
                  <div
                    className={`absolute top-4 left-1/2 transform -translate-x-1/2 ${plan.highlight ? "bg-blue-500" : "bg-green-500"} text-white px-4 py-1 rounded-full text-sm`}
                  >
                    {plan.tag}
                  </div>
                )}
                <div className="p-6 pt-12 flex-grow">
                  <div className="flex justify-center mb-4">
                    <plan.icon className={`w-12 h-12 ${plan.highlight ? "text-blue-500" : "text-gray-600"}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-left mb-2">Included Sections:</h4>
                      <ul className="text-left space-y-2">
                        {plan.sections.map((section, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{section}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-left mb-2">Additional Perks:</h4>
                      <ul className="text-left space-y-2">
                        {plan.perks.map((perk, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 mt-auto">
                  <Button
                    className={`w-full ${
                      plan.highlight ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    Launching Soon
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

