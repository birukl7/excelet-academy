"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { GraduationCap, Download, Menu, X } from "lucide-react"

const navItems = [
  { name: "Courses", href: "courses" },
  { name: "Exams", href: "exams" },
  { name: "Testimonials", href: "testimonials" },
  { name: "Screenshots", href: "screenshots" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Excelet Academy
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-purple-600 cursor-pointer ${
                  activeSection === item.href ? "text-purple-600" : "text-gray-700"
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Install Button */}
          <Button className="hidden md:flex bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white cursor-pointer">
            <Download className="w-4 h-4 mr-2" />
            Install App
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left px-3 py-2 text-sm font-medium transition-colors hover:text-purple-600 cursor-pointer ${
                    activeSection === item.href ? "text-purple-600" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full cursor-pointer">
                <Download className="w-4 h-4 mr-2" />
                Install App
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
