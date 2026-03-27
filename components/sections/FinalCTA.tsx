"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy-deep section-padding text-center"
      aria-labelledby="cta-heading"
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-radial from-sage/6 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-gold/4 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-[700px] mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="flex flex-col items-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sage-light font-sans font-semibold text-[0.7rem] tracking-[0.18em] uppercase mb-6"
          >
            Join the Mission
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            variants={fadeUp}
            className="w-14 h-px bg-gold mb-8"
            aria-hidden="true"
          />

          <motion.h2
            variants={fadeUp}
            id="cta-heading"
            className="heading-serif text-display-xl text-white mb-5"
          >
            Be Part of Something
            <br />
            <em className="italic text-sage-light">That Truly Matters</em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sans font-light text-white/60 text-[1.05rem] leading-[1.8] mb-10"
          >
            Your support helps us create connection, opportunity, and lasting
            impact for veterans across the U.S. Virgin Islands.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              href="#donate"
              className="inline-flex items-center gap-3
                         bg-gold text-navy-deep
                         font-sans font-semibold text-base tracking-wide
                         px-9 py-4.5 rounded-xl
                         hover:bg-gold-light transition-all duration-250
                         shadow-gold hover:shadow-gold-hover hover:-translate-y-0.5"
            >
              Support the Mission
              <ArrowRight size={18} strokeWidth={1.75} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
