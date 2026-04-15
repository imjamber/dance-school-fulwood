import Button from "@/components/ui/Button"
import { EMAIL, PHONE } from "@/lib/constants"

export default function CTASection() {
  return (
    <section className="bg-charcoal py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center gap-7">
        <span className="text-gold tracking-[0.3em] uppercase text-xs">Ready to Start?</span>
        <h2 className="font-serif text-5xl text-ivory font-light leading-tight">
          Your first class starts with a single step.
        </h2>
        <p className="text-ivory/50 text-sm leading-relaxed max-w-sm">
          Register online or get in touch and we&apos;ll find the right class for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/register" size="lg">Register Now</Button>
          <Button href={`mailto:${EMAIL}`} variant="outline" size="lg">Email Us</Button>
        </div>
        <p className="text-ivory/30 text-sm">
          Or call{" "}
          <a href={`tel:${PHONE.replace(/\s/g,"")}`} className="text-gold/60 hover:text-gold transition-colors">
            {PHONE}
          </a>
        </p>
      </div>
    </section>
  )
}
