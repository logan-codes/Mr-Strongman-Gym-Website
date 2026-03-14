import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Expert Trainers",
  description: "Work with certified fitness professionals at MR Real StrongMan Gym. Featuring expert guidance for bodybuilding, weight loss, and women-exclusive training.",
};

export default function TrainersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
