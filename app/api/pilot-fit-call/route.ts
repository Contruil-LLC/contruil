/**
 * Pilot Fit Call request submission.
 * Sends email via Resend when RESEND_API_KEY is set.
 */

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, role, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    if (resend) {
      const { error } = await resend.emails.send({
        from: process.env.RESEND_FROM ?? "Contruil <onboarding@resend.dev>",
        to: process.env.RESEND_TO ?? "timothy@contruil.com",
        replyTo: email,
        subject: `Pilot Fit Call Request — ${company || "Unknown"}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "—"}</p>
          <p><strong>Role:</strong> ${role || "—"}</p>
          <p><strong>Message:</strong></p>
          <p>${message || "—"}</p>
        `,
      });
      if (error) throw error;
    } else if (process.env.NODE_ENV === "development") {
      console.log("[Pilot Fit Call]", { name, email, company, role, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Pilot Fit Call]", err);
    return NextResponse.json(
      { error: "Submission failed" },
      { status: 500 }
    );
  }
}
