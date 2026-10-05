import { t as GROK_PROVIDERS } from "./server-BVbbReNd.mjs";
import { t as BrandMark } from "./logo-DYH6tV80.mjs";
import { b as Link, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as signIn } from "./client-IWHfIGH2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DY8bw6ol.js
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center bg-ink px-5 text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-xl border border-paper/10 bg-ink-soft p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-3xl tracking-[-0.03em]",
					children: "Espace équipe"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-mist",
					children: "Connexion réservée aux personnes autorisées à consulter et traiter les demandes. Les visiteurs n’ont pas besoin de compte pour écrire à Somboro-code."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-2",
					children: GROK_PROVIDERS.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => signIn(provider.providerId, { callbackURL: "/equipe" }),
						className: "h-12 rounded-full border border-paper/15 px-4 text-sm font-medium hover:border-lime/50 hover:bg-paper/5",
						children: ["Continuer avec ", provider.label]
					}, provider.providerId))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-lime underline-offset-4 hover:underline",
						children: "Retour au site"
					})
				})
			]
		})
	});
}
//#endregion
export { Login as component };
