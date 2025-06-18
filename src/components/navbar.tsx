"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"

const navItems = [
  { name: "Courses", href: "courses" },
  { name: "Exams", href: "exams" },
  { name: "Testimonials", href: "testimonials" },
  { name: "Screenshots", href: "screenshots" },
]

// Custom Logo Component
const ExceletLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path
      style={{
        strokeWidth: "0px",
      }}
      d="M6.11,8.86H1.89l.66-1.61h4.21l-.66,1.61ZM4.2,3.25l-.68,1.65h4.21l.68-1.65h-4.21ZM13.1,8.64c-.21.14-.47.28-.79.41-.26.11-.5.18-.71.23l1.48,3.52h1.76l-1.74-4.16ZM2.51,7.25h4.26M11.44,7.94,15.55,5.15l-2.33.4c-.12.02-.17.16-.09.25l.36.43c-.3.34-1,1.02-2.13,1.4-1.05.35-1.95.27-2.4.19l.11-.27.07-.18.86-2.03.97,2.19c.23-.06.5-.15.78-.29.26-.12.48-.25.66-.37-.52-1.24-.99-2.39-1.52-3.62h-1.81l-.68,1.65-.96,2.35-.66,1.61-.84,2.04h1.77l.54-1.39.11-.26c.56.13,1.69.31,3.04-.06,1.62-.44,2.61-1.42,3-1.84.08.1.16.19.25.29.08.09.22.06.26-.05l.36-1,.44-1.23c.04-.11-.06-.22-.17-.2ZM12.39,11.13H.96l-.69,1.67h12.81l-.69-1.67Z"
    />
  </svg>
)

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
            <ExceletLogo className="w-8 h-8 text-purple-600" />
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
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:px-5 cursor-pointer ${
                  activeSection === item.href ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
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
          <Button className="hidden md:flex bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white cursor-pointer transition-all duration-300 hover:px-8">
            <Download className="w-4 h-4 mr-2" />
            Install The App
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
                  className={`text-left px-3 py-2 text-sm font-medium transition-all duration-300 hover:px-5 cursor-pointer ${
                    activeSection === item.href ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full cursor-pointer transition-all duration-300 hover:py-3">
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
