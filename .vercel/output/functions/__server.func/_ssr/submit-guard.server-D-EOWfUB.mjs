import { i as getSql } from "./db-B91z5xCW.mjs";
import { c as getRequestIP$1, s as getRequestHeader } from "./ssr.mjs";
import { createHash, randomBytes } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/submit-guard.server-D-EOWfUB.js
var WINDOW_MS = 36e5;
var MAX_HITS = 5;
function clientFingerprint() {
	const ip = getRequestIP$1({ xForwardedFor: true }) ?? getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ?? getRequestHeader("x-real-ip") ?? "unknown";
	return createHash("sha256").update(`somboro:${ip}`).digest("hex");
}
function newId() {
	return randomBytes(16).toString("hex");
}
function newReference() {
	const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	let value = "SC-";
	for (let i = 0; i < 6; i += 1) value += alphabet[Math.floor(Math.random() * 32)];
	return value;
}
async function assertRateLimit(kind) {
	const sql = await getSql();
	const key = `${kind}:${clientFingerprint()}`;
	const now = Date.now();
	const row = (await sql`select window_started_at, hit_count from submission_rate_limits where key = ${key}`)[0];
	if (!row) {
		await sql`insert into submission_rate_limits (key, window_started_at, hit_count) values (${key}, now(), 1)`;
		return;
	}
	const started = Date.parse(row.window_started_at);
	if (!Number.isFinite(started) || now - started > WINDOW_MS) {
		await sql`update submission_rate_limits set window_started_at = now(), hit_count = 1 where key = ${key}`;
		return;
	}
	if (row.hit_count >= MAX_HITS) throw new Error("Plusieurs demandes viennent d’être envoyées depuis cet appareil. Réessayez un peu plus tard.");
	await sql`update submission_rate_limits set hit_count = hit_count + 1 where key = ${key}`;
}
function isHoneypot(value) {
	return Boolean(value && value.trim().length > 0);
}
async function sleep(ms) {
	await new Promise((resolve) => setTimeout(resolve, ms));
}
//#endregion
export { assertRateLimit, isHoneypot, newId, newReference, sleep };
