import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteShell } from "@/components/layout/site-shell";
import { INTENDED_DOMAIN, PAGE_META } from "@/lib/site";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: PAGE_META.mentions.title },
      { name: "description", content: PAGE_META.mentions.description },
    ],
  }),
  component: MentionsPage,
});

function MentionsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Mentions légales"
        title="Informations de l’éditeur, à compléter avant publication."
        description="Aucun renseignement fictif n’est inventé. Les champs ci-dessous restent vides tant qu’ils n’ont pas été fournis et validés."
      />
      <article className="bg-paper text-ink">
        <dl className="page-wrap grid max-w-3xl gap-8 py-16">
          {[
            ["Nom de la marque", "Somboro-code"],
            ["Domaine souhaité (orthographe fournie, non vérifiée ici)", INTENDED_DOMAIN],
            ["Éditeur / raison sociale", "[à compléter]"],
            ["Forme juridique", "[à compléter]"],
            ["Siège / adresse", "[à compléter]"],
            ["Numéro d’immatriculation", "[à compléter]"],
            ["Responsable de la publication", "[à compléter]"],
            ["Contact", "[à compléter]"],
            ["Hébergeur du site", "[à compléter]"],
          ].map(([term, def]) => (
            <div key={term} className="border-b border-ink/10 pb-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">{term}</dt>
              <dd className="mt-2 text-lg">{def}</dd>
            </div>
          ))}
        </dl>
      </article>
    </SiteShell>
  );
}
