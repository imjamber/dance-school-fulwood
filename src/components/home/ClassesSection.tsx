import AnimatedSection from "@/components/ui/AnimatedSection"
import { CLASS_TYPES } from "@/lib/constants"

export default function ClassesSection() {
  return (
    <section id="classes" className="bg-charcoal py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">

        <AnimatedSection className="text-center flex flex-col items-center gap-3">
          <span className="text-gold tracking-[0.25em] uppercase text-xs">What We Offer</span>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light">Classes for Every Age</h2>
          <div className="w-10 h-px bg-gold" />
          <p className="text-ivory/50 text-sm max-w-md leading-relaxed">
            Term-time classes taught by qualified professionals. Something for everyone, from first steps to advanced technique.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLASS_TYPES.map((cls, i) => (
            <AnimatedSection key={cls.name} delay={i * 0.05}>
              <div className="group border border-ivory/10 p-6 flex flex-col gap-3 hover:border-gold transition-all duration-300 h-full">
                <span className="text-gold text-xs tracking-widest uppercase">{cls.age}</span>
                <h3 className="font-serif text-xl text-ivory leading-snug">{cls.name}</h3>
                <div className="w-6 h-px bg-gold/40 group-hover:w-10 group-hover:bg-gold transition-all duration-300" />
                <p className="text-ivory/50 text-sm leading-relaxed">{cls.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
