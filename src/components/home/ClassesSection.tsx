import { CLASS_TYPES } from "@/lib/constants"

export default function ClassesSection() {
  return (
    <section id="classes" className="bg-charcoal py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <span className="text-ivory/40 tracking-[0.25em] uppercase text-xs">Classes</span>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light leading-tight mt-4 mb-4">
            What we teach
          </h2>
          <div className="w-10 h-px bg-ivory/20" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ivory/10">
          {CLASS_TYPES.map((cls) => (
            <div key={cls.name} className="bg-charcoal p-8">
              <h3 className="font-serif text-xl text-ivory mb-1">{cls.name}</h3>
              <p className="text-ivory/40 text-xs tracking-widest uppercase mb-3">{cls.age}</p>
              <p className="text-ivory/55 text-sm leading-relaxed">{cls.description}</p>
            </div>
          ))}
        </div>

        <p className="text-ivory/25 text-xs mt-12 leading-relaxed max-w-md border-t border-ivory/10 pt-8">
          All classes run term-time. Contact us to find the right class — places are available throughout the year.
        </p>

      </div>
    </section>
  )
}
