import { Star, Quote, Youtube, Send } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Ahmed",
    grade: "Grade 12 Student",
    content: "Excelet Academy helped me ace my ESSLCE exam! The past papers and explanations were incredibly helpful.",
    rating: 5,
    hasVideo: true,
  },
  {
    name: "Michael Tadesse",
    grade: "University Student",
    content:
      "The Exit Exam preparation materials are top-notch. I improved my scores significantly thanks to this platform.",
    rating: 5,
    hasTelegram: true,
  },
  {
    name: "Hanan Bekele",
    grade: "Grade 8 Student",
    content: "The interactive content made learning fun and easy. I understood concepts I struggled with for months!",
    rating: 5,
    hasVideo: false,
  },
  {
    name: "Daniel Girma",
    grade: "Grade 10 Student",
    content: "Amazing platform with comprehensive courses. The structured curriculum really helped me stay on track.",
    rating: 5,
    hasTelegram: true,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            What our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              students say
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Thousands of students have aced their exams with Excelet Academy
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mb-2" />
                <div className="ml-auto flex items-center space-x-2">
                  {testimonial.hasVideo && <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />}
                  {testimonial.hasTelegram && <Send className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />}
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">&ldquo;{testimonial.content}&rdquo;</p>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-gray-600">{testimonial.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
