"use client"

import { motion } from "framer-motion"
import Button from "@/components/ui/Button"
import { SITE_TITLE, LOCATION_NAME, FULL_ADDRESS } from "@/lib/constants"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/70" />

      {/* Subtle gold vignette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />

      {/* Decorative vertical line */}
      <motion.div
        className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block"
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-7">
        <motion.span
          className="text-gold tracking-[0.3em] uppercase text-xs"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {LOCATION_NAME}, Lancashire
        </motion.span>

        <motion.h1
          className="font-serif text-6xl md:text-8xl text-ivory font-light leading-none tracking-tight"
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
        >
          {SITE_TITLE}
        </motion.h1>

        <motion.p
          className="text-ivory/60 text-base md:text-lg font-light max-w-md leading-relaxed"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Professional dance classes for all ages — from 18 months to adult. Located at {FULL_ADDRESS}.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-2"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Button href="/register" size="lg">Register Now</Button>
          <Button href="/#classes" variant="outline" size="lg">View Classes</Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-ivory/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
