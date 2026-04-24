"use client";

import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";
import { motion } from "framer-motion";
import { Anchor, Compass, Users2 } from "lucide-react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    Icon: Users2,
    hook: "No veteran should struggle in silence.",
    title: "Restoring Connection",
    copy: "We are building the Territory's first dedicated peer network through local meetups, workshops, and shared spaces.",
    accent: "text-brand-blue",
    iconBg: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
    bar: "bg-brand-blue",
  },
  {
    Icon: Compass,
    hook: "Service does not end, it evolves.",
    title: "Driving Opportunity",
    copy: "We aim to help veterans translate skills into meaningful opportunities — from leading excursions to creating high-quality local products for the VI economy.",
    accent: "text-brand-red",
    iconBg: "bg-brand-red/10",
    iconColor: "text-brand-red",
    bar: "bg-brand-red",
  },
  {
    Icon: Anchor,
    hook: "Those who served continue to protect what matters.",
    title: "Preserving the Legacy",
    copy: "Our veterans serve as stewards of the culture, history, and environment of the islands, preserving our home for future generations.",
    accent: "text-brand-green",
    iconBg: "bg-brand-green/10",
    iconColor: "text-brand-green",
    bar: "bg-brand-green",
  },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Mission() {
  return (
    <section
      id="mission"
      className="bg-white"
      aria-labelledby="mission-heading"
    >
      {/* ── obama.org-style bold statement line ─────────────────────────────── */}
      <div className="max-w-[1780px] mx-auto px-6 pt-20 pb-16 border-b-8 border-brand-blue-deep">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="font-rundale font-bold text-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Our mission is to <span className="text-brand-blue">support</span>,{" "}
          <span className="text-brand-red">connect</span>, and{" "}
          <span className="text-brand-gold-dark">empower</span> veterans and
          their families across the U.S. Virgin Islands.{" "}
          <Link
            href="https://givebutter.com/islands-of-valor-initiative-gvl8ql"
            className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl inline-flex items-center gap-1 underline decoration-brand-blue/30 underline-offset-4
                       hover:decoration-brand-blue transition-all duration-200 text-brand-blue whitespace-nowrap"
          >
            Learn More →
          </Link>
        </motion.p>
      </div>

      {/* ── Pillars grid (3-column card style) ──────────────────────────────── */}
      <div className="max-w-[1780px] mx-auto py-20 pt-6 flex flex-col lg:gap-12 xl:flex-row">
        {/* Section label */}
        <div className="flex-1 bg-brand-blue p-6 md:p-12 space-y-6 relative">
          <div className="w-0 xl:w-40 2xl:w-80 aspect-square rounded-tr-full absolute z-10 bg-white bottom-0 left-0"></div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="bg-brand-red text-white inline-block py-1 px-2 text-sm font-montserrat font-semibold uppercase"
          >
            Our Purpose
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.06 }}
            id="mission-heading"
            className="font-rundale font-bold text-display-xl text-white leading-tight"
          >
            A Mission Rooted in Purpose.
            <br />
            An Impact Felt Across the Islands.
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="pt-6 text-white leading-normal border-t border-white md:text-xl"
          >
            Islands of Valor was established to ensure that no veteran in the
            U.S. Virgin Islands feels forgotten. We turn isolation into
            connection, service into opportunity, and experience into lasting
            impacts within our communities.
          </motion.div>
        </div>
        <div className="md:max-w-3xl w-full">
          <div className="inline-block px-2 py-1 border border-brand-blue text-brand-blue text-sm font-montserrat font-semibold uppercase">
            OUR VISION
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="grid grid-cols-1 gap-0"
            role="list"
            aria-label="Mission pillars"
          >
            {PILLARS.map(
              (
                { Icon, hook, title, copy, accent, iconBg, iconColor, bar },
                idx,
              ) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  role="listitem"
                  className={`
                group flex flex-col gap-5 p-8
                ${idx < PILLARS.length - 1 ? "sm:border-b border-gray-100" : ""}
                ${idx > 0 ? "border-b sm:border-b-0 border-gray-100" : ""}
                hover:bg-gray-50 transition-colors duration-300
              `}
                >
                  <div className={`w-10 h-[4px] ${bar}`} aria-hidden="true" />

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 flex items-center justify-center ${iconBg}`}
                    aria-hidden="true"
                  >
                    <Icon size={24} strokeWidth={2} className={iconColor} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 flex flex-col gap-3">
                    <p
                      className={`${accent} font-montserrat md:text-base text-sm`}
                    >
                      {hook}
                    </p>
                    <h3 className="font-rundale font-bold text-xl md:text-2xl text-black">
                      {title}
                    </h3>
                    <p className="font-montserrat text-sm md:text-base text-black leading-normal">
                      {copy}
                    </p>
                  </div>
                </motion.article>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
