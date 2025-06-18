"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Youtube, Send } from "lucide-react"
import { gsap } from "gsap"
import Image from "next/image"

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
)

export default function HeroSection() {
  useEffect(() => {
    // Animate hero graphics
    gsap.set(".floating-element", { opacity: 0, scale: 0 })
    gsap.set(".main-circle", { opacity: 0, scale: 0.8 })
    gsap.set(".learning-icon", { opacity: 0, y: 20 })

    const tl = gsap.timeline()

    // Main circle entrance
    tl.to(".main-circle", {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "back.out(1.7)",
    })

    // Floating elements entrance
    tl.to(
      ".floating-element",
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.8",
    )

    // Learning icons entrance
    tl.to(
      ".learning-icon",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.4",
    )

    // Continuous floating animations
    gsap.to(".float-1", {
      y: -20,
      rotation: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })

    gsap.to(".float-2", {
      y: -15,
      rotation: -10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 0.5,
    })

    gsap.to(".float-3", {
      y: -25,
      rotation: 20,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 1,
    })

    gsap.to(".learning-icon", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.3,
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-[60px]">
              Welcome to <span className="text-white">Excelet Academy</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 lg:mb-12 text-gray-100 max-w-3xl leading-[30px]">
              Your all-in-one learning hub. From school subjects to real-world skills, we help you learn smarter,
              faster, and better.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 lg:mb-12">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-sm sm:text-base cursor-pointer transition-all duration-300 hover:px-8 hover:text-white"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                YouTube
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:text-white bg-white/10 border-white/20 text-white hover:bg-white/20 text-sm sm:text-base cursor-pointer transition-all duration-300 hover:px-8"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Telegram
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-sm sm:text-base cursor-pointer transition-all duration-300 hover:px-8 hover:text-white"
              >
                <TikTokIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                TikTok
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              {/* Google Play Button */}
              <div className="relative group cursor-pointer w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-black/80 hover:bg-black border border-white/20 rounded-lg px-6 py-4 transition-all duration-300 group-hover:scale-105 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center">
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
              <div className="relative group cursor-pointer w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-black/80 hover:bg-black border border-white/20 rounded-lg px-6 py-4 transition-all duration-300 group-hover:scale-105 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10  flex items-center justify-center">
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

          {/* Right side - Animated Graphics */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Main circle - centered */}
              <div className="main-circle absolute w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-white/20 to-white/5 rounded-full backdrop-blur-sm border border-white/20"></div>

              {/* Floating elements - positioned relative to center */}
              <div className="floating-element float-1 absolute top-8 sm:top-12 right-8 sm:right-12 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl"></div>
              <div className="floating-element float-2 absolute top-24 sm:top-32 left-8 sm:left-12 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-2xl"></div>
              <div className="floating-element float-3 absolute bottom-16 sm:bottom-20 right-4 sm:right-8 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl shadow-2xl"></div>

              {/* Book/Learning icons - centered positioning */}
              <div className="learning-icon absolute top-16 sm:top-20 left-16 sm:left-20 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl">📚</span>
              </div>
              <div className="learning-icon absolute bottom-24 sm:bottom-32 left-20 sm:left-24 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-xl sm:text-2xl">🎓</span>
              </div>
              <div className="learning-icon absolute top-32 sm:top-40 right-0 sm:right-4 w-14 h-14 sm:w-18 sm:h-18 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-lg sm:text-xl">⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
