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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-6 lg:p-8 flex items-center justify-center min-h-80 lg:min-h-96">
            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl lg:text-2xl">📱</span>
              </div>
              <p className="text-gray-600 text-sm lg:text-base">Mobile Screenshot Placeholder</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-6 lg:p-8 flex items-center justify-center min-h-80 lg:min-h-96">
            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl lg:text-2xl">📚</span>
              </div>
              <p className="text-gray-600 text-sm lg:text-base">Course Interface Placeholder</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-6 lg:p-8 flex items-center justify-center min-h-80 lg:min-h-96 sm:col-span-2 lg:col-span-1">
            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl lg:text-2xl">🎯</span>
              </div>
              <p className="text-gray-600 text-sm lg:text-base">Exam Practice Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
