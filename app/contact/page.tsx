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
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

import { useCallback, useState } from "react";

// ─── Hero ─────────────────────────────────────────────────────────────────────

function ContactHero() {
  return (
    <section
      className="relative min-h-[70vh] overflow-hidden"
      aria-labelledby="contact-hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="/contact.jpg"
          alt="Veterans connecting through Islands of Valor"
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
        className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/75 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-[1780px] items-end px-6 pb-20 pt-40">
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
            Get in Touch
          </motion.p>
          <motion.h1
            variants={heroItem}
            id="contact-hero-heading"
            className="font-rundale text-4xl font-bold uppercase leading-normal text-white md:text-5xl lg:text-6xl xl:text-7xl"
          >
            We&rsquo;d love to hear from you.
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="max-w-[680px] font-montserrat text-base leading-loose text-white/80 md:text-lg xl:text-xl"
          >
            Whether you&rsquo;re a veteran, a potential partner, or someone who
            wants to support our mission &mdash; reach out. We&rsquo;re here and
            we&rsquo;re listening.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Contact Info + Form ───────────────────────────────────────────────────────

const CONTACT_CHANNELS = [
  {
    Icon: Mail,
    label: "Email Us",
    value: "info@islandsofvalor.org",
    href: "mailto:info@islandsofvalor.org",
    bar: "bg-brand-gold",
  },
  {
    Icon: Phone,
    label: "Call Us",
    value: "+1 (340) 000-0000",
    href: "tel:+13400000000",
    bar: "bg-brand-red",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "St. Thomas, U.S. Virgin Islands",
    href: "#",
    bar: "bg-brand-blue",
  },
] as const;

function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = useCallback(() => {
    const next: Record<string, string> = {};
    if (!form.firstName.trim()) next.firstName = "First name is required.";
    if (!form.lastName.trim()) next.lastName = "Last name is required.";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "A valid email address is required.";
    if (!form.subject) next.subject = "Please select a subject.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Please enter a message (at least 10 characters).";
    return next;
  }, [form]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const next = validate();
      if (Object.keys(next).length > 0) {
        setErrors(next);
        return;
      }
      setErrors({});
      setSubmitted(true);
    },
    [validate],
  );

  const field = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-5 py-20">
        <div className="h-[4px] w-12 bg-brand-gold" aria-hidden="true" />
        <h3 className="font-rundale text-3xl font-bold text-brand-blue md:text-4xl">
          Message received.
        </h3>
        <p className="max-w-sm font-montserrat text-base leading-relaxed text-gray-600">
          Thank you for reaching out. We&rsquo;ll get back to you as soon as
          possible.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({
              firstName: "",
              lastName: "",
              email: "",
              subject: "",
              message: "",
            });
          }}
          className="font-montserrat text-sm text-brand-blue underline underline-offset-4 hover:text-brand-red transition-colors duration-200"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="flex flex-col gap-6"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="firstName"
            className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue"
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            value={form.firstName}
            onChange={(e) => field("firstName", e.target.value)}
            autoComplete="given-name"
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            className="border border-gray-200 bg-brand-light px-4 py-3 font-montserrat text-sm text-black placeholder:text-gray-400 outline-none focus:border-brand-blue transition-colors duration-200"
            placeholder="Roshawn"
          />
          {errors.firstName && (
            <p
              id="firstName-error"
              role="alert"
              className="font-montserrat text-xs text-brand-red"
            >
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="lastName"
            className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue"
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            value={form.lastName}
            onChange={(e) => field("lastName", e.target.value)}
            autoComplete="family-name"
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            className="border border-gray-200 bg-brand-light px-4 py-3 font-montserrat text-sm text-black placeholder:text-gray-400 outline-none focus:border-brand-blue transition-colors duration-200"
            placeholder="Murraine"
          />
          {errors.lastName && (
            <p
              id="lastName-error"
              role="alert"
              className="font-montserrat text-xs text-brand-red"
            >
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => field("email", e.target.value)}
          autoComplete="email"
          aria-describedby={errors.email ? "email-error" : undefined}
          className="border border-gray-200 bg-brand-light px-4 py-3 font-montserrat text-sm text-black placeholder:text-gray-400 outline-none focus:border-brand-blue transition-colors duration-200"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p
            id="email-error"
            role="alert"
            className="font-montserrat text-xs text-brand-red"
          >
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="subject"
          className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue"
        >
          Subject
        </label>
        <select
          id="subject"
          value={form.subject}
          onChange={(e) => field("subject", e.target.value)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className="border border-gray-200 bg-brand-light px-4 py-3 font-montserrat text-sm text-black outline-none focus:border-brand-blue transition-colors duration-200 appearance-none"
        >
          <option value="" disabled>
            Select a topic…
          </option>
          <option value="general">General Inquiry</option>
          <option value="volunteer">Volunteer Opportunities</option>
          <option value="partner">Partner With Us</option>
          <option value="donate">Donation Questions</option>
          <option value="veteran">Veteran Support</option>
          <option value="media">Media &amp; Press</option>
        </select>
        {errors.subject && (
          <p
            id="subject-error"
            role="alert"
            className="font-montserrat text-xs text-brand-red"
          >
            {errors.subject}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue"
        >
          Message
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => field("message", e.target.value)}
          rows={6}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="border border-gray-200 bg-brand-light px-4 py-3 font-montserrat text-sm text-black placeholder:text-gray-400 outline-none focus:border-brand-blue transition-colors duration-200 resize-none"
          placeholder="Tell us how we can help or how you'd like to get involved…"
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="font-montserrat text-xs text-brand-red"
          >
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="font-montserrat text-[0.75rem] text-gray-400">
          We typically respond within 1&ndash;2 business days.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-brand-blue px-8 py-3.5 font-rundale font-medium text-sm tracking-wide text-white transition-colors duration-200 hover:bg-brand-green"
        >
          Send Message
          <ArrowRight size={15} strokeWidth={2} />
        </button>
      </div>
    </form>
  );
}

function ContactSection() {
  return (
    <section
      id="contact-form"
      className="bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto flex max-w-[1780px] flex-col xl:flex-row">
        {/* ── Left panel — brand-blue info sidebar ── */}
        <div className="flex flex-col gap-10 bg-brand-blue p-8 md:p-12 xl:w-[460px] xl:flex-shrink-0">
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="mb-6 inline-block bg-brand-red px-2 py-1 font-montserrat text-sm font-semibold uppercase text-white"
            >
              Contact
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              transition={{ delay: 0.06 }}
              id="contact-heading"
              className="font-rundale text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Reach Out.
              <br />
              We&rsquo;re Here.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              transition={{ delay: 0.1 }}
              className="mt-6 border-t border-white/20 pt-6 font-montserrat text-base leading-relaxed text-white/70"
            >
              Whether you&rsquo;re a veteran seeking support, a community member
              who wants to volunteer, or an organization looking to partner
              &mdash; we want to hear from you.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex flex-col gap-7"
          >
            {CONTACT_CHANNELS.map(({ label, value, href, bar }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                className="group flex items-start gap-5"
              >
                <div
                  className={`mt-2.5 h-[4px] w-6 flex-shrink-0 ${bar}`}
                  aria-hidden="true"
                />
                <div>
                  <p className="mb-1 font-montserrat text-[0.68rem] uppercase tracking-[0.16em] text-white/45">
                    {label}
                  </p>
                  <p className="font-rundale font-medium text-lg text-white transition-colors duration-200 group-hover:text-brand-gold">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── Right panel — form ── */}
        <div className="flex-1 px-8 py-16 md:px-12 lg:px-16 xl:py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <div
              className="mb-2 h-[4px] w-10 bg-brand-blue"
              aria-hidden="true"
            />
            <h3 className="mb-8 font-rundale text-2xl font-bold text-black md:text-3xl">
              Send Us a Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
