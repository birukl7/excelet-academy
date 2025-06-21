"use client"

import Link from "next/link"
import {  Youtube, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
)

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
              <ExceletLogo className="w-8 h-8 text-purple-600" />
              <span className="text-xl font-bold">Excelet Academy</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your all-in-one learning hub. From school subjects to real-world skills, we help you learn smarter,
              faster, and better.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.youtube.com/channel/UCKfy55R9h20uJvEJ5_uyN6Q">
                <Button
                variant="outline"
                size="sm"
                className="bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white transition-all duration-300 hover:scale-105 hover:px-6 hover:text-white cursor-pointer"
              >
                <Youtube className="w-4 h-4 mr-2" />
                YouTube
              </Button>
              </a>

              <a href="https://t.me/exceletacademy">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:text-white bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white transition-all duration-300 hover:scale-105 hover:px-6 cursor-pointer"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Telegram
                </Button>
              </a>


              <a href="https://www.tiktok.com/@exceletacademy">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black hover:bg-gray-800 border-gray-700 hover:border-gray-600 text-white transition-all duration-300 hover:scale-105 hover:px-6  hover:text-white cursor-pointer"
                >
                  <TikTokIcon className="w-4 h-4 mr-2" />
                  TikTok
                </Button>
              </a>

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
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                        {/* Placeholder for Google Play icon - you can upload your own */}
                        <Image alt="google-play-icon" src={"/google-play-brands.svg"} width={'50'} height={'50'}/>
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
                      <div className="w-8 h-8 flex items-center justify-center">
                      <Image alt="apple-app-store-icon" src={"/app-store-brands.svg"} width={'50'} height={'50'}/>
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
