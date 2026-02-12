import Link from "next/link";

export const metadata = {
  title: "AI Governance Readiness Checklist — Contruil",
  description:
    "Assess pilot eligibility. Multi-model visibility, routing controls, human checkpoints, audit trail integrity, cost management, incident detection.",
};

const SECTIONS = [
  {
    title: "Multi-model visibility",
    questions: [
      "Do you have a single view of all AI providers and models in use across the organization?",
      "Can you identify which departments or teams use which models?",
    ],
  },
  {
    title: "Routing controls",
    questions: [
      "Are AI requests classified by sensitivity before reaching a model?",
      "Can low-risk workloads be routed to cost-efficient models automatically?",
    ],
  },
  {
    title: "Human authorization checkpoints",
    questions: [
      "Do critical AI decisions require human approval before execution?",
      "Is there a defined escalation path when AI output exceeds policy thresholds?",
    ],
  },
  {
    title: "Audit trail integrity",
    questions: [
      "Is every significant AI interaction logged with who, what, when, and which model?",
      "Can your audit records withstand regulatory or litigation scrutiny?",
    ],
  },
  {
    title: "Cost exposure management",
    questions: [
      "Do you have visibility into AI spend by task type or department?",
      "Can you attribute cost to specific workloads or business units?",
    ],
  },
  {
    title: "Incident detection capability",
    questions: [
      "Do you monitor for drift, policy violations, or anomalous AI behavior in real time?",
      "Can you detect and respond to AI incidents before they escalate?",
    ],
  },
];

export default function ChecklistPage() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/5 print:hidden">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Contruil
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/checklist"
              className="text-sm text-white print:hidden"
            >
              Checklist
            </Link>
            <Link
              href="/pilot-fit-call"
              className="text-sm px-4 py-2 bg-brand-accent text-white rounded-md hover:bg-blue-600 transition-colors print:hidden"
            >
              Pilot Fit Call
            </Link>
            <button
              type="button"
              onClick={() => window.print()}
              className="text-sm px-4 py-2 border border-white/20 text-brand-muted rounded-md hover:bg-white/5 hover:text-white transition-colors print:hidden"
            >
              Print / Save as PDF
            </button>
          </div>
        </div>
      </nav>

      <article className="pt-32 pb-20 px-6 max-w-3xl mx-auto print:pt-8">
        <h1 className="text-3xl font-bold mb-2">
          AI Governance Readiness Checklist
        </h1>
        <p className="text-brand-muted mb-8">
          Assess pilot eligibility. Mark each item Yes/No, note Risk Level, and add
          Notes. If 3 or more answers are &quot;No,&quot; your organization is exposed to
          unmanaged AI risk — a time-boxed pilot may be the right next step.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((section, i) => (
            <section key={i} className="border-b border-white/10 pb-8">
              <h2 className="text-lg font-semibold mb-4">
                {i + 1}. {section.title}
              </h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left text-brand-muted">
                    <th className="py-2 pr-4">Question</th>
                    <th className="py-2 w-20">Yes / No</th>
                    <th className="py-2 w-24">Risk Level</th>
                    <th className="py-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {section.questions.map((q, j) => (
                    <tr key={j} className="border-b border-white/5 align-top">
                      <td className="py-3 pr-4">{q}</td>
                      <td className="py-3 w-20 text-brand-muted">○ ○</td>
                      <td className="py-3 w-24 text-brand-muted">—</td>
                      <td className="py-3 text-brand-muted">—</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-brand-navy border border-white/10">
          <p className="font-medium mb-2">Exposure threshold</p>
          <p className="text-brand-muted text-sm">
            If 3 or more answers are &quot;No,&quot; your organization is exposed to
            unmanaged AI risk. Book a Pilot Fit Call to assess fit for a 30–60 day
            pilot in your environment.
          </p>
          <Link
            href="/pilot-fit-call"
            className="inline-block mt-4 px-6 py-3 bg-brand-accent text-white font-medium rounded-md hover:bg-blue-600 transition-colors print:hidden"
          >
            Pilot Fit Call
          </Link>
        </div>

        <p className="mt-8 text-xs text-brand-muted">
          © {new Date().getFullYear()} Contruil LLC. U.S. Patent Pending —
          Application No. 63/980,310.
        </p>
      </article>
    </main>
  );
}
