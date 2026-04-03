"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  MapPin,
  ArrowRight,
  Pen,
  X,
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
      <div id="progress-label" className="flex items-center justify-between mb-3">
        <span className="font-montserrat text-sm text-white/50">Campaign Progress</span>
        <span className="font-montserrat font-semibold text-sm text-brand-gold">
          ${RAISED.toLocaleString()} / ${GOAL.toLocaleString()} Goal
        </span>
      </div>

      <div
        className="h-2 rounded-full bg-white/10 overflow-hidden"
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
          className="h-full rounded-full bg-gradient-brand-r"
        />
      </div>
    </motion.div>
  );
}

// ─── Trust Marker Icons ───────────────────────────────────────────────────────

const TRUST_ICONS = { ShieldCheck, TrendingUp, MapPin } as const;
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
            ? "border-brand-gold bg-brand-gold/10 shadow-gold -translate-y-1"
            : "border-white/[0.09] bg-white/[0.04] hover:border-brand-gold/40 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-lg"
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
      {selected && (
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-brand-gold" aria-hidden="true" />
      )}

      <div className="font-rundale font-bold text-[2.5rem] leading-none text-brand-gold">
        ${amount}
      </div>

      <div className="font-rundale font-medium text-[0.78rem] tracking-[0.1em] uppercase text-white">
        {title}
      </div>

      <p className="font-montserrat font-light text-[0.875rem] text-white/50 leading-[1.75] flex-1">
        {description}
      </p>

      <button
        onClick={(e) => { e.stopPropagation(); onDonate(); }}
        className={`
          w-full text-center font-rundale font-medium text-[0.8rem] tracking-wide
          py-2.5 rounded-lg border transition-all duration-200
          ${
            selected
              ? "bg-brand-red border-brand-red text-white"
              : "bg-transparent border-brand-red/50 text-brand-red hover:bg-brand-red hover:border-brand-red hover:text-white"
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
        <span className="font-rundale font-medium text-[0.78rem] tracking-[0.1em] uppercase text-white">
          Custom Impact
        </span>
      </div>

      <p className="font-montserrat font-light text-[0.875rem] text-white/50 leading-[1.75]">
        Enter any amount and support the mission in your own way.
      </p>

      <div className="flex items-end gap-2">
        <span className="font-rundale font-bold text-[1.75rem] text-white/30 leading-none pb-1">$</span>
        <input
          type="number"
          inputMode="decimal"
          min="1"
          step="1"
          value={value}
          onChange={(e) => { setValue(e.target.value); if (error) setError(""); }}
          placeholder="0.00"
          aria-label="Custom donation amount in dollars"
          aria-describedby={error ? "custom-error" : undefined}
          className="
            flex-1 bg-transparent border-0 border-b border-white/20
            text-white font-rundale font-bold text-[1.75rem]
            placeholder:text-white/20 outline-none pb-1
            focus:border-brand-gold transition-colors duration-200
            [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none
          "
        />
      </div>

      {error && (
        <p id="custom-error" role="alert" className="text-red-400 text-xs font-montserrat">
          {error}
        </p>
      )}

      <button
        onClick={handleSubmit}
        className="w-full text-center font-rundale font-medium text-[0.8rem] tracking-wide
                   py-2.5 rounded-lg border border-brand-red/50 text-brand-red
                   hover:bg-brand-red hover:border-brand-red hover:text-white
                   transition-all duration-200 flex items-center justify-center gap-2"
      >
        Give Your Way
        <ArrowRight size={14} strokeWidth={2} />
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
              className="w-11 h-11 rounded-full bg-brand-gold/10 border border-brand-gold/25
                         flex items-center justify-center"
              aria-hidden="true"
            >
              <Icon size={18} strokeWidth={1.25} className="text-brand-gold" />
            </div>
            <h4 className="font-rundale font-medium text-[0.9rem] text-white">{title}</h4>
            <p className="font-montserrat font-light text-[0.8rem] text-white/50 leading-[1.65]">
              {description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// ─── Donation Modal ───────────────────────────────────────────────────────────

interface ModalProps {
  amount: number;
  packageLabel: string;
  onClose: () => void;
}

function DonationModal({ amount, packageLabel, onClose }: ModalProps) {
  const [form, setForm] = useState({ fullName: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "A valid email address is required.";
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const field = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  return (
    <>
      <div
        className="fixed inset-0 z-[998] bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full max-w-md border border-brand-gold/20 bg-brand-green p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close donation form"
            className="absolute right-4 top-4 text-white/40 transition-colors duration-200 hover:text-white"
          >
            <X size={20} />
          </button>

          {submitted ? (
            <div className="flex flex-col gap-4 py-4">
              <div className="h-[4px] w-10 bg-brand-gold" aria-hidden="true" />
              <h3
                id="modal-title"
                className="font-rundale text-2xl font-bold text-white"
              >
                Thank you, {form.fullName.split(" ")[0]}.
              </h3>
              <p className="font-montserrat text-sm leading-relaxed text-white/60">
                Your ${amount} donation intention has been received. We&rsquo;ll
                follow up at{" "}
                <span className="text-brand-gold">{form.email}</span> with next
                steps.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 inline-flex items-center gap-2 bg-brand-red px-6 py-3 font-rundale font-medium text-sm text-white transition-colors duration-200 hover:opacity-90"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-stretch gap-4">
                <div
                  className="w-[3px] flex-shrink-0 bg-brand-gold"
                  aria-hidden="true"
                />
                <div>
                  <p className="mb-0.5 font-montserrat text-[0.68rem] uppercase tracking-[0.16em] text-white/40">
                    Selected Package
                  </p>
                  <p className="font-rundale text-2xl font-bold leading-none text-brand-gold">
                    ${amount}
                  </p>
                  <p className="mt-1 font-rundale text-sm font-medium text-white/80">
                    {packageLabel}
                  </p>
                </div>
              </div>

              <h3
                id="modal-title"
                className="mb-6 font-rundale text-xl font-bold text-white"
              >
                Complete Your Donation
              </h3>

              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Donation form"
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="modal-fullname"
                    className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-white/50"
                  >
                    Full Name
                  </label>
                  <input
                    id="modal-fullname"
                    type="text"
                    value={form.fullName}
                    onChange={(e) => field("fullName", e.target.value)}
                    autoComplete="name"
                    aria-describedby={
                      errors.fullName ? "modal-fullname-error" : undefined
                    }
                    placeholder="Roshawn Murraine"
                    className="border border-white/[0.12] bg-white/[0.06] px-4 py-3 font-montserrat text-sm text-white placeholder:text-white/25 outline-none transition-colors duration-200 focus:border-brand-gold/60"
                  />
                  {errors.fullName && (
                    <p
                      id="modal-fullname-error"
                      role="alert"
                      className="font-montserrat text-xs text-brand-red"
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="modal-email"
                    className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-white/50"
                  >
                    Email Address
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => field("email", e.target.value)}
                    autoComplete="email"
                    aria-describedby={
                      errors.email ? "modal-email-error" : undefined
                    }
                    placeholder="you@example.com"
                    className="border border-white/[0.12] bg-white/[0.06] px-4 py-3 font-montserrat text-sm text-white placeholder:text-white/25 outline-none transition-colors duration-200 focus:border-brand-gold/60"
                  />
                  {errors.email && (
                    <p
                      id="modal-email-error"
                      role="alert"
                      className="font-montserrat text-xs text-brand-red"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-red px-6 py-3.5 font-rundale font-medium text-sm tracking-wide text-white transition-opacity duration-200 hover:opacity-90"
                >
                  Confirm Donation — ${amount}
                  <ArrowRight size={14} strokeWidth={2} />
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

interface ModalState {
  amount: number;
  packageLabel: string;
}

export default function Fundraising() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [modal, setModal] = useState<ModalState | null>(null);

  const handleDonate = useCallback((amount: number, label: string) => {
    setModal({ amount, packageLabel: label });
  }, []);

  const handleCustomDonate = useCallback((amount: number) => {
    setModal({ amount, packageLabel: "Custom Impact" });
  }, []);

  return (
    <section
      id="donate"
      className="section-padding bg-brand-green"
      aria-labelledby="fundraising-heading"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="text-brand-gold font-montserrat font-semibold text-[0.7rem] tracking-[0.2em] uppercase mb-4"
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
          className="font-rundale font-bold text-display-xl text-white mb-4 leading-tight"
        >
          Help a Veteran Find Their Way
          <br />
          <span className="text-brand-gold">Back to Community</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          transition={{ delay: 0.14 }}
          className="font-montserrat font-light text-white/60 text-[1.05rem] leading-[1.8] max-w-[560px] mb-10"
        >
          We are raising{" "}
          <strong className="text-brand-gold font-semibold">$25,000</strong> to launch
          our first programs, connect isolated veterans, and create safe spaces
          across the U.S. Virgin Islands.
        </motion.p>

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

        <TrustBar />
      </div>

      {modal && (
        <DonationModal
          amount={modal.amount}
          packageLabel={modal.packageLabel}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  );
}
