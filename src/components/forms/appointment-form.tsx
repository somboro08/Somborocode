import { Link } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { Field, Honeypot, SelectInput, TextArea, TextInput } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { submitAppointmentInquiry } from "@/lib/inquiry-actions";
import { appointmentInquirySchema } from "@/lib/inquiry-schema";
import { APPOINTMENT_MOTIFS, CONTACT_PREFERENCES } from "@/lib/site";

function fieldErrors(error: unknown) {
  const map: Record<string, string> = {};
  if (error && typeof error === "object" && "issues" in error) {
    const issues = (error as { issues: Array<{ path: (string | number)[]; message: string }> }).issues;
    for (const issue of issues) {
      const key = String(issue.path[0] ?? "");
      if (key && !map[key]) map[key] = issue.message;
    }
  }
  return map;
}

export function AppointmentForm() {
  const detectedZone = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
    [],
  );
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    motif: "premier-echange" as const,
    availability: "",
    timezone: detectedZone,
    notes: "",
    contactPreference: "email" as const,
    consent: false,
    faxNumber: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  function update<K extends keyof typeof values>(key: K, value: (typeof values)[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("submitting");
    setMessage(null);
    const parsed = appointmentInquirySchema.safeParse({
      ...values,
      consent: values.consent ? true : undefined,
    });
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      setStatus("idle");
      return;
    }
    setErrors({});
    try {
      await submitAppointmentInquiry({ data: parsed.data });
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "L’enregistrement n’a pas abouti. Réessayez dans un moment.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-ink-soft p-6 sm:p-8" role="status" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">Demande transmise</p>
        <h2 className="mt-3 font-display text-2xl tracking-[-0.03em]">Votre demande de rendez-vous est enregistrée.</h2>
        <p className="mt-3 max-w-xl leading-relaxed text-mist">
          Il s’agit d’une demande de rendez-vous. Le créneau n’est confirmé qu’après
          validation par Somboro-code. Aucun rendez-vous n’a été réservé automatiquement.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="paper">
            <Link to="/">Retour à l’accueil</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/demarrer">Décrire un projet</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-5">
      <Honeypot value={values.faxNumber} onChange={(value) => update("faxNumber", value)} />
      <p className="rounded-lg border border-lime/25 bg-lime/8 px-4 py-3 text-sm leading-relaxed">
        Il s’agit d’une demande de rendez-vous. Le créneau n’est confirmé qu’après
        validation par Somboro-code. Aucun calendrier n’est relié pour l’instant :
        proposez vos disponibilités, sans les considérer comme réservées.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nom" htmlFor="name" error={errors.name}>
          <TextInput
            id="name"
            autoComplete="name"
            required
            value={values.name}
            error={errors.name}
            onChange={(event) => update("name", event.target.value)}
          />
        </Field>
        <Field label="Adresse e-mail" htmlFor="email" error={errors.email}>
          <TextInput
            id="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            error={errors.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Téléphone" htmlFor="phone" optional>
          <TextInput
            id="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
        <Field label="Organisation ou activité" htmlFor="organization" optional>
          <TextInput
            id="organization"
            autoComplete="organization"
            value={values.organization}
            onChange={(event) => update("organization", event.target.value)}
          />
        </Field>
      </div>
      <Field label="Motif" htmlFor="motif" error={errors.motif}>
        <SelectInput
          id="motif"
          value={values.motif}
          onChange={(event) => update("motif", event.target.value as typeof values.motif)}
        >
          {APPOINTMENT_MOTIFS.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </SelectInput>
      </Field>
      <Field
        label="Disponibilités proposées"
        htmlFor="availability"
        error={errors.availability}
        hint="Indiquez un ou plusieurs créneaux, par exemple « mardi matin » ou une date et une heure."
      >
        <TextArea
          id="availability"
          required
          value={values.availability}
          error={errors.availability}
          onChange={(event) => update("availability", event.target.value)}
        />
      </Field>
      <Field label="Fuseau horaire" htmlFor="timezone" error={errors.timezone}>
        <TextInput
          id="timezone"
          required
          value={values.timezone}
          error={errors.timezone}
          onChange={(event) => update("timezone", event.target.value)}
        />
      </Field>
      <Field label="Précisions utiles" htmlFor="notes" optional>
        <TextArea
          id="notes"
          className="min-h-24"
          value={values.notes}
          onChange={(event) => update("notes", event.target.value)}
        />
      </Field>
      <Field label="Préférence de contact" htmlFor="contactPreference" optional>
        <SelectInput
          id="contactPreference"
          value={values.contactPreference}
          onChange={(event) =>
            update("contactPreference", event.target.value as typeof values.contactPreference)
          }
        >
          {CONTACT_PREFERENCES.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </SelectInput>
      </Field>
      <label className="flex items-start gap-3 rounded-lg border border-paper/12 p-4 text-sm leading-relaxed">
        <input
          type="checkbox"
          className="mt-1 size-4 shrink-0 accent-lime"
          checked={values.consent}
          onChange={(event) => update("consent", event.target.checked)}
        />
        <span>
          J’accepte que ces informations soient utilisées pour traiter ma demande
          de rendez-vous. Consultez la{" "}
          <Link to="/confidentialite" className="underline decoration-lime/70 underline-offset-4">
            politique de confidentialité
          </Link>
          .
        </span>
      </label>
      {errors.consent ? <p className="text-sm text-danger">{errors.consent}</p> : null}
      {status === "error" && message ? (
        <p role="alert" className="rounded-md border border-danger/30 bg-danger/10 px-4 py-3 text-sm">
          {message}
        </p>
      ) : null}
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Envoi en cours…" : "Envoyer la demande de rendez-vous"}
      </Button>
    </form>
  );
}
