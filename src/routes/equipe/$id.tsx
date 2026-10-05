import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { SelectInput, TextArea } from "@/components/ui/field";
import {
  addInquiryNote,
  deleteInquiry,
  getInquiry,
  updateInquiryStatus,
  type InquiryDetail,
} from "@/lib/inquiry-actions";
import { INQUIRY_STATUS_LABELS, inquiryStatusSchema, type InquiryStatus } from "@/lib/inquiry-schema";
import { needTypeLabel } from "@/lib/site";

export const Route = createFileRoute("/equipe/$id")({
  component: EquipeDetailPage,
});

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function EquipeDetailPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState<InquiryDetail | null | undefined>(undefined);
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function reload() {
    const data = await getInquiry({ data: { id } });
    setInquiry(data);
  }

  useEffect(() => {
    let cancelled = false;
    getInquiry({ data: { id } })
      .then((data) => {
        if (!cancelled) setInquiry(data);
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Chargement impossible.");
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  async function onStatus(status: InquiryStatus) {
    setBusy(true);
    setError(null);
    try {
      await updateInquiryStatus({ data: { id, status } });
      await reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Mise à jour impossible.");
    } finally {
      setBusy(false);
    }
  }

  async function onNote(event: FormEvent) {
    event.preventDefault();
    if (!note.trim()) return;
    setBusy(true);
    setError(null);
    try {
      await addInquiryNote({ data: { id, body: note.trim() } });
      setNote("");
      await reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Note non enregistrée.");
    } finally {
      setBusy(false);
    }
  }

  async function onDelete() {
    if (!window.confirm("Supprimer définitivement cette demande et ses notes internes ?")) return;
    setBusy(true);
    try {
      await deleteInquiry({ data: { id } });
      await navigate({ to: "/equipe" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Suppression impossible.");
      setBusy(false);
    }
  }

  if (inquiry === undefined && !error) {
    return <p className="page-wrap py-16 text-mist">Chargement…</p>;
  }
  if (!inquiry) {
    return (
      <main className="page-wrap py-16">
        <p>Demande introuvable.</p>
        <Link to="/equipe" className="mt-4 inline-block text-lime">
          Retour à la liste
        </Link>
      </main>
    );
  }

  return (
    <main className="page-wrap grid gap-8 py-10 lg:grid-cols-[1.2fr_0.8fr]">
      <article>
        <Link to="/equipe" className="text-sm text-mist hover:text-paper">
          ← Toutes les demandes
        </Link>
        <p className="mt-5 font-mono text-xs text-lime">{inquiry.reference}</p>
        <h1 className="mt-2 font-display text-3xl">{inquiry.name}</h1>
        <p className="mt-2 text-sm text-mist">
          {inquiry.kind === "appointment" ? "Rendez-vous" : "Projet"} ·{" "}
          {formatDate(inquiry.createdAt)}
        </p>
        <dl className="mt-8 grid gap-4 text-sm">
          <div>
            <dt className="text-mist">E-mail</dt>
            <dd>{inquiry.email}</dd>
          </div>
          {inquiry.phone ? (
            <div>
              <dt className="text-mist">Téléphone</dt>
              <dd>{inquiry.phone}</dd>
            </div>
          ) : null}
          {inquiry.organization ? (
            <div>
              <dt className="text-mist">Organisation</dt>
              <dd>{inquiry.organization}</dd>
            </div>
          ) : null}
          <div>
            <dt className="text-mist">Besoin / motif</dt>
            <dd>
              {inquiry.kind === "appointment"
                ? inquiry.appointmentMotif
                : needTypeLabel(inquiry.needType)}
            </dd>
          </div>
          <div>
            <dt className="text-mist">Description</dt>
            <dd className="mt-1 whitespace-pre-wrap leading-relaxed">{inquiry.description}</dd>
          </div>
          {inquiry.objective ? (
            <div>
              <dt className="text-mist">Objectif</dt>
              <dd className="whitespace-pre-wrap">{inquiry.objective}</dd>
            </div>
          ) : null}
          {inquiry.timeline ? (
            <div>
              <dt className="text-mist">Échéance souhaitée</dt>
              <dd>{inquiry.timeline}</dd>
            </div>
          ) : null}
          {inquiry.budget ? (
            <div>
              <dt className="text-mist">Budget</dt>
              <dd>{inquiry.budget}</dd>
            </div>
          ) : null}
          {inquiry.availability ? (
            <div>
              <dt className="text-mist">Disponibilités</dt>
              <dd className="whitespace-pre-wrap">{inquiry.availability}</dd>
            </div>
          ) : null}
          {inquiry.timezone ? (
            <div>
              <dt className="text-mist">Fuseau</dt>
              <dd>{inquiry.timezone}</dd>
            </div>
          ) : null}
          {inquiry.contactPreference ? (
            <div>
              <dt className="text-mist">Préférence de contact</dt>
              <dd>{inquiry.contactPreference}</dd>
            </div>
          ) : null}
        </dl>
      </article>
      <aside className="grid gap-6">
        <div className="rounded-xl border border-paper/10 p-5">
          <h2 className="font-display text-lg">Statut</h2>
          <SelectInput
            className="mt-3"
            value={inquiry.status}
            disabled={busy}
            onChange={(event) => {
              const parsed = inquiryStatusSchema.safeParse(event.target.value);
              if (parsed.success) void onStatus(parsed.data);
            }}
          >
            {(Object.keys(INQUIRY_STATUS_LABELS) as InquiryStatus[]).map((status) => (
              <option key={status} value={status}>
                {INQUIRY_STATUS_LABELS[status]}
              </option>
            ))}
          </SelectInput>
        </div>
        <div className="rounded-xl border border-paper/10 p-5">
          <h2 className="font-display text-lg">Notes internes</h2>
          <ul className="mt-3 space-y-3 text-sm">
            {inquiry.notes.length === 0 ? (
              <li className="text-mist">Aucune note.</li>
            ) : (
              inquiry.notes.map((item) => (
                <li key={item.id} className="rounded-md bg-paper/5 p-3">
                  <p className="whitespace-pre-wrap">{item.body}</p>
                  <p className="mt-2 text-xs text-mist">{formatDate(item.createdAt)}</p>
                </li>
              ))
            )}
          </ul>
          <form onSubmit={onNote} className="mt-4 grid gap-3">
            <TextArea
              value={note}
              onChange={(event) => setNote(event.target.value)}
              className="min-h-24 bg-ink-soft"
              maxLength={4000}
            />
            <Button type="submit" disabled={busy || !note.trim()} size="sm">
              Ajouter une note
            </Button>
          </form>
        </div>
        <div className="rounded-xl border border-danger/30 p-5">
          <h2 className="font-display text-lg">Suppression</h2>
          <p className="mt-2 text-sm text-mist">
            Pour une demande de rectification ou d’effacement, supprimez
            définitivement l’enregistrement.
          </p>
          <Button
            type="button"
            variant="outline"
            className="mt-4 border-danger/40 text-danger"
            disabled={busy}
            onClick={() => void onDelete()}
          >
            Supprimer la demande
          </Button>
        </div>
        {error ? (
          <p role="alert" className="text-sm text-danger">
            {error}
          </p>
        ) : null}
      </aside>
    </main>
  );
}
