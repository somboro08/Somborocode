import { a as INTENDED_DOMAIN } from "./site-pmmYHv-i.mjs";
import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageHero, o as SiteShell } from "./router-pb1-4auf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mentions-legales-De8rDwhq.js
var import_jsx_runtime = require_jsx_runtime();
function MentionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Mentions légales",
		title: "Informations de l’éditeur, à compléter avant publication.",
		description: "Aucun renseignement fictif n’est inventé. Les champs ci-dessous restent vides tant qu’ils n’ont pas été fournis et validés."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "page-wrap grid max-w-3xl gap-8 py-16",
			children: [
				["Nom de la marque", "Somboro-code"],
				["Domaine souhaité (orthographe fournie, non vérifiée ici)", INTENDED_DOMAIN],
				["Éditeur / raison sociale", "[à compléter]"],
				["Forme juridique", "[à compléter]"],
				["Siège / adresse", "[à compléter]"],
				["Numéro d’immatriculation", "[à compléter]"],
				["Responsable de la publication", "[à compléter]"],
				["Contact", "[à compléter]"],
				["Hébergeur du site", "[à compléter]"]
			].map(([term, def]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-ink/10 pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs font-semibold uppercase tracking-[0.16em] text-stone",
					children: term
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-2 text-lg",
					children: def
				})]
			}, term))
		})
	})] });
}
//#endregion
export { MentionsPage as component };
