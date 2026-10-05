import { b as Link, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageHero, o as SiteShell, s as Button } from "./router-pb1-4auf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/approche-BdiZGTZJ.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		title: "Vous décrivez le besoin et l’objectif",
		text: "Le formulaire ou un rendez-vous demandé suffisent pour commencer. Un cahier des charges n’est pas obligatoire. Plus le contexte est clair, plus l’examen est utile — sans que cela garantisse une suite."
	},
	{
		title: "Somboro-code étudie la demande et clarifie le périmètre",
		text: "L’agence lit ce qui a été transmis, identifie ce qui manque et formule le périmètre possible. Toute demande n’est pas forcément acceptée. Aucun délai de réponse n’est garanti."
	},
	{
		title: "Les options et les prochaines étapes sont discutées",
		text: "Quand une suite est envisageable, les options sont expliquées : ce qui peut être fait, ce qui ne l’est pas, et ce qu’il faudrait encore décider. Rien n’est engagé à ce stade."
	},
	{
		title: "Le projet peut démarrer après accord",
		text: "Un projet ne commence qu’après un accord sur le périmètre et les modalités. Cet accord n’est pas donné par l’envoi d’un formulaire."
	},
	{
		title: "Réalisation, vérification, mise en ligne, accompagnement",
		text: "Ces étapes sont précisées au cas par cas. La mise en ligne et l’accompagnement se discutent ; ils ne sont pas automatiques, ni livrés selon un calendrier annoncé ici."
	}
];
function ApprochePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Approche",
			title: "Un accompagnement lisible, sans fausse promesse.",
			description: "Voici le chemin type. Il s’adapte. Il ne dit pas que chaque demande sera retenue, ni qu’une réponse arrivera dans un délai fixe."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "page-wrap divide-y divide-ink/10 py-8",
				children: STEPS.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-4 py-10 sm:grid-cols-[5rem_1fr] sm:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm text-stone",
						children: String(index + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl sm:text-3xl",
						children: step.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl leading-relaxed text-stone",
						children: step.text
					})] })]
				}, step.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap flex flex-col gap-5 py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Prêt à décrire le besoin ?"
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
export { ApprochePage as component };
