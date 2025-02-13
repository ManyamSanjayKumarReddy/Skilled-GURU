import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai"
import { NextResponse } from "next/server"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API!)

const MODEL_NAME = "gemini-pro"
const API_KEY = process.env.GOOGLE_GEMINI_API!

export async function POST(req: Request) {
  try {
    const { messages, qaData } = await req.json()

    const model = genAI.getGenerativeModel({ model: MODEL_NAME })

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    }

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ]

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: messages.slice(0, -1).map((m: any) => ({
        role: m.role,
        parts: m.content,
      })),
    })

    const latestMessage = messages[messages.length - 1].content

    // Implement RAG system
    const relevantQA = qaData.filter(
      (qa: any) =>
        qa.question.toLowerCase().includes(latestMessage.toLowerCase()) ||
        qa.answer.toLowerCase().includes(latestMessage.toLowerCase()),
    )

    let context = "You are a helpful assistant for Skilled GURU, an AI and emerging tech education platform. "
    context += "Provide information about courses, registration, and enrollment. Be concise and friendly. "

    if (relevantQA.length > 0) {
      context += "Use the following relevant information to inform your responses:\n\n"
      relevantQA.forEach((qa: any) => {
        context += `Q: ${qa.question}\nA: ${qa.answer}\n\n`
      })
    } else {
      context +=
        "No specific information found in our database. Please provide a general response based on your knowledge of Skilled GURU."
    }

    const result = await chat.sendMessage(context + "\n\nUser query: " + latestMessage)
    const response = result.response
    const text = response.text()

    return NextResponse.json({ content: text })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

