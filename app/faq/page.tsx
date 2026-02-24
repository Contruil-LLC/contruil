import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Contruil™",
  description: "Frequently asked questions about Contruil's AI governance platform, pilot program, and multi-model orchestration architecture.",
};

const faqs = [
  {
    category: "Core questions",
    items: [
      {
        q: "What is our AI doing?",
        a: "Contruil gives you full visibility into every AI interaction, routing decision, and model response across your organization. Every request is classified, logged, and surfaced in a supervisory control layer your team can review in real time — not after the fact.",
      },
      {
        q: "Is it within policy?",
        a: "Human-governed validation ensures nothing critical moves without authorization. Before any AI action classified as sensitive, regulated, or customer-facing reaches production, it passes through configurable governance gates with human checkpoints. You define the policy. We enforce it.",
      },
      {
        q: "Can we prove it?",
        a: "Yes. Tamper-evident records that hold up under audit, regulatory review, or litigation. A cryptographically linked control log captures routing decisions, approvals, model selection, and execution context. Every entry is independently verifiable and suitable for customer attestation or regulatory submission.",
      },
    ],
  },
  {
    category: "About the platform",
    items: [
      {
        q: "Does Contruil replace our existing AI providers?",
        a: "No. Contruil integrates at the API layer across your existing providers — Claude, GPT, Gemini, Perplexity, DeepSeek, and others. You keep the models you use. Contruil adds the governance, routing, and audit layer that sits between your teams and those providers.",
      },
      {
        q: "How long does deployment take?",
        a: "The structured pilot runs 30–60 days and is scoped to your existing multi-model environment. Integration happens at the API boundary — no rearchitecting of your underlying systems required.",
      },
      {
        q: "What does 'four-gate human governance' mean?",
        a: "Critical AI actions pass through four sequential validation stages before reaching production: classification, policy check, human approval, and audit commit. Each gate is configurable to your internal controls framework. No stage can be bypassed for actions flagged as sensitive or regulated.",
      },
      {
        q: "How is the audit log protected from tampering?",
        a: "The control log uses cryptographic linking — each entry references a hash of the prior entry, so any modification to historical records is detectable. The log is suitable for litigation hold, regulatory inquiry, and independent auditor review.",
      },
    ],
  },
  {
    category: "Is Contruil right for us?",
    items: [
      {
        q: "What are the signs we need independent AI oversight?",
        a: "Common indicators: multiple AI providers behind a unified API with no unified governance layer; customer-facing AI outputs with no independent verification; increasing vendor risk questionnaires from clients referencing AI controls; no ability to reproduce the audit record for a given AI-driven decision on demand.",
      },
      {
        q: "Who within our organization typically sponsors the pilot?",
        a: "Pilots are typically initiated by Platform Engineering, Security & Infrastructure, Risk & Compliance, or Vendor Risk & Attestation owners. The business case resonates with CISOs, CTOs, and CROs who are fielding AI governance questions from regulators, clients, or their own boards.",
      },
      {
        q: "What control questions should every institution be able to answer?",
        a: "Who approved this AI-driven decision? Under which policy was it routed? Which model processed it? Can we reproduce the audit record on demand? Contruil makes those answers immediate — available to your team, your customers, and your regulators.",
      },
      {
        q: "What happens if our AI strategy has outgrown spreadsheets and manual review?",
        a: "That is the signal. When your multi-model environment has grown beyond what spreadsheet tracking and manual review can govern, you need a supervisory control plane. The pilot is designed to demonstrate measurable governance outcomes within 30–60 days — giving you and your leadership a clear picture of what independent AI oversight looks like in your environment.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold tracking-tight">Contruil™</a>
          <div className="hidden md:flex items-center gap-8 text-sm text-brand-mid">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/what-we-do" className="hover:text-white transition-colors">What We Do</a>
            <a href="/how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="/faq" className="text-white">FAQ</a>
          </div>
          <a href="/pilot-fit-call" className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-brand-blue text-white text-sm font-medium rounded-lg hover:bg-brand-blue/90 transition-colors">
            Book a Pilot Fit Call
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase mb-4 block">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Questions we hear most
          </h1>
          <p className="text-lg text-brand-mid leading-relaxed">
            Three questions every institution running multi-model AI needs to answer with confidence — and the ones that come up when they start looking for a governance layer.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-16">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xs font-semibold tracking-widest text-brand-blue uppercase mb-8">
                {section.category}
              </h2>
              <div className="space-y-10">
                {section.items.map((item) => (
                  <div key={item.q} className="border-b border-white/10 pb-10 last:border-0">
                    <h3 className="text-lg font-semibold mb-3">{item.q}</h3>
                    <p className="text-brand-mid leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-brand-mid mb-8">
            A Pilot Fit Call is the fastest way to determine whether Contruil is the right fit for your environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pilot-fit-call" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue/90 transition-colors">
              Book a Pilot Fit Call →
            </a>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-brand-mid font-medium rounded-lg hover:text-white hover:border-white/40 transition-colors">
              Send us a message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
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
