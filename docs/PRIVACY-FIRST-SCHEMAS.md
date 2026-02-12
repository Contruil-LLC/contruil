# Negotiation Trainer — Privacy-First Schema Evolution

**Staged: A → B → C**

---

## A) Revised Notion Schema (Privacy-First) — Phase 2 — ACTIVE

**Principle:** Anonymous. No PII. Structured metrics only. No transcript.

### Properties to KEEP

| Property | Type | Purpose |
|----------|------|---------|
| Session | Title | Turn identifier (e.g. "Turn — 2026-02-12T...") |
| Session ID | Rich text | UUID per turn |
| Session time | Date | ISO 8601 timestamp |
| Scenario type | Select | Salary, Business Deal, Vendor/Client, Conflict, Everyday |
| Tone category | Select | Collaborative, Assertive, Aggressive, Defensive, Unclear |
| Score — Collaboration | Number | 0-10 |
| Score — Assertiveness | Number | 0-10 |
| Score — Clarity | Number | 0-10 |
| Score — Overall | Number | 0-10 |
| Escalation flag | Checkbox | true if aggressive/hostile or overall < 3 |
| Schema version | Rich text | e.g. "1.1" |

### Properties to REMOVE (or stop writing)

| Property | Reason |
|----------|--------|
| User prompt | Full transcript = content storage |
| Roleplay response | Full transcript |
| Tone analysis | Free text, unnecessary when tone_category exists |
| What worked | Coaching text, not needed for metrics |
| What to improve | Coaching text |
| Raw JSON | Full payload, high risk |

### Notion Database Migration

1. Create new database or add new properties: **Session ID** (if missing)
2. Remove or ignore: User prompt, Roleplay response, Tone analysis, What worked, What to improve, Raw JSON
3. Ensure select options for Scenario type and Tone category match exactly

### Public Statement

> "Sessions are anonymous. We store structured scoring metrics only — not your negotiation content."

---

## B) Consent Flow for Future Opt-In Tracking — Phase 3

**When:** After authentication or email capture exists.

### Consent Checklist (Pre-Implementation)

- [ ] Privacy policy published
- [ ] Data retention policy defined
- [ ] User deletion mechanism built
- [ ] Explicit opt-in UI (checkbox, not pre-checked)
- [ ] Consent stored with timestamp
- [ ] Ability to revoke and delete

### Opt-In Flow (Draft)

1. **Before first trainer use:** Show modal or banner
   - "Help us improve the trainer. Opt in to store anonymized session summaries (scores, scenario type, tone). We never store your negotiation content."
   - [ ] I agree
   - [ ] No thanks

2. **If opted in:** Log turn-level metrics (same as Phase 2 — no change to what we store)

3. **If opted out:** Do not call writeSessionLog at all

4. **Future opt-in transcript:** Separate consent
   - "Store my practice transcripts for personalized feedback and certification."
   - Requires Phase 4 infrastructure

### Consent Storage

- Cookie or localStorage: `negotiation_trainer_telemetry_consent: "granted" | "denied"`
- Or in user account when auth exists

---

## C) Postgres-Ready Schema for Scale — Phase 4

**When:** Enterprise, certification, or full transcript needed.

```sql
-- Turn-level metrics (Phase 2 compatible)
CREATE TABLE negotiation_turns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL,  -- client-provided when session exists
  scenario_type TEXT NOT NULL CHECK (scenario_type IN ('salary', 'business-deal', 'vendor-client', 'conflict', 'everyday')),
  tone_category TEXT NOT NULL CHECK (tone_category IN ('Collaborative', 'Assertive', 'Aggressive', 'Defensive', 'Unclear')),
  score_collaboration SMALLINT NOT NULL CHECK (score_collaboration BETWEEN 0 AND 10),
  score_assertiveness SMALLINT NOT NULL CHECK (score_assertiveness BETWEEN 0 AND 10),
  score_clarity SMALLINT NOT NULL CHECK (score_clarity BETWEEN 0 AND 10),
  score_overall SMALLINT NOT NULL CHECK (score_overall BETWEEN 0 AND 10),
  escalation_flag BOOLEAN NOT NULL DEFAULT FALSE,
  schema_version TEXT NOT NULL DEFAULT '1.1',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_negotiation_turns_session ON negotiation_turns(session_id);
CREATE INDEX idx_negotiation_turns_created ON negotiation_turns(created_at);
CREATE INDEX idx_negotiation_turns_scenario ON negotiation_turns(scenario_type);

-- Optional: full transcript (Phase 4 only, requires consent)
CREATE TABLE negotiation_transcripts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  turn_id UUID REFERENCES negotiation_turns(id),
  user_prompt TEXT NOT NULL,
  roleplay_response TEXT NOT NULL,
  consent_id UUID NOT NULL,  -- links to consent record
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Retention: add TTL or archival policy
```

### Migration Path

1. **Phase 2:** Notion only, metrics as above
2. **Phase 3:** Add consent table, gate Notion write on consent
3. **Phase 4:** Add Postgres, dual-write or migrate from Notion; add transcripts table when opt-in transcript consent exists
