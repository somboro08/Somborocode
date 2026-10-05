import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Globe,
  Layers,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { IconWell } from "@/components/brand/icon-well";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { PAGE_META } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_META.home.title },
      { name: "description", content: PAGE_META.home.description },
    ],
  }),
  component: Home,
});

const EXPERTISES = [
  {
    icon: Globe,
    title: "Sites web",
    text: "Une présence en ligne claire, adaptée à un objectif : informer, présenter une activité, ou recevoir des demandes.",
  },
  {
    icon: Layers,
    title: "Applications web",
    text: "Des outils accessibles depuis un navigateur, conçus autour d’un usage réel plutôt que d’une technologie imposée.",
  },
  {
    icon: Smartphone,
    title: "Applications mobiles",
    text: "Un cadrage d’abord : à qui s’adresse l’application, que doit-elle permettre, et comment la construire sans supposer la plateforme.",
  },
  {
    icon: Server,
    title: "Hébergement et domaines",
    text: "Ces sujets peuvent être discutés avec l’agence. Aucun tarif, aucune gratuité et aucune disponibilité ne sont annoncés ici.",
  },
];

const STEPS = [
  { n: "01", title: "Échange sur le besoin", text: "Vous décrivez l’objectif, le contexte et ce qui pose problème aujourd’hui." },
  { n: "02", title: "Cadrage de la solution", text: "Somboro-code clarifie le périmètre, les options possibles et ce qui reste à décider." },
  { n: "03", title: "Conception et développement", text: "Le travail avance une fois l’accord trouvé. Les étapes concrètes sont précisées au cas par cas." },
  { n: "04", title: "Vérifications", text: "On contrôle ce qui a été convenu avant d’envisager une mise en ligne." },
  { n: "05", title: "Mise en ligne et suite", text: "La mise en ligne et l’accompagnement se font selon ce qui a été décidé ensemble, sans délai fixe." },
];

const AI_TRACKS = [
  "Classer ou orienter des demandes répétitives.",
  "Aider une équipe à retrouver une information interne.",
  "Préparer des réponses à relire, jamais à publier sans contrôle.",
  "Automatiser une tâche simple, si elle est vraiment répétitive.",
];

const FAQ = [
  {
    q: "Quel type de projet peut-on proposer ?",
    a: "Un site, une application web ou mobile, une question d’hébergement ou de nom de domaine, ou une autre solution numérique — y compris une piste d’intelligence artificielle à étudier. Si le besoin n’est pas encore clair, vous pouvez l’indiquer.",
  },
  {
    q: "Faut-il déjà avoir un cahier des charges ?",
    a: "Non. Un cahier des charges aide, mais il n’est pas exigé pour envoyer une demande. L’échange sert justement à clarifier l’objectif et le périmètre.",
  },
  {
    q: "Peut-on demander seulement un site ou une application ?",
    a: "Oui. Vous n’avez pas à combiner plusieurs services. Le formulaire permet de préciser un besoin unique, ou de dire que vous ne savez pas encore.",
  },
  {
    q: "Comment se passe une demande de rendez-vous ?",
    a: "Vous proposez un motif et des disponibilités. Cela ne réserve pas de créneau : Somboro-code examine la demande, puis confirme ou propose une autre suite.",
  },
  {
    q: "L’hébergement et le nom de domaine peuvent-ils être discutés ?",
    a: "Oui, ces besoins peuvent être abordés. Ils ne sont ni gratuits, ni inclus par défaut, ni garantis sans étude. Aucun tarif n’est publié ici.",
  },
];

function Home() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="code-veil pointer-events-none absolute inset-0" />
        <div className="page-wrap-wide relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:py-24">
          <div>
            <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-lime">
              Agence de solutions numériques
            </p>
            <h1 className="reveal reveal-2 mt-5 max-w-[14ch] font-display text-[clamp(2.4rem,1.1rem+5vw,4.6rem)] font-semibold tracking-[-0.04em] text-paper">
              Vos idées méritent des outils numériques bien pensés.
            </h1>
            <p className="reveal reveal-3 mt-6 max-w-xl text-lg leading-relaxed text-mist">
              Somboro-code accompagne la création de sites web, d’applications web
              et mobiles, et d’autres solutions numériques — y compris des pistes
              d’intelligence artificielle à cadrer selon le besoin.
            </p>
            <div className="reveal reveal-4 mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/demarrer">
                  Décrire mon projet
                  <ArrowRight className="size-4" strokeWidth={1.7} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/rendez-vous">Demander un rendez-vous</Link>
              </Button>
            </div>
          </div>
          <aside className="reveal reveal-3 relative overflow-hidden rounded-xl border border-paper/10 bg-ink-soft p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lime">besoin → cadrage → décision</p>
            <div className="mt-6 space-y-5">
              <p className="font-display text-2xl tracking-[-0.03em]">
                D’abord le besoin,
                <span className="text-lime"> ensuite </span>
                la solution.
              </p>
              <p className="text-[0.95rem] leading-relaxed text-mist">
                Pas de témoignages inventés, pas de délais affichés, pas de
                résultats promis. Une méthode simple : clarifier, expliquer,
                décider ensemble.
              </p>
            </div>
            <div className="mt-8 h-px bg-paper/10" />
            <p className="mt-6 text-sm text-mist">
              Réalisations clientes : cette zone attend des projets réels fournis
              par l’agence. Rien n’est publié à leur place.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="page-wrap-wide grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone">Expertises</p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,1.2rem+2vw,2.8rem)]">
              Ce que nous pouvons examiner avec vous.
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-stone">
              Chaque offre reste ouverte : la technologie se choisit après le
              besoin, pas avant.
            </p>
            <Button asChild variant="ink" className="mt-8">
              <Link to="/services">Voir les services</Link>
            </Button>
          </div>
          <ul className="grid gap-0">
            {EXPERTISES.map((item) => (
              <li
                key={item.title}
                className="grid gap-4 border-t border-ink/10 py-8 sm:grid-cols-[auto_1fr] sm:gap-6"
              >
                <IconWell icon={item.icon} tone="ink" />
                <div>
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-stone">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="page-wrap-wide py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">Méthode</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,1.2rem+2vw,2.8rem)]">
            De votre idée à sa mise en ligne
          </h2>
          <p className="mt-4 max-w-2xl text-mist">
            Un processus adaptable. Aucun délai n’est promis : chaque projet a
            son rythme, une fois le périmètre convenu.
          </p>
          <ol className="mt-12 grid gap-0 border-t border-paper/10">
            {STEPS.map((step) => (
              <li
                key={step.n}
                className="grid gap-3 border-b border-paper/10 py-7 sm:grid-cols-[4.5rem_minmax(0,16rem)_1fr] sm:items-baseline sm:gap-8"
              >
                <p className="font-mono text-xs text-lime">{step.n}</p>
                <h3 className="font-display text-xl leading-snug">{step.title}</h3>
                <p className="max-w-xl text-[0.98rem] leading-relaxed text-mist">{step.text}</p>
              </li>
            ))}
          </ol>
          <Button asChild variant="outline" className="mt-10">
            <Link to="/approche">Lire l’approche complète</Link>
          </Button>
        </div>
      </section>

      <section className="bg-paper-2 text-ink">
        <div className="page-wrap-wide grid gap-10 py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <IconWell icon={Bot} tone="ink" />
            <h2 className="mt-6 font-display text-[clamp(1.8rem,1.2rem+2vw,2.8rem)]">
              Solutions numériques et intelligence artificielle
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-stone">
              L’IA n’est pas un service magique. C’est un domaine d’accompagnement
              à étudier : parfois utile, parfois non. Aucun résultat automatique,
              aucune économie garantie, aucune technologie imposée.
            </p>
          </div>
          <ul className="grid gap-3">
            {AI_TRACKS.map((track) => (
              <li
                key={track}
                className="flex gap-4 rounded-md bg-paper px-5 py-4 text-[0.98rem] leading-relaxed"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime-ink" aria-hidden="true" />
                <span>
                  <span className="font-medium">Piste à étudier — </span>
                  {track}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="page-wrap max-w-3xl py-20">
          <IconWell icon={ShieldCheck} />
          <h2 className="mt-6 font-display text-[clamp(1.8rem,1.2rem+2vw,2.8rem)]">
            Notre engagement éditorial
          </h2>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-mist">
            <p>Le besoin est clarifié avant qu’une solution soit proposée.</p>
            <p>Le périmètre est expliqué, y compris ce qui n’est pas inclus.</p>
            <p>Les échanges restent réguliers pendant l’étude et, le cas échéant, le projet.</p>
            <p>Les prochaines étapes se décident ensemble. Une demande n’est ni un devis, ni une réservation.</p>
          </div>
          <p className="mt-8 text-sm text-mist">
            Ces principes décrivent la manière dont Somboro-code souhaite
            travailler. Ils ne s’appuient pas sur des témoignages ou des
            résultats publiés ici.
          </p>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="page-wrap-wide grid gap-12 py-20 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone">Questions</p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,1.2rem+2vw,2.8rem)]">FAQ</h2>
            <p className="mt-4 text-stone">Des réponses directes, sans jargon inutile.</p>
          </div>
          <div>
            {FAQ.map((item) => (
              <details key={item.q} className="group border-t border-ink/10 py-5">
                <summary className="cursor-pointer list-none font-display text-xl tracking-[-0.02em] marker:content-none">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="mt-1 text-stone transition-transform duration-150 group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-stone">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lime text-lime-ink">
        <div className="page-wrap flex flex-col items-start gap-6 py-16 sm:py-20">
          <MonitorSmartphone className="size-8" strokeWidth={1.5} />
          <h2 className="max-w-2xl font-display text-[clamp(1.9rem,1.2rem+2.4vw,3rem)]">
            Un projet en tête ? Décrivez-le, sans créer de compte.
          </h2>
          <p className="max-w-xl text-lime-ink/80">
            Expliquez l’objectif. Somboro-code l’examine, puis précise les
            prochaines étapes. Rien n’est engagé par l’envoi du formulaire.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="ink" size="lg">
              <Link to="/demarrer">Décrire mon projet</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-lime-ink/20">
              <Link to="/rendez-vous">Demander un rendez-vous</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
