# Phase 2 Freeze — Soak Test (1 Week)

**Freeze start:** Current  
**Schema:** 1.1  
**Storage:** Notion (structured-only, no transcripts)  
**Privacy:** Anonymous

---

## Do NOT change during freeze

- JSON structure
- New fields
- Select option labels
- Escalation threshold
- Tone parsing logic

---

## Metrics to collect (end of week)

| Metric | Target | Red flag |
|--------|--------|----------|
| Logging success rate | 99%+ | < 95% |
| Tone: Unclear | — | > 15% |
| Tone: Any single category | — | > 80% |
| Escalation rate | 5–25% | 0% or 50% |
| Scenario type | All 5 present | Missing/mismatch |

---

## Sanity checks

1. **Logging reliability** — Sessions completed vs. rows in Notion
2. **Tone distribution** — Collaborative, Assertive, Aggressive, Defensive, Unclear
3. **Escalation rate** — Realistic governance pressure
4. **Scenario mapping** — No missing/rejected rows
5. **Error handling** — Notion failure does not break trainer

---

## After soak → Phase 2.1

- Schema v1.2: Add explicit `tone_category` (enum) and `escalation_flag` from model
- Remove: string parsing, text inference, keyword matching
- Escalation: `model_flag OR overall_score < threshold`
