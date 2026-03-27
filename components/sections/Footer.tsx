"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Anchor, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";
import { FOOTER_COLUMNS } from "@/lib/data";

// ─── Newsletter Form ──────────────────────────────────────────────────────────

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("Please enter a valid email address.");
        return;
      }
      setError("");
      setSubmitted(true);
      setEmail("");
    },
    [email]
  );

  return (
    <div>
      <h4 className="font-sans font-semibold text-[0.68rem] tracking-[0.14em] uppercase text-white/40 mb-4">
        Join the $25k Launch Journey
      </h4>
      <p className="font-sans font-light text-[0.82rem] text-white/40 leading-[1.65] mb-4">
        Get updates on our progress, upcoming events, and veteran stories.
      </p>

      {submitted ? (
        <p className="font-sans text-sm text-sage-light flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sage-light inline-block" />
          You&rsquo;re in. Welcome to the journey.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Newsletter signup"
          className="flex flex-col gap-2"
        >
          <div className="flex">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              placeholder="Your email address"
              autoComplete="email"
              aria-describedby={error ? "footer-email-error" : undefined}
              className="
                flex-1 bg-white/[0.05] border border-white/[0.1] border-r-0
                rounded-l-lg px-4 py-2.5
                font-sans text-sm text-white placeholder:text-white/25
                outline-none focus:border-gold/50
                transition-colors duration-200
              "
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="
                bg-gold text-navy-deep px-4 rounded-r-lg
                hover:bg-gold-light transition-colors duration-200
                flex items-center justify-center
              "
            >
              <ArrowRight size={15} strokeWidth={2} />
            </button>
          </div>
          {error && (
            <p id="footer-email-error" role="alert" className="text-red-400 text-xs font-sans">
              {error}
            </p>
          )}
          <p className="font-sans text-[0.72rem] text-white/20">
            No spam, ever. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      className="bg-navy-deep border-t border-white/[0.06]"
      role="contentinfo"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Main grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="
            py-16 grid gap-10
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.6fr]
          "
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-white no-underline group w-fit"
              aria-label="Islands of Valor — Home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/[0.15] border border-gold/25 group-hover:bg-gold/25 transition-colors">
                <Anchor size={16} strokeWidth={1.5} className="text-gold" />
              </span>
              <span className="font-serif text-[1.2rem] leading-none tracking-tight">
                Islands of{" "}
                <span className="text-gold font-semibold italic">Valor</span>
              </span>
            </Link>

            <p className="font-sans font-light text-[0.84rem] text-white/40 leading-[1.75] max-w-[220px]">
              Supporting veterans and their families across the U.S. Virgin
              Islands since 2024.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5" aria-label="Social media">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={`Islands of Valor on ${label}`}
                  className="
                    w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.09]
                    flex items-center justify-center
                    text-white/45 hover:text-white hover:bg-white/[0.1]
                    transition-all duration-200
                  "
                >
                  <Icon size={15} strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          {FOOTER_COLUMNS.map((col) => (
            <motion.div key={col.heading} variants={fadeUp} className="flex flex-col gap-4">
              <h4 className="font-sans font-semibold text-[0.68rem] tracking-[0.14em] uppercase text-white/40">
                {col.heading}
              </h4>
              <nav aria-label={col.heading}>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="
                      block font-sans font-light text-[0.875rem] text-white/50
                      hover:text-white transition-colors duration-150 mb-2.5
                    "
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          ))}

          {/* Newsletter column */}
          <motion.div variants={fadeUp}>
            <NewsletterForm />
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[0.78rem] text-white/28">
            &copy; {new Date().getFullYear()} Islands of Valor. Registered
            501(c)(3) nonprofit organization. All rights reserved.
          </p>
          <p className="font-sans text-[0.72rem] text-white/20 italic font-light">
            Built with purpose, for those who served.
          </p>
        </div>
      </div>
    </footer>
  );
}
