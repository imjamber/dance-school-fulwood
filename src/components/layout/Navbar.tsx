"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

const NAV = [
  { label: "Home",     href: "/" },
  { label: "Classes",  href: "/#classes" },
  { label: "Find Us",  href: "/#location" },
  { label: "Enquire",  href: "/register" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-ivory transition-all duration-300 ${
          scrolled ? "border-b border-charcoal/10 shadow-sm" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">

          <Link href="/" className="relative block h-10 w-52 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Fitchett Proll Ballet School"
              fill
              priority
              style={{ objectFit: "contain", objectPosition: "left center" }}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {NAV.map((l) => (
              <Link key={l.href} href={l.href}
                className="text-xs tracking-widest uppercase text-charcoal/50 hover:text-charcoal transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
            <span className={`block w-5 h-px bg-charcoal transition-transform duration-200 origin-center ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-5 h-px bg-charcoal transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-charcoal transition-transform duration-200 origin-center ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-ivory flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {NAV.map((l, i) => (
              <motion.div key={l.href} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
                <Link href={l.href} onClick={() => setOpen(false)}
                  className="font-serif text-4xl text-charcoal hover:text-charcoal/50 transition-colors">
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
