export default function FPLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-charcoal flex items-center justify-center ${className}`}>
      <div className="relative flex items-baseline" style={{ lineHeight: 1 }}>
        <span
          className="font-serif text-ivory select-none"
          style={{ fontSize: "3.4rem", fontWeight: 300, letterSpacing: "-0.01em" }}
        >
          F
        </span>
        <span
          className="font-serif text-ivory select-none"
          style={{ fontSize: "2.8rem", fontWeight: 300, letterSpacing: "-0.01em", marginLeft: "-0.08em" }}
        >
          p
        </span>
      </div>
    </div>
  )
}
