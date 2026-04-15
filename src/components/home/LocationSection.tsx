import AnimatedSection from "@/components/ui/AnimatedSection"
import Button from "@/components/ui/Button"
import { FULL_ADDRESS, PHONE, MOBILE, EMAIL, GOOGLE_MAPS_EMBED, ADDRESS_POSTCODE } from "@/lib/constants"

export default function LocationSection() {
  return (
    <section id="location" className="bg-ivory py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Info */}
        <AnimatedSection className="flex flex-col gap-8">
          <div>
            <span className="text-gold tracking-[0.25em] uppercase text-xs font-medium">Find Us</span>
            <h2 className="font-serif text-3xl text-charcoal font-light leading-tight mt-3 mb-4">
              Find us
            </h2>
            <div className="w-10 h-px bg-gold" />
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <span className="text-xs tracking-widest uppercase text-charcoal/40 mb-1 block">Address</span>
              <p className="text-charcoal text-sm leading-relaxed">{FULL_ADDRESS}</p>
            </div>
            <div>
              <span className="text-xs tracking-widest uppercase text-charcoal/40 mb-1 block">Phone</span>
              <a href={`tel:${PHONE.replace(/\s/g,"")}`} className="text-charcoal hover:text-gold transition-colors text-sm block">{PHONE}</a>
              <a href={`tel:${MOBILE.replace(/\s/g,"")}`} className="text-charcoal hover:text-gold transition-colors text-sm block mt-1">{MOBILE}</a>
            </div>
            <div>
              <span className="text-xs tracking-widest uppercase text-charcoal/40 mb-1 block">Email</span>
              <a href={`mailto:${EMAIL}`} className="text-charcoal hover:text-gold transition-colors text-sm">{EMAIL}</a>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <Button href="/register" size="sm">Enquire</Button>
            <Button
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}`}
              variant="outline" size="sm"
            >
              Open in Maps ↗
            </Button>
          </div>
        </AnimatedSection>

        {/* Map embed */}
        <AnimatedSection delay={0.15}>
          <div className="w-full aspect-square bg-charcoal/10 overflow-hidden">
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${FULL_ADDRESS}`}
            />
          </div>
          <p className="text-charcoal/40 text-xs mt-2">
            Postcode: {ADDRESS_POSTCODE}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
