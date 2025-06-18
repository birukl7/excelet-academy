"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Award, Trophy, Globe, BookOpen, Users, Target } from "lucide-react"

const exams = [
  {
    icon: GraduationCap,
    title: "ESSLCE",
    description:
      "Ethiopian Secondary School Leaving Certificate Exam - Complete preparation with past papers, detailed explanations, and practice tests to help you excel in your final high school examinations.",
    color: "from-purple-500 to-pink-500",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    icon: Award,
    title: "Exit Exam",
    description:
      "University Exit Examination preparation and practice - Comprehensive study materials and mock exams to ensure you're ready for your university graduation requirements.",
    color: "from-blue-500 to-cyan-500",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    icon: Trophy,
    title: "UAT",
    description:
      "University Admission Test - Specialized preparation for Ethiopian university entrance examinations with targeted practice questions and strategic study guides.",
    color: "from-green-500 to-emerald-500",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    icon: Target,
    title: "NGAT",
    description:
      "National Grade Assessment Test - Comprehensive preparation materials for national standardized testing with practice exams and detailed performance analytics.",
    color: "from-indigo-500 to-purple-500",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    icon: BookOpen,
    title: "Grade 6",
    description:
      "Grade 6 Ministry Exam - Complete preparation package for sixth-grade national examinations with age-appropriate study materials and interactive practice sessions.",
    color: "from-orange-500 to-red-500",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    icon: Users,
    title: "Grade 8",
    description:
      "Grade 8 Ministry Exam - Comprehensive study resources for eighth-grade national examinations with detailed subject coverage and exam strategies.",
    color: "from-pink-500 to-rose-500",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    icon: Globe,
    title: "SAT",
    description:
      "SAT Preparation - International standardized test preparation for college admissions with comprehensive study guides, practice tests, and score improvement strategies.",
    color: "from-teal-500 to-blue-500",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function ExamsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const updateCarousel = (index: number) => {
    if (!trackRef.current) return

    const track = trackRef.current
    const items = track.children
    // const totalItems = items.length

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
      const itemWidth = 300
      const gap = 20
      const containerWidth = track.parentElement?.offsetWidth || 0
      const largeItemWidth = 420
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
    if (currentIndex < exams.length - 1) {
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

    if (isLeftSwipe && currentIndex < exams.length - 1) {
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
    <section id="exams" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Ace your exams with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              real past papers
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Practice for ESSLCE, UAT, NGAT, Exit Exam, SAT, Grade 6 and 8 Ministry exams, and more — with filters for
            better access. Explanations come in text, image or video formats.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out md:gap-5"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {exams.map((exam, index) => (
                <div
                  key={index}
                  className={`carousel-item flex-shrink-0 w-full md:w-[300px] h-[350px] md:h-[300px] relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${
                    index === currentIndex ? "large" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exam.color} opacity-90`} />

                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                        <exam.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{exam.title}</h3>
                    </div>

                    <div className="transition-all duration-300">
                      <p className="text-white/90 text-lg  leading-[25px] line-clamp-4">{exam.description}</p>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex-1 h-1 bg-gray-200 rounded-full mr-6">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / exams.length) * 100}%` }}
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
                disabled={currentIndex === exams.length - 1}
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
    width: 420px !important;
    height: 480px !important;
    transform: scale(1.02);
    z-index: 10;
  }

  @media (max-width: 768px) {
    .carousel-item {
      width: 100% !important;
      height: 400px !important;
      margin: 0 !important;
    }
    
    .carousel-item.large {
      width: 100% !important;
      height: 400px !important;
      transform: none !important;
      margin: 0 !important;
    }
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
