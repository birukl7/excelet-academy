"use client"

import Link from "next/link"
import Image from "next/image"
import { GraduationCap, Youtube, Send, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Excelet Academy</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your all-in-one learning hub. From school subjects to real-world skills, we help you learn smarter,
              faster, and better.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                className="bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Youtube className="w-4 h-4 mr-2" />
                YouTube
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Send className="w-4 h-4 mr-2" />
                Telegram
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-black hover:bg-gray-800 border-gray-700 hover:border-gray-600 text-white transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Music className="w-4 h-4 mr-2" />
                TikTok
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("courses")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer hover:underline"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("exams")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer hover:underline"
                >
                  Exams
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer hover:underline"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("screenshots")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer hover:underline"
                >
                  Screenshots
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer hover:underline"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <div className="space-y-3">
              {/* Google Play Button */}
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-black hover:bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-green-400 to-yellow-400 rounded-lg flex items-center justify-center">
                        {/* Placeholder for Google Play icon - you can upload your own */}
                        <div className="w-5 h-5  rounded-sm flex items-center justify-center">
                          <span className="text-xs font-bold text-gray-800"><Image src="/google-play-brands.svg" alt="App Store" width={'50'} height={'50'}/></span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-xs text-gray-300 uppercase tracking-wide">Get it on</div>
                      <div className="text-lg font-bold text-white leading-tight">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App Store Button */}
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-black hover:bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                        {/* Placeholder for Apple icon - you can upload your own */}
                        <div className="w-5 h-5  rounded-sm flex items-center justify-center">
                          <span className="text-xs font-bold text-gray-800"><Image src="/app-store-brands.svg" alt="App Store" width={'50'} height={'50'} /></span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-xs text-gray-300 uppercase tracking-wide">Download on the</div>
                      <div className="text-lg font-bold text-white leading-tight">App Store</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Excelet Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
