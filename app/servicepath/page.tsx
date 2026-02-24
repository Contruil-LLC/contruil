import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ServicePath — Contruil™",
  description:
    "AI-powered skill development and compliance infrastructure. Four-Gate validation, tamper-evident audit trails. Education, Leadership Training, Compliance.",
};

export default function ServicePath() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold tracking-tight">
            Contruil™
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-brand-muted">
            <a href="/#what-we-do" className="hover:text-white transition-colors">
              What We Do
            </a>
            <a
              href="/servicepath"
              className="text-white"
            >
              ServicePath
            </a>
            <a
              href="/servicepath/leadership-training"
              className="hover:text-white transition-colors"
            >
              Leadership Training
            </a>
            <a
              href="/servicepath/compliance-architecture"
              className="hover:text-white transition-colors"
            >
              Compliance
            </a>
            <a
              href="mailto:timothy@contruil.com"
              className="px-4 py-2 bg-brand-accent text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-accent text-sm font-mono mb-4 tracking-wider uppercase">
            Patent Pending Technology
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            ServicePath
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl leading-relaxed">
            AI-powered skill development and compliance infrastructure. Every
            vertical runs on Four-Gate validation, tamper-evident audit trails,
            and DID-backed progress records. Education. Leadership Training. Compliance.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-sm font-mono">
            <span className="px-3 py-1 rounded border border-brand-accent/30 text-brand-accent">
              VERTICAL 01 — EDUCATION
            </span>
            <span className="px-3 py-1 rounded border border-brand-accent/30 text-brand-accent">
              VERTICAL 02 — LEADERSHIP TRAINING
            </span>
            <span className="px-3 py-1 rounded border border-white/10 text-brand-muted">
              VERTICAL 03 — COMPLIANCE (coming)
            </span>
          </div>
        </div>
      </section>

      {/* Vertical 01: Education — The Problem */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-accent text-xs font-mono mb-2 tracking-wider uppercase">
            VERTICAL 01 — EDUCATION
          </p>
          <h2 className="text-2xl font-bold mb-6">The Problem</h2>
          <p className="text-brand-muted leading-relaxed mb-6">
            Student organizations and honor societies like NSLS track thousands
            of service hours, leadership events, and chapter activities across
            hundreds of campuses. The current process relies on manual
            verification, spreadsheets, and trust-based reporting. There is no
            independent audit trail, no tamper-evident record, and no way to
            verify compliance at scale.
          </p>
          <p className="text-brand-muted leading-relaxed">
            When accreditation reviews or audits occur, institutions struggle
            to produce verifiable records of what happened, when, and who
            approved it.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-6 bg-brand-navy border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">How ServicePath Works</h2>
          <div className="space-y-6">
            <SolutionBlock
              number="01"
              title="Intelligent Activity Routing"
              description="Service hours, leadership activities, and chapter events are classified by type and compliance requirement. Each activity is routed through the appropriate validation pathway based on institutional policy."
            />
            <SolutionBlock
              number="02"
              title="Four-Gate Validation"
              description="Every critical submission passes through a multi-stage human-governed validation process. Chapter advisors, institutional reviewers, and system checks each have defined checkpoints. Nothing reaches the permanent record without proper authorization."
            />
            <SolutionBlock
              number="03"
              title="Tamper-Evident Audit Trail"
              description="Every approved activity is logged in a cryptographically linked audit chain. You can see who submitted what, who approved it, when it was verified, and under which conditions. These records hold up under audit, accreditation review, or institutional inquiry."
            />
            <SolutionBlock
              number="04"
              title="Real-Time Compliance Dashboard"
              description="Institutional administrators see chapter compliance status in real time. No more end-of-semester scrambles. No more trust-based reporting. Verifiable records on demand."
            />
          </div>
        </div>
      </section>

      {/* For NSLS */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Built for NSLS Chapters</h2>
          <p className="text-brand-muted leading-relaxed mb-8">
            ServicePath is designed to integrate with the National Society of
            Leadership and Success chapter management workflow. It provides the
            compliance infrastructure that NSLS chapters need to demonstrate
            accountability at the institutional level.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              title="Service Hour Verification"
              description="Automated classification and multi-gate approval for community service submissions."
            />
            <FeatureCard
              title="Leadership Event Tracking"
              description="Real-time logging of speaker broadcasts, SNTs, and leadership training completions."
            />
            <FeatureCard
              title="Chapter Health Monitoring"
              description="Continuous oversight of chapter activity levels, compliance rates, and engagement metrics."
            />
            <FeatureCard
              title="Accreditation-Ready Records"
              description="Tamper-evident audit trails that satisfy institutional review and accreditation requirements."
            />
          </div>
        </div>
      </section>

      {/* Vertical 02: Negotiation Skills Module */}
      <section className="py-16 px-6 border-t border-white/5 bg-brand-navy">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-accent text-xs font-mono mb-2 tracking-wider uppercase">
            VERTICAL 02 — LEADERSHIP TRAINING
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Negotiation Skills Module
          </h2>
          <p className="text-brand-muted leading-relaxed mb-8 max-w-2xl">
            Scenario-based negotiation practice with Four-Gate validation applied
            to skill development. Every practice session is logged in a tamper-evident
            audit chain. Progress is verifiable. Credentials are blockchain-backed.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg border border-white/5 bg-brand-dark/50">
              <h3 className="text-sm font-mono text-brand-accent mb-3 uppercase tracking-wider">
                5 Scenario Types
              </h3>
              <ul className="text-brand-muted text-sm space-y-1.5">
                <li>Salary negotiation</li>
                <li>Business deals</li>
                <li>Vendor/client relationships</li>
                <li>Conflict resolution</li>
                <li>Everyday negotiations</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border border-white/5 bg-brand-dark/50">
              <h3 className="text-sm font-mono text-brand-accent mb-3 uppercase tracking-wider">
                Certification System
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-3">
                Bronze → Silver → Gold → Platinum. Credentials backed by
                tamper-evident records and optional blockchain verification.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="px-3 py-1.5 rounded border border-white/10 text-brand-muted">
              Freemium: 5 scenarios/month
            </span>
            <span className="px-3 py-1.5 rounded border border-white/10 text-brand-muted">
              Pro: $29/month
            </span>
            <span className="px-3 py-1.5 rounded border border-white/10 text-brand-muted">
              Enterprise: Custom
            </span>
            <a
              href="/servicepath/leadership-training"
              className="px-3 py-1.5 rounded border border-brand-accent/30 text-brand-accent font-mono hover:bg-brand-accent/10 transition-colors"
            >
              Q2 2026 beta — Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* Compliance Link */}
      <section className="py-16 px-6 bg-brand-navy border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Compliance Architecture</h2>
          <p className="text-brand-muted mb-8 max-w-xl mx-auto leading-relaxed">
            See how ServicePath&apos;s Four-Gate Authorization maps to ISO
            27001:2022 controls for enterprise-grade compliance alignment.
          </p>
          <a
            href="/servicepath/compliance-architecture"
            className="inline-block px-6 py-3 bg-brand-accent text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            View Compliance Mapping
          </a>
        </div>
      </section>

      {/* IP Section */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-brand-muted leading-relaxed">
            ServicePath is built on orchestration and governance technology
            covered by U.S. Provisional Patent Application No. 63/980,310
            (Patent Pending). Filed February 11, 2026.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-muted">
          <div>
            <p className="mb-2">
              CONTRUIL™ is a trademark of Contruil LLC. U.S. trademark
              application pending (Serial No. 99660773).
            </p>
            <p>
              &copy; 2026 Contruil LLC. U.S. Provisional Patent Application No.
              63/980,310 (Patent Pending).
            </p>
          </div>
          <div className="flex gap-6">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="/shared-responsibility-matrix" className="hover:text-white transition-colors">
              Cloud Responsibility Matrix
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
      </footer>
    </main>
  );
}

function SolutionBlock({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6 items-start">
      <span className="text-brand-accent font-mono text-sm mt-1 shrink-0">
        {number}
      </span>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-brand-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg border border-white/5 bg-brand-dark/50">
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-brand-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
