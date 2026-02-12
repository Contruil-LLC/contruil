/**
 * In-memory rate limiter. 10 requests per minute per IP.
 * Note: Serverless cold starts reset the store. For production scale,
 * use Redis-based rate limiting (e.g. Upstash).
 */
const store = new Map<string, number[]>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10;

function prune(ip: string) {
  const now = Date.now();
  const timestamps = store.get(ip) ?? [];
  const valid = timestamps.filter((t) => now - t < WINDOW_MS);
  if (valid.length === 0) store.delete(ip);
  else store.set(ip, valid);
}

export function checkRateLimit(ip: string): { ok: boolean } {
  prune(ip);
  const timestamps = store.get(ip) ?? [];
  if (timestamps.length >= MAX_REQUESTS) return { ok: false };
  timestamps.push(Date.now());
  store.set(ip, timestamps);
  return { ok: true };
}
