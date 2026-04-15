import Image from "next/image"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { LOCATION_NAME, FULL_ADDRESS } from "@/lib/constants"

export default function AboutSection() {
  return (
    <section className="bg-ivory py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Photo — portrait dancer, clipped to square */}
        <AnimatedSection className="relative w-full aspect-[3/4] overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/dancer.jpg"
            alt="Dancer at Fitchett Proll Fulwood"
            fill
            className="object-cover object-top"
          />
          {/* Gold corner accent */}
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection delay={0.1} className="order-1 lg:order-2">
          <span className="text-gold tracking-[0.25em] uppercase text-xs font-medium">About Us</span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light leading-tight mt-3 mb-4">
            Dance in the heart of {LOCATION_NAME}
          </h2>
          <div className="w-10 h-px bg-gold mb-6" />
          <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
            At Fitchett Proll Dance {LOCATION_NAME}, our goal is to provide high quality dance tuition in a safe, professional, and family friendly environment.
          </p>
          <p className="text-charcoal/60 text-sm leading-relaxed mb-8">
            Located at {FULL_ADDRESS}, our spacious studio is purpose-built for good dance training and movement. We welcome students from 18 months to adult.
          </p>

          <div className="flex flex-col gap-5">
            {[
              { label: "DBS Checked",  desc: "All staff hold current DBS certificates. Your child's safety is our first priority." },
              { label: "RAD Trained",  desc: "Our teachers are trained to Royal Academy of Dance standards." },
              { label: "All Abilities", desc: "From complete beginners to advanced students — everyone is welcome." },
            ].map((item, i) => (
              <div key={item.label} className="border-l border-gold/40 pl-5">
                <span className="text-gold text-xs tracking-widest uppercase">{item.label}</span>
                <p className="text-charcoal/60 text-sm leading-relaxed mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
