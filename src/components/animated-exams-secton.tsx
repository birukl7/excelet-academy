"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Award, Trophy, Star } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

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

export default function AnimatedExamsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return

    const cards = cardsRef.current.children

    // Set initial position for cards (off-screen to the left)
    gsap.set(cards, { x: -200, opacity: 0, rotation: -10 })

    // Create the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.to(cards, {
            x: -200 + progress * 250,
            opacity: progress > 0.1 ? 1 : 0,
            rotation: -10 + progress * 10,
            duration: 0.3,
            stagger: 0.15,
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
    <section ref={sectionRef} id="exams" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ace your exams with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              real past papers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Practice for ESSLCE, UAT, NGAT, Exit Exam, Grade 6 and 8 Ministry exams, and more — with filters for better
            access. Explanations come in text, image or video formats.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${exam.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <exam.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{exam.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{exam.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
