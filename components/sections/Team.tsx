"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  cardSpring,
  VIEWPORT_ONCE,
} from "@/lib/animations";
import { TEAM_MEMBERS } from "@/lib/data";

export default function Team() {
  return (
    <section
      id="team"
      className="section-padding bg-greige-pale"
      aria-labelledby="team-heading"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="max-w-[620px]">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="text-sage font-sans font-semibold text-[0.7rem] tracking-[0.18em] uppercase mb-4"
          >
            The People
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.08 }}
            id="team-heading"
            className="heading-serif text-display-xl text-navy mb-5"
          >
            Meet the People Behind{" "}
            <em className="italic text-sage">the Mission</em>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.14 }}
            className="font-sans font-light text-navy/60 text-[1.05rem] leading-[1.8]"
          >
            Islands of Valor is built by individuals who believe those who
            served deserve more than recognition &mdash; they deserve community
            and a place to belong.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Team members"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.article
              key={member.name}
              variants={cardSpring}
              role="listitem"
              className="group bg-white rounded-card border border-greige/40
                         overflow-hidden shadow-card
                         hover:shadow-card-hover hover:-translate-y-1.5
                         transition-all duration-300 ease-spring"
            >
              {/* Photo */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-navy to-sage">
                {member.imageSrc && (
                  <Image
                    src={member.imageSrc}
                    alt={member.imageAlt ?? member.name}
                    fill
                    className="object-cover object-center
                               group-hover:scale-105 transition-transform duration-500 ease-spring"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-serif text-[1.2rem] font-semibold text-navy">
                  {member.name}
                </h3>
                <p className="font-sans font-semibold text-[0.72rem] tracking-[0.1em] uppercase text-sage mt-1 mb-3">
                  {member.role}
                </p>
                <p className="font-sans font-light text-[0.875rem] text-navy/60 leading-[1.75] italic">
                  &ldquo;{member.why}&rdquo;
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
