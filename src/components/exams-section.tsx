import { GraduationCap, Award, Trophy, Star } from "lucide-react"

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

export default function ExamsSection() {
  return (
    <section id="exams" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Ace your exams with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              real past papers
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Practice for ESSLCE, UAT, NGAT, Exit Exam, Grade 6 and 8 Ministry exams, and more — with filters for better
            access. Explanations come in text, image or video formats.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group"
            >
              <div
                className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${exam.color} rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <exam.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">{exam.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{exam.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
