type InquiryEmailInput = {
  id: string;
  reference: string;
  name: string;
  email: string;
  kind: "project" | "appointment";
  description: string;
};

type EmailResult = {
  ok: boolean;
  error?: string;
};

function requiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

async function sendEmail(input: {
  to: string;
  subject: string;
  html: string;
}): Promise<EmailResult> {
  try {
    const apiKey = requiredEnv("RESEND_API_KEY");
    const from = requiredEnv("EMAIL_FROM");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [input.to],
        subject: input.subject,
        html: input.html,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      return { ok: false, error: `Resend ${response.status}: ${body.slice(0, 500)}` };
    }

    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown email error",
    };
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendInquiryEmails(input: InquiryEmailInput): Promise<void> {
  const { getSql } = await import("@/lib/db");
  const sql = await getSql();
  const teamRecipient = process.env.INQUIRY_NOTIFICATION_EMAIL?.trim();

  if (!teamRecipient) {
    await sql`
      update inquiries
      set internal_email_status = 'failed',
          internal_email_error = 'Missing INQUIRY_NOTIFICATION_EMAIL'
      where id = ${input.id}
    `;
  } else {
    const internal = await sendEmail({
      to: teamRecipient,
      subject: `Nouvelle demande ${input.reference}`,
      html: `
        <h2>Nouvelle demande Somboro-code</h2>
        <p><strong>Référence :</strong> ${escapeHtml(input.reference)}</p>
        <p><strong>Nom :</strong> ${escapeHtml(input.name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(input.email)}</p>
        <p><strong>Type :</strong> ${escapeHtml(input.kind)}</p>
        <p><strong>Demande :</strong></p>
        <p>${escapeHtml(input.description).replaceAll("\\n", "<br>")}</p>
      `,
    });

    await sql`
      update inquiries
      set internal_email_status = ${internal.ok ? "sent" : "failed"},
          internal_email_error = ${internal.ok ? null : (internal.error ?? "Email failed")},
          internal_email_sent_at = ${internal.ok ? new Date().toISOString() : null}
      where id = ${input.id}
    `;
  }

  const client = await sendEmail({
    to: input.email,
    subject: `Votre demande ${input.reference} — Somboro-code`,
    html: `
      <h2>Merci ${escapeHtml(input.name)}</h2>
      <p>Nous avons bien reçu votre demande.</p>
      <p><strong>Référence :</strong> ${escapeHtml(input.reference)}</p>
      <p>Notre équipe reviendra vers vous prochainement.</p>
    `,
  });

  await sql`
    update inquiries
    set client_email_status = ${client.ok ? "sent" : "failed"},
        client_email_error = ${client.ok ? null : (client.error ?? "Email failed")},
        client_email_sent_at = ${client.ok ? new Date().toISOString() : null}
    where id = ${input.id}
  `;
}
