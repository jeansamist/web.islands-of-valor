"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  MapPin,
  ArrowRight,
  Pen,
} from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  cardSpring,
  progressBar,
  VIEWPORT_ONCE,
} from "@/lib/animations";
import { IMPACT_CARDS, TRUST_MARKERS } from "@/lib/data";

// ─── Progress Bar ─────────────────────────────────────────────────────────────

const GOAL = 25_000;
const RAISED = 0;
const PROGRESS_PCT = `${Math.round((RAISED / GOAL) * 100)}%`;

function ProgressBar() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className="mb-12"
      role="group"
      aria-labelledby="progress-label"
    >
      <div
        id="progress-label"
        className="flex items-center justify-between mb-3"
      >
        <span className="font-sans text-sm text-white/50">
          Campaign Progress
        </span>
        <span className="font-sans font-semibold text-sm text-gold">
          ${RAISED.toLocaleString()} / ${GOAL.toLocaleString()} Goal
        </span>
      </div>

      <div
        className="h-1.5 rounded-full bg-white/10 overflow-hidden"
        role="progressbar"
        aria-valuenow={RAISED}
        aria-valuemin={0}
        aria-valuemax={GOAL}
        aria-label="Fundraising campaign progress"
      >
        <motion.div
          variants={progressBar(PROGRESS_PCT === "0%" ? "0%" : PROGRESS_PCT)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="h-full rounded-full bg-gradient-to-r from-sage to-gold"
        />
      </div>
    </motion.div>
  );
}

// ─── Trust Marker Icons ───────────────────────────────────────────────────────

const TRUST_ICONS = {
  ShieldCheck,
  TrendingUp,
  MapPin,
} as const;

type TrustIconName = keyof typeof TRUST_ICONS;

// ─── Impact Card ─────────────────────────────────────────────────────────────

interface ImpactCardProps {
  amount: number;
  title: string;
  description: string;
  ctaLabel: string;
  selected: boolean;
  onSelect: () => void;
  onDonate: () => void;
}

function ImpactCard({
  amount,
  title,
  description,
  ctaLabel,
  selected,
  onSelect,
  onDonate,
}: ImpactCardProps) {
  return (
    <motion.article
      variants={cardSpring}
      onClick={onSelect}
      className={`
        group relative flex flex-col gap-4 p-6 rounded-card cursor-pointer
        border transition-all duration-300 ease-spring
        ${
          selected
            ? "border-gold bg-gold/10 shadow-gold/20 shadow-lg -translate-y-1"
            : "border-white/[0.09] bg-white/[0.03] hover:border-gold/40 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-lg"
        }
      `}
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      {/* Selected indicator */}
      {selected && (
        <div
          className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold"
          aria-hidden="true"
        />
      )}

      <div className="font-serif font-light text-[2.25rem] leading-none text-gold">
        ${amount}
      </div>

      <div className="font-sans font-semibold text-[0.75rem] tracking-[0.1em] uppercase text-white">
        {title}
      </div>

      <p className="font-sans font-light text-[0.875rem] text-white/50 leading-[1.7] flex-1">
        {description}
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDonate();
        }}
        className={`
          w-full text-center font-sans font-medium text-[0.8rem] tracking-wide
          py-2.5 rounded-lg border transition-all duration-200
          ${
            selected
              ? "bg-gold border-gold text-navy-deep"
              : "bg-transparent border-gold/50 text-gold hover:bg-gold hover:border-gold hover:text-navy-deep"
          }
        `}
        aria-label={`${ctaLabel} — $${amount} donation`}
      >
        {ctaLabel}
      </button>
    </motion.article>
  );
}

// ─── Custom Amount Card ───────────────────────────────────────────────────────

function CustomAmountCard({ onDonate }: { onDonate: (amount: number) => void }) {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = useCallback(() => {
    const num = parseFloat(value);
    if (!num || num < 1) {
      setError("Please enter a valid amount (min $1).");
      return;
    }
    setError("");
    onDonate(num);
  }, [value, onDonate]);

  return (
    <motion.article
      variants={cardSpring}
      className="flex flex-col gap-4 p-6 rounded-card
                 border border-dashed border-white/[0.15]
                 bg-white/[0.02] hover:border-white/25
                 transition-colors duration-200"
      aria-label="Custom donation amount"
    >
      <div className="flex items-center gap-2">
        <Pen size={14} strokeWidth={1.25} className="text-white/40" />
        <span className="font-sans font-semibold text-[0.75rem] tracking-[0.1em] uppercase text-white">
          Custom Impact
        </span>
      </div>

      <p className="font-sans font-light text-[0.875rem] text-white/50 leading-[1.7]">
        Enter any amount and support the mission in your own way.
      </p>

      <div className="flex items-end gap-2">
        <span className="font-serif text-[1.75rem] text-white/30 leading-none pb-1">
          $
        </span>
        <input
          type="number"
          inputMode="decimal"
          min="1"
          step="1"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError("");
          }}
          placeholder="0.00"
          aria-label="Custom donation amount in dollars"
          aria-describedby={error ? "custom-error" : undefined}
          className="
            flex-1 bg-transparent border-0 border-b border-white/20
            text-white font-serif text-[1.75rem] font-light
            placeholder:text-white/20 outline-none pb-1
            focus:border-gold transition-colors duration-200
            [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none
          "
        />
      </div>

      {error && (
        <p id="custom-error" role="alert" className="text-red-400 text-xs font-sans">
          {error}
        </p>
      )}

      <button
        onClick={handleSubmit}
        className="w-full text-center font-sans font-medium text-[0.8rem] tracking-wide
                   py-2.5 rounded-lg border border-gold/50 text-gold
                   hover:bg-gold hover:border-gold hover:text-navy-deep
                   transition-all duration-200 flex items-center justify-center gap-2"
      >
        Give Your Way
        <ArrowRight size={14} strokeWidth={1.75} />
      </button>
    </motion.article>
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────

function TrustBar() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className="mt-16 pt-10 border-t border-white/[0.08]
                 grid grid-cols-1 sm:grid-cols-3 gap-8"
      role="list"
      aria-label="Trust and transparency indicators"
    >
      {TRUST_MARKERS.map(({ icon, title, description }) => {
        const Icon = TRUST_ICONS[icon as TrustIconName];
        return (
          <motion.div
            key={title}
            variants={fadeUp}
            role="listitem"
            className="flex flex-col items-center text-center gap-3"
          >
            <div
              className="w-11 h-11 rounded-full bg-sage/10 border border-sage/20
                         flex items-center justify-center"
              aria-hidden="true"
            >
              <Icon size={18} strokeWidth={1.25} className="text-sage-light" />
            </div>
            <h4 className="font-sans font-semibold text-[0.85rem] text-white">
              {title}
            </h4>
            <p className="font-sans font-light text-[0.8rem] text-white/50 leading-[1.65]">
              {description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// ─── Toast ────────────────────────────────────────────────────────────────────

function useToast() {
  const [message, setMessage] = useState<string | null>(null);

  const show = useCallback((msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 4500);
  }, []);

  return { message, show };
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function Fundraising() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const { message: toastMsg, show: showToast } = useToast();

  const handleDonate = useCallback(
    (amount: number, label: string) => {
      showToast(
        `Thank you for choosing to ${label}. You'll be redirected to secure checkout.`
      );
    },
    [showToast]
  );

  const handleCustomDonate = useCallback(
    (amount: number) => {
      showToast(
        `Thank you for your $${amount.toFixed(2)} gift. You'll be redirected to secure checkout.`
      );
    },
    [showToast]
  );

  return (
    <section
      id="donate"
      className="section-padding bg-navy-deep"
      aria-labelledby="fundraising-heading"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="text-sage-light font-sans font-semibold text-[0.7rem] tracking-[0.18em] uppercase mb-4"
        >
          Fund the Mission
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          transition={{ delay: 0.08 }}
          id="fundraising-heading"
          className="heading-serif text-display-xl text-white mb-4"
        >
          Help a Veteran Find Their Way
          <br />
          <em className="italic text-sage-light">Back to Community</em>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          transition={{ delay: 0.14 }}
          className="font-sans font-light text-white/60 text-[1.05rem] leading-[1.8] max-w-[560px] mb-10"
        >
          We are raising{" "}
          <strong className="text-gold font-semibold">$25,000</strong> to launch
          our first programs, connect isolated veterans, and create safe spaces
          across the U.S. Virgin Islands.
        </motion.p>

        {/* Progress bar */}
        <ProgressBar />

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          role="list"
          aria-label="Donation options"
        >
          {IMPACT_CARDS.map((card, idx) => (
            <ImpactCard
              key={card.amount}
              {...card}
              selected={selectedCard === idx}
              onSelect={() => setSelectedCard(idx)}
              onDonate={() => handleDonate(card.amount, card.ctaLabel)}
            />
          ))}
          <CustomAmountCard onDonate={handleCustomDonate} />
        </motion.div>

        {/* Trust bar */}
        <TrustBar />
      </div>

      {/* Toast notification */}
      {toastMsg && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999]
                     bg-navy-deep border border-gold/40 text-white
                     font-sans text-sm px-6 py-4 rounded-xl
                     shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                     max-w-[90vw] text-center"
        >
          {toastMsg}
        </motion.div>
      )}
    </section>
  );
}
