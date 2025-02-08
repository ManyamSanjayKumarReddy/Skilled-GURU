"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    query: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const { data, error } = await supabase.from("contact_submissions").insert([formData])

      if (error) throw error

      setSubmitMessage("Thank you for your submission!")
      setFormData({ name: "", email: "", contactNumber: "", query: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="mb-4">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-8a1 1 0 011 1v3a1 1 0 11-2 0V9a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Monday - Friday, 9am - 5pm
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  skilledguruofficial@gmail.com
                </li>
              </ul>
              <Button
                className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                onClick={() => window.open("https://whatsapp.com/channel/0029VakIQmhE50UnnswUAm0w", "_blank")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
                Join our WhatsApp Channel
              </Button>
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                    Contact Number
                  </label>
                  <Input
                    id="contactNumber"
                    type="tel"
                    name="contactNumber"
                    placeholder="Your Phone Number"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="query" className="block text-sm font-medium text-gray-700">
                    Your Query
                  </label>
                  <Textarea
                    id="query"
                    name="query"
                    placeholder="How can we help you?"
                    value={formData.query}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </Button>
              </form>
              {submitMessage && (
                <p
                  className={`mt-4 text-center ${submitMessage.includes("error") ? "text-red-600" : "text-green-600"}`}
                >
                  {submitMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

