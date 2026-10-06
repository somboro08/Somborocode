import { createHash, randomBytes, randomInt } from "node:crypto";
import { getRequestHeader, getRequestIP } from "@tanstack/react-start/server";
import { getSql } from "@/lib/db";

const WINDOW_MS = 60 * 60 * 1000;
const MAX_HITS = 5;

function clientFingerprint() {
  const ip =
    getRequestIP({ xForwardedFor: true }) ??
    getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ??
    getRequestHeader("x-real-ip") ??
    "unknown";
  return createHash("sha256").update(`somboro:${ip}`).digest("hex");
}

export function newId() {
  return randomBytes(16).toString("hex");
}

export function newReference() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let value = "SC-";
  for (let i = 0; i < 6; i += 1) {
    value += alphabet[randomInt(alphabet.length)];
  }
  return value;
}

export async function assertRateLimit(kind: "project" | "appointment") {
  const sql = await getSql();
  const key = `${kind}:${clientFingerprint()}`;

  // One atomic upsert prevents concurrent requests from racing past the limit.
  // The row is only returned when this request successfully consumes a hit.
  const rows = await sql<{ hit_count: number }>`
    insert into submission_rate_limits (key, window_started_at, hit_count)
    values (${key}, now(), 1)
    on conflict (key) do update
    set
      window_started_at = case
        when submission_rate_limits.window_started_at <= now() - interval '1 hour'
          then now()
        else submission_rate_limits.window_started_at
      end,
      hit_count = case
        when submission_rate_limits.window_started_at <= now() - interval '1 hour'
          then 1
        else submission_rate_limits.hit_count + 1
      end
    where
      submission_rate_limits.window_started_at <= now() - interval '1 hour'
      or submission_rate_limits.hit_count < ${MAX_HITS}
    returning hit_count
  `;

  if (rows.length === 0) {
    throw new Error(
      "Plusieurs demandes viennent d’être envoyées depuis cet appareil. Réessayez un peu plus tard.",
    );
  }
}
export function isHoneypot(value: string | undefined) {
  return Boolean(value && value.trim().length > 0);
}

export async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
