import { b as Link, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Server, c as Layers, d as ArrowRight, l as Globe, r as Smartphone, u as Bot } from "../_libs/lucide-react.mjs";
import { a as PageHero, o as SiteShell, s as Button } from "./router-pb1-4auf.mjs";
import { t as IconWell } from "./icon-well-blQ4dbKP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BbKxyNIO.js
var import_jsx_runtime = require_jsx_runtime();
var SERVICES = [
	{
		id: "sites",
		icon: Globe,
		title: "Sites web",
		besoin: "site-web",
		text: "Vous pouvez demander une présence web adaptée à un objectif : présenter une activité, publier de l’information, ou faciliter la prise de contact. L’offre n’est pas limitée à une technologie particulière : le choix se discute après le cadrage du besoin."
	},
	{
		id: "web",
		icon: Layers,
		title: "Applications web",
		besoin: "application-web",
		text: "Une application web est un outil accessible depuis un navigateur. Elle peut servir une équipe, des clients ou un usage interne. Somboro-code étudie d’abord ce que l’outil doit permettre, puis les options de réalisation."
	},
	{
		id: "mobile",
		icon: Smartphone,
		title: "Applications mobiles",
		besoin: "application-mobile",
		text: "Un projet mobile commence par le cadrage : public visé, usages essentiels, contraintes connues. Aucune plateforme, aucun coût et aucun délai ne sont supposés ici. Ces points se discutent une fois le besoin compris."
	},
	{
		id: "hebergement",
		icon: Server,
		title: "Hébergement et noms de domaine",
		besoin: "hebergement-domaine",
		text: "L’hébergement et le nom de domaine peuvent être abordés avec l’agence. Ils ne sont ni gratuits, ni inclus par défaut, ni disponibles sans condition. Aucun tarif et aucune disponibilité de nom ne sont publiés sur ce site."
	},
	{
		id: "ia",
		icon: Bot,
		title: "Solutions numériques et IA",
		besoin: "ia-automatisation",
		text: "L’intelligence artificielle n’est pertinente que si le besoin le justifie. Somboro-code l’aborde comme un domaine d’accompagnement à étudier, pas comme une promesse d’automatisation. Aucun résultat, aucune économie et aucune technologie précise ne sont garantis."
	}
];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Services",
			title: "Des accompagnements à cadrer selon votre besoin.",
			description: "Chaque service peut être demandé seul. Le formulaire reprend le type de besoin choisi, pour que l’échange parte du bon endroit."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-wrap-wide divide-y divide-ink/10 py-6",
				children: SERVICES.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: service.id,
					className: "grid gap-6 py-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWell, {
							icon: service.icon,
							tone: "ink"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: service.title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-lg leading-relaxed text-stone",
						children: service.text
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/demarrer",
						search: { besoin: service.besoin },
						className: "mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink",
						children: ["Décrire mon projet", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							strokeWidth: 1.7
						})]
					})] })]
				}, service.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap flex flex-col gap-5 py-16 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-lg",
					children: "Un autre besoin, ou pas encore de certitude ? Indiquez-le simplement."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/demarrer",
							children: "Décrire mon projet"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/rendez-vous",
							children: "Demander un rendez-vous"
						})
					})]
				})]
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
