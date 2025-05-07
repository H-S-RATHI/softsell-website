"use client"

import { motion } from "framer-motion"
import { Shield, Clock, TrendingUp, Award } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      title: "Secure Transactions",
      description: "Bank-level security protocols protect your data and financial transactions.",
      icon: Shield,
    },
    {
      title: "Fast Processing",
      description: "Get valuations within hours and payment within 48 hours of acceptance.",
      icon: Clock,
    },
    {
      title: "Best Market Rates",
      description: "Our extensive network of buyers ensures you get the highest value for your licenses.",
      icon: TrendingUp,
    },
    {
      title: "Certified Expertise",
      description: "Our team of software licensing experts ensures compliance and maximum value.",
      icon: Award,
    },
  ]

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            SoftSell offers unmatched benefits for businesses looking to monetize their unused software licenses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="bg-muted/50 rounded-xl p-6 border hover:shadow-md transition-shadow"
            >
              <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
