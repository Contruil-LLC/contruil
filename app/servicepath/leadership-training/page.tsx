import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Training — ServicePath — Contruil",
  description:
    "Negotiation Skills Module. Four-Gate validated scenario training with tamper-evident progress tracking and blockchain-backed certifications. Q2 2026 beta.",
};

export default function LeadershipTraining() {
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
              href="/servicepath/leadership-training"
              className="text-white"
            >
              Leadership Training
            </a>
            <a
              href="/servicepath/leadership-training/trainer"
              className="hover:text-white transition-colors"
            >
              Practice
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
          <p className="text-brand-accent text-sm font-mono mb-2 tracking-wider uppercase">
            ServicePath / Vertical 02
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Negotiation Skills Module
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl leading-relaxed mb-6">
            Four-Gate validated training that teaches practical negotiation through
            real-world scenarios and AI role-play. Tamper-evident progress tracking.
            Blockchain-backed certifications. Not theory—verifiable skill development.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1.5 rounded border border-brand-accent/30 text-brand-accent font-mono">
              Q2 2026 BETA
            </span>
            <span className="px-3 py-1.5 rounded border border-white/10 text-brand-muted">
              50 NSLS + LinkedIn pilot
            </span>
            <a
              href="/servicepath/leadership-training/trainer"
              className="px-4 py-2 bg-brand-accent text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Try the trainer
            </a>
          </div>
        </div>
      </section>

      {/* Four-Gate Application */}
      <section className="py-16 px-6 border-t border-white/5 bg-brand-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Four-Gate Applied to Skill Development</h2>
          <p className="text-brand-muted mb-10 max-w-2xl">
            The same authorization framework that secures enterprise compliance now
            structures negotiation practice. Each gate produces an auditable output.
          </p>
          <div className="space-y-6">
            <GateCard
              gate="Gate 1 — Intent Validation"
              description="User specifies negotiation goal (salary, vendor contract, conflict resolution). System validates goal clarity and feasibility."
              output="Structured intent with success criteria"
            />
            <GateCard
              gate="Gate 2 — Context Authorization"
              description="System analyzes role, industry, and relationship dynamics. Identifies power dynamics and constraints."
              output="Contextual strategy recommendations"
            />
            <GateCard
              gate="Gate 3 — Cost Constraint Selection"
              description="User defines acceptable trade-offs. System presents scenario-specific BATNA and walk-away thresholds."
              output="Negotiation range and boundaries"
            />
            <GateCard
              gate="Gate 4 — Tamper-Evident Execution"
              description="User practices with AI role-play partner. Every move logged with timestamp and reasoning. Feedback generated with audit trail."
              output="Verifiable skill progress report"
            />
          </div>
        </div>
      </section>

      {/* Training Scenarios */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Five Scenario Types</h2>
          <div className="space-y-6">
            <ScenarioCard
              title="Salary Negotiation"
              skills="Market research, timing strategy, framing value vs. entitlement, handling counteroffers"
              example="You've been offered $85K. Market rate is $95K. Walk through the negotiation."
            />
            <ScenarioCard
              title="Business Deal Structuring"
              skills="Multi-party dynamics, creative value creation, contract term trade-offs, relationship preservation"
              example="You're buying inventory from a long-term vendor. They've raised prices 30%. Negotiate."
            />
            <ScenarioCard
              title="Vendor/Client Relationships"
              skills="Scope creep management, timeline renegotiation, pricing adjustments, expectation alignment"
              example="Client wants additional features mid-project without budget increase. Navigate this."
            />
            <ScenarioCard
              title="Conflict Resolution"
              skills="De-escalation, finding common ground, reframing positions as interests, mediation"
              example="Two team members are in open conflict affecting project delivery. Mediate."
            />
            <ScenarioCard
              title="Everyday Negotiations"
              skills="Household decisions, service provider discussions, schedule coordination, boundary setting"
              example="Your landlord wants to raise rent 20%. Negotiate a fair increase or exit terms."
            />
          </div>
        </div>
      </section>

      {/* Progress & Certification */}
      <section className="py-16 px-6 border-t border-white/5 bg-brand-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Progress Tracking & Certification</h2>
          <p className="text-brand-muted mb-8 max-w-2xl leading-relaxed">
            Every practice session produces tamper-evident metrics: preparation quality,
            communication effectiveness, creative problem-solving, relationship preservation,
            outcome achievement. Certifications include SHA-256 hash of performance data
            and optional blockchain anchoring.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-white/5 bg-brand-dark/50">
              <p className="text-brand-accent font-mono text-xs mb-2">BRONZE</p>
              <p className="text-sm text-brand-muted">10 scenarios, 70% effectiveness</p>
            </div>
            <div className="p-4 rounded-lg border border-white/5 bg-brand-dark/50">
              <p className="text-brand-accent font-mono text-xs mb-2">SILVER</p>
              <p className="text-sm text-brand-muted">25 scenarios, 80% effectiveness</p>
            </div>
            <div className="p-4 rounded-lg border border-white/5 bg-brand-dark/50">
              <p className="text-brand-accent font-mono text-xs mb-2">GOLD</p>
              <p className="text-sm text-brand-muted">50 scenarios, 85% effectiveness + peer role-play validation</p>
            </div>
            <div className="p-4 rounded-lg border border-white/5 bg-brand-dark/50">
              <p className="text-brand-accent font-mono text-xs mb-2">PLATINUM</p>
              <p className="text-sm text-brand-muted">100 scenarios + mentor 5 other users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard
              tier="Freemium"
              price="Free"
              items={[
                "5 scenario attempts/month",
                "Basic text feedback",
                "No certification",
                "Public leaderboard opt-in",
              ]}
            />
            <PricingCard
              tier="Pro"
              price="$29/month"
              featured
              items={[
                "Unlimited scenarios",
                "Advanced feedback (audio/video)",
                "Certification eligibility",
                "Private progress dashboard",
                "Export tamper-evident audit logs",
              ]}
            />
            <PricingCard
              tier="Enterprise"
              price="Custom"
              items={[
                "Team dashboards",
                "Custom scenario builder",
                "HRIS/LMS integration",
                "Dedicated success manager",
                "White-label option",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-16 px-6 border-t border-white/5 bg-brand-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Why Four-Gate for Negotiation</h2>
          <p className="text-brand-muted mb-8 max-w-2xl leading-relaxed">
            Traditional workshops cost $1,500+ and require scheduling. Generic AI chatbots
            give one-off advice with no accountability. This module combines on-demand
            access, purpose-built negotiation structure, and verifiable progress that
            holds up under scrutiny.
          </p>
          <ul className="space-y-3 text-brand-muted text-sm">
            <li className="flex gap-3">
              <span className="text-brand-accent">→</span>
              <span>Asynchronous, on-demand—no scheduling required</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent">→</span>
              <span>Tamper-evident logs—you can&apos;t edit history</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent">→</span>
              <span>Structured feedback across sessions—not one-off conversations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent">→</span>
              <span>Public verification URL for credentials—user-controlled privacy</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Beta Launch — Q2 2026</h2>
          <p className="text-brand-muted mb-8 max-w-xl mx-auto leading-relaxed">
            50 beta users from NSLS and LinkedIn network. Free access in exchange for
            feedback. Starting with Salary Negotiation + Everyday Negotiations scenarios.
          </p>
          <a
            href="mailto:timothy@contruil.com?subject=ServicePath%20Leadership%20Training%20Beta%20Interest"
            className="inline-block px-6 py-3 bg-brand-accent text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Express Beta Interest
          </a>
        </div>
      </section>

      {/* IP Section */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-brand-muted leading-relaxed">
            The Negotiation Skills Module and Four-Gate validation framework are covered
            by U.S. Provisional Patent Application No. 63/980,310 (Patent Pending).
            Filed February 11, 2026.
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
            <a href="/servicepath" className="hover:text-white transition-colors">
              ServicePath
            </a>
            <a href="/servicepath/compliance-architecture" className="hover:text-white transition-colors">
              Compliance
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

function GateCard({
  gate,
  description,
  output,
}: {
  gate: string;
  description: string;
  output: string;
}) {
  return (
    <div className="p-6 rounded-lg border border-white/5 bg-brand-dark/50">
      <h3 className="text-brand-accent font-semibold mb-2">{gate}</h3>
      <p className="text-brand-muted text-sm leading-relaxed mb-3">{description}</p>
      <p className="text-xs font-mono text-brand-muted/80">
        Output: {output}
      </p>
    </div>
  );
}

function ScenarioCard({
  title,
  skills,
  example,
}: {
  title: string;
  skills: string;
  example: string;
}) {
  return (
    <div className="p-6 rounded-lg border border-white/5 bg-brand-dark/30">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-brand-muted mb-3">{skills}</p>
      <p className="text-xs font-mono text-brand-accent/90 italic">&quot;{example}&quot;</p>
    </div>
  );
}

function PricingCard({
  tier,
  price,
  items,
  featured = false,
}: {
  tier: string;
  price: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`p-6 rounded-lg border ${
        featured ? "border-brand-accent/30 bg-brand-accent/5" : "border-white/5 bg-brand-dark/30"
      }`}
    >
      <p className="text-xs font-mono text-brand-accent uppercase tracking-wider mb-1">
        {tier}
      </p>
      <p className="text-xl font-bold mb-4">{price}</p>
      <ul className="space-y-2 text-sm text-brand-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-brand-accent shrink-0">·</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
