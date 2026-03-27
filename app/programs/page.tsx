"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Compass,
  BookOpen,
  Globe,
  ShoppingBag,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import {
  fadeUp,
  staggerContainer,
  cardSpring,
  heroContainer,
  heroItem,
  VIEWPORT_ONCE,
} from "@/lib/animations";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Program {
  Icon: React.ElementType;
  title: string;
  description: string;
  accentClass: string;
  iconBgClass: string;
  borderClass: string;
  bgClass: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROGRAMS: Program[] = [
  {
    Icon: Users,
    title: "Peer Support Networks",
    description:
      "Weekly coffee hours, mentorship, and social gatherings that reduce isolation and build strong veteran connections.",
    accentClass: "text-sage",
    iconBgClass: "bg-sage/10",
    borderClass: "border-sage/[0.15] hover:border-sage/40",
    bgClass: "bg-white hover:bg-sage/[0.02]",
  },
  {
    Icon: Compass,
    title: "Recreation & Wellness Programs",
    description:
      "Outdoor adventures — sailing, hiking, eco-tours — that promote physical and mental well-being.",
    accentClass: "text-gold-dark",
    iconBgClass: "bg-gold/10",
    borderClass: "border-gold/[0.15] hover:border-gold/40",
    bgClass: "bg-white hover:bg-gold/[0.02]",
  },
  {
    Icon: BookOpen,
    title: "Workshops & Support",
    description:
      "Mental health seminars, financial literacy training, and career transition support tailored to USVI veterans.",
    accentClass: "text-navy-light",
    iconBgClass: "bg-navy/[0.07]",
    borderClass: "border-navy/10 hover:border-navy/25",
    bgClass: "bg-white hover:bg-navy/[0.02]",
  },
  {
    Icon: Globe,
    title: "Visitor Veteran Program",
    description:
      "Partnering with local hotels and tour operators to host visiting veterans with immersive island experiences, creating connections and funding local programs.",
    accentClass: "text-sage",
    iconBgClass: "bg-sage/10",
    borderClass: "border-sage/[0.15] hover:border-sage/40",
    bgClass: "bg-white hover:bg-sage/[0.02]",
  },
  {
    Icon: ShoppingBag,
    title: "Community Pride Merchandise",
    description:
      "Locally designed apparel — like Virgin Islands Veteran Pride T-shirts — helps fund our programs and raise visibility for veterans.",
    accentClass: "text-gold-dark",
    iconBgClass: "bg-gold/10",
    borderClass: "border-gold/[0.15] hover:border-gold/40",
    bgClass: "bg-white hover:bg-gold/[0.02]",
  },
];

// ─── Program Card ─────────────────────────────────────────────────────────────

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const { Icon, title, description, accentClass, iconBgClass, borderClass, bgClass } =
    program;

  return (
    <motion.article
      variants={cardSpring}
      className={`
        group relative flex flex-col gap-5 p-7 rounded-card border
        shadow-card hover:shadow-card-hover
        transition-all duration-300 ease-spring
        hover:-translate-y-1.5
        ${bgClass} ${borderClass}
      `}
      aria-label={title}
    >
      {/* Index watermark */}
      <span
        className="absolute top-5 right-6 font-serif text-[2.5rem] font-light
                   leading-none text-greige select-none pointer-events-none
                   transition-colors duration-300 group-hover:text-greige-dark"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div
        className={`
          w-12 h-12 rounded-xl flex items-center justify-center
          flex-shrink-0 transition-transform duration-300
          group-hover:scale-110
          ${iconBgClass}
        `}
        aria-hidden="true"
      >
        <Icon size={22} strokeWidth={1.25} className={accentClass} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2.5">
        <h3
          className={`
            font-serif font-semibold text-[1.2rem] text-navy
            leading-snug tracking-tight
          `}
        >
          {title}
        </h3>
        <p className="font-sans font-light text-[0.9rem] text-navy/60 leading-[1.78]">
          {description}
        </p>
      </div>

      {/* Learn more affordance */}
      <div
        className={`
          mt-auto flex items-center gap-1.5 text-[0.78rem] font-sans font-semibold
          tracking-wide uppercase opacity-0 -translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300 ease-spring
          ${accentClass}
        `}
        aria-hidden="true"
      >
        Learn more
        <ChevronRight size={13} strokeWidth={2} />
      </div>
    </motion.article>
  );
}

// ─── Section: Hero ────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative bg-greige-pale overflow-hidden"
      aria-labelledby="programs-hero-heading"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none
                   bg-gradient-radial from-sage/[0.07] via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Horizontal rule decorations */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r
                   from-transparent via-greige to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r
                   from-transparent via-greige to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-40 pb-28">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[680px] mx-auto text-center flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div variants={heroItem} className="mb-7">
            <span
              className="inline-flex items-center gap-2
                         bg-sage/10 border border-sage/20 text-sage-dark
                         text-[0.68rem] font-sans font-semibold tracking-[0.18em] uppercase
                         px-4 py-2 rounded-full"
            >
              <span
                className="block w-1 h-1 rounded-full bg-sage"
                aria-hidden="true"
              />
              Our Programs
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={heroItem}
            id="programs-hero-heading"
            className="font-serif font-normal text-display-2xl text-navy
                       tracking-tight mb-6"
          >
            What We Offer
          </motion.h1>

          {/* Decorative divider */}
          <motion.div
            variants={heroItem}
            className="w-14 h-px bg-gold mb-7"
            aria-hidden="true"
          />

          {/* Sub-headline */}
          <motion.p
            variants={heroItem}
            className="font-sans font-light text-[1.08rem] text-navy/60
                       leading-[1.85] max-w-[560px]"
          >
            Each of our programs is carefully designed to meet the needs of
            veterans while strengthening our community.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section: Program Grid ────────────────────────────────────────────────────

function ProgramGrid() {
  return (
    <section
      id="programs"
      className="section-padding bg-greige-light"
      aria-labelledby="programs-grid-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="max-w-[520px] mb-14">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="text-sage font-sans font-semibold text-[0.7rem]
                       tracking-[0.18em] uppercase mb-3"
          >
            Five Pillars of Support
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.08 }}
            id="programs-grid-heading"
            className="font-serif font-normal text-display-xl text-navy"
          >
            Programs Built{" "}
            <em className="italic text-sage">for Veterans,</em>
            <br />
            by Veterans.
          </motion.h2>
        </div>

        {/* Staggered card grid — 3-col desktop, 2-col tablet, 1-col mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="
            grid gap-5
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          "
          role="list"
          aria-label="IVI program offerings"
        >
          {PROGRAMS.map((program, idx) => (
            <div key={program.title} role="listitem">
              <ProgramCard program={program} index={idx} />
            </div>
          ))}

          {/* Sixth cell — decorative quote card to complete the 3×2 grid */}
          <motion.div
            variants={cardSpring}
            className="
              hidden lg:flex flex-col justify-between
              p-7 rounded-card border border-navy/[0.07]
              bg-navy text-white
              relative overflow-hidden
            "
            aria-hidden="true"
          >
            {/* Background texture */}
            <div
              className="absolute inset-0 bg-gradient-radial
                         from-sage/10 via-transparent to-transparent"
            />
            <span className="relative z-10 font-serif text-[4.5rem] leading-none text-gold/20 select-none">
              &ldquo;
            </span>
            <div className="relative z-10">
              <p className="font-serif italic font-light text-[1.15rem] text-white/80 leading-[1.7] mb-5">
                Service does not end when you come home. It evolves.
              </p>
              <div className="w-8 h-px bg-gold" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section: Unified CTA ─────────────────────────────────────────────────────

function CTASection() {
  return (
    <section
      id="cta"
      className="section-padding bg-greige-pale relative overflow-hidden"
      aria-labelledby="programs-cta-heading"
    >
      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r
                   from-transparent via-greige to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="max-w-[840px] mx-auto">
          {/* Two-column layout: text left, note right on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-14 lg:gap-20 items-start">

            {/* Left: heading + sub + buttons */}
            <div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                className="text-sage font-sans font-semibold text-[0.7rem]
                           tracking-[0.18em] uppercase mb-4"
              >
                Take the Next Step
              </motion.p>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                transition={{ delay: 0.08 }}
                id="programs-cta-heading"
                className="font-serif font-normal text-display-xl text-navy mb-5"
              >
                Join, Support,{" "}
                <em className="italic text-sage">or Empower</em>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                transition={{ delay: 0.14 }}
                className="font-sans font-light text-[1.02rem] text-navy/60
                           leading-[1.85] max-w-[540px] mb-10"
              >
                Whether you are a veteran ready to join our programs, a
                supporter looking to make a difference, or an organization
                interested in partnering with us, there&apos;s a place for you.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {/* Ghost / outline */}
                <Link
                  href="/contact"
                  className="
                    inline-flex items-center justify-center gap-2.5
                    bg-transparent text-navy
                    font-sans font-medium text-sm tracking-wide
                    px-7 py-4 rounded-xl
                    border-2 border-navy/25
                    hover:border-navy hover:bg-navy/[0.04]
                    transition-all duration-250 ease-spring
                  "
                  aria-label="Veterans: sign up for programs"
                >
                  <Users size={16} strokeWidth={1.25} aria-hidden="true" />
                  Veterans: Sign Up for Programs
                </Link>

                {/* Solid Navy */}
                <Link
                  href="/#donate"
                  className="
                    inline-flex items-center justify-center gap-2.5
                    bg-navy text-white
                    font-sans font-medium text-sm tracking-wide
                    px-7 py-4 rounded-xl
                    border-2 border-navy
                    hover:bg-navy-mid hover:border-navy-mid
                    transition-all duration-250 ease-spring
                    shadow-[0_4px_20px_rgba(10,25,47,0.2)]
                    hover:shadow-[0_8px_32px_rgba(10,25,47,0.28)]
                    hover:-translate-y-0.5
                  "
                  aria-label="Support our mission"
                >
                  Support Our Mission
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </Link>
              </motion.div>
            </div>

            {/* Right: note card */}
            <motion.aside
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              transition={{ delay: 0.28 }}
              className="
                lg:mt-[6.5rem]
                flex flex-col gap-4 p-6 rounded-card
                bg-sage/[0.07] border border-sage/20
                max-w-[280px]
              "
              aria-label="Additional context"
            >
              <div
                className="w-8 h-8 rounded-lg bg-sage/[0.15] flex items-center justify-center"
                aria-hidden="true"
              >
                <Globe size={16} strokeWidth={1.25} className="text-sage" />
              </div>
              <p className="font-sans font-light text-[0.88rem] text-navy/70 leading-[1.75] italic">
                Every action directly strengthens the veteran community in the
                U.S. Virgin Islands.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <div className="h-px flex-1 bg-sage/25" aria-hidden="true" />
                <span className="font-sans text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-sage/70">
                  Islands of Valor
                </span>
                <div className="h-px flex-1 bg-sage/25" aria-hidden="true" />
              </div>
            </motion.aside>

          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProgramsPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-[72px]">
        <HeroSection />
        <ProgramGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
