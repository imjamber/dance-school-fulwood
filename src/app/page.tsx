import Hero from "@/components/home/Hero"
import AboutSection from "@/components/home/AboutSection"
import ClassesSection from "@/components/home/ClassesSection"
import LocationSection from "@/components/home/LocationSection"
import CTASection from "@/components/home/CTASection"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ClassesSection />
      <LocationSection />
      <CTASection />
    </main>
  )
}
