"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Mission & Impact", href: "/#mission" },
  { label: "Our Programs", href: "/programs" },
  { label: "Our Team", href: "/#team" },
  { label: "Updates", href: "/#momentum" },
  { label: "Contact", href: "/contact" },
  {
    label: "Get Involved",
    dropdown: [
      { label: "Donate", href: "/#donate" },
      { label: "Partner With Us", href: "/contact" },
      { label: "Volunteer", href: "/contact" },
    ],
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(
    null,
  );
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 600);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-3 transition-colors duration-300 md:h-24 md:px-6 md:py-4",
          scrolled ? "bg-white shadow-2xl shadow-black/5" : "bg-transparent",
        )}
        role="banner"
      >
        <div className="flex h-full w-full max-w-[1780px] items-center justify-between gap-4 md:text-lg lg:gap-6">
          <div className="flex items-center gap-4 lg:gap-32">
            <Link
              href="/"
              aria-label="Home"
              className="w-44 md:w-44 aspect-[376.08/60]"
            >
              {scrolled ? (
                <Image
                  src={"/logoh@4x 1.png"}
                  alt="Logo"
                  width={376.08}
                  objectFit="contain"
                  className="w-full!"
                  height={60}
                />
              ) : (
                <Image
                  src={"/logoh@4x 2.png"}
                  alt="Logo"
                  width={376.08}
                  objectFit="contain"
                  className="w-full! invert"
                  height={60}
                />
              )}
            </Link>
            <nav
              className="hidden items-center gap-5 font-rundale lg:flex xl:gap-6"
              role="navigation"
            >
              {NAV_ITEMS.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDesktopDropdown(item.label)}
                    onMouseLeave={() => setOpenDesktopDropdown(null)}
                  >
                    <button
                      type="button"
                      className={cn(
                        "flex items-center gap-1 text-white transition-colors hover:underline",
                        scrolled && "text-brand-blue",
                      )}
                      onClick={() =>
                        setOpenDesktopDropdown((current) =>
                          current === item.label ? null : item.label,
                        )
                      }
                      onFocus={() => setOpenDesktopDropdown(item.label)}
                      aria-expanded={openDesktopDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform duration-200",
                          openDesktopDropdown === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "absolute left-0 top-full pt-2",
                        openDesktopDropdown === item.label
                          ? "pointer-events-auto"
                          : "pointer-events-none",
                      )}
                    >
                      <div
                        className={cn(
                          "min-w-[14rem] border border-brand-blue/10 bg-white p-2 shadow-lg transition-all duration-200",
                          openDesktopDropdown === item.label
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0",
                        )}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-brand-blue transition-colors hover:bg-brand-light"
                            onClick={() => setOpenDesktopDropdown(null)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className={cn(
                      "text-white hover:underline",
                      scrolled && "text-brand-blue",
                    )}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end gap-3">
            <button
              className={cn(
                "hidden px-5 py-3 font-rundale font-bold lg:inline-flex",
                scrolled
                  ? "bg-brand-blue text-white"
                  : "bg-white text-brand-blue",
              )}
            >
              Support the mission
            </button>
            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((current) => !current)}
              className={cn(
                "inline-flex h-12 w-12 items-center justify-center border transition-colors lg:hidden",
                scrolled
                  ? "border-brand-blue/20 bg-white text-brand-blue"
                  : "border-white/25 bg-white/10 text-white backdrop-blur-sm",
              )}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
      <div
        className={cn(
          "fixed inset-x-0 top-[72px] z-40 mx-4 overflow-hidden border border-brand-blue/10 bg-white shadow-2xl transition-all duration-300 md:top-24 md:mx-6 lg:hidden",
          mobileMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0",
        )}
      >
        <nav className="max-h-[calc(100vh-7rem)] overflow-y-auto p-4 font-rundale">
          <div className="space-y-2">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="border border-brand-blue/10">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-brand-blue"
                    onClick={() =>
                      setOpenMobileDropdown((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                    aria-expanded={openMobileDropdown === item.label}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "transition-transform duration-200",
                        openMobileDropdown === item.label && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-200",
                      openMobileDropdown === item.label
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-1 px-2 pb-3">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block rounded-lg px-3 py-2 text-brand-blue/80 transition-colors hover:bg-brand-light hover:text-brand-blue"
                            onClick={closeMobileMenu}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="block border border-brand-blue/10 px-4 py-3 text-brand-blue transition-colors hover:bg-brand-light"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
          <button className="mt-4 inline-flex w-full items-center justify-center bg-brand-blue px-5 py-3 font-rundale font-bold text-white">
            Support the mission
          </button>
        </nav>
      </div>
    </>
  );
}
