import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Contruil™",
  description: "Five layers of AI governance: intelligent routing, workload isolation, four-gate human approval, continuous oversight, and tamper-evident audit logs.",
};

const features = [
  {
    number: "01",
    title: "Intelligent Request Routing",
    body: "Every AI request is classified at the API boundary by business purpose and data sensitivity before it reaches a model. Low-risk tasks go to cost-efficient models. Sensitive or regulated workloads are routed to appropriate providers with the right guardrails applied before execution.",
    tag: "Classification",
  },
  {
    number: "02",
    title: "Workload Isolation",
    body: "Different AI workloads run in segmented zones — similar to how your network already separates guest traffic from production systems. Regulated data never shares execution context with unregulated tasks, and cross-zone access is logged and governed.",
    tag: "Segmentation",
  },
  {
    number: "03",
    title: "Four-Gate Human Governance",
    body: "Before any critical AI action reaches production, it passes through a four-stage validation process with human checkpoints. No AI decision bypasses human review for actions classified as sensitive, regulated, or customer-facing. The gates are configurable to your policy framework.",
    tag: "Human Control",
  },
  {
    number: "04",
    title: "Continuous Oversight",
    body: "A supervisory control layer monitors for drift, policy violations, and anomalous behavior across your entire AI estate in real time. You see problems as they emerge — not after they've reached production or your audit team.",
    tag: "Monitoring",
  },
  {
    number: "05",
    title: "Tamper-Evident AI Control Log",
    body: "A cryptographically linked control log records routing decisions, approvals, and execution context — suitable for internal review, customer attestation, regulatory inquiry, and litigation hold. Every log entry is independently verifiable.",
    tag: "Audit",
  },
];

export default function HowItWorks() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold tracking-tight">Contruil™</a>
          <div className="hidden md:flex items-center gap-8 text-sm text-brand-mid">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/what-we-do" className="hover:text-white transition-colors">What We Do</a>
            <a href="/how-it-works" className="text-white">How It Works</a>
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
          <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase mb-4 block">Architecture</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How It Works</h1>
          <p className="text-lg text-brand-mid leading-relaxed">
            Five governance layers that sit between your teams and your AI providers —
            enforcing policy, isolating workloads, and keeping humans in control of every critical decision.
          </p>
        </div>
      </section>

      {/* Five Layers */}
      <section className="py-12 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-16">
          {features.map((f) => (
            <div key={f.number} className="grid md:grid-cols-[100px_1fr] gap-8 items-start">
              <div>
                <div className="text-4xl font-bold text-brand-blue/25 font-mono leading-none mb-2">{f.number}</div>
                <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase">{f.tag}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">{f.title}</h2>
                <p className="text-brand-mid leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to see it in your environment?</h2>
          <p className="text-brand-mid mb-8">
            The pilot is structured to deliver measurable governance outcomes within 30–60 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pilot-fit-call" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue/90 transition-colors">
              Book a Pilot Fit Call →
            </a>
            <a href="/faq" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-brand-mid font-medium rounded-lg hover:text-white hover:border-white/40 transition-colors">
              Read the FAQ
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
