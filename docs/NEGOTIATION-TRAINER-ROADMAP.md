# Negotiation Trainer — Product Roadmap

**Last updated:** February 2026

---

## Phase 1 — Security Audit ✅

- API isolation (OpenAI only in `/api/negotiation`)
- Rate limiting (10 req/min per IP)
- Token/input guardrails (2000 chars, 400 output tokens)
- Clean error handling (no stack traces, no key leakage)

**Status:** Complete. See `docs/SECURITY-AUDIT.md`.

---

## Phase 2 — Prompt Engineering Upgrade ✅

- Deterministic output format (JSON schema)
- Scoring schema (collaboration, clarity, assertiveness, relationship_preservation; 1–5 each)
- JSON-structured feedback object
- Stable system prompt (versioned as `v2.0-structured`)

**Status:** Complete.

**Schema version:** 1.0  
**Key files:** `lib/negotiation-feedback-schema.ts`, `app/api/negotiation/route.ts`

**Output shape (for analytics):**
```json
{
  "reaction": "string",
  "feedback": {
    "scores": {
      "collaboration": 1-5,
      "clarity": 1-5,
      "assertiveness": 1-5,
      "relationship_preservation": 1-5
    },
    "overall_score": 20-100,
    "strength": "string",
    "improvement": "string"
  },
  "schema_version": "1.0"
}
```

---

## Phase 3 — Monetization Roadmap

**Start only after:**
- [ ] Security stable (Phase 1 verified in production)
- [ ] Output structured (Phase 2 validated)
- [ ] UX validated (user testing, retention metrics)

**Do not design monetization on unstable infrastructure.**

---

## Future Phases (Backlog)

- Session persistence (save progress)
- Tamper-evident audit logs per session
- Certification track (Bronze → Silver → Gold → Platinum)
- Stripe integration for Pro/Enterprise tiers
