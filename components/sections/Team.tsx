"use client";

import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";

import { TEAM_MEMBERS } from "@/lib/data";

export default function Team() {
  return (
    <section
      id="team"
      className="bg-white"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto flex max-w-[1780px] flex-col py-20 pt-6 lg:gap-12 xl:flex-row">
        <div className="flex-1 space-y-6 bg-brand-blue p-6 md:p-12">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="inline-block bg-brand-red px-2 py-1 font-montserrat text-sm font-semibold uppercase text-white"
          >
            The People
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.06 }}
            id="team-heading"
            className="font-rundale text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl"
          >
            Meet the People Behind
            <br />
            the Mission.
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.1 }}
            className="border-t border-white pt-6 font-montserrat text-base leading-relaxed text-white md:text-lg"
          >
            Islands of Valor is built by people who believe veterans deserve
            more than gratitude. They deserve connection, steady support, and a
            community that continues to show up for them.
          </motion.div>
        </div>

        <div className="w-full md:max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="grid grid-cols-1"
            role="list"
            aria-label="Team members"
          >
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.article
                key={member.name}
                variants={fadeUp}
                role="listitem"
                className={
                  "grid gap-0 border-gray-100 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] " +
                  (idx < TEAM_MEMBERS.length - 1 ? "border-b" : "")
                }
              >
                <div className="relative min-h-[260px] bg-gray-100 md:min-h-full">
                  {member.imageSrc && (
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt ?? member.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 260px"
                    />
                  )}
                </div>

                <div className="flex flex-col gap-4 p-8 md:p-10">
                  <div
                    className="h-[4px] w-10 bg-brand-blue"
                    aria-hidden="true"
                  />
                  <div className="space-y-2">
                    <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-brand-red md:text-sm">
                      {member.role}
                    </p>
                    <h3 className="font-rundale text-2xl font-bold text-black md:text-3xl">
                      {member.name}
                    </h3>
                  </div>
                  <p className="max-w-2xl font-montserrat text-base leading-relaxed text-gray-700 md:text-lg">
                    &ldquo;{member.why}&rdquo;
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
