import Link from "next/link";

export const metadata = {
  title: "About — Contruil",
  description:
    "Contruil LLC builds supervisory AI control infrastructure for API-driven financial platforms. Policy-based classification, human-gated validation, tamper-evident control logs. U.S. Patent Pending.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Contruil
          </Link>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-sm text-brand-muted hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/pilot-fit-call"
              className="text-sm px-4 py-2 bg-brand-accent text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Pilot Fit Call
            </Link>
          </div>
        </div>
      </nav>

      <article className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">About Contruil</h1>
        <p className="text-brand-accent text-sm font-mono mb-8">
          U.S. Patent Pending — Application No. 63/980,310
        </p>

        <p className="text-lg text-brand-muted leading-relaxed mb-12">
          Contruil LLC is an early-stage company developing AI supervisory control
          infrastructure, with a patent-pending architecture focused on
          governance-first AI orchestration for financial services, particularly
          targeting infrastructure fintech as its pilot vertical.
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Company Overview</h2>
            <dl className="space-y-2 text-brand-muted">
              <div>
                <dt className="text-brand-light">Entity</dt>
                <dd>Contruil, LLC — Commonwealth of Virginia</dd>
              </div>
              <div>
                <dt className="text-brand-light">Founder</dt>
                <dd>Timothy I. Wheels (Suffolk, Virginia)</dd>
              </div>
              <div>
                <dt className="text-brand-light">Core business</dt>
                <dd>
                  Supervisory control infrastructure for AI — a control plane
                  that sits above AI models to govern execution, record decisions,
                  and create verifiable audit evidence. Not traditional AI
                  orchestration; we position above orchestration frameworks.
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Technical Architecture</h2>
            <p className="text-brand-muted mb-4">
              Five core pillars differentiate Contruil:
            </p>
            <ul className="space-y-2 text-brand-muted list-disc list-inside">
              <li>Intent-based routing</li>
              <li>Cost-constrained VLAN selection</li>
              <li>Four-gate human governance</li>
              <li>Supervisory monitoring</li>
              <li>Tamper-evident AI control log</li>
            </ul>
            <p className="text-brand-muted mt-4">
              Governance before autonomy — no bypass of human authority.
              Optimized for audit defensibility, attestation readiness, and drift
              detection rather than latency or cost alone.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Target Market</h2>
            <p className="text-brand-muted mb-2">
              Primary focus: infrastructure fintech (API platforms) as
              beachhead. Rationale: faster procurement cycles, existing
              multi-model sprawl, constant vendor risk pressure, and
              exportability to upstream banking institutions.
            </p>
            <p className="text-brand-muted">
              Platform Engineering, Developer Experience, Security &amp;
              Infrastructure, Risk &amp; Compliance, and Vendor Risk &amp;
              Attestation Owners at financial services institutions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Go-to-Market</h2>
            <p className="text-brand-muted mb-2">
              Pilot-first approach. Goal: win 1–2 fintech pilot programs in 3–6
              months. Build case studies and control log artifacts before
              broader enterprise sales.
            </p>
            <p className="text-brand-muted">
              Change-managed 30–60 day pilots. No model replacement. No vendor
              lock-in.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Product Example</h2>
            <p className="text-brand-muted mb-4">
              The{" "}
              <Link
                href="/servicepath/leadership-training/trainer"
                className="text-brand-accent hover:text-blue-400 transition-colors"
              >
                Negotiation Trainer
              </Link>{" "}
              demonstrates the governance architecture in practice: JSON schema
              output with structured scoring, tone categorization and escalation
              flags, privacy-first logging (no raw transcripts). It mirrors the
              core Intent → Classification → Evaluation → Escalation → Audit
              flow.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-brand-muted">
              U.S. Provisional Patent Application No. 63/980,310 — filed
              February 11, 2026. Patent pending. Architecture differentiated
              from defensive publication. Creates defensible IP posture for
              enterprise buyers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Related</h2>
            <ul className="space-y-2 text-brand-muted">
              <li>
                <a
                  href="https://cyw-os.com"
                  className="text-brand-accent hover:text-blue-400 transition-colors"
                >
                  CYW OS
                </a>
              </li>
              <li>
                <Link
                  href="/servicepath"
                  className="text-brand-accent hover:text-blue-400 transition-colors"
                >
                  ServicePath
                </Link>{" "}
                — AI-powered skill development and compliance
              </li>
              <li>
                <a
                  href="https://timothywheels.com"
                  className="text-brand-accent hover:text-blue-400 transition-colors"
                >
                  Timothy Wheels
                </a>{" "}
                — Awareness In Action newsletter
              </li>
            </ul>
          </div>

          <div className="pt-8 border-t border-white/10">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-brand-muted mb-4">
              <a
                href="mailto:info@contruil.com"
                className="text-brand-accent hover:text-blue-400 transition-colors"
              >
                info@contruil.com
              </a>
            </p>
            <Link
              href="/pilot-fit-call"
              className="inline-block px-6 py-3 bg-brand-accent text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
            >
              Schedule a Pilot Fit Call
            </Link>
          </div>
        </section>

        <p className="mt-12 text-xs text-brand-muted">
          © {new Date().getFullYear()} Contruil LLC. U.S. Patent Pending —
          Application No. 63/980,310.
        </p>
      </article>
    </main>
  );
}
