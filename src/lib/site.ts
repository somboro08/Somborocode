export const BRAND_NAME = "Somboro-code";
export const INTENDED_DOMAIN = "somborocode.site";

export const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/approche", label: "Approche" },
] as const;

export const NEED_TYPES = [
  { value: "site-web", label: "Site web" },
  { value: "application-web", label: "Application web" },
  { value: "application-mobile", label: "Application mobile" },
  { value: "hebergement-domaine", label: "Hébergement ou nom de domaine" },
  { value: "ia-automatisation", label: "Solution IA / automatisation" },
  { value: "autre", label: "Autre besoin numérique" },
  { value: "indetermine", label: "Je ne sais pas encore" },
] as const;

export type NeedType = (typeof NEED_TYPES)[number]["value"];

export const BUDGET_OPTIONS = [
  { value: "indetermine", label: "Pas encore défini" },
  { value: "a-discuter", label: "À discuter ensemble" },
  { value: "petite-enveloppe", label: "Petite enveloppe" },
  { value: "enveloppe-intermediaire", label: "Enveloppe intermédiaire" },
  { value: "enveloppe-importante", label: "Enveloppe importante" },
] as const;

export const CONTACT_PREFERENCES = [
  { value: "email", label: "E-mail" },
  { value: "telephone", label: "Téléphone" },
  { value: "sans-preference", label: "Sans préférence" },
] as const;

export const APPOINTMENT_MOTIFS = [
  { value: "premier-echange", label: "Premier échange sur un projet" },
  { value: "clarifier-besoin", label: "Clarifier un besoin" },
  { value: "hebergement-domaine", label: "Hébergement ou nom de domaine" },
  { value: "autre", label: "Autre" },
] as const;

export function needTypeLabel(value: string | null | undefined) {
  return NEED_TYPES.find((item) => item.value === value)?.label ?? "Non précisé";
}

export const PAGE_META = {
  home: {
    title: "Somboro-code — solutions numériques, sites et applications",
    description:
      "Somboro-code accompagne la création de sites web, d’applications web et mobiles et d’autres solutions numériques. Décrivez votre projet ou demandez un rendez-vous.",
  },
  services: {
    title: "Services numériques — Somboro-code",
    description:
      "Sites web, applications web et mobiles, hébergement, noms de domaine et pistes d’intelligence artificielle : des accompagnements à cadrer selon votre besoin.",
  },
  approche: {
    title: "Notre approche — Somboro-code",
    description:
      "Comment Somboro-code étudie un besoin, clarifie le périmètre et discute des prochaines étapes, sans délai ni acceptation automatiques.",
  },
  demarrer: {
    title: "Décrire mon projet — Somboro-code",
    description:
      "Transmettez votre besoin à Somboro-code. Une demande n’est ni un devis ni un engagement : les prochaines étapes sont précisées après examen.",
  },
  rendezVous: {
    title: "Demander un rendez-vous — Somboro-code",
    description:
      "Proposez un échange avec Somboro-code. Le créneau n’est confirmé qu’après validation par l’agence.",
  },
  confidentialite: {
    title: "Politique de confidentialité — Somboro-code",
    description:
      "Quelles informations Somboro-code demande, pourquoi, et comment une demande de projet ou de rendez-vous est traitée.",
  },
  mentions: {
    title: "Mentions légales — Somboro-code",
    description:
      "Informations légales de la plateforme Somboro-code. Certains champs restent à compléter avant publication publique.",
  },
  conditions: {
    title: "Conditions d’utilisation — Somboro-code",
    description:
      "Cadre d’utilisation du site Somboro-code et des formulaires de demande. Ce texte n’est pas un avis juridique.",
  },
  login: {
    title: "Espace équipe — Somboro-code",
    description: "Connexion réservée aux personnes autorisées à traiter les demandes.",
  },
  equipe: {
    title: "Demandes — espace équipe Somboro-code",
    description: "Consultation des demandes de projet et de rendez-vous, réservée aux personnes autorisées.",
  },
  notFound: {
    title: "Page introuvable — Somboro-code",
    description: "Cette page n’existe pas. Revenez à l’accueil ou décrivez votre projet.",
  },
} as const;
