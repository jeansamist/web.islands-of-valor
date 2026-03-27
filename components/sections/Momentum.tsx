"use client";

import { motion } from "framer-motion";
import { RefreshCw, CheckCircle } from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  VIEWPORT_ONCE,
} from "@/lib/animations";
import { MOMENTUM_ITEMS } from "@/lib/data";
import type { MomentumStatus } from "@/types";

// ─── Status Badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: MomentumStatus }) {
  if (status === "in-progress") {
    return (
      <span className="badge-progress" aria-label="Status: In Progress">
        <RefreshCw size={10} strokeWidth={2} className="animate-spin [animation-duration:3s]" />
        In Progress
      </span>
    );
  }

  return (
    <span className="badge-planning" aria-label="Status: Planning">
      <CheckCircle size={10} strokeWidth={2} />
      Planning
    </span>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Momentum() {
  return (
    <section
      id="momentum"
      className="section-padding bg-white"
      aria-labelledby="momentum-heading"
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
          Right Now
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          transition={{ delay: 0.08 }}
          id="momentum-heading"
          className="heading-serif text-display-xl text-navy mb-16"
        >
          What We Are Building{" "}
          <em className="italic text-sage">Right Now</em>
        </motion.h2>

        {/* Timeline */}
        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="max-w-[760px] space-y-0"
          aria-label="Current initiatives"
        >
          {MOMENTUM_ITEMS.map((item, idx) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              className="relative flex gap-8 pb-10 last:pb-0"
            >
              {/* Timeline spine */}
              {idx < MOMENTUM_ITEMS.length - 1 && (
                <div
                  className="absolute left-[17px] top-9 bottom-0 w-px
                             bg-gradient-to-b from-greige to-transparent"
                  aria-hidden="true"
                />
              )}

              {/* Node */}
              <div className="flex-shrink-0 flex flex-col items-center pt-1" aria-hidden="true">
                <div
                  className={`
                    w-9 h-9 rounded-full border-2 flex items-center justify-center
                    ${
                      item.status === "in-progress"
                        ? "border-sage bg-sage/10"
                        : "border-greige-dark bg-greige-pale"
                    }
                  `}
                >
                  {item.status === "in-progress" ? (
                    <RefreshCw size={14} strokeWidth={1.5} className="text-sage" />
                  ) : (
                    <CheckCircle size={14} strokeWidth={1.5} className="text-greige-dark" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="pt-1 pb-2">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-serif text-[1.1rem] font-semibold text-navy">
                    {item.title}
                  </h3>
                  <StatusBadge status={item.status} />
                </div>
                <p className="font-sans font-light text-[0.9rem] text-navy/60 leading-[1.75]">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
