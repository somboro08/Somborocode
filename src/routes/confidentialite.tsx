import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteShell } from "@/components/layout/site-shell";
import { PAGE_META } from "@/lib/site";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: PAGE_META.confidentialite.title },
      { name: "description", content: PAGE_META.confidentialite.description },
    ],
  }),
  component: ConfidentialitePage,
});

function ConfidentialitePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Confidentialité"
        title="Comment les informations d’une demande sont utilisées."
        description="Cette page décrit la pratique prévue pour les formulaires du site. Les mentions juridiques restantes sont signalées : elles doivent être validées avant publication publique."
      />
      <article className="bg-paper text-ink">
        <div className="page-wrap prose-legal grid max-w-3xl gap-10 py-16 text-[1.02rem] leading-relaxed">
          <section>
            <h2 className="font-display text-2xl">Quelles informations sont demandées</h2>
            <p className="mt-3 text-stone">
              Selon le formulaire : nom, adresse e-mail, téléphone (facultatif),
              organisation ou activité (facultatif), type de besoin ou motif,
              description du projet, objectif, échéance souhaitée, budget estimatif,
              préférence de contact, disponibilités et fuseau horaire pour un
              rendez-vous, ainsi que le consentement. Un champ anti-spam non visible
              peut aussi être transmis ; s’il est rempli, la demande n’est pas traitée
              comme une demande réelle.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Pourquoi elles le sont</h2>
            <p className="mt-3 text-stone">
              Uniquement pour examiner la demande, comprendre le besoin, et
              répondre au prospect. Aucun traceur publicitaire n’est installé par
              ce site. Aucune newsletter n’est créée à partir de ces formulaires.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Qui peut consulter ces données</h2>
            <p className="mt-3 text-stone">
              Les personnes autorisées de Somboro-code, via un espace équipe
              protégé par le mécanisme d’authentification de la plateforme. Les
              demandes ne sont pas exposées dans les pages publiques.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Rectification et suppression</h2>
            <p className="mt-3 text-stone">
              Un responsable autorisé peut rectifier ou supprimer une demande
              depuis l’espace équipe. Les coordonnées publiques pour exercer ces
              droits restent à fournir avant publication :{" "}
              <strong className="font-medium text-ink">[à compléter]</strong>.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Durée de conservation</h2>
            <p className="mt-3 text-stone">
              Aucune durée n’est inventée ici. Elle sera indiquée après validation
              interne : <strong className="font-medium text-ink">[durée de conservation à compléter]</strong>.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Responsable et juridiction</h2>
            <p className="mt-3 text-stone">
              Identité de l’éditeur, adresse, statut juridique et juridiction :{" "}
              <strong className="font-medium text-ink">[à compléter avant mise en ligne]</strong>.
              Voir aussi les <Link to="/mentions-legales" className="underline underline-offset-4">mentions légales</Link>.
            </p>
          </section>
        </div>
      </article>
    </SiteShell>
  );
}
