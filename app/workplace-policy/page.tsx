import Link from "next/link";

export const metadata = {
  title: "Workplace Policy — Contruil",
  description:
    "Contruil workplace policy. Remote-first, control-driven. Least-privilege access, change-managed approvals, auditability.",
};

export default function WorkplacePolicyPage() {
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

      <article className="pt-32 pb-20 px-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Workplace Policy</h1>
        <p className="text-brand-muted mb-8">Remote-first, control-driven</p>

        <section className="space-y-6 text-brand-muted leading-relaxed">
          <p>
            Contruil operates as a remote-first company. We work as a distributed
            team and collaborate with vetted contractors and partners as needed.
            We focus on outcomes, written communication, and documented operating
            procedures.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Controls and security
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Access is least-privilege and time-bound when feasible.</li>
              <li>
                Sensitive workflows use documented, change-managed approval
                checkpoints.
              </li>
              <li>
                Work artifacts are logged to support auditability and operational
                continuity.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Hiring stance
            </h2>
            <p>
              Contruil is not actively hiring full-time roles at this time. We
              may engage contractors for specific scoped deliverables. We will
              expand hiring as operational capacity and customer demand justify
              it.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
            <p>
              For partnership, pilot, or contracting inquiries:{" "}
              <a
                href="mailto:info@contruil.com"
                className="text-brand-accent hover:underline"
              >
                info@contruil.com
              </a>
            </p>
          </div>
        </section>

        <p className="mt-12 text-xs text-brand-muted">
          &copy; {new Date().getFullYear()} Contruil LLC. U.S. Patent Pending —
          Application No. 63/980,310.
        </p>
      </article>
    </main>
  );
}
