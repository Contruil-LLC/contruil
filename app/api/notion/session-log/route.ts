/**
 * Standalone Session Log API — metrics-only writes (no transcript)
 * Used for manual/retry or external ingestion of turn-level telemetry
 */

import { NextRequest, NextResponse } from "next/server";
import { writeSessionLog } from "@/lib/notion-session-log";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const payload = {
      tone_analysis: body.tone_analysis ?? body.feedback?.tone_analysis ?? "",
      scores: {
        collaboration: body.scores?.collaboration ?? 0,
        assertiveness: body.scores?.assertiveness ?? 0,
        clarity: body.scores?.clarity ?? 0,
        overall: body.scores?.overall ?? 0,
      },
      schema_version: body.schema_version ?? "1.1",
      scenario_type: body.scenario_type ?? "everyday",
      session_time_iso: body.session_time_iso ?? new Date().toISOString(),
    };

    const result = await writeSessionLog(payload);

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, notionPageId: result.pageId });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
