import { SCHOOL_NAME, LOCATION_NAME, EMAIL, PHONE, MOBILE, FULL_ADDRESS, MAIN_SITE_URL } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-ivory/10">
      <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-serif text-lg text-ivory">{SCHOOL_NAME} {LOCATION_NAME}</span>
          <div className="w-8 h-px bg-gold" />
          <p className="text-xs text-ivory/40 leading-relaxed">{FULL_ADDRESS}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-xs tracking-widest uppercase text-gold">Contact</h4>
          <a href={`mailto:${EMAIL}`} className="text-sm text-ivory/60 hover:text-gold transition-colors">{EMAIL}</a>
          <a href={`tel:${PHONE.replace(/\s/g,"")}`} className="text-sm text-ivory/60 hover:text-gold transition-colors">{PHONE}</a>
          <a href={`tel:${MOBILE.replace(/\s/g,"")}`} className="text-sm text-ivory/60 hover:text-gold transition-colors">{MOBILE}</a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-xs tracking-widest uppercase text-gold">Network</h4>
          <a href={MAIN_SITE_URL} target="_blank" rel="noopener noreferrer"
            className="text-sm text-ivory/60 hover:text-gold transition-colors">
            Main Website ↗
          </a>
          <a href="/register" className="text-sm text-ivory/60 hover:text-gold transition-colors">
            Register for Classes
          </a>
        </div>
      </div>

      <div className="border-t border-ivory/10 max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <p className="text-xs text-ivory/30">© {new Date().getFullYear()} Sandham Fitchett Performing Arts</p>
        <a href={`${MAIN_SITE_URL}/privacy-policy`} className="text-xs text-ivory/30 hover:text-gold transition-colors">
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}
