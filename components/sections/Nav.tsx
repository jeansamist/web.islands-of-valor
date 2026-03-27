"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Anchor, Menu, X, ChevronDown } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: "Mission & Impact", href: "/#mission" },
  { label: "Our Programs", href: "/programs" },
  { label: "Our Team", href: "/#team" },
  { label: "Updates", href: "/#momentum" },
  { label: "Contact", href: "/#contact" },
  {
    label: "Get Involved",
    dropdown: [
      { label: "Donate", href: "/#donate" },
      { label: "Partner With Us", href: "/#contact" },
      { label: "Volunteer", href: "/#contact" },
    ],
  },
];

// ─── Subcomponents ────────────────────────────────────────────────────────────

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 text-white no-underline group"
      aria-label="Islands of Valor — Home"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 border border-gold/30 group-hover:bg-gold/30 transition-colors duration-200">
        <Anchor size={16} strokeWidth={1.5} className="text-gold" />
      </span>
      <span className="font-serif text-[1.25rem] leading-none tracking-tight">
        Islands of{" "}
        <span className="text-gold font-semibold italic">Valor</span>
      </span>
    </Link>
  );
}

function DropdownMenu({ items }: { items: DropdownItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 min-w-[180px]
                 bg-navy-deep border border-white/10 rounded-xl p-1.5
                 shadow-glass z-50"
      role="menu"
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          role="menuitem"
          className="block px-4 py-2.5 text-sm text-white/70 hover:text-white
                     hover:bg-white/[0.06] rounded-lg transition-colors duration-150
                     font-sans tracking-wide"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  );
}

function NavLink({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (item.dropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className="flex items-center gap-1 px-3.5 py-2 text-sm text-white/75
                     hover:text-white hover:bg-white/[0.06] rounded-lg
                     transition-colors duration-150 font-sans tracking-wide"
          aria-haspopup="true"
          aria-expanded={open}
        >
          {item.label}
          <ChevronDown
            size={13}
            strokeWidth={1.5}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <AnimatePresence>{open && <DropdownMenu items={item.dropdown} />}</AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={item.href ?? "#"}
      className="px-3.5 py-2 text-sm text-white/75 hover:text-white
                 hover:bg-white/[0.06] rounded-lg transition-colors duration-150
                 font-sans tracking-wide"
    >
      {item.label}
    </Link>
  );
}

// ─── Mobile Drawer ────────────────────────────────────────────────────────────

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Trap focus and prevent body scroll when open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const allLinks: DropdownItem[] = [
    ...NAV_ITEMS.filter((i) => i.href).map((i) => ({
      label: i.label,
      href: i.href!,
    })),
    ...(NAV_ITEMS.find((i) => i.dropdown)?.dropdown ?? []),
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[150] bg-navy-deep/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed top-0 right-0 z-[200] h-full w-[min(320px,80vw)]
                       bg-navy-deep border-l border-white/10
                       shadow-[−20px_0_60px_rgba(0,0,0,0.5)]
                       flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Logo />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6" aria-label="Mobile">
              {allLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="block py-3.5 text-base text-white/70 hover:text-white
                             border-b border-white/[0.06] transition-colors duration-150
                             font-sans"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-white/10">
              <Link
                href="/#donate"
                onClick={onClose}
                className="block w-full text-center bg-gold text-navy-deep
                           font-sans font-semibold text-sm tracking-wide
                           py-3.5 rounded-xl hover:bg-gold-light transition-colors duration-200"
              >
                Support the Mission
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Main Nav ─────────────────────────────────────────────────────────────────

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-[100]
          transition-all duration-400
          ${
            scrolled
              ? "bg-navy-deep/92 backdrop-blur-xl border-b border-white/10 shadow-glass"
              : "bg-navy/70 backdrop-blur-xl border-b border-white/[0.07]"
          }
        `}
        role="banner"
      >
        <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <Logo />

          {/* Desktop links */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href="/#donate"
              className="hidden lg:inline-flex items-center gap-2
                         bg-transparent border border-gold/60 text-gold
                         font-sans font-medium text-sm tracking-wide
                         px-5 py-2.5 rounded-lg
                         hover:bg-gold hover:text-navy-deep hover:border-gold
                         transition-all duration-250 shadow-gold/20"
            >
              Support the Mission
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-2 text-white/75 hover:text-white
                         rounded-lg hover:bg-white/[0.06] transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
