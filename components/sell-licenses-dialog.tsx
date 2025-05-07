"use client"
import React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog"
import { Button } from "./ui/button"
import { Upload, DollarSign, CreditCard, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface SellLicensesDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function SellLicensesDialog({ isOpen, onClose }: SellLicensesDialogProps) {
  const [currentStep, setCurrentStep] = React.useState(0)

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

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Final step completed
      onClose()
    }
  }

  const handleClose = () => {
    setCurrentStep(0)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto p-4 sm:p-5">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-xl font-bold text-center">Sell Your Licenses</DialogTitle>
          <DialogDescription className="text-center text-sm">
            Three simple steps to sell your software licenses
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-between mb-3 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center z-10">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-colors ${
                  index <= currentStep ? step.color : "bg-muted"
                } text-white`}
              >
                <step.icon size={16} />
              </div>
              <span className="text-xs font-medium">{step.title}</span>
            </div>
          ))}
          {/* Progress line */}
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-muted">
            <div
              className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="py-2">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-3">
              <div
                className={`${steps[currentStep].color} w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto text-white`}
              >
                {React.createElement(steps[currentStep].icon, { size: 20 })}
              </div>
              <h3 className="text-lg font-semibold mb-1">{steps[currentStep].title}</h3>
              <p className="text-muted-foreground text-sm">{steps[currentStep].description}</p>
            </div>

            {currentStep === 0 && (
              <div className="space-y-2">
                <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-4 text-center cursor-pointer hover:border-teal-500/50 transition-colors">
                  <Upload className="mx-auto mb-1 text-muted-foreground" size={18} />
                  <p className="text-sm">Drag and drop your license files here</p>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-2">
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-center mb-2 text-sm">Our AI is analyzing your license value...</p>
                  <div className="h-2 bg-muted overflow-hidden rounded-full">
                    <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-2">
                <div className="bg-muted/30 rounded-lg p-3">
                  <h4 className="font-medium mb-2 text-sm">Select your preferred payment method:</h4>
                  <div className="space-y-1">
                    <div className="flex items-center p-2 border rounded-lg cursor-pointer hover:border-teal-500 transition-colors">
                      <input type="radio" name="payment" id="bank" className="mr-2" defaultChecked />
                      <label htmlFor="bank" className="text-sm">Bank Transfer</label>
                    </div>
                    <div className="flex items-center p-2 border rounded-lg cursor-pointer hover:border-teal-500 transition-colors">
                      <input type="radio" name="payment" id="paypal" className="mr-2" />
                      <label htmlFor="paypal" className="text-sm">PayPal</label>
                    </div>
                    <div className="flex items-center p-2 border rounded-lg cursor-pointer hover:border-teal-500 transition-colors">
                      <input type="radio" name="payment" id="crypto" className="mr-2" />
                      <label htmlFor="crypto" className="text-sm">Cryptocurrency</label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <div className="flex justify-between pt-1">
          <Button variant="outline" onClick={handleClose} size="sm">
            Cancel
          </Button>
          <Button onClick={handleNext} size="sm" className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600">
            {currentStep < steps.length - 1 ? (
              <>
                Next <ArrowRight size={14} className="ml-1" />
              </>
            ) : (
              "Complete"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}