import type {
  ImpactCard,
  TeamMember,
  MomentumItem,
  TrustMarker,
  FooterColumn,
} from "@/types";

// ─── Impact Cards ─────────────────────────────────────────────────────────────

export const IMPACT_CARDS: ImpactCard[] = [
  {
    amount: 25,
    title: "Reconnect a Veteran",
    description:
      "Help us reach and personally invite a veteran who may be struggling in silence.",
    ctaLabel: "Invite a Veteran",
  },
  {
    amount: 50,
    title: "Create Connection",
    description:
      "Fund a local meetup where veterans can rebuild trust and brotherhood.",
    ctaLabel: "Fund a Meetup",
  },
  {
    amount: 100,
    title: "Support Growth",
    description:
      "Sponsor a workshop or guided session focused on wellness, skills, and recovery.",
    ctaLabel: "Support a Session",
  },
  {
    amount: 500,
    title: "Bring Community Together",
    description:
      "Fund a full veteran-led event or group excursion that restores purpose.",
    ctaLabel: "Fund an Event",
  },
];

// ─── Trust Markers ────────────────────────────────────────────────────────────

export const TRUST_MARKERS: TrustMarker[] = [
  {
    icon: "ShieldCheck",
    title: "Tax Deductible",
    description:
      "We are a registered 501(c)(3) public charity. Every donation may reduce your tax burden.",
  },
  {
    icon: "TrendingUp",
    title: "Long-Term Impact",
    description:
      "Our model targets 60% self-sufficiency through veteran-created products and programs.",
  },
  {
    icon: "MapPin",
    title: "100% Local",
    description:
      "Every dollar stays in the USVI to directly support our local heroes and their families.",
  },
];

// ─── Team Members ─────────────────────────────────────────────────────────────

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Founder & Director",
    role: "Leadership",
    why: "I served so others could live freely — now I serve so veterans can live fully.",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    imageAlt: "Founder and Director of Islands of Valor",
  },
  {
    name: "Community Outreach Lead",
    role: "Programs",
    why: "Every veteran we reach is a reminder of why this work matters more than anything.",
    imageSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    imageAlt: "Community Outreach Lead",
  },
  {
    name: "Programs Coordinator",
    role: "Operations",
    why: "Building spaces where veterans can heal isn't just a mission — it's a calling.",
    imageSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    imageAlt: "Programs Coordinator",
  },
];

// ─── Momentum Items ───────────────────────────────────────────────────────────

export const MOMENTUM_ITEMS: MomentumItem[] = [
  {
    title: "Launching Community Meetups",
    description:
      "Organizing local gatherings across the islands to rebuild peer connection and foster brotherhood among veterans.",
    status: "in-progress",
  },
  {
    title: "Building Our Outreach Network",
    description:
      "Identifying and reaching underserved veterans who may be isolated from traditional support structures.",
    status: "planning",
  },
  {
    title: "Developing Veteran-Led Programs",
    description:
      "Preparing excursions, guided wellness workshops, and skill-building sessions rooted in the island's natural beauty.",
    status: "in-progress",
  },
  {
    title: "Creating Our First Merchandise Line",
    description:
      "Designing veteran-made products that celebrate USVI culture and build toward long-term organizational sustainability.",
    status: "in-progress",
  },
];

// ─── Footer Columns ───────────────────────────────────────────────────────────

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Organization",
    links: [
      { label: "About Us", href: "#mission" },
      { label: "Mission", href: "#mission" },
      { label: "Impact", href: "#mission" },
      { label: "Our Team", href: "#team" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Donate", href: "#donate" },
      { label: "Partner With Us", href: "#contact" },
      { label: "Volunteer", href: "#contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "News & Updates", href: "#momentum" },
      { label: "Events", href: "#momentum" },
      { label: "FAQs", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "501(c)(3) Status", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },
];
