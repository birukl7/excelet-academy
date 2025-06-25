import Image from "next/image"

export default function AppExperienceSection() {
  return (
    <section id="screenshots" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Experience learning like{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              never before
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our intuitive mobile app designed to make learning seamless, engaging, and accessible anywhere,
            anytime.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Home Page Screenshot */}
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 lg:p-10 flex items-center justify-center min-h-96 lg:min-h-[500px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50" />
            <div className="relative z-10 phone-frame">
              <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden relative">
                  <Image
                    src="/home-page.png"
                    alt="Homepage preview of the app"
                    width={280}
                    height={560}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Browse Exams Screenshot */}
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 lg:p-10 flex items-center justify-center min-h-96 lg:min-h-[500px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50" />
            <div className="relative z-10 phone-frame">
              <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden relative">
                  <Image
                    src="/browse-exams.png"
                    alt="Browse exams preview of the app"
                    width={280}
                    height={560}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Questions Screenshot */}
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 lg:p-10 flex items-center justify-center min-h-96 lg:min-h-[500px] sm:col-span-2 lg:col-span-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50" />
            <div className="relative z-10 phone-frame">
              <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden relative">
                  <Image
                    src="/questions.png"
                    alt="Questions preview of the app"
                    width={280}
                    height={560}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Mobile Optimized</h3>
            <p className="text-sm text-gray-600">Perfect for learning on the go</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-sm text-gray-600">Quick access to all materials</p>
          </div>
        </div>
      </div>
    </section>
  )
}
