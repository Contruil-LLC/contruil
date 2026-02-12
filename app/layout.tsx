import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contruil — Human-Governed AI Orchestration",
  description:
    "Enterprise AI governance layer. Multi-model orchestration with intent-based routing, four-gate validation, and tamper-evident audit trails. Patent Pending.",
  keywords: [
    "AI orchestration",
    "AI governance",
    "multi-model AI",
    "enterprise AI",
    "patent pending",
    "Contruil",
  ],
  openGraph: {
    title: "Contruil — Human-Governed AI Orchestration",
    description:
      "One governance layer over every AI model you use. U.S. Patent Pending — Application No. 63/980,310.",
    url: "https://contruil.com",
    siteName: "Contruil",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
