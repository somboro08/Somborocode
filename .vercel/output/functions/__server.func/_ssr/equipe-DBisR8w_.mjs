import { o as __toESM } from "../_runtime.mjs";
import { a as INTENDED_DOMAIN, l as needTypeLabel } from "./site-pmmYHv-i.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as Link, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as INQUIRY_STATUS_LABELS } from "./inquiry-schema-DFALNCQ6.mjs";
import { i as listInquiries } from "./inquiry-actions-DSQxZFw7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/equipe-DBisR8w_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function formatDate(value) {
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;
	return new Intl.DateTimeFormat("fr-FR", {
		dateStyle: "medium",
		timeStyle: "short"
	}).format(date);
}
function EquipeIndex() {
	const [rows, setRows] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		listInquiries().then((data) => {
			if (!cancelled) setRows(data);
		}).catch((err) => {
			if (!cancelled) setError(err instanceof Error ? err.message : "Impossible de charger les demandes.");
		});
		return () => {
			cancelled = true;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "page-wrap-wide py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[1.4fr_0.8fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl tracking-[-0.03em]",
					children: "Demandes reçues"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-mist",
					children: "Cet espace est réservé aux personnes autorisées. Toute personne connectée peut actuellement consulter les demandes : une liste d’accès plus stricte reste à configurer."
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "mt-6 rounded-md border border-danger/30 bg-danger/10 px-4 py-3 text-sm",
					children: error
				}) : null,
				rows === null && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-mist",
					children: "Chargement…"
				}) : null,
				rows && rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 rounded-lg border border-paper/10 p-6 text-mist",
					children: "Aucune demande pour le moment."
				}) : null,
				rows && rows.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 divide-y divide-paper/10 rounded-lg border border-paper/10",
					children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/equipe/$id",
						params: { id: row.id },
						className: "grid gap-1 px-4 py-4 hover:bg-paper/4 sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-lime",
								children: row.reference
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: row.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-sm text-mist",
								children: [
									row.kind === "appointment" ? "Rendez-vous" : "Projet",
									" · ",
									row.kind === "appointment" ? row.appointmentMotif : needTypeLabel(row.needType)
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm text-mist",
								children: [
									INQUIRY_STATUS_LABELS[row.status],
									" · ",
									formatDate(row.createdAt)
								]
							})
						]
					}) }, row.id))
				}) : null
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-xl border border-paper/10 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Avant publication publique"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm leading-relaxed text-mist",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Confirmer le contrôle du domaine ",
							INTENDED_DOMAIN,
							" (orthographe distincte de la marque)."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Compléter mentions légales, contact et politique de confidentialité." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Définir qui peut accéder à cet espace, au-delà d’une simple connexion." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Configurer, si besoin, l’envoi d’e-mails et un calendrier réel." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ne pas indexer /equipe, /login ni les données des demandes." })
					]
				})]
			})]
		})
	});
}
//#endregion
export { EquipeIndex as component };
