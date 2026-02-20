"use client";

import { useState } from "react";
import Link from "next/link";

export default function PilotFitCallPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/pilot-fit-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Contruil™
          </Link>
          <Link
            href="/"
            className="text-sm text-brand-muted hover:text-white transition-colors"
          >
            ← Back
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">
            Schedule a 30-Minute Pilot Fit Call
          </h1>
          <p className="text-brand-muted mb-8">
            For API-driven financial platforms running multiple AI providers. A
            30-minute call to assess fit for a time-boxed pilot in your environment.
          </p>

          {status === "success" && (
            <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300 text-sm">
              Thank you. We&apos;ll be in touch within one business day.
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
              Something went wrong. Please email timothy@contruil.com directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-brand-muted mb-2"
              >
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-md bg-brand-navy border border-white/10 text-white placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
                placeholder="Jane Smith"
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brand-muted mb-2"
              >
                Work email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-md bg-brand-navy border border-white/10 text-white placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
                placeholder="jane@company.com"
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-brand-muted mb-2"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full px-4 py-3 rounded-md bg-brand-navy border border-white/10 text-white placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
                placeholder="Acme Corp"
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-brand-muted mb-2"
              >
                Role
              </label>
              <input
                id="role"
                name="role"
                type="text"
                className="w-full px-4 py-3 rounded-md bg-brand-navy border border-white/10 text-white placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
                placeholder="VP of Technology, CISO, etc."
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-brand-muted mb-2"
              >
                Brief context (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-md bg-brand-navy border border-white/10 text-white placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/50 resize-none"
                placeholder="Current AI footprint, pain points, pilot timeline..."
                disabled={status === "submitting"}
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full px-6 py-3 bg-brand-accent text-white font-medium rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Submitting..." : "Schedule Pilot Fit Call"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
