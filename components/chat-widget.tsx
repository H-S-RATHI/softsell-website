"use client"
import React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card } from "./ui/card"
import { MessageCircle, X, Send, Bot } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// This would normally use the Gemini API, but for this demo we'll use a simple mock
const mockGeminiResponse = async (message: string) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const responses: Record<string, string> = {
    "how do i sell my license":
      'To sell your license, simply click the "Sell My Licenses" button at the top of the page and follow the 3-step process: upload your license details, review our valuation, and accept payment.',
    "what types of licenses do you buy":
      "We purchase a wide range of software licenses including enterprise software, cloud subscriptions, productivity suites, design tools, development environments, and more. If you're unsure, just ask us!",
    "how long does payment take":
      "Once you accept our valuation offer, you'll receive payment within 48 hours via your preferred payment method (bank transfer, PayPal, or crypto).",
    "is my data secure":
      "We use bank-level encryption and security protocols to protect all your data. We're also compliant with GDPR, CCPA, and other privacy regulations.",
    "how do you determine value":
      "Our AI-powered valuation system analyzes current market rates, demand trends, and remaining license validity to offer you the best possible price for your software licenses.",
  }

  // Default response for unknown questions
  let response =
    "I don't have specific information about that. Please contact our support team for more details or ask me about how to sell licenses, payment timelines, or supported license types."

  // Check if the message contains any of our keywords
  for (const [keyword, answer] of Object.entries(responses)) {
    if (message.toLowerCase().includes(keyword)) {
      response = answer
      break
    }
  }

  return response
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi there! How can I help you with selling your software licenses today?", isUser: false },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const exampleQuestions = [
    "How do I sell my license?",
    "What types of licenses do you buy?",
    "How long does payment take?",
    "Is my data secure?",
    "How do you determine value?",
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSend = async () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = inputValue.trim()
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }])
    setInputValue("")
    setIsLoading(true)

    try {
      // Get AI response from mock function
      const response = await mockGeminiResponse(userMessage)
      setMessages((prev) => [...prev, { text: response, isUser: false }])
    } catch (error) {
      console.error("Error getting response:", error)
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I encountered an error. Please try again later.",
          isUser: false,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleExampleClick = (question: string) => {
    setInputValue(question)
    handleSend()
  }

  return (
    <>
      {/* Chat toggle button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-md max-h-[80vh]"
          >
            <Card className="overflow-hidden shadow-xl border-2 border-teal-500/20 flex flex-col max-h-[81vh]">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-4 text-white flex items-center">
                <Bot size={24} className="mr-2" />
                <div>
                  <h3 className="font-semibold">SoftSell Assistant</h3>
                  <p className="text-xs opacity-80">Powered by AI</p>
                </div>
              </div>

              {/* Messages */}
              <div className="max-h-[90vh] h-[450px] overflow-y-auto p-4 bg-muted/30">
                {messages.map((message, index) => (
                  <div key={index} className={`mb-4 flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.isUser ? "bg-teal-500 text-white" : "bg-background border"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start mb-4">
                    <div className="max-w-[80%] rounded-lg p-3 bg-background border">
                      <div className="flex space-x-2">
                        <div
                          className="w-2 h-2 rounded-full bg-teal-500 animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-teal-500 animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-teal-500 animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Example questions */}
              {messages.length <= 2 && (
                <div className="p-3 bg-muted/20 border-t border-b">
                  <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {exampleQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => handleExampleClick(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-3 border-t flex items-center">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                />
                <Button onClick={handleSend} size="icon" className="ml-2" disabled={isLoading || !inputValue.trim()}>
                  <Send size={18} />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
