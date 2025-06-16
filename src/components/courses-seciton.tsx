import { BookOpen, Target, Sparkles } from "lucide-react"

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

export default function CoursesSection() {
  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Master any subject with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              expert-led lessons
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From elementary to university and beyond — explore a wide range of academic and professional courses, all in
            one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 transform hover:rotate-6 transition-transform duration-300">
                <course.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">{course.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
