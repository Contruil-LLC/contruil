import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contruil™ — Human-Governed AI Orchestration",
  description: "Contruil is a supervisory AI control plane for enterprises running multiple AI providers. Policy enforcement, human-gated validation, and tamper-evident audit logs at the API layer.",
};

export default function Home() {
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
            <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a
            href="/pilot-fit-call"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-brand-blue text-white text-sm font-medium rounded-lg hover:bg-brand-blue/90 transition-colors"
          >
            Book a Pilot Fit Call
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase mb-6 block">
            Human-Governed AI Orchestration
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Your AI stack.<br />
            <span className="text-brand-blue">Under your control.</span>
          </h1>
          <p className="text-xl text-brand-mid leading-relaxed mb-10 max-w-2xl mx-auto">
            Contruil is a supervisory control plane that sits between your teams and your AI providers —
            enforcing policy, routing workloads, and maintaining tamper-evident audit records across your entire AI estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pilot-fit-call"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue/90 transition-colors"
            >
              Book a Pilot Fit Call →
            </a>
            <a
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-brand-mid font-medium rounded-lg hover:text-white hover:border-white/40 transition-colors"
            >
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Section Teasers */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-semibold tracking-widest text-brand-blue uppercase mb-12 text-center">
            Explore Contruil
          </h2>
          <div className="grid md:grid-cols-3 gap-6">

            {/* What We Do */}
            <a
              href="/what-we-do"
              className="group block border border-white/10 rounded-xl p-8 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-4">What We Do</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">
                The governance layer your compliance team has been asking for
              </h3>
              <p className="text-brand-mid text-sm leading-relaxed mb-6">
                A supervisory control plane that classifies, routes, and governs every AI request across your multi-model environment — without replacing your existing providers.
              </p>
              <span className="text-brand-blue text-sm font-medium">Learn more →</span>
            </a>

            {/* How It Works */}
            <a
              href="/how-it-works"
              className="group block border border-white/10 rounded-xl p-8 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-4">How It Works</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">
                Five governance layers. One unified control plane.
              </h3>
              <p className="text-brand-mid text-sm leading-relaxed mb-6">
                Intelligent routing, workload isolation, four-gate human approval, continuous oversight, and tamper-evident audit logs — all operating at the API boundary.
              </p>
              <span className="text-brand-blue text-sm font-medium">See the architecture →</span>
            </a>

            {/* FAQ */}
            <a
              href="/faq"
              className="group block border border-white/10 rounded-xl p-8 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-4">FAQ</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">
                Three questions every institution must answer
              </h3>
              <p className="text-brand-mid text-sm leading-relaxed mb-6">
                What is our AI doing? Is it within policy? Can we prove it? These questions determine whether your AI governance is real or cosmetic.
              </p>
              <span className="text-brand-blue text-sm font-medium">Read the FAQ →</span>
            </a>

          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section className="py-24 px-6 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase mb-4 block">
            Infrastructure Fintech Pilot
          </span>
          <h2 className="text-3xl font-bold mb-4">
            See it working in your environment
          </h2>
          <p className="text-brand-mid leading-relaxed mb-8">
            A structured 30–60 day pilot for API-driven financial platforms operating multi-model AI under regulatory or institutional oversight requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pilot-fit-call"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue/90 transition-colors"
            >
              Book a Pilot Fit Call →
            </a>
            <a
              href="/what-we-do"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-brand-mid font-medium rounded-lg hover:text-white hover:border-white/40 transition-colors"
            >
              View pilot details
            </a>
          </div>
        </div>
      </section>

      {/* Patent & Trademark Notice */}
      <section className="py-16 px-6 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-brand-mid text-sm leading-relaxed mb-2">
            Certain aspects of the orchestration and governance architecture are the subject of a pending U.S. patent application.
          </p>
          <p className="text-white text-sm font-semibold">
            U.S. Provisional Patent Application No. 63/980,310 — Filed February 11, 2026 — Patent Pending
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="text-brand-mid text-sm">
              Built on principles developed through enterprise-grade AI routing research and governance system design.
            </p>
            <p className="text-brand-mid text-xs">
              CONTRUIL™ is a trademark of Contruil LLC. U.S. trademark application pending (Serial No. 99660773).
            </p>
            <p className="text-brand-mid text-xs">
              © 2026 Contruil LLC. U.S. Patent Pending — Application No. 63/980,310.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-brand-mid">
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
