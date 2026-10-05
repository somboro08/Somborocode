import { b as Link, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageHero, o as SiteShell } from "./router-pb1-4auf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/conditions-C07zP15k.js
var import_jsx_runtime = require_jsx_runtime();
function ConditionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Conditions d’utilisation",
		title: "Un cadre simple pour utiliser ce site.",
		description: "Ce texte n’est pas un avis juridique. Il décrit le fonctionnement du site et des formulaires."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap grid max-w-3xl gap-8 py-16 leading-relaxed text-stone",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Le site présente l’activité de Somboro-code et permet d’envoyer une demande de projet ou de rendez-vous, sans créer de compte visiteur." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Les contenus sont fournis à titre informatif. Ils ne constituent ni une offre commerciale ferme, ni un devis, ni un contrat. L’envoi d’un formulaire n’engage ni le visiteur ni Somboro-code sur une réalisation, un prix ou un délai." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Une demande de rendez-vous n’est pas une réservation. Le créneau n’est confirmé qu’après validation par Somboro-code." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Vous vous engagez à transmettre des informations sincères, sans contenu illicite, et à ne pas utiliser les formulaires pour du spam ou une tentative d’accès non autorisé." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Les données personnelles collectées sont décrites dans la",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/confidentialite",
						className: "text-ink underline underline-offset-4",
						children: "politique de confidentialité"
					}),
					"."
				] })
			]
		})
	})] });
}
//#endregion
export { ConditionsPage as component };
