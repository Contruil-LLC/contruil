"use client";

import { useState } from "react";
import { SCENARIOS } from "@/lib/negotiation-scenarios";
import type {
  NegotiationScores,
} from "@/lib/negotiation-feedback-schema";

type Message = { role: "user" | "assistant"; content: string };

type StructuredFeedback = {
  scores: NegotiationScores;
  feedback: {
    tone_analysis: string;
    what_worked: string;
    what_to_improve: string;
  };
};

type Feedback =
  | { reaction: string; feedback: string; schema_version?: string | null }
  | { reaction: string; feedback: StructuredFeedback; schema_version?: string };

export default function NegotiationTrainer() {
  const [scenario, setScenario] = useState<(typeof SCENARIOS)[0] | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastFeedback, setLastFeedback] = useState<Feedback | null>(null);
  const [tipsExpanded, setTipsExpanded] = useState(true);

  const handleSelectScenario = (s: (typeof SCENARIOS)[0]) => {
    setScenario(s);
    setMessages([]);
    setLastFeedback(null);
    setTipsExpanded(true);
  };

  const handleSend = async () => {
    if (!scenario || !input.trim() || loading) return;

    const userMessage = input.trim().slice(0, 2000);
    setInput("");
    setMessages((m) => [...m, { role: "user", content: userMessage }]);
    setLoading(true);
    setLastFeedback(null);

    try {
      const res = await fetch("/api/negotiation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scenarioId: scenario.id,
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            content:
              data.roleplay_response ??
              data.reaction ??
              "Something went wrong. Please try again.",
          },
        ]);
        setLastFeedback({
          reaction: data.reaction ?? "",
          feedback: data.feedback ?? "Check the console for details.",
          schema_version: null,
        });
        return;
      }

      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: data.roleplay_response ?? data.reaction ?? "Something went wrong.",
        },
      ]);
      setLastFeedback({
        reaction: data.roleplay_response ?? data.reaction,
        feedback: {
          scores: data.scores,
          feedback: data.feedback,
        },
        schema_version: data.schema_version ?? undefined,
      });
    } catch (e) {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "I couldn't connect. Please check your connection and try again.",
        },
      ]);
      setLastFeedback({
        reaction: "",
        feedback: "Network error. Try again!",
        schema_version: null,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold tracking-tight">
            Contruil
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-brand-muted">
            <a href="/servicepath" className="hover:text-white transition-colors">
              ServicePath
            </a>
            <a
              href="/servicepath/leadership-training"
              className="hover:text-white transition-colors"
            >
              Leadership Training
            </a>
            <a
              href="/servicepath/leadership-training/trainer"
              className="text-white"
            >
              Practice
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

      <div className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Negotiation Trainer</h1>
        <p className="text-brand-muted mb-8">
          Pick a scenario, type your response, and get realistic AI reactions.
          Practice until you feel confident.
        </p>

        {!scenario ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {SCENARIOS.map((s) => (
              <button
                key={s.id}
                onClick={() => handleSelectScenario(s)}
                className="p-6 rounded-lg border border-white/10 bg-brand-navy/50 text-left hover:border-brand-accent/30 hover:bg-brand-navy transition-colors"
              >
                <h2 className="font-semibold mb-1">{s.title}</h2>
                <p className="text-sm text-brand-muted">{s.shortDescription}</p>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Scenario header + tips */}
            <div className="p-4 rounded-lg border border-white/5 bg-brand-navy">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold">{scenario.title}</h2>
                <button
                  onClick={() => setTipsExpanded(!tipsExpanded)}
                  className="text-xs text-brand-accent hover:underline"
                >
                  {tipsExpanded ? "Hide tips" : "Show tips"}
                </button>
              </div>
              <p className="text-sm text-brand-muted mb-3">{scenario.setup}</p>
              {tipsExpanded && (
                <div className="pt-3 border-t border-white/5">
                  <p className="text-xs font-mono text-brand-accent uppercase tracking-wider mb-2">
                    Quick tips
                  </p>
                  <ul className="text-sm text-brand-muted space-y-1">
                    {scenario.tips.map((tip, i) => (
                      <li key={i}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Chat */}
            <div className="border border-white/5 rounded-lg overflow-hidden bg-brand-dark/30">
              <div className="p-4 space-y-4 min-h-[200px] max-h-[400px] overflow-y-auto">
                {messages.length === 0 && (
                  <p className="text-sm text-brand-muted italic">
                    Start the conversation. Type your first message below.
                  </p>
                )}
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg px-4 py-2 ${
                        m.role === "user"
                          ? "bg-brand-accent/20 text-right"
                          : "bg-brand-navy border border-white/5"
                      }`}
                    >
                      <p className="text-xs text-brand-muted mb-1">
                        {m.role === "user" ? "You" : scenario.otherPartyName}
                      </p>
                      <p className="text-sm">{m.content}</p>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="rounded-lg px-4 py-2 bg-brand-navy border border-white/5">
                      <p className="text-xs text-brand-muted">Thinking...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Feedback */}
              {lastFeedback?.feedback && (
                <div className="px-4 py-3 border-t border-white/5 bg-brand-accent/5">
                  <p className="text-xs font-mono text-brand-accent uppercase tracking-wider mb-2">
                    Feedback
                  </p>
                  {typeof lastFeedback.feedback === "object" &&
                  "scores" in lastFeedback.feedback &&
                  "feedback" in lastFeedback.feedback ? (
                    <StructuredFeedbackDisplay
                      feedback={lastFeedback.feedback as StructuredFeedback}
                    />
                  ) : (
                    <p className="text-sm text-brand-muted">
                      {String(lastFeedback.feedback)}
                    </p>
                  )}
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-white/5 flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                  placeholder="Type your response... (max 2,000 characters)"
                  className="flex-1 px-4 py-2 rounded-md bg-brand-dark border border-white/10 text-white placeholder:text-brand-muted focus:outline-none focus:border-brand-accent/50"
                  disabled={loading}
                />
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="px-4 py-2 bg-brand-accent text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Send
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  if (confirm("Start a new scenario? This conversation will reset.")) {
                    handleSelectScenario(scenario);
                  }
                }}
                className="text-sm text-brand-muted hover:text-white transition-colors"
              >
                Restart this scenario
              </button>
              <button
                onClick={() => {
                  if (confirm("Pick a different scenario? This conversation will reset.")) {
                    setScenario(null);
                    setMessages([]);
                    setLastFeedback(null);
                  }
                }}
                className="text-sm text-brand-muted hover:text-white transition-colors"
              >
                Choose different scenario
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 mt-12">
        <div className="max-w-6xl mx-auto text-center text-sm text-brand-muted">
          <p>
            Part of ServicePath Leadership Training. Built by Contruil LLC. Patent
            Pending (U.S. 63/980,310).
          </p>
        </div>
      </footer>
    </main>
  );
}

function StructuredFeedbackDisplay({
  feedback,
}: {
  feedback: StructuredFeedback;
}) {
  const { scores, feedback: fb } = feedback;
  const dimensions = [
    { key: "collaboration", label: "Collaboration", value: scores.collaboration },
    { key: "assertiveness", label: "Assertiveness", value: scores.assertiveness },
    { key: "clarity", label: "Clarity", value: scores.clarity },
    { key: "overall", label: "Overall", value: scores.overall },
  ];

  return (
    <div className="space-y-3 text-sm">
      <div className="grid grid-cols-2 gap-2">
        {dimensions.map(({ key, label, value }) => (
          <div key={key} className="flex items-center gap-2">
            <span className="text-brand-muted w-24 truncate">{label}:</span>
            <div className="flex-1 flex gap-0.5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <span
                  key={n}
                  className={`w-2 h-2 rounded-sm shrink-0 ${
                    n <= value ? "bg-brand-accent" : "bg-white/10"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-xs w-6">{value}/10</span>
          </div>
        ))}
      </div>
      {fb.tone_analysis && (
        <p className="text-brand-muted/80 text-xs italic">{fb.tone_analysis}</p>
      )}
      <div className="pt-2 space-y-1 border-t border-white/5">
        <p>
          <span className="text-brand-accent">✓</span>{" "}
          <span className="text-brand-muted">{fb.what_worked}</span>
        </p>
        <p>
          <span className="text-amber-500/80">→</span>{" "}
          <span className="text-brand-muted">{fb.what_to_improve}</span>
        </p>
      </div>
    </div>
  );
}
