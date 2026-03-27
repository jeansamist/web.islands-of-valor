import type { Variants } from "framer-motion";

// ─── Viewport config (used with whileInView) ──────────────────────────────────
export const VIEWPORT_ONCE = { once: true, margin: "-60px" };

// ─── Fade up — primary reveal ─────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Fade in (no y movement) ──────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Fade from left ───────────────────────────────────────────────────────────
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Container with staggered children ───────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// ─── Card spring stagger (for impact cards) ───────────────────────────────────
export const cardSpring: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
      mass: 0.8,
    },
  },
};

// ─── Hero content cascade ─────────────────────────────────────────────────────
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Progress bar fill ────────────────────────────────────────────────────────
export const progressBar = (targetWidth: string): Variants => ({
  hidden: { width: "0%" },
  visible: {
    width: targetWidth,
    transition: { duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 },
  },
});
