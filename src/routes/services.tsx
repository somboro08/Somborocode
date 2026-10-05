import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Globe, Layers, Server, Smartphone } from "lucide-react";
import { IconWell } from "@/components/brand/icon-well";
import { PageHero, SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { PAGE_META } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: PAGE_META.services.title },
      { name: "description", content: PAGE_META.services.description },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    id: "sites",
    icon: Globe,
    title: "Sites web",
    besoin: "site-web",
    text: "Vous pouvez demander une présence web adaptée à un objectif : présenter une activité, publier de l’information, ou faciliter la prise de contact. L’offre n’est pas limitée à une technologie particulière : le choix se discute après le cadrage du besoin.",
  },
  {
    id: "web",
    icon: Layers,
    title: "Applications web",
    besoin: "application-web",
    text: "Une application web est un outil accessible depuis un navigateur. Elle peut servir une équipe, des clients ou un usage interne. Somboro-code étudie d’abord ce que l’outil doit permettre, puis les options de réalisation.",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Applications mobiles",
    besoin: "application-mobile",
    text: "Un projet mobile commence par le cadrage : public visé, usages essentiels, contraintes connues. Aucune plateforme, aucun coût et aucun délai ne sont supposés ici. Ces points se discutent une fois le besoin compris.",
  },
  {
    id: "hebergement",
    icon: Server,
    title: "Hébergement et noms de domaine",
    besoin: "hebergement-domaine",
    text: "L’hébergement et le nom de domaine peuvent être abordés avec l’agence. Ils ne sont ni gratuits, ni inclus par défaut, ni disponibles sans condition. Aucun tarif et aucune disponibilité de nom ne sont publiés sur ce site.",
  },
  {
    id: "ia",
    icon: Bot,
    title: "Solutions numériques et IA",
    besoin: "ia-automatisation",
    text: "L’intelligence artificielle n’est pertinente que si le besoin le justifie. Somboro-code l’aborde comme un domaine d’accompagnement à étudier, pas comme une promesse d’automatisation. Aucun résultat, aucune économie et aucune technologie précise ne sont garantis.",
  },
];

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Des accompagnements à cadrer selon votre besoin."
        description="Chaque service peut être demandé seul. Le formulaire reprend le type de besoin choisi, pour que l’échange parte du bon endroit."
      />
      <section className="bg-paper text-ink">
        <div className="page-wrap-wide divide-y divide-ink/10 py-6">
          {SERVICES.map((service) => (
            <article key={service.id} id={service.id} className="grid gap-6 py-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
              <div className="flex items-start gap-4">
                <IconWell icon={service.icon} tone="ink" />
                <h2 className="font-display text-3xl">{service.title}</h2>
              </div>
              <div>
                <p className="max-w-2xl text-lg leading-relaxed text-stone">{service.text}</p>
                <Link
                  to="/demarrer"
                  search={{ besoin: service.besoin }}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink"
                >
                  Décrire mon projet
                  <ArrowRight className="size-4" strokeWidth={1.7} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-ink">
        <div className="page-wrap flex flex-col gap-5 py-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg">Un autre besoin, ou pas encore de certitude ? Indiquez-le simplement.</p>
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
