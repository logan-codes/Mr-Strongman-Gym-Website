import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Visit MR Real StrongMan Gym in Mannachanallur, Trichy. Contact us at +91 88077 79835 for membership enquiries, personal training, or to book a free trial session.",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
