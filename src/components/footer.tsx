import Link from "next/link"
import { GraduationCap, Youtube, Send, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Excelet Academy</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your all-in-one learning hub. From school subjects to real-world skills, we help you learn smarter,
              faster, and better.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white border-0">
                <Youtube className="w-4 h-4 mr-2" />
                YouTube
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white border-0">
                <Send className="w-4 h-4 mr-2" />
                Telegram
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white border-0">
                <Music className="w-4 h-4 mr-2" />
                TikTok
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#courses" className="text-gray-400 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#exams" className="text-gray-400 hover:text-white transition-colors">
                  Exams
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#screenshots" className="text-gray-400 hover:text-white transition-colors">
                  Screenshots
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Install Our App</h3>
            <div className="space-y-3">
              <Button size="sm" className="bg-black hover:bg-gray-800 text-white w-full justify-start">
                <Image
                  src="/google-play-brands.svg"
                  alt="Google Play"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Google Play
              </Button>
              <Button size="sm" className="bg-black hover:bg-gray-800 text-white w-full justify-start">
                <Image
                  src="/app-store-brands.svg"
                  alt="App Store"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                App Store
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Excelet Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
