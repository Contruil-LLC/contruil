import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Contruil™",
  description: "Get in touch with Contruil. Questions about the pilot program, partnerships, or AI governance — we respond within one business day.",
};

export default function Contact() {
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
          <a href="/pilot-fit-call" className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-brand-blue text-white text-sm font-medium rounded-lg hover:bg-brand-blue/90 transition-colors">
            Book a Pilot Fit Call
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase mb-4 block">Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Get in touch</h1>
          <p className="text-lg text-brand-mid leading-relaxed">
            Questions about the pilot, partnerships, or AI governance in your environment — we respond within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-12 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_320px] gap-16">

          {/* Form */}
          {/* To activate: create a free form at formspree.io, then replace FORMSPREE_FORM_ID below */}
          <form
            action="https://formspree.io/f/FORMSPREE_FORM_ID"
            method="POST"
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-mid mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-brand-blue transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-mid mb-2">
                  Work email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-brand-blue transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-brand-mid mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-brand-blue transition-colors"
                placeholder="Optional"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-brand-mid mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-blue transition-colors"
              >
                <option value="pilot">Pilot program inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="press">Press & media</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-mid mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-brand-blue transition-colors resize-none"
                placeholder="Tell us about your environment, your question, or what you&apos;re trying to solve."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue/90 transition-colors"
            >
              Send message →
            </button>
          </form>

          {/* Contact info sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-3">Direct email</h3>
              <a
                href="mailto:timothy@contruil.com"
                className="text-brand-mid hover:text-white transition-colors"
              >
                timothy@contruil.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-3">Pilot fit call</h3>
              <p className="text-brand-mid text-sm leading-relaxed mb-3">
                The fastest path to understanding whether Contruil fits your environment is a structured 30-minute call.
              </p>
              <a
                href="/pilot-fit-call"
                className="inline-flex items-center gap-2 text-sm text-brand-blue hover:text-white transition-colors"
              >
                Book a call →
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-3">Response time</h3>
              <p className="text-brand-mid text-sm">
                We respond to all inquiries within one business day.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 mt-12">
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
