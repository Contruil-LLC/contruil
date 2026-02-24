import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do — Contruil™",
  description: "Contruil is a supervisory AI control plane for enterprises running multiple AI providers. Learn how we govern, route, and audit AI across your organization.",
};

export default function WhatWeDo() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold tracking-tight">Contruil™</a>
          <div className="hidden md:flex items-center gap-8 text-sm text-brand-mid">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/what-we-do" className="text-white">What We Do</a>
            <a href="/how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="/pilot-fit-call" className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-brand-blue text-white text-sm font-medium rounded-lg hover:bg-brand-blue/90 transition-colors">
            Book a Pilot Fit Call
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase mb-4 block">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            AI governance built for<br />
            <span className="text-brand-blue">enterprise infrastructure</span>
          </h1>
          <p className="text-lg text-brand-mid leading-relaxed">
            Contruil functions as a supervisory control plane across AI providers, integrating at the API layer with human-governed validation, policy enforcement, and tamper-evident audit logs.
          </p>
        </div>
      </section>

      {/* Core Concept */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">The multi-model governance problem</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-brand-mid leading-relaxed mb-4">
                Most enterprises today run multiple AI providers across departments. Each handles sensitive data differently, costs differently, and carries its own risk profile — but there&apos;s no unified layer governing how decisions get made, approved, or recorded.
              </p>
              <p className="text-brand-mid leading-relaxed">
                Contruil sits between your teams and your AI providers, classifying workloads, enforcing policy at the API boundary, and maintaining a cryptographically linked audit record of every action.
              </p>
            </div>
            <div className="border border-white/10 rounded-xl p-6 bg-white/5">
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-widest text-brand-blue">Deployment model</h3>
              <p className="text-brand-mid text-sm leading-relaxed">
                Contruil integrates at the API layer across your existing AI providers — Claude, GPT, Gemini, Perplexity, DeepSeek — without replacing them. You keep the models you use. We add the governance layer your compliance and risk teams require.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Program */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase mb-4 block">Pilot Program</span>
          <h2 className="text-2xl font-bold mb-4">Infrastructure Fintech Pilot Program</h2>
          <p className="text-brand-mid leading-relaxed mb-10 max-w-2xl">
            A structured 30–60 day pilot for API-driven financial platforms operating multi-model AI environments under regulatory or institutional oversight requirements.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold mb-5 text-sm uppercase tracking-widest text-brand-mid">Designed for</h3>
              <ul className="space-y-3">
                {["Platform Engineering", "Developer Experience", "Security & Infrastructure", "Risk & Compliance", "Vendor Risk & Attestation Owners"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-mid">
                    <span className="text-brand-blue mt-0.5">→</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-5 text-sm uppercase tracking-widest text-brand-mid">Pilot outcomes include</h3>
              <ul className="space-y-3">
                {[
                  "Policy-based AI classification at the API boundary",
                  "Supervisory monitoring across multi-model workflows",
                  "Human-gated validation for sensitive production actions",
                  "Independently verifiable control logs for customer and auditor review",
                  "Executive-ready governance summary for internal and board reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-mid">
                    <span className="text-brand-blue mt-0.5">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <a href="/pilot-fit-call" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue/90 transition-colors">
              Book a Pilot Fit Call →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-mid text-sm">© 2026 Contruil LLC. U.S. Patent Pending — Application No. 63/980,310.</p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-mid">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/workplace-policy" className="hover:text-white transition-colors">Workplace Policy</a>
            <a href="/shared-responsibility-matrix" className="hover:text-white transition-colors">Cloud Responsibility Matrix</a>
            <a href="/ip" className="hover:text-white transition-colors">IP Portfolio</a>
            <a href="https://cyw-os.com" className="hover:text-white transition-colors">CYW OS</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
