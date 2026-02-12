import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { SCENARIOS } from "@/lib/negotiation-scenarios";
import { checkRateLimit } from "@/lib/rate-limit";
import {
  OPENAI_JSON_SCHEMA,
  type NegotiationFeedback,
} from "@/lib/negotiation-feedback-schema";
import { writeSessionLog } from "@/lib/notion-session-log";

/**
 * NEGOTIATION_PROMPT_V1
 * Version: 1.0 | Last Modified: 2026-02-12
 * Purpose: Deterministic scoring negotiation simulator
 */
const PROMPT_VERSION = "v1.0";
const MAX_INPUT_CHARS = 2000;
const MAX_MESSAGES = 20;
const MAX_OUTPUT_TOKENS = 600;

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  return forwarded?.split(",")[0]?.trim() ?? realIp ?? "unknown";
}

function safeErrorResponse(
  reaction: string,
  feedback: string,
  status: number
): NextResponse {
  return NextResponse.json(
    { reaction, feedback, schema_version: null },
    { status }
  );
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const rateLimit = checkRateLimit(ip);
  if (!rateLimit.ok) {
    return safeErrorResponse(
      "You're sending messages a bit too quickly.",
      "Wait about a minute and try again. This helps us keep the trainer running smoothly.",
      429
    );
  }

  if (!openai) {
    return safeErrorResponse(
      "I'd love to respond, but the AI service isn't set up yet.",
      "Add OPENAI_API_KEY in Vercel → Project → Settings → Environment Variables, then redeploy.",
      503
    );
  }

  try {
    const body = await req.json();
    const { scenarioId, messages } = body as {
      scenarioId: string;
      messages: { role: "user" | "assistant"; content: string }[];
    };

    if (!scenarioId || !Array.isArray(messages)) {
      return safeErrorResponse(
        "Invalid request.",
        "Please refresh and try again.",
        400
      );
    }

    const scenario = SCENARIOS.find((s) => s.id === scenarioId);
    if (!scenario) {
      return safeErrorResponse("Invalid scenario.", "Choose a scenario and try again.", 400);
    }

    const trimmed = messages.slice(-MAX_MESSAGES);
    for (const m of trimmed) {
      if (m.content && m.content.length > MAX_INPUT_CHARS) {
        return safeErrorResponse(
          "Your message is too long.",
          `Please keep messages under ${MAX_INPUT_CHARS} characters.`,
          400
        );
      }
    }

    const systemContent = `You are ${scenario.otherPartyName} in a negotiation training scenario.
STABLE PROMPT VERSION: ${PROMPT_VERSION}

CONTEXT: ${scenario.setup}

YOUR BEHAVIOR: ${scenario.systemPrompt}

You MUST respond with valid JSON matching the required schema. Rate the user's message 0-10 on collaboration, assertiveness, clarity, and overall. Be fair but constructive.`;

    const apiMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      { role: "system", content: systemContent },
      ...trimmed.map((m) => ({
        role: m.role as "user" | "assistant",
        content: String(m.content).slice(0, MAX_INPUT_CHARS),
      })),
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: apiMessages,
      max_tokens: MAX_OUTPUT_TOKENS,
      temperature: 0.6,
      response_format: {
        type: "json_schema",
        json_schema: OPENAI_JSON_SCHEMA,
      },
    });

    const raw = completion.choices[0]?.message?.content?.trim() ?? "";
    let parsed: NegotiationFeedback;

    try {
      parsed = JSON.parse(raw) as NegotiationFeedback;
    } catch {
      return safeErrorResponse(
        "I'm having trouble formatting my response.",
        "Please try again.",
        500
      );
    }

    if (
      !parsed.roleplay_response ||
      !parsed.feedback ||
      !parsed.scores ||
      typeof parsed.scores.collaboration !== "number" ||
      typeof parsed.scores.assertiveness !== "number" ||
      typeof parsed.scores.clarity !== "number" ||
      typeof parsed.scores.overall !== "number" ||
      !parsed.feedback.tone_analysis ||
      !parsed.feedback.what_worked ||
      !parsed.feedback.what_to_improve
    ) {
      return safeErrorResponse(
        "I'm having trouble formatting my response.",
        "Please try again.",
        500
      );
    }

    const scores = {
      collaboration: Math.max(0, Math.min(10, Math.round(parsed.scores.collaboration))),
      assertiveness: Math.max(0, Math.min(10, Math.round(parsed.scores.assertiveness))),
      clarity: Math.max(0, Math.min(10, Math.round(parsed.scores.clarity))),
      overall: Math.max(0, Math.min(10, Math.round(parsed.scores.overall))),
    };

    const responsePayload = {
      roleplay_response: parsed.roleplay_response,
      feedback: {
        tone_analysis: parsed.feedback.tone_analysis,
        what_worked: parsed.feedback.what_worked,
        what_to_improve: parsed.feedback.what_to_improve,
      },
      scores,
      schema_version: "1.1" as const,
    };

    const sessionTimeIso = new Date().toISOString();

    writeSessionLog({
      tone_analysis: parsed.feedback.tone_analysis,
      scores,
      schema_version: "1.1",
      scenario_type: scenarioId as "salary" | "business-deal" | "vendor-client" | "conflict" | "everyday",
      session_time_iso: sessionTimeIso,
    }).catch(() => {});

    return NextResponse.json(responsePayload);
  } catch {
    return safeErrorResponse(
      "I'm having trouble responding right now.",
      "Please try again in a moment.",
      500
    );
  }
}
