/**
 * Phase 2 — Structured feedback schema for Negotiation Trainer
 * Version: 1.1 | Last Modified: 2026-02-12
 * Purpose: Deterministic scoring negotiation simulator. 0-10 scale.
 * Enables analytics, Session Logs (Notion), and monetization.
 */

export const FEEDBACK_SCHEMA_VERSION = "1.1";

export interface NegotiationScores {
  collaboration: number; // 0-10
  assertiveness: number; // 0-10
  clarity: number; // 0-10
  overall: number; // 0-10
}

export interface NegotiationFeedbackContent {
  tone_analysis: string;
  what_worked: string;
  what_to_improve: string;
}

export interface NegotiationFeedback {
  roleplay_response: string;
  feedback: NegotiationFeedbackContent;
  scores: NegotiationScores;
}

export const OPENAI_JSON_SCHEMA = {
  name: "negotiation_feedback",
  strict: true,
  schema: {
    type: "object",
    properties: {
      roleplay_response: {
        type: "string",
        description:
          "Your in-character response as the other party. 2-4 sentences. Natural, human tone.",
      },
      feedback: {
        type: "object",
        properties: {
          tone_analysis: {
            type: "string",
            description:
              "Brief analysis of the tone the user used—collaborative, assertive, passive, aggressive, neutral.",
          },
          what_worked: {
            type: "string",
            description: "One specific thing they did well. One sentence. Be encouraging.",
          },
          what_to_improve: {
            type: "string",
            description: "One specific thing to try next time. One sentence. Actionable.",
          },
        },
        required: ["tone_analysis", "what_worked", "what_to_improve"],
        additionalProperties: false,
      },
      scores: {
        type: "object",
        properties: {
          collaboration: {
            type: "number",
            description: "0-10. How well did they seek win-win, acknowledge the other side, or propose creative options?",
            minimum: 0,
            maximum: 10,
          },
          assertiveness: {
            type: "number",
            description: "0-10. Appropriate confidence and directness? Not passive, not aggressive.",
            minimum: 0,
            maximum: 10,
          },
          clarity: {
            type: "number",
            description: "0-10. How clear and specific was their message? Easy to understand?",
            minimum: 0,
            maximum: 10,
          },
          overall: {
            type: "number",
            description: "0-10. Overall effectiveness of this negotiation message.",
            minimum: 0,
            maximum: 10,
          },
        },
        required: ["collaboration", "assertiveness", "clarity", "overall"],
        additionalProperties: false,
      },
    },
    required: ["roleplay_response", "feedback", "scores"],
    additionalProperties: false,
  },
} as const;
