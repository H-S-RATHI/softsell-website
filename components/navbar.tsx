"use client"

import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"
import SellLicensesDialog from "./sell-licenses-dialog"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
            SoftSell
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link href="#why-choose-us" className="text-foreground/80 hover:text-foreground transition-colors">
            Why Choose Us
          </Link>
          <Link href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
            Testimonials
          </Link>
          <Button 
            variant="default" 
            className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
            onClick={() => setIsDialogOpen(true)}
          >
            Sell My Licenses
          </Button>
          <Link href="#contact">
            <Button variant="outline">Get Started</Button>
          </Link>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#how-it-works"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#why-choose-us"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              href="#testimonials"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Button 
              variant="default" 
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-500"
              onClick={() => {
                setIsMenuOpen(false);
                setIsDialogOpen(true);
              }}
            >
              Sell My Licenses
            </Button>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Sell Licenses Dialog */}
      <SellLicensesDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </header>
  )
}
