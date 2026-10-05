import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { PAGE_META } from "@/lib/site";

export const Route = createFileRoute("/approche")({
  head: () => ({
    meta: [
      { title: PAGE_META.approche.title },
      { name: "description", content: PAGE_META.approche.description },
    ],
  }),
  component: ApprochePage,
});

const STEPS = [
  {
    title: "Vous décrivez le besoin et l’objectif",
    text: "Le formulaire ou un rendez-vous demandé suffisent pour commencer. Un cahier des charges n’est pas obligatoire. Plus le contexte est clair, plus l’examen est utile — sans que cela garantisse une suite.",
  },
  {
    title: "Somboro-code étudie la demande et clarifie le périmètre",
    text: "L’agence lit ce qui a été transmis, identifie ce qui manque et formule le périmètre possible. Toute demande n’est pas forcément acceptée. Aucun délai de réponse n’est garanti.",
  },
  {
    title: "Les options et les prochaines étapes sont discutées",
    text: "Quand une suite est envisageable, les options sont expliquées : ce qui peut être fait, ce qui ne l’est pas, et ce qu’il faudrait encore décider. Rien n’est engagé à ce stade.",
  },
  {
    title: "Le projet peut démarrer après accord",
    text: "Un projet ne commence qu’après un accord sur le périmètre et les modalités. Cet accord n’est pas donné par l’envoi d’un formulaire.",
  },
  {
    title: "Réalisation, vérification, mise en ligne, accompagnement",
    text: "Ces étapes sont précisées au cas par cas. La mise en ligne et l’accompagnement se discutent ; ils ne sont pas automatiques, ni livrés selon un calendrier annoncé ici.",
  },
];

function ApprochePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Approche"
        title="Un accompagnement lisible, sans fausse promesse."
        description="Voici le chemin type. Il s’adapte. Il ne dit pas que chaque demande sera retenue, ni qu’une réponse arrivera dans un délai fixe."
      />
      <section className="bg-paper text-ink">
        <ol className="page-wrap divide-y divide-ink/10 py-8">
          {STEPS.map((step, index) => (
            <li key={step.title} className="grid gap-4 py-10 sm:grid-cols-[5rem_1fr] sm:gap-10">
              <p className="font-mono text-sm text-stone">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl">{step.title}</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-stone">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-ink">
        <div className="page-wrap flex flex-col gap-5 py-16">
          <h2 className="font-display text-3xl">Prêt à décrire le besoin ?</h2>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/demarrer">Décrire mon projet</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/rendez-vous">Demander un rendez-vous</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
