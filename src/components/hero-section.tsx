"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import Image from "next/image"

// Custom TikTok Icon Component


const YouTubeLogo = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M329930 100020s-3254-22976-13269-33065c-12691-13269-26901-13354-33397-14124-46609-3396-116614-3396-116614-3396h-122s-69973 0-116608 3396c-6522 793-20712 848-33397 14124C6501 77044 3316 100020 3316 100020S-1 126982-1 154001v25265c0 26962 3315 53979 3315 53979s3254 22976 13207 33082c12685 13269 29356 12838 36798 14254 26685 2547 113354 3315 113354 3315s70065-124 116675-3457c6522-770 20706-848 33397-14124 10021-10089 13269-33090 13269-33090s3319-26962 3319-53979v-25263c-67-26962-3384-53979-3384-53979l-18 18-2-2zM132123 209917v-93681l90046 46997-90046 46684z" fill="red"/></svg>
)

const Telegram = ({className} : {className? : string}) => (
<svg className={className} xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><defs><linearGradient id="prefix__a" gradientUnits="userSpaceOnUse" x1="256" y1="3.84" x2="256" y2="512"><stop offset="0" stop-color="#2AABEE"/><stop offset="1" stop-color="#229ED9"/></linearGradient></defs><circle fill="url(#prefix__a)" cx="256" cy="256" r="256"/><path fill="#fff" d="M115.88 253.3c74.63-32.52 124.39-53.95 149.29-64.31 71.1-29.57 85.87-34.71 95.5-34.88 2.12-.03 6.85.49 9.92 2.98 2.59 2.1 3.3 4.94 3.64 6.93.34 2 .77 6.53.43 10.08-3.85 40.48-20.52 138.71-29 184.05-3.59 19.19-10.66 25.62-17.5 26.25-14.86 1.37-26.15-9.83-40.55-19.27-22.53-14.76-35.26-23.96-57.13-38.37-25.28-16.66-8.89-25.81 5.51-40.77 3.77-3.92 69.27-63.5 70.54-68.9.16-.68.31-3.2-1.19-4.53s-3.71-.87-5.3-.51c-2.26.51-38.25 24.3-107.98 71.37-10.22 7.02-19.48 10.43-27.77 10.26-9.14-.2-26.72-5.17-39.79-9.42-16.03-5.21-28.77-7.97-27.66-16.82.57-4.61 6.92-9.32 19.04-14.14z"/></svg>
)

const Tiktok = ({className} : {className? : string}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333335 333336" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M72464 0h188407c39856 0 72464 32609 72464 72465v188407c0 39855-32608 72464-72464 72464H72464C32608 333336 0 300727 0 260872V72465C0 32609 32608 0 72464 0zm127664 70642c337 2877 825 5661 1461 8341l6304 2c1170 9991 4006 19119 8465 26697 7282 6745 16797 10904 28280 11641v9208c2131 444 4350 746 6659 894v29690c-14847 1462-27841-3426-42981-12531l2324 50847c0 16398 61 23892-8738 38977-20546 35222-58194 36677-82176 18323-12269-4256-23069-12466-29881-23612-19875-32516-1959-85512 55687-90966l-94 7835v1970c3105-646 6365-1144 9794-1468v31311c-12484 2057-20412 5890-24119 12980-7424 14197-4049 26526 3716 34309 16276 2796 34401-8481 31673-43351V70644h33628z" fill="#1a121f"/><path d="M200128 70642c3093 26406 18915 45038 44510 46681v25046l-165 15v-21275c-25595-1642-40311-17390-43404-43796l-27114-1v111095c3912 50005-35050 51490-49955 32531 17482 10934 45867 3826 42501-39202V70641h33628zm-72854 184165c-15319-3153-29249-12306-37430-25689-19875-32516-1959-85512 55687-90966l-94 7835c-53444 8512-58809 65920-44009 89802 5707 9209 15076 15686 25846 19019z" fill="#26f4ee"/><path d="M207892 78985c1761 15036 7293 28119 16454 36903-12866-6655-20630-19315-23062-36905l6609 2zm36580 47511c2181 463 4456 777 6824 929v29690c-14847 1462-27841-3426-42981-12531l2324 50847c0 16398 61 23892-8738 38977-21443 36760-61517 36743-85239 15810 30930 17765 84928 3857 84829-56453v-55496c15141 9105 28134 13993 42981 12530v-24302zm-99036 21460c3105-646 6365-1144 9794-1468v31311c-12484 2057-20412 5890-24119 12980-10441 19964 474 36238 14923 41365-18075-649-36010-19214-23555-43031 3707-7089 10474-10923 22958-12980v-28177z" fill="#fb2c53"/><path d="M201068 77313c3093 26406 17809 42154 43404 43796v29689c-14847 1462-27841-3425-42981-12530v55496c119 72433-77802 77945-100063 42025-14800-23881-9435-81290 44009-89802v30147c-12483 2057-19250 5891-22958 12980-22909 43808 56997 69872 51475-706V77313l27114 1z" fill="#fefefe"/></svg>
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

            <p className="mb-5">
              Follow Our Social Media Pages
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 lg:mb-12">
              <a href="https://www.youtube.com/channel/UCKfy55R9h20uJvEJ5_uyN6Q" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white border-white/20 text-black hover:bg-white text-sm sm:text-base cursor-pointer transition-all duration-300 hover:px-8 hover:text-black"
                >
                  <YouTubeLogo className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  YouTube
                </Button>
              </a>

              <a href="https://t.me/exceletacademy" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:text-black bg-white border-white text-black hover:bg-white text-sm sm:text-base cursor-pointer transition-all duration-300 hover:px-8"
                >
                  <Telegram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Telegram
                </Button>
              </a>


              <a href="https://www.tiktok.com/@exceletacademy" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white border-white text-black hover:bg-white text-sm sm:text-base cursor-pointer transition-all duration-300 hover:px-8 hover:text-black"
                >
                  <Tiktok className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  TikTok
                </Button>
              </a>

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
