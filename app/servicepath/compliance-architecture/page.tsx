import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance Architecture — ServicePath — Contruil",
  description:
    "Four-Gate Authorization mapped to ISO 27001:2022 controls. Enterprise-grade compliance alignment for AI-powered chapter tracking.",
};

export default function ComplianceArchitecture() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold tracking-tight">
            Contruil
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-brand-muted">
            <a href="/#what-we-do" className="hover:text-white transition-colors">
              What We Do
            </a>
            <a href="/servicepath" className="hover:text-white transition-colors">
              ServicePath
            </a>
            <a
              href="/servicepath/compliance-architecture"
              className="text-white"
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
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-accent text-sm font-mono mb-2 tracking-wider uppercase">
            ServicePath / Compliance Architecture
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Four-Gate Authorization → ISO 27001:2022
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl leading-relaxed">
            How ServicePath&apos;s patent-pending Four-Gate Validation maps to
            ISO 27001:2022 information security controls.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Control Mapping Overview</h2>
          <p className="text-brand-muted leading-relaxed mb-8">
            The Four-Gate Authorization model provides governance checkpoints
            that align directly with ISO 27001:2022 Annex A controls. Each gate
            enforces specific information security requirements, creating a
            compliance-by-design architecture rather than a
            compliance-after-the-fact audit process.
          </p>

          {/* Gate Mapping */}
          <div className="space-y-8">
            <GateMapping
              gate="Gate 1 — Intent Classification"
              isoControls={[
                {
                  control: "A.5.12",
                  name: "Classification of Information",
                  description:
                    "Incoming requests are classified by sensitivity and business purpose before processing. This satisfies the requirement to classify information according to organizational needs.",
                },
                {
                  control: "A.8.10",
                  name: "Information Deletion",
                  description:
                    "Classification at entry determines data retention and deletion policies applied to each interaction.",
                },
              ]}
            />

            <GateMapping
              gate="Gate 2 — Policy Validation"
              isoControls={[
                {
                  control: "A.5.1",
                  name: "Policies for Information Security",
                  description:
                    "Each routed request is validated against active organizational policies before execution. Policy enforcement is automated and auditable.",
                },
                {
                  control: "A.5.10",
                  name: "Acceptable Use of Information",
                  description:
                    "Automated checks ensure that information use complies with acceptable use policies defined by the institution.",
                },
              ]}
            />

            <GateMapping
              gate="Gate 3 — Human Authorization"
              isoControls={[
                {
                  control: "A.5.3",
                  name: "Segregation of Duties",
                  description:
                    "Human reviewers at Gate 3 are separate from submitters and system operators, enforcing segregation of duties for critical approvals.",
                },
                {
                  control: "A.8.3",
                  name: "Information Access Restriction",
                  description:
                    "Access to approve, modify, or release information is restricted to authorized human reviewers at this gate.",
                },
              ]}
            />

            <GateMapping
              gate="Gate 4 — Audit Commit"
              isoControls={[
                {
                  control: "A.8.15",
                  name: "Logging",
                  description:
                    "Every approved action is committed to a tamper-evident audit log with cryptographic linking. Satisfies logging requirements with immutable records.",
                },
                {
                  control: "A.8.17",
                  name: "Clock Synchronization",
                  description:
                    "Audit entries are timestamped using synchronized system clocks to ensure temporal accuracy across all records.",
                },
                {
                  control: "A.5.36",
                  name: "Compliance with Policies, Rules and Standards",
                  description:
                    "The complete four-gate chain provides verifiable evidence of compliance with organizational policies at every decision point.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 px-6 bg-brand-navy border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Why This Matters for Institutions
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            Most student organization management systems treat compliance as a
            reporting feature. ServicePath treats it as an architectural
            requirement. Every interaction flows through governance checkpoints
            that produce verifiable evidence by default.
          </p>
          <p className="text-brand-muted leading-relaxed">
            When auditors, accreditation bodies, or institutional reviewers ask
            how decisions were made, ServicePath doesn&apos;t generate a report.
            It opens the audit chain. The evidence is already there — it was
            created at the moment of authorization, not reconstructed after the
            fact.
          </p>
        </div>
      </section>

      {/* IP Section */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-brand-muted leading-relaxed">
            The Four-Gate Authorization model and tamper-evident audit chain
            technology are covered by U.S. Provisional Patent Application No.
            63/980,310 (Patent Pending). Filed February 11, 2026.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-muted">
          <p>
            &copy; 2026 Contruil LLC. U.S. Provisional Patent Application No.
            63/980,310 (Patent Pending).
          </p>
          <div className="flex gap-6">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="/servicepath" className="hover:text-white transition-colors">
              ServicePath
            </a>
            <a href="https://cyw-os.com" className="hover:text-white transition-colors">
              CYW OS
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function GateMapping({
  gate,
  isoControls,
}: {
  gate: string;
  isoControls: { control: string; name: string; description: string }[];
}) {
  return (
    <div className="p-6 rounded-lg border border-white/5 bg-brand-dark/50">
      <h3 className="text-lg font-semibold mb-4 text-brand-accent">{gate}</h3>
      <div className="space-y-4">
        {isoControls.map((item) => (
          <div key={item.control} className="flex gap-4 items-start">
            <span className="text-xs font-mono text-white bg-white/5 px-2 py-1 rounded shrink-0 mt-0.5">
              {item.control}
            </span>
            <div>
              <p className="text-sm font-medium mb-1">{item.name}</p>
              <p className="text-brand-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
