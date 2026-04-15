import Link from "next/link"
import Image from "next/image"
import { LOCATION_NAME } from "@/lib/constants"

export default function Hero() {
  return (
    <section className="bg-charcoal min-h-screen flex flex-col items-center justify-center px-6 text-center pt-16">
      <div className="flex flex-col items-center gap-8 max-w-sm">

        <div className="relative h-20 w-72">
          <Image
            src="/images/logo.png"
            alt="Fitchett Proll Ballet School"
            fill
            priority
            style={{ objectFit: "contain", objectPosition: "center", filter: "invert(1)", opacity: 0.9 }}
          />
        </div>

        <div className="w-8 h-px bg-ivory/20" />

        <p className="text-ivory/50 text-sm font-light leading-relaxed">
          Dance classes for all ages in {LOCATION_NAME}.<br />From 18 months through to adults.
        </p>

        <div className="flex items-center gap-8">
          <Link
            href="/register"
            className="text-xs tracking-[0.2em] uppercase text-ivory border-b border-ivory/30 hover:border-ivory pb-0.5 transition-colors"
          >
            Enquire
          </Link>
          <Link
            href="/#classes"
            className="text-xs tracking-[0.2em] uppercase text-ivory/35 hover:text-ivory/60 transition-colors"
          >
            View classes
          </Link>
        </div>

      </div>
    </section>
  )
}
