/**
 * Notion Session Log — turn-level structured telemetry only
 * Phase 2: Anonymous. No PII. No full transcript. No raw JSON.
 *
 * Logs: session_id, scenario, tone_category, scores, escalation_flag, timestamp
 * Does NOT log: user prompt, roleplay response, raw JSON, full transcript
 *
 * Requires NOTION_API_KEY and NOTION_DATABASE_ID
 */

import { Client } from "@notionhq/client";
import { randomUUID } from "crypto";
import type { ScenarioId } from "./negotiation-scenarios";

const SCENARIO_TO_NOTION: Record<ScenarioId, string> = {
  salary: "Salary",
  "business-deal": "Business Deal",
  "vendor-client": "Vendor/Client",
  conflict: "Conflict",
  everyday: "Everyday",
};

/** Collaborative | Assertive | Aggressive | Defensive | Unclear */
function inferToneCategory(toneAnalysis: string): string {
  const lower = toneAnalysis.toLowerCase();
  if (lower.includes("aggressive")) return "Aggressive";
  if (lower.includes("defensive")) return "Defensive";
  if (lower.includes("collaborative")) return "Collaborative";
  if (lower.includes("assertive")) return "Assertive";
  return "Unclear";
}

function inferEscalation(toneAnalysis: string, scores: { overall: number }): boolean {
  const lower = toneAnalysis.toLowerCase();
  if (lower.includes("aggressive") || lower.includes("hostile")) return true;
  if (scores.overall < 3) return true;
  return false;
}

export interface SessionLogPayload {
  /** Tone analysis text — used only to derive tone_category and escalation. Not stored. */
  tone_analysis: string;
  scores: {
    collaboration: number;
    assertiveness: number;
    clarity: number;
    overall: number;
  };
  schema_version: string;
  scenario_type: ScenarioId;
  session_time_iso: string;
}

export async function writeSessionLog(
  payload: SessionLogPayload
): Promise<{ ok: boolean; pageId?: string; error?: string }> {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return { ok: false, error: "Notion not configured" };
  }

  const notion = new Client({ auth: apiKey });
  const sessionId = randomUUID();
  const toneCategory = inferToneCategory(payload.tone_analysis);
  const escalationFlag = inferEscalation(payload.tone_analysis, payload.scores);
  const scenarioSelect = SCENARIO_TO_NOTION[payload.scenario_type] ?? payload.scenario_type;

  try {
    const res = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Session: {
          title: [
            {
              text: { content: `Turn — ${payload.session_time_iso}` },
            },
          ],
        },
        "Session ID": {
          rich_text: [{ text: { content: sessionId } }],
        },
        "Session time": {
          date: { start: payload.session_time_iso },
        },
        "Scenario type": {
          select: { name: scenarioSelect },
        },
        "Tone category": {
          select: { name: toneCategory },
        },
        "Score — Collaboration": { number: payload.scores.collaboration },
        "Score — Assertiveness": { number: payload.scores.assertiveness },
        "Score — Clarity": { number: payload.scores.clarity },
        "Score — Overall": { number: payload.scores.overall },
        "Escalation flag": {
          checkbox: escalationFlag,
        },
        "Schema version": {
          rich_text: [{ text: { content: payload.schema_version } }],
        },
      },
    });

    return { ok: true, pageId: res.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { ok: false, error: message };
  }
}
