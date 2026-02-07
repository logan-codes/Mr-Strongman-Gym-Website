import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MR Real StrongMan Gym",
  description: "Get in touch with MR Real StrongMan Gym. Located in Mannachanallur, Trichy. Call +91 88077 79835 or visit us for a free trial.",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
