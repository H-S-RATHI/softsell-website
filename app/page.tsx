import React from "react"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import ChatWidget from "@/components/chat-widget"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
      <Footer />
    </main>
  )
}
