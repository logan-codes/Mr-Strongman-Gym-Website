import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Plans | MR Real StrongMan Gym",
  description: "Flexible gym membership plans starting from ₹699/month. Personal training, cardio packages, and women's exclusive options available.",
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
