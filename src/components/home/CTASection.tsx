import { EMAIL, PHONE, MOBILE } from "@/lib/constants"

export default function CTASection() {
  return (
    <section className="bg-ivory py-24 px-6 border-t border-charcoal/10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        <div>
          <span className="text-charcoal/40 tracking-[0.25em] uppercase text-xs">Enquiries</span>
          <h2 className="font-serif text-4xl text-charcoal font-light leading-tight mt-4 mb-6">
            Get in touch
          </h2>
          <div className="w-10 h-px bg-charcoal/20 mb-8" />
          <p className="text-charcoal/60 text-sm leading-relaxed">
            To enquire about classes or register, please contact us directly. We are happy to advise on which class is most suitable for your child.
          </p>
        </div>

        <div className="flex flex-col gap-7">
          <div>
            <span className="text-xs tracking-widest uppercase text-charcoal/40 mb-2 block">Email</span>
            <a href={`mailto:${EMAIL}`} className="text-charcoal text-sm hover:text-gold transition-colors">{EMAIL}</a>
          </div>
          <div>
            <span className="text-xs tracking-widest uppercase text-charcoal/40 mb-2 block">Telephone</span>
            <a href={`tel:${PHONE.replace(/\s/g,"")}`} className="text-charcoal text-sm hover:text-gold transition-colors block">{PHONE}</a>
            <a href={`tel:${MOBILE.replace(/\s/g,"")}`} className="text-charcoal text-sm hover:text-gold transition-colors block mt-1">{MOBILE}</a>
          </div>
          <div className="pt-1">
            <a
              href="/register"
              className="text-xs tracking-[0.2em] uppercase text-charcoal border-b border-charcoal/30 hover:border-charcoal pb-0.5 transition-colors"
            >
              Register online →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
