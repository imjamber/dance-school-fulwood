import Link from "next/link"
import { SCHOOL_NAME, LOCATION_NAME } from "@/lib/constants"

export default function Hero() {
  return (
    <section className="bg-ivory pt-16 px-6">
      <div className="max-w-5xl mx-auto py-28">

        <p className="text-charcoal/40 text-xs tracking-[0.35em] uppercase mb-10">
          {LOCATION_NAME} — Lancashire
        </p>

        <h1 className="font-serif text-5xl md:text-6xl text-charcoal font-light leading-none tracking-tight mb-8">
          {SCHOOL_NAME}
        </h1>

        <div className="w-14 h-px bg-charcoal/20 mb-8" />

        <p className="text-charcoal/60 text-sm font-light max-w-xs leading-relaxed mb-12">
          Dance classes for all ages in {LOCATION_NAME}. From 18 months through to adults.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-8">
          <Link
            href="/register"
            className="text-xs tracking-[0.2em] uppercase text-charcoal border-b border-charcoal/40 hover:border-charcoal pb-0.5 transition-colors"
          >
            Enquire
          </Link>
          <Link
            href="/#classes"
            className="text-xs tracking-[0.2em] uppercase text-charcoal/40 hover:text-charcoal/70 transition-colors"
          >
            View classes
          </Link>
        </div>

      </div>
    </section>
  )
}
