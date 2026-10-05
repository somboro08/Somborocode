import { F as object, R as string } from "../_libs/@better-auth/core+[...].mjs";
import { i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { a as inquiryStatusSchema, i as authMiddleware, o as projectInquirySchema, r as appointmentInquirySchema } from "./inquiry-schema-DFALNCQ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inquiry-actions-DJ_HA4zl.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitProjectInquiry_createServerFn_handler = createServerRpc({
	id: "a150aebad822a60b1ff1c63466036a7813258a3389c7b51e3e879179029b728e",
	name: "submitProjectInquiry",
	filename: "src/lib/inquiry-actions.ts"
}, (opts) => submitProjectInquiry.__executeServer(opts));
var submitProjectInquiry = createServerFn({ method: "POST" }).validator(projectInquirySchema).handler(submitProjectInquiry_createServerFn_handler, async ({ data }) => {
	const guard = await import("./submit-guard.server-D-EOWfUB.mjs");
	if (guard.isHoneypot(data.faxNumber)) {
		await guard.sleep(400);
		return {
			ok: true,
			reference: "SC-REVIEW"
		};
	}
	await guard.assertRateLimit("project");
	const { getSql } = await import("./db-B91z5xCW.mjs").then((n) => n.t).then((n) => n.t);
	const sql = await getSql();
	const id = guard.newId();
	const reference = guard.newReference();
	await sql`
      insert into inquiries (
        id, reference, kind, status, name, email, phone, organization,
        need_type, description, objective, timeline, budget, contact_preference
      ) values (
        ${id}, ${reference}, ${"project"}, ${"new"}, ${data.name}, ${data.email},
        ${data.phone ?? null}, ${data.organization ?? null}, ${data.needType},
        ${data.description}, ${data.objective ?? null}, ${data.timeline ?? null},
        ${data.budget ?? null}, ${data.contactPreference ?? null}
      )
    `;
	return {
		ok: true,
		reference
	};
});
var submitAppointmentInquiry_createServerFn_handler = createServerRpc({
	id: "edada02ad3c0112e41e1ddba061622809424d5cfff0a8b8e5c71010122aa2601",
	name: "submitAppointmentInquiry",
	filename: "src/lib/inquiry-actions.ts"
}, (opts) => submitAppointmentInquiry.__executeServer(opts));
var submitAppointmentInquiry = createServerFn({ method: "POST" }).validator(appointmentInquirySchema).handler(submitAppointmentInquiry_createServerFn_handler, async ({ data }) => {
	const guard = await import("./submit-guard.server-D-EOWfUB.mjs");
	if (guard.isHoneypot(data.faxNumber)) {
		await guard.sleep(400);
		return {
			ok: true,
			reference: "SC-REVIEW"
		};
	}
	await guard.assertRateLimit("appointment");
	const { getSql } = await import("./db-B91z5xCW.mjs").then((n) => n.t).then((n) => n.t);
	const sql = await getSql();
	const id = guard.newId();
	const reference = guard.newReference();
	const description = data.notes?.trim() ? data.notes : `Demande de rendez-vous — ${data.motif}`;
	await sql`
      insert into inquiries (
        id, reference, kind, status, name, email, phone, organization,
        need_type, description, contact_preference, appointment_motif,
        availability, timezone
      ) values (
        ${id}, ${reference}, ${"appointment"}, ${"new"}, ${data.name}, ${data.email},
        ${data.phone ?? null}, ${data.organization ?? null}, ${data.motif},
        ${description}, ${data.contactPreference ?? null}, ${data.motif},
        ${data.availability}, ${data.timezone}
      )
    `;
	return {
		ok: true,
		reference
	};
});
var listInquiries_createServerFn_handler = createServerRpc({
	id: "c40268e4b2ac01ab5938782d5e5a37acf2ba4162ada26156a3fe733ba2fb3ae1",
	name: "listInquiries",
	filename: "src/lib/inquiry-actions.ts"
}, (opts) => listInquiries.__executeServer(opts));
var listInquiries = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listInquiries_createServerFn_handler, async () => {
	const { getSql } = await import("./db-B91z5xCW.mjs").then((n) => n.t).then((n) => n.t);
	return (await (await getSql())`
      select id, reference, kind, status, name, email, need_type, appointment_motif, created_at
      from inquiries
      order by created_at desc
    `).map((row) => ({
		id: row.id,
		reference: row.reference,
		kind: row.kind,
		status: row.status,
		name: row.name,
		email: row.email,
		needType: row.need_type,
		appointmentMotif: row.appointment_motif,
		createdAt: row.created_at
	}));
});
var getInquiry_createServerFn_handler = createServerRpc({
	id: "24f1c1ecd551b3449f4c51c86498bca0f89d49d428e13d3c7c2d05f345512569",
	name: "getInquiry",
	filename: "src/lib/inquiry-actions.ts"
}, (opts) => getInquiry.__executeServer(opts));
var getInquiry = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator(object({ id: string().min(1).max(64) })).handler(getInquiry_createServerFn_handler, async ({ data }) => {
	const { getSql } = await import("./db-B91z5xCW.mjs").then((n) => n.t).then((n) => n.t);
	const sql = await getSql();
	const row = (await sql`select * from inquiries where id = ${data.id} limit 1`)[0];
	if (!row) return null;
	const notes = await sql`
      select id, author_user_id, body, created_at
      from inquiry_notes
      where inquiry_id = ${row.id}
      order by created_at asc
    `;
	return {
		id: row.id,
		reference: row.reference,
		kind: row.kind,
		status: row.status,
		name: row.name,
		email: row.email,
		phone: row.phone,
		organization: row.organization,
		needType: row.need_type,
		appointmentMotif: row.appointment_motif,
		description: row.description,
		objective: row.objective,
		timeline: row.timeline,
		budget: row.budget,
		contactPreference: row.contact_preference,
		availability: row.availability,
		timezone: row.timezone,
		createdAt: row.created_at,
		updatedAt: row.updated_at,
		notes: notes.map((note) => ({
			id: note.id,
			authorUserId: note.author_user_id,
			body: note.body,
			createdAt: note.created_at
		}))
	};
});
var updateInquiryStatus_createServerFn_handler = createServerRpc({
	id: "ce7866797fd2e1504db618ec01231977b82a511e138b74126cbc350d111bfd1b",
	name: "updateInquiryStatus",
	filename: "src/lib/inquiry-actions.ts"
}, (opts) => updateInquiryStatus.__executeServer(opts));
var updateInquiryStatus = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	id: string().min(1).max(64),
	status: inquiryStatusSchema
})).handler(updateInquiryStatus_createServerFn_handler, async ({ data }) => {
	const { getSql } = await import("./db-B91z5xCW.mjs").then((n) => n.t).then((n) => n.t);
	await (await getSql())`
      update inquiries
      set status = ${data.status}, updated_at = now()
      where id = ${data.id}
    `;
	return { ok: true };
});
var addInquiryNote_createServerFn_handler = createServerRpc({
	id: "eeebd6128653a959b67242a493e96fa403f4ae6bc70000ae304afc4a1b017fb4",
	name: "addInquiryNote",
	filename: "src/lib/inquiry-actions.ts"
}, (opts) => addInquiryNote.__executeServer(opts));
var addInquiryNote = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	id: string().min(1).max(64),
	body: string().trim().min(1).max(4e3)
})).handler(addInquiryNote_createServerFn_handler, async ({ data, context }) => {
	const { getSql } = await import("./db-B91z5xCW.mjs").then((n) => n.t).then((n) => n.t);
	const guard = await import("./submit-guard.server-D-EOWfUB.mjs");
	const sql = await getSql();
	await sql`
      insert into inquiry_notes (id, inquiry_id, author_user_id, body)
      values (${guard.newId()}, ${data.id}, ${context.userId}, ${data.body})
    `;
	await sql`update inquiries set updated_at = now() where id = ${data.id}`;
	return { ok: true };
});
var deleteInquiry_createServerFn_handler = createServerRpc({
	id: "80a50f7acc757650c49a4b309fe04e32b849b922d3996b7aa3073d090e338fc6",
	name: "deleteInquiry",
	filename: "src/lib/inquiry-actions.ts"
}, (opts) => deleteInquiry.__executeServer(opts));
var deleteInquiry = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string().min(1).max(64) })).handler(deleteInquiry_createServerFn_handler, async ({ data }) => {
	const { getSql } = await import("./db-B91z5xCW.mjs").then((n) => n.t).then((n) => n.t);
	await (await getSql())`delete from inquiries where id = ${data.id}`;
	return { ok: true };
});
//#endregion
export { addInquiryNote_createServerFn_handler, deleteInquiry_createServerFn_handler, getInquiry_createServerFn_handler, listInquiries_createServerFn_handler, submitAppointmentInquiry_createServerFn_handler, submitProjectInquiry_createServerFn_handler, updateInquiryStatus_createServerFn_handler };
