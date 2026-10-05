import { createHash, randomBytes } from "node:crypto";
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
    value += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return value;
}

export async function assertRateLimit(kind: "project" | "appointment") {
  const sql = await getSql();
  const key = `${kind}:${clientFingerprint()}`;
  const now = Date.now();
  const rows = await sql<{
    window_started_at: string;
    hit_count: number;
  }>`select window_started_at, hit_count from submission_rate_limits where key = ${key}`;
  const row = rows[0];
  if (!row) {
    await sql`insert into submission_rate_limits (key, window_started_at, hit_count) values (${key}, now(), 1)`;
    return;
  }
  const started = Date.parse(row.window_started_at);
  if (!Number.isFinite(started) || now - started > WINDOW_MS) {
    await sql`update submission_rate_limits set window_started_at = now(), hit_count = 1 where key = ${key}`;
    return;
  }
  if (row.hit_count >= MAX_HITS) {
    throw new Error(
      "Plusieurs demandes viennent d’être envoyées depuis cet appareil. Réessayez un peu plus tard.",
    );
  }
  await sql`update submission_rate_limits set hit_count = hit_count + 1 where key = ${key}`;
}

export function isHoneypot(value: string | undefined) {
  return Boolean(value && value.trim().length > 0);
}

export async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
