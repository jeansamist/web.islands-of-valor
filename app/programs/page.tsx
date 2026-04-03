"use client";

import Footer from "@/components/sections/Footer";
import Nav from "@/components/sections/Nav";
import {
  VIEWPORT_ONCE,
  fadeUp,
  heroContainer,
  heroItem,
  staggerContainer,
} from "@/lib/animations";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Globe,
  ShoppingBag,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Program {
  Icon: React.ElementType;
  title: string;
  description: string;
  accent: string;
  iconBg: string;
  bar: string;
}

const PROGRAMS: Program[] = [
  {
    Icon: Users,
    title: "Peer Support Networks",
    description:
      "Weekly gatherings, mentorship, and trusted spaces that reduce isolation and rebuild connection among veterans.",
    accent: "text-brand-blue",
    iconBg: "bg-brand-blue/10",
    bar: "bg-brand-blue",
  },
  {
    Icon: Compass,
    title: "Recreation and Wellness",
    description:
      "Island-centered outdoor programs that support physical wellness, emotional recovery, and renewed purpose.",
    accent: "text-brand-red",
    iconBg: "bg-brand-red/10",
    bar: "bg-brand-red",
  },
  {
    Icon: BookOpen,
    title: "Workshops and Support",
    description:
      "Practical sessions focused on mental health, financial literacy, career transition, and everyday resilience.",
    accent: "text-brand-green",
    iconBg: "bg-brand-green/10",
    bar: "bg-brand-green",
  },
  {
    Icon: Globe,
    title: "Visitor Veteran Program",
    description:
      "Partnerships with island businesses to welcome visiting veterans into meaningful local experiences and community.",
    accent: "text-brand-blue",
    iconBg: "bg-brand-blue/10",
    bar: "bg-brand-blue",
  },
  {
    Icon: ShoppingBag,
    title: "Community Pride Merchandise",
    description:
      "Locally rooted merchandise that raises visibility, builds pride, and helps sustain veteran-focused programming.",
    accent: "text-brand-red",
    iconBg: "bg-brand-red/10",
    bar: "bg-brand-red",
  },
];

function ProgramsHero() {
  return (
    <section
      className="relative min-h-[82vh] overflow-hidden"
      aria-labelledby="programs-hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="/program.jpg"
          alt="Veterans in conversation during a community program"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-blue/92 via-brand-blue/68 to-brand-blue/18"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/75 via-brand-blue-deep/25 to-brand-blue-deep/25"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[82vh] w-full max-w-[1780px] items-end px-6 pb-20 pt-40">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[860px] space-y-6"
        >
          <motion.p
            variants={heroItem}
            className="inline-block border border-white bg-white/5 px-3 py-1 font-montserrat text-xs font-medium uppercase text-white md:text-base xl:text-lg"
          >
            Our Programs
          </motion.p>
          <motion.h1
            variants={heroItem}
            id="programs-hero-heading"
            className="font-rundale text-4xl font-bold uppercase leading-normal text-white md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Programs built to restore connection, create opportunity, and
            support healing.
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="max-w-[760px] font-montserrat text-base leading-loose text-white md:text-lg xl:text-2xl"
          >
            Every program is designed around what veterans and their families
            need most in the U.S. Virgin Islands: community, practical support,
            and meaningful ways to move forward together.
          </motion.p>
          <motion.div
            variants={heroItem}
            className="flex flex-wrap items-center gap-6 md:text-lg xl:text-xl"
          >
            <Link
              href="#programs-overview"
              className="group inline-flex items-center gap-2 border-b border-white/40 pb-0.5 font-rundale font-medium tracking-wide text-white transition-colors duration-200 hover:border-white"
            >
              Explore the Programs
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/#donate"
              className="group inline-flex items-center gap-2 font-rundale font-medium tracking-wide text-white/70 transition-colors duration-200 hover:text-white"
            >
              Support This Work
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProgramsOverview() {
  return (
    <section
      id="programs-overview"
      className="bg-white"
      aria-labelledby="programs-overview-heading"
    >
      <div className="mx-auto flex max-w-[1780px] flex-col py-20 pt-6 lg:gap-12 xl:flex-row">
        <div className="flex-1 space-y-6 bg-brand-blue p-6 md:p-12 xl:sticky xl:top-24 xl:self-start">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="inline-block bg-brand-red px-2 py-1 font-montserrat text-sm font-semibold uppercase text-white"
          >
            Five Pillars of Support
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.06 }}
            id="programs-overview-heading"
            className="font-rundale text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl"
          >
            What We Offer
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
            These programs are how we turn mission into action: reducing
            isolation, supporting recovery, and creating practical pathways for
            veterans to reconnect with purpose and community.
          </motion.div>
        </div>

        <div className="w-full md:max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="grid grid-cols-1"
            role="list"
            aria-label="Program offerings"
          >
            {PROGRAMS.map(
              ({ Icon, title, description, accent, iconBg, bar }, idx) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  role="listitem"
                  className={
                    "flex flex-col gap-5 p-8 md:p-10 lg:flex-row lg:items-start lg:gap-10 " +
                    (idx < PROGRAMS.length - 1
                      ? "border-b border-gray-100"
                      : "")
                  }
                >
                  <div className="flex w-full flex-col gap-4 lg:max-w-[340px] lg:flex-shrink-0">
                    <div className={`h-[4px] w-10 ${bar}`} aria-hidden="true" />
                    <div
                      className={`flex h-16 w-16 items-center justify-center ${iconBg}`}
                    >
                      <Icon size={24} strokeWidth={2} className={accent} />
                    </div>
                    <h3 className="font-rundale text-2xl font-bold leading-tight text-black md:text-3xl">
                      {title}
                    </h3>
                  </div>

                  <div className="flex-1 border-t border-gray-100 pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                    <p className="max-w-3xl font-montserrat text-base leading-relaxed text-gray-700 md:text-lg">
                      {description}
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

function ProgramsBridge() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2"
      aria-labelledby="programs-bridge-heading"
    >
      <div className="relative min-h-[340px] overflow-hidden lg:min-h-[560px]">
        <Image
          src="/program-2.jpg"
          alt="Veterans gathering through an Islands of Valor program"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="flex items-center bg-brand-blue px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
        <div className="max-w-[520px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="mb-8 flex gap-1"
            aria-hidden="true"
          >
            <div className="h-[4px] w-10 bg-brand-gold" />
            <div className="h-[4px] w-4 bg-white/25" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="mb-5 inline-block border border-white px-2 py-1 font-montserrat text-[0.68rem] uppercase tracking-[0.2em] text-white"
          >
            Why It Matters
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.1 }}
            id="programs-bridge-heading"
            className="mb-8 font-rundale text-3xl font-bold leading-[1.2] text-white md:text-4xl xl:text-5xl"
          >
            Programs are how we create real touchpoints for healing, trust, and
            belonging.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.18 }}
            className="mb-10 font-montserrat text-sm font-light leading-[1.9] text-white md:text-base"
          >
            From peer support to wellness and practical guidance, each offering
            is designed to meet veterans where they are and help them move
            forward with community around them.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.24 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white px-7 py-3.5 font-rundale text-sm font-medium tracking-wide text-brand-blue transition-all duration-200 hover:bg-brand-gold hover:text-gray-900"
            >
              Partner With Us
            </Link>
            <Link
              href="/#donate"
              className="inline-flex items-center justify-center border border-white/30 px-7 py-3.5 font-rundale text-sm font-medium tracking-wide text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              Support a Program
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProgramsCTA() {
  return (
    <section
      className="overflow-hidden bg-brand-light"
      aria-labelledby="programs-cta-heading"
    >
      <div className="flex h-[5px]">
        <div className="flex-1 bg-brand-red" />
        <div className="w-32 bg-brand-gold" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.p
            variants={fadeUp}
            className="mb-8 font-montserrat text-[0.68rem] uppercase tracking-[0.22em] text-brand-blue/55"
          >
            Join the Mission
          </motion.p>

          <motion.div variants={fadeUp}>
            <h2
              id="programs-cta-heading"
              className="font-rundale text-[clamp(4rem,13vw,10rem)] font-bold uppercase leading-[0.88] text-brand-blue"
            >
              GET
            </h2>
            <h2
              aria-hidden="true"
              className="font-rundale text-[clamp(4rem,13vw,10rem)] font-bold uppercase leading-[0.88] text-brand-red"
            >
              INVOLVED
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="mt-12 flex max-w-[760px] flex-col gap-6 sm:flex-row sm:items-center"
          >
            <p className="flex-1 font-montserrat text-base font-light leading-[1.85] text-gray-700">
              Whether you want to join a program, support veteran wellness, or
              help us build community partnerships, there is a place for you in
              this work.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue px-7 py-3.5 font-rundale text-sm font-medium tracking-wide text-white transition-all duration-200 hover:bg-brand-blue-deep"
              >
                Contact Us
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
              <Link
                href="/#donate"
                className="inline-flex items-center justify-center border border-brand-blue/20 px-7 py-3.5 font-rundale text-sm font-medium tracking-wide text-brand-blue transition-all duration-200 hover:border-brand-blue hover:bg-white"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <ProgramsHero />
        <ProgramsOverview />
        <ProgramsBridge />
        <ProgramsCTA />
      </main>
      <Footer />
    </>
  );
}
