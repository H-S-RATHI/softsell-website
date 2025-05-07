"use client"
import React from "react"
import { motion } from "framer-motion"
import { Upload, DollarSign, CreditCard } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload License",
      description: "Securely upload your software license details through our easy-to-use portal.",
      icon: Upload,
      color: "bg-teal-500",
    },
    {
      title: "Get Valuation",
      description: "Our AI-powered system analyzes market data to provide you with the best possible valuation.",
      icon: DollarSign,
      color: "bg-emerald-500",
    },
    {
      title: "Get Paid",
      description: "Accept our offer and receive payment within 48 hours via your preferred payment method.",
      icon: CreditCard,
      color: "bg-teal-500",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Our streamlined process makes selling your software licenses quick and hassle-free.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="bg-background rounded-xl p-8 shadow-sm border relative"
            >
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white`}>
                <step.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rotate-45 border-t border-r border-border bg-background"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
