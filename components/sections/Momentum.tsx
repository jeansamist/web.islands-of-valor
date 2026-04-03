"use client";

import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";
import { motion } from "framer-motion";
import { CheckCircle, RefreshCw } from "lucide-react";

import { MOMENTUM_ITEMS } from "@/lib/data";
import type { MomentumStatus } from "@/types";

function StatusBadge({ status }: { status: MomentumStatus }) {
  if (status === "in-progress") {
    return (
      <span className="badge-progress" aria-label="Status: In Progress">
        <RefreshCw
          size={10}
          strokeWidth={2}
          className="animate-spin [animation-duration:3s]"
        />
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

export default function Momentum() {
  return (
    <section
      id="momentum"
      className="bg-white"
      aria-labelledby="momentum-heading"
    >
      <div className="mx-auto flex max-w-[1780px] flex-col py-20 pt-6 lg:gap-12 xl:flex-row xl:items-start">
        <div className="w-full self-start space-y-6 bg-brand-blue p-6 md:p-12 xl:sticky xl:top-24 xl:max-w-[420px]">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="inline-block bg-brand-red px-2 py-1 font-montserrat text-sm font-semibold uppercase text-white"
          >
            Right Now
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.06 }}
            id="momentum-heading"
            className="font-rundale text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl"
          >
            What We Are Building
            <br />
            Right Now.
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.1 }}
            className="border-t border-white pt-6 font-montserrat text-base leading-relaxed text-white md:text-lg"
          >
            These are the initiatives taking shape right now as we build
            stronger veteran support across the islands, one practical step at a
            time.
          </motion.div>
        </div>

        <div className="flex-1">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="grid grid-cols-1"
            role="list"
            aria-label="Current initiatives"
          >
            {MOMENTUM_ITEMS.map((item, idx) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                role="listitem"
                className={
                  "flex flex-col gap-5 p-8 md:p-10 lg:flex-row lg:items-start lg:gap-10 " +
                  (idx < MOMENTUM_ITEMS.length - 1
                    ? "border-b border-gray-100"
                    : "")
                }
              >
                <div className="inline-flex flex-col gap-4 lg:max-w-[320px] lg:flex-shrink-0">
                  <div
                    className={
                      "h-[4px] w-10 " +
                      (item.status === "in-progress"
                        ? "bg-brand-red"
                        : "bg-brand-blue")
                    }
                    aria-hidden="true"
                  />
                  <StatusBadge status={item.status} />
                  <h3 className="font-rundale text-2xl font-bold leading-tight text-black md:text-3xl">
                    {item.title}
                  </h3>
                </div>

                <div className="flex-1 border-t border-gray-100 pt-5 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
                  <p className="max-w-3xl font-montserrat text-base leading-relaxed text-gray-700 md:text-lg">
                    {item.description}
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
