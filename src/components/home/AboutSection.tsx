import AnimatedSection from "@/components/ui/AnimatedSection"
import { LOCATION_NAME, FULL_ADDRESS } from "@/lib/constants"

export default function AboutSection() {
  return (
    <section className="bg-ivory py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <AnimatedSection>
          <span className="text-gold tracking-[0.25em] uppercase text-xs font-medium">About Us</span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light leading-tight mt-3 mb-4">
            Dance in the heart of {LOCATION_NAME}
          </h2>
          <div className="w-10 h-px bg-gold mb-6" />
          <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
            At Fitchett Proll Dance {LOCATION_NAME}, our goal is to provide high quality dance tuition in a safe, professional, and family friendly environment.
          </p>
          <p className="text-charcoal/60 text-sm leading-relaxed">
            Located at {FULL_ADDRESS}, our spacious studio is purpose-built for good dance training and movement. We welcome students from 18 months to adult.
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-6">
          {[
            { label: "DBS Checked", desc: "All staff hold current DBS certificates. Your child's safety is our first priority." },
            { label: "RAD Trained",  desc: "Our teachers are trained to Royal Academy of Dance standards." },
            { label: "All Abilities", desc: "From complete beginners to advanced students — everyone is welcome." },
          ].map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <div className="border-l border-gold/40 pl-5">
                <span className="text-gold text-xs tracking-widest uppercase">{item.label}</span>
                <p className="text-charcoal/60 text-sm leading-relaxed mt-1">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
