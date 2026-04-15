import Image from "next/image"
import { FULL_ADDRESS } from "@/lib/constants"

export default function AboutSection() {
  return (
    <section className="bg-ivory py-24 px-6 border-t border-charcoal/10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        <div>
          <span className="text-charcoal/40 tracking-[0.25em] uppercase text-xs">About the school</span>
          <h2 className="font-serif text-3xl text-charcoal font-light leading-tight mt-4 mb-6">
            About the school
          </h2>
          <div className="w-10 h-px bg-charcoal/20 mb-8" />

          <p className="text-charcoal/65 text-sm leading-relaxed mb-5">
            Classes are held at {FULL_ADDRESS}. We welcome students from 18 months through to adults, with tuition grounded in the RAD syllabus. All teachers hold current DBS certificates.
          </p>
          <p className="text-charcoal/65 text-sm leading-relaxed mb-8">
            Beginners are welcome throughout the year. We are happy to advise on the most suitable class.
          </p>
          <p className="text-charcoal/35 text-xs leading-relaxed">
            The school continues the teaching tradition of Heather Fitchett, trained at the Royal Ballet School, and is now led by Martine Proll.
          </p>
        </div>

        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <Image
            src="/images/dancer.jpg"
            alt="Student at Fitchett Proll Dance"
            fill
            className="object-cover object-top grayscale"
          />
        </div>

      </div>
    </section>
  )
}
