"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Star, Quote, Youtube, Send, Hash } from "lucide-react"

const testimonials = [
  {
    name: "Rediet Shiberu Legese",
    content: "Thank you very much! You have helped me achieve a really good result 🙏🙏🙏. Keep it up!",
    additionalInfo:
      "After seeing her ESSLCE result, Rediet started using our freshman university services to continue her success.",
    rating: 5,
  },
  {
    name: "Mikias Tsegaye Assefa",
    content:
      "Thank you! I'm very happy — you helped me a lot. I got this result because your services and resources helped me, even in between exams… at lunch time!",
    additionalInfo:
      "Mikias joined very late, just a few weeks before the exam. He was so worried he even sent us a voice note. We guided him carefully, and he ended up scoring impressively. He is now also using our freshman services.",
    rating: 5,
  },
  {
    name: "Eyob Tilaye Zerihun",
    content: "Thank you! I got this result because of your help.",
    additionalInfo:
      "Eyob scored 499 out of 500, placing him among the top 1,500 students out of over 670,000. A remarkable achievement!",
    rating: 5,
  },
  {
    name: "Yonas Yifru",
    content:
      "Thank you very much! Only three students passed the ESSLCE from my school — and I was one of them. Students taking the exam next year should definitely use your service. Thanks Excelet 100%.",
    additionalInfo:
      "Yonas scored 300 out of 600, and credits Excelet Academy for helping him become one of the few students who passed from his school.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const updateCarousel = (index: number) => {
    if (!trackRef.current) return

    const track = trackRef.current
    const items = track.children

    // Remove large class from all items
    Array.from(items).forEach((item) => item.classList.remove("large"))

    // Add large class to current item
    if (items[index]) {
      items[index].classList.add("large")
    }

    // Calculate translation based on screen size
    if (window.innerWidth <= 768) {
      // Mobile: Show one card at a time, full width
      const translateX = -index * 100
      track.style.transform = `translateX(${translateX}%)`
    } else {
      // Desktop: Original carousel behavior
      const itemWidth = 350
      const gap = 20
      const containerWidth = track.parentElement?.offsetWidth || 0
      const largeItemWidth = 450
      const offset = (containerWidth - largeItemWidth) / 2

      let translateX = 0
      if (index === 0) {
        translateX = 0
      } else {
        translateX = -index * (itemWidth + gap) + offset - (largeItemWidth - itemWidth) / 2
      }
      track.style.transform = `translateX(${translateX}px)`
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    updateCarousel(index)
  }

  const goToPrevious = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1)
    }
  }

  const goToNext = () => {
    if (currentIndex < testimonials.length - 1) {
      goToSlide(currentIndex + 1)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < testimonials.length - 1) {
      goToNext()
    }
    if (isRightSwipe && currentIndex > 0) {
      goToPrevious()
    }
  }

  useEffect(() => {
    updateCarousel(currentIndex)

    const handleResize = () => {
      updateCarousel(currentIndex)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentIndex])

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            💬 What Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            We have helped thousands of students significantly improve their academic performance — and many have even
            aced their national exams.
          </p>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <Send className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>
                    Check out our{" "}
                    <a
                      href="https://t.me/excelettestimonials"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors"
                    >
                      Telegram channel
                    </a>
                  </strong>{" "}
                  to see real testimonials shared by students on their own initiative.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Youtube className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>
                    Explore our{" "}
                    <a
                      href="https://www.youtube.com/playlist?list=PL3kojiR03DbRGs72v851aEscaquoVOQga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-800 underline hover:no-underline transition-colors"
                    >
                      YouTube playlist
                    </a>
                  </strong>{" "}
                  where learners share their results and experiences with Excelet Academy.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Hash className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  You can use <strong>#ExceletTestimonials</strong> to search for testimonials on our main Telegram
                  channel too!
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-800 font-medium mt-8">
            A few selected testimonials we received are listed below:
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out md:gap-6 items-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`carousel-item flex-shrink-0 w-full md:w-[350px] h-[400px] md:h-[380px] relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-in-out bg-white shadow-lg hover:shadow-xl border border-gray-100 ${
                    index === currentIndex ? "large" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <Quote className="w-8 h-8 text-purple-600" />
                      <div className="ml-2">
                        <Star className="w-6 h-6 text-yellow-400 fill-current inline" />
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="font-semibold text-gray-900 text-lg mb-3">⭐️ {testimonial.name}</p>
                      <p className="text-gray-700 mb-4 leading-relaxed italic line-clamp-4">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                    </div>

                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="flex items-start space-x-2">
                        <span className="text-green-600 font-bold text-lg flex-shrink-0">✅</span>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {testimonial.additionalInfo}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex-1 h-1 bg-gray-200 rounded-full mr-6">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                disabled={currentIndex === testimonials.length - 1}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-item.large {
          width: 450px !important;
          height: 420px !important;
          transform: scale(1.02);
          z-index: 10;
        }

        @media (max-width: 768px) {
          .carousel-item {
            width: 100% !important;
            height: 450px !important;
            margin: 0 !important;
          }
          
          .carousel-item.large {
            width: 100% !important;
            height: 420px !important;
            transform: none !important;
            margin: 0 !important;
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
