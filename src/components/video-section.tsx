import { Play } from "lucide-react"

export default function VideoSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Excelet Academy{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              in Action
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">See how our platform transforms the learning experience</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-6 lg:p-8 shadow-2xl">
            <div className="aspect-video bg-black/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-white/30 transition-colors cursor-pointer">
                  <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1" />
                </div>
                <p className="text-white text-base lg:text-lg">YouTube Video Embed Placeholder</p>
                <p className="text-white/80 text-sm mt-2">Click to watch our platform demo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
