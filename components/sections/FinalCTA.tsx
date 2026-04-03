"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-brand-blue overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* ── Top accent line (brand colors) ── */}
      <div className="flex h-[5px]">
        <div className="flex-1 bg-brand-red" />
        <div className="w-32 bg-brand-gold" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-20 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {/* Small eyebrow */}
          <motion.p
            variants={fadeUp}
            className="text-white/45 font-montserrat text-[0.68rem] tracking-[0.22em] uppercase mb-8"
          >
            Join the Mission
          </motion.p>

          {/* ── ENORMOUS typography — the obama.org "DONATE TODAY" signature element ── */}
          <motion.div variants={fadeUp}>
            <h2
              id="cta-heading"
              className="font-rundale font-bold text-white uppercase leading-[0.88]"
              style={{ fontSize: "clamp(4.5rem, 14vw, 11rem)" }}
            >
              SUPPORT
            </h2>
            <h2
              aria-hidden="true"
              className="font-rundale font-bold text-brand-gold uppercase leading-[0.88]"
              style={{ fontSize: "clamp(4.5rem, 14vw, 11rem)" }}
            >
              TODAY
            </h2>
          </motion.div>

          {/* ── Subtitle + CTA row (below the massive text) ── */}
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 max-w-[720px]"
          >
            <p className="font-montserrat font-light text-white/65 text-[1rem] leading-[1.85] flex-1">
              Your support helps us create connection, opportunity, and lasting
              impact for veterans across the U.S. Virgin Islands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                href="#donate"
                className="inline-flex items-center justify-center gap-2
                           bg-white text-brand-blue
                           font-rundale font-medium text-sm tracking-wide
                           px-7 py-3.5 rounded-xl
                           hover:bg-brand-gold hover:text-gray-900
                           transition-all duration-200
                           shadow-[0_4px_24px_rgba(0,0,0,0.2)]
                           hover:-translate-y-0.5"
              >
                Donate Now
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2
                           bg-transparent text-white border border-white/30
                           font-rundale font-medium text-sm tracking-wide
                           px-7 py-3.5 rounded-xl
                           hover:border-white/70 hover:bg-white/[0.08]
                           transition-all duration-200"
              >
                Our Programs
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
