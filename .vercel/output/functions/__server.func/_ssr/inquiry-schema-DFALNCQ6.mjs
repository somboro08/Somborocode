import { D as _enum, F as object, M as literal, R as string } from "../_libs/@better-auth/core+[...].mjs";
import { i as CONTACT_PREFERENCES, r as BUDGET_OPTIONS, s as NEED_TYPES, t as APPOINTMENT_MOTIFS } from "./site-pmmYHv-i.mjs";
import { n as createMiddleware } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inquiry-schema-DFALNCQ6.js
/**
* Auth middleware for server functions — the standard way to get the caller's
* verified user id. When deployed the session cookie is same-origin and rides
* along automatically. In the live preview the client also forwards the bearer
* token (partitioned cookies) via the `.client` hook below — call sites do not
* thread it themselves.
*
*   import { createServerFn } from "@tanstack/react-start";
*   import { getSql } from "@/lib/db";
*   import { authMiddleware } from "@/lib/auth/middleware";
*
*   export const listTodos = createServerFn({ method: "GET" })
*     .middleware([authMiddleware])
*     .handler(async ({ context }) => {
*       const sql = await getSql();
*       return sql`select * from todos where user_id = ${context.userId}`;
*     });
*
* Signed out with auth on (live preview included) -> throws `UnauthorizedError`
* (see `verify.server.ts`). With auth disabled (`VITE_AUTH_ENABLED=false`, the
* shipped default) it resolves the shared dev user — but throws instead when a
* `DATABASE_URL` is also set, so an app without sign-in must not use this at
* all. On the auth-on path, use it on every server function that touches
* per-user data and scope every query by `context.userId`.
*/
var authMiddleware = createMiddleware({ type: "function" }).client(async ({ next }) => {
	const { getBearerToken } = await import("./client-IWHfIGH2.mjs").then((n) => n.n);
	return next({ sendContext: { bearerToken: getBearerToken() ?? void 0 } });
}).server(async ({ next, context }) => {
	const { assertSameSiteRequest } = await import("./isolation.server-CGNg1r0B.mjs");
	const { requireUserId } = await import("./verify.server-C7otisxG.mjs");
	assertSameSiteRequest();
	return next({ context: { userId: await requireUserId(context.bearerToken) } });
});
var needValues = NEED_TYPES.map((item) => item.value);
var budgetValues = BUDGET_OPTIONS.map((item) => item.value);
var contactValues = CONTACT_PREFERENCES.map((item) => item.value);
var motifValues = APPOINTMENT_MOTIFS.map((item) => item.value);
var optionalText = (max) => string().trim().max(max).optional().transform((value) => value ? value : void 0);
var DESCRIPTION_MAX = 4e3;
var projectInquirySchema = object({
	name: string().trim().min(1, "Indiquez votre nom.").max(120),
	email: string().trim().min(1, "Indiquez une adresse e-mail.").email("Indiquez une adresse e-mail valide.").max(254).transform((value) => value.toLowerCase()),
	phone: optionalText(40),
	organization: optionalText(160),
	needType: _enum(needValues, { error: "Choisissez un type de besoin." }),
	description: string().trim().min(20, "Décrivez un peu plus le projet (au moins 20 caractères).").max(DESCRIPTION_MAX, `La description est limitée à ${DESCRIPTION_MAX} caractères.`),
	objective: optionalText(1e3),
	timeline: optionalText(200),
	budget: _enum(budgetValues).optional(),
	contactPreference: _enum(contactValues).optional(),
	consent: literal(true, { error: "Le consentement est nécessaire pour envoyer la demande." }),
	faxNumber: string().max(120).optional()
});
var appointmentInquirySchema = object({
	name: string().trim().min(1, "Indiquez votre nom.").max(120),
	email: string().trim().min(1, "Indiquez une adresse e-mail.").email("Indiquez une adresse e-mail valide.").max(254).transform((value) => value.toLowerCase()),
	phone: optionalText(40),
	organization: optionalText(160),
	motif: _enum(motifValues, { error: "Choisissez un motif." }),
	availability: string().trim().min(8, "Proposez au moins une disponibilité.").max(1e3),
	timezone: string().trim().min(1, "Indiquez un fuseau horaire.").max(80),
	notes: optionalText(1e3),
	contactPreference: _enum(contactValues).optional(),
	consent: literal(true, { error: "Le consentement est nécessaire pour envoyer la demande." }),
	faxNumber: string().max(120).optional()
});
var inquiryStatusSchema = _enum([
	"new",
	"in_review",
	"replied",
	"closed"
]);
var INQUIRY_STATUS_LABELS = {
	new: "Nouvelle",
	in_review: "En examen",
	replied: "Réponse envoyée",
	closed: "Clôturée"
};
//#endregion
export { inquiryStatusSchema as a, authMiddleware as i, INQUIRY_STATUS_LABELS as n, projectInquirySchema as o, appointmentInquirySchema as r, DESCRIPTION_MAX as t };
