# Negotiation Trainer — Phase 1 Security Audit

**Last verified:** February 2026  
**Phase 2 (structured output):** Complete — see `NEGOTIATION-TRAINER-ROADMAP.md`

---

## 1️⃣ API Isolation

| Check | Status |
|-------|--------|
| OpenAI calls only in `/api/negotiation` | ✅ |
| No client-side OpenAI imports | ✅ |
| No key visible in frontend bundle | ✅ |
| No logging of raw API key | ✅ |

**Implementation:** All OpenAI usage is server-side in `app/api/negotiation/route.ts`. The key is read from `process.env.OPENAI_API_KEY` and never logged or serialized.

---

## 2️⃣ Vercel Configuration

| Check | Action |
|-------|--------|
| OPENAI_API_KEY set for Production + Preview | Configure in Vercel Dashboard |
| Not set for Development unless needed | Optional — add only if testing locally |
| No fallback to hardcoded key | ✅ Code has no hardcoded fallback |
| Redeploy after adding key | Required for changes to take effect |

**Steps:** Vercel → contruil project → Settings → Environment Variables → Add `OPENAI_API_KEY` → Redeploy.

---

## 3️⃣ Rate Limiting

| Check | Status |
|-------|--------|
| Max requests per IP/session | ✅ 10 requests per minute per IP |
| Basic throttling | ✅ In-memory store, 60s window |
| Protection against infinite loop abuse | ✅ 429 response when over limit |

**Implementation:** `lib/rate-limit.ts`. Uses `x-forwarded-for` or `x-real-ip` for client IP. In-memory — for higher traffic, migrate to Redis (e.g. Upstash).

---

## 4️⃣ Token Guardrails

| Check | Status |
|-------|--------|
| max_output_tokens capped | ✅ 400 |
| Input length capped | ✅ 2,000 chars per message |
| Graceful error for overlength | ✅ 400 + user-facing message |
| Message count cap | ✅ Last 20 messages only |

---

## 5️⃣ Error Handling

| Check | Status |
|-------|--------|
| Clean user-facing error | ✅ reaction + feedback format |
| No stack traces exposed | ✅ catch block returns generic message |
| No raw OpenAI metadata leaked | ✅ Only reaction and feedback in response |

---

## Checklist Before Production

- [ ] OPENAI_API_KEY added to Vercel (Production + Preview)
- [ ] Redeploy completed
- [ ] Test trainer end-to-end
- [ ] Verify rate limit (send 11 requests in 1 min → 429 on 11th)
