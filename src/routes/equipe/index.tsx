import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { listInquiries, type InquiryListItem } from "@/lib/inquiry-actions";
import { INQUIRY_STATUS_LABELS } from "@/lib/inquiry-schema";
import { INTENDED_DOMAIN, needTypeLabel } from "@/lib/site";

export const Route = createFileRoute("/equipe/")({
  component: EquipeIndex,
});

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function EquipeIndex() {
  const [rows, setRows] = useState<InquiryListItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    listInquiries()
      .then((data) => {
        if (!cancelled) setRows(data);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Impossible de charger les demandes.");
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="page-wrap-wide py-10">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <section>
          <h1 className="font-display text-3xl tracking-[-0.03em]">Demandes reçues</h1>
          <p className="mt-2 max-w-xl text-sm text-mist">
            Cet espace est réservé aux personnes autorisées. Toute personne
            connectée peut actuellement consulter les demandes : une liste
            d’accès plus stricte reste à configurer.
          </p>
          {error ? (
            <p role="alert" className="mt-6 rounded-md border border-danger/30 bg-danger/10 px-4 py-3 text-sm">
              {error}
            </p>
          ) : null}
          {rows === null && !error ? (
            <p className="mt-8 text-mist">Chargement…</p>
          ) : null}
          {rows && rows.length === 0 ? (
            <p className="mt-8 rounded-lg border border-paper/10 p-6 text-mist">
              Aucune demande pour le moment.
            </p>
          ) : null}
          {rows && rows.length > 0 ? (
            <ul className="mt-6 divide-y divide-paper/10 rounded-lg border border-paper/10">
              {rows.map((row) => (
                <li key={row.id}>
                  <Link
                    to="/equipe/$id"
                    params={{ id: row.id }}
                    className="grid gap-1 px-4 py-4 hover:bg-paper/4 sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:gap-4"
                  >
                    <span className="font-mono text-xs text-lime">{row.reference}</span>
                    <span>
                      <span className="block font-medium">{row.name}</span>
                      <span className="block text-sm text-mist">
                        {row.kind === "appointment" ? "Rendez-vous" : "Projet"}
                        {" · "}
                        {row.kind === "appointment"
                          ? row.appointmentMotif
                          : needTypeLabel(row.needType)}
                      </span>
                    </span>
                    <span className="text-sm text-mist">
                      {INQUIRY_STATUS_LABELS[row.status]} · {formatDate(row.createdAt)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
        <aside className="rounded-xl border border-paper/10 p-6">
          <h2 className="font-display text-xl">Avant publication publique</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-mist">
            <li>Confirmer le contrôle du domaine {INTENDED_DOMAIN} (orthographe distincte de la marque).</li>
            <li>Compléter mentions légales, contact et politique de confidentialité.</li>
            <li>Définir qui peut accéder à cet espace, au-delà d’une simple connexion.</li>
            <li>Configurer, si besoin, l’envoi d’e-mails et un calendrier réel.</li>
            <li>Ne pas indexer /equipe, /login ni les données des demandes.</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
