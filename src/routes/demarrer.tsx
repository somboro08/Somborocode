import { createFileRoute } from "@tanstack/react-router";
import { ProjectForm } from "@/components/forms/project-form";
import { PageHero, SiteShell } from "@/components/layout/site-shell";
import { PAGE_META } from "@/lib/site";

type DemarrerSearch = {
  besoin?: string;
};

export const Route = createFileRoute("/demarrer")({
  validateSearch: (search: Record<string, unknown>): DemarrerSearch => ({
    besoin: typeof search.besoin === "string" ? search.besoin : undefined,
  }),
  head: () => ({
    meta: [
      { title: PAGE_META.demarrer.title },
      { name: "description", content: PAGE_META.demarrer.description },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: DemarrerPage,
});

function DemarrerPage() {
  const { besoin } = Route.useSearch();
  return (
    <SiteShell>
      <PageHero
        eyebrow="Décrire mon projet"
        title="Racontez le besoin, pas la solution."
        description="Aucun compte n’est demandé. Une demande n’est ni un devis ni un engagement. Les prochaines étapes seront précisées après examen."
      />
      <section className="bg-paper text-ink">
        <div className="page-wrap grid gap-10 py-16 lg:grid-cols-[1fr_0.7fr] lg:items-start">
          <div className="rounded-xl bg-ink p-5 text-paper sm:p-8">
            <ProjectForm presetNeed={besoin} />
          </div>
          <aside className="rounded-xl border border-ink/10 p-6">
            <h2 className="font-display text-xl">Après l’envoi</h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-stone">
              <li>1. La demande est enregistrée de façon durable.</li>
              <li>2. Somboro-code l’examine. Aucun délai de réponse n’est promis.</li>
              <li>3. Les prochaines étapes, s’il y en a, sont précisées ensuite.</li>
            </ol>
            <p className="mt-6 text-sm text-stone">
              Si l’enregistrement échoue, un message d’erreur s’affiche : vous
              pourrez réessayer. Un succès n’apparaît que si la demande a bien
              été sauvegardée.
            </p>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
