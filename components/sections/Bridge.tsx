"use client";

import { motion } from "framer-motion";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/animations";

export default function Bridge() {
  return (
    <section
      className="relative overflow-hidden bg-greige-light py-24 px-6"
      aria-label="Mission transition"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 bg-gradient-radial
                   from-sage/10 via-transparent to-transparent
                   pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative large quotation marks */}
      <span
        className="absolute top-8 left-8 font-serif text-[8rem] leading-none
                   text-gold/10 select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <span
        className="absolute bottom-0 right-8 font-serif text-[8rem] leading-none
                   text-gold/10 select-none pointer-events-none"
        aria-hidden="true"
      >
        &rdquo;
      </span>

      <div className="relative max-w-[860px] mx-auto text-center">
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="font-serif font-light italic text-display-lg text-navy leading-[1.5]"
        >
          Now, we are ready to bring this vision to life &mdash;
          <br className="hidden sm:block" />
          but we cannot do it alone.
        </motion.blockquote>
      </div>
    </section>
  );
}
