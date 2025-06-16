"use client"

import { useEffect, useRef } from "react"
import { BookOpen, Target, Sparkles, GraduationCap, Award, Trophy, Star } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const courses = [
  {
    icon: BookOpen,
    title: "Comprehensive Courses",
    description:
      "Access thousands of lessons across all subjects and grade levels. Learn from expert instructors with years of teaching experience.",
    color: "from-purple-600 to-blue-600",
  },
  {
    icon: Target,
    title: "Structured Curriculum",
    description:
      "Follow our carefully designed learning paths that build knowledge step-by-step. Track your progress and master each concept.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: Sparkles,
    title: "Engaging Content",
    description:
      "Learn through interactive videos, quizzes, and real-world examples. Our content makes learning enjoyable and effective.",
    color: "from-indigo-600 to-purple-600",
  },
]

const exams = [
  {
    icon: GraduationCap,
    title: "ESSLCE",
    description: "Ethiopian Secondary School Leaving Certificate Exam",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Exit Exam",
    description: "University Exit Examination preparation and practice",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Trophy,
    title: "UAT/NGAT",
    description: "University Admission Test and National Grade Assessment Test",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Star,
    title: "Grade 6 & 8",
    description: "Ministry exams for Grade 6 and Grade 8 students",
    color: "from-orange-500 to-red-500",
  },
]

export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const coursesRef = useRef<HTMLDivElement>(null)
  const examsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !coursesRef.current || !examsRef.current) return

    const container = containerRef.current
    const coursesContainer = coursesRef.current
    const examsContainer = examsRef.current

    // Get the total width needed for horizontal scrolling
    const totalWidth = coursesContainer.scrollWidth + examsContainer.scrollWidth

    // Set up the horizontal scroll animation
    const horizontalScroll = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    // Animate courses section
    horizontalScroll
      .to(coursesContainer, {
        x: () => -(coursesContainer.scrollWidth - window.innerWidth),
        duration: 1,
        ease: "none",
      })
      .to(examsContainer, {
        x: () => -(examsContainer.scrollWidth - window.innerWidth),
        duration: 1,
        ease: "none",
      })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      {/* Courses Section */}
      <section id="courses" className="h-screen flex items-center bg-gray-50 overflow-hidden">
        <div ref={coursesRef} className="flex items-center space-x-8 px-8">
          <div className="flex-shrink-0 w-96 text-center lg:text-left px-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Master any subject with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                expert-led lessons
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-lg">
              From elementary to university and beyond — explore a wide range of academic and professional courses, all
              in one place.
            </p>
          </div>

          {courses.map((course, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mx-4"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <course.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
              <p className="text-gray-600 leading-relaxed">{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exams Section */}
      <section id="exams" className="h-screen flex items-center bg-white overflow-hidden">
        <div ref={examsRef} className="flex items-center space-x-8 px-8">
          <div className="flex-shrink-0 w-96 text-center lg:text-left px-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Ace your exams with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                real past papers
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-lg">
              Practice for ESSLCE, UAT, NGAT, Exit Exam, Grade 6 and 8 Ministry exams, and more — with filters for
              better access.
            </p>
          </div>

          {exams.map((exam, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mx-4"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${exam.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <exam.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{exam.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{exam.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
