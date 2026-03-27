// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdownItem {
  label: string;
  href: string;
}

// ─── Impact / Mission Pillars ─────────────────────────────────────────────────

export interface Pillar {
  icon: string; // lucide icon name
  hook: string;
  title: string;
  copy: string;
}

// ─── Fundraising ──────────────────────────────────────────────────────────────

export interface ImpactCard {
  amount: number;
  title: string;
  description: string;
  ctaLabel: string;
}

export interface TrustMarker {
  icon: string;
  title: string;
  description: string;
}

// ─── Team ─────────────────────────────────────────────────────────────────────

export interface TeamMember {
  name: string;
  role: string;
  why: string;
  imageSrc?: string;
  imageAlt?: string;
}

// ─── Momentum / Timeline ──────────────────────────────────────────────────────

export type MomentumStatus = "planning" | "in-progress";

export interface MomentumItem {
  title: string;
  description: string;
  status: MomentumStatus;
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export interface FooterColumn {
  heading: string;
  links: Array<{ label: string; href: string }>;
}
