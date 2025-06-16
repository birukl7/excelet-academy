"use client"

import { useEffect, useRef } from "react"
import { BookOpen, Target, Sparkles } from "lucide-react"
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
  },
  {
    icon: Target,
    title: "Structured Curriculum",
    description:
      "Follow our carefully designed learning paths that build knowledge step-by-step. Track your progress and master each concept.",
  },
  {
    icon: Sparkles,
    title: "Engaging Content",
    description:
      "Learn through interactive videos, quizzes, and real-world examples. Our content makes learning enjoyable and effective.",
  },
]

export default function AnimatedCoursesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return

    const cards = cardsRef.current.children

    // Set initial position for cards (off-screen to the right)
    gsap.set(cards, { x: 300, opacity: 0 })

    // Create the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        onUpdate: (self) => {
          // Horizontal scroll effect based on scroll progress
          const progress = self.progress
          gsap.to(cards, {
            x: 300 - progress * 400,
            opacity: progress > 0.2 ? 1 : 0,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out",
          })
        },
      },
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} id="courses" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master any subject with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              expert-led lessons
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From elementary to university and beyond — explore a wide range of academic and professional courses, all in
            one place.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform duration-300">
                <course.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
              <p className="text-gray-600 leading-relaxed">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
