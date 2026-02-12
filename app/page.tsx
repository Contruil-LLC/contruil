export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-semibold tracking-tight">Contruil</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-brand-muted">
            <a href="#what-we-do" className="hover:text-white transition-colors">
              What We Do
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#who-its-for" className="hover:text-white transition-colors">
              Who It&apos;s For
            </a>
            <a href="#pilot-model" className="hover:text-white transition-colors">
              Pilot
            </a>
            <a href="/servicepath" className="hover:text-white transition-colors">
              ServicePath
            </a>
            <a
              href="/pilot-fit-call"
              className="px-4 py-2 bg-brand-accent text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Schedule a 30-Minute Pilot Fit Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-accent text-sm font-mono mb-4 tracking-wider uppercase">
            U.S. Patent Pending — Application No. 63/980,310
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            One governance layer
            <br />
            over every AI model
            <br />
            <span className="text-brand-muted">you use.</span>
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl leading-relaxed mb-2">
            Contruil gives enterprises visibility, control, and a verifiable
            audit trail across their entire AI estate — without replacing
            existing infrastructure.
          </p>
          <p className="text-brand-muted max-w-2xl leading-relaxed mb-2">
            Designed for API-driven financial platforms operating in high-change,
            audit-accountable AI environments.
          </p>
          <p className="text-sm text-brand-muted max-w-2xl mb-2">
            Financial services · Healthcare · Gov contractors · Large technology
            firms
          </p>
          <p className="text-sm text-brand-muted max-w-2xl mb-6">
            AI adoption is accelerating. Governance maturity rarely keeps pace.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div>
                <a
                  href="/pilot-fit-call"
                  className="inline-block px-6 py-3 bg-brand-accent text-white font-medium rounded-md hover:bg-blue-600 transition-colors text-center"
                >
                  Schedule a 30-Minute Pilot Fit Call
                </a>
                <p className="text-xs text-brand-muted mt-1">
                  For API-driven financial platforms running multiple AI providers.
                </p>
              </div>
              <div>
                <a
                  href="/checklist"
                  className="inline-block px-6 py-3 border border-white/20 text-brand-muted font-medium rounded-md hover:bg-white/5 hover:text-white transition-colors text-center"
                >
                  Download the AI Governance Readiness Checklist
                </a>
                <p className="text-xs text-brand-muted mt-1">
                  Pre-pilot self-assessment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-brand-muted mb-8 max-w-2xl leading-relaxed">
            Most enterprises today run multiple AI providers across departments.
            Each one handles sensitive data differently, costs differently, and
            fails differently. Nobody has a unified view. Contruil fixes that.
          </p>
          {/* Before/After Comparison */}
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-semibold text-brand-muted">
                    Without Contruil
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-brand-accent">
                    With Contruil
                  </th>
                </tr>
              </thead>
              <tbody className="text-brand-muted">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Each department picks its own AI vendors</td>
                  <td className="py-3 px-4 text-brand-light">One governance layer across all providers</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">No visibility into AI spend by task type</td>
                  <td className="py-3 px-4 text-brand-light">Cost-aware routing prioritizes lower-cost models for low-risk workloads while preserving governance controls</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Compliance relies on vendor self-reporting</td>
                  <td className="py-3 px-4 text-brand-light">Independently verifiable control log under your organization&apos;s authority</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">AI incidents surface after the fact</td>
                  <td className="py-3 px-4 text-brand-light">Continuous supervisory monitoring identifies policy drift before it becomes an exposure</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">&quot;We think it&apos;s compliant&quot;</td>
                  <td className="py-3 px-4 text-brand-light">&quot;Here&apos;s the log — verify it yourself&quot;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-brand-muted max-w-2xl leading-relaxed">
            <strong className="text-brand-light">Deployment model:</strong> Contruil functions as a
            supervisory control plane across AI providers, integrating at the API
            layer without replacing your models or infrastructure.
          </p>

          {/* Infrastructure Fintech Pilot Program */}
          <div id="pilot-model" className="mt-16 pt-16 border-t border-white/10">
            <h2 className="text-2xl font-bold mb-3">Infrastructure Fintech Pilot Program</h2>
            <p className="text-brand-muted mb-2 max-w-2xl leading-relaxed">
              Contruil offers a structured 30–60 day pilot for API-driven financial
              platforms operating multi-model AI environments under continuous
              audit and vendor risk pressure.
            </p>
            <p className="text-sm text-brand-muted mb-6 max-w-2xl">
              Initial pilot focus: financial services and infrastructure fintech
              platforms.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-brand-light mb-3">
                  Designed for
                </h3>
                <ul className="text-sm text-brand-muted space-y-2 list-disc list-inside">
                  <li>Platform Engineering</li>
                  <li>Developer Experience</li>
                  <li>Security &amp; Infrastructure</li>
                  <li>Risk &amp; Compliance</li>
                  <li>Vendor Risk &amp; Attestation Owners</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-brand-light mb-3">
                  Pilot outcomes include
                </h3>
                <ul className="text-sm text-brand-muted space-y-2 list-disc list-inside">
                  <li>Policy-based AI classification at the API boundary</li>
                  <li>Supervisory monitoring across multi-model workflows</li>
                  <li>Human-gated validation for sensitive production actions</li>
                  <li>Independently verifiable control logs for customer and auditor review</li>
                  <li>Executive-ready governance summary for internal and board-level stakeholders</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-brand-accent mb-3 max-w-2xl">
              Built for high-change AI environments that still require audit
              defensibility.
            </p>
            <p className="text-sm text-brand-muted max-w-2xl">
              No model replacement. No vendor lock-in. Change-managed deployment.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-brand-navy">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <CapabilityCard
              title="Intelligent Request Routing"
              description="Every AI request is classified at the API boundary by business purpose and data sensitivity before it reaches a model. Low-risk tasks go to cost-efficient models. High-sensitivity work stays in controlled environments."
            />
            <CapabilityCard
              title="Workload Isolation"
              description="Different AI workloads run in segmented zones — similar to how your network already separates guest traffic from production systems. Regulated data never shares a pathway with general-purpose queries."
            />
            <CapabilityCard
              title="Four-Gate Human Governance"
              description="Before any critical AI action reaches production, it passes through a four-stage validation process with human checkpoints. No AI decision bypasses human authority unless you explicitly allow it."
            />
            <CapabilityCard
              title="Continuous Oversight"
              description="A supervisory control layer monitors for drift, policy violations, and anomalous behavior across your entire AI estate in real time. You see problems before they become incidents."
            />
            <CapabilityCard
              title="Tamper-Evident AI Control Log"
              className="md:col-span-2 md:max-w-xl md:mx-auto"
              description="A cryptographically linked control log records routing decisions, approvals, and execution context — suitable for internal review, customer attestation, and external audit."
            />
          </div>
          <div className="mt-12 text-center">
            <a
              href="/pilot-fit-call"
              className="inline-block px-6 py-3 bg-brand-accent text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
            >
              Schedule a 30-Minute Pilot Fit Call
            </a>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section id="who-its-for" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">
            Three questions you need to answer with confidence
          </h2>
          <div className="space-y-8">
            <QuestionBlock
              number="01"
              question="What is our AI doing?"
              answer="Full visibility into every interaction, routing decision, and model response across your organization."
            />
            <QuestionBlock
              number="02"
              question="Is it within policy?"
              answer="Human-governed validation ensures nothing critical moves without authorization."
            />
            <QuestionBlock
              number="03"
              question="Can we prove it?"
              answer="Tamper-evident records that hold up under audit, regulatory review, or litigation."
            />
          </div>
          <div className="mt-12 pt-12 border-t border-white/10">
            <h3 className="text-xl font-semibold mb-4">
              Signs you may need independent AI oversight
            </h3>
            <ul className="text-brand-muted space-y-2 list-disc list-inside mb-6">
              <li>Multiple AI providers behind a unified API</li>
              <li>Customer-facing AI workflows</li>
              <li>Increasing vendor risk questionnaires referencing AI controls</li>
              <li>No independent verification of routing or approvals</li>
            </ul>
            <p className="text-sm text-brand-muted mb-12">
              If this applies, a pilot may be appropriate.
            </p>
            <h3 className="text-xl font-semibold mb-6">
              Control questions every institution must answer
            </h3>
            <ol className="space-y-3 text-brand-muted list-decimal list-inside mb-6">
              <li>Who approved this AI-driven decision?</li>
              <li>Under which policy was it routed?</li>
              <li>Which model processed it?</li>
              <li>Can we reproduce the audit record on demand?</li>
            </ol>
            <p className="text-brand-light font-medium">
              Contruil makes those answers immediate.
            </p>
          </div>
          <p className="mt-12 text-brand-muted text-lg leading-relaxed mb-8">
            If your AI strategy has outgrown spreadsheets and trust-based vendor
            relationships, Contruil is the control layer you&apos;re missing.
          </p>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/pilot-fit-call"
                className="inline-block px-6 py-3 bg-brand-accent text-white font-medium rounded-md hover:bg-blue-600 transition-colors text-center"
              >
                Schedule a 30-Minute Pilot Fit Call
              </a>
              <a
                href="/checklist"
                className="inline-block px-6 py-3 border border-white/20 text-brand-muted font-medium rounded-md hover:bg-white/5 hover:text-white transition-colors text-center"
              >
                Download the AI Governance Readiness Checklist
              </a>
            </div>
            <div className="text-sm text-brand-muted">
              <p className="font-medium text-brand-light mb-2">
                Pilot Fit Indicators
              </p>
              <ul className="space-y-1">
                <li>Multiple AI providers behind a unified API</li>
                <li>Customer-facing AI outputs</li>
                <li>Increasing vendor risk questionnaires referencing AI</li>
                <li>No independent verification of routing or approvals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IP Section */}
      <section className="py-16 px-6 bg-brand-navy border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-brand-muted leading-relaxed">
            Certain aspects of the orchestration and governance architecture are
            the subject of a pending U.S. patent application.
          </p>
          <p className="text-sm text-brand-muted mt-2">
            <span className="text-white font-medium">
              U.S. Provisional Patent Application No. 63/980,310
            </span>{" "}
            — Filed February 11, 2026 — Patent Pending
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-brand-muted text-center mb-6 max-w-2xl mx-auto">
            Built on principles developed through enterprise-grade AI routing
            research and governance system design. Designed and tested across
            multi-model enterprise environments.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-muted">
          <p>
            &copy; 2026 Contruil LLC. U.S. Patent Pending — Application No.
            63/980,310.
          </p>
          <div className="flex gap-6">
            <a href="/workplace-policy" className="hover:text-white transition-colors">
              Workplace Policy
            </a>
            <a href="https://cyw-os.com" className="hover:text-white transition-colors">
              CYW OS
            </a>
            <a
              href="mailto:timothy@contruil.com"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function CapabilityCard({
  title,
  description,
  className = "",
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`p-6 rounded-lg border border-white/5 bg-brand-dark/50 ${className}`}
    >
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-brand-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function QuestionBlock({
  number,
  question,
  answer,
}: {
  number: string;
  question: string;
  answer: string;
}) {
  return (
    <div className="flex gap-6 items-start">
      <span className="text-brand-accent font-mono text-sm mt-1">{number}</span>
      <div>
        <h3 className="text-xl font-semibold mb-2">{question}</h3>
        <p className="text-brand-muted leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
