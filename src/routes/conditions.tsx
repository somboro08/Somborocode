import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteShell } from "@/components/layout/site-shell";
import { PAGE_META } from "@/lib/site";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: [
      { title: PAGE_META.conditions.title },
      { name: "description", content: PAGE_META.conditions.description },
    ],
  }),
  component: ConditionsPage,
});

function ConditionsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Conditions d’utilisation"
        title="Un cadre simple pour utiliser ce site."
        description="Ce texte n’est pas un avis juridique. Il décrit le fonctionnement du site et des formulaires."
      />
      <article className="bg-paper text-ink">
        <div className="page-wrap grid max-w-3xl gap-8 py-16 leading-relaxed text-stone">
          <p>
            Le site présente l’activité de Somboro-code et permet d’envoyer une
            demande de projet ou de rendez-vous, sans créer de compte visiteur.
          </p>
          <p>
            Les contenus sont fournis à titre informatif. Ils ne constituent ni
            une offre commerciale ferme, ni un devis, ni un contrat. L’envoi d’un
            formulaire n’engage ni le visiteur ni Somboro-code sur une
            réalisation, un prix ou un délai.
          </p>
          <p>
            Une demande de rendez-vous n’est pas une réservation. Le créneau n’est
            confirmé qu’après validation par Somboro-code.
          </p>
          <p>
            Vous vous engagez à transmettre des informations sincères, sans
            contenu illicite, et à ne pas utiliser les formulaires pour du
            spam ou une tentative d’accès non autorisé.
          </p>
          <p>
            Les données personnelles collectées sont décrites dans la{" "}
            <Link to="/confidentialite" className="text-ink underline underline-offset-4">
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
