"use client";

import { fadeIn, heroContainer, heroItem } from "@/lib/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// ─── Partner Bar ──────────────────────────────────────────────────────────────

const PARTNERS = [
  "VA Caribbean Healthcare System",
  "American Legion Post 90",
  "Veteran center",
];

function PartnerBar() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay: 1.0 }}
      className="bg-brand-blue-deep backdrop-blur-md border-t border-white/[0.08] absolute bottom-0 left-0 w-full z-50"
      role="complementary"
      aria-label="Partner organizations"
    >
      <div className="max-w-[1780px] mx-auto px-6 py-3 flex flex-wrap items-center gap-4 md:gap-8">
        <span className="text-white text-base font-montserrat font-medium tracking-[0.16em] uppercase whitespace-nowrap">
          In Partnership With
        </span>
        <div className="flex flex-wrap items-center gap-5" role="list">
          {PARTNERS.map((partner, i) => (
            <span
              key={partner}
              role="listitem"
              className="flex items-center gap-4 text-white/75 font-montserrat text-sm hover:text-white transition-colors duration-200"
            >
              {i > 0 && (
                <span
                  className="hidden sm:block w-px h-3.5 bg-white/15"
                  aria-hidden="true"
                />
              )}
              {partner}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // Parallax: bg moves at ~35% of scroll speed — classic obama.org feel
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen "
      aria-labelledby="hero-headline"
    >
      <div className="relative min-h-screen overflow-hidden">
        {/* ── Parallax background ── */}
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y: bgY }} className="absolute inset-0">
            <div className="absolute inset-0">
              <Image
                src="/medium-shot-people-discussing.jpg"
                alt="Veterans community gathering in the U.S. Virgin Islands"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </motion.div>
        </div>

        <div
          className="absolute inset-0 z-[1] bg-gradient-to-r from-brand-blue/90 via-brand-blue/55 to-brand-blue/10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 z-[1]
                   bg-gradient-to-t from-brand-blue-deep/70 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="absolute bottom-20 left-0 right-0 z-[2] pb-24">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="max-w-[1780px] w-full mx-auto px-6 space-y-6"
          >
            {/* Small eyebrow */}
            <motion.p
              variants={heroItem}
              className="text-white border border-white font-montserrat font-medium text-xs md:text-base xl:text-lg bg-white/5 uppercase inline-block px-3 py-1"
            >
              Nonprofit · U.S. Virgin Islands
            </motion.p>
            <div>
              <motion.h1
                variants={heroItem}
                id="hero-headline"
                className="font-rundale font-bold text-white uppercase text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-normal"
              >
                A dedicated space for veterans to heal, connect, and thrive.
              </motion.h1>

              <motion.p
                variants={heroItem}
                className="text-white font-montserrat md:text-lg xl:text-2xl leading-loose"
              >
                We are a nonprofit supporting veterans and their families across
                the U.S. Virgin Islands &mdash; connecting them to peer
                communities, meaningful activities, and opportunities to heal
                and grow.
              </motion.p>
            </div>

            <motion.div
              variants={heroItem}
              className="flex flex-wrap gap-6 items-center md:text-lg xl:text-2xl "
            >
              <Link
                href="https://givebutter.com/islands-of-valor-initiative-gvl8ql"
                className="group inline-flex items-center gap-2
                         text-white font-rundale font-medium tracking-wide
                         border-b border-white/40 pb-0.5
                         hover:border-white transition-colors duration-200"
              >
                Support our Mission
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>

              <span className="text-white/20 text-xs" aria-hidden="true">
                |
              </span>

              <Link
                href="/programs"
                className="group inline-flex items-center gap-2
                         text-white/60 font-rundale font-medium tracking-wide
                         hover:text-white transition-colors duration-200"
              >
                IVI Support programs
                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <PartnerBar />
      </div>
    </section>
  );
}
