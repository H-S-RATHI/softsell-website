"use client"
import React, { useState } from "react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import SellLicensesDialog from "./sell-licenses-dialog"

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Maximize the Value of Your Unused Software Licenses
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Turn your idle software assets into cash. SoftSell helps businesses sell unused licenses quickly and at
              the best market rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="text-lg" onClick={() => setIsDialogOpen(true)}>
                Sell My Licenses
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Get a Quote
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-1">
              <div className="bg-background rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/dashboard-image.svg"
                  alt="Software license management dashboard"
                  className="w-full h-auto dark:hidden"
                />
                <img
                  src="/dashboard-image-dark.svg"
                  alt="Software license management dashboard"
                  className="w-full h-auto hidden dark:block"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
      
      {/* Sell Licenses Dialog */}
      <SellLicensesDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  )
}
