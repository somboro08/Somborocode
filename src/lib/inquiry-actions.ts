import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import {
  appointmentInquirySchema,
  inquiryStatusSchema,
  projectInquirySchema,
} from "@/lib/inquiry-schema";
import { z } from "zod";

export type InquiryListItem = {
  id: string;
  reference: string;
  kind: "project" | "appointment";
  status: "new" | "in_review" | "replied" | "closed";
  name: string;
  email: string;
  needType: string | null;
  appointmentMotif: string | null;
  createdAt: string;
};

export type InquiryDetail = InquiryListItem & {
  phone: string | null;
  organization: string | null;
  description: string;
  objective: string | null;
  timeline: string | null;
  budget: string | null;
  contactPreference: string | null;
  availability: string | null;
  timezone: string | null;
  updatedAt: string;
  notes: Array<{
    id: string;
    authorUserId: string;
    body: string;
    createdAt: string;
  }>;
};

export const submitProjectInquiry = createServerFn({ method: "POST" })
  .validator(projectInquirySchema)
  .handler(async ({ data }) => {
    const guard = await import("@/lib/submit-guard.server");
    if (guard.isHoneypot(data.faxNumber)) {
      await guard.sleep(400);
      return { ok: true as const, reference: "SC-REVIEW" };
    }
    await guard.assertRateLimit("project");
    const { getSql } = await import("@/lib/db");
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
    return { ok: true as const, reference };
  });

export const submitAppointmentInquiry = createServerFn({ method: "POST" })
  .validator(appointmentInquirySchema)
  .handler(async ({ data }) => {
    const guard = await import("@/lib/submit-guard.server");
    if (guard.isHoneypot(data.faxNumber)) {
      await guard.sleep(400);
      return { ok: true as const, reference: "SC-REVIEW" };
    }
    await guard.assertRateLimit("appointment");
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const id = guard.newId();
    const reference = guard.newReference();
    const description = data.notes?.trim()
      ? data.notes
      : `Demande de rendez-vous — ${data.motif}`;
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
    return { ok: true as const, reference };
  });

export const listInquiries = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async () => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const rows = await sql<{
      id: string;
      reference: string;
      kind: "project" | "appointment";
      status: InquiryListItem["status"];
      name: string;
      email: string;
      need_type: string | null;
      appointment_motif: string | null;
      created_at: string;
    }>`
      select id, reference, kind, status, name, email, need_type, appointment_motif, created_at
      from inquiries
      order by created_at desc
    `;
    return rows.map((row) => ({
      id: row.id,
      reference: row.reference,
      kind: row.kind,
      status: row.status,
      name: row.name,
      email: row.email,
      needType: row.need_type,
      appointmentMotif: row.appointment_motif,
      createdAt: row.created_at,
    })) satisfies InquiryListItem[];
  });

export const getInquiry = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .validator(z.object({ id: z.string().min(1).max(64) }))
  .handler(async ({ data }) => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const rows = await sql<{
      id: string;
      reference: string;
      kind: "project" | "appointment";
      status: InquiryDetail["status"];
      name: string;
      email: string;
      phone: string | null;
      organization: string | null;
      need_type: string | null;
      description: string;
      objective: string | null;
      timeline: string | null;
      budget: string | null;
      contact_preference: string | null;
      appointment_motif: string | null;
      availability: string | null;
      timezone: string | null;
      created_at: string;
      updated_at: string;
    }>`select * from inquiries where id = ${data.id} limit 1`;
    const row = rows[0];
    if (!row) return null;
    const notes = await sql<{
      id: string;
      author_user_id: string;
      body: string;
      created_at: string;
    }>`
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
        createdAt: note.created_at,
      })),
    } satisfies InquiryDetail;
  });

export const updateInquiryStatus = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(
    z.object({
      id: z.string().min(1).max(64),
      status: inquiryStatusSchema,
    }),
  )
  .handler(async ({ data }) => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    await sql`
      update inquiries
      set status = ${data.status}, updated_at = now()
      where id = ${data.id}
    `;
    return { ok: true as const };
  });

export const addInquiryNote = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(
    z.object({
      id: z.string().min(1).max(64),
      body: z.string().trim().min(1).max(4000),
    }),
  )
  .handler(async ({ data, context }) => {
    const { getSql } = await import("@/lib/db");
    const guard = await import("@/lib/submit-guard.server");
    const sql = await getSql();
    await sql`
      insert into inquiry_notes (id, inquiry_id, author_user_id, body)
      values (${guard.newId()}, ${data.id}, ${context.userId}, ${data.body})
    `;
    await sql`update inquiries set updated_at = now() where id = ${data.id}`;
    return { ok: true as const };
  });

export const deleteInquiry = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(z.object({ id: z.string().min(1).max(64) }))
  .handler(async ({ data }) => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    await sql`delete from inquiries where id = ${data.id}`;
    return { ok: true as const };
  });
