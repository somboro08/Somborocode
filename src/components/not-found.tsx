import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <SiteShell>
      <section className="page-wrap grid min-h-[60vh] place-content-center gap-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">Erreur 404</p>
        <h1 className="max-w-xl font-display text-4xl tracking-[-0.035em] sm:text-5xl">
          Cette page n’est pas sur le chemin.
        </h1>
        <p className="max-w-lg text-mist">
          Le lien est peut-être ancien, ou la page n’existe pas. Vous pouvez
          revenir à l’accueil ou décrire directement votre besoin.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/">Retour à l’accueil</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/demarrer">Décrire mon projet</Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
