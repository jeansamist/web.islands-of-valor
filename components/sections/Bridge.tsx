"use client";

import { fadeUp, VIEWPORT_ONCE } from "@/lib/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Bridge() {
  const imgRef = useRef<HTMLDivElement>(null);

  // Parallax on the left image panel only
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2"
      aria-label="Mission transition"
    >
      {/* ── Left: Full-bleed photo with parallax (obama.org "Join as Member" image side) ── */}
      <div
        ref={imgRef}
        className="relative min-h-[340px] lg:min-h-[560px] overflow-hidden order-2 lg:order-1"
      >
        <motion.div style={{ y: imgY }} className="absolute inset-0">
          <div className="absolute inset-[-15%]">
            <Image
              src="/donation.jpg"
              alt="Veterans gathering in the U.S. Virgin Islands"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
        {/* Subtle left-edge vignette so text panel blends cleanly */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-blue/10"
          aria-hidden="true"
        />
      </div>

      {/* ── Right: Dark text panel (obama.org "Join as Member" text side) ── */}
      <div className="bg-brand-blue flex items-center order-1 lg:order-2 px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
        <div className="max-w-[460px]">
          {/* Gold accent bar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex gap-1 mb-8"
            aria-hidden="true"
          >
            <div className="h-[4px] w-10 rounded-full bg-brand-gold" />
            <div className="h-[4px] w-4 rounded-full bg-white/25" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="text-white px-2 py-1 border border-white inline-block font-montserrat text-[0.68rem] tracking-[0.2em] uppercase mb-5"
          >
            Support the vision
          </motion.p>

          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.1 }}
            className="font-rundale font-bold text-white leading-[1.35] mb-8"
            style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}
          >
            Now, we are ready to bring this vision to life &mdash; but we cannot
            do it alone.
          </motion.blockquote>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.18 }}
            className="font-montserrat font-light text-white text-[0.9rem] leading-[1.9] mb-10"
          >
            Every donation helps us reach veterans who may be struggling in
            silence and build the community they deserve right here in the U.S.
            Virgin Islands.
          </motion.p>

          {/* Text-link CTA (obama.org "Explore Membership today →" style) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.24 }}
          >
            <Link
              href="https://givebutter.com/islands-of-valor-initiative-gvl8ql"
              className="group inline-flex items-center gap-2
                         text-white font-rundale font-medium text-sm tracking-wide
                         border-b border-white/40 pb-0.5
                         hover:border-white transition-colors duration-200"
            >
              Here is how you can help
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
