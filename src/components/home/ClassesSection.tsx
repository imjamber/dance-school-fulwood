import { CLASS_TYPES } from "@/lib/constants"

export default function ClassesSection() {
  return (
    <section id="classes" className="bg-charcoal py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-14">
          <h2 className="font-serif text-3xl text-ivory font-light">Classes</h2>
          <div className="w-8 h-px bg-ivory/20 mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-ivory/10 sm:divide-y-0">
          {CLASS_TYPES.map((cls, i) => (
            <div
              key={cls.name}
              className={`py-5 flex justify-between items-baseline gap-6 border-t border-ivory/10 ${
                i === CLASS_TYPES.length - 1 || i === CLASS_TYPES.length - 2 ? 'border-b' : ''
              }`}
            >
              <span className="font-serif text-lg text-ivory font-light">{cls.name}</span>
              <span className="text-ivory/35 text-xs tracking-wide shrink-0">{cls.age}</span>
            </div>
          ))}
        </div>

        <p className="text-ivory/25 text-xs mt-10">
          Term-time. Contact us to find the right class.
        </p>

      </div>
    </section>
  )
}
