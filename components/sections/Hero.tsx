"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { heroContainer, heroItem, fadeIn, VIEWPORT_ONCE } from "@/lib/animations";

// ─── Partner Bar ──────────────────────────────────────────────────────────────

const PARTNERS = [
  "VA Caribbean Healthcare System",
  "VI Tourism Board",
  "Local Artisan Collectives",
];

function PartnerBar() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay: 1.2 }}
      className="absolute bottom-0 left-0 right-0 z-10
                 bg-navy-deep/75 backdrop-blur-xl
                 border-t border-white/[0.08]"
      role="complementary"
      aria-label="Partner organizations"
    >
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-wrap items-center gap-4 md:gap-8">
        <span className="text-white/40 text-[0.68rem] font-sans font-medium tracking-[0.14em] uppercase whitespace-nowrap">
          In Partnership With
        </span>
        <div className="flex flex-wrap items-center gap-6" role="list">
          {PARTNERS.map((partner, i) => (
            <span
              key={partner}
              role="listitem"
              className="flex items-center gap-4 text-white/50 font-serif text-sm italic
                         hover:text-white/75 transition-colors duration-200"
            >
              {i > 0 && (
                <span
                  className="hidden sm:block w-px h-4 bg-white/[0.15]"
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
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.06] }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1800&q=80"
            alt="A veteran family enjoying the beauty of the U.S. Virgin Islands"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Gradient overlay — dark on left for legibility, transparent right */}
        <div
          className="absolute inset-0 bg-gradient-to-r
                     from-navy-deep/92 via-navy-deep/70 to-navy-deep/25"
          aria-hidden="true"
        />
        {/* Subtle top vignette */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full pt-28 pb-40 lg:pb-48">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[700px]"
        >
          {/* Eyebrow */}
          <motion.div variants={heroItem} className="mb-7">
            <span
              className="inline-flex items-center gap-2
                         bg-sage/10 border border-sage/25 text-sage-light
                         text-[0.7rem] font-sans font-semibold tracking-[0.16em] uppercase
                         px-4 py-2 rounded-full"
            >
              <span
                className="block w-1.5 h-1.5 rounded-full bg-sage-light animate-pulse"
                aria-hidden="true"
              />
              Nonprofit · U.S. Virgin Islands
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={heroItem}
            id="hero-headline"
            className="font-serif font-normal text-display-2xl text-white mb-6 leading-[1.08]"
          >
            A dedicated space for veterans to{" "}
            <em className="text-sage-light not-italic">heal, connect,</em>{" "}
            and thrive.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={heroItem}
            className="text-white/70 font-sans font-light text-[1.1rem] leading-[1.8] mb-10 max-w-[540px]"
          >
            We&rsquo;re a nonprofit supporting veterans and their families
            across the U.S. Virgin Islands &mdash; connecting them to peer
            communities, meaningful activities, and opportunities to heal and
            grow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroItem}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#donate"
              className="inline-flex items-center justify-center gap-2.5
                         bg-gold text-navy-deep
                         font-sans font-semibold text-sm tracking-wide
                         px-7 py-4 rounded-xl
                         hover:bg-gold-light transition-all duration-250
                         shadow-gold hover:shadow-gold-hover hover:-translate-y-0.5"
            >
              Support Our Mission
              <ArrowRight size={16} strokeWidth={1.75} />
            </Link>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2.5
                         bg-transparent text-white
                         font-sans font-normal text-sm tracking-wide
                         px-7 py-4 rounded-xl
                         border border-white/30
                         hover:border-white/60 hover:bg-white/[0.06]
                         transition-all duration-200"
            >
              <BookOpen size={16} strokeWidth={1.25} />
              IVI Support Programs
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <PartnerBar />
    </section>
  );
}
