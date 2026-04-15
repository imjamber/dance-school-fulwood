interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  href?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  className?: string
}

export default function Button({
  children, variant = "primary", size = "md",
  href, onClick, type = "button", disabled = false, className = "",
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium tracking-widest uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
  const sizes = { sm: "px-5 py-2 text-xs", md: "px-8 py-3 text-xs", lg: "px-10 py-3.5 text-xs" }
  const variants = {
    primary: "bg-gold text-charcoal hover:bg-gold-light disabled:opacity-50",
    outline: "border border-gold text-gold hover:bg-gold hover:text-charcoal disabled:opacity-50",
    ghost:   "text-gold hover:text-gold-light underline-offset-4 hover:underline disabled:opacity-50",
  }
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
