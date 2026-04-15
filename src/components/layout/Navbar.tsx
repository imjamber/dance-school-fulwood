"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { SITE_TITLE } from "@/lib/constants"

const NAV = [
  { label: "Home",       href: "/" },
  { label: "Classes",    href: "/#classes" },
  { label: "Find Us",    href: "/#location" },
  { label: "Register",   href: "/register" },
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
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-charcoal/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -80 }} animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-18">
          <Link href="/" className="font-serif text-lg text-ivory hover:text-gold transition-colors">
            {SITE_TITLE}
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((l) => (
              <Link key={l.href} href={l.href}
                className="text-xs tracking-widest uppercase text-ivory/70 hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
            <motion.span className="block w-6 h-px bg-ivory" animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} />
            <motion.span className="block w-6 h-px bg-ivory" animate={{ opacity: open ? 0 : 1 }} />
            <motion.span className="block w-6 h-px bg-ivory" animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {NAV.map((l, i) => (
              <motion.div key={l.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                <Link href={l.href} onClick={() => setOpen(false)}
                  className="font-serif text-4xl text-ivory hover:text-gold transition-colors">
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
