import { Link } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { Field, Honeypot, SelectInput, TextArea, TextInput } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { submitProjectInquiry } from "@/lib/inquiry-actions";
import { DESCRIPTION_MAX, projectInquirySchema } from "@/lib/inquiry-schema";
import {
  BUDGET_OPTIONS,
  CONTACT_PREFERENCES,
  NEED_TYPES,
  type NeedType,
} from "@/lib/site";

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

export function ProjectForm({ presetNeed }: { presetNeed?: string }) {
  const initialNeed = NEED_TYPES.some((item) => item.value === presetNeed)
    ? (presetNeed as NeedType)
    : "indetermine";
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    needType: initialNeed,
    description: "",
    objective: "",
    timeline: "",
    budget: "indetermine" as const,
    contactPreference: "email" as const,
    consent: false,
    faxNumber: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const remaining = DESCRIPTION_MAX - values.description.length;

  const timezoneHint = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    [],
  );

  function update<K extends keyof typeof values>(key: K, value: (typeof values)[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("submitting");
    setMessage(null);
    const parsed = projectInquirySchema.safeParse({
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
      await submitProjectInquiry({ data: parsed.data });
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
      <div
        className="rounded-xl bg-ink-soft p-6 sm:p-8"
        role="status"
        aria-live="polite"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">Demande transmise</p>
        <h2 className="mt-3 font-display text-2xl tracking-[-0.03em]">Merci, votre message est bien arrivé.</h2>
        <p className="mt-3 max-w-xl leading-relaxed text-mist">
          Votre demande a bien été transmise à Somboro-code. Elle ne vaut pas encore
          devis ni engagement ; les prochaines étapes seront précisées après
          examen de votre besoin.
        </p>
        <p className="mt-4 text-sm text-mist">
          Fuseau détecté sur cet appareil : {timezoneHint}. Aucun e-mail de
          confirmation n’est envoyé tant qu’un service d’envoi n’est pas configuré.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="paper">
            <Link to="/">Retour à l’accueil</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/rendez-vous">Demander un rendez-vous</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-5">
      <Honeypot value={values.faxNumber} onChange={(value) => update("faxNumber", value)} />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nom" htmlFor="name" error={errors.name}>
          <TextInput
            id="name"
            name="name"
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
            name="email"
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
        <Field label="Téléphone" htmlFor="phone" optional error={errors.phone}>
          <TextInput
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
        <Field label="Organisation ou activité" htmlFor="organization" optional>
          <TextInput
            id="organization"
            name="organization"
            autoComplete="organization"
            value={values.organization}
            onChange={(event) => update("organization", event.target.value)}
          />
        </Field>
      </div>
      <Field label="Type de besoin" htmlFor="needType" error={errors.needType}>
        <SelectInput
          id="needType"
          name="needType"
          value={values.needType}
          error={errors.needType}
          onChange={(event) => update("needType", event.target.value as NeedType)}
        >
          {NEED_TYPES.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </SelectInput>
      </Field>
      <Field
        label="Description du projet et du résultat recherché"
        htmlFor="description"
        error={errors.description}
        hint={`${remaining} caractères restants`}
      >
        <TextArea
          id="description"
          name="description"
          required
          maxLength={DESCRIPTION_MAX}
          value={values.description}
          error={errors.description}
          onChange={(event) => update("description", event.target.value)}
        />
      </Field>
      <Field label="Objectif principal ou problème à résoudre" htmlFor="objective" optional>
        <TextArea
          id="objective"
          name="objective"
          maxLength={1000}
          className="min-h-24"
          value={values.objective}
          onChange={(event) => update("objective", event.target.value)}
        />
      </Field>
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Échéance souhaitée"
          htmlFor="timeline"
          optional
          hint="Une date souhaitée n’est pas une promesse de livraison."
        >
          <TextInput
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={(event) => update("timeline", event.target.value)}
          />
        </Field>
        <Field label="Budget estimatif" htmlFor="budget" optional>
          <SelectInput
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(event) => update("budget", event.target.value as typeof values.budget)}
          >
            {BUDGET_OPTIONS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </SelectInput>
        </Field>
      </div>
      <Field label="Préférence de contact" htmlFor="contactPreference" optional>
        <SelectInput
          id="contactPreference"
          name="contactPreference"
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
          et me répondre. Consultez la{" "}
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
      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Envoi en cours…" : "Envoyer la demande"}
        </Button>
        <p className="text-sm text-mist">Aucun compte n’est nécessaire.</p>
      </div>
    </form>
  );
}
