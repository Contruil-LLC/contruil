import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Negotiation Trainer — Leadership Training — ServicePath — Contruil",
  description:
    "Practice negotiation with AI. Five scenarios: salary, business deals, vendor/client, conflict resolution, everyday situations. Beginner-friendly, instant feedback.",
};

export default function TrainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
