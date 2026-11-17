// Done-for-You service packages (prices in USD, proposed launch pricing).
// To take card payments directly, create a Stripe Payment Link for a package
// and paste it into `paymentUrl`. Until then the order button opens a
// pre-filled email to support.

export const SERVICES_EMAIL = "support@screenshottocode.com";

export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  scope: string;
  delivery: string;
  revisions: number;
  features: string[];
  highlight?: boolean;
  paymentUrl: string;
}

export const PACKAGES: ServicePackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: 99,
    scope: "1 screen",
    delivery: "48 hours",
    revisions: 1,
    features: ["Responsive source code", "Manual developer review"],
    paymentUrl: "",
  },
  {
    id: "professional",
    name: "Professional",
    price: 299,
    scope: "Up to 3 simple pages",
    delivery: "3-5 days",
    revisions: 2,
    features: [
      "Responsive source code",
      "Reusable components",
      "Quality assurance",
    ],
    highlight: true,
    paymentUrl: "",
  },
  {
    id: "business",
    name: "Business",
    price: 799,
    scope: "Up to 8 simple pages",
    delivery: "5-10 days",
    revisions: 3,
    features: [
      "Component library",
      "GitHub delivery",
      "Deployment assistance",
      "Quality assurance",
    ],
    paymentUrl: "",
  },
];

export const OTHER_SERVICES: { name: string; from: number }[] = [
  { name: "Figma to code (HTML, React, Vue, Next.js)", from: 199 },
  { name: "Landing page development", from: 299 },
  { name: "Website recreation (authorized sites only)", from: 499 },
  { name: "Website redesign", from: 799 },
  { name: "Website migration", from: 999 },
  { name: "AI-generated code refactoring", from: 149 },
];

export function orderMailto(pkgName: string, price: number | null): string {
  const subject = encodeURIComponent(`Done-for-You order: ${pkgName}`);
  const body = encodeURIComponent(
    `Hi,\n\nI'd like to order: ${pkgName}${
      price ? ` ($${price})` : ""
    }.\n\nProject description:\nDesign / screenshot / Figma link:\nPreferred stack (HTML, React, Vue, Next.js...):\nDeadline:\n\nThanks!`,
  );
  return `mailto:${SERVICES_EMAIL}?subject=${subject}&body=${body}`;
}
