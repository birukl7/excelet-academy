import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
// import CoursesSection from "@/components/courses-section"
import ExamsSection from "@/components/exams-section"
import TestimonialsSection from "@/components/testimonials-section"
import AppExperienceSection from "@/components/app-experience-section"
import VideoSection from "@/components/video-section"
import Footer from "@/components/footer"
import CoursesSection from "@/components/courses-seciton"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <CoursesSection />
        <ExamsSection />
        <TestimonialsSection />
        <AppExperienceSection />
        <VideoSection />
        <Footer />
      </div>
    </main>
  )
}
