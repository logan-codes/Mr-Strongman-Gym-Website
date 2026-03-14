import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Plans",
  description: "Choose a membership plan that fits your goals. Affordable fitness packages, personal training, and group sessions at Mannachanallur's best gym.",
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
