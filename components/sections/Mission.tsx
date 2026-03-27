"use client";

import { motion } from "framer-motion";
import { Users2, Compass, Anchor } from "lucide-react";
import {
  fadeUp,
  fadeLeft,
  staggerContainer,
  VIEWPORT_ONCE,
} from "@/lib/animations";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    Icon: Users2,
    hook: "No veteran should struggle in silence.",
    title: "Restoring Connection",
    copy: "Many veterans live disconnected from support systems. We are building the Territory's first dedicated peer network through local meetups, workshops, and shared spaces.",
    accent: "text-sage",
    bg: "bg-sage/8 border-sage/15",
    iconBg: "bg-sage/10",
  },
  {
    Icon: Compass,
    hook: "Service does not end, it evolves.",
    title: "Driving Opportunity",
    copy: "We help veterans translate skills into meaningful opportunities — from leading excursions to creating high-quality local products for the VI economy.",
    accent: "text-gold",
    bg: "bg-gold/5 border-gold/12",
    iconBg: "bg-gold/10",
  },
  {
    Icon: Anchor,
    hook: "Those who served continue to protect what matters.",
    title: "Preserving the Legacy",
    copy: "Our veterans serve as stewards of the culture, history, and environment of the islands, preserving our home for future generations.",
    accent: "text-navy-light",
    bg: "bg-navy/5 border-navy/10",
    iconBg: "bg-navy/8",
  },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Mission() {
  return (
    <section
      id="mission"
      className="section-padding bg-white"
      aria-labelledby="mission-heading"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="text-sage font-sans font-semibold text-[0.7rem] tracking-[0.18em] uppercase mb-4"
        >
          Our Purpose
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          transition={{ delay: 0.08 }}
          id="mission-heading"
          className="heading-serif text-display-xl text-navy mb-6"
        >
          A Mission Rooted in Purpose.
          <br />
          <em className="text-sage italic">An Impact Felt Across the Islands.</em>
        </motion.h2>

        {/* Two-column layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Mission statement */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="lg:sticky lg:top-28"
          >
            <blockquote
              className="border-l-[3px] border-gold pl-6
                         font-serif font-light italic text-display-md
                         text-navy leading-[1.85] text-[1.35rem]"
            >
              Islands of Valor exists to ensure that no veteran in the U.S.
              Virgin Islands feels forgotten. We turn isolation into connection,
              service into opportunity, and experience into lasting impact within
              our communities.
            </blockquote>

            {/* Decorative rule */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-greige" />
              <Anchor size={14} strokeWidth={1.25} className="text-greige-dark" />
              <div className="h-px flex-1 bg-greige" />
            </div>
          </motion.div>

          {/* Pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex flex-col gap-5"
            role="list"
            aria-label="Mission pillars"
          >
            {PILLARS.map(({ Icon, hook, title, copy, accent, bg, iconBg }) => (
              <motion.article
                key={title}
                variants={fadeUp}
                role="listitem"
                className={`
                  group flex gap-5 p-6 rounded-card border
                  ${bg}
                  hover:-translate-y-1 hover:shadow-card-hover
                  transition-all duration-300 ease-spring
                `}
              >
                <div
                  className={`
                    flex-shrink-0 w-11 h-11 rounded-xl
                    flex items-center justify-center
                    ${iconBg}
                  `}
                  aria-hidden="true"
                >
                  <Icon
                    size={20}
                    strokeWidth={1.25}
                    className={accent}
                  />
                </div>

                <div className="min-w-0">
                  <p className={`${accent} font-sans text-[0.78rem] font-medium italic mb-1.5`}>
                    {hook}
                  </p>
                  <h3 className="font-serif text-[1.15rem] font-semibold text-navy mb-2">
                    {title}
                  </h3>
                  <p className="font-sans font-light text-[0.9rem] text-navy/65 leading-[1.75]">
                    {copy}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
